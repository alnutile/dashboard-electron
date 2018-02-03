<template>
    <div class="container">
      <div class="content">
           <form v-on:submit.prevent="submit">
        <div class="field">
            <label class="label">Token</label>
            <p>
                You can get your token by logging into the teamdashboard site and clicking
                ...
            </p>
            <div class="control">
                <input class="input" type="text" placeholder="token"
                v-model="token">
            </div>
        </div>
        <div class="field">
            <div class="control">
                <button class="button is-link">Save</button>
            </div>
        </div>
      </form>
        </div>
        <br>
    </div>

</template>

<script>
import store from './../store';
import SetingsModel from './../models/Settings';

export default {
  name: 'settings',
  data() {
    return {
      token: null
    };
  },
  created: function() {
    this.loadInitialToken();
  },
  methods: {
    loadInitialToken() {
      this.token = store.getToken;
    },
    submit() {
      SetingsModel.saveToken(this.token);
    }
  }
};
</script>

<style>
label.label {
  color: rgb(224, 224, 224);
  font-size: 120%;
}
</style>
