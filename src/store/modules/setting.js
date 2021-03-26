const state = {
  dialogLoading: false,
};

const mutations = {
  SET_DIALOG_LOADING: (state, flag) => {
    state.dialogLoading = flag;
  },
};

const actions = {
  changeDialogLoading({ commit }, flag) {
    commit("SET_DIALOG_LOADING", flag);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
