<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgCornerDoubleDownLeft',
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
    d="M11.2952 7.69432L16.1357 2.6377L21.1924 7.47821L19.8094 8.92296L17.3474 6.56617L17.5094 12.6C17.5805 15.25 15.49 17.456 12.8399 17.5271L6.91369 17.6863L9.20765 19.9335L7.80805 21.3622L2.80768 16.4636L7.70628 11.4632L9.13495 12.8628L6.75759 15.2896L12.7755 15.128C14.1005 15.0924 15.1458 13.9895 15.1102 12.6645L14.9519 6.76668L12.74 9.07732L11.2952 7.69432Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>