<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiVoicemail',
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
        <g id="Voicemail">
    <path d="M17.435,7.5a4.5,4.5,0,0,0-2.82,8H9.385a4.494,4.494,0,1,0-2.82,1h10.87a4.5,4.5,0,0,0,0-9ZM3.065,12a3.5,3.5,0,1,1,3.56,3.5h-.06A3.5,3.5,0,0,1,3.065,12Zm14.37,3.5h-.06a3.53,3.53,0,1,1,.06,0Z" />
  </g>
      </BaseIcon>
    </template>