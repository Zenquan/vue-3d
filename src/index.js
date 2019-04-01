import Vue from 'vue'

import ModelStl from './model-stl.vue'

// alias

const components = [
  ModelStl
]

const install = ( Vue ) => {
  components.map(component => {
    Vue.component(component.name, component);
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ModelStl
}

export {
  install,
  ModelStl
}