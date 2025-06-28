<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxSolidQuoteSingleLeft',
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
        <path d="m15.203 6.98.804-.161V4h-1c-2.784 0-4.906.771-6.309 2.292C6.81 8.34 7 10.97 7.006 11v8a1 1 0 0 0 1 1h7c1.103 0 2-.897 2-2v-7a1 1 0 0 0-1-1h-4.079c.022-.402.123-.912.429-1.396.509-.801 1.466-1.347 2.847-1.624z"/>
      </BaseIcon>
    </template>