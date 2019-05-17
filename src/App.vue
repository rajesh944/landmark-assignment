<!-- Global component -->
<template>
  <div class="wrapper" >
      <header-comp></header-comp>
      <content-form v-if="formEnabled"></content-form>
      <content-table v-else :tabular-list="tabularList"></content-table>
      <footer-comp v-on:updateFlag="actionFlagChanged"></footer-comp>
  </div>
</template>

<script>
  import headerComp from './components/header/header.vue';
  import footerComp from './components/footer/footer.vue';
  import contentForm from './components/content-form/content-form.vue';
  import contentTable from './components/content-tabular/content-tabular.vue';
export default {
  data () {
    return {
      formEnabled: true,
      tabularList: []
    }
  },
  methods: {
    actionFlagChanged(flag) {
      this.formEnabled = flag;
      if(!flag) {
        let dataStored = localStorage.getObj('formDataLandmark');
        if(dataStored === null) {
          return 
        }
       dataStored.reduce((updatedArray, eachSubmittedObject)=> {
         let timeDiff = timeLogic(eachSubmittedObject.time);
         eachSubmittedObject.time = `${timeDiff}min`;
         updatedArray.push(eachSubmittedObject);
         return updatedArray ;
       }, [])
        function timeLogic(submitDateObj) {
          if(!submitDateObj instanceof Date) {
            return;
          }
          const currentDate = new Date();
          const submittedDate = new Date(submitDateObj);
          let milliSecondDiff = currentDate.getTime() - submittedDate.getTime();
          return Math.round(milliSecondDiff / 60000);
        }
        this.tabularList = dataStored;
      }
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
