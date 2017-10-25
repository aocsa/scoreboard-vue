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
  selectPlayer (state, id) {
    Vue.set (state, 'selectedPlayer', id)
  },
  updatePlayer (state, {index, step}) {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    state.players[ index ].score += step
    state.players[ index ].updated = `${month}/${day}/${year}`

    Vue.set (state, 'players', state.players)

  },
  removePlayer (state, id) {
    const newList = state.players.filter( player => player.id != id)
    Vue.set (state, 'players', newList)
  },
  addPlayer (state, player) {
    const newList = state.players.concat( player )
    Vue.set (state, 'players', newList)

  }
}

const getters = {
  oldPlayers : state => state.players.filter ( player =>  player.created.indexOf('2017') < 0)
}

const actions = {
  selectPlayer : ({ commit }, id) => commit ('selectPlayer', id),
  updatePlayer : ({ commit }, {index, step}) => commit ('updatePlayer', {index, step}),
  removePlayer : ({ commit }, id) => {
    console.log ('remove', id)
    commit ('removePlayer', id)},
  addPlayer : ({commit}, player) => commit('addPlayer', player)
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
