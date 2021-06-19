Vue.component('time-list', {
  props: ['interruptions'],
  template: `
    <div>
      <div class="time-list-title">Past Interruptions</div>
      <div class="time-list">
        <div v-for="i in interruptions" v-text="getText(i)"></div>
      </div>
    </div>
  `,
  methods: {
    getText: function(i){
      return `${i.from} interrupted ${i.to}! (${i.time})`
    }
  }
})