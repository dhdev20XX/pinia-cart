<template>
    <dialog ref="dialog" :class="'modal ' + props.class" @close="onCloseHandler">
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

<style lang="scss" scoped>
.modal {
    background-color: #e4ddd4;
    border-radius: 6px;
    border: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
    padding: 1rem;
    width: 80%;
    max-width: 40rem;
    animation: fade-slide-up 0.3s ease-out forwards;

    &::backdrop {
        background-color: rgba(0, 0, 0, 0.55);
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