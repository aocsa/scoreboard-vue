<template>
  <div class="scoreboard">
        <div class="header">
            <app-stats :length="players.length" :totalpoints="totalpoints"/>
            <h1>SCOREBOARD</h1>
        </div>
        <div class="players">
            <div v-for="player of players" :key="player.id">
               <app-player
                  :name="player.name"
                  :playerId="player.id"
                  :score="player.score"
                  @scoreWasChanged="player.score += $event"
                  @removePlayer="removePlayer($event)"
                  @selectPlayer="selectPlayer($event)"
               />
            </div>
        </div>

        <div class="add-player-form">
            <form @submit.prevent="submit" >
                <input v-model="inputValue" placeholder="Enter a name" type="text"  />
                <input type="submit" value="Add Player"/>
            </form>
        </div>
        <div className="player-detail" v-if="selectedPlayerId != -1">
				<app-player-detail :selectedPlayer="players.filter (i => i.id == selectedPlayerId)[0]" />
			</div>
    </div>

</template>

<script>
import Player from './Player';
import Stats from './Stats';
import PlayerDetail from './PlayerDetail';
import {mapMutations, mapActions, mapGetters} from 'vuex'
export default {
   data: function() {
      return {
         inputValue: '',
         selectedPlayerId: this.$store.state.selectedPlayer,

      };
   },
   computed: {
      totalpoints() {
         var totalP = 0;
         for (var i in this.players) {
            totalP += this.players[i].score;
         }
         return totalP;
      },
      players ()   {
        return this.$store.state.players
      }

   },
   methods: {

      submit() {
         let date = new Date();
         let day = date.getDate();
         let month = date.getMonth()+1;
         let year = date.getFullYear();
         var id_ = this.players.length;
         this.players.push({ name: this.inputValue, score: 0, id: id_, 		created: `${month}/${day}/${year}` });
      },
      removePlayer(idPlayer) {
         console.log('Entro a removePlayer');
         //this.players = this.players.filter ( (val) => val.id != idPlayer);
        this.$store.dispatch('removePlayer', idPlayer)
      },
      selectPlayer(idPlayer) {
         console.log('Entro a selectPlayer:', idPlayer);
         //this.selectedPlayerId = idPlayer;
      },
     /*...mapActions ([
       'selectPlayer',
       'removePlayer',
       'updatePlayer'
     ])*/
   },
   components: {
      'app-player': Player,
      'app-stats': Stats,
      'app-player-detail': PlayerDetail
   }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
   background: #d5d5d5;
   font-family: arial;
   color: #fafafa;
   text-transform: uppercase;
}

ul {
   list-style: none;
}

li {
   margin: 0.65em 0;
}

h3 {
   margin-top: 0;
}

.scoreboard {
   background: #333;
   width: 700px;
   margin: 70px auto;
   box-shadow: 0 4px 0px #333;
   border-radius: 15px;
}

.header {
   padding: 5px 10px;
   text-align: center;
   display: flex;
   align-items: center;
   background-color: #222;
   border-radius: 15px 15px 0 0;
   border-bottom: solid 2px #444;
}

.header h1 {
   flex-grow: 1;
   font-size: 1.5em;
   letter-spacing: 3px;
   font-weight: normal;
}

.add-player-form form {
   display: flex;
   background-color: #222;
}

.add-player-form input[type='text'] {
   flex-grow: 1;
   border-width: 0 0 1px 0;
   margin: 15px 10px 15px 15px;
   padding: 10px;
   border-radius: 5px;
   background-color: #333;
   border-style: none;
   text-shadow: none;
   text-transform: uppercase;
   color: #999;
   letter-spacing: 2px;
   outline: none;
}

.add-player-form input[type='text']::-webkit-input-placeholder {
   color: #666;
   letter-spacing: 2px;
}

.add-player-form input[type='text']:focus {
   background-color: #444;
}

.add-player-form input[type='submit'] {
   display: block;
   font-size: 0.6em;
   margin: 15px 15px 15px 0;
   padding: 10px;
   background-color: #333;
   border-radius: 5px;
   border: none;
   color: #999;
   letter-spacing: 2px;
   font-weight: bold;
   text-shadow: none;
   text-transform: uppercase;
}

.add-player-form input[type='submit']:hover {
   background: #4b71b5;
   color: #fafafa;
   cursor: pointer;
}

</style>
