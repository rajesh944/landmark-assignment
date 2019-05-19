import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/store";

//Main instance for the vue
new Vue({
  store: store,
  el: "#app",
  render: h => h(App)
});

//Global functions, which are more precise than normal setItem/getItem methods
Storage.prototype.setObj = function(key, obj) {
  return this.setItem(key, JSON.stringify(obj));
};
Storage.prototype.getObj = function(key) {
  return JSON.parse(this.getItem(key));
};

//For local storage, persistance data :P
if (localStorage.getItem("formDataLandmark") === null) {
  localStorage.setObj("formDataLandmark", []);
}

document.querySelector("input").addEventListener("focus", function() {
  if (document.getElementById("form-log").classList.contains("show-inline")) {
    //form submitted successful message, so clear on focus
    const formLogError = document.getElementById("form-log");
    formLogError.className += " hide";
    formLogError.classList.remove("show-inline");
    document.querySelectorAll("input").forEach(input => {
      input.value = "";
    });
  }
  let errorOnEmail = document.getElementById("error-email-exists");
  if (errorOnEmail) {
    errorOnEmail.className += " hide";
  }
});
