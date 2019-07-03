<template>
  <section>
    <Header />
    <Nav
      :websites="websites"
      :selected-tags="selectedTags"
      @tag-selected="tagSelected"
    />
    <Grid v-if="websites.length > 0" :websites="filteredWebsites" />
    <div
      v-if="websites.length === 0 && !error"
      class="d-flex justify-content-center"
    >
      <div
        class="spinner-grow spinner-color"
        role="status"
        style="width: 4rem; height: 4rem;"
      ></div>
    </div>

    <div v-if="error" class="d-flex justify-content-center">
      <p class="justify-content-center text-danger">{{ error }}</p>
    </div>

    <Footer />
  </section>
</template>

<script>
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'
import Grid from '@/components/Grid.vue'
import Footer from '@/components/Footer.vue'
import lambdaService from '@/lambdaService'

export default {
  components: {
    Header,
    Nav,
    Grid,
    Footer
  },
  data: function() {
    return {
      websites: [],
      selectedTags: [],
      error: null
    }
  },
  computed: {
    filteredWebsites() {
      if (this.selectedTags.length === 0) return this.websites
      else
        return this.websites
          .filter(f => !!f.tags) // only those websites that actually have a tags property
          .filter(f => f.tags.some(t => this.selectedTags.includes(t)))
          .sort((a, b) => (a.title > b.title ? 1 : a.title < b.title ? -1 : 0))
    }
  },
  created() {
    lambdaService
      .fetchRecords()
      .then(response => {
        this.websites = response.records
          .map(r => r.fields)
          .filter(o => o.approved)
      })
      .catch(err => {
        this.error = err
      })
  },
  methods: {
    tagSelected(tag) {
      if (tag === null) {
        this.selectedTags = []
        return
      }
      const index = this.selectedTags.indexOf(tag)
      if (index === -1) {
        this.selectedTags.push(tag)
      } else {
        this.selectedTags.splice(index, 1)
      }
    }
  }
}
</script>

<style scoped>
.spinner-color {
  color: #66d1d1;
}
</style>
