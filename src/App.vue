<template>

        <my-header></my-header>
            <router-view></router-view>
        

        <my-footer></my-footer>
</template>

<script>
    export default {
        
    }
</script>

<style>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Helvetica', 'Arial', sans-serif;
  }
a{
    text-decoration: none;
    color: #fff;
}
#app{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
footer {
  margin-top: auto;
}
main{
  /* padding-top: 40px; */
}
.container{
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}
.btn{
    border: 2px solid #fff;
    background-color: rgb(255, 255, 255,0);
    padding: 10px 40px;
    font-size: 20px;
    text-transform: uppercase;
}
</style>
