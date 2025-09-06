const toggleBtn = document.getElementById("toggle");
const clearBtn = document.getElementById("clear");
const container = document.getElementById("highlights");

let enabled = false;

// Toggle pen mode
toggleBtn.addEventListener("click", () => {
  enabled = !enabled;
  toggleBtn.textContent = enabled ? "Disable Highlighter ❌" : "Enable Highlighter ✏️";

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "toggle", enabled });
  });
});

// Load saved highlights
function loadHighlights() {
  container.innerHTML = "";
  chrome.storage.local.get({ highlights: [] }, (data) => {
    data.highlights.forEach((text) => {
      const div = document.createElement("div");
      div.className = "highlight";
      div.textContent = text;
      container.appendChild(div);
    });
  });
}

clearBtn.addEventListener("click", () => {
  chrome.storage.local.set({ highlights: [] }, loadHighlights);
});

loadHighlights();
