import { mount as Product } from 'products/ProductIndex';
import { mount as Cart } from 'carts/cartIndex';

Product(document.querySelector('#host-container-product'))
Cart(document.querySelector('#host-container-cart'))
console.log("container");