<template>
  <div class="footer container-fluid py-4 text-center">
    <!-- TWITTER FOLLOW -->
    Follow
    <a
      class="twitter-follow-button text-center"
      href="https://twitter.com/ckpleiser"
      data-show-count="false"
      >@CKPleiser</a
    >
    <!-- TWITTER -->
    <hr />
    <p class="text-muted font-italic">
      KickassEventSites.com has been created by
      <a href="https://twitter.com/ckpleiser">Carsten Pleiser</a> and is brought
      to you by <a href="https://get.swoogo.com">Swoogo</a>.
      <br />
    </p>
    <p class="text-secondary muted">
      <a class="text-muted" href="https://twitter.com/swoogo">@Swoogo</a>
      <span>|</span>
      <a class="text-muted" href="https://airtable.com/shrrFlvRjZDhCfbu2"
        >Submit your site</a
      >
    </p>
  </div>
</template>
<script>
export default {}
</script>

<style lang="scss">
.footer {
  font-size: 85%;

  .muted a {
    font-size: 85%;
    font-weight: 400;
  }
  span {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
}
</style>
