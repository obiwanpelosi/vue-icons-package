<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxSolidFlorist',
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
        <path d="M10.84 21.871 12 22a10.221 10.221 0 0 0-9.013-8.891L2 13l.021.173a10.001 10.001 0 0 0 8.819 8.698zm11.139-8.698L22 13l-.987.109c-4.7.523-8.427 4.2-9.013 8.891l1.16-.129a10.001 10.001 0 0 0 8.819-8.698zM18.063 5.5a2.5 2.5 0 0 0-3.415-.915c-.062.035-.111.081-.168.121.005-.069.02-.136.02-.206a2.5 2.5 0 1 0-5 0c0 .07.015.137.021.206-.057-.04-.107-.086-.168-.121a2.5 2.5 0 0 0-2.5 4.33c.061.035.126.056.188.085-.062.029-.127.05-.188.085a2.5 2.5 0 0 0 2.5 4.33c.062-.035.111-.081.168-.121-.006.069-.021.136-.021.206a2.5 2.5 0 1 0 5 0c0-.07-.015-.137-.021-.206.057.04.106.086.168.121a2.5 2.5 0 0 0 2.5-4.33c-.061-.035-.126-.056-.188-.085.063-.029.127-.05.188-.085a2.5 2.5 0 0 0 .916-3.415zM12 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
      </BaseIcon>
    </template>