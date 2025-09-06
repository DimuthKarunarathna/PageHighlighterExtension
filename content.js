let penEnabled = false;

// Listen for popup toggle
chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "toggle") {
    penEnabled = message.enabled;
    document.body.style.cursor = penEnabled
      ? "url('https://cdn-icons-png.flaticon.com/512/1995/1995539.png') 0 20, auto"
      : "auto";
  }
});

// Highlight selected text on mouseup
document.addEventListener("mouseup", () => {
  if (!penEnabled) return;

  const selection = window.getSelection();
  if (!selection.rangeCount) return;

  const text = selection.toString().trim();
  if (!text) return;

  const range = selection.getRangeAt(0);
  const span = document.createElement("span");
  span.style.backgroundColor = "yellow";
  span.style.padding = "2px";
  span.textContent = text;

  range.deleteContents();
  range.insertNode(span);

  // Save highlighted text
  chrome.storage.local.get({ highlights: [] }, (data) => {
    const updated = [...data.highlights, text];
    chrome.storage.local.set({ highlights: updated });
  });

  // Clear selection so it doesn’t look highlighted twice
  selection.removeAllRanges();
});
