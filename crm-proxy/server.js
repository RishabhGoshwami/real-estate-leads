const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

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
    )}&leads_phone_number=${encodeURIComponent(phone)}&leads_email_id=${encodeURIComponent(
      email
    )}&leads_type=LEAD&leads_source=Nirala Gateway&leads_re_source=www.niralaworld.org&leads_projects_name=Nirala Gateway&leads_entry_type=Website`;

    const response = await fetch(apiUrl, { method: "GET" });
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
