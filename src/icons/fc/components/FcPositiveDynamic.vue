<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcPositiveDynamic',
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
        <g fill="#00BCD4">
        <rect x="19" y="22" width="10" height="20"/>
        <rect x="32" y="8" width="10" height="34"/>
        <rect x="6" y="30" width="10" height="12"/>
    </g>
    <g fill="#3F51B5">
        <polygon points="11,8 21,18 21,8"/>
        <rect x="11" y="8.9" transform="matrix(-.707 -.707 .707 -.707 10.879 36.506)" width="4" height="14.1"/>
    </g>
      </BaseIcon>
    </template>