<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Hotjar',
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
          default: '0 0 512 512'
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
        <path fill="currentColor" d="M361.8 0c0 131.6-80.7 176.8-140.2 209.4-.6 .3-1.1 .6-1.6 .9-53.8 30.2-88.7 49.8-89.6 122l-98.1 0c0-131.5 80.7-176.7 140.2-209.3 54.8-29.8 90.3-50 90.3-123l99 0zM301.3 302.6c54.8-29.8 90.3-50 90.3-123l98 0c0 131.6-80.7 176.7-140.2 209.4-54.8 29.8-90.3 50-90.3 123l-98 0c0-131.6 80.7-176.8 140.2-209.4z"/>
      </BaseIcon>
    </template>