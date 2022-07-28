<template>
    <div style="height:100%; width:100%;">

        <div class="post-wrap">
            <div v-for="post in slider" :key="post" class="post">
                <div class="img" :style="{ 'background-image': 'url(' + post + ')' }">
                </div>
            </div>
        </div>


    </div>

</template>

<script>
export default {
    name: "MainSlide",

    data: () => ({
        slider: ["./imgs/hero.jpg", "./imgs/img1.jpg", "./imgs/img2.jpg"]
    }),

    created() {

    },

    beforeMount() {
        var scripts = [
            "./js/discover.js"
        ];
        scripts.forEach(script => {
            let tag = document.createElement("script");
            tag.setAttribute("src", script)
            document.head.appendChild(tag);
        });

    }

}
</script>





<style scoped src="../assets/css/slider.css">