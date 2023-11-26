/*                          javascript                      */

// codice javascript di vue
const { createApp } = Vue
    createApp({
        data() {
        return {
            className: 'big',
            title: 'Elisa'
            }
        },
        methods: {
            greetings() {
                return 'ciao'
            },
            sayHelloViaConsole () {
                console.log(this.title)
            }
        }
    
  }).mount('#app')

  