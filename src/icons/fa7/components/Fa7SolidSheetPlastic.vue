<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidSheetPlastic',
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
        <path fill="currentColor" d="M0 448c0 35.3 28.7 64 64 64l149.5 0c17 0 33.3-6.7 45.3-18.7L365.3 386.7c12-12 18.7-28.3 18.7-45.3L384 64c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 448zm208 5.5l0-93.5c0-13.3 10.7-24 24-24l93.5 0-117.5 117.5zM153 105l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zm96 32L137 249c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L215 103c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
      </BaseIcon>
    </template>