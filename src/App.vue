<script setup>
import Layout from './components/Layout/Layout.vue';
import Cart from './components/Cart/Cart.vue';
import Products from './components/shop/Products.vue';
import Notification from './components/UI/Notification.vue';
import BaseDialog from './components/UI/BaseDialog.vue';
import Modal from './components/UI/Modal.vue';


import { onMounted, watch } from 'vue';

import { storeToRefs } from 'pinia'
import { useUiStore } from './store/ui.js';
import { useCartStore } from './store/cart.js';


const uiStore = useUiStore();
const cartStore = useCartStore();

const { getCartIsVisible: showCart, getNotification: notification } = storeToRefs(uiStore);

const {getHasChanged: changed, getItems: items, getTotalQuantity: totalQuantity} = storeToRefs(cartStore);

onMounted(() => {
  cartStore.fetchCartData();
});

watch(changed, function () {
    if(changed.value) {
      cartStore.sendCartData({
      items: items.value,
      totalQuantity: totalQuantity.value,
    });
    cartStore.setChanged();
  }
});

function closeCartHandler() {
  uiStore.toggle();
  console.log('closed.....')
}

</script>

<template>
  <div>
    <notification v-if="notification" :status="notification.status" :title="notification.title"
      :message="notification.message" />
    <layout>
      <cart />
      <products />
    </layout>
  </div>
</template>

