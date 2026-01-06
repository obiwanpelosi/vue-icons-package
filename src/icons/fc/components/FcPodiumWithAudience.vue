<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcPodiumWithAudience',
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
        <polygon fill="#B0BEC5" points="41,12 7,12 6,16 11,19 9,16 39,16 37,19 42,16"/>
    <polygon fill="#78909C" points="9,16 39,16 35,28 13,28"/>
    <circle fill="#FFB74D" cx="24" cy="28" r="4"/>
    <circle fill="#FFB74D" cx="36" cy="28" r="4"/>
    <circle fill="#FFB74D" cx="12" cy="28" r="4"/>
    <circle fill="#FFB74D" cx="18" cy="37" r="5"/>
    <circle fill="#FFB74D" cx="30" cy="37" r="5"/>
      </BaseIcon>
    </template>