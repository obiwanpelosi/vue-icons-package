<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcGenericSortingAsc',
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
        <rect x="6" y="6" fill="#2196F3" width="4" height="4"/>
    <rect x="6" y="14" fill="#2196F3" width="12" height="4"/>
    <rect x="6" y="22" fill="#2196F3" width="20" height="4"/>
    <rect x="6" y="30" fill="#2196F3" width="28" height="4"/>
    <rect x="6" y="38" fill="#2196F3" width="36" height="4"/>
      </BaseIcon>
    </template>