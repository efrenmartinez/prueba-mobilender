const state = () => ({
  items: [
    {
      id: 1,
      name: "Siebel",
      type: "Credito grupal"
    },
    {
      id: 2,
      name: "Bantotal",
      type: "Crédito grupal"
    },
    {
      id: 3,
      name: "Mobilender",
      type: "Crédito grupal"
    },
    {
      id: 4,
      name: "Alivio",
      type: "Crédito grupal"
    },
    {
      id: 5,
      name: "Alivio",
      type: "Crédito grupal"
    },
    {
      id: 6,
      name: "Alivio",
      type: "Crédito grupal"
    }
  ],
  item: [
    {
      id: 1,
      file: "clientes_credito.xml",
      date: "20/01/21",
      quality: 90,
      status: "Finalizado",
      dateEnd: "21/01/21",
      user: "goytia"
    },
    {
      id: 2,
      file: "clientes_contrato.xml",
      date: "19/08/21",
      quality: 12,
      status: "En proceso",
      dateEnd: "20/08/21",
      user: "goytia"
    },
    {
      id: 3,
      file: "contrato_credito.xml",
      date: "20/01/21",
      quality: 32,
      status: "Rechazado",
      dateEnd: "21/01/21",
      user: "goytia"
    },
    {
      id: 4,
      file: "clientes_credito.xml",
      date: "20/01/21",
      quality: 45,
      status: "Finalizado",
      dateEnd: "21/01/21",
      user: "goytia"
    }
  ]
});

// getters
const getters = {
  items: state => {
    return state.items;
  },
  item: state => {
    return state.item;
  }
};

// actions
const actions = {
  add({ commit }, data) {
    try {
      commit("add", data);
      return true;
    } catch (error) {
      return false;
    }
  }
};

// mutations
const mutations = {
  add (state, data) {
    state.items.push(data);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
