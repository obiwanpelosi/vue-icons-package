<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Cloudsmith',
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
        <path fill="currentColor" d="M512 227.6L512 284.5 284.4 512 227.6 512 0 284.4 0 227.6 227.6 0 284.5 0 512 227.6zm-256 162c17.8 .5 35.6-2.6 52.2-9.1s31.8-16.2 44.6-28.7 23-27.3 29.9-43.8 10.5-34.1 10.5-52-3.6-35.5-10.5-52-17.1-31.3-29.9-43.8-28-22.2-44.6-28.7-34.4-9.6-52.2-9.1c-17.8-.5-35.6 2.6-52.2 9.1s-31.8 16.3-44.6 28.7-23 27.3-29.9 43.8-10.5 34.1-10.5 52 3.6 35.5 10.5 52 17.1 31.3 29.9 43.8 28 22.2 44.6 28.7 34.4 9.6 52.2 9.1z"/>
      </BaseIcon>
    </template>