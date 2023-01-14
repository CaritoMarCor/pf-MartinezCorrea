// Definiendo los productos
const product = [
    {
        id: 0,
        image: './../resources/img/consolas/nintendodspink.png',
        url: './../pages/contacto.html',
        title: 'Nintendo DSI',
        price: 45990,
    },
    {
        id: 1,
        image: './../resources/img/consolas/nscoral.png',
        url: './../pages/contacto.html',
        title: 'Nintendo Switch Lite',
        price: 100990,
    },
    {
        id: 2,
        image: './../resources/img/consolas/psvita.png',
        url: './../pages/contacto.html',
        title: 'PS Vita Slim',
        price: 120990,
    },
    {
        id: 3,
        image: './../resources/img/perifericos/aud_somic.png',
        url: './../pages/contacto.html',
        title: 'Audífonos SOMIC Gaming',
        price: 39990,
    },
    {
        id: 4,
        image: './../resources/img/perifericos/mouserosado.png',
        url: './../pages/contacto.html',
        title: 'Razer Viper Ultimate',
        price: 99990,
    },
    {
        id: 5,
        image: './../resources/img/perifericos/tecladorosado.png',
        url: './../pages/contacto.html',
        title: 'Teclado Motospeed CK82',
        price: 45990,
    },
    {
        id: 6,
        image: './../resources/img/otros/divoom-dito-pink.png',
        url: './../pages/contacto.html',
        title: 'Parlante Divoom Ditto Plus',
        price: 50990,
    },
    {
        id: 7,
        image: './../resources/img/otros/control-kitten.png',
        url: './../pages/contacto.html',
        title: 'Control IINE Kitten',
        price: 30990,
    },
    {
        id: 8,
        image: './../resources/img/otros/orejas-razer.png',
        url: './../pages/contacto.html',
        title: 'Razer Orejas Kitty',
        price: 10990,
    }
];

//Formateo para presentar los números como dinero
const formatter = new Intl.NumberFormat('es-CL', {style: 'currency',currency: 'CLP',});


const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{   var {image, url, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <a href="${url}"><img class='images' src=${image}></img></a>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>${formatter.format(price)}</h2>`+ 
                "<button onclick='addtocart("+(i++)+")'>Agregar al carro</button>"+
            `</div>
        </div>`  
    )
}).join('')

var cart=[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;

    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Tu carrito está vacío";
        document.getElementById("total").innerHTML = "$ " + 0;
    }
    else{
        document.getElementById('cartItem').innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = formatter.format(total);
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p>${title}</p>
                <h2>${formatter.format(price)}</h2>`+
                "<i class='bi bi-trash3-fill'onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}