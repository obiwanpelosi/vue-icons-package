<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidLandMineOn',
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
        <path fill="currentColor" d="M312 0l0 128c0 13.3-10.7 24-24 24s-24-10.7-24-24L264 0c0-13.3 10.7-24 24-24s24 10.7 24 24zM160 288c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 32 80 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48L80 512c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48l80 0 0-32zM12 114.7c7.4-11 22.3-14 33.3-6.7l96 64c11 7.4 14 22.3 6.7 33.3s-22.3 14-33.3 6.7l-96-64c-11-7.4-14-22.3-6.7-33.3zM530.7 108c11-7.4 25.9-4.4 33.3 6.7s4.4 25.9-6.7 33.3l-96 64c-11 7.4-25.9 4.4-33.3-6.7s-4.4-25.9 6.7-33.3l96-64z"/>
      </BaseIcon>
    </template>