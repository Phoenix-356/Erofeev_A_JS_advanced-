const topCardsEl = document.querySelector('.top__cards');
const feturedItemsTopEl = document.createElement('div');
feturedItemsTopEl.classList.add('feturedItems-top', 'center');
topCardsEl.insertAdjacentElement('afterend', feturedItemsTopEl)
const feturedItemsTitleEl = document.createElement('h1');
feturedItemsTitleEl.classList.add('feturedItems-top__title');
feturedItemsTitleEl.textContent = 'Fetured Items';
feturedItemsTopEl.appendChild(feturedItemsTitleEl);
const feturedItemsTextEl = document.createElement('h2');
feturedItemsTextEl.classList.add('feturedItems-top__text');
feturedItemsTextEl.textContent = 'Shop for items based on what we featured in this week';
feturedItemsTopEl.appendChild(feturedItemsTextEl);
const feturedItemsEL = document.createElement('div');
feturedItemsEL.classList.add('feturedItems-box', 'center');
feturedItemsTopEl.insertAdjacentElement('afterend', feturedItemsEL)

const dataProducts = JSON.parse(data);

function createProducts(data) {
    data.forEach(element => {
        const feturedItemsProductsEl = document.createElement('div');
        feturedItemsProductsEl.classList.add('feturedItemsProducts-box');
        feturedItemsEL.appendChild(feturedItemsProductsEl);
        const feturedItemsProductEl = document.createElement('div');
        feturedItemsProductEl.classList.add('feturedItems__Product');
        feturedItemsProductsEl.appendChild(feturedItemsProductEl);
        const feturedItemsProductImgEl = document.createElement('img');
        feturedItemsProductImgEl.classList.add('feturedItems__Product__img');
        feturedItemsProductImgEl.src = element.img;
        const feturedItemsProductImgBtnEl = document.createElement('button');
        feturedItemsProductImgBtnEl.classList.add('feturedItems__Product__img__btn');
        feturedItemsProductImgBtnEl.setAttribute('id', element.idAddButton)
        feturedItemsProductImgBtnEl.textContent = 'Add to Cart';
        feturedItemsProductEl.appendChild(feturedItemsProductImgBtnEl);
        const feturedItemsProductImgBtnImgEl = document.createElement('img');
        feturedItemsProductImgBtnImgEl.classList.add('feturedItems__Product__img__btn__image');
        feturedItemsProductImgBtnImgEl.setAttribute('id', element.idAddButton);
        feturedItemsProductImgBtnImgEl.src = "img/cart.png";
        feturedItemsProductImgBtnEl.prepend(feturedItemsProductImgBtnImgEl)
        feturedItemsProductEl.appendChild(feturedItemsProductImgEl);
        const feturedItemsProductDescriptionEl = document.createElement('div');
        feturedItemsProductDescriptionEl.classList.add('feturedItems__Product__description');
        feturedItemsProductsEl.appendChild(feturedItemsProductDescriptionEl);
        const feturedItemsProductTItleEl = document.createElement('h1');
        feturedItemsProductTItleEl.classList.add('feturedItems__Product__description__title');
        feturedItemsProductTItleEl.textContent = element.titleProduct;
        feturedItemsProductDescriptionEl.appendChild(feturedItemsProductTItleEl);
        const feturedItemsProductDescriptionTextEl = document.createElement('p');
        feturedItemsProductDescriptionTextEl.classList.add('feturedItems__Product__description__text');
        feturedItemsProductDescriptionTextEl.textContent = element.description;
        feturedItemsProductDescriptionEl.appendChild(feturedItemsProductDescriptionTextEl);
        const feturedItemsProductPriceEl = document.createElement('p');
        feturedItemsProductPriceEl.classList.add('feturedItems__Product__description__price');
        feturedItemsProductPriceEl.textContent = element.priceProduct;
        feturedItemsProductDescriptionEl.appendChild(feturedItemsProductPriceEl);
    });
};

createProducts(dataProducts);

const feturedItemsBoxEl = document.querySelector('.feturedItems-box');

const browseAllProductEl = document.createElement('div');
browseAllProductEl.classList.add('all__prod__button');
feturedItemsBoxEl.insertAdjacentElement('afterend', browseAllProductEl);
const browseAllProductHrefEl = document.createElement('a');
browseAllProductHrefEl.href = '#';
browseAllProductEl.appendChild(browseAllProductHrefEl);
const browseAllProductButtonEl = document.createElement('button');
browseAllProductButtonEl.textContent = 'Browse All Product';
browseAllProductHrefEl.appendChild(browseAllProductButtonEl);

const featureEL = document.querySelector('.feature');
const productBoxEl = document.createElement('div');
productBoxEl.classList.add('product-box');
productBoxEl.classList.add('center');

featureEL.insertAdjacentElement('afterend', productBoxEl);
const feturedItemsProductImgBtnEl = document.querySelectorAll('.feturedItems__Product__img__btn');
feturedItemsProductImgBtnEl.forEach(element => {
    element.addEventListener('click', function (e) {
        if (productBoxEl.children.length <= 1) {
            const cartItemsEl = document.createElement('div');
            cartItemsEl.classList.add('cartItems-title');
            cartItemsEl.classList.add('center');
            cartItemsEl.textContent = 'Cart Items';
            productBoxEl.appendChild(cartItemsEl);
        }
        productBoxEl.style.margin = '96px 0px 96px 0px';
        let targetData = e.target.getAttribute('id');
        const productEl = document.createElement('div');
        productEl.classList.add('product');
        productBoxEl.appendChild(productEl);
        const productElImg = document.createElement('img');
        productElImg.classList.add('product__img');
        productElImg.src = dataProducts[targetData].img;
        productElImg.setAttribute('alt', 'photo');
        productElImg.setAttribute('width', '262px');
        productElImg.setAttribute('height', '306px');
        productEl.appendChild(productElImg);
        const productContentEL = document.createElement('div');
        productContentEL.classList.add('product__content');
        productEl.appendChild(productContentEL);
        const productContentLeftEL = document.createElement('div');
        productContentLeftEL.classList.add('product__content-left');
        productContentEL.appendChild(productContentLeftEL);
        const productContentLeftLinkEL = document.createElement('a');
        productContentLeftLinkEL.classList.add('product__content-left__link');
        productContentLeftLinkEL.textContent = dataProducts[targetData].titleAddToCart;
        productContentLeftEL.appendChild(productContentLeftLinkEL);
        const productContentLeftDescriptionEL = document.createElement('div');
        productContentLeftDescriptionEL.classList.add('product-content-left__description');
        productContentLeftEL.appendChild(productContentLeftDescriptionEL);
        const productContentLeftPriceEL = document.createElement('p');
        productContentLeftPriceEL.classList.add('product__content-left__price');
        productContentLeftPriceEL.textContent = dataProducts[targetData].priceTitle;
        productContentLeftDescriptionEL.appendChild(productContentLeftPriceEL);
        const productContentLeftPriceColorEL = document.createElement('span');
        productContentLeftPriceColorEL.classList.add('product-price-color');
        productContentLeftPriceColorEL.textContent = dataProducts[targetData].price;
        productContentLeftPriceEL.appendChild(productContentLeftPriceColorEL);
        const productContentLeftColorEL = document.createElement('p');
        productContentLeftColorEL.classList.add('product__content-left__color');
        productContentLeftColorEL.textContent = dataProducts[targetData].color;
        productContentLeftDescriptionEL.append(productContentLeftColorEL);
        const productContentLeftSizeEL = document.createElement('p');
        productContentLeftSizeEL.classList.add('product__content-left__size');
        productContentLeftSizeEL.textContent = dataProducts[targetData].size;
        productContentLeftDescriptionEL.appendChild(productContentLeftSizeEL);
        const productContentLeftQuantityEL = document.createElement('p');
        productContentLeftQuantityEL.classList.add('product__content-left__quantity');
        productContentLeftQuantityEL.textContent = dataProducts[targetData].quantityTitle;
        productContentLeftDescriptionEL.appendChild(productContentLeftQuantityEL);
        const productContentLeftQuantityInputEL = document.createElement('input');
        productContentLeftQuantityInputEL.classList.add('quality-input');
        productContentLeftQuantityInputEL.setAttribute("value", `${dataProducts[targetData].quantity}`);
        productContentLeftQuantityEL.appendChild(productContentLeftQuantityInputEL);
        const productContentRightEL = document.createElement('img');
        productContentRightEL.classList.add('product__content-right');
        productContentRightEL.src = dataProducts[targetData].cross;
        productContentEL.appendChild(productContentRightEL);
        const crossEL = document.querySelectorAll('.product__content-right');
        crossEL.forEach(element => {
            element.addEventListener('click', function (e) {
                const productCloseEl = element.closest('.product');
                productCloseEl.remove();
                if (productBoxEl.children.length <= 1) {
                    const cartItemsEl = document.querySelector('.cartItems-title');
                    if (cartItemsEl) {
                        cartItemsEl.remove();
                    }
                    productBoxEl.style.margin = '0px 0px 0px 0px';
                }
            });
        });
    });
});
