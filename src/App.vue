<template>
  <div class="content">
    <div class="column is-full header">
      <h1>Header</h1>
    </div>
    
    <div class="columns mt-3">
      <div class="column is-3">
        <MenuSide />
      </div>
      <div class="column is-9">
        <router-view></router-view>
      </div>
    </div>
    
    <div class="column is-12 footer">
      <h1>Footer</h1>
    </div>
  </div>
</template>

<script>
  import MenuSide from '@/components/MenuSide.vue'

  export default {
  name: 'App',
  components: {
    MenuSide
  }
}
</script>


<style lang="scss">
  @import "~bulma/bulma.sass";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  background: #2c3e50;
    h1 {
      color: #ffffff;
    }
}

.footer {
  background: #0e3f60;
  max-height: 50px;
    h1 {
      color: #ffffff;
    }
}

nav {

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
