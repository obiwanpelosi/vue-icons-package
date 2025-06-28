<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxLogoDigitalocean',
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
        <path d="M12.005 21.992v-3.877c4.104 0 7.288-4.068 5.714-8.388a5.81 5.81 0 0 0-3.457-3.446c-4.319-1.563-8.389 1.61-8.389 5.714H2.008c0-6.541 6.325-11.642 13.184-9.499 2.991.94 5.383 3.321 6.313 6.313 2.141 6.858-2.96 13.183-9.5 13.183z"/><path d="M12.017 18.139H8.152v-3.866h3.865zm-3.865 2.959H5.193v-2.959h2.959zm-2.959-2.959H2.711v-2.483h2.482v2.483z"/>
      </BaseIcon>
    </template>