<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcViewDetails',
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
        <rect x="7" y="4" fill="#BBDEFB" width="34" height="40"/>
    <g fill="#2196F3">
        <rect x="13" y="26" width="4" height="4"/>
        <rect x="13" y="18" width="4" height="4"/>
        <rect x="13" y="34" width="4" height="4"/>
        <rect x="13" y="10" width="4" height="4"/>
        <rect x="21" y="26" width="14" height="4"/>
        <rect x="21" y="18" width="14" height="4"/>
        <rect x="21" y="34" width="14" height="4"/>
        <rect x="21" y="10" width="14" height="4"/>
    </g>
      </BaseIcon>
    </template>