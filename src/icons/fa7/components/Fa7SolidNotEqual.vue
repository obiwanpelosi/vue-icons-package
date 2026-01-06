<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidNotEqual',
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
        <path fill="currentColor" d="M378.6 81.8c9.8-14.7 5.8-34.6-8.9-44.4s-34.6-5.8-44.4 8.9L270.9 128 32 128c-17.7 0-32 14.3-32 32s14.3 32 32 32l196.2 0-85.3 128-110.9 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l68.2 0-30.8 46.2c-9.8 14.7-5.8 34.6 8.9 44.4s34.6 5.8 44.4-8.9L177.1 384 416 384c17.7 0 32-14.3 32-32s-14.3-32-32-32l-196.2 0 85.3-128 110.9 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-68.2 0 30.8-46.2z"/>
      </BaseIcon>
    </template>