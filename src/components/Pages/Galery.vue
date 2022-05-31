<template>
    <div>
        <main>
            <br>
            <br>
            <br>
            <h1 style="text-align: center;">Галерея</h1>
            <br>
            <hr>
            <div class="container">
                <div class="galery__inner">
                    <div class="galery__block">
                        <h2>Фото учебных классов автошколы </h2>
                        <div class="imgs">
                            <img src="@/assets/img/a9pYThcMFYNnOD-o-mZCmoq8Cu4oywsKREDp8UwQEgv6qDZz5ErcsAn0eY7ulaDg2J90AKRA3961N18jM2-lf04N.jpg" alt="">
                            <img src="@/assets/img/nZ0G-B2UtzIE0oRfBEhEYbMhu8i4_0blIqpBHjRi_HTaa0jdddbNT18HJONgUQCetEqP3DGA74WaFai73QFquZXz.jpg" alt="">
                        </div>
                            <hr>
                    </div>
                    <div class="galery__block">
                        <h2>Фото учебных автомобилей</h2>
                        <div class="imgs">
                            <img src="@/assets/img/zIoZHBIvn2m45asBd2WQq4gWgQ_xlOOlvcuhrcVqPztYUejDHQqTGVJdoSx5Tloah-z3E7-892jDQFQBFjXjn9if.jpg" alt="">
                            <img src="@/assets/img/O2W8sJ8l06avIYQsxjib77RylpvfapIX_sZve8SiMsa06JoPnNnMZrcjG5-JO7QU8s81Z-TQGYheVMH2k_aM13oC.jpg" alt="">
                           
                        </div>
                        <hr>
                    </div>
                    <div class="galery__block">
                        <h2>Фото инструкторов автошколы </h2>
                        <div class="imgs">
                            <img src="@/assets/img/x3bm-5MqfATAsZN8apLTqa4kSvhJF01QL32SbGJrKm70EoaxQ82z9QVkimuolo75VOKOoB6BMKxmVFcyZVI0_IqH.jpg" alt="">
                            <img src="@/assets/img/4SzEXiLx5uotGXild9Ddle8_WFWO1bC59p5RMAfFoh2PCuQ2oDsSEWMn6EiITAzHXzVF0mKgiMREkoBtV-_rHJsN.jpg" alt="">
                           
                        </div>
                    </div>
                </div>
            </div>
            <hr>
        </main>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
main{
   
}
main>hr,.galery__block hr{
    margin: 40px 0;
    height: 5px;
    background-color: #01004E;
}
.galery__inner{
    text-align: center;
}
.imgs{
    display: flex;
    justify-content: space-between;
    margin: 40px 0;
}
.imgs img{
    width: 45%;
}
</style>