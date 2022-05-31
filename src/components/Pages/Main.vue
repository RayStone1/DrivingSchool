<template>
    <main>
        <div class="intro">
            <p>АКЦИЯ ДЛЯ НАШИХ СТУДЕНТОВ</p>
            <p style="margin:40px">СТАНЬ БЕЗУПРЕЧНЫМ ВОДИТЕЛЕМ <br> ЗА 3 МЕСЯЦА!</p>
            <a href="" class="btn">Записаться</a><br>
            <img src="@/assets/img/PikPng.com_indian-car-png_1462765.png" alt="">
        </div>
        <div class="about">
            <div class="container">
                <div class="about-items">
                    <div class="about__item">
                        <div class="item-border">
    
                        </div>
                        <div class="aboit__item__inner">
                            <img src="@/assets/img/логотип2.png" alt="">  
                            <p>работаем уже 10 лет и <br>
                                развиваемся</p><br>
                            <a href="" class="btn">Запись</a>
                        </div>
                    </div>
                    <div class="about__item">
                        <div class="item-border">
    
                        </div>
                        <div class="aboit__item__inner">
                            <img src="@/assets/img/логотип2.png" alt="">  
                            <p>работаем уже 10 лет и <br>
                                развиваемся</p><br>
                            <a href="" class="btn">Запись</a>
                        </div>
                    </div>
                    <div class="about__item">
                        <div class="item-border">
    
                        </div>
                        <div class="aboit__item__inner">
                            <img src="@/assets/img/логотип2.png" alt="">  
                            <p>работаем уже 10 лет и <br>
                                развиваемся</p><br>
                            <a href="" class="btn">Запись</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="category">
                <div class="container">
                    <div class="category__inner">
                        <div class="category__wrapper">
                            <div class="category__block" style="float:right">
                                <h3>КАТЕГОРИЯ B</h3>
                                <p>(Автоматическая Коробка Переключения Передач)</p>
                                <br>
                                <h3>40 000руб</h3>
                                <br>
                                <img src="@/assets/img/image-removebg-preview.png" alt="">
                                <a href="" style="float:left;" class="btn" >ПОДРОБНЕЕ</a>
                            </div>
                        </div>
                            
                        <div class="category__wrapper">
                            <div class="category__block" style="float:left;">
                                <a href="" class="btn" style="float:right">ПОДРОБНЕЕ</a>
                                <img src="@/assets/img/image-removebg-preview-2.png" alt="">
                                <h3>КАТЕГОРИЯ B</h3>
                                <p>(Автоматическая Коробка Переключения Передач)</p>
                                <br>
                                <h3>40 000руб</h3>
                                <br>
                            </div>
                        </div>
                            

                    </div>
                </div>
               
            </div>

            <div class="statistics">
                <div class="container">
                    <div class="statistics__inner">
                        <div class="statis__item">
                            <h2>345</h2>
                            <p>ДОВОЛЬНЫХ 
                                КЛИЕНТОВ
                                В ГОД</p>
                        </div>
                        <div class="statis__item">
                            <h2>345</h2>
                            <p>ДОВОЛЬНЫХ 
                                КЛИЕНТОВ
                                В ГОД</p>
                        </div>
                        <div class="statis__item">
                            <h2>345</h2>
                            <p>ДОВОЛЬНЫХ 
                                КЛИЕНТОВ
                                В ГОД</p>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
       
    </main>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
/* Интро */
.intro{
    width: 100%;
    height: 100vh;
    background: url('@/assets/img/speedometer.jpg') no-repeat;
    background-size: 100% 100%;
    text-align: center;
    position: relative;
    color: #fff;
}
.intro p{
    font-size: 30px;
    padding: 20px 0;
}
.intro:first-child{
    padding-top: 100px;
}
.intro img{
    /* width: 1000px; */
    width: 50%;
    position: absolute;
    bottom: 10px;
    left: 25%;

}
/* About */
.about{
    background: url('@/assets/img/задний фон.jpg'); 
    color: #fff;
    background-size: 100% 100%;
    padding:40px 0;
}
.about-items{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 40px 0;
}
.about__item{
    width: 20%;
    margin: 20px 40px;
    position: relative;
    /* text-transform: uppercase; */

}
.item-border{
    border: 3px solid #00094A;
    height: 350px;
}
.aboit__item__inner{
    background:url('@/assets/img/квадраты.jpg');
    background-size: 100% 100%;
    position: absolute;
    top: 10%;
    right: -40%;
    height: auto;
    padding: 20px;
    text-align: center;
    width: 110%;
}
.aboit__item__inner img{
    width: 200px;
    float: left;
    margin-top: 20%;
}
.aboit__item__inner p{
    margin: 100% 0 30%;
    text-transform: uppercase;
    text-align: left;
}

.category{
   display: block;
   height:1500px;
}
.category__inner{
    position: relative;
    margin: 100px 0;
    width: 100%;
}
.category__item{
    width: 100% ;
}
.category__wrapper{
    width: 100%;
}
.category__block{
    padding: 40px;
    width: 60%;
    background: url('@/assets/img/фон.jpg');
    background-size: 100% 100%;
    border-radius: 8px;
    margin: 60px 0;
    position: relative;
    text-align: center;
}

.category__wrapper:first-child img{
    /* transform: scaleX(-1); */
    transform: translate(70%);
}
.category__wrapper:last-child img{
    /* transform: scaleX(-1); */
    transform: translate(-50%);
}
.statistics{
    /* margin-top: 90%; */
    background-color: #04092D;
}
.statistics__inner{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.statis__item:first-child{
    border-right: 4px solid #fff;
}
.statis__item:last-child{
    border-left: 4px solid #fff;
}
.statis__item{
    text-align: center;
    padding: 40px;
}
.statis__item h2{
    font-size: 30px;
}
.statis__item p{
    font-size: 24px;
}
</style>