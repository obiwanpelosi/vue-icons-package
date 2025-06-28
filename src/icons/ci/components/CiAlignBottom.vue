<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiAlignBottom',
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
        <g id="Align_Bottom" data-name="Align Bottom">
    <g>
      <path d="M3.548,20.922h16.9a.5.5,0,0,0,0-1H3.548a.5.5,0,0,0,0,1Z" />
      <path d="M9,18.919H6.565a2.5,2.5,0,0,1-2.5-2.5V5.578a2.5,2.5,0,0,1,2.5-2.5H9a2.5,2.5,0,0,1,2.5,2.5V16.419A2.5,2.5,0,0,1,9,18.919ZM6.565,4.078a1.5,1.5,0,0,0-1.5,1.5V16.419a1.5,1.5,0,0,0,1.5,1.5H9a1.5,1.5,0,0,0,1.5-1.5V5.578A1.5,1.5,0,0,0,9,4.078Z" />
      <path d="M17.437,18.919H15a2.5,2.5,0,0,1-2.5-2.5V10.55A2.5,2.5,0,0,1,15,8.05h2.434a2.5,2.5,0,0,1,2.5,2.5v5.869A2.5,2.5,0,0,1,17.437,18.919ZM15,9.05a1.5,1.5,0,0,0-1.5,1.5v5.869a1.5,1.5,0,0,0,1.5,1.5h2.434a1.5,1.5,0,0,0,1.5-1.5V10.55a1.5,1.5,0,0,0-1.5-1.5Z" />
    </g>
  </g>
      </BaseIcon>
    </template>