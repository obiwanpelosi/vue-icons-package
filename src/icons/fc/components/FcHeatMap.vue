<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcHeatMap',
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
        <circle cx="14" cy="11" r="2"/>
        <circle cx="32" cy="11" r="2"/>
        <circle cx="39" cy="11" r="2"/>
        <circle cx="23" cy="11" r="4"/>
        <circle cx="14" cy="33" r="2"/>
        <circle cx="30" cy="33" r="2"/>
        <circle cx="22" cy="33" r="3"/>
        <circle cx="38" cy="33" r="4"/>
        <circle cx="14" cy="22" r="2"/>
        <circle cx="39" cy="22" r="2"/>
        <circle cx="32" cy="22" r="3"/>
    </g>
      </BaseIcon>
    </template>