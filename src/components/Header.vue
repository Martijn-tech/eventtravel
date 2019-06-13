<template>
  <div class="container header">
    <h1 class="text-center logo">
      Event Website Inspiration
    </h1>
    <p class="text-center lead text-secondary logo-subtitle">
      Beautiful Event Websites From Great Companies.
    </p>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      selectedTag: null
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss">
@import '@/assets/scss/app.scss';

.header {
  margin-top: 4rem;
}

.logo {
  font-family: 'Open Sans';
  font-weight: 700;
  font-size: 3.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

.logo-subtitle {
  font-size: 1.5rem;
  font-weight: 400;
  color: $primary;
}
</style>
