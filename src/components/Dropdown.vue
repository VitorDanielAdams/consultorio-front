<template>
    <p class="menu-label has-text-left pl-5">
        {{data.menu}}
    </p>
    <div class="menu-list">
        <div v-for="item in data.item" :key="item">
            <a class="navbar-item has-text-left pl-6">
                <router-link :to="item.url">{{item.name}}</router-link>
            </a> 
        </div>
    </div>

</template>

<script lang="ts">
    import { Options,Vue } from 'vue-class-component';
    @Options({
        props: {
            data: Object
        },
    })
    export default class Dropdown extends Vue {
        data: any;
    }
</script>

<style lang="scss">
    @import "~bulma/bulma.sass";

</style>