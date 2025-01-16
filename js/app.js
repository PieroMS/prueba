//CODIGO PARA EL CARRITO
document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.querySelector('.header__icon--cart');
    const cartSidebar = document.getElementById('cartSidebar');
    const closeCart = document.getElementById('closeCart');
    const body = document.body;

    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    body.appendChild(overlay);

    cartIcon.addEventListener('click', function(e) {
        e.preventDefault();
        cartSidebar.classList.add('active');
        overlay.classList.add('active');
        body.style.overflow = 'hidden';
    });

    closeCart.addEventListener('click', function() {
        cartSidebar.classList.remove('active');
        overlay.classList.remove('active');
        body.style.overflow = '';
    });

    overlay.addEventListener('click', function() {
        cartSidebar.classList.remove('active');
        overlay.classList.remove('active');
        body.style.overflow = '';
    });
});