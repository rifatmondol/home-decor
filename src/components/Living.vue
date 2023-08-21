<template>
    <div class="living-section mb-160">
        <div class="container">
            <div class="living-main position-relative py-5">
                <h2 class="mt-5 mb-5 text-center">Living a more beautiful and happy life at home</h2>
                <div class="living-container px-4 pt-4">
                    <div class="row">
                        <div class="col-md-4" v-for="item in items" :key="item">
                            <div class="living-item">
                                <div class="living-image mb-3">
                                    <router-link to="/" class="d-block"><img :src="`../src/assets/images/home_decor_${item.src}.jpg`" :alt="item.src" class="w-100"></router-link>
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
export default{
    name:'LivingView',
    data(){
        return{
            items:[
                {
                    src:'blog_1',
                    types:'Lifestyle',
                    title:'7 Interior design podcasts to add to your queue immediately'
                },
                {
                    src:'blog_2',
                    types:'Decor',
                    title:'A house was transformed without any major renovations'
                },
                {
                    src:'blog_3',
                    types:'Luxury',
                    title:'These are the interior plants that experts are buying this summer'
                },
            ]
        }
    }
}

</script>

<style>
.mb-160{
    margin-bottom: 160px!important;
}
.living-main {
    background-image: url(/src/assets/images/home-decor-lines2.png);
    background-position: 50% 0%;
    height: 600px;
    background-repeat: no-repeat;
    border-radius: 50px;
}
.living-main:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--medium-gray);
    z-index: -1;
    border-radius: 50px;
}
.living-item {
    background: var(--white);
    padding: 15px;
    border-radius: 5px;
    border: 1px solid var(--medium-gray);
    transition: transform 0.25s;
}
.living-item:hover{
    transform: translateY(-10px);
    box-shadow: var(--shadow-black);
}
.living-image a img{
    border-radius: 5px;
}
.living-description{
    padding: 0px 20px;
}
.living-description .type a {
    background: var(--off-white);
    padding: 3px 12px;
    border-radius: 25px;
    font-size: 15px;
    color: var(--dark-cyan);
    font-family: 'Futura PT Light'!important;
    letter-spacing: 0.3px;
    transition: 0.2s;
    font-weight: 600;
}
.living-description .type a:hover{
    background: var(--dark-cyan);
    color: var(--white);
}
.living-description .type a svg{
    font-size: 12px;
    margin-right: 5px;
}
.living-description .title a{
    font-size: 21px;
    color: var(--dark-cyan);
    font-family: 'Futura PT Light'!important;
    font-weight: 600;
}
.living-description p:last-child,.living-description p:last-child a {
    color: var(--light-gray);
    font-weight: 600;
}
</style>