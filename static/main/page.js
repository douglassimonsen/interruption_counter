new Vue({
  el: '#page',
  data: function(){
    return {
      participants: [],
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
  },
});