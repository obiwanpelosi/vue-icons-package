<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiCalculator1',
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
        <g id="Calculator_1" data-name="Calculator 1">
    <g>
      <path d="M16.5,21.937h-9a2.5,2.5,0,0,1-2.5-2.5V4.563a2.5,2.5,0,0,1,2.5-2.5h9a2.5,2.5,0,0,1,2.5,2.5V19.437A2.5,2.5,0,0,1,16.5,21.937ZM7.5,3.063A1.5,1.5,0,0,0,6,4.563V19.437a1.5,1.5,0,0,0,1.5,1.5h9a1.5,1.5,0,0,0,1.5-1.5V4.563a1.5,1.5,0,0,0-1.5-1.5Z" />
      <path d="M14.5,9.757h-5A1.5,1.5,0,0,1,8,8.257V6.563a1.5,1.5,0,0,1,1.5-1.5h5a1.5,1.5,0,0,1,1.5,1.5V8.257A1.5,1.5,0,0,1,14.5,9.757Zm-5-3.694a.5.5,0,0,0-.5.5V8.257a.5.5,0,0,0,.5.5h5a.5.5,0,0,0,.5-.5V6.563a.5.5,0,0,0-.5-.5Z" />
      <g>
        <circle cx="12" cy="11.508" r="0.75" />
        <circle cx="15.25" cy="11.508" r="0.75" />
        <circle cx="8.75" cy="11.508" r="0.75" />
      </g>
      <g>
        <circle cx="12" cy="14.848" r="0.75" />
        <circle cx="15.25" cy="14.848" r="0.75" />
        <circle cx="8.75" cy="14.848" r="0.75" />
      </g>
      <g>
        <circle cx="15.25" cy="18.187" r="0.75" />
        <path d="M12.248,18.687H8.5a.5.5,0,0,1,0-1h3.744a.5.5,0,1,1,0,1Z" />
      </g>
    </g>
  </g>
      </BaseIcon>
    </template>