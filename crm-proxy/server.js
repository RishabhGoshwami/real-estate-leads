const express = require("express");
const cors = require("cors");

// Node-fetch ko compatible tarike se import karna
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.post("/api/submit-lead", async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const authKey = "VndsbUlpKzhKdWpEbEZNSUNva2t1UT09";

    const apiUrl = `https://app.propertyexpertrealtors.com/api/getRecords.php?authentication_key=${authKey}&leads_full_name=${encodeURIComponent(
      name
    )}&leads_phone_number=${encodeURIComponent(
      phone
    )}&leads_email_id=${encodeURIComponent(
      email
    )}&leads_type=LEAD&leads_source=Nirala Gateway&leads_re_source=www.niralaworld.org&leads_projects_name=Nirala Gateway&leads_entry_type=Website`;

    const response = await fetch(apiUrl, { method: "GET" });

    // Kabhi API HTML return karti hai error me, isliye try-catch JSON parse ke liye bhi
    let data;
    try {
      data = await response.json();
    } catch (err) {
      const text = await response.text();
      console.error("Non-JSON response:", text);
      return res
        .status(500)
        .json({ success: false, message: "Invalid API response" });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
