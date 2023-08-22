<template>
    <div class="best-price py-5 my-5">
        <div class="container">
            <div class="best-main">
                <div class="title-part">
                    <h2 class="text-center mb-3">Biggest selection. Best prices. Every day.</h2>
                    <p class="text-center">Come discover the Home Décor Sway Store with endless aisles <br>
                                        of must-have styles, at prices so low you won't believe it.
                    </p>
                </div>

                <div class="content-part mt-5 pt-4">
                    <div class="row">
                        <div class="col-md-4 mb-4" v-for="list in lists" :key="list.img">
                            <div class="content-item">
                                <div class="image-part">
                                    <router-link to="/"><img :src="list.img" :alt="list.img"></router-link>
                                </div>
                                <div class="details-part mt-4">
                                    <h5>{{ list.title }}</h5>
                                    <p class="mb-4">{{ list.description }}</p>
                                    <router-link to="/" class="text-decoration-none">{{ list.button }}</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import decor2 from '@/assets/images/home-decor2.jpg'
import decor3 from '@/assets/images/home-decor3.jpg'
import decor4 from '@/assets/images/home-decor4.jpg'

export default{
    name:'BestPrice',
    data(){
        return{
            lists:[
                {img: decor2, title: 'Furniture', description: 'Give your space a unique and modern look with home goods from artisans worldwide. You can shop online and pick up in-store or curbside.', button:'Shop Now'},
                {img: decor3, title: 'Lighting', description: 'Give your space a unique and modern look with home goods from artisans worldwide. You can shop online and pick up in-store or curbside.', button:'Shop Now'},
                {img: decor4, title: 'Bedding', description: 'Give your space a unique and modern look with home goods from artisans worldwide. You can shop online and pick up in-store or curbside.', button:'Shop Now'},
            ]
        }
    }
}
</script>

<style>
</style>