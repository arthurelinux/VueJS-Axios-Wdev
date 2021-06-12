<template>
    <main>
        <div class="text-top">Vídeos novos todo quinta</div>
       
        <a href="https://youtube.com/educadoresnolinux">
        <img id="subscribe" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/subscribe.svg" alt="Inscreva-se">
        </a>
        
        <div class="text-bottom">youtube.com/wdev</div>
    </main>
</template>
<script>
export default{
    name:'Home',
}
</script>
<style scoped>
 main{
     background-color: var(--color-background-home);
     justify-content: center;
     align-items: center;
 }
 .text-top{
     color: blanchedalmond;
     font-size: 22px;
     margin-bottom: 20px;
 }
 .text-bottom{
     color: blanchedalmond;
     font-size: 18px;
     margin-top: 20px;
 }
 #subscribe{
     width: 340px;
 }
</style>