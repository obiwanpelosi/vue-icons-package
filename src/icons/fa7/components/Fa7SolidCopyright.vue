<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidCopyright',
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
        <path fill="currentColor" d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM205.1 306.9c28.1 28.1 73.7 28.1 101.8 0 9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-46.9 46.9-122.8 46.9-169.7 0s-46.9-122.8 0-169.7 122.8-46.9 169.7 0c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-28.1-28.1-73.7-28.1-101.8 0s-28.1 73.7 0 101.8z"/>
      </BaseIcon>
    </template>