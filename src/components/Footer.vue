<template>
    <footer>
        <a class="socialLinks" v-for="(socialLinks, index) in socialLinks" :key="index" :href="socialLinks.link" target="_blanck">
            <img :src="socialLinks.icon" :alt="socialLinks.label" :title="socialLinks.label">
        </a>
    </footer>
</template>
<script>
import api from "@/services/api.js"
export default {
   name:"Footer",
   data(){
       return{
           socialLinks: [],
       }
   }
   ,
   mounted(){
       api.get('/social-links.json').then(response =>{
           this.socialLinks = response.data
       });
   }
}
</script>
<style scoped>
footer{
    height: 60px;
    widows: 100%;
    background-color: var(--color-background-nav);
    display: flex;
    justify-content: center;
    align-items: center;
}
.socialLinks{
    border: 2px solid var(--color-text-light);
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin: 0 10px;
}
.socialLinks img{
    width: 20px;
}
</style>