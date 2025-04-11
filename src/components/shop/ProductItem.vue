<template>
    <li class="item">
        <Card>
            <header>
                <h3>{{ title }}</h3>
                <div class="price">${{ price.toFixed(2) }}</div>
            </header>
            <p>{{ description }}</p>
            <div class="actions">
                <base-button @click="addItemToCartHandler">Add to Cart</base-button>
            </div>
        </Card>
    </li>
</template>

<script setup>
import { toRefs } from 'vue';
import { storeToRefs } from 'pinia'
import { useCartStore } from '../../store/cart.js';
import Card from '../UI/Card.vue';
import BaseButton from '../UI/BaseButton.vue';

const cartStore = useCartStore();

const props = defineProps(['title', 'price', 'description', 'id']);

const { title , price, description, id } = toRefs(props);

function addItemToCartHandler() {
    cartStore.addItemToCart(
        {
            id: props.id,
            title: props.title,
            price: props.price,
        }
    );
}

</script>

<style lang="scss" scoped>
.item {
  h3 {
    margin: 0.5rem 0;
    font-size: 1.25rem;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
}

.price {
  border-radius: 25px;
  padding: 0.15rem 1.5rem;
  background-color: #3a3a3a;
  color: white;
  font-size: 1.5rem;
}

.item p {
  color: #3a3a3a;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>