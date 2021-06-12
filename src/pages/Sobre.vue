<template>
    <main>
        <section class="container">
            <h1> Sobre </h1>
            <div class="About" v-html="about">
              


            </div>
        </section>
    </main>
</template>
<script>
import api from "@/services/api.js"
export default {
    name: "About",
    data(){
        return{
            about: '',
        }
    },
    mounted(){
        api.get('/about.json').then(Response =>  {
            this.about = Response.data.about;
        })
    }

}
</script>
<style scoped>
 main{
     align-items: center;
 }
 .About{
     margin-bottom: 40px;
     color: var(--color-text-dark);
 }
</style>