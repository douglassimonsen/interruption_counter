Vue.component('matrix', {
  props: ['participants', 'interruptions'],
  template: `
    <table class="top-list">
      <thead>
        <tr>
          <td colspan=2></td>
          <th :colspan="participants.length">Being Interrupted</th>
        </tr>
        <tr>
          <td colspan=2></td>
          <th v-text="p" v-for="p in participants"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p1, i in participants">
          <th :rowspan="participants.length" v-if="i === 0" style="max-width:5px"><div style="transform:translate(-40px, 8px) rotate(270deg); width:fit-content;">Interrupting</div></th>
          <th v-text="p1"></th>
          <td v-for="p2, j in participants" @click="addInterrupt(i, j)" :style="{backgroundColor: getColor(i, j)}" v-text="getCount(i, j)"></td>
        </tr>
      </tbody>
    </table>
  `,
  methods: {
    getCount: function(i, j){
      let from = this.participants[i];
      let to = this.participants[j];
      return this.interruptions.reduce(function(a, b){
        return a + +(b.from === from && b.to === to);
      }, 0) || null;
    },
    addInterrupt: function(i, j){
      if(i === j){
        return;
      }
      this.$emit('interruption', {
        from: this.participants[i], 
        to: this.participants[j],
        time: strftime(new Date()),
      });
    },
    getColor: function(i, j){
      if(i === j){
        return '#808080';
      }
      let count = this.getCount(i, j) || 0;
      if(count === 0){
        return;
      }
      if(count < 2){
        return '#ffffb7';
      }
      if(count < 4){
        return '#fed8b1';
      }
      if(count < 6){
        return '#ff4500';
      }
      return '#900D09';
    },
  },
});