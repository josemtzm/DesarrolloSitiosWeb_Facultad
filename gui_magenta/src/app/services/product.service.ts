import { Injectable } from '@angular/core';

import { Product } from '../shared/models/product.model';

@Injectable()
export class ProductService {

    private products: Product[];

    constructor() {
        this.products = [
            { id: 'p01', name: 'iPhone', price: 100, photo: 'iphone.jfif' },
            { id: 'p02', name: 'iPad', price: 200, photo: 'ipad.jfif' },
            { id: 'p03', name: 'Mac', price: 300, photo: 'mac.jfif' }
        ];
    }

    findAll(): Product[] {
        return this.products;
    }

    find(id: string): Product {
        return this.products[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    }

}