<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidTruckPickup',
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
          default: '0 0 640 512'
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
        <path fill="currentColor" d="M363.8 96l57.6 96-133.4 0 0-96 75.8 0zM496 192L418.6 63.1C407.1 43.8 386.2 32 363.8 32L256 32c-17.7 0-32 14.3-32 32l0 128-144 0c-26.5 0-48 21.5-48 48l0 80c-17.7 0-32 14.3-32 32s14.3 32 32 32l32.4 0c-.2 2.6-.4 5.3-.4 8 0 48.6 39.4 88 88 88s88-39.4 88-88c0-2.7-.1-5.4-.4-8l160.7 0c-.2 2.6-.4 5.3-.4 8 0 48.6 39.4 88 88 88s88-39.4 88-88c0-2.7-.1-5.4-.4-8l32.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-80c0-26.5-21.5-48-48-48l-64 0zM112 392a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zm376-40a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"/>
      </BaseIcon>
    </template>