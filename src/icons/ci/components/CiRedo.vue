<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiRedo',
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
        <g id="Redo">
    <path d="M4.061,13.67A7.958,7.958,0,0,0,16.2,19.74a8.061,8.061,0,0,0,3.77-6.77.5.5,0,0,0-1,0,6.976,6.976,0,0,1-11,5.7,6.969,6.969,0,0,1,1-11.97,10.075,10.075,0,0,1,4.64-.69V7.46a.5.5,0,0,0,.81.39l2.47-1.95a.5.5,0,0,0,0-.79L14.4,3.17a.5.5,0,0,0-.8.4V5.01c-.71-.01-1.43-.03-2.13.02a7.985,7.985,0,0,0-7.41,8.64Z" />
  </g>
      </BaseIcon>
    </template>