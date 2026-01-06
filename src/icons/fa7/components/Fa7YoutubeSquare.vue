<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7YoutubeSquare',
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
        <path fill="currentColor" d="M282 256.2l-95.2-54.1 0 108.2 95.2-54.1zM384 32L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64zm14.4 136.1c7.6 28.6 7.6 88.2 7.6 88.2s0 59.6-7.6 88.1c-4.2 15.8-16.5 27.7-32.2 31.9-28.3 7.7-142.2 7.7-142.2 7.7s-113.9 0-142.2-7.6c-15.7-4.2-28-16.1-32.2-31.9-7.6-28.6-7.6-88.2-7.6-88.2s0-59.7 7.6-88.2c4.2-15.8 16.5-28.2 32.2-32.4 28.3-7.7 142.2-7.7 142.2-7.7s113.9 0 142.2 7.7c15.7 4.2 28 16.6 32.2 32.4z"/>
      </BaseIcon>
    </template>