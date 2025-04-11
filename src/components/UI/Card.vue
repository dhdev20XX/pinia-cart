<template>
    <section :class="props.class ? 'card ' + props.class  : 'card'">
        <slot></slot>
    </section>
</template>

<script setup>
    const props = defineProps({
        class: {
            type: String,
        }
    });
</script>

<style lang="scss" scoped>
.card {
  margin: 1rem auto;
  border-radius: 6px;
  background-color: color(tertiary);
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
}
</style>