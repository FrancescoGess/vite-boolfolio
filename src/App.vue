<script>
import { store } from "./store";
import HeaderApp from './components/HeaderApp.vue';
import MainApp from './components/MainApp.vue';
// import Projectcard from './components/Projectcard.vue';

export default {
    components: {
        HeaderApp
    }
}
</script>

<template>
    <HeaderApp></HeaderApp>

    <router-view></router-view>
</template>

<style>

</style>
