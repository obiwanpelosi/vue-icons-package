<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcFactory',
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
        <path fill="#BF360C" d="M41.2,5h-7.3L32,43h11L41.2,5z"/>
    <path fill="#E64A19" d="M33,23h-4v-6l-12,6v-6L5,23v20h28V23z"/>
    <rect x="9" y="27" fill="#FFC107" width="4" height="4"/>
    <rect x="17" y="27" fill="#FFC107" width="4" height="4"/>
    <rect x="25" y="27" fill="#FFC107" width="4" height="4"/>
    <rect x="9" y="35" fill="#FFC107" width="4" height="4"/>
    <rect x="17" y="35" fill="#FFC107" width="4" height="4"/>
    <rect x="25" y="35" fill="#FFC107" width="4" height="4"/>
      </BaseIcon>
    </template>