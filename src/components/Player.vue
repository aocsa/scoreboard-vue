<template>
   <div class="player">
       <a   @click="removePlayer" >
            ✖
         </a>
      <div class="player-name" @click="selectPlayer">

         {{name}}
        
      </div>
      <div class="player-score">
         <div class="counter">
               <button class="counter-action decrement" @click="decrement"  >-</button>
               <div class="counter-score"> {{scoreValue}} </div>
               <button class="counter-action increment" @click="increment" >+</button>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      props: {
        name : {
          type : String
        },
        score : {
          type: Number
        },
        playerId : {
           type: Number
        }
      },
      computed : {
         scoreValue : function () {
            return this.score;
         }
      },
      methods: {
         increment () {
            this.$emit('scoreWasChanged', +1)
         },
         decrement () {
            this.$emit('scoreWasChanged', -1)
         },
         selectPlayer () { 
            this.$emit('selectPlayer', this.playerId);
         },
         removePlayer () {
             this.$emit('removePlayer', this.playerId);
         }
      }
   }
</script>

<style  >

.player {
  display: flex;
  font-size: 1.2em;
  border-bottom: solid 2px #444;
  letter-spacing: 2px;
  cursor: pointer;
}

  .remove-player {
    visibility: hidden;
    margin-right: 10px;
    color: #e57373;
    cursor: pointer;
  }

  .player-name:hover .remove-player {
    visibility: visible;
  }

  .player-name {
    flex-grow: 1;
    padding: 20px 10px 10px 10px;
  }

  .player-score {
    width: 190px;
    background: blue;
  }

  .counter {
    display: flex;
  }

  .counter-action {
    border: none;
    font-weight: bold;
    color: #FAFAFA;
    display: block;
    padding: 20px 20px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .counter-action.increment {
    background: #66BB6A;
  }

  .counter-action.increment:hover {
    background: #549d59;
    cursor: pointer;
  }

  .counter-action.decrement {
    background: #ef5350;
  }

  .counter-action.decrement:hover {
    background: #c44442;
    cursor: pointer;
  }

  .counter-score {
    flex-grow: 1;
    background: #2b2b2b;
    color: #FAFAFA;
    text-align: center;
    font-family: monospace;
    padding: 10px;
    font-size: 2em;
  }


</style>
