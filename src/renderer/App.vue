<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "TeamDashboard"
};
</script>

<style>
body {
  background-color: #1b1f25;
}

article.tile {
  background-color: #232730;
}
p.title {
  color: #b2b3be;
  font-size: 123%;
  text-transform: uppercase;
}
div.content {
  color: #dde9f7;
  font-size: 113%;
}
</style>
