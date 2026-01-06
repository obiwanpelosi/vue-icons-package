<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidIndustry',
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
        <path fill="currentColor" d="M32 32C14.3 32 0 46.3 0 64L0 432c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-279.8c0-18.2-19.4-29.7-35.4-21.1l-156.6 84.3 0-63.2c0-18.2-19.4-29.7-35.4-21.1L128 215.4 128 64c0-17.7-14.3-32-32-32L32 32z"/>
      </BaseIcon>
    </template>