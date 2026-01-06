<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Linktree',
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
          default: '0 0 448 512'
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
        <path fill="currentColor" d="M32 173.4l125.8 0-89.4-85.4 49.5-51 85.2 87.8 0-124.8 73.9 0 0 124.8 85.2-87.6 49.4 50.8-89.4 85.2 125.7 0 0 70.5-126.4 0 90 87.6-49.3 49.8-122.2-123-122.2 123-49.5-49.6 90-87.6-126.4 0 0-70.5zM202.9 344.8l73.9 0 0 167.2-73.9 0 0-167.2z"/>
      </BaseIcon>
    </template>