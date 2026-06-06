function showFinance(id, button) {

    document
        .querySelectorAll('.finance-panel')
        .forEach(panel => panel.style.display = 'none');

    document
        .querySelectorAll('.finance-btn')
        .forEach(btn => btn.classList.remove('active'));

    document.getElementById(id).style.display = 'block';

    button.classList.add('active');
}