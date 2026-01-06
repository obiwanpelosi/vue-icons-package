<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Korvue',
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
        <path fill="currentColor" d="M387.6 34l-327 0C27.9 34 1.1 60.8 1.1 93.5l0 327.1c0 32.6 26.8 59.4 59.5 59.4l327.1 0c33 0 59.5-26.8 59.5-59.5l0-327C447.1 60.8 420.3 34 387.6 34zM88.2 120.8l96 0 0 116 61.8-116 110.9 0-81.2 132-187.5 0 0-132zM250 392.9l-65.7-113.6 0 113.6-96 0 0-130.8 191.5 0 88.6 130.8-118.4 0z"/>
      </BaseIcon>
    </template>