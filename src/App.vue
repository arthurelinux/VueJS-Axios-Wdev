<template>
  <div id="app">
    <Header />
        <router-view path="$router.key" />
    <Footer />
   
  </div>
</template>
<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import "./styles/global.css"
export default {
  name:"App",
  components:{
    Header,
    Footer,
    
  }
}
</script>

