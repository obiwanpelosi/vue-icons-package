<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgCompress',
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
    d="M19.0954 8.42986L17.6711 7.02576L12.7568 12.0107L17.7417 16.925L19.1458 15.5007L16.644 13.0344L23.1411 13.0847L23.1565 11.0848L16.5286 11.0334L19.0954 8.42986Z"
    fill="currentColor"
  />
  <path
    d="M5.46742 15.5618L6.88341 16.9742L11.827 12.0183L6.87102 7.07476L5.45857 8.49074L8.04995 11.0756L0.843506 11.1004L0.850384 13.1004L7.94701 13.076L5.46742 15.5618Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>