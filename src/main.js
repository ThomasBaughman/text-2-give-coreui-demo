import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '../scss/custom.scss'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'vue-material-design-icons/styles.css'
import App from './App.vue'
import router from './router'
import CoreuiVue from '@coreui/vue'
import AccountCircle from 'vue-material-design-icons/accountCircle.vue'
import EmailOutline from 'vue-material-design-icons/emailOutline.vue'
import LockOutline from 'vue-material-design-icons/LockOutline.vue'
import heart from 'vue-material-design-icons/heart.vue'
import CreditCardOutline from 'vue-material-design-icons/creditCardOutline.vue'

const app = createApp(App)
app.component('account-circle', AccountCircle)
app.component('email-outline', EmailOutline)
app.component('lock-outline', LockOutline)
app.component('heart-shape', heart)
app.component('credit-card-outline', CreditCardOutline)
app.use(createPinia())
app.use(router)
app.use(CoreuiVue)

app.mount('#app')
