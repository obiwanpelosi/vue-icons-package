<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'AiFillMuted',
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
        <path d="M771.915 115c-5.863 0-11.877 1.644-17.42 5.267L400 351.966H236c-8.837 0-16 7.165-16 16.003V656.03c0 8.838 7.163 16.003 16 16.003h164l354.495 231.7c5.542 3.621 11.558 5.267 17.42 5.267C788.566 909 804 895.749 804 876.94V147.06c0-18.808-15.436-32.06-32.085-32.06"/>
      </BaseIcon>
    </template>