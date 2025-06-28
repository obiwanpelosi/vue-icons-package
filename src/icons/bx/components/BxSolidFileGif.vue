<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxSolidFileGif',
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
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-2.667 15.772A4.512 4.512 0 0 1 9.984 18c-.737 0-1.271-.186-1.644-.546-.371-.348-.575-.875-.569-1.469.006-1.344.983-2.111 2.309-2.111.521 0 .924.103 1.121.198l-.191.731c-.222-.096-.498-.174-.941-.174-.762 0-1.338.432-1.338 1.308 0 .833.522 1.325 1.271 1.325.21 0 .378-.024.45-.061v-.846h-.624v-.713h1.505v2.13zm1.634.186h-.918v-4.042h.918v4.042zm3.262-3.292h-1.553v.923h1.451v.744h-1.451v1.625h-.918v-4.042h2.471v.75zM14 9h-1V4l5 5h-4z"/>
      </BaseIcon>
    </template>