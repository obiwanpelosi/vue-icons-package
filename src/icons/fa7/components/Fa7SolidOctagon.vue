<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidOctagon',
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
        <path fill="currentColor" d="M188.6 .1c-17 0-33.3 6.7-45.3 18.7L19.2 143C7.2 155 .5 171.2 .5 188.2l0 135.6c0 17 6.7 33.3 18.7 45.3L143.4 493.2c12 12 28.3 18.7 45.3 18.7l135.6 0c17 0 33.3-6.7 45.3-18.7L493.6 369c12-12 18.7-28.3 18.7-45.3l0-135.6c0-17-6.7-33.3-18.7-45.3L369.5 18.8c-12-12-28.3-18.7-45.3-18.7L188.6 .1z"/>
      </BaseIcon>
    </template>