<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcBusinessContact',
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
        <path fill="#673AB7" d="M40,7H8c-2.2,0-4,1.8-4,4v26c0,2.2,1.8,4,4,4h5v-1.3c-0.6-0.3-1-1-1-1.7c0-1.1,0.9-2,2-2s2,0.9,2,2 c0,0.7-0.4,1.4-1,1.7V41h18v-1.3c-0.6-0.3-1-1-1-1.7c0-1.1,0.9-2,2-2s2,0.9,2,2c0,0.7-0.4,1.4-1,1.7V41h5c2.2,0,4-1.8,4-4V11 C44,8.8,42.2,7,40,7z"/>
    <g fill="#D1C4E9">
        <circle cx="24" cy="18" r="4"/>
        <path d="M31,28c0,0-1.9-4-7-4c-5.1,0-7,4-7,4v2h14V28z"/>
    </g>
      </BaseIcon>
    </template>