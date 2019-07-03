<template>
  <div
    :id="cardId"
    class="card"
    :class="{ 'card-selected': $route.hash.includes(cardId) }"
  >
    <div class="card-body">
      <h5 class="card-title">{{ company }}</h5>
      <p class="card-text"></p>
    </div>
    <div class="card-body">
      <a @click.stop :href="website" target="blank" class="card-link"
        >Visit Website</a
      >
      <!-- <a v-if="tools" :href="tools" target="blank" class="card-link"
        >Crunchbase</a
      > -->
    </div>
    <ul class="list-group list-group-flush"></ul>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    cardId: {
      type: String,
      default: ''
    },
    company: {
      type: String,
      default: ''
    },
    website: {
      type: String,
      default: ''
    },
    tags: {
      type: Array,
      default: () => []
    }
  },
  mounted() {}
}
</script>

<style lang="scss"></style>
