document.addEventListener('DOMContentLoaded', () => {
    const techElements = document.querySelectorAll('span.tech');

    techElements.forEach(element => {
        element.addEventListener('mouseover', () => {
            const textContent = element.textContent;
            techElements.forEach(el => {
                if (el.textContent === textContent && !el.classList.contains('clicked')) {
                    el.style.color = 'var(--yellow)';
                }
            });
        });

        element.addEventListener('mouseout', () => {
            const textContent = element.textContent;
            techElements.forEach(el => {
                if (el.textContent === textContent && !el.classList.contains('clicked')) {
                    el.style.color = 'var(--gray)';
                }
            });
        });

        element.addEventListener('click', () => {
            const textContent = element.textContent;
            techElements.forEach(el => {
                if (el.textContent === textContent) {
                    if (el.classList.contains('clicked')) {
                        el.classList.remove('clicked');
                        el.style.color = 'var(--gray)';
                    } else {
                        el.classList.add('clicked');
                        el.style.color = 'var(--yellow)';
                    }
                }
            });
        });
    });
});