import { defineStore } from 'pinia';
import actions from './cart-actions.js';
import getters from './cart-getters.js';

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [],
        totalQuantity: 0,
        changed: false,
    }),
    getters,
    actions
})