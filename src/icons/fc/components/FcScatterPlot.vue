<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcScatterPlot',
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
        <polygon fill="#CFD8DC" points="9,39 9,6 7,6 7,41 42,41 42,39"/>
    <g fill="#00BCD4">
        <circle cx="39" cy="11" r="3"/>
        <circle cx="31" cy="13" r="3"/>
        <circle cx="37" cy="19" r="3"/>
        <circle cx="34" cy="26" r="3"/>
        <circle cx="28" cy="20" r="3"/>
        <circle cx="26" cy="28" r="3"/>
        <circle cx="20" cy="23" r="3"/>
        <circle cx="21" cy="33" r="3"/>
        <circle cx="14" cy="30" r="3"/>
    </g>
      </BaseIcon>
    </template>