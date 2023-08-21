<template>
  <div class="banner">
    <div class="container">
      <div class="banner-main">
        <div class="banner-text position-absolute top-50">
          <h1>
            The best place to safely <br />
            shop for home décor
          </h1>
          <p class="mt-4">
            We offer an affordable way to bring unique designs from around the <br />
            globe into your home. Give your space a unique look today!
          </p>
          <div class="button mt-5">
            <span class="discover d-inline-block"
              ><router-link to="/" class="text-decoration-none"
                >Discover Now
                <span class="ms-1 d-inline-block"
                  ><font-awesome-icon icon="fa-solid fa-angle-right" /></span></router-link
            ></span>
            <span class="visit d-inline-block ms-2"
              ><router-link to="/" class="text-decoration-none"
                >Visit Our Shop
                <span class="ms-1 d-inline-block"
                  ><font-awesome-icon icon="fa-solid fa-angle-right" /></span></router-link
            ></span>
          </div>
        </div>

        <div class="plus-icon">
          <span class="palm">
            <router-link to="/" class="text-decoration-none">+</router-link>
            <ul class="position-absolute">
              <li>Potted Palm Leaf Plants</li>
            </ul>
          </span>
          <span class="chair">
            <router-link to="/" class="text-decoration-none">+</router-link>
            <ul class="position-absolute">
              <li>Curved Dining Chair</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerComponent',
  data() {
    return {}
  }
}
</script>

<style>
.banner{
  overflow: hidden;
}
.banner-main {
  background-image: url(@/assets/images/home-decor1.jpg);
  background-position: center;
  height: 1000px;
  width: 100%;
  border-radius: 50px;
}
.banner-main .banner-text {
  left: 30px;
  transform: translateY(-50%);
}
.banner-text h1 {
  font-size: 3.75rem;
  color: var(--dark-cyan);
}
.banner-text p {
  font-family: Helvetica;
  color: var(--light-blue);
  font-size: 18px;
}

.banner-text .button span.discover a {
  color: var(--white);
  background: var(--dark-cyan);
  padding: 17px 35px;
  border: 1px solid var(--dark-cyan);
}
.banner-text .button span.visit a {
  color: var(--dark-cyan);
  background: transparent;
  padding: 16px 35px;
  border: 1px solid transparent;
}

.banner-text .button span a {
  font-size: 15px;
  border-radius: 5px;
  font-weight: 500;
  position: relative !important;
  transition: border 0.3s !important;
  z-index: 2!important;
}
.banner-text .button span a:hover{
  color: var(--dark-cyan) !important;
  background: 0 0 !important;
  border: 1px solid transparent;
}
.banner-text .button span a::before {
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
.banner-text .button span a:hover::before {
  background: var(--white);
  transform: scale(1);
  transform-origin: left center;
  z-index: -1;
 
}

.plus-icon {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
}
.plus-icon span {
  position: relative;
  display: inline-block;
}
.plus-icon span.palm{
  left: 60%;
}
.plus-icon span.chair {
  right: 0px;
  position: absolute;
}
.plus-icon span a {
  font-size: 30px;
  background: var(--white);
  border-radius: 50%;
  display: block;
  height: 35px;
  width: 35px;
  line-height: 35px;
  text-align: center;
  color: var(--dark-cyan);
}
.plus-icon .chair ul, .plus-icon .palm ul {
  opacity: 0;
  content-visibility: hidden;
  transform: translateX(50%);
  right: 50%;
  top: -75px;
  list-style: none;
  box-shadow: var(--shadow-black);
  padding: 25px 25px;
  text-decoration: none;
  transition: 0.3s;
  background: var(--white);
  text-align: center;
  font-family: 'Roboto';
  color: #696969;
}
.plus-icon .chair ul{
  width: 190px;
}
.plus-icon .palm ul {
  width: 225px;
}
.plus-icon span a:hover + ul, .plus-icon span a:hover + ul{
  opacity: 1;
  content-visibility: visible;
  top: -85px;
  transition: 0.4s;
}
</style>