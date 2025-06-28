<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgMagnet',
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
        <path d="M8 2.5H4V5.5H8V2.5Z" fill="currentColor" fill-opacity="0.5" />
  <path d="M20 2.5H16V5.5H20V2.5Z" fill="currentColor" fill-opacity="0.5" />
  <path
    d="M8 7.5H4V13.5C4 17.9183 7.58172 21.5 12 21.5C16.4183 21.5 20 17.9183 20 13.5V7.5H16V13.5C16 15.7091 14.2091 17.5 12 17.5C9.79086 17.5 8 15.7091 8 13.5V7.5Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>