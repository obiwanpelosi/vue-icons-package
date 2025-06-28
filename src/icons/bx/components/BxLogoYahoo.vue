<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxLogoYahoo',
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
        <path d="M13.131 21s-.63-.114-1.138-.114c-.457 0-1.142.114-1.142.114l.143-7.646C9.933 11.52 6.814 5.933 4.868 3c.979.223 1.391.209 2.374 0l.015.025c1.239 2.194 3.135 5.254 4.736 7.905C13.575 8.325 16.064 4.258 16.74 3c.765.201 1.536.193 2.392 0-.9 1.213-4.175 6.88-6.153 10.354L13.125 21h.006z"/>
      </BaseIcon>
    </template>