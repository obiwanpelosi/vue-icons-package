<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidCodeCommit',
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
          default: '0 0 576 512'
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
        <path fill="currentColor" d="M288 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm156.8-48C430 361 365.4 416 288 416S146 361 131.2 288L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l99.2 0C146 151 210.6 96 288 96s142 55 156.8 128l99.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-99.2 0z"/>
      </BaseIcon>
    </template>