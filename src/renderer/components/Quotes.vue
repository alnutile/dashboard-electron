<template>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <div class="content">
            <p class="title">QUOTES</p>
            <div class="content">
              <div class="card" v-if="!quote.getQuote">
                <div class="card-content">
                  <p class="title">
                    No Quote loaded yet
                  </p>
                  <p class="subtitle">
                    By Me
                  </p>
                </div>
              </div>

              <div class="card" v-if="quote.getQuote">
                <div class="card-content">
                  <p class="title">
                    {{ quote.getQuote.quote }}
                  </p>
                  <p class="subtitle">
                    {{ quote.getQuote.by }} <i>(posted by: {{ quote.getQuote.posted_by.name }})</i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
    </div>
</template>

<script>
export default {
  name: 'quotes',
  computed: {
    quote: function() {
      console.log(this.$store.state.quote);
      return this.$store.state.quote;
    }
  }
};
</script>

<style>
.card {
  background-color: inherit;
}
.subtitle {
  color: #c5c5c5;
}
</style>


