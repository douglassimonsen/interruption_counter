Vue.component('top-list', {
  props: ['participants', 'interruptions'],
  template: `
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Interrupted</th>
          <th>Was Interrupted</th>
          <th>Net</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in participantStats">
          <td v-text="p.name"></td>
          <td v-text="p.interruptions"></td>
          <td v-text="p.interrupted"></td>
          <td v-text="p.net"></td>
        </tr>
      </tbody>
    </table>
  `,
  computed: {
    participantStats: function(){
      return this.participants.map(function(x){
        let interrupted = this.interruptions.reduce((a, b) => a + (b.from === x), 0);
        let interruptions = this.interruptions.reduce((a, b) => a + (b.to === x), 0);
        return {
          name: x,
          interruptions: interruptions,
          interrupted: interrupted,
          net: interruptions - interrupted,
        };
      }.bind(this));
    }
  }
})