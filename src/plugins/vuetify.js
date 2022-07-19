import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#036B03",
        secondary: "#FFFF02",
        accent: "#82B1FF",
        error: "#EC2B30",
        info: "#2196F3",
        success: "#036B03",
        warning: "#FFFF02",
        black: "#011B01",
      },
    },
  },
});
