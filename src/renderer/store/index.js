import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'
import db from "./../datastore"
import alerts from './../services/Alerts';
import teamdash from './../services/TeamDash';
import SettingsModel from './../models/Settings';

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  state: {
    token: null,
    quote: {},
  },
  getters: {
    getToken: (state) => {
      return state.token;
    },
    getQuote: (state) => {
      return state.quote;
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setQuote(state, quote) {
      state.quote = quote;
    }
  },
  actions: {
    loadSettings({ commit, dispatch }) {
      SettingsModel.getToken();
    },
    getQuotes({ state, commit }) {
      teamdash.getQuotes(state.token)
        .then(response => {
          commit('setQuote', response.data);
        }).catch(error => {
          console.log("Error");
          console.log(error);
          let message = 'Something went wrong with your token, please update it or email for support';
          alerts.alert("Error", message, error);
        });
    }
  },
  strict: process.env.NODE_ENV !== 'production'
})
