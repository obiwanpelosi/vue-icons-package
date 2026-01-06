<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidRoadCircleCheck',
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
          default: '0 0 640 512'
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
        <path fill="currentColor" d="M288 32l-76.3 0c-29.4 0-55.1 20.1-62.1 48.6L65.4 420.5C57.9 450.7 80.8 480 112 480l209.4 0c-11.2-24.4-17.4-51.4-17.4-80 0-28.6 6.2-55.7 17.4-80-.5 0-1 0-1.5 0-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 49c35.2-39.9 86.7-65 144-65 9 0 17.8 .6 26.5 1.8l-32-129.2C483.4 52.1 457.8 32 428.3 32l-76.4 0 0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64zM640 400a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-86.6-60.9c7.1 5.2 8.7 15.2 3.5 22.3l-64 88c-2.8 3.8-7 6.2-11.7 6.5s-9.3-1.3-12.6-4.6l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l26.8 26.8 53-72.9c5.2-7.1 15.2-8.7 22.4-3.5z"/>
      </BaseIcon>
    </template>