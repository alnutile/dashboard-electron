<template>
    <div class="container">
      <div class="content">
           <form v-on:submit.prevent="submit">
                         <p>
                You can get your token by logging into the teamdashboard site and clicking
            </p>
        <div class="form-group">
            <label class="label">Token</label>
            <input class="form-control" type="text" placeholder="token"
            v-model="token">
        </div>
        <div class="form-group">
                <button class="btn btn-default">Save</button>
        </div>
      </form>
        </div>
        <br>
    </div>

</template>

<script>
import store from "./../store";
import SetingsModel from "./../models/Settings";

export default {
  name: "settings",
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
