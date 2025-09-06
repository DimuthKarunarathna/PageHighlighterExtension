# Page Highlighter Extension

A simple but powerful Chrome extension that allows you to highlight text on any webpage and save it for later. Never lose track of important information again!

## Features

*   **Easy Highlighting:** Activate the highlighter pen with a single click and select text to highlight it in yellow.
*   **Save & Revisit:** Every highlight is automatically saved along with a link to the source page.
*   **Centralized View:** See all your saved highlights in a clean, organized list within the extension popup.
*   **Quick Navigation:** Click on a saved highlight's source link to instantly jump back to the original page.
*   **Persistent Storage:** Your highlights are saved locally and will be there even after you close your browser.
*   **Clear All:** A simple button to clear all your saved highlights and start fresh.

## Demo

<video src="https://raw.githubusercontent.com/DimuthKarunarathna/PageHighlighterExtension/main/demo/demo.mp4" width="100%" controls autoplay muted loop>
  Your browser does not support the video tag. You can <a href="https://raw.githubusercontent.com/DimuthKarunarathna/PageHighlighterExtension/main/demo/demo.mp4">download the video here</a>.
</video>

## How to Install and Use

Since this extension is not on the Chrome Web Store, you can load it locally by following these steps:

1.  **Download the Code:**
    *   Clone this repository or download it as a ZIP file and unzip it.
    ```bash
    git clone https://github.com/DimuthKarunarathna/PageHighlighterExtension.git
    ```

2.  **Load the Extension in Chrome:**
    *   Open your Google Chrome browser.
    *   Navigate to `chrome://extensions`.
    *   In the top-right corner, toggle on **"Developer mode"**.
    *   Click the **"Load unpacked"** button that appears on the top-left.
    *   Select the `PageHighlighterExtension` folder from where you cloned/unzipped it.

3.  **Start Highlighting!**
    *   You should now see the Highlighter Pen icon in your extensions toolbar. Pin it for easy access!
    *   Click the icon to open the popup.
    *   Click **"Enable Highlighter"**. Your cursor will turn into a pen.
    *   Go to any webpage and select text to highlight it.
    *   Open the popup again to see your saved highlights and their source links!

## How It Works

The extension is built with a few key files:

*   `manifest.json`: The core file that defines the extension's properties, permissions, and which scripts to run.
*   `content.js`: This script is injected into every webpage. It listens for mouse selections when the pen is enabled, creates the visual highlight on the page, and saves the text and URL to `chrome.storage`.
*   `popup.html`: Defines the structure and style of the extension's popup window.
*   `popup.js`: This script manages the extension's popup window. It handles toggling the highlighter pen, loading and displaying the saved highlights, and clearing the storage.

## Future Improvements

This is just the beginning! Here are some ideas for future features:

*   Ability to delete individual highlights.
*   Support for multiple highlight colors.
*   Exporting highlights to a text or markdown file.
*   Syncing highlights across different devices using `chrome.storage.sync`.

---

*This project was created by Dimuth Karunarathna.*
