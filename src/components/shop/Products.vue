<template>
    <section class="products">
        <h2>Buy Amazing products</h2>
        <ul>
            <product-item v-for="item in DUMMY_PRODUCTS" :key="item.id" :id="item.id" :title="item.title"
                :price="item.price" :description="item.description" />
        </ul>
    </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCartStore } from '../../store/cart.js';

const cartStore = useCartStore();
const { getItems } = storeToRefs(cartStore);

import productItem from './ProductItem.vue';
import DUMMY_PRODUCTS from '../../dummy-data.js';

import { ref } from 'vue';

</script>


<style lang="scss" scoped>
.products {
    h2 {
        color: color(quaternary);
        margin: 2rem auto;
        text-align: center;
        text-transform: uppercase;
        font-size: size(lg);
    }

    @include responsive(sm) {
        h2 {
            color: color(tertiary);
        }
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
}
</style>