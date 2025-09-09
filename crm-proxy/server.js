const express = require("express");
const cors = require("cors");

// node-fetch compatible import
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// flexible success detector
function isSuccessResponse(d) {
  if (!d) return false;
  try {
    if (typeof d === "object") {
      if (d.success === true) return true;
      if (d.status && typeof d.status === "string" && ["success", "ok"].includes(d.status.toLowerCase()))
        return true;
      if (d.message && /success|submitted|ok/i.test(d.message)) return true;
      if (d.lead_id || d.leads_id || d.id) return true;
    }
    if (typeof d === "string") {
      if (/submitted successfully|lead.*submitted|success|ok/i.test(d)) return true;
    }
  } catch (e) {
    // ignore and return false
  }
  return false;
}

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

    // First try to parse JSON
    let data;
    try {
      data = await response.json();
    } catch (err) {
      // Not JSON: read text and look for success-like keywords
      const text = await response.text();
      if (/(submitted successfully|lead.*submitted|success|ok)/i.test(text)) {
        return res.status(200).json({
          success: true,
          message: "🎉 Thank you! Your details have been submitted successfully.",
        });
      } else {
        console.error("Non-JSON response from CRM:", text);
        return res.status(500).json({ success: false, message: "Invalid API response" });
      }
    }

    // If parsed JSON, inspect it
    if (isSuccessResponse(data)) {
      return res.status(200).json({
        success: true,
        message: "🎉 Thank you! Your details have been submitted successfully.",
      });
    } else {
      // CRM returned JSON but not success — forward a clean error
      return res.status(400).json({
        success: false,
        message: data.message || "❌ Failed to submit lead to CRM",
        crm: data, // optional: remove if you don't want to expose CRM payload
      });
    }
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
