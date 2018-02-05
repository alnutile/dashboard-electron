<template>
<div class="container-fluid">
  <div class="row" v-if="notifications.length > 0">
    This container is <strong>fluid</strong>: it will have a 32px gap on either side, on any
    viewport size.
  </div>

  <div id="dash" class="row">
    <div class="card-deck">
      <weather></weather>
      <builds></builds>
      <quotes></quotes>
    </div>
  </div>

  <div class="row">
      <div class="form-group">
        <div>
          <button class="btn btn-defaul" v-on:click="settingsSwitch()">
          <i class="fa fa-gear"></i>
          </button>
        </div>
      </div>
      <div class="form-group" v-if="settings">
        <settings ></settings>
      </div>
  </div>
</div>
</template>

<script>
import SystemInformation from "./LandingPage/SystemInformation";
import Settings from "./Settings";
import Weather from "./Weather";
import Builds from "./Builds";
import Quotes from "./Quotes";

export default {
  name: "landing-page",
  components: { SystemInformation, Settings, Quotes, Builds, Weather },
  created: function() {
    this.$store.dispatch("loadSettings");
  },
  data() {
    return {
      settings: false,
      notifications: []
    };
  },
  methods: {
    settingsSwitch() {
      this.settings = this.settings ? false : true;
    },
    open(link) {
      this.$electron.shell.openExternal(link);
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");

body {
  font-family: "Source Sans Pro", sans-serif;
  padding-top: 50px;
}

.card-block {
  padding: 20px;
}

#dash {
  min-height: 700px;
  color: #dde9f7;
}

#dash .blocks {
  background-color: #232730;
}
</style>
