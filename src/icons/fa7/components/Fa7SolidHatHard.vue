<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidHatHard',
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
          default: '0 0 576 512'
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
        <path fill="currentColor" d="M352 264l0-200c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 200c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-185.9C90 109.8 32 191.8 32 288l0 64 512 0 0-64c-1-95.2-58.4-177.7-144-209.8L400 264c0 13.3-10.7 24-24 24s-24-10.7-24-24zM40 400c-22.1 0-40 17.9-40 40s17.9 40 40 40l496 0c22.1 0 40-17.9 40-40s-17.9-40-40-40L40 400z"/>
      </BaseIcon>
    </template>