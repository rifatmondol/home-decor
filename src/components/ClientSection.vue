<template>
    <div class="client-section my-5 pb-5">
        <div class="container">
            <!-- <div class="row"> -->
                <div class="swiper-container" >
                <swiper
                    :modules="modules"   
                    :navigation="true"
                    :breakpoints="swiperOptions.breakpoints"
                >
                    <swiper-slide v-for="image in images" :key="image">
                        <div class="client-item">
                            <router-link :to="image.src" class="d-block text-center">
                            <img :src="image.name" :alt="image.name" class="position-relative">
                            </router-link>
                        </div>
                    </swiper-slide>  
                    
                </swiper>
                </div>
            <!-- </div> -->
        </div>
    </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation } from 'swiper/modules'
  
  import 'swiper/css';
  import 'swiper/css/navigation'

  // Images 
import client1 from '@/assets/images/home-decor-client1.png'
import client2 from '@/assets/images/home-decor-client2.png'
import client3 from '@/assets/images/home-decor-client3.png'
import client4 from '@/assets/images/home-decor-client4.png'
import client5 from '@/assets/images/home-decor-client5.png'
import client6 from '@/assets/images/home-decor-client6.png'

export default{
    name:'ClientSection',
    data(){
        return{
            images:[
                {name: client1, src:'/'},
                {name: client2, src:'/'},
                {name: client3, src:'/'},
                {name: client4, src:'/'},
                {name: client5, src:'/'},
                {name: client6, src:'/'},
                {name: client1, src:'/'},
                {name: client2, src:'/'},
                {name: client3, src:'/'},
            ],
            swiperOptions: {
                breakpoints: {       
                    320: {       
                        slidesPerView: 2,
                        spaceBetween: 10     
                    },              
                    415: {       
                        slidesPerView: 3,
                        spaceBetween: 10     
                    },                   
                    991: {       
                        slidesPerView: 6,       
                        spaceBetween: 20     
                    } 
                }
            }
        }
    },
    components: {
      Swiper,
      SwiperSlide,
    },
    setup(){
        return{
            modules: [Navigation],
        }
    }
}
</script>

<style>

</style>