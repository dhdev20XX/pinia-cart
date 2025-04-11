<template>
    <base-dialog v-if="showCart" class="cart" @close="closeCartHandler">
        <h2>Your Cart</h2>
        <ul>
            <CartItem v-if="cartItems.length > 0" v-for="item in cartItems" :key="item.id" :id="item.id" :title="item.name"
                :quantity="item.quantity" :total="item.totalPrice" :price="item.price" />
            <p v-else>Your cart is currently empty!</p>
        </ul>
        <p class="cart-total">{{ currencyFormatter.format(totalCost) }}</p>
        <div class="modal-actions">
            <base-button @click="closeCartHandler">Close</base-button>
        </div>
    </base-dialog>
</template>

<script setup>
import { currencyFormatter } from '../../util/formatting.js';
import BaseDialog from '../UI/BaseDialog.vue';
import BaseButton from '../UI/BaseButton.vue';
import CartItem from './CartItem.vue';

import { computed } from 'vue';

import { storeToRefs } from 'pinia';
import { useCartStore } from '../../store/cart.js';
import { useUiStore } from '../../store/ui.js';



const uiStore = useUiStore();
const cartStore = useCartStore();

const { getCartIsVisible: showCart, getNotification: notification } = storeToRefs(uiStore);

const { getItems: cartItems } = storeToRefs(cartStore);

const totalCost = computed(function () {
    if (cartItems.value.length > 0) {
        return cartItems.value.map(item => item.totalPrice).reduce((prev, next) => prev + next);
    }
    return 0;
})

function closeCartHandler() {
    uiStore.toggle();
}

</script>

<style lang="scss" scoped>
.cart {
    h2 {
        margin: 1rem 0;
        text-align: center;
    }

    ul {
        list-style: none;
        margin: 0.5rem 0;
        padding: 0;
    }

    @include responsive(sm) {
        h2 {
            text-align: left;
        }
    }
}

.cart-total {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    font-size: 1.15rem;
    font-weight: bold;
   

    @include responsive(sm) {
        justify-content: flex-end;
    }
}

.modal-actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
}
</style>