var app_1 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})

var app_2 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
