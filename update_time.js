const fs = require("fs");

function getCurrentTime() {
    const options = { timeZone: "Asia/Jakarta", hour12: false };
    return new Date().toLocaleString("id-ID", options);
}

const readmePath = "README.md";
const readmeContent = fs.readFileSync(readmePath, "utf8");

// Cari dan ganti bagian waktu di README
const updatedReadme = readmeContent.replace(
    /### 🕒 Waktu Sekarang:.+/,
    `### 🕒 Waktu Sekarang: ${getCurrentTime()} WIB`
);

fs.writeFileSync(readmePath, updatedReadme);
