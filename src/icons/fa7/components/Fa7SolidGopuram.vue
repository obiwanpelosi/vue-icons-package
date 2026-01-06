<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidGopuram',
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
        <path fill="currentColor" d="M120 0c13.3 0 24 10.7 24 24l0 8 40 0 0-8c0-13.3 10.7-24 24-24s24 10.7 24 24l0 8 48 0 0-8c0-13.3 10.7-24 24-24s24 10.7 24 24l0 8 40 0 0-8c0-13.3 10.7-24 24-24s24 10.7 24 24l0 136c26.5 0 48 21.5 48 48l0 80c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-48 0 0-224-32 0 0-128-48 0 0 128 32 0 0 224-224 0 0-224 32 0 0-128-48 0 0 128-32 0 0 224-48 0c-26.5 0-48-21.5-48-48L0 336c0-26.5 21.5-48 48-48l0-80c0-26.5 21.5-48 48-48L96 24c0-13.3 10.7-24 24-24zM256 208c-17.7 0-32 14.3-32 32l0 48 64 0 0-48c0-17.7-14.3-32-32-32zM208 400l0 64 96 0 0-64c0-26.5-21.5-48-48-48s-48 21.5-48 48zM256 96c-17.7 0-32 14.3-32 32l0 32 64 0 0-32c0-17.7-14.3-32-32-32z"/>
      </BaseIcon>
    </template>