/**
 * Копирует сайт АФЛ в папку www для Capacitor
 */
const fs = require("fs");
const path = require("path");

const src = path.join(__dirname, "..", "..", "afl-site");
const dest = path.join(__dirname, "..", "www");

function copyRecursive(from, to) {
  if (!fs.existsSync(from)) {
    console.error("Источник не найден:", from);
    process.exit(1);
  }
  fs.mkdirSync(to, { recursive: true });
  for (const name of fs.readdirSync(from)) {
    if (name === "node_modules" || name === ".git") continue;
    const s = path.join(from, name);
    const d = path.join(to, name);
    if (fs.statSync(s).isDirectory()) copyRecursive(s, d);
    else fs.copyFileSync(s, d);
  }
}

// очистка www
if (fs.existsSync(dest)) fs.rmSync(dest, { recursive: true, force: true });
copyRecursive(src, dest);
console.log("Скопировано:", src, "→", dest);
