<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Mixcloud',
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
        <path fill="currentColor" d="M213 346.6l-33.2 0 0-151.5 6.2-21.6-10.7 0-38.1 173.1-61 0-38.4-173.1-10.5 0 5.9 21.6 0 151.5-33.2 0 0-181.6 65.7 0 36.6 173.1 8.5 0 36.6-173.1 65.7 0 0 181.6zm331.5-63l-86 62.1 0-38.1 72.9-51.8-72.9-51.8 0-38.1 86 62.3 9.3 0 86.3-62.3 0 38.1-73.1 51.8 73.1 51.8 0 38.1-86.3-62.1-9.3 0zM430.2 272.3l-182 0 0-33.1 182 0 0 33.1z"/>
      </BaseIcon>
    </template>