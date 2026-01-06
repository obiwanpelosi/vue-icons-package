<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Solid6',
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
          default: '0 0 384 512'
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
        <path fill="currentColor" d="M256 32c17.7 0 32 14.3 32 32s-14.3 32-32 32l-88 0c-48.6 0-88 39.4-88 88l0 32.2c22.9-15.3 50.4-24.2 80-24.2l48 0c79.5 0 144 64.5 144 144S287.5 480 208 480l-48 0C80.5 480 16 415.5 16 336l0-152C16 100.1 84.1 32 168 32l88 0zM80 336c0 44.2 35.8 80 80 80l48 0c44.2 0 80-35.8 80-80s-35.8-80-80-80l-48 0c-44.2 0-80 35.8-80 80z"/>
      </BaseIcon>
    </template>