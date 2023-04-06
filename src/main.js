import Vue from 'vue'
import App from './App.vue'
import hls from 'videojs-contrib-hls'
import VideoPlayer from 'vue-video-player';
import "video.js/dist/video-js.css"
import "vue-video-player/src/custom-theme.css"
Vue.use(hls)
Vue.use(VideoPlayer)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
