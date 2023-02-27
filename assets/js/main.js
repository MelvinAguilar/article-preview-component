// Get all tooltip elements
const tooltipElements = document.querySelectorAll(".js-toggle-tip");

// Helper function to toggle the aria-expanded attribute
const toggleExpanded = (element) => {
  const expanded = element.getAttribute("aria-expanded") === "true";
  element.setAttribute("aria-expanded", !expanded);
};

// Helper function to hide all tooltip elements
const hideTooltips = () => {
  tooltipElements.forEach((element) =>
    element.setAttribute("aria-expanded", false)
  );
};

// Event listener for keydown on document (If the Escape key is pressed, hide all tooltips)
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    hideTooltips();
  }
});

// Event listener for click on any element outside of the tooltip and the tooltip
document.addEventListener("click", (event) => {
  // If the click target is not a tooltip element or a child of a tooltip element, hide all tooltips
  if (
    !event.target.closest(".js-tooltip") &&
    !event.target.matches(".js-toggle-tip *")
  ) {
    hideTooltips();
  }
});

// Event listener for click on tooltip elements
tooltipElements.forEach((element) => {
  element.addEventListener("click", (event) => {
    // Toggle the aria-expanded attribute of the clicked tooltip element
    toggleExpanded(element);
    // Hide all other tooltip elements
    tooltipElements.forEach((el) => {
      if (el !== element) {
        el.setAttribute("aria-expanded", false);
      }
    });

    event.stopPropagation();
  });
});
