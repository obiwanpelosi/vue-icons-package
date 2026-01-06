<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcElectricalThreshold',
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
          default: '0 0 48 48'
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
        <rect x="3" y="12" fill="#80DEEA" width="42" height="24"/>
    <rect x="3" y="23" fill="#03A9F4" width="42" height="2"/>
    <path fill="none" stroke="#3F51B5" stroke-width="4" stroke-miterlimit="10" d="M4,18l4.5-1.5c0.9-0.3,1.9,0.1,2.3,0.9l8.7,14.3 c0.7,1.2,2.4,1.3,3.2,0.2l2.3-2.8c0.5-0.6,1.4-0.9,2.2-0.6l3,1c1,0.3,2.1-0.2,2.5-1.1l4.3-10.1c0.5-1.1,1.9-1.6,2.9-0.9l4,2.7"/>
      </BaseIcon>
    </template>