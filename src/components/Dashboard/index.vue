<template>
    <div>
        <div class="app">
            <div class="wrapper">
                <div class="main-container">
                    <div class="content-wrapper">
                        <div class="content-wrapper-header">
                            <div class="content-wrapper-context">
                                <h2 class="img-content white--text">
                                    Dont Know what to do next?
                                </h2>
                                <div class="content-text">Complete your account information to get your company
                                    approved.</div>
                                <v-btn class="mt-2" color="yellow">Get Started</v-btn>
                            </div>
                            <img class="content-wrapper-img" src="https://assets.codepen.io/3364143/glass.png" alt="">
                        </div>

                        <div class="mt-3 pa-2 card">
                            <v-row class="pl-md=16 pl-sm-6 pl-0 mx-auto mainn">
                                <v-col class="mobie" cols="12" sm="auto">
                                    <v-avatar class="profile" color="grey" size="250">
                                        <v-img lazy-src=""></v-img>
                                    </v-avatar>
                                </v-col>
                                <v-col class="mobie" cols="12" sm="auto" align-self="center">
                                    <div>
                                        <h3>{{ companyinfo.name }}</h3>
                                        <p>{{ companyinfo.email }}</p>
                                        <v-btn color="success"> Edit Profile </v-btn>
                                    </div>
                                </v-col>
                                <v-col align-self="center" class="d-flex flex-column justify-center align-center">
                                    <v-progress-circular :rotate="-90" :size="100" :width="15" :value="value"
                                        color="primary">
                                        {{ value }}%
                                    </v-progress-circular>
                                    <div>
                                        <h3>Registration Completion</h3>
                                    </div>
                                </v-col>
                            </v-row>

                        </div>

                        <div class="mt-3 pa-2 card card2">
                            <v-row class="pl-md=16 pl-sm-6 pl-0 mx-auto mainn">

                            </v-row>

                        </div>

                    </div>

                </div>
                <div class="overlay-app"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Dashboard",
    components: {
    },
    data() {
        return {
            companyinfo: { name: "Kinplus", email: "kinplus@gmail.com" },
            value: 58,
        };
    },
};

</script>

<style scoped src="../../assets/css/dashboard.css">
</style>

<style scoped>
.card {
    background: whitesmoke;
    border-radius: 8px;
    position: relative;
    /* overflow: hidden; */

}

.card::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 35%;
    background: rgb(20, 187, 20);
    background-image: url(https://www.transparenttextures.com/patterns/cubes.png), linear-gradient(to right top, #186722, #3e865d88, #f6f331, f6f331, #2f5741, #0b984a, #264735, #215a3a, #2de17bc7, #f6f331, #33a364, #f6f331);
    clip-path: polygon(100% 45%, 50% 100%, 100% 100%);
}

.card2 {
    height: 200px;
}

.app {
    height: auto;
    overflow-y: scroll;
}

.v-progress-circular {
    margin: 1rem;
}


@media (max-width:900px) {

    .mainn {
        justify-content: center;
        align-items: center;
    }

    .mobie {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
    }

    .card::after {
        display: none;

    }

    .card2 {
    display: none;
}

}
</style>