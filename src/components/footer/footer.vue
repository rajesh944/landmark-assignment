<template>
<div id="footer-comp" class="landmark-footer">
    <div class="landmark-footer_form-wrapper">
       <button class="landmark-footer_form-wrapper_form-button" @click="changeFlag(true)">Form</button>
    </div>
    <div class="landmark-footer_view-wrapper">
        <button class="landmark-footer_view-wrapper_view-button" @click="changeFlag(false)">View</button>
    </div>
</div>
</template>

<script>
export default {
    name: 'footer-comp',
    data() {
      return {
        
      }
    },
    methods: {
        changeFlag(flag) {
            this.$emit('updateFlag', flag);
        }
    }
}
</script>

<style lang="scss" scoped>
 .landmark-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    height: 5rem;
    button {
        padding:1rem 4rem;
        border-radius: 4%;
        font-size: 1.2rem;
        cursor: pointer;
        background-color: white;
        @media only screen and (max-width: 1024px) {
            font-size: 1.6rem;  
            width:100%;  
        }
    } 
    button:hover {                
        background: #e7e7e7;
        
    }
    .landmark-footer_form-wrapper {
        padding: 0rem 2rem;
        @media only screen and (max-width: 1024px) {
           width:100%;   
        }
        
    }   
    .landmark-footer_view-wrapper {
        @media only screen and (max-width: 1024px) {
           width:100%;   
        }
        
    }   
 }
</style>