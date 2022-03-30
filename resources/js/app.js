import { createApp } from 'vue'
import JiraTextTransform from "./components/JiraTextTransform.vue"

const app = createApp({

})

app.component(
    'JiraTextTransform',
    JiraTextTransform
)

app.mount('#app')
