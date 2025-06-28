<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiPassport1',
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
        <g id="Passport_1" data-name="Passport 1">
    <g>
      <path d="M16.5,21.936h-9a2.5,2.5,0,0,1-2.5-2.5V4.564a2.5,2.5,0,0,1,2.5-2.5h9a2.5,2.5,0,0,1,2.5,2.5V19.436A2.5,2.5,0,0,1,16.5,21.936ZM7.5,3.064A1.5,1.5,0,0,0,6,4.564V19.436a1.5,1.5,0,0,0,1.5,1.5h9a1.5,1.5,0,0,0,1.5-1.5V4.564a1.5,1.5,0,0,0-1.5-1.5Z" />
      <path d="M12,12.563a3.5,3.5,0,1,1,3.5-3.5A3.5,3.5,0,0,1,12,12.563Zm0-6a2.5,2.5,0,1,0,2.5,2.5A2.5,2.5,0,0,0,12,6.563Z" />
      <path d="M15,18.438H9a.5.5,0,0,1,0-1h6a.5.5,0,1,1,0,1Z" />
    </g>
  </g>
      </BaseIcon>
    </template>