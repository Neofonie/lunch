<template>
  <div class="header">
    <header>
        <h1>{{ this.$route.meta.title }}</h1>
    </header>
    <nav>
        <router-link :to="{ name: 'll-ausloser'}">Auslosen</router-link>
        <router-link :to="{ name: 'll-ergebnissliste'}">Ergebnisse</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="less">
.header {
  margin-bottom: 30px;
}
a {
  color: #83ffd2;
  &:hover, &:focus {
    color: #ffc3d7;
  }
}
</style>
