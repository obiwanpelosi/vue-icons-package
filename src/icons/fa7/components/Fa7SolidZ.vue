<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidZ',
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
        <path fill="currentColor" d="M0 64C0 46.3 14.3 32 32 32l320 0c12.4 0 23.7 7.2 29 18.4s3.6 24.5-4.4 34.1L100.3 416 352 416c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-12.4 0-23.7-7.2-29-18.4s-3.6-24.5 4.4-34.1L283.7 96 32 96C14.3 96 0 81.7 0 64z"/>
      </BaseIcon>
    </template>