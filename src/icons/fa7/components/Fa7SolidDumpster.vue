<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidDumpster',
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
        <path fill="currentColor" d="M132.3 64L106.7 192 24 192c-13.3 0-24-10.7-24-24l0-4.1c0-2.6 .4-5.1 1.2-7.6L26.5 80.4C29.8 70.6 39 64 49.3 64l83 0zm23.4 128l25.6-128 82.7 0 0 128-108.3 0zM312 64l82.7 0 25.6 128-108.3 0 0-128zm131.7 0l83 0c10.3 0 19.5 6.6 22.8 16.4l25.3 75.9c.8 2.4 1.2 5 1.2 7.6l0 4.1c0 13.3-10.7 24-24 24l-82.7 0-25.6-128zM25.7 240l524.7 0c-.4 2.1-13.3 73.4-38.9 213.7-3 16.3-17.9 27.6-34.4 26.1S448 464.6 448 448l0-16-320 0 0 16c0 16.6-12.6 30.4-29.1 31.9S67.5 470 64.5 453.7C39 313.3 26 242.1 25.7 240z"/>
      </BaseIcon>
    </template>