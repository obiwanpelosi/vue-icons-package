<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiMedicalCross',
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
        <g id="Medical_Cross" data-name="Medical Cross">
    <path d="M12.943,20.93H11.057a2.388,2.388,0,0,1-2.386-2.386V15.3l-3.215.029a2.39,2.39,0,0,1-2.387-2.386V11.057A2.39,2.39,0,0,1,5.456,8.67H8.7L8.671,5.456A2.388,2.388,0,0,1,11.057,3.07h1.886a2.388,2.388,0,0,1,2.386,2.386V8.7l3.215-.03a2.39,2.39,0,0,1,2.387,2.387v1.886a2.39,2.39,0,0,1-2.387,2.386H15.3l.028,3.215A2.388,2.388,0,0,1,12.943,20.93ZM5.456,9.67a1.388,1.388,0,0,0-1.387,1.387v1.886a1.388,1.388,0,0,0,1.387,1.386H8.7a.972.972,0,0,1,.972.971v3.244a1.388,1.388,0,0,0,1.386,1.386h1.886a1.388,1.388,0,0,0,1.386-1.386V15.3a.972.972,0,0,1,.972-.971h3.243a1.388,1.388,0,0,0,1.387-1.386V11.057A1.388,1.388,0,0,0,18.544,9.67H15.3a.972.972,0,0,1-.972-.97V5.456A1.388,1.388,0,0,0,12.943,4.07H11.057A1.388,1.388,0,0,0,9.671,5.456V8.7a.972.972,0,0,1-.972.97Z" />
  </g>
      </BaseIcon>
    </template>