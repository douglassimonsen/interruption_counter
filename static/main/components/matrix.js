const COLORS = {
  same: 808080
}

Vue.component('matrix', {
  props: ['participants', 'interruptions'],
  template: `
    <table>
      <thead>
        <tr>
          <th></th>
          <th v-text="p" v-for="p in participants"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p1, i in participants">
          <td v-text="p1"></td>
          <td v-for="p2, j in participants" @click="addInterrupt(i, j)" :style="{backgroundColor: getColor(i, j)}"></td>
        </tr>
      </tbody>
    </table>
  `,
  watch: {
    participants: function(){
      //debugger;
    }
  },
  methods: {
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
        return COLORS.same;
      }
    },
  },
});