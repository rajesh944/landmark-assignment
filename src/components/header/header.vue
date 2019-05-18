<template>
  <div id="header-comp" class="landmark-header">
    <div class="landmark-header_img-wrapper">
      <img src="./assets/lmgLogo_400x400.png" alt="Comapny Logo" class="landmark-header_img-wrapper_img">
    </div>
    <div class="landmark-header_title-wrapper">
        <h1 class="landmark-header_title-wrapper_title">{{companyName}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header-comp',
  data() {
    return {
      companyName: 'Landmark Group'
    }
  }
}
</script>

<style lang="scss" scoped>
 .landmark-header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2rem;
    height: 5rem;
    .landmark-header_img-wrapper {
      .landmark-header_img-wrapper_img {
        height: 4rem;
        width: 4rem;
      }
    }
    .landmark-header_title-wrapper {
      padding-left: 2rem;
    }
 }
</style>