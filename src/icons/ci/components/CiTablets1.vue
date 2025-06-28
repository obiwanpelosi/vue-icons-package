<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiTablets1',
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
        <g id="Tablets_1" data-name="Tablets 1">
    <path d="M14.76,3.065a6.171,6.171,0,0,0-6.11,5.58,6.159,6.159,0,1,0,6.71,6.71,6.159,6.159,0,0,0-.6-12.29ZM9.23,19.935A5.166,5.166,0,0,1,5.24,11.5l7.27,7.26A5.153,5.153,0,0,1,9.23,19.935Zm3.99-1.88-7.27-7.27a5.165,5.165,0,0,1,7.27,7.27Zm2.15-3.71a6.12,6.12,0,0,0-5.72-5.71,5.157,5.157,0,1,1,5.72,5.71Z" />
  </g>
      </BaseIcon>
    </template>