<template>
    <div id="app">
        <Index/>
    </div>
</template>

<script>
import Index from './components/Index.vue'

export default {
    name: 'App',
    components: {
        Index
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: wheat;
    margin-top: 60px;
}
</style>
