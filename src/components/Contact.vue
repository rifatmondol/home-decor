<template>
    <div class="contact my-5">
        <div class="container">
            <div class="contact-main px-3">
                <div class="row">
                    <div class="col-md-6">
                        <div class="accordion-section pt-md-5 pt-3">
                            <div class="accordion" id="accordionPanelsStayOpenExample">
                                <div class="accordion-item mb-3 py-2 px-3" v-for="item in items" :key="item.id">
                                    <h2 class="accordion-header" :id="item.id">
                                    <button class="accordion-button" :class="{collapsed: item.isCollapsed}" type="button" data-bs-toggle="collapse" :data-bs-target="`#${item.collapse}`" :aria-expanded="item.isexpanded" :aria-controls="item.collapse">
                                        {{item.heading}}
                                    </button>
                                    </h2>
                                    <div :id="item.collapse" class="accordion-collapse collapse" :class="{show: item.isShow}" :aria-labelledby="item.id">
                                        <div class="accordion-body">
                                            <p class="mb-2">{{ item.bodyText }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-md-6 mt-5 mt-md-0">
                        <div class="get-in-touch mx-lg-3 py-5 text-center">
                            <div class="get-in-inner px-lg-4 mx-lg-5 px-3">
                                <h3 class="mb-4">Let's get in touch</h3>
                                <p class="mb-5">Our experts and developers would love to contribute their expertise and insights to your potencial projects</p>

                                <div class="form">
                                    <div class="input-box mb-2">
                                        <input type="text" placeholder="Enter your name" class="w-100">
                                    </div>
                                    <div class="input-box mb-2">
                                        <input type="email" placeholder="Enter your email" class="w-100">
                                    </div>
                                    <div class="input-box mb-1">
                                        <textarea name="message" id="message" cols="20" rows="4" placeholder="Your message" class="w-100 py-3"></textarea>
                                    </div>
                                    <button class="submit">Submit</button>
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
    name:'ContactView',
    data(){
        return{
            items:[
                {
                    id:'headingOne',
                    collapse:'collapseOne',
                    isCollapsed: false,
                    isexpanded: true,
                    isShow: true,
                    heading:'How do I choose accessories for my room?',
                    bodyText: 'The style of your furniture will dictate what type of accessories that you should use. If your style is modern, you choose modern accessories that accent the colors. you are using.'
                },
                {
                    id:'headingTwo',
                    collapse:'collapseTwo',
                    isCollapsed: true,
                    isexpanded: false,
                    isShow: false,
                    heading:'How do I choose my accent colors?',
                    bodyText: 'The length of time of a business consulting project varies and based on a number of factors including: business needs and challenges, size of the organization or team, and scope of the consulting project.'
                },
                {
                    id:'headingThree',
                    collapse:'collapseThree',
                    isCollapsed: true,
                    isexpanded: false,
                    isShow: false,
                    heading:'How do I create an account?',
                    bodyText: 'The length of time of a business consulting project varies and based on a number of factors including: business needs and challenges, size of the organization or team, and scope of the consulting project.'
                },
                {
                    id:'headingFour',
                    collapse:'collapseFour',
                    isCollapsed: true,
                    isexpanded: false,
                    isShow: false,
                    heading:'How can I find or track my order?',
                    bodyText: 'The length of time of a business consulting project varies and based on a number of factors including: business needs and challenges, size of the organization or team, and scope of the consulting project.'
                },
            ]
        }
    }
}
</script>

<style>

</style>