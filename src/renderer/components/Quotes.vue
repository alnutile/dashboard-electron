<template>
<div class="card rounded border-dark blocks"
    style="width: 80rem;">
    <div class="card-block">
  <h1 class="text-uppercase">Quotes</h1>
      <blockquote class="blockquote"
          v-if="!quote.quote">
          <p class="mb-0">No Quote loaded yet</p>
      <footer class="blockquote-footer">
         By Me
      </footer>
      </blockquote>

      <blockquote class="blockquote"
          v-if="quote.quote">
          <p class="mb-0">{{ quote.quote }}</p>
      <footer class="blockquote-footer">
        {{ quote.by }} <cite title="Source Title">(posted by: {{ quote.posted_by.name }})</cite>
      </footer>
      </blockquote>
  </div>
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
.blockquote {
  font-size: 180%;
}

.blockquote-footer {
  font-size: 80%;
  color: #b2b3be;
}

.blockquote-footer .cite {
  font-size: 70%;
}
</style>
