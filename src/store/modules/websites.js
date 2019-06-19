import lambdaService from '@/lambdaService'

// initial state
const state = {
  allWebsites: [],
  selectedTags: [],
  error: ''
}

// getters
const getters = {
  filteredWebsites: state => {
    if (state.selectedTags.length === 0) return state.allWebsites
    else
      return state.allWebsites
        .filter(f => f.tags.some(t => state.selectedTags.includes(t)))
        .sort((a, b) => (a.title > b.title ? 1 : a.title < b.title ? -1 : 0))
  },
  tags: state => {
    return Array.from(
      new Set(
        state.allWebsites
          .map(s => s.tags)
          .reduce((a, b) => [...a, ...b], [])
          .sort()
      )
    )
  }
}

// actions
const actions = {
  getAllWebsites({ commit }) {
    lambdaService
      .fetchRecords()
      .then(response => {
        let websites = response.records
          .map(r => r.fields)
          .filter(o => o.approved)
        commit('setWebsites', websites)
      })
      .catch(err => {
        commit('setError', err)
      })
  },
  isSelected({ commit }, tag) {
    let selected = state.selectedTags.includes(tag)
    commit('setSelectedTags', selected)
  },
  tagSelected({ commit }, tag) {
    commit('setSelectedTags', tag)
  }
}

// mutations
const mutations = {
  setWebsites(state, websites) {
    state.allWebsites = websites
  },
  setError(state, error) {
    state.error = error
  },
  setSelectedTags(state, selected) {
    state.selectedTags = selected
  },
  tagSelected(state, tag) {
    state.selectedTags.push(tag)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
