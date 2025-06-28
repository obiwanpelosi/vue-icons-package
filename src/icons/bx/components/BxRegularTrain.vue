<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxRegularTrain',
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
        <circle cx="8.5" cy="14.5" r="1.5"/><circle cx="15.5" cy="14.5" r="1.5"/><path d="M18.87 3.34A3.55 3.55 0 0 0 16.38 2H7.62a3.47 3.47 0 0 0-2.5 1.35A4.32 4.32 0 0 0 4 6v12a1 1 0 0 0 1 1h2l-2 3h2.32L8 21h8l.68 1H19l-2-3h2a1 1 0 0 0 1-1V6a4.15 4.15 0 0 0-1.13-2.66zM7.62 4h8.72a1.77 1.77 0 0 1 1 .66 3.25 3.25 0 0 1 .25.34H6.39a2.3 2.3 0 0 1 .25-.35A1.65 1.65 0 0 1 7.62 4zM6 8V7h12v3H6zm12 9H6v-5h12z"/>
      </BaseIcon>
    </template>