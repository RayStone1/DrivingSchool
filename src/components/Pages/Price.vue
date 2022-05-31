<template>
    <main>
        <div class="container">
            <br>
            <br>
            <br>
            <br>
            <h1 style="text-align: center;">Стоимость обучения</h1>
            <div class="prices">
               
                <div class="price">
                    <h3>Эконом</h3>
                    <h2>24 000р</h2>
                    <p>*Теория (100 часов)</p>
                    <p>*Практические занятия по вождению (25 занятий)</p>
                    <p>*Подготовка документов в ГИБДД</p>
                    <p>*Сопровождение в ГИБДД</p>
                    <p>*Сдача внутреннего экзамена</p>
                    <button>Записаться</button>  
                </div>
                <div class="price" style="margin-top:320px ;">
                    <h3>Эконом</h3>
                    <h2>24 000р</h2>
                    <p>*Теория (100 часов)</p>
                    <p>*Практические занятия по вождению (25 занятий)</p>
                    <p>*Подготовка документов в ГИБДД</p>
                    <p>*Сопровождение в ГИБДД</p>
                    <p>*Сдача внутреннего экзамена</p>
                    <button>Записаться</button>  
                </div>
                <div class="price">
                    <h3>Эконом</h3>
                    <h2>24 000р</h2>
                    <p>*Теория (100 часов)</p>
                    <p>*Практические занятия по вождению (25 занятий)</p>
                    <p>*Подготовка документов в ГИБДД</p>
                    <p>*Сопровождение в ГИБДД</p>
                    <p>*Сдача внутреннего экзамена</p>
                    <button>Записаться</button>  
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
main{
    background: url('@/assets/img/фон\ светофоры.jpg') no-repeat;
    background-size: 100% 100%;
}
.container{
    width: 100%;
    max-width: 1800px;
    margin: 0 auto;
}
*{
    color: #fff;
}
.prices{
    margin: 90px;
    padding: 80px 90px;
    border: 3px solid #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.price{
    width: 30%;
    background: url('@/assets/img/квадрат\ с\ подсветкой.jpg') no-repeat;
    background-size:100% 100% ;
    padding: 30px;
    border-radius: 20px;
    position: relative;
}
.price p{
    margin: 60px 0;
    font-size: 1.5rem;
}
.price button{
    background-color: #000151;
    padding: 20px 80px;
    border-radius: 50px;
    font-size: 2.5rem;
    border: none;
    position: absolute;
    /* left: 20%; */
    bottom: -40px;
}
</style>