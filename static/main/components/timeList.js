Vue.component('time-list', {
  props: ['interruptions'],
  template: `
    <div>
      <div v-for="i in interruptions" v-text="getText(i)">

      </div>
    </div>
  `,
  methods: {
    getText: function(i){
      return `${i.from} interrupted ${i.to}! (${i.time})`
    }
  }
})