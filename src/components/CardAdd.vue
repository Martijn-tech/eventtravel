<template>
  <div class="card">
    <div class="card-img-top" alt="Logo" />
    <div class="card-body">
      <p class="card-text">
        <a href="https://airtable.com/shrG09XI3hB2UvLLD" target="blank">
          <img src="@/assets/imgs/plus.png" alt="plus-sign" />
        </a>
      </p>
      <p>
        Want to list your blockchain startup here?<br />
        <a href="https://airtable.com/shrG09XI3hB2UvLLD" target="blank"
          >Submit it for free</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  mounted() {}
}
</script>

<style lang="scss">
.card-img-top {
  background: #f6bb2e;
}
.card-body {
  img {
    width: 60px;
    cursor: pointer;
    transition: all 0.1s ease-in;
    margin-top: -64px;
    &:hover {
      transform: scale(1.025, 1.025);
      margin-top: -70px;
    }
  }
}
</style>
