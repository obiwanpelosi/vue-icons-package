<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxSolidObjectsHorizontalCenter',
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
        <path d="M19 13h-6v-2h4a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-4V2h-2v3H7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4v2H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6v3h2v-3h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z"/>
      </BaseIcon>
    </template>