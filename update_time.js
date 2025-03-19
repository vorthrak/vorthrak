const fs = require("fs");

function getCurrentTime() {
    const options = { timeZone: "Asia/Jakarta", hour12: false };
    return new Date().toLocaleString("id-ID", options);
}

const timeString = `### 🕒 Waktu Sekarang: ${getCurrentTime()} WIB`;

fs.writeFileSync("TIME.md", timeString);
