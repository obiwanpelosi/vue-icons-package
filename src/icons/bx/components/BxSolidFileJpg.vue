<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxSolidFileJpg',
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
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.239 16.446c0 1.152-.551 1.554-1.438 1.554-.21 0-.486-.036-.665-.097l.101-.737c.127.042.289.072.469.072.384 0 .623-.174.623-.804v-2.543h.911v2.555zm3.294-.365c-.313.293-.773.426-1.313.426-.12 0-.228-.007-.312-.019v1.445h-.906v-3.988a7.528 7.528 0 0 1 1.236-.083c.563 0 .965.107 1.234.323.259.204.433.54.433.936s-.133.732-.372.96zm4.331 1.667c-.28.096-.815.228-1.349.228-.737 0-1.271-.186-1.643-.546-.371-.348-.575-.875-.57-1.469.007-1.344.983-2.111 2.309-2.111.521 0 .924.103 1.121.198l-.191.731c-.222-.096-.497-.174-.941-.174-.761 0-1.338.432-1.338 1.308 0 .833.523 1.325 1.271 1.325.211 0 .378-.024.451-.061v-.846h-.624v-.713h1.504v2.13zM14 9h-1V4l5 5h-4z"/><path d="M11.285 14.552c-.186 0-.312.018-.377.036v1.193c.077.018.174.023.307.023.484 0 .784-.246.784-.659 0-.372-.257-.593-.714-.593z"/>
      </BaseIcon>
    </template>