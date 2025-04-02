 // Sample data (food items)
 const foodItems = [
    "Blue diamond almonds", 
    "Angie's Boomchickapop Corn", 
    "Salty kettle Corn", 
    "Chobani Greek Yogurt", 
    "Sweet Vanilla Yogurt", 
    "Foster Farms Takeout Crispy wings", 
    "Warrior Blend Organic", 
    "Chao Cheese Creamy", 
    "Chicken meatballs"
];

// Function to shuffle array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to check if element would overflow
function wouldOverflow(element, text) {
    // Create a temporary element to measure text width
    const temp = document.createElement('span');
    temp.style.visibility = 'hidden';
    temp.style.position = 'absolute';
    temp.style.whiteSpace = 'nowrap';
    temp.style.font = window.getComputedStyle(element).font;
    temp.textContent = text;
    document.body.appendChild(temp);
    
    const textWidth = temp.offsetWidth;
    document.body.removeChild(temp);
    
    // Add padding to account for the padding in the actual element
    const availableWidth = element.offsetWidth - 32; // subtracting padding
    
    return textWidth > availableWidth;
}

// Function to populate the bento grid
function populateBentoGrid() {
    const bentoGrid = document.getElementById('bento-grid');
    const shuffledItems = shuffleArray([...foodItems, ...foodItems]); // Duplicate to have more items
    
    // Clear the grid
    bentoGrid.innerHTML = '';
    
    // Add items to the grid
    shuffledItems.forEach(item => {
        const bentoItem = document.createElement('div');
        bentoItem.className = 'bento-item';
        bentoItem.textContent = item;
        
        // Add to grid
        bentoGrid.appendChild(bentoItem);
        
        // Check if text overflows after rendering
        if (wouldOverflow(bentoItem, item)) {
            bentoItem.title = item; // Add tooltip with full text
        }
    });
}

// Initialize on page load
window.addEventListener('load', populateBentoGrid);

// Refresh grid every 30 seconds (optional)
// setInterval(populateBentoGrid, 30000);

// Respond to window resize
window.addEventListener('resize', () => {
    // Debounce the resize event
    clearTimeout(window.resizeTimeout);
    window.resizeTimeout = setTimeout(populateBentoGrid, 250);
});