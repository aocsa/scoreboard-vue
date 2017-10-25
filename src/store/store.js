import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let players = [
  {
    name: "Jim Hoskins",
    score: 31,
    id: 0,
    created: '11/8/2016',
    updated: '11/9/2016'
  },
  {
    name: "Andree Hoskins",
    score: 35,
    id: 1,
    created: '11/9/2016',
    updated: '11/10/2016'
  },
  {
    name: "Alena Hoskins",
    score: 42,
    id: 2,
    created: '11/11/2016',
    updated: '11/12/2016'
  }
]

const state = {
  players : players,
  selectedPlayer : -1
}

const mutations = {
  selectPlayer (state, {value}) {
    state.selectedPlayer = value
  },
  updatePlayer (state, {index, stepValue}) {
    state.players[ index ].score += stepValue
  },
  removePlayer (state, id) {
    console.log ('remove mut', id)

    const newList = state.players.filter( player => player.id != id)
    console.log ('remove mut', newList)

    console.log ('starte list', state.players)
    Vue.set (state, 'players', newList)
    console.log ('starte list', state.players)
  }
}

const getters = {
  oldPlayers : state => state.players.filter ( player =>  player.created.indexOf('2017') < 0)
}

const actions = {
  selectPlayer : ({ commit }, {value}) => commit ('selectPlayer', {value}),
  updatePlayer : ({ commit }, {index, stepValue}) => commit ('updatePlayer', {index, stepValue}),
  removePlayer : ({ commit }, id) => {
    console.log ('remove', id)
    commit ('removePlayer', id)}
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
