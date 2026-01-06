<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidDiagnoses',
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
        <path fill="currentColor" d="M184 72a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zM160 299.3c-19.9 22.6-32 52.2-32 84.7l0 32-64 0 0-32c0-106 86-192 192-192s192 86 192 192l0 32-64 0 0-32c0-32.5-12.1-62.1-32-84.7l0 116.7-192 0 0-116.7zM232 384a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm88-104a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM24 464l464 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 512c-13.3 0-24-10.7-24-24s10.7-24 24-24zM64 184a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm424 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/>
      </BaseIcon>
    </template>