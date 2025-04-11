<template>
    <div class="backdrop"  @click="closeDialog"></div>
    <dialog open :class="'modal ' + props.class">
        <slot></slot>
    </dialog>
</template>

<script setup>
const props = defineProps(['class']);
const emit = defineEmits(['close']);

function closeDialog() {
    emit('close');
}

</script>

<style lang="scss" scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

.modal {
  background-color: #e4ddd4;
  border-radius: 6px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  padding: 1rem;
  width: 80%;
  max-width: 40rem;
  animation: fade-slide-up 0.3s ease-out forwards;
  z-index: 20;
}

.modal-actions .text-button {
  color: #1d1a16;

  &:hover, &:active {
    color: #312c1d;
  }
}

@keyframes fade-slide-up {
  from {
    opacity: 0;
    transform: translateY(4rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>