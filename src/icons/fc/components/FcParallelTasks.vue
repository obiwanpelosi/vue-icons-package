<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcParallelTasks',
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
        <polygon fill="#90CAF9" points="36,13 36,9 22,9 22,22 13,22 13,26 22,26 22,39 36,39 36,35 26,35 26,26 36,26 36,22 26,22 26,13"/>
    <rect x="6" y="17" fill="#D81B60" width="10" height="14"/>
    <rect x="32" y="6" fill="#2196F3" width="10" height="10"/>
    <rect x="32" y="32" fill="#2196F3" width="10" height="10"/>
    <rect x="32" y="19" fill="#2196F3" width="10" height="10"/>
      </BaseIcon>
    </template>