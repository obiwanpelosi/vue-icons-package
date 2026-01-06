<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcCollect',
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
        <g fill="#009688">
        <rect x="22" y="35" width="4" height="11"/>
        <polygon points="24,29.6 31,38 17,38"/>
    </g>
    <g fill="#009688">
        <rect x="22" y="2" width="4" height="11"/>
        <polygon points="24,18.4 17,10 31,10"/>
    </g>
    <g fill="#009688">
        <rect x="2" y="22" width="11" height="4"/>
        <polygon points="18.4,24 10,31 10,17"/>
    </g>
    <g fill="#009688">
        <rect x="35" y="22" width="11" height="4"/>
        <polygon points="29.6,24 38,17 38,31"/>
    </g>
    <circle fill="#F44336" cx="24" cy="24" r="3"/>
      </BaseIcon>
    </template>