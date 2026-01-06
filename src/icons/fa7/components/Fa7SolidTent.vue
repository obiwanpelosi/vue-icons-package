<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidTent',
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
        <path fill="currentColor" d="M26.9 206.9L3.7 444.9C1.8 463.7 16.6 480 35.5 480l172.7 0c26.5 0 48-21.5 48-48l0-129c0-8.3 6.7-15 15-15 5.5 0 10.6 3 13.2 7.9l86.1 159c8.4 15.5 24.6 25.1 42.2 25.1l64.1 0c18.9 0 33.7-16.3 31.8-35.1L485.6 207.1c-1.9-19.6-12.8-37.3-29.5-47.8L280.9 48.3c-15.7-10-35.8-9.9-51.5 .1L56.1 159.2c-16.5 10.6-27.3 28.2-29.2 47.7z"/>
      </BaseIcon>
    </template>