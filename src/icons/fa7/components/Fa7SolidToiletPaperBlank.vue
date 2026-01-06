<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidToiletPaperBlank',
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
        <path fill="currentColor" d="M327.1 32c-8.8 11.1-16 23.1-21.9 34.8-21.4 42.7-33.2 98.4-33.2 157.2l0 264c0 30.9-25.1 56-56 56L56 544c-30.9 0-56-25.1-56-56L0 224C0 118 43 32 96 32l231.1 0zM416 416c-53 0-96-86-96-192s43-192 96-192 96 86 96 192-43 192-96 192zm0-128c17.7 0 32-28.7 32-64s-14.3-64-32-64-32 28.7-32 64 14.3 64 32 64z"/>
      </BaseIcon>
    </template>