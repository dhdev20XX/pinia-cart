<template>
    <section :class="'notification '+ status">
        <h2>{{props.title}}</h2>
        <p>{{props.message}}</p>
    </section>
</template>

<script setup>
    import { toRefs } from 'vue';
    const props = defineProps(['title', 'status', 'message']);

    const { status } = toRefs(props);

</script>

<style lang="scss" scoped>
.notification {
  width: 100%;
  height: 3rem;
  background-color: $pending;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 10%;
  align-items: center;
  color: black;

  h2, p {
    font-size: 1rem;
    margin: 0;
  }
}

.error {
  background-color: $error;
}

.success {
  background-color: $success;
}
</style>