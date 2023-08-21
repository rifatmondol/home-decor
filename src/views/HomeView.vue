<template>
  <Header />
  <Banner />
  <BestPrice/>
  <div class="save-extra mb-5">
    <div class="container">
      <div class="save-extra-main">
        <div class="extra-main-part">
          <div class="row">
          <div class="col-md-9">
            <div class="extra-item">
              <h2 class="mb-0">Save an EXTRA 10% on curbside pick-up orders, <br>
              now available in select locations.</h2>
            </div>
          </div>
          <div class="col-md-3 d-flex align-items-center justify-content-end">
            <div class="extra-item">
                <router-link to="/" class="text-decoration-none">Learn More</router-link>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  <Furniture/>
  <div class="client-section my-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="col-md-2" v-for="image in images" :key="image">
          <div class="client-item">
            <router-link :to="image.src" class="d-block text-center">
              <img :src="`../src/assets/images/home-decor-${image.name}.png`" :alt="image.name" class="position-relative">
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <hr>
  </div>
  <Product/>
  <Living/>
  <Subscribe/>
  <Contact/>
  <ClientReview/>
  <FooterPart/>
  <BottomToTop/>
</template>

<script>
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import BestPrice from '@/components/BestPrice.vue'
import Furniture from '@/components/Furniture.vue'
import Product from '@/components/Product.vue'
import Living from '@/components/Living.vue'
import Subscribe from '@/components/Subscribe.vue'
import Contact from '@/components/Contact.vue'
import ClientReview from '@/components/ClientReview.vue'
import FooterPart from '@/components/FooterPart.vue'
import BottomToTop from '@/components/BottomToTop.vue'

export default {
  name: 'HomeView',
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Header,
    Banner,
    BestPrice,
    Furniture,
    Product,
    Living,
    Subscribe,
    Contact,
    ClientReview,
    FooterPart,
    BottomToTop
  },
  data(){
    return{
      images:[
        {name:'client1', src:'/'},
        {name:'client2', src:'/'},
        {name:'client3', src:'/'},
        {name:'client4', src:'/'},
        {name:'client5', src:'/'},
        {name:'client6', src:'/'}
      ]
    }
  }
}
</script>

<style>
.save-extra-main {
    background-image: url(/src/assets/images/home-decor-lines.png);
    background-position: center;
    height: 280px;
    background-repeat: no-repeat;
    padding: 40px 0px;
    position: relative;
    border-radius: 50px;
    display: flex;
    align-items: center;
}
.save-extra-main:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background: var(--medium-gray);
    border-radius: 50px;
    z-index: -1;
}
.extra-main-part{
  width: 970px;
  margin: 0 auto;
}
.extra-item h2{
  color: var(--dark-cyan);
  font-size: 36px;;
}
.extra-item a {
    font-size: 15px;
    font-family: Roboto;
    border-radius: 5px;
    font-weight: 500;
    position: relative !important;
    transition: 0.2s !important;
    z-index: 2!important;
    background: var(--dark-cyan);
    color: var(--white);
    height: 55px;
    width: 150px;
    display: inline-block;
    text-align: center;
    line-height: 55px;
    border: 1px solid var(--dark-cyan);
}
.extra-item a:hover{
  color: var(--dark-cyan) !important;
  background: 0 0 !important;
  border: 1px solid var(--white);
}
.extra-item a::before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
  transition: transform 0.25s cubic-bezier(0.38, 0.32, 0.36, 0.98) 0s,
    -webkit-transform 0.25s cubic-bezier(0.38, 0.32, 0.36, 0.98) 0s;
  transform: scaleX(0);
  transform-origin: right center;
  display: block;
  border-radius: 5px;
  background: var(--white);

}
.extra-item a:hover::before {
  background: var(--white);
  transform: scale(1);
  transform-origin: left center;
  z-index: -1;
 
}

/* Client css */
.client-item a {
    transition: 0.3s;
}
.client-item a:hover{
  transform: translateY(-10px);
}
</style>
