<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidRulerVertical',
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
          default: '0 0 256 512'
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
        <path fill="currentColor" d="M0 16C0-10.5 21.5-32 48-32l160 0c26.5 0 48 21.5 48 48l0 24-104 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l104 0 0 48-72 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 0 48-104 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l104 0 0 48-72 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 0 48-104 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l104 0 0 24c0 26.5-21.5 48-48 48L48 544c-26.5 0-48-21.5-48-48L0 16z"/>
      </BaseIcon>
    </template>