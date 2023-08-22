<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="position-absolute w-100">
    <!-- Header top -->
    <div class="header-top border-bottom">
      <div class="container">
        <div class="header-top-content d-flex justify-content-between">
          <div class="social">
            <span
              ><a href="#"><font-awesome-icon icon="fa-brands fa-facebook-f" /></a
            ></span>
            <span
              ><a href="#"><font-awesome-icon icon="fa-brands fa-linkedin-in" /></a
            ></span>
            <span
              ><a href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a
            ></span>
          </div>
          <div class="contact">
            <span><a href="tel:++12129462700">+1 212 946 2700</a></span>
            <span><router-link to="/">Help Desk</router-link></span>
            <span><router-link to="/">Why Sway</router-link></span>
          </div>
        </div>
      </div>
    </div>
    <!-- Main nav -->
    <nav class="navbar navbar-expand-lg sticky-top top-0" :class="{ hovered: isHovered }">
      <div class="container">
        <router-link class="navbar-brand" to="/">SWAY </router-link>
        <ul class="navbar-nav justify-content-end flex-row flex-grow-1 pe-md-3">
            <li class="nav-item search position-relative d-block d-lg-none">
                <router-link to="/" class="nav-link py-0" @click="searchClick()">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" v-if="IsActive == false"/>
                    <font-awesome-icon icon="fa-solid fa-xmark" v-else @click.stop.prevent="closeClick()"/>
                </router-link>
                <!-- Search Box -->
                <div
                    class="input-box position-absolute"
                    :class="{ active: IsActive }"
                >
                    <input type="text" class="border w-100 h-50 p-2" placeholder="Search..." />
                    <span class="close ms-2">
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                    </span>
                </div>
                <!-- Search Box -->
            </li>
            <li class="nav-item cart-item position-relative d-block d-lg-none">
                <router-link to="/" class="nav-link py-0">
                    <font-awesome-icon icon="fa-solid fa-cart-shopping"/>
                </router-link>
                <ul class="shopping d-none position-absolute">
                    <li>Your cart is currently empty.</li>
                </ul>
            </li>
        </ul>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <router-link class="navbar-brand" to="/">SWAY</router-link>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-lg-3 main-nav">
              <li class="nav-item" v-for="menu in menus" :key="menu">
                <router-link
                  class="nav-link"
                  :class="{ 'dropdown-toggle': menu.dropdown }"
                  :to="menu.url"
                  @mouseover="setHovered(true)"
                  @mouseout="setHovered(false)"
                  >{{ menu.text }}
                </router-link>
                <div
                  class="mega-menu w-100 py-lg-5 position-absolute d-none"
                  :class="{ active: menu.dropdown }"
                >
                  <div class="row">
                    <div class="col-lg-2">
                      <ul class="dropdown-menu">
                        <li v-for="submenu in menu.subnav1" :key="submenu">
                          <router-link class="dropdown-item" :to="submenu.url">{{
                            submenu.text
                          }}</router-link>
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-2">
                      <ul class="dropdown-menu">
                        <li v-for="submenu in menu.subnav2" :key="submenu">
                          <router-link class="dropdown-item" :to="submenu.url">{{
                            submenu.text
                          }}</router-link>
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-2">
                      <ul class="dropdown-menu">
                        <li v-for="submenu in menu.subnav3" :key="submenu">
                          <router-link class="dropdown-item" :to="submenu.url">{{
                            submenu.text
                          }}</router-link>
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-2">
                      <ul class="dropdown-menu">
                        <li v-for="submenu in menu.subnav4" :key="submenu">
                          <router-link class="dropdown-item" :to="submenu.url">{{
                            submenu.text
                          }}</router-link>
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-2">
                      <ul class="dropdown-menu">
                        <li v-for="submenu in menu.subnav5" :key="submenu">
                          <router-link class="dropdown-item" :to="submenu.url">{{
                            submenu.text
                          }}</router-link>
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-2">
                      <ul class="dropdown-menu">
                        <li v-for="submenu in menu.subnav6" :key="submenu">
                          <router-link class="dropdown-item" :to="submenu.url">{{
                            submenu.text
                          }}</router-link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li class="nav-item flag-item position-relative">
                <router-link class="nav-link dropdown-toggle" to="/"
                  ><img src="@/assets/images/en-flag.png" alt="flag"
                /></router-link>
                <ul class="flag d-none position-absolute">
                  <li v-for="flag in flags" :key="flag.value">
                    <router-link to="/"
                      ><img :src="flag.value" :alt="flag.value" /><span
                        class="d-inline-block ms-2"
                        >{{ flag.name }}</span
                      ></router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item cart-item position-relative d-none d-lg-block">
                <router-link to="/" class="nav-link"
                  ><font-awesome-icon icon="fa-solid fa-cart-shopping"
                /></router-link>
                <ul class="shopping d-none position-absolute">
                  <li>Your cart is currently empty.</li>
                </ul>
              </li>
              <li class="nav-item search position-relative d-none d-lg-block">
                <router-link to="/" class="nav-link" @click="searchClick()">
                  <font-awesome-icon icon="fa-solid fa-magnifying-glass" v-if="IsActive == false"/>
                  <font-awesome-icon icon="fa-solid fa-xmark" v-else @click.stop.prevent="closeClick()"/>
                </router-link>
                <!-- Search Box -->
                <div
                  class="input-box position-absolute"
                  :class="{ active: IsActive }"
                >
                  <input type="text" class="border w-100 h-50 p-2" placeholder="Search..." />
                  <span class="close ms-2">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                  </span>
                </div>
                <!-- Search Box -->
              </li>
              <li class="nav-item quote">
                <router-link to="/" class="nav-link text-center">Get a Quote</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
// import {en} from "@/lang/en";
import enFlag from '@/assets/images/en-flag.png'
import frFlag from '@/assets/images/fr-flag.png'
import deFlag from '@/assets/images/de-flag.png'

export default {
  name: 'HeaderComponent',
  data() {
    return {
      IsActive: false,
      isHovered: false,
      menus: [
        { text: 'Home', url: '/' },
        { text: 'About', url: '/about' },
        {
          text: 'Portfolio',
          url: '/portfolio',
          dropdown: true,
          subnav1: [
            { text: 'Portfolio 1', url: '/' },
            { text: 'Portfolio 2', url: '/' },
            { text: 'Portfolio 3', url: '/' },
            { text: 'Portfolio 4', url: '/' },
            { text: 'Portfolio 5', url: '/' }
          ],
          subnav2: [
            { text: 'Portfolio 1', url: '/' },
            { text: 'Portfolio 2', url: '/' },
            { text: 'Portfolio 3', url: '/' },
            { text: 'Portfolio 4', url: '/' },
            { text: 'Portfolio 5', url: '/' }
          ],
          subnav3: [
            { text: 'Portfolio 1', url: '/' },
            { text: 'Portfolio 2', url: '/' },
            { text: 'Portfolio 3', url: '/' },
            { text: 'Portfolio 4', url: '/' },
            { text: 'Portfolio 5', url: '/' }
          ],
          subnav4: [
            { text: 'Portfolio 1', url: '/' },
            { text: 'Portfolio 2', url: '/' },
            { text: 'Portfolio 3', url: '/' },
            { text: 'Portfolio 4', url: '/' },
            { text: 'Portfolio 5', url: '/' }
          ],
          subnav5: [
            { text: 'Portfolio 1', url: '/' },
            { text: 'Portfolio 2', url: '/' },
            { text: 'Portfolio 3', url: '/' },
            { text: 'Portfolio 4', url: '/' },
            { text: 'Portfolio 5', url: '/' }
          ],
          subnav6: [
            { text: 'Portfolio 1', url: '/' },
            { text: 'Portfolio 2', url: '/' },
            { text: 'Portfolio 3', url: '/' },
            { text: 'Portfolio 4', url: '/' },
            { text: 'Portfolio 5', url: '/' }
          ]
        },
        {
          text: 'Blog',
          url: '/blog',
          dropdown: true,
          subnav1: [
            { text: 'Blog 1', url: '/' },
            { text: 'Blog 2', url: '/' },
            { text: 'Blog 3', url: '/' },
            { text: 'Blog 4', url: '/' },
            { text: 'Blog 5', url: '/' }
          ],
          subnav2: [
            { text: 'Blog 1', url: '/' },
            { text: 'Blog 2', url: '/' },
            { text: 'Blog 3', url: '/' },
            { text: 'Blog 4', url: '/' },
            { text: 'Blog 5', url: '/' }
          ],
          subnav3: [
            { text: 'Blog 1', url: '/' },
            { text: 'Blog 2', url: '/' },
            { text: 'Blog 3', url: '/' },
            { text: 'Blog 4', url: '/' },
            { text: 'Blog 5', url: '/' }
          ],
          subnav4: [
            { text: 'Blog 1', url: '/' },
            { text: 'Blog 2', url: '/' },
            { text: 'Blog 3', url: '/' },
            { text: 'Blog 4', url: '/' },
            { text: 'Blog 5', url: '/' }
          ],
          subnav5: [
            { text: 'Blog 1', url: '/' },
            { text: 'Blog 2', url: '/' },
            { text: 'Blog 3', url: '/' },
            { text: 'Blog 4', url: '/' },
            { text: 'Blog 5', url: '/' }
          ],
          subnav6: [
            { text: 'Blog 1', url: '/' },
            { text: 'Blog 2', url: '/' },
            { text: 'Blog 3', url: '/' },
            { text: 'Blog 4', url: '/' },
            { text: 'Blog 5', url: '/' }
          ]
        },
        {
          text: 'Shop',
          url: '/',
          dropdown: true,
          subnav1: [
            { text: 'Shop 1', url: '/' },
            { text: 'Shop 2', url: '/' },
            { text: 'Shop 3', url: '/' },
            { text: 'Shop 4', url: '/' },
            { text: 'Shop 5', url: '/' }
          ],
          subnav2: [
            { text: 'Shop 1', url: '/' },
            { text: 'Shop 2', url: '/' },
            { text: 'Shop 3', url: '/' },
            { text: 'Shop 4', url: '/' },
            { text: 'Shop 5', url: '/' }
          ],
          subnav3: [
            { text: 'Shop 1', url: '/' },
            { text: 'Shop 2', url: '/' },
            { text: 'Shop 3', url: '/' },
            { text: 'Shop 4', url: '/' },
            { text: 'Shop 5', url: '/' }
          ],
          subnav4: [
            { text: 'Shop 1', url: '/' },
            { text: 'Shop 2', url: '/' },
            { text: 'Shop 3', url: '/' },
            { text: 'Shop 4', url: '/' },
            { text: 'Shop 5', url: '/' }
          ],
          subnav5: [
            { text: 'Shop 1', url: '/' },
            { text: 'Shop 2', url: '/' },
            { text: 'Shop 3', url: '/' },
            { text: 'Shop 4', url: '/' },
            { text: 'Shop 5', url: '/' }
          ]
        },
        { text: 'Blocks', url: '/' },
        { text: 'Elements', url: '/' },
        { text: 'Extra', url: '/' }
      ],
      flags: [
        { value: enFlag, name: 'English' },
        { value: frFlag, name: 'Francais' },
        { value: deFlag, name: 'Deutsch' }
      ]
    }
  },
  methods: {
    searchClick() {
      this.IsActive = true
    },
    closeClick() {
      this.IsActive = false
    },
    setHovered(value) {
      this.isHovered = value  
    }
  }

  // beforeMount() {
  //     localStorage.setItem("language", JSON.stringify(en));
  //     this.getLang = JSON.parse(localStorage.getItem("language") || '[]');
  // },
}
</script>

<style>
.nav-item.flag-item .nav-link.dropdown-toggle:after{
  display: none;
}
li.nav-item.flag-item:hover ul.flag {
  left: -10px;
  display: block !important;
  list-style: none;
  box-shadow: var(--shadow-black);
  width: 190px;
  padding: 25px 25px;
  text-decoration: none;
  line-height: 2;
  transition: 0.3s;
  background: var(--white);
}
li.nav-item.cart-item:hover ul.shopping {
  left: -220px;
  display: block !important;
  list-style: none;
  box-shadow: var(--shadow-black);
  width: 280px;
  padding: 25px 25px;
  text-decoration: none;
  transition: 0.3s;
  background: var(--white);
}
</style>