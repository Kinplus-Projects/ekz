<template>
  <div class="main">
    <div class="nav">
      <dashboardNav/>
    </div>
      <div class="content-wrap">
        <div class="side"> 
          <sideNav/>
        </div>

        <div class="content-main">
          <Dashboard/>

        </div>

      </div>
 
   

  </div>

</template>

<script>
import dashboardNav from '@/components/dashboardNav.vue';
import Dashboard from '@/components/Dashboard/index.vue';
import sideNav from '@/components/sideNav.vue';

export default {
  name: "ProfileView",
  components: {
    dashboardNav,
    Dashboard,
    sideNav
},
  data() {
    return {
      company: {
        TitleName: "kinplus Technologies",
        Email: "kinplus@gmail.com",
      },
    };
  },
};
</script>

<style lang="scss" scoped>

.main{
  height: 100vh !important;
  position: relative;
}


.content-wrap{
  height: 90vh;
  display: flex;
  overflow: hidden;
  position: relative;

}

.side{
  height: 100% !important;
  width: 20vw;
  border-left: 1px solid black;
  // overflow: hidden;
  z-index: 11111;
  
}

.content-main{
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
  width: 80vw;
}

.nav{
 margin-top:8px !important;
}


// .buttomNav{
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   width: 100%;
// }
@media (max-width:900px) {

  .mobie {
    display: flex !important;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  .mobie div {
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .content-main{
  height: 100%;
  overflow-y: scroll;
  width: auto !important;
  
}

.side{
  display: none;
}

}
</style>
