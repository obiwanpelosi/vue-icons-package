<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxLogoBootstrap',
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
        <path d="M18.002 2.997H5.999A3.011 3.011 0 0 0 2.997 6v12.002a3.012 3.012 0 0 0 3.002 3.001h12.003a3.012 3.012 0 0 0 3.001-3.001V6a3.012 3.012 0 0 0-3.001-3.003zm-1.64 12.647c-.152.36-.389.68-.693.927a3.594 3.594 0 0 1-1.206.614c-.49.151-1.074.229-1.75.229H7.888V6.909h5.103c.943 0 1.7.213 2.267.646.569.436.854 1.082.854 1.958 0 .528-.13.983-.389 1.357-.259.373-.63.664-1.111.868v.034c.642.135 1.137.438 1.464.912.327.473.493 1.069.493 1.789 0 .405-.078.788-.225 1.147l.02.021v.003zm-2.084-2.589c-.309-.282-.739-.419-1.297-.419H9.737v3.276h3.253c.554 0 .991-.144 1.298-.435.308-.289.464-.701.464-1.229-.005-.518-.156-.919-.464-1.193h-.014.004zm-.451-2.119c.299-.251.444-.613.444-1.084 0-.526-.131-.902-.397-1.116-.264-.214-.646-.326-1.146-.326H9.727v2.898h3.001c.436.001.81-.127 1.099-.372z"/>
      </BaseIcon>
    </template>