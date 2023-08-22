<template>
    <div class="product-section py-5 my-5">
        <div class="container">
            <h2 class="text-center mb-5 pb-3 title">Make your home even more personal with our products</h2>
            <div class="product-details px-md-5">
                <div class="row">
                    <div class="col-lg-3 col-md-6 mb-4" v-for="item in items" :key="item.image">
                        <router-link to="/" class="text-decoration-none text-inherit">
                            <div class="product-container">
                                <div class="product-image position-relative">
                                    
                                        <img :src="item.image" :alt="item.image" class="w-100">
                                        <span class="sale d-inline-block position-absolute top-0" v-if="item.sale">Sale 50%</span>
                                        <button class="position-absolute start-50 opacity-0">Add to cart</button>
                                    
                                    
                                </div>
                                <div class="product-description mt-3">
                                    <h5 class="mb-1">{{ item.title }}</h5>
                                    <div class="product-price">
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="price">
                                                    <span class="deleted d-inline-block me-1" v-if="item.deleted">
                                                        <del>{{ item.deletedAmount }}</del>
                                                    </span>
                                                    <span class="present d-inline-block">{{ item.amount }}</span>
                                                </div>
                                            </div>
                                            <div class="col-6 text-end">
                                                <div class="rating">
                                                    <span><font-awesome-icon v-for="n in maxRating" :key="n" :icon="getStarIcon(item.star, n)" /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="button mt-5 pt-1 text-center">
                <router-link to="/" class="text-decoration-none py-3 px-4 d-inline-block">
                    View all products
                </router-link>
            </div>

            <div class="shipping-section pt-5 px-md-5 mt-5">
                <div class="row">
                    <div class="col-md-4 mb-4" v-for="shipping in shippings" :key="shipping">
                        <div class="item text-center">
                            <img :src="shipping.src" :alt="shipping.src">
                            <h3 class="pt-4">{{ shipping.name }}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { faStar as fasStar} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

import shop_1 from '@/assets/images/home_decor_shop_1.jpg'
import shop_2 from '@/assets/images/home_decor_shop_2.jpg'
import shop_3 from '@/assets/images/home_decor_shop_3.jpg'
import shop_4 from '@/assets/images/home_decor_shop_4.jpg'
import icon1 from '@/assets/images/home-decor-icon1.png'
import icon2 from '@/assets/images/home-decor-icon2.png'
import icon3 from '@/assets/images/home-decor-icon3.png'

export default{
    name:"ProductView",
    data(){
        return{
            maxRating: 5,
            items:[
                {
                    image:shop_2, 
                    url:'/',
                    sale: true, 
                    title:'10" Wall Clock', 
                    deleted: true, 
                    deletedAmount:'$60.00', 
                    amount:'$30.00', 
                    star:4
                },
                {
                    image:shop_3, 
                    url:'/', 
                    sale: false, 
                    title:'Curved Dinign Chair', 
                    deleted: false, 
                    deletedAmount:'', 
                    amount:'$30.00', 
                    star:5
                },
                {
                    image:shop_1, 
                    url:'/', 
                    sale: false, 
                    title:'Metal and Wood Table', 
                    deleted: false, 
                    deletedAmount:'', 
                    amount:'$30.00', 
                    star:4
                },
                {
                    image:shop_4, 
                    url:'/', 
                    sale: true, 
                    title:'Potted Palm Leaf Plants', 
                    deleted: true, 
                    deletedAmount:'$80.00', 
                    amount:'$30.00', 
                    star:5
                },
            ],
            shippings:[
                {src:icon1, name:'Fast and Free Shipping'},
                {src:icon2, name:'Hassle-Free Returns'},
                {src:icon3, name:'Satisfaction Guarantee'},
            ]
        }
    },
    methods: {
        getStarIcon(starValue, index) {
            return index <= starValue ? fasStar : farStar;
        }
    }
}
</script>

<style>
</style>