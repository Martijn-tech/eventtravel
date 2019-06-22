<template>
  <div
    :id="cardId"
    class="card"
    :class="{ 'card-selected': $route.hash.includes(cardId) }"
  >
    <img
      v-if="image"
      class="card-img-top"
      :src="image[0].url"
      alt="Screenshot"
    />
    <div v-else class="card-img-top no-logo" alt="Logo" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        {{ description }}
      </p>
    </div>
    <div class="card-body">
      <a :href="website" target="blank" class="card-link">Visit Event Site</a>
      <!-- <a v-if="tools" :href="tools" target="blank" class="card-link"
        >Crunchbase</a
      > -->
    </div>
    <ul class="list-group list-group-flush">
      <li
        v-if="tools && tools !== 'Bespoke' && tools !== 'Unknown'"
        class="list-group-item"
      >
        <span class="label">Built with:</span
        ><a
          v-if="landingpage && landingpage !== 'null'"
          :href="landingpage"
          target="_blank"
          >{{ tools }}</a
        ><span v-else>{{ tools }}</span>
      </li>
    </ul>
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
    title: {
      type: String,
      default: ''
    },
    image: {
      type: Array,
      default: () => []
    },
    description: {
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
    },
    tools: {
      type: String,
      default: ''
    },
    landingpage: {
      type: String,
      default: ''
    }
  },
  mounted() {}
}
</script>

<style lang="scss"></style>
