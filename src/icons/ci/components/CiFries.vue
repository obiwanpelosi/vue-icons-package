<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiFries',
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
        <g id="Fries">
    <path d="M19.51,9.535a1.091,1.091,0,0,0-.81-.36H17.67a.5.5,0,0,0-.17.02V4.815a1.5,1.5,0,0,0-1.5-1.5h-.5a1.3,1.3,0,0,0-.52.1,1.474,1.474,0,0,0-1.48-1.35H13a1.5,1.5,0,0,0-1.5,1.5v1.59a1.386,1.386,0,0,0-.5-.09h-.5a1.348,1.348,0,0,0-.5.09v-.34a1.5,1.5,0,0,0-1.5-1.5H8a1.5,1.5,0,0,0-1.5,1.5V9.2a.5.5,0,0,0-.17-.02H5.3a1.1,1.1,0,0,0-1.08,1.2l.85,8.98a2.84,2.84,0,0,0,2.84,2.58h8.18a2.84,2.84,0,0,0,2.84-2.58l.85-8.98A1.112,1.112,0,0,0,19.51,9.535ZM15,4.815a.5.5,0,0,1,.5-.5H16a.5.5,0,0,1,.5.5v6.14h.01A2.915,2.915,0,0,1,15,13.015Zm-2.5,8.53V3.565a.5.5,0,0,1,.5-.5h.5a.5.5,0,0,1,.5.5v9.76Zm-2.5-.02V6.565a.5.5,0,0,1,.5-.5H11a.5.5,0,0,1,.5.5v6.78ZM7.5,4.815a.5.5,0,0,1,.5-.5h.5a.5.5,0,0,1,.5.5v8.2a2.877,2.877,0,0,1-1.5-2.06Zm11.29,5.391-.85,9.049a1.85,1.85,0,0,1-1.85,1.68H7.91a1.84,1.84,0,0,1-1.84-1.68l-.86-9.08H6.33a.1.1,0,0,1,.09.08l.05.56a3.891,3.891,0,0,0,3.88,3.53h3.3a3.884,3.884,0,0,0,3.88-3.53l.05-.56a.106.106,0,0,1,.09-.08Z" />
  </g>
      </BaseIcon>
    </template>