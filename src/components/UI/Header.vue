<template>
    <header>
        <div class="container">
            <div class="header__inner">
                <nav>
                    <ul>
                        <li><router-link to="/categories">Категории</router-link></li>
                        <li><router-link to="/price">СТОИМОСТЬ</router-link></li>
                        <li><router-link to="/galery" replace>Галерея</router-link></li>
                        <li><a href="">РЕГИСТРАЦИЯ</a></li>
                        <li><a href="">ЛИЧНЫЙ КАБИНЕТ</a></li>
                        <img src="" alt="">
                    </ul>
                  </nav>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name:"my-header"
    }
</script>

<style scoped>

header{
   
}
header,footer{
    background: linear-gradient(90deg, rgba(0,0,85,1) 15%, rgba(1,0,14,1) 100%);
}

nav ul{
    display: flex;
    align-items: center;
    justify-content: center;
}
ul>li{
    list-style: none;
}
nav>ul>li>a{
    display: block;
    padding: 35px;
    text-transform: uppercase;
}
nav>ul>li>a:hover{
    background-color:rgba(0,0,85,1);
}
</style>