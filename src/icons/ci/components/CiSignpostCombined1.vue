<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiSignpostCombined1',
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
        <g id="Signpost_Combined_1" data-name="Signpost Combined 1">
    <g>
      <path d="M20.437,11.5H6.536a2.628,2.628,0,0,1-1.723-.629L2.564,8.915A1.329,1.329,0,0,1,2.57,6.831L4.813,4.88a2.619,2.619,0,0,1,1.723-.629h13.9a1.451,1.451,0,0,1,1.5,1.393v4.463A1.451,1.451,0,0,1,20.437,11.5Zm-13.9-6.25a1.64,1.64,0,0,0-1.067.384L3.215,7.6a.364.364,0,0,0-.152.281.349.349,0,0,0,.141.27l.011.01,2.254,1.961a1.644,1.644,0,0,0,1.067.384h13.9a.463.463,0,0,0,.5-.394V5.644a.463.463,0,0,0-.5-.393Z" />
      <path d="M17.464,19.749H3.563a1.451,1.451,0,0,1-1.5-1.394V13.892a1.451,1.451,0,0,1,1.5-1.393h13.9a2.621,2.621,0,0,1,1.724.63l2.249,1.956a1.329,1.329,0,0,1-.007,2.083l-2.242,1.951A2.625,2.625,0,0,1,17.464,19.749ZM3.563,13.5a.463.463,0,0,0-.5.393v4.463a.463.463,0,0,0,.5.394h13.9a1.644,1.644,0,0,0,1.068-.385l2.253-1.96a.362.362,0,0,0,.152-.28.351.351,0,0,0-.141-.271l-.011-.01-2.254-1.96a1.64,1.64,0,0,0-1.067-.384Z" />
    </g>
  </g>
      </BaseIcon>
    </template>