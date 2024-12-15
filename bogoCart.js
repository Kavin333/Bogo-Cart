function toggle(selectedBox) {
    const allDropdowns = document.querySelectorAll('.dropdown');
    const allProductBoxes = document.querySelectorAll('.product-box');

    allDropdowns.forEach((dropdown, index) => {
        if (index + 1 === selectedBox) {
            dropdown.classList.add('active'); // Show the dropdown for the selected product
            allProductBoxes[index].classList.add('selected');
        } else {
            dropdown.classList.remove('active'); // Hide other dropdowns
            allProductBoxes[index].classList.remove('selected');
        }
    });
}
