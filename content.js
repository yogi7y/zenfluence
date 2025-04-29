// Zenfluence simple content script
let zenModeActive = true; // Start with Zen mode active
let headerObserver = null;

// List of selectors to hide - just add new ones to this array
const elementsToHide = [
  '[data-testid="object-header-container"]',
  '[data-testid="grid-topNav"]',
  '[data-testid="ak-editor-main-toolbar"]',
  '[data-testid="toolbar-above-title-wrapper"]',
  '[data-testid="content-topper-wrapper"]',
  '[data-testid="blank-page-quick-actions-container"]',
  '[data-testid="object-sidebar-container"]',
  '[data-testid="help-menu-wrapper"]',
  "#side-navigation",
];

// Function to toggle elements visibility
function toggleElementsVisibility() {
  zenModeActive = !zenModeActive;

  if (zenModeActive) {
    hideElements();
    setupObserver();
  } else {
    showElements();
    disconnectObserver();
  }
}

// Function to hide all specified elements
function hideElements() {
  elementsToHide.forEach((selector) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      element.style.display = "none";
    });
  });
}

// Function to show all specified elements
function showElements() {
  elementsToHide.forEach((selector) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      element.style.display = "";
    });
  });
}

// Setup observer to handle dynamically added elements
function setupObserver() {
  // Disconnect any existing observer
  disconnectObserver();

  // Create new observer
  headerObserver = new MutationObserver(() => {
    hideElements();
  });

  // Start observing
  headerObserver.observe(document.body, { childList: true, subtree: true });
}

// Disconnect the mutation observer
function disconnectObserver() {
  if (headerObserver) {
    headerObserver.disconnect();
    headerObserver = null;
  }
}

// Listen for keyboard shortcut (Ctrl+Shift+Z)
document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "z") {
    toggleElementsVisibility();
  }
});

// Initialize on page load
hideElements();
setupObserver();
