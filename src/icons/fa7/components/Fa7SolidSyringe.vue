<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidSyringe',
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
        <path fill="currentColor" d="M497.5-17c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l15 15-46.1 46.1-63-63c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l7 7-78.1 78.1 41 41c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-41-41-46.1 46.1 41 41c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-41-41-37.7 37.7c-10.5 10.5-16.4 24.7-16.4 39.6l0 88.8-57 57c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l57-57 88.8 0c14.9 0 29.1-5.9 39.6-16.4l229.7-229.7 7 7c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-63-63 46.1-46.1 15 15c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-64-64z"/>
      </BaseIcon>
    </template>