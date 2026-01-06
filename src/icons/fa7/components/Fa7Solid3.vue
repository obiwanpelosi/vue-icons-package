<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Solid3',
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
          default: '0 0 320 512'
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
        <path fill="currentColor" d="M80 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l112 0c35.3 0 64-28.7 64-64s-28.7-64-64-64L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l160 0c70.7 0 128 57.3 128 128 0 38.2-16.8 72.5-43.3 96 26.6 23.5 43.3 57.8 43.3 96 0 70.7-57.3 128-128 128L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c35.3 0 64-28.7 64-64s-28.7-64-64-64L80 288z"/>
      </BaseIcon>
    </template>