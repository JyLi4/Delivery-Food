// в отдельной ячейке памяти находится пеоеменная cardButton, в которой хранится наша корзина
const cardButton = document.querySelector("#card-button");
const modal = document.querySelector('.modal');
// поиск среди всех элементов на странице класса close
const close = document.querySelector('.close');

// отслеживаем клик
// cardButton.addEventListener('click', function (event) {
//    // добавляем в модальное окно класс открытия
//    modal.classList.add("is-open");
// });
// close.addEventListener('click', function (event) {
//    // удаляем класс из модального окна
//    modal.classList.remove("is-open");
// });


// используем одну функцию
cardButton.addEventListener('click', toggleModal);
close.addEventListener('click', toggleModal);

function toggleModal() {
   modal.classList.toggle("is-open")
}

new WOW().unit();

// можно сделать рефакторинг