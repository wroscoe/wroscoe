document.addEventListener('DOMContentLoaded', function() {
  // Load all components with the data-component attribute
  const componentElements = document.querySelectorAll('[data-component]');
  
  componentElements.forEach(element => {
    const componentName = element.getAttribute('data-component');
    
    fetch(`/components/${componentName}.html`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Component not found');
        }
        return response.text();
      })
      .then(html => {
        element.innerHTML = html;
      })
      .catch(error => {
        console.error(`Error loading component ${componentName}:`, error);
      });
  });
});
