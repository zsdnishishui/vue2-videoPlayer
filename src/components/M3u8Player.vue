<template>
  <video-player
      class="video-player vjs-custom-skin v-player"
      ref="videoPlayer"
      :playsinline="true"
      :options="playerOptions"
    ></video-player>
</template>

<script>
import videojs from 'video.js'
window.videojs = videojs//要先声明,在下方的hls.js中要用到,不然视频会出错


export default {
  name: 'test-video-player',
  computed: {},
  data() {
      return {
      playerOptions: {
				//playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度

				autoplay: true, //如果true,浏览器准备好时开始回放。
				muted: false, // 默认情况下将会消除任何音频。
				loop: false, // 导致视频一结束就重新开始。
				preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
				language: 'zh-CN',
				aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
				fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
				sources: [
					{
						type: 'application/x-mpegURL',
						src: 'http://127.0.0.1:9090/video/play/sk.m3u8' //你的m3u8地址（必填）
            // src: '/api/test/test_m3u8/TM-20230329091129-760405287-recording-3.m3u8'
					}
				],
				poster: '', //你的封面地址
			}
      }
  },
  methods: {},
  created() {}
}
</script>

<style lang="" scoped></style>