<template>
<div class="col-4">
  <b-card title="QUOTES"
          tag="article"
          bg-variant="secondary"
          text-variant="white"
          v-if="!quote.quote">
    <p class="card-text">
      No Quote loaded yet
      <p class="subtitle">
                    By Me
                  </p>
  </b-card>

    <b-card title="QUOTES"
          tag="article"
          bg-variant="secondary"
          text-variant="white"
          v-if="quote.quote">
    <p class="card-text">
      {{ quote.quote }}
      <p class="subtitle">
                    {{ quote.by }} <i>(posted by: {{ quote.posted_by.name }})</i>
                  </p>
  </b-card>
</div>
</template>

<script>
export default {
  name: "quotes",
  mounted: function() {
    console.log("quotes component getting quote");
    this.$store.dispatch("getQuotes");
  },
  computed: {
    quote: function() {
      console.log("quotes component computed quote");
      console.log(this.$store.state.quote);
      return this.$store.state.quote;
    }
  }
};
</script>

<style>

</style>
