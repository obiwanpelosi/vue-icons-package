<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxLogoMediumOld',
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
        <path d="M21.957 6.73a.073.073 0 0 0-.019-.097c-.004-.004-.008-.008-.012-.01l-.006-.002-6.033-3.018a.729.729 0 0 0-.292-.067.692.692 0 0 0-.586.317l-3.474 5.646 4.359 7.083 6.063-9.852zm-1.064 13.543c.611.306 1.107.092 1.107-.478V8.483l-5.809 9.439 4.702 2.351zM9.622 8.213v6.426l5.711 2.855zm-7.068 9.558 5.19 2.595a.845.845 0 0 0 .374.098c.323 0 .549-.25.549-.669V6.701a.067.067 0 0 0-.035-.059L2.739 3.697a.669.669 0 0 0-.3-.079c-.258 0-.439.199-.439.534v12.723c0 .341.25.744.554.896z"/>
      </BaseIcon>
    </template>