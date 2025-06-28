<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgArrowLongUpR',
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
    d="M7.79337 4.60945L12.0679 0.398956L16.2785 4.67358L14.8536 6.07708L13.0499 4.24596L12.9809 16.1324L16.2068 19.3584L11.9642 23.601L7.72156 19.3584L10.981 16.0989L11.0501 4.20883L9.19686 6.0343L7.79337 4.60945ZM11.9642 20.7726L13.3784 19.3584L11.9642 17.9442L10.55 19.3584L11.9642 20.7726Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>