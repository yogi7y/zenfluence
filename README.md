# Zenfluence

A simple Chrome extension that hides UI elements in Confluence pages for distraction-free writing.

## Features

- Hides specific UI elements in Confluence pages
- Toggle visibility with keyboard shortcut: `Ctrl+Shift+Z` (Windows) or `Cmd+Shift+Z` (Mac)
- Automatically handles dynamically loaded elements
- Creates a clean, focused writing environment

## Installation

1. Clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode"
4. Click "Load unpacked" and select the repository folder

## Usage

1. Navigate to any Confluence page
2. Press `Ctrl/Cmd+Shift+Z` to toggle zen mode on/off
3. Enjoy distraction-free writing and editing!

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

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License
