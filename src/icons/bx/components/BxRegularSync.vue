<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxRegularSync',
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
        <path d="m13 7.101.01.001a4.978 4.978 0 0 1 2.526 1.362 5.005 5.005 0 0 1 1.363 2.528 5.061 5.061 0 0 1-.001 2.016 4.976 4.976 0 0 1-1.363 2.527l1.414 1.414a7.014 7.014 0 0 0 1.908-3.54 6.98 6.98 0 0 0 0-2.819 6.957 6.957 0 0 0-1.907-3.539 6.97 6.97 0 0 0-2.223-1.5 6.921 6.921 0 0 0-1.315-.408c-.137-.028-.275-.043-.412-.063V2L9 6l4 4V7.101zm-7.45 7.623c.174.412.392.812.646 1.19.249.37.537.718.854 1.034a7.036 7.036 0 0 0 2.224 1.501c.425.18.868.317 1.315.408.167.034.338.056.508.078v2.944l4-4-4-4v3.03c-.035-.006-.072-.003-.107-.011a4.978 4.978 0 0 1-2.526-1.362 4.994 4.994 0 0 1 .001-7.071L7.051 7.05a7.01 7.01 0 0 0-1.5 2.224A6.974 6.974 0 0 0 5 12a6.997 6.997 0 0 0 .55 2.724z"/>
      </BaseIcon>
    </template>