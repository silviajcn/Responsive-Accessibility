// const mainContainer = document.querySelector(".main-container");
const menuEmail = document.querySelector('.navbar-email');
const menuHambIcon = document.querySelector('.iconMenuHam');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const shopingCartContainer = document.querySelector('#shopingCartContainer');
const productDetailContainer = document.querySelector('#productDetailContainer');
const cardsContainer = document.querySelector('.cards-container');

// CARRITO
const countShoppingCart = document.querySelector('.navbar-shopping-cart div');
const totalAmount = document.querySelector('.total-amount');
const arrowClose = document.querySelector('.title-container img');
const arrayProductCart = [];

const darkenScreen = document.querySelector('.darken');


// mainContainer.addEventListener('click', closeMenusClick);
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHambIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleCarAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    const isAsideClosed = shopingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shopingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shopingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shopingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCarAside() {

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed || !isDesktopMenuClosed) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }

    shopingCartContainer.classList.toggle('inactive');

}

// function closeMenusClick() {

//     const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
//     const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
//     const isCarritoComprasClosed = aside.classList.contains('inactive');
    
//     if (!isMobileMenuClosed || !isDesktopMenuClosed || !isCarritoComprasClosed) {
//         mobileMenu.classList.add("inactive");
//         desktopMenu.classList.add("inactive");
//         aside.classList.add("inactive");
   
//     }
// }

function openProductDetailAside() {

    shopingCartContainer.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}


const productList = [];
productList.push({
    name: 'Mancuernas',
    price: 500000,
    image: 'https://i.linio.com/p/4e1937f669866fb047e494ff3deb001d-catalog.webp',
});
productList.push({
    name: 'Colchoneta',
    price: 500000,
    image: 'https://i.linio.com/p/b78a0ea51e5fb5db9868b8f9068414e8-product.webp',
});
productList.push({
    name: 'kit Bandas elasticas',
    price: 400000,
    image: 'https://i.linio.com/p/c0d5b4ac626a7b52aa91febcc7304d44-product.webp',
});
productList.push({
    name: 'Kit Pesas o Mancuernass',
    price: 400000,
    image: 'https://i.linio.com/p/6353a5d3b69ca98998bdea5ddfd23035-product.webp',
});
productList.push({
    name: 'Barra multifuncional',
    price: 200000,
    image: 'https://i.linio.com/p/08b6886a24e66f3341e37c3e229d957a-product.webp',
});
productList.push({
    name: 'Trx Entrenamiento Funcional',
    price: 150000,
    image: 'https://i.linio.com/p/112a0eb04b23ad05527d52ff61a62d0c-product.webp',
});
productList.push({
    name: 'Rueda Abdominal Rodillo',
    price: 200000,
    image: 'https://i.linio.com/p/e4d56bb57e7734cfc77ba860c20b3d2c-product.webp',
});
productList.push({
    name: 'Kit Balón Yoga Colchoneta',
    price: 200000,
    image: 'https://i.linio.com/p/dd1f944ef4b592227398b96a26ae5f52-product.webp',
});
productList.push({
    name: 'kit Chaleco Tobilleras de Peso',
    price: 180000,
    image: 'https://i.linio.com/p/e89cd0eea8e018f53ffff5dd134e3eee-product.webp',
});
productList.push({
    name: 'Pera De Boxeo + Soporte',
    price: 60000,
    image: 'https://i.linio.com/p/2c911122b981f816a9d70b65bf5fcdc2-product.webp',
});
productList.push({
    name: 'Barra Ejercicios Para Puerta',
    price: 60000,
    image: 'https://i.linio.com/p/a86cfb4d439fb6bd8567d192a5b674c0-product.webp',
});
productList.push({
    name: 'Morral Hidratación Camelbak',
    price: 20000,
    image: 'https://i.linio.com/p/1fb46bda37aa9f7bf93532236a1445a2-product.webp',
});
productList.push({
    name: 'Tobillera Proteccion Ejercicio',
    price: 50000,
    image: 'https://i.linio.com/p/9ea8fc158ae0d3dd689836de7b0c0bbc-product.webp',
});
productList.push({
    name: 'Balon Medicinal Con Agarre 5kg',
    price: 120000,
    image: 'https://i.linio.com/p/b647ed081293fed51c385505770dbef5-product.webp',
});
productList.push({
    name: 'Pesa Disco Hierro 10lb Ejercicio',
    price: 220000,
    image: 'https://i.linio.com/p/35cd9812e35464afef8315b3df737885-product.webp',
});
productList.push({
    name: 'Pulsera inteligente de ejercicios',
    price: 120000,
    image: 'https://i.linio.com/p/b3be9c627514f7245f5d514127ae6e15-product.webp',
});
productList.push({
    name: 'Banco Step Aerobicos Fitness',
    price: 180000,
    image: 'https://i.linio.com/p/4b36ad60fcccfccc7d966fec547ee3ab-product.webp',
});
productList.push({
    name: 'Kit Saco Boxeo + Guantes',
    price: 250000,
    image: 'https://i.linio.com/p/26ee315b5a1e4b6eda1b8de27b470c9b-product.webp',
});
productList.push({
    name: 'Guantes cortos muñequeras',
    price: 150000,
    image: 'https://i.linio.com/p/226ae690e0111506afbb94dd69da1572-product.webp',
});
productList.push({
    name: 'Lazo/Cuerda para saltar Fitness',
    price: 190000,
    image: 'https://i.linio.com/p/934bcf008c1052b5cb2fdf24318509eb-product.webp',
});
productList.push({
    name: 'Soportes para hacer Flexiones de Pecho',
    price: 290000,
    image: 'https://i.linio.com/p/27e51050b985e6a87560bb93ec55f9f9-product.webp',
});
productList.push({
    name: 'Proteína Suero Quicken Pro 1400g + Canguro',
    price: 390000,
    image: 'https://i.linio.com/p/1135db3ee38834b4ab2714583673abe6-product.webp',
});
productList.push({
    name: 'Botella Contigo 710ml Fitness negra',
    price: 40000,
    image: 'https://i.linio.com/p/b4731474faad605f97fbecfe2431ca1a-product.webp',
});
productList.push({
    name: 'Kit Conos Entrenamiento + Bastones',
    price: 90000,
    image: 'https://i.linio.com/p/99ceb1b96c6004efd5bd3a48bde1337b-product.webp',
});


function renderProducts(arr) {
    // for (product of arr) {
    arr.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const imgProduct = document.createElement('img');
        imgProduct.setAttribute('src', product.image);
        imgProduct.setAttribute('alt', 'Photo product ' + product.name);
        imgProduct.addEventListener('click', function () {
            renderDetailsAside(product);
            openProductDetailAside();
        });

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        productInfoFigure.addEventListener('click', function () {
            renderMyOrder(product);
        });

        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        productImgCart.setAttribute('alt', 'Icon Cart');


        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(imgProduct);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    })
}

renderProducts(productList);

function renderDetailsAside(product){
    productDetailContainer.classList.remove("inactive");

    const productImgeDetail = document.querySelector(".detail-img")
    const productPrice = document.querySelector(".product-info-aside .product-price-detail");
    const productName = document.querySelector(".product-info-aside .product-name-detail");
    // const productDescription = document.querySelector(".product-description-detail");
    // const productBtnAddCart = document.querySelector('.add-to-cart-button');
    // productBtnAddCart.addEventListener('click', function () {
    //     renderMyOrder(product);
    // });
    
    productPrice.innerHTML = "$ " + product.price;
    productName.innerHTML = product.name;
    productImgeDetail.setAttribute('src', product.image);
    // productDescription.innerHTML = product.description;
}


function renderMyOrder(product){
    console.log("click");
    const shoppingCart = document.querySelector(".shopping-cart");
    
    const divShopingCart = document.createElement("div")
    divShopingCart.classList.add("div-ShopingCart")
    const figureMyOrder = document.createElement("figure");
    const imgIconMyOrder = document.createElement("img");
    imgIconMyOrder.setAttribute("src", product.image);
    const productName = document.createElement("p");
    productName.classList.add("name-my-order");
    productName.innerHTML =  product.name;
    const productPrice = document.createElement("p");
    productPrice.classList.add("price-my-order");
    productPrice.innerHTML = "$ "+ product.price;
    const imgIconDelete = document.createElement("img");
    imgIconDelete.setAttribute("src", "./icons/icon_close.png");

    shoppingCart.appendChild(divShopingCart);
    divShopingCart.appendChild(figureMyOrder);
    figureMyOrder.appendChild(imgIconMyOrder);
    divShopingCart.appendChild(productName);
    divShopingCart.appendChild(productPrice);
    divShopingCart.appendChild(imgIconDelete);

    /*---- Actualizamos la cantidad de productos y sumamos el resuktado.*/
    totalAmount.innerHTML = '$0.00'
    

    //const priceOrder = document.querySelectorAll(".price-my-order");
    //countShoppingCart.innerHTML = priceOrder.length;
    countShoppingCart.innerHTML = shoppingCart.childElementCount;
    totalAmount.innerHTML = Number(totalAmount.innerHTML.substring(1)) + product.price;
    arrayProductCart.push(Number(totalAmount.innerHTML));

    
    totalAmount.innerHTML ="$ "+ sumProducts(arrayProductCart); 

    /*Elimina producto de My Order* y actualiza eldato en el carrito*/
    imgIconDelete.addEventListener("click", function(){
        divShopingCart.remove();
        countShoppingCart.innerHTML = shoppingCart.childElementCount;
        
        const getTotal = document.querySelectorAll(".total-amount");
        const getTotalNumber = Number(Array.from(getTotal)[0].innerHTML.substring(1));

        getTotal[0].innerHTML = "$ " + (getTotalNumber - product.price);
        arrayProductCart.splice(-1,1); 
    })
}

function sumProducts(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}