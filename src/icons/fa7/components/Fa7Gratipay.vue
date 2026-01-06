<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Gratipay',
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
        <path fill="currentColor" d="M256 0a256 256 0 1 0 0 512 256 256 0 1 0 0-512zM374.3 233.7L257.7 391.3 141.3 233.7c-9-12.3-19.7-52 14-74.3 29-18.7 56.4-4.3 70.7 12.3 16.4 18.5 48.1 17.4 63.7 0 14.3-16.6 41.7-31 70.3-12.3 34 22.3 23.3 61.9 14.2 74.3z"/>
      </BaseIcon>
    </template>