<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiMobile4',
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
        <g id="Mobile_4" data-name="Mobile 4">
    <g>
      <circle cx="12.003" cy="18.937" r="1" />
      <path d="M16.725,2.065H7.275a2.386,2.386,0,0,0-2.24,2.5v14.87a2.386,2.386,0,0,0,2.24,2.5h9.45a2.379,2.379,0,0,0,2.24-2.5V4.565A2.379,2.379,0,0,0,16.725,2.065Zm1.24,17.37a1.384,1.384,0,0,1-1.24,1.5H7.275a1.391,1.391,0,0,1-1.24-1.5v-2.5h11.93Zm0-3.5H6.035V4.565a1.391,1.391,0,0,1,1.24-1.5h9.45a1.384,1.384,0,0,1,1.24,1.5Z" />
    </g>
  </g>
      </BaseIcon>
    </template>