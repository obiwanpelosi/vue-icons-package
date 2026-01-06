<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidVials',
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
        <path fill="currentColor" d="M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64l0 352c0 53 43 96 96 96s96-43 96-96l0-352 64 0 0 352c0 53 43 96 96 96s96-43 96-96l0-352c17.7 0 32-14.3 32-32S497.7 0 480 0L32 0zM160 64l0 128-64 0 0-128 64 0zm256 0l0 128-64 0 0-128 64 0z"/>
      </BaseIcon>
    </template>