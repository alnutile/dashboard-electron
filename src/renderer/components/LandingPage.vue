<template>
<div class="container-fluid">
  <div class="row" v-if="notifications.length > 0">
    This container is <strong>fluid</strong>: it will have a 32px gap on either side, on any
    viewport size.
  </div>

  <div id="dash" class="row">
      <weather></weather>
      <builds></builds>
      <quotes></quotes>
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
import SystemInformation from './LandingPage/SystemInformation';
import Settings from './Settings';
import Weather from './Weather';
import Builds from './Builds';
import Quotes from './Quotes';

export default {
  name: 'landing-page',
  components: { SystemInformation, Settings, Quotes, Builds, Weather },
  created: function() {
    this.$store.dispatch('loadSettings');
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
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
  padding-top: 50px;
}

#dash {
  min-height: 700px;
  color: #6c757d;
}

#wrapper {
  background: radial-gradient(
    ellipse at top left,
    rgba(255, 255, 255, 1) 40%,
    rgba(229, 229, 229, 0.9) 100%
  );
  height: 100vh;
  padding: 60px 80px;
  width: 100vw;
}

#logo {
  height: auto;
  margin-bottom: 20px;
  width: 420px;
}

main {
  display: flex;
  justify-content: space-between;
}

main > div {
  flex-basis: 50%;
}

.left-side {
  display: flex;
  flex-direction: column;
}

.welcome {
  color: #555;
  font-size: 23px;
  margin-bottom: 10px;
}

.title {
  color: #2c3e50;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 6px;
}

.title.alt {
  font-size: 18px;
  margin-bottom: 10px;
}

.doc p {
  color: black;
  margin-bottom: 10px;
}

.doc button {
  font-size: 0.8em;
  cursor: pointer;
  outline: none;
  padding: 0.75em 2em;
  border-radius: 2em;
  display: inline-block;
  color: #fff;
  background-color: #4fc08d;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #4fc08d;
}

.doc button.alt {
  color: #42b983;
  background-color: transparent;
}
</style>
