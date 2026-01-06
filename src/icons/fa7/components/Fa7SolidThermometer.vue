<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidThermometer',
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
        <path fill="currentColor" d="M96 382.1l0-88.8c0-14.9 5.9-29.1 16.4-39.6l21.7-21.7 41 41c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-41-41 46.1-46.1 41 41c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-41-41 46.1-46.1 41 41c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-41-41 7.8-7.8c19.4-19.4 45.6-30.2 73-30.2 57 0 103.2 46.2 103.2 103.2 0 27.4-10.9 53.6-30.2 73L258.3 399.6c-10.5 10.5-24.7 16.4-39.6 16.4l-88.8 0-89 89c-9.4 9.4-24.6 9.4-33.9 0S-2.3 480.4 7 471l89-89z"/>
      </BaseIcon>
    </template>