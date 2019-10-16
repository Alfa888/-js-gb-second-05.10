'use strict'

function makeGETRequest (url, callback) {
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest ();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject ("Microsoft.XMLHTTP");
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            callback(xhr.responseText);
        }
    }
    xhr.open('GET', url, true);
    xhr.send();
}

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class Product {
    constructor (id, name, price, img = image) {
        this.id_product = id
        this.product_name = name
        this.price = price
        this.img = img
    }
    render () {
        return `<div class="product-item" data-id="${this.id_product}">
                        <img src="${this.img}" alt="Some img">
                        <div class="desc">
                            <h3>${this.product_name}</h3>
                            <p>${this.price} $</p>
                            <button class="buy-btn" 
                            data-id="${this.id_product}"
                            data-name="${this.product_name}"
                            data-image="${this.img}"
                            data-price="${this.price}">Купить</button>
                        </div>
                    </div>`
    }

}

class Catalog {
    constructor () {
        this.massive = '' 
        this.products = [] 
        this._init ()
    }
    _init () {
         this._fetchProducts ()
         this._initData ()
        // this._render ()
    }
    _fetchProducts () {
        
        // for (let i = 0; i<2; i++) {
        //     this.products.push (new Product (id [i], name [i], price [i]))
        // }
        
        //  for (let i = 0; i < items.length; i++) {
        //      this.products.push (new Product (ids [i], items [i], prices [i]))
        //  }
        
    }

    _initData () {
        makeGETRequest(`${API_URL}/catalogData.json`, (massive) => {
            this.massive = JSON.parse(massive);            
        })
    }
    // _render () {
    //     const block = document.querySelector ('.products')
    //     let htmlString = ''
    //     for (let item of this.products) {
    //         htmlString += item.render ()
    //     }
    //     block.innerHTML = htmlString
    // }
}

let catalog = new Catalog ()
console.log(catalog)
console.log(catalog.products)

console.log(`${API_URL}/catalogData.json`)