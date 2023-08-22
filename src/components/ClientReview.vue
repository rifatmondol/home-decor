<template>
    <div class="client py-5 my-5">
        <div class="container">
            <div class="client-main">
                <h2 class="mb-5 text-center">What our clients say is extremely important to us</h2>
                <div class="client-section-review pt-4">
                    <swiper
                        :modules="modules"   
                        :navigation="true"
                        :breakpoints="swiperOptions.breakpoints"
                    >
                        <!-- <div class="row"> -->
                            <!-- <div class="col-md-4"> -->
                                <swiper-slide v-for="item in items" :key="item.img">
                                    <div class="client-item-review d-md-flex justify-content-end p-5">
                                        <div class="img-section mb-md-0 mb-3 text-center">
                                            <img :src="item.img" :alt="item.img">
                                        </div>
                                        <div class="review-details ms-md-3">
                                            <p v-html="item.review"></p>
                                            <hr>
                                            <p class="mb-0"><span class="name me-1">{{ item.name }}</span> <span class="designation">{{ item.designation }}</span></p>
                                        </div>
                                    </div>
                                </swiper-slide>
                            <!-- </div> -->
                        <!-- </div> -->
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>    

<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation } from 'swiper/modules'
  
  import 'swiper/css';
  import 'swiper/css/navigation'

  import review1 from '@/assets/images/review1.jpg'
  import review2 from '@/assets/images/review2.jpg'
  import review3 from '@/assets/images/review3.jpg'
  import review4 from '@/assets/images/review4.jpg'
  import review5 from '@/assets/images/review5.jpg'

export default{
    name:"ClientView",
    data(){
        return{
            items:[
                {
                    img:review1,
                    review:'You are so easy to work with and understand our aesthetic and direction so well. <br><br>Excellent Team!',
                    name:'Vincent Smith',
                    designation:'CEO at Ritmo'
                },
                {
                    img:review2,
                    review:'You are so easy to work with and understand our aesthetic and direction so well. <br><br>Excellent work!',
                    name:'Monica Smith',
                    designation:'Web Designer'
                },
                {
                    img:review3,
                    review:'You are so easy to work with and understand our aesthetic and direction so well. <br><br>Amazing work!',
                    name:'Thomas Smith',
                    designation:'Angel Investor'
                },
                {
                    img:review4,
                    review:'You are so easy to work with and understand our aesthetic and direction so well. <br><br>Nice work!',
                    name:'Alois Smith',
                    designation:'UI/UX Designer'
                },
                {
                    img:review5,
                    review:'You are so easy to work with and understand our aesthetic and direction so well. <br><br>Nice work!',
                    name:'Arnest Smith',
                    designation:'Senior Analyst'
                },
            ], 
            swiperOptions: {
                breakpoints: { 
                    320: {       
                        slidesPerView: 1,
                        spaceBetween: 20     
                    },              
                    768: {       
                        slidesPerView: 2,
                        spaceBetween: 20     
                    },                   
                    1200: {       
                        slidesPerView: 3,       
                        spaceBetween: 30     
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