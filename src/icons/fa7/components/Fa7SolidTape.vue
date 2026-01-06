<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidTape',
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
          default: '0 0 576 512'
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
        <path fill="currentColor" d="M412.8 416c41.5-40.7 67.2-97.3 67.2-160 0-123.7-100.3-224-224-224S32 132.3 32 256 132.3 480 256 480l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-131.2 0zM256 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm48 96a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"/>
      </BaseIcon>
    </template>