<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgPill',
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
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12.6569 2.75736C15 0.414213 18.799 0.414214 21.1421 2.75736C23.4853 5.1005 23.4853 8.8995 21.1421 11.2426L11.2426 21.1421C8.89949 23.4853 5.1005 23.4853 2.75736 21.1421C0.414214 18.799 0.414213 15 2.75736 12.6569L12.6569 2.75736ZM19.7279 9.82843L15.4853 14.0711L9.82843 8.41421L14.0711 4.17157C15.6332 2.60948 18.1658 2.60948 19.7279 4.17157C21.29 5.73367 21.29 8.26633 19.7279 9.82843Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>