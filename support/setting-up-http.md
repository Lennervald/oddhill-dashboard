in main.js:

import VueResource from 'vue-resource';

Vue.use(VueResource);


Full Great example of a get and post Form: 

<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
        <br>
            <b-form-input v-model="user.name" type="text" placeholder="Enter your name" :state="user.name.length?'success':'warning'" :formatter="format"></b-form-input>
            <b-form-input v-model="user.email" type="text" placeholder="Enter your email" :state="user.email.length?'success':'warning'" :formatter="format"></b-form-input>
            <small class="text-muted">This will save your name and email to a server</small>
            <p>Your input: <br>{{user.name}}<br>{{user.email}}</p>
            <b-button href="" @click="submit">Send Data</b-button>
            <b-button v-bind:class="buttonState" @click="clickFetch">{{fetchData()}}{{getTitle}}</b-button>
            <br>
            <br>
            <ul class="list-group">
              <li class="list-group-item" v-for="u in users">{{u.name}} - {{u.email}}</li>
            </ul>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        getTitle: 'Get Data!',
        buttonState: 'btn btn-success',
        user: {
          name: '',
          email: ''
        },
        users: []
      }
    },
    methods: {
      format(value) {
            return value.toLowerCase();
          },
      submit(){
        // console.log(this.user);
        this.$http.post('https://ng-http-25f0f.firebaseio.com/oddhill-test.json', this.user)
        .then(response => {
          console.log(response);
        }, error => {
          console.log(error);
        });
      },
      clickFetch(){
        this.buttonState= 'btn btn-danger',
        this.getTitle = 'Update data',
        fetchData();
      },
      fetchData(){
        this.$http.get('https://ng-http-25f0f.firebaseio.com/oddhill-test.json')
          .then(response => {
            return response.json()
          }).
          then(data => {
            const resultArray = [];
            for(let key in data){
              resultArray.push(data[key]);
            }
            this.users = resultArray;
            
          });
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../sass/main.scss';
</style>