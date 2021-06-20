new Vue({
  el: '#page',
  data: function(){
    return {
      participants: [],
      newParticipant: null,
      interruptions: [],
      savedLists: JSON.parse(localStorage.getItem('savedLists')),
      selectedList: null,
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
      this.interruptions.splice(0, 0, interrupt);
    },
    remove: function(removal){
      this.participants = this.participants.filter(x => x !== removal.participant);
      this.interruptions = this.interruptions.filter(x => x.to !== removal.participant && x.from !== removal.participant);
    },
    saveList: function(){
      this.savedLists.push(this.participants);
      localStorage.setItem('savedLists', JSON.stringify(this.savedLists));
    },
    deleteList: function(){
      this.savedLists.splice(this.selectedList, 1);
      localStorage.setItem('savedLists', JSON.stringify(this.savedLists));
    },
    loadList: function(){
      this.participants = this.savedLists[this.selectedList];
    }
  },
});