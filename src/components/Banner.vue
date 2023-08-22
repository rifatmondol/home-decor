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

</style>