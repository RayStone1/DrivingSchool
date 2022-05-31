<template>
    <div>
        <div class="page__category">
            <div class="container">
                <div class="about__category">
                    <h1>Обучение на категории</h1>
                    <br>
                    <br>
                    <br>
                    <p>
                        Категория «В» Механическая Коробка Переключения Передач.
                        <br>
                        Курс обучения - 2 месяца.
                        <br>
                        Теория – 15 000 руб.
                        <br>
                        Полный теоретический курс - 138 часов.
                        <br>
                        Практика: Будни - 500 руб./час. <br>
                        Выходные и праздничные дни - 600 руб./час.
                        <br>
                        Полный практический курс - 45 часов.
                        <br>
                        Общая стоимость - 40 000 руб.
                    </p>
                </div>
                <div class="about__category">
                    <h1>Обучение на категории</h1>
                    <br>
                    <br>
                    <br>
                    <p>
                        Категория «В» Автоматическая Коробка Переключения Передач.
                        <br>
                        Курс обучения - 2 месяца.
                        <br>
                        Теория – 15 000 руб.
                        <br>
                        Полный теоретический курс - 138 часов.
                        <br>
                        Практика - 600 руб./час.
                        <br>
                        Полный практический курс - 45 часов.
                        <br>
                        Общая стоимость - 48 000 руб.
                    </p>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
*{
    color: #fff;
}
.page__category{
    background: linear-gradient(38deg, rgba(105,127,195,1) 0%, rgba(68,65,135,1) 100%);
    padding: 40px 0;
}
.about__category{
    text-align: center;
    background: url('@/assets/img/фон.jpg') ;
    background-size: 100% 100%;
    padding: 20px 0;
    border-radius: 20px;
    margin: 40px 0;
    padding: 100px;
}
.about__category p{
    font-size: 26px;
    line-height: 2.5;
    width: 70%;
    text-align: center;
    margin: 0 auto;
}
</style>