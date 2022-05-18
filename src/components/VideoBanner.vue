
        <!-- <video
        loop
        muted
        autoplay
        preload="auto">
            <source src="../assets/video.mp4" type="video/mp4">
        </video> -->
<template>
              <video width="100%" height="100%" loop
        muted
        autoplay
        preload="auto">
                <source :src="videoSrc" type="video/mp4" />
              </video>
    </template>
    <script>
     export default {
       data() {
          return {
             videoSrc: require("../assets/video.mp4"),
           }
        }
    }
    </script>