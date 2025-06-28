<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiMapPin',
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
        <g id="Map_Pin" data-name="Map Pin">
    <path d="M12,2.06a5.5,5.5,0,0,0-.5,10.97v8.41a.5.5,0,0,0,.5.5.5.5,0,0,0,.5-.5V13.03A5.5,5.5,0,0,0,12,2.06Zm0,10a4.5,4.5,0,1,1,4.5-4.5A4.5,4.5,0,0,1,12,12.06Z" />
  </g>
      </BaseIcon>
    </template>