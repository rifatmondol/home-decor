<template>
    <div class="furniture my-5 py-5">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="furniture-item d-flex h-100 justify-content-center flex-column">
                        <h2 class="mb-4 pb-1">Quality furniture to beautify your <br> home, at affordable prices</h2>
                        <p>Add the perfect finishing touch with our home accessories. Discover luxury decorative products, our vast range of luxury home furnishings have the power to turn a house into a home. We believe in the magic of great design.</p>
                        <div class="button mt-5">
                            <router-link to="/" class="text-decoration-none mt-2 d-inline-block">Visit Our Shop
                                <span class="ms-1 d-inline-block">
                                    <font-awesome-icon icon="fa-solid fa-angle-right" />
                                </span>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="furniture-item">
                        <img src="../assets/images/home-decor5.jpg" alt="home-decor5">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:"QualityFurniture",
}
</script>

<style>
.furniture-item p{
    color: var(--light-blue);
    font-size: 18px;;
    padding-right: 90px;
    letter-spacing: 0.2px;;
}

.furniture-item a {
  color: var(--white);
  background: var(--dark-cyan);
  padding: 17px 35px;
  border: 1px solid var(--dark-cyan);
  font-size: 15px;
  border-radius: 5px;
  font-weight: 500;
  position: relative !important;
}


</style>