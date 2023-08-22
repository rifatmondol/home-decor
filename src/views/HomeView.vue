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
          <div class="col-md-3 d-flex align-items-center justify-content-md-end">
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
  <ClientSection/>
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
import ClientSection from '@/components/ClientSection.vue'
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
    ClientSection,
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
      
    }
  }
}
</script>

<style>


</style>
