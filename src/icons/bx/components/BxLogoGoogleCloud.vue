<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxLogoGoogleCloud',
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
          default: '0 0 24 24'
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
        <path d="M19.511 9.722a7.833 7.833 0 0 0-2.359-3.804l-.035.035.005-.042A7.81 7.81 0 0 0 4.418 9.722c.031-.013.066-.013.099-.023a5.643 5.643 0 0 0-.306 9.166l.006-.006-.006.024a5.612 5.612 0 0 0 3.407 1.134h4.321l.024.024h4.341a5.644 5.644 0 0 0 3.207-10.319zm-3.206 6.845h-4.341l-.006.006v-.031h-4.34c-.308 0-.611-.066-.892-.193l.002-.001a2.17 2.17 0 1 1 2.87-2.871l2.518-2.518a5.634 5.634 0 0 0-3.396-2.1c.018-.009.035-.024.05-.021a4.334 4.334 0 0 1 5.931-.451h.046a4.334 4.334 0 0 1 1.558 3.407v.433a2.17 2.17 0 1 1 0 4.34z"/>
      </BaseIcon>
    </template>