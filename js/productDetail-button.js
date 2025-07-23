document.addEventListener('DOMContentLoaded', function() {
            const addToCartButton = document.getElementById('add-to-cart-btn');
            const buyNowButton = document.getElementById('buy-now-btn');

            function setActiveButton(clickedButton) {

                addToCartButton.classList.remove('button-activated');
                buyNowButton.classList.remove('button-activated');

                if (clickedButton) {
                    clickedButton.classList.add('button-activated');
                }
            }

            addToCartButton.addEventListener('click', function() {
                setActiveButton(addToCartButton);
                console.log('Add to Cart clicked');
            });

            buyNowButton.addEventListener('click', function() {
                setActiveButton(buyNowButton);
                console.log('Buy Now clicked');
            });
        });