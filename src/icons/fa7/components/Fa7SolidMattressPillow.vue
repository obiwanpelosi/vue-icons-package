<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7SolidMattressPillow',
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
        <path fill="currentColor" d="M256 64L64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l192 0 0-384zm48 384l208 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-208 0 0 384zM64 160c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-192z"/>
      </BaseIcon>
    </template>