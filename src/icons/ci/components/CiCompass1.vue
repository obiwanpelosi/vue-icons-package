<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiCompass1',
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
        <g id="Compass_1" data-name="Compass 1">
    <g>
      <path d="M4.661,20.937a1.589,1.589,0,0,1-1.117-.48,1.534,1.534,0,0,1-.4-1.59L6.58,8.937A3.8,3.8,0,0,1,8.938,6.58l9.93-3.439a1.537,1.537,0,0,1,1.589.4,1.532,1.532,0,0,1,.4,1.588L17.42,15.061a3.8,3.8,0,0,1-2.358,2.358l-9.93,3.439A1.442,1.442,0,0,1,4.661,20.937ZM19.337,4.062a.424.424,0,0,0-.142.024L9.267,7.525A2.8,2.8,0,0,0,7.525,9.266L4.087,19.2a.6.6,0,0,0,.717.718l9.93-3.439a2.8,2.8,0,0,0,1.741-1.741L19.913,4.8a.551.551,0,0,0-.163-.553A.609.609,0,0,0,19.337,4.062Z" />
      <circle cx="12" cy="12" r="1.563" />
    </g>
  </g>
      </BaseIcon>
    </template>