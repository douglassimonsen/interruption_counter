new Vue({
  el: '#page',
  data: function(){
    return {
      participants: ['a', 'b'],
      newParticipant: null,
      interruptions: [],
    };
  },
  mounted: function(){
  },
  methods: {
    addParticipant: function(){
      this.participants.push(this.newParticipant);
      this.newParticipant = null;
    },
    addInterruption: function(interrupt){
      this.interruptions.push(interrupt);
    }
  },
});