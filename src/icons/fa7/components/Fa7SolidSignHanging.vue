<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidSignHanging',
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
          default: '0 0 512 512'
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
        <path fill="currentColor" d="M96 0c17.7 0 32 14.3 32 32l0 32 352 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-352 0 0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-352-32 0C14.3 128 0 113.7 0 96S14.3 64 32 64l32 0 0-32C64 14.3 78.3 0 96 0zM208 176l240 0c17.7 0 32 14.3 32 32l0 144c0 17.7-14.3 32-32 32l-240 0c-17.7 0-32-14.3-32-32l0-144c0-17.7 14.3-32 32-32z"/>
      </BaseIcon>
    </template>