<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxSolidBomb',
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
        <path d="m18.293 4.293-1.086 1.086-1.086-1.086a.999.999 0 0 0-1.414 0l-1.249 1.249A8.427 8.427 0 0 0 10.499 5C5.813 5 2 8.813 2 13.5S5.813 22 10.499 22s8.5-3.813 8.5-8.5a8.42 8.42 0 0 0-.431-2.654L19.914 9.5a.999.999 0 0 0 0-1.414l-1.293-1.293 1.09-1.09C19.94 5.474 20.556 5 21 5h1V3h-1c-1.4 0-2.584 1.167-2.707 1.293zM10.499 10c-.935 0-1.813.364-2.475 1.025A3.48 3.48 0 0 0 7 13.5H5c0-1.468.571-2.849 1.609-3.888A5.464 5.464 0 0 1 10.499 8v2z"/>
      </BaseIcon>
    </template>