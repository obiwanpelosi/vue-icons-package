<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcDocument',
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
          default: '0 0 48 48'
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
        <polygon fill="#90CAF9" points="40,45 8,45 8,3 30,3 40,13"/>
    <polygon fill="#E1F5FE" points="38.5,14 29,14 29,4.5"/>
    <g fill="#1976D2">
        <rect x="16" y="21" width="17" height="2"/>
        <rect x="16" y="25" width="13" height="2"/>
        <rect x="16" y="29" width="17" height="2"/>
        <rect x="16" y="33" width="13" height="2"/>
    </g>
      </BaseIcon>
    </template>