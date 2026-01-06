<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcRotateCamera',
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
          default: '0 0 48 48'
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
        <g fill="#5E35B1">
        <path d="M33.9,12.1H14.2L17.6,7c0.4-0.6,1-0.9,1.7-0.9h9.6c0.7,0,1.3,0.3,1.7,0.9L33.9,12.1z"/>
        <path d="M14,11H8V9.2C8,8.5,8.5,8,9.2,8h3.6C13.5,8,14,8.5,14,9.2V11z"/>
        <path d="M40,42H8c-2.2,0-4-1.8-4-4V14c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v24C44,40.2,42.2,42,40,42z"/>
    </g>
    <path fill="#E8EAF6" d="M34,25c0-5.5-4.5-10-10-10s-10,4.5-10,10s4.5,10,10,10v-2c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8h-3.5 l4.5,5.6l4.5-5.6H34z"/>
      </BaseIcon>
    </template>