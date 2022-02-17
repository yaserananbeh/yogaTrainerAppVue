// holds your root state
export const state = () => ({
  counter: 15,
  trainerData: [],
});

// contains your mutations
export const mutations = {
  setCounter(state, value) {
    state.counter = value;
  },
  setTrainerData(state, value) {
    state.trainerData = value;
  },
};
// contains your actions
export const actions = {
  counterUp({ state, commit }) {
    commit("setCounter", state.counter + 1);
  },
  async fetchTrainerData({ commit }) {
    let res = await fetch("http://localhost:4000/api/trainers");
    let data = await res.json();
    commit("setTrainerData", data.data);
  },
};
// your root getters
export const getters = {
  myGetter(state) {
    return state.counter + 1000;
  },
};
