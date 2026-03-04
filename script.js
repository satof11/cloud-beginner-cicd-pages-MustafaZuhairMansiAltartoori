const message = document.getElementById("message");
const changeText = document.getElementById("changeText");
const reset = document.getElementById("reset");
const countEl = document.getElementById("count");
const toggleMode = document.getElementById("toggleMode");

let count = 0;

const msgs = [
  "CI runs checks automatically after each push ✅",
  "CD deploys your site to GitHub Pages 🚀",
  "A green check in Actions means the workflow succeeded 🟢",
  "Automation = faster releases + fewer mistakes ⚙️"
];

changeText.addEventListener("click", () => {
  count++;
  countEl.textContent = String(count);
  const pick = msgs[Math.floor(Math.random() * msgs.length)];
  message.textContent = pick;
});

reset.addEventListener("click", () => {
  count = 0;
  countEl.textContent = "0";
  message.textContent = "Click the button to change this message.";
});

toggleMode.addEventListener("click", () => {
  document.body.classList.toggle("light");
});