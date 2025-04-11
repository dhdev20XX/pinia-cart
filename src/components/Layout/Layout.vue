<template>
    <MainHeader />
    <main>
        <slot></slot>
    </main>
</template>

<script setup>
import MainHeader from './MainHeader.vue';
</script>