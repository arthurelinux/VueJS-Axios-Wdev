<template>
    <main>
        <section class="container">
            <h1> Vídeos </h1>
            <section class="videos">
                <div class="video" v-for="(video, index) in videos" :key="index">
                <a  :src="video.link" target="_blanck">
                    <img :src="video.thumb" :alt="video.title" >
                    <div class="video-title">
                        {{video.title}}

                    </div>
                </a>
                </div>


            </section>
        </section>
    </main>
</template>
<script>
import api from "@/services/api.js"
export default {
    name: "Videos",
    data(){
        return{
            videos: [],
        }
    },
    mounted(){
        api.get('/videos.json').then(Response =>  {
            this.videos = Response.data;
        })
    }

}
</script>
<style scoped>
 main{
     align-items: center;
 }
 .videos{
     display: flex;
     justify-content: center;
     flex-direction: column;
     align-items: center;
 }
.video{
    width: 80%;
    margin-bottom: 30px;
}
 .video img{
     width: 100%;
 }
 .videos a {
     color: var(--text-color-dark);
     font-size: 300;
     text-align: center;
 }
 @media (min-width: 700px) {
     .videos{
         flex-direction: row;
         align-items: flex-start;
         flex-wrap: wrap;
         
     }
     .video{
         margin-right: 30px;
         width: 300px;
     }
     
 }
</style>