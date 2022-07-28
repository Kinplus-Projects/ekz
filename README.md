# ek-data

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


<div class="pp grey lighten-5 pt-10">
    <v-row class="pl-md=16 pl-sm-6 pl-0 mx-auto mainn">
      <v-col class="mobie" cols="12" sm="auto">
        <v-avatar class="profile" color="grey" size="250">
          <v-img lazy-src=""> </v-img>
        </v-avatar>
      </v-col>
      <v-col class="mobie" cols="12" sm="auto" align-self="center">
        <div>
          <h3>{{ company.TitleName }}</h3>
          <p>{{ company.Email }}</p>
          <v-btn color="success"> Edit Profile </v-btn>
        </div>
      </v-col>
      <v-tabs color="deep-purple accent-4" right>
        <v-tab>Landscape</v-tab>
        <v-tab>City</v-tab>
        <v-tab>Abstract</v-tab>

        <v-tab-item v-for="n in 3" :key="n">
          <v-container fluid>
            <v-row>
              <v-col v-for="i in 6" :key="i" cols="12" md="4">
                <v-img
                  :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${
                    i * n * 5 + 10
                  }`"
                  aspect-ratio="1"
                ></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs>

     
      <!-- <div class="pl-md-16 pl-sm-5 d-flex align-center">
        <div>
          
        </div>
        
      </div> -->
    </v-row>