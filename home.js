const navButtons = document.querySelectorAll('.nav-btn');

// Add a click event listener for each button
navButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Get the target content id (from the data-target attribute)
    const targetId = button.getAttribute('data-target');
    
    // Hide all navigation contents by removing the 'active' class
    const allNavContents = document.querySelectorAll('.nav-content');
    allNavContents.forEach(content => {
      content.classList.remove('active');
    });
    
    // Show the selected navigation content by adding the 'active' class
    const targetContent = document.querySelector(targetId);
    if (targetContent) {
      targetContent.classList.add('active');
    }
  });
});
// document.querySelector('.fa-github').addEventListener('click', function(){

// })
function showSidebar(){
    const sidebar= document.querySelector('.navbar2')
    sidebar.style.display='flex'
}
function hideSidebar(){
    const sidebar= document.querySelector('.navbar2')
    sidebar.style.display='none'
}
    // const sidebar= document.querySelector('.fa-x')
    // sidebar.style.display='none'
    const navButtons2 = document.querySelectorAll('.nav-btn-2');

    // Add a click event listener for each button
    navButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Get the target content id (from the data-target attribute)
        const targetId = button.getAttribute('data-target');
        
        // Hide all navigation contents by removing the 'active' class
        const allNavContents = document.querySelectorAll('.nav-content-1');
        allNavContents.forEach(content => {
          content.classList.remove('active');
        });
        
        // Show the selected navigation content by adding the 'active' class
        const targetContent = document.querySelector(targetId);
        if (targetContent) {
          targetContent.classList.add('active');
        }
      });
    });
    