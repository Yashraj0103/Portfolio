// Initialize Lucide icons
    lucide.createIcons();

    // State management
    let activeTab = "About";
    const tabs = ["About", "Skills", "Resume", "Project", "Contact"];

    // Create navigation tabs
    function createTabs() {
      const tabsContainer = document.getElementById('tabs-container');
      tabsContainer.innerHTML = '';
      
      tabs.forEach(tab => {
        const button = document.createElement('button');
        button.className = activeTab === tab ? 'tab-button active' : 'tab-button inactive';
        button.textContent = tab;
        button.onclick = () => changeTab(tab);
        tabsContainer.appendChild(button);
      });
    }

    // Update active tab styling
    function updateActiveTab(tabName) {
      const buttons = document.querySelectorAll('.tab-button');
      buttons.forEach(button => {
        if (button.textContent === tabName) {
          button.classList.remove('inactive');
          button.classList.add('active');
        } else {
          button.classList.remove('active');
          button.classList.add('inactive');
        }
      });
    }

    // Tab switching function
    function changeTab(tabName) {
      activeTab = tabName;
      
      // Hide all sections
      document.querySelectorAll('#content-area > div').forEach(section => {
        section.style.display = 'none';
      });
      
      // Show active section
      document.getElementById(`${tabName.toLowerCase()}-section`).style.display = 'block';
      
      // Update active tab styling
      updateActiveTab(tabName);
      
      // Animate progress bars when Skills section is shown
      if (tabName === 'Skills') {
        animateProgressBars();
      }
    }
    
    // Animate progress bars
    function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress-bar-fill');
  progressBars.forEach(bar => {
    const targetWidth = bar.getAttribute('data-width') || '0%';
    bar.style.width = '0'; // Reset
    setTimeout(() => {
      bar.style.width = targetWidth;
    }, 100);
  });
}

    
    // Show toast notification
    function showToast() {
      const toast = document.getElementById('toast');
      toast.classList.add('show');
      
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
    }
    
    // Contact form handling
    document.getElementById('contact-form').addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Reset form
      this.reset();
      
      // Show toast
      showToast();
    });
    


    // Hire me button
    document.querySelector('.btn-outline')?.addEventListener('click', function(e) {
      e.preventDefault();
      changeTab('Contact');
    });
    
    // Initialize
    document.addEventListener('DOMContentLoaded', () => {
      createTabs();
      changeTab('About');
    });
  