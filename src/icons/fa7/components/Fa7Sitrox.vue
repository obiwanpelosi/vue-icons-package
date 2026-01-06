<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Sitrox',
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
        <path fill="currentColor" d="M212.4 0l0 0 235.6 0 0 128-384 0C64 57.6 141.8 .5 212.4 0zm24.8 192l0 0c69.9 .5 146.7 57.6 146.7 128l-173.2 0 0 0C140.9 319.6 64 262.4 64 192l173.3 0zm-1.7 320c70.7-.5 148.4-57.6 148.4-128l-384 0 0 128 235.6 0 0 0z"/>
      </BaseIcon>
    </template>