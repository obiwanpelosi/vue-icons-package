<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgArrowsExpandRightAlt',
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
        <path
    d="M13.8995 2.10052V4.10052H18.4852L12.707 9.87878L14.1212 11.293L19.8995 5.51471V10.1005H21.8995V2.10052H13.8995Z"
    fill="currentColor"
  />
  <path
    d="M5.51468 19.8995H10.1005V21.8995H2.10046V13.8995H4.10046V18.4853L9.87872 12.707L11.2929 14.1213L5.51468 19.8995Z"
    fill="currentColor"
  />
  <path
    d="M9.17154 7.75739L7.75732 9.1716L14.8284 16.2427L16.2426 14.8285L9.17154 7.75739Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>