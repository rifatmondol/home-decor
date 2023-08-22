<template>
    <div class="living-section mb-160">
        <div class="container">
            <div class="living-main position-relative py-5">
                <h2 class="mt-5 mb-5 text-center">Living a more beautiful and happy life at home</h2>
                <div class="living-container px-4 pt-4">
                    <div class="row">
                        <div class="col-md-4 mb-4" v-for="item in items" :key="item">
                            <div class="living-item">
                                <div class="living-image mb-3">
                                    <router-link to="/" class="d-block"><img :src="item.src" :alt="item.src" class="w-100"></router-link>
                                </div>
                                <div class="living-description pb-3">
                                    <div class="type mb-3">
                                        <router-link to="/" class="d-inline-block text-decoration-none"><font-awesome-icon icon="fa-solid fa-circle" /> {{ item.types }}</router-link>
                                    </div>
                                    <p class="title mb-3"><router-link to="/" class="d-inline-block text-decoration-none">{{ item.title }} </router-link></p>
                                    <p>
                                        <span class="me-3"><font-awesome-icon icon="fa-regular fa-clock" /> July 29, 2020</span>
                                        <span><router-link to="/" class="d-inline-block text-decoration-none"><font-awesome-icon icon="fa-solid fa-pencil" /> admin</router-link></span>
                                    </p>
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
import blog_1 from '@/assets/images/home_decor_blog_1.jpg'
import blog_2 from '@/assets/images/home_decor_blog_2.jpg'
import blog_3 from '@/assets/images/home_decor_blog_3.jpg'
export default{
    name:'LivingView',
    data(){
        return{
            items:[
                {
                    src:blog_1,
                    types:'Lifestyle',
                    title:'7 Interior design podcasts to add to your queue immediately'
                },
                {
                    src:blog_2,
                    types:'Decor',
                    title:'A house was transformed without any major renovations'
                },
                {
                    src:blog_3,
                    types:'Luxury',
                    title:'These are the interior plants that experts are buying this summer'
                },
            ]
        }
    }
}

</script>

<style>

</style>