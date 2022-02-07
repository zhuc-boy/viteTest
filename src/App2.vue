<script setup>
import { provide } from "vue";
provide("rootValue", 10);
</script>
<template>
    <router-view></router-view>
</template>
<style>
* {
    padding: 0;
    margin: 0;
}
</style>