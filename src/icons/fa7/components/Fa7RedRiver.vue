<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7RedRiver',
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
        <path fill="currentColor" d="M353.2 32L94.8 32C42.4 32 0 74.4 0 126.8L0 385.2C0 437.6 42.4 480 94.8 480l258.4 0c52.4 0 94.8-42.4 94.8-94.8l0-258.4C448 74.4 405.6 32 353.2 32zM144.9 200.9l0 56.3c0 27-21.9 48.9-48.9 48.9l0-154.2c0-13.2 10.7-23.9 23.9-23.9l154.2 0c0 27-21.9 48.9-48.9 48.9l-56.3 0c-12.3-.6-24.6 11.6-24 24zm176.3 72l-56.3 0c-12.3-.6-24.6 11.6-24 24l0 56.3c0 27-21.9 48.9-48.9 48.9l0-154.2c0-13.2 10.7-23.9 23.9-23.9l154.2 0c0 27-21.9 48.9-48.9 48.9z"/>
      </BaseIcon>
    </template>