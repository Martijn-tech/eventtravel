<template>
  <div>
    <b-modal id="website-modal" scrollable size="xl" hide-footer>
      <template slot="modal-title">
        <strong>{{ title }} </strong
        ><span v-if="tools && tools == 'Swoogo'"
          ><small
            ><i
              >(built with
              <a
                v-if="landingpage && landingpage !== 'null'"
                :href="landingpage"
                target="_blank"
                >{{ tools }})</a
              ></i
            ></small
          ></span
        >
      </template>
      <div class="d-block text-center">
        <img
          v-if="screenshot"
          :src="screenshot.url"
          alt="Screenshot"
          class="screenshot"
        />
      </div>
      <b-button class="mt-3" block
        ><a style="color: #000000;" :href="website" target="blank"
          >Visit Event Site</a
        ></b-button
      >
      <b-button class="mt-3" block @click="$bvModal.hide('website-modal')"
        >Take Me Back</b-button
      >
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'modal',
  props: {
    title: {
      type: String,
      default: ''
    },
    website: {
      type: String,
      default: ''
    },
    screenshot: {
      type: String,
      default: ''
    },
    tools: {
      type: String,
      default: ''
    },
    landingpage: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.screenshot {
  width: 100%;
}
</style>
