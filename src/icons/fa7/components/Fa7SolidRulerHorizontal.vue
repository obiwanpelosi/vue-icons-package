<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidRulerHorizontal',
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
        <path fill="currentColor" d="M48 384c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48l24 0 0 104c0 13.3 10.7 24 24 24s24-10.7 24-24l0-104 48 0 0 72c0 13.3 10.7 24 24 24s24-10.7 24-24l0-72 48 0 0 104c0 13.3 10.7 24 24 24s24-10.7 24-24l0-104 48 0 0 72c0 13.3 10.7 24 24 24s24-10.7 24-24l0-72 48 0 0 104c0 13.3 10.7 24 24 24s24-10.7 24-24l0-104 24 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48L48 384z"/>
      </BaseIcon>
    </template>