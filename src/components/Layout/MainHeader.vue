<template>
    <header class="header">
        <h1>Pinia Cart</h1>
        <nav>
            <ul>
                <li>
                    <cart-button />
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>

import CartButton from '../Cart/CartButton.vue';

</script>

<style scoped>
.header {
  width: 100%;
  height: 5rem;
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #252424;

  h1 {
    color: white;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
</style>