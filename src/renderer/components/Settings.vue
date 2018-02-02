<template>
  <section>
      settings here...
      <form v-on:submit.prevent="submit">
        <div class="field">
            <label class="label">Token</label>
            <p>
                You can get your token by logging into the teamdashboard site and clicking
                ...
            </p>
            <div class="control">
                <input class="input" type="text" placeholder="token">
            </div>
            <div class="control">
                <button class="button is-link">Save</button>
            </div>
        </div>
      </form>
  </section>
</template>

<script>
export default {
  name: "settings",
  methods: {
    submit() {
      console.log("Submitted");
    }
  }
};
</script>

<style>

</style>
