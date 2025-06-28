<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'AiFillFund',
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
          default: '0 0 1024 1024'
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
        <path d="M926 164H94c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V196c0-17.7-14.3-32-32-32zm-92.3 194.4l-297 297.2a8.03 8.03 0 0 1-11.3 0L410.9 541.1 238.4 713.7a8.03 8.03 0 0 1-11.3 0l-36.8-36.8a8.03 8.03 0 0 1 0-11.3l214.9-215c3.1-3.1 8.2-3.1 11.3 0L531 565l254.5-254.6c3.1-3.1 8.2-3.1 11.3 0l36.8 36.8c3.2 3 3.2 8.1.1 11.2z"/>
      </BaseIcon>
    </template>