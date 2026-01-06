<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcFactoryBreakdown',
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
        <polygon fill="#E64A19" points="29,23 29,17 21,21 21,23 17,23 17,27 13,27 13,23 5,23 5,43 33,43 33,23"/>
    <rect x="25" y="27" fill="#992B0A" width="4" height="4"/>
    <rect x="9" y="35" fill="#992B0A" width="4" height="4"/>
    <rect x="25" y="35" fill="#992B0A" width="4" height="4"/>
    <rect x="17" y="35" fill="#992B0A" width="4" height="4"/>
    <rect x="17" y="27" fill="#992B0A" width="4" height="4"/>
    <polygon fill="#BF360C" points="41.2,5 38,5 38,7 36,7 36,9 33.7,9 32,43 43,43"/>
      </BaseIcon>
    </template>