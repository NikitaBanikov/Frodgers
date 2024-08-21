// Что вас ждет на обучении //
document.addEventListener('DOMContentLoaded', function() {
    const modals = document.querySelectorAll('.modal');
    const items = document.querySelectorAll('.education-item');
    const overlay = document.getElementById('overlay');

    items.forEach((item, index) => {
        const modal = document.querySelector(`#modal${index + 1}`);
        item.addEventListener('click', () => {
            modal.style.display = 'block';
            overlay.style.display = 'block';
        });
    });

    modals.forEach((modal) => {
        const closeBtn = modal.querySelector('.close');
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            overlay.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target == modal || e.target == overlay) {
                modal.style.display = 'none';
                overlay.style.display = 'none'; 
            }
        });
    });
});


// FAQ //

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                answer.style.padding = '0 15px';
            } else {
                document.querySelectorAll('.faq-item_answer').forEach(el => {
                    el.style.maxHeight = null;
                    el.style.padding = '0 15px';
                });
                
                answer.style.maxHeight = answer.scrollHeight + "px";
                answer.style.padding = '10px 15px';
            }
        });
    });
});

