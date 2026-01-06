<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcEditImage',
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
        <path fill="#8CBCD6" d="M31,41H8c-2.2,0-4-1.8-4-4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v17C44,35.2,38.2,41,31,41z"/>
    <circle fill="#B3DDF5" cx="35" cy="16" r="3"/>
    <polygon fill="#9AC9E3" points="20,16 9,32 31,32"/>
    <polygon fill="#B3DDF5" points="31,22 23,32 39,32"/>
    <path fill="#E57373" d="M47.7,29.1l-2.8-2.8c-0.4-0.4-1.1-0.4-1.6,0L42,27.6l4.4,4.4l1.3-1.3C48.1,30.3,48.1,29.6,47.7,29.1z"/>
    <rect x="27.1" y="35.1" transform="matrix(.707 -.707 .707 .707 -16.508 36.511)" fill="#FF9800" width="17.4" height="6.2"/>
    <rect x="41.5" y="27.8" transform="matrix(-.707 .707 -.707 -.707 95.395 22.352)" fill="#B0BEC5" width="3.1" height="6.2"/>
    <polygon fill="#FFC107" points="27.5,42.2 26,48 31.8,46.5"/>
    <polygon fill="#37474F" points="26.7,45 26,48 29,47.3"/>
      </BaseIcon>
    </template>