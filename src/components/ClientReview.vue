<template>
    <div class="client py-5 my-5">
        <div class="container">
            <div class="client-main">
                <h2 class="mb-5 text-center">What our clients say is extremely important to us</h2>
                <div class="client-section-review pt-4">
                    <swiper
                        :modules="modules"   
                        :slides-per-view="3"
                        :space-between="30"
                        :loop="true"
                        :navigation="true"
                    >
                        <!-- <div class="row"> -->
                            <!-- <div class="col-md-4"> -->
                                <swiper-slide v-for="item in items" :key="item.img">
                                    <div class="client-item-review d-flex justify-content-end p-5">
                                        <div class="img-section">
                                            <img :src="item.img" :alt="item.img">
                                        </div>
                                        <div class="review-details ms-3">
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
.client {
    overflow: hidden;
}
.client-item-review {
    border: 1px solid var(--extra-light-gray)!important;
    transition: box-shadow 0.2s;
}
.client-item-review:hover{
    box-shadow: var(--shadow-black-2);
}
.client-section-review {
    position: relative;
}
.review-details p{
    color: var(--dark-cyan);
}
.review-details p span.name{
    font-weight: 600;
}
.review-details p span.designation{
    color: var(--extra-medium-gray);
}
.swiper-button-prev{
    left: 0;
}
.swiper-button-next{
    right: 0;
}
.swiper-button-prev, .swiper-button-next {
    top: 55%;
    width: 40px;
    height: 40px;
    line-height: 40px;
    background: var(--medium-gray);
    border-radius: 5px;
    transition: 0.3s;
    opacity: 0;
    visibility: hidden;
}
.swiper-button-prev:after, .swiper-button-next:after {
    font-size: 16px;
    color: var(--dark-cyan);
    font-weight: 600;
}
.swiper-button-prev:hover, .swiper-button-next:hover {
    background: var(--dark-cyan);
}
.swiper-button-prev:hover:after, .swiper-button-next:hover:after{
    color: var(--white);
} 
.swiper{
    position: initial;
    overflow: initial;
}
.client-section-review:hover .swiper-button-prev,.client-section-review:hover .swiper-button-next{
    opacity: 1;
    visibility: visible;
}
.client-section-review:hover .swiper-button-prev{
    transform: translateX(-60px);
}
.client-section-review:hover .swiper-button-next{
    transform: translateX(60px);
}
</style>