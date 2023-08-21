import '@/assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faCartShopping, faMagnifyingGlass, faXmark, faAngleRight, faStar as fasStar , faCircle, faPencil} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

import { faClock, faStar as farStar } from '@fortawesome/free-regular-svg-icons'
/* add icons to the library */
library.add(faCartShopping, faMagnifyingGlass, faXmark, faFacebookF, faLinkedinIn, faTwitter, faAngleRight,fasStar,faCircle, faClock, faPencil,farStar)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
