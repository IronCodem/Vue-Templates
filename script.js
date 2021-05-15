var app_1 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello!'
  }
})

var app_2 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
