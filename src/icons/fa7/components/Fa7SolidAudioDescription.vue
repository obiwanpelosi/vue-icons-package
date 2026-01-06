<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidAudioDescription',
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
        <path fill="currentColor" d="M0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zm96 96l0 104c0 13.3 10.7 24 24 24s24-10.7 24-24l0-24 48 0 0 24c0 13.3 10.7 24 24 24s24-10.7 24-24l0-104c0-35.3-28.7-64-64-64l-16 0c-35.3 0-64 28.7-64 64zm48 32l0-32c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 32-48 0zm152-96c-13.3 0-24 10.7-24 24l0 144c0 13.3 10.7 24 24 24l48 0c39.8 0 72-32.2 72-72l0-48c0-39.8-32.2-72-72-72l-48 0zm48 144l-24 0 0-96 24 0c13.3 0 24 10.7 24 24l0 48c0 13.3-10.7 24-24 24z"/>
      </BaseIcon>
    </template>