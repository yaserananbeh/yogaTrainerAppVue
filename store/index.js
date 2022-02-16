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
};
// contains your actions
export const actions = {
  counterUp({ state, commit }) {
    commit("setCounter", state.counter + 1);
  },
  async fetchTrainerData({ state }) {
    let res = await fetch("http://localhost:4000/api/trainers");
    let data = await res.json();
    console.log(data);
  },
};
// your root getters
export const getters = {
  myGetter(state) {
    return state.counter + 1000;
  },
};
