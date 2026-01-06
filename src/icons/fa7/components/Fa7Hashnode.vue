<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Hashnode',
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
        <path fill="currentColor" d="M35.7 171.1c-46.9 46-46.9 122.9 0 169.8L171.6 476.8c46 46.9 122.9 46.9 169.8 0L477.3 340.9c46.9-46.9 46.9-123.8 0-169.8L341.4 35.2c-46.9-46.9-123.8-46.9-169.8 0L35.7 171.1zM196 196.5a84.5 84.5 0 1 1 120 119 84.5 84.5 0 1 1 -120-119z"/>
      </BaseIcon>
    </template>