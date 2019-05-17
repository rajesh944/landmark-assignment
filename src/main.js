import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

//Global functions, which are more precise than normal setItem/getItem methods
Storage.prototype.setObj = function(key, obj) {
  return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
  return JSON.parse(this.getItem(key))
}

//For local storage, persistance data
if(localStorage.getItem("formDataLandmark") === null) {
  localStorage.setObj('formDataLandmark', []);
}


document.querySelector('input').addEventListener('focus', function() {
  if(document.getElementById('form-log').classList.contains('show-inline')) {//form submitted successful message
    const formLogError = document.getElementById('form-log');
    formLogError.className += " hide";
    formLogError.classList.remove("show-inline");
    // document.querySelectorAll('input').forEach((input) => {
    //   input.value="";
    // })
  }
  let errorOnEmail = document.getElementById("error-email-exists");
  if(errorOnEmail) {
    errorOnEmail.className += " hide";
  }
  
});

