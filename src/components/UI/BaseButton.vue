<template>
    <button :class="'base-button '+props.mode">
        <slot></slot>
    </button>
</template>

<script setup>
const props = defineProps({
    mode: {
        type: String,
        required: false,
        default: ''
    }
});
</script>

<style lang="scss" scoped>
@use 'sass:color' as *;

.base-button {
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  background-color: color(secondary);
  color: color(tertiary);
  border: 1px solid color(secondary);

  &:hover, &:active {
    background-color: adjust(color(secondary), $lightness: 5%);
    border-color: #1ac5d1;
    color: white;
  }
}

.text-button {
  color: #1d1a16;
  background-color: transparent;
  border: none;

  &:hover, &:active {
    color: #312c1d;
    background-color: transparent;
    border: none;
  }
}
</style>