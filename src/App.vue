<!-- Global component -->
<template>
  <div class="wrapper">
    <header-comp></header-comp>
    <content-form v-if="formEnabled"></content-form>
    <content-table v-else></content-table>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
  import headerComp from './components/header/header.vue';
  import footerComp from './components/footer/footer.vue';
  import contentForm from './components/content-form/content-form.vue';
  import contentTable from './components/content-tabular/content-tabular.vue';
  export default {
    computed: {
      formEnabled() {
        return this.$store.getters.formEnabled;
      }
    },
    components: {
      headerComp,
      contentForm,
      footerComp,
      contentTable
    }
  }
</script>

<style lang="scss">
  .wrapper {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 80%;
    margin: auto;
    @media only screen and (max-width: 1024px) {
      width: 100%;
    }
    .hide {
      display: none;
    }
    .show-inline {
      display: inline !important;
    }
  }
</style>
