# Zenfluence

A simple Chrome extension that hides UI elements in Confluence pages for distraction-free writing.

## Features

- Hides specific UI elements in Confluence pages
- Toggle visibility with keyboard shortcut: `Ctrl+Shift+Z`
- Automatically handles dynamically loaded elements
- Easily customizable: just add selectors to the list in content.js

## Installation

1. Clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode"
4. Click "Load unpacked" and select the repository folder

## Usage

1. Navigate to any Confluence page
2. Press `Ctrl+Shift+Z` to toggle element visibility

## Customization

To hide additional UI elements:

1. Open `content.js`
2. Add your selectors to the `elementsToHide` array:

```javascript
const elementsToHide = [
  '[data-testid="object-header-container"]',
  // Add your selectors here:
  '[data-testid="another-element"]',
  ".some-class",
  "#some-id",
];
```

## Development

### Project Structure

- `manifest.json` - Extension configuration
- `content.js` - Script that runs on Confluence pages
- `content-styles.css` - Styles injected into Confluence pages
- `popup.html` - Extension popup UI
- `popup.js` - JavaScript for the popup
- `popup.css` - Styles for the popup
- `icons/` - Extension icons

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License
