<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Openid',
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
        <path fill="currentColor" d="M271.5 432l-68 32C88.5 453.7 0 392.5 0 318.2 0 246.7 82.5 187.2 191.7 173.9l0 43c-71.5 12.5-124 53-124 101.3 0 51 58.5 93.3 135.7 103l0-340 68-33.2 0 384 .1 0zM448 291l-131.3-28.5 36.8-20.7c-19.5-11.5-43.5-20-70-24.8l0-43c46.2 5.5 87.7 19.5 120.3 39.3l35-19.8 9.2 97.5z"/>
      </BaseIcon>
    </template>