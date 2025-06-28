<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgFontSpacing',
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
        <path d="M19 21H21V3H19L19 21Z" fill="currentColor" />
  <path d="M5 21H3V3H5L5 21Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.46416 16.0479L9.95281 14.9999H14.0473L14.5359 16.0478C14.7693 16.5484 15.3643 16.7649 15.8649 16.5315C16.3654 16.2981 16.582 15.7031 16.3485 15.2026L12.9676 7.95213C12.7888 7.56877 12.398 7.35199 11.9999 7.37637C11.6019 7.35214 11.2112 7.5689 11.0325 7.95216L7.65155 15.2026C7.41814 15.7032 7.6347 16.2981 8.13524 16.5315C8.63578 16.7649 9.23076 16.5484 9.46416 16.0479ZM12.0001 10.6096L10.8854 12.9999H13.1147L12.0001 10.6096Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>