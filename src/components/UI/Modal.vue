<template>
    <dialog ref="dialog" :class="'modal ' + props.class"  @close="onCloseHandler">
        <slot></slot>
    </dialog>
</template>

<script setup>
import { ref, toRefs, watch } from 'vue';
const props = defineProps(['open', 'class']);
const { open } = toRefs(props);
//const emit = defineEmits(['close']);
const dialog = ref();


watch(open, function (value) {
    const modal = dialog.value;
    if (value) {
        modal.showModal();
    } else {
        modal.close();
    }
    console.log(value);
});

function onCloseHandler() {
   const modal = dialog.value;
    modal.close();
    //emit('close');
}
</script>

<style scoped>
.modal {
    background-color: #e4ddd4;
    border-radius: 6px;
    border: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
    padding: 1rem;
    width: 80%;
    max-width: 40rem;
    animation: fade-slide-up 0.3s ease-out forwards;
}

.modal::backdrop {
    background-color: rgba(0, 0, 0, 0.55);
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

.modal-actions .text-button {
  color: #1d1a16;
}

.modal-actions .text-button:hover,
.modal-actions .text-button:active {
  color: #312c1d;
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