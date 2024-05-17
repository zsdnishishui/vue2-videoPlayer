> cnpm install vue-video-player@5.0.2 --save

> cnpm install video.js @videojs-player/vue --save

> cnpm install --save videojs-contrib-hls

> cnpm install

>cnpm run serve


nginx的mp4的配置,自动支持range

> location /video/ {
alias   D:/video/;#一定/;结尾
}