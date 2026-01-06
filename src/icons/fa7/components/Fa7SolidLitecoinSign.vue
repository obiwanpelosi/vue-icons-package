<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidLitecoinSign',
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
          default: '0 0 384 512'
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
        <path fill="currentColor" d="M128 64c0-17.7-14.3-32-32-32S64 46.3 64 64l0 157.9-38.6 11c-12.7 3.6-20.1 16.9-16.5 29.7s16.9 20.1 29.7 16.5L64 271.8 64 448c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-224 0 0-162.5 134.6-38.5c12.7-3.6 20.1-16.9 16.5-29.7s-16.9-20.1-29.7-16.5L128 203.6 128 64z"/>
      </BaseIcon>
    </template>