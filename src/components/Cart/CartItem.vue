<template>
  <li class="cart-item">
    <p>{{ title }} - {{ props.quantity }} x {{ currencyFormatter.format(price) }}</p>
    <p class="cart-item-actions">
      <button @click="removeItemFromCartHandler">-</button>
      <span>{{ currencyFormatter.format(props.total) }}</span>
      <button @click="addItemToCartHandler">+</button>
    </p>
  </li>
</template>

<script setup>
import { currencyFormatter } from '../../util/formatting.js';
import { toRefs } from 'vue';
import { storeToRefs } from 'pinia'
import { useCartStore } from '../../store/cart.js';

const props = defineProps(['title', 'quantity', 'total', 'price', 'id']);

const { title, quantity, total, price, id } = props;

const cartStore = useCartStore();

function addItemToCartHandler() {
  cartStore.addItemToCart({
    id,
    title,
    price,
  });
}

function removeItemFromCartHandler() {
  cartStore.removeItemFromCart(id);
}


</script>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0;

  @include responsive(sm) {
    flex-direction: row;

    p {
      margin: 0;
    }
  }

  p {
    margin-top: 0.5rem;
  }
}

.cart-item-actions {
  display: flex;
  gap: 1rem;
  align-items: center;

  button {
    cursor: pointer;
    font-size: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    border: none;
    background-color: #312c1d;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover,
    &:active {
      background-color: #1d1a16;
    }
  }
}
</style>