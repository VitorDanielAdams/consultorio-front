<template>
  </template>

<script lang="ts">
    import { Options,Vue } from 'vue-class-component';

    @Options({
        props: {
            dataHeader: Object,
            data: Object
        },
    })
    export default class Table extends Vue {}
</script>

<style>

</style>