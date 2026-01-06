<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcVip',
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
        <path fill="#880E4F" d="M38,43H10c-2.2,0-4-1.8-4-4V11c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4v28C42,41.2,40.2,43,38,43z"/>
    <g fill="#FFD54F">
        <path d="M15.9,28l2.1-9.1h2.8l-3.6,12.6h-2.6L11,18.9h2.8L15.9,28z"/>
        <path d="M25.6,31.5h-2.5V18.9h2.5V31.5z"/>
        <path d="M31.2,27.1v4.4h-2.5V18.9h4.3c3.7,0,4.1,3.4,4.1,4.2c0,1.2-0.5,4-4.1,4H31.2z M31.2,24.9h1.7 c1.3,0,1.5-1.1,1.5-1.9c0-1.6-0.9-2.1-1.5-2.1h-1.7V24.9z"/>
    </g>
      </BaseIcon>
    </template>