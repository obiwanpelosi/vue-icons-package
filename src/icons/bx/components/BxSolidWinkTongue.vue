<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'BxSolidWinkTongue',
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
        <path d="M14 19v-4h-4v4c0 1.103.897 2 2 2s2-.897 2-2z"/><path d="M12 2C6.486 2 2 6.486 2 12c0 4.434 2.903 8.198 6.906 9.505A3.969 3.969 0 0 1 8 19v-2.499C6.412 15.027 6 13 6 13h12s-.411 2.027-2 3.501V19c0 .953-.349 1.816-.906 2.504C19.097 20.197 22 16.434 22 12c0-5.514-4.486-10-10-10zm-3.5 9a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 8.5 11zm4.5 0s.5-2 2.5-2c1.999 0 2.5 2 2.5 2h-5z"/>
      </BaseIcon>
    </template>