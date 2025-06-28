<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxRegularShieldMinus',
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
          default: '0 0 24 24'
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
        <path d="m20.41 6.11-8-4a.94.94 0 0 0-.89 0l-8 4A1 1 0 0 0 3 6.9c0 .11-1 10.77 8.59 15a1 1 0 0 0 .41.1.93.93 0 0 0 .4-.09C21.92 17.67 21 7 21 6.9a1 1 0 0 0-.59-.79zM12 19.9C5.2 16.63 4.88 9.64 4.93 7.63l7-3.51 7 3.51c.13 2.01-.19 9-6.93 12.27z"/><path d="M8 11h8v2H8z"/>
      </BaseIcon>
    </template>