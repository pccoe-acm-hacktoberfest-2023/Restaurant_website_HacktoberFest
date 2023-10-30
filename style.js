document.querySelectorAll('.wcu-card').forEach(card => {
    card.addEventListener('mouseleave', () => {
        card.querySelector('.popup').style.display = 'none';
    });
    card.addEventListener('mouseenter', () => {
        card.querySelector('.popup').style.display = 'block';
    });
});
