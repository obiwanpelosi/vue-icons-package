<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiDroplet',
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
        <g id="Droplet">
    <path d="M12,21.936A7.27,7.27,0,0,1,7.656,20.5c-2.332-1.724-3.187-5.6-1.868-8.46l4.875-9.173A1.515,1.515,0,0,1,12,2.064h0a1.512,1.512,0,0,1,1.337.805L18.2,12.017c1.331,2.888.475,6.762-1.856,8.485A7.274,7.274,0,0,1,12,21.936ZM12,3.064a.51.51,0,0,0-.456.274L6.683,12.485c-1.1,2.4-.376,5.777,1.568,7.212a6.4,6.4,0,0,0,7.5,0c1.942-1.435,2.668-4.817,1.554-7.237l-4.85-9.122A.507.507,0,0,0,12,3.064Z" />
  </g>
      </BaseIcon>
    </template>