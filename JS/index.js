// Модальное окно с формой обратной связи (только открытие/закрытие)
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('feedbackModal');
    const openBtn = document.getElementById('openFormBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const closeFormBtn = document.getElementById('closeFormBtn');

    // Открыть модальное окно
    if (openBtn) {
        openBtn.addEventListener('click', function() {
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    }

    // Закрыть модальное окно (крестик)
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        });
    }

    // Закрыть модальное окно (кнопка Отмена)
    if (closeFormBtn) {
        closeFormBtn.addEventListener('click', function() {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        });
    }

    // Закрыть по клику вне модального окна
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    }
});

// Прелоадер - скрытие после полной загрузки страницы
window.onload = function() {
    let preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('hide-preloader');
    }
}
