<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxRegularSprayCan',
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
        <path d="M11.002 2h-4a1 1 0 0 0-1 1v3.812a5.998 5.998 0 0 0-3 5.188v.988L3 13l.002.072V21a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9a5.999 5.999 0 0 0-3-5.188V3a1 1 0 0 0-1-1zm-3 4V4h2v2h-2zm5.001 14h-8v-6h8v6zm-8.001-8c0-2.206 1.794-4 4-4s4 1.794 4 4h-8zm8.001-9h2v2h-2zM16 3h2v2h-2zm0 3h2v2h-2zm3-3h2v2h-2zm0 3h2v2h-2zm0 3h2v2h-2z"/>
      </BaseIcon>
    </template>