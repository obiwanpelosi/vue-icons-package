<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiDatabase',
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
        <g id="Database">
    <path d="M12,2.06c-3.53,0-6.18,1.23-6.18,2.86V19.08c0,1.63,2.65,2.86,6.18,2.86s6.18-1.23,6.18-2.86V4.92C18.18,3.29,15.52,2.06,12,2.06Zm5.18,17.02c0,.78-1.97,1.86-5.18,1.86s-5.18-1.08-5.18-1.86V15.96A9.349,9.349,0,0,0,12,17.22a9.373,9.373,0,0,0,5.18-1.26Zm0-4.72c0,.78-1.97,1.86-5.18,1.86s-5.18-1.08-5.18-1.86V11.24A9.349,9.349,0,0,0,12,12.5a9.373,9.373,0,0,0,5.18-1.26Zm0-4.72c0,.78-1.97,1.86-5.18,1.86S6.82,10.42,6.82,9.64V6.52A9.349,9.349,0,0,0,12,7.78a9.373,9.373,0,0,0,5.18-1.26ZM12,6.78c-3.21,0-5.18-1.08-5.18-1.86S8.79,3.06,12,3.06s5.18,1.08,5.18,1.86S15.21,6.78,12,6.78Z" />
  </g>
      </BaseIcon>
    </template>