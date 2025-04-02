const dropDown = document.getElementById('page-show');
const dropDownContent = document.getElementById('page-content');
const container = document.getElementById('scrollableContainer1');
const container2 = document.getElementById('scrollableContainer2');
const scrollLeft = document.getElementById('scrollLeft');
const scrollRight = document.getElementById('scrollRight');
// Get parent and child elements
// Select all elements with the class "featured-item"
const featuredItems = document.querySelectorAll('.featured-item');

// Add hover functionality to each parent
featuredItems.forEach((item) => {
    const actions = item.querySelector('.actions'); // Find the child with the "actions" class

    // Show the actions on hover
    item.addEventListener('mouseenter', () => {
        actions.style.display = 'block'; // Make the child visible
    });
    // Hide the actions when the hover ends
    item.addEventListener('mouseleave', () => {
        actions.style.display = 'none'; // Hide the child
    });
})

// Pages Dropdown
dropDown.addEventListener('click', function () {
    dropDownContent.classList.toggle('show');
    dropDownContent.style.display = dropDownContent.style.display === 'flex' ? 'none' : 'flex';
});


scrollLeft.addEventListener('click', () => {
    container.scrollBy({
        left: -150, behavior: 'smooth', transition: '.2s ease'
    });container2.scrollBy({
        left: -150, behavior: 'smooth', transition: '.2s ease'
    }); // Scroll left by 150px
});

scrollRight.addEventListener('click', () => {
    container.scrollBy({ left: 150, behavior: 'smooth' }); // Scroll right by 150px
    container2.scrollBy({ left: 150, behavior: 'smooth' }); // Scroll right by 150px
});