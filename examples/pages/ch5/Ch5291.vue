<template slot="preview">
  <model-stl :backgroundAlpha="0" @on-load="onLoad" src="static/models/ch5/5-29-1.stl"></model-stl>
</template>
<script>
import ModelStl from "vue-3d-app/model-stl.vue";

const code = `
<template>
    <model-stl src="static/models/stl/slotted_disk.stl"></model-stl>
</template>

<script>
    import { ModelStl } from 'vue-3d-model'

    export default {
        components: {
            ModelStl
        }
    }
<\/script>
`;

const htmlCode = `
<body>
    <div id="app">
        <model-stl src="static/models/stl/slotted_disk.stl"></model-stl>
    </div>
    #scripts#
    <script>
        new Vue({
            el: '#app'
        })
    <\/script>
</body>
`;

export default {
  name: 'ch5291',
  data() {
    return {
      code,
      htmlCode,
      loading: true
    };
  },
  methods: {
    onLoad() {
      this.loading = false;
    }
  },
  components: {
    ModelStl
  }
};
</script>
