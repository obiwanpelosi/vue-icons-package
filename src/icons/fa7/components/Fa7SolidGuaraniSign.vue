<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidGuaraniSign',
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
        <path fill="currentColor" d="M192 0c-13.3 0-24 10.7-24 24l0 41.5C73.3 77.3 0 158.1 0 256S73.3 434.7 168 446.5l0 41.5c0 13.3 10.7 24 24 24s24-10.7 24-24l0-41.5c94.7-11.8 168-92.6 168-190.5 0-17.7-14.3-32-32-32l-136 0 0-93.8c25.3 4.8 47.9 17 65.6 34.3 12.6 12.4 32.9 12.2 45.3-.4s12.2-32.9-.5-45.3C297.2 90.2 258.8 70.8 216 65.5L216 24c0-13.3-10.7-24-24-24zM168 130.2l0 251.5C108.8 370.5 64 318.5 64 256s44.8-114.5 104-125.8zm48 251.5l0-93.8 100 0c-12.3 47.6-51.2 84.5-100 93.8z"/>
      </BaseIcon>
    </template>