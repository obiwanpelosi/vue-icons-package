<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiAvocado',
      components: {
        BaseIcon,
      },
      props: {
        size: {
          type: String,
          default: '1em'
        },
        color: {
          type: String,
          default: 'currentColor'
        },
        strokeColor: {
          type: String,
          default: "",
        },
        class: {
          type: String,
          default: ''
        },
        style: {
          type: Object as PropType<Record<string, string | number>>,
          default: () => ({})
        },
        viewBox: {
          type: String,
          default: '0 0 24 24'
        }
      },
      computed: {
        cssClass() {
          return this.class ? this.class : "";
        },
      },
    })
    </script>
    
    <template>
      <BaseIcon 
        :size="size"
        :color="color"
        :strokeColor="strokeColor"
        :class="cssClass"
        :style="style" 
        :viewBox="viewBox"
      >
        <g id="Avocado">
    <g>
      <path d="M11.982,21.939a7.759,7.759,0,0,1-.818-.044A7.58,7.58,0,0,1,6.1,9.6a3.578,3.578,0,0,0,.684-2.271,5.128,5.128,0,0,1,3.8-5.085,5.266,5.266,0,0,1,4.6.892,5.185,5.185,0,0,1,2.039,4.14A3.6,3.6,0,0,0,17.9,9.61a7.574,7.574,0,0,1-5.918,12.329Zm.009-18.877a4.538,4.538,0,0,0-1.158.152,4.126,4.126,0,0,0-3.055,4.07,4.532,4.532,0,0,1-.9,2.947,6.555,6.555,0,0,0-1.366,5.231A6.643,6.643,0,0,0,11.271,20.9a6.575,6.575,0,0,0,5.851-10.662,4.453,4.453,0,0,1-.9-2.9,4.214,4.214,0,0,0-4.228-4.273Z" />
      <ellipse cx="11.999" cy="14.856" rx="2.5" ry="3" />
    </g>
  </g>
      </BaseIcon>
    </template>