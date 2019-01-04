<template>
  <div id="app">
    <Header/>
    <router-view class="main"/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }

}
</script>

<style>
body {
  background-color: #a17b88;
}

h1, h2 {
  font-weight: normal;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}
.main {
  max-width: 80%;
  min-height: 500px;
  border-radius: 0 10px;
  margin: auto;
  background-color:#574349;
  color: white;
  padding: 10px 40px;
}
</style>
