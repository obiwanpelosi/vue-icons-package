<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'Fa7Buromobelexperte',
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
          default: '0 0 448 512'
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
        <path fill="currentColor" d="M0 32l0 128 128 0 0-128-128 0zM120 152l-112 0 0-112 112 0 0 112zM160 32l0 128 128 0 0-128-128 0zM280 152l-112 0 0-112 112 0 0 112zM320 32l0 128 128 0 0-128-128 0zM440 152l-112 0 0-112 112 0 0 112zM0 192l0 128 128 0 0-128-128 0zM120 312l-112 0 0-112 112 0 0 112zm40-120l0 128 128 0 0-128-128 0zM280 312l-112 0 0-112 112 0 0 112zm40-120l0 128 128 0 0-128-128 0zM440 312l-112 0 0-112 112 0 0 112zM0 352l0 128 128 0 0-128-128 0zM120 472l-112 0 0-112 112 0 0 112zm40-120l0 128 128 0 0-128-128 0zM280 472l-112 0 0-112 112 0 0 112zm40-120l0 128 128 0 0-128-128 0z"/>
      </BaseIcon>
    </template>