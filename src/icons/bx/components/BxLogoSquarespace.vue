<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxLogoSquarespace',
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
        <path d="M20.886 9.264c-1.502-1.5-3.941-1.5-5.475 0l-6.13 6.131a.981.981 0 0 0 0 1.377.982.982 0 0 0 1.376 0l6.13-6.131a1.925 1.925 0 0 1 2.722 2.723l-6.037 6.035c.751.75 1.971.75 2.723 0l4.66-4.66c1.531-1.534 1.531-3.973.031-5.475zm-2.064 2.033a.982.982 0 0 0-1.376 0l-6.134 6.162c-.751.75-1.97.75-2.72 0-.376-.375-1.002-.375-1.377 0s-.375 1.002 0 1.375c1.502 1.502 3.942 1.502 5.475 0l6.131-6.129c.375-.406.375-1.033.001-1.408zm-2.035-6.129c-1.501-1.502-3.941-1.502-5.475 0l-6.131 6.129a.98.98 0 0 0 0 1.375.98.98 0 0 0 1.377 0l6.168-6.129a1.934 1.934 0 0 1 2.727 0 .982.982 0 0 0 1.376 0c.352-.406.352-1-.024-1.375h-.018zm-2.063 2.031a.978.978 0 0 0-1.376 0l-6.131 6.164a1.933 1.933 0 0 1-2.723 0 1.927 1.927 0 0 1 0-2.723l6.037-6.039a1.928 1.928 0 0 0-2.722 0L3.118 9.264c-1.501 1.502-1.501 3.941 0 5.475 1.501 1.502 3.94 1.502 5.475 0l6.129-6.131c.377-.408.377-1.033 0-1.408h.002z"/>
      </BaseIcon>
    </template>