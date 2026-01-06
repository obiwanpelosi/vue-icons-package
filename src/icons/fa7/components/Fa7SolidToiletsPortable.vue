<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidToiletsPortable',
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
        <path fill="currentColor" d="M64 0l96 0c35.3 0 64 28.7 64 64l0 16-224 0 0-16C0 28.7 28.7 0 64 0zM0 128l224 0 0 360c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8-128 0 0 8c0 13.3-10.7 24-24 24S0 501.3 0 488L0 128zM128 248l0 48c0 13.3 10.7 24 24 24l24 0 0-96-24 0c-13.3 0-24 10.7-24 24zM352 0l96 0c35.3 0 64 28.7 64 64l0 16-224 0 0-16c0-35.3 28.7-64 64-64zM288 128l224 0 0 360c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8-128 0 0 8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-360zM416 248l0 48c0 13.3 10.7 24 24 24l24 0 0-96-24 0c-13.3 0-24 10.7-24 24z"/>
      </BaseIcon>
    </template>