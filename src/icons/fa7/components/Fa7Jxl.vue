<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Jxl',
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
        <path fill="currentColor" d="M412.2 32L35.8 32C16 32 0 48 0 67.8L0 444.2C0 464 16 480 35.8 480l376.4 0c19.8 0 35.8-16 35.8-35.8l0-376.4C448 48 432 32 412.2 32zM378.6 333.7c0 40.2-32.6 72.8-72.8 72.8l-235.6 0c0-40.2 32.6-72.8 72.8-72.8l235.6 0zm0-113.9c0 40.2-32.6 72.8-72.8 72.8l-235.6 0c0-40.2 32.6-72.8 72.8-72.8l235.6 0zm0-113.9c0 40.2-32.6 72.8-72.8 72.8l-235.6 0c0-40.2 32.6-72.8 72.8-72.8l235.6 0z"/>
      </BaseIcon>
    </template>