document.addEventListener("DOMContentLoaded", runScript);

function runScript() {
    var items = document.querySelectorAll('.item');

    items.forEach(function (item) {
        item.addEventListener('click', function() {
            processAction(this);
        });
    });
}

function processAction(element) {
    var activeElement = document.querySelector('.clicked');
    if (activeElement) {
        activeElement.classList.toggle('clicked');
    }

    // Для корректного снятия выделения при клике на активный в данный момент элемент.
    if (activeElement !== element) {
        element.classList.toggle('clicked');
    }
}