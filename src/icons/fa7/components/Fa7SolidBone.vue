<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidBone',
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
        <path fill="currentColor" d="M197.4 160c-3.9 0-7.2-2.8-8.1-6.6-10.2-42.1-48.1-73.4-93.3-73.4-53 0-96 43-96 96 0 29.1 12.9 55.1 33.3 72.7 4.3 3.7 4.3 10.8 0 14.5-20.4 17.6-33.3 43.7-33.3 72.7 0 53 43 96 96 96 45.2 0 83.1-31.3 93.3-73.4 .9-3.8 4.2-6.6 8.1-6.6l245.1 0c3.9 0 7.2 2.8 8.1 6.6 10.2 42.1 48.1 73.4 93.3 73.4 53 0 96-43 96-96 0-29.1-12.9-55.1-33.3-72.7-4.3-3.7-4.3-10.8 0-14.5 20.4-17.6 33.3-43.7 33.3-72.7 0-53-43-96-96-96-45.2 0-83.1 31.3-93.3 73.4-.9 3.8-4.2 6.6-8.1 6.6l-245.1 0z"/>
      </BaseIcon>
    </template>