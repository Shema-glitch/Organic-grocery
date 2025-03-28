const dropDown = document.getElementById('page-show');
const dropDownContent = document.getElementById('page-content');

dropDown.addEventListener('click', function() {
    dropDownContent.classList.toggle('show');

    dropDownContent.style.display = dropDownContent.style.display === 'flex' ? 'none' : 'flex';
});