<template>
    <footer>
        <div class="container">
            <div class="footer-main">
                <div class="footer-top py-4">
                    <div class="top-menu d-flex justify-content-between">
                        <ul class="navbar-nav p-0 flex-row flex-grow-1 ">
                            <li class="nav-item" v-for="item in items" :key="item">
                                <router-link :to="item.url" class="text-decoration-none">{{ item.menuName }}</router-link>
                            </li>
                        </ul>
                        <div class="social">
                            <span>
                                <a href="#"><font-awesome-icon icon="fa-brands fa-facebook-f" /></a
                                >
                            </span>
                            <span>
                                <a href="#"><font-awesome-icon icon="fa-brands fa-linkedin-in" /></a>
                            </span>
                            <span>
                                <a href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a>
                            </span>
                        </div>
                    </div>
                </div>
                <hr class="m-0">
                <div class="footer-middle py-5">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="middle-item my-4">
                                <h5 class="mb-4">SWAY</h5>
                                <p class="me-4 pe-5">Our feet are on the ground, but our ambitions are above the clouds. Here is how we move from the getting to know you phase to creating something remarkable</p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="middle-item my-4">
                                <h5 class="text-center mb-3">About</h5>
                                <ul class="navbar-nav p-0 flex-grow-1 ">
                                    <li class="nav-item text-center" v-for="item in middleMenu1" :key="item">
                                        <router-link :to="item.url" class="text-decoration-none">{{ item.menuName }}</router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="middle-item my-4">
                                <h5 class="text-center mb-3">Products</h5>
                                <ul class="navbar-nav p-0 flex-grow-1 ">
                                    <li class="nav-item text-center" v-for="item in middleMenu2" :key="item">
                                        <router-link :to="item.url" class="text-decoration-none">{{ item.menuName }}</router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="middle-item last my-4">
                                <h5 class="text-end mb-4">Contact</h5>
                                <ul class="navbar-nav p-0 flex-grow-1 ">
                                    <li class="nav-item text-end">New York. 112 W <br> 34th St, Manhattan</li>
                                    <li class="nav-item text-end">
                                        <a href="tel:+1 2124454320" class="text-decoration-none">(1) 212-445-4320</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="m-0">
                <div class="footer-bottom py-3">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="bottom-item">
                                <p class="m-0 fw-medium">© 2023 Sway by KeyDesign. All Rights Reserved.</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="bottom-item">
                                <ul class="navbar-nav flex-row justify-content-end p-0 flex-grow-1">
                                    <li class="nav-item text-center">
                                        <router-link to="/" class="text-decoration-none">Terms of Use</router-link>
                                    </li>
                                    <li class="nav-item text-center">
                                        <router-link to="/" class="text-decoration-none">Privacy Policy</router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default{
    name:'FooterView',
    data(){
        return{
            items:[
                {
                    menuName:'About',
                    url:'/about'
                },
                {
                    menuName:'Services',
                    url:'/'
                },
                {
                    menuName:'Pricing Plans',
                    url:'/'
                },
                {
                    menuName:'Privacy',
                    url:'/'
                },
                {
                    menuName:'Contact Us',
                    url:'/'
                },
            ],
            middleMenu1:[
                {
                    menuName:'About Sway',
                    url:'/'
                },
                {
                    menuName:'Plans & Pricing',
                    url:'/'
                },
                {
                    menuName:'Services',
                    url:'/'
                },
                {
                    menuName:'Blog',
                    url:'/blog'
                },
            ],
            middleMenu2:[
                {
                    menuName:'Primary Blocks',
                    url:'/'
                },
                {
                    menuName:'Content Blocks',
                    url:'/'
                },
                {
                    menuName:'Infographic Blocks',
                    url:'/'
                },
                {
                    menuName:'Business Blocks',
                    url:'/'
                },
            ],
        }
    }
}

</script>

<style>
footer {
    background: var(--medium-gray);
    margin-top: 80px;
}
.top-menu ul li{
    padding: 0px 15px;
}
.top-menu ul li a{
    padding: 10px 0px!important;
}
.top-menu .social span a{
    padding: 10px 15px!important;
}
.top-menu .social span:last-child a{
    padding-right: 0!important;
}

.top-menu ul li a,
.top-menu .social span a,
.bottom-item ul li a{
    font-family: 'Roboto'!important;
    font-weight: 500;
    color: var(--dark-cyan)!important;
    display: inline-block;
    position: relative;
}


.middle-item ul li a{
    padding: 10px 0px;
    font-family: 'Roboto'!important;
    font-weight: 500;
    color: var(--dark-cyan);
    display: inline-block;
}
.middle-item ul li a{
    position: relative;
}

.middle-item ul li,
.middle-item.last ul li a{
    font-family: 'Roboto'!important;
    font-weight: 400;
    color: var(--dark-cyan);
    display: inline-block;
    padding: 0;
}
.middle-item ul li a:before,
.top-menu ul li a:before {
  content: '';
  width: 0;
  text-align: center;
  height: 2px;
  position: absolute;
  bottom: 0;
  left: 50%;
  background: var(--black);
  transition: 0.2s;
  transform: translateX(-50%);
}
.middle-item ul li a:hover:before,
.top-menu ul li a:hover:before {
  width: 100%;
}
.bottom-item p{
    color: var(--dark-cyan);
}
.bottom-item ul li a{
    padding: 0px 5px;
}
</style>