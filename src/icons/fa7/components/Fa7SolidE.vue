<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidE',
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
          default: '0 0 320 512'
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
        <path fill="currentColor" d="M32 32C14.3 32 0 46.3 0 64L0 448c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-224 0 0-128 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-128 224 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32z"/>
      </BaseIcon>
    </template>