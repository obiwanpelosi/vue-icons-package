<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgPlayListSearch',
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
        <path d="M15.8787 4.87866H3.87872V6.87866H15.8787V4.87866Z" fill="currentColor" />
  <path d="M15.8787 8.87866H3.87872V10.8787H15.8787V8.87866Z" fill="currentColor" />
  <path d="M3.87872 12.8787H11.8787V14.8787H3.87872V12.8787Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.7574 12.7573C12.5858 13.9289 12.5858 15.8284 13.7574 17C14.681 17.9236 16.0571 18.1191 17.1722 17.5864L18.7071 19.1213L20.1213 17.7071L18.5864 16.1722C19.1191 15.057 18.9236 13.681 18 12.7573C16.8284 11.5858 14.9289 11.5858 13.7574 12.7573ZM15.1716 15.5858C15.5621 15.9763 16.1953 15.9763 16.5858 15.5858C16.9763 15.1952 16.9763 14.5621 16.5858 14.1716C16.1953 13.781 15.5621 13.781 15.1716 14.1716C14.7811 14.5621 14.7811 15.1952 15.1716 15.5858Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>