<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiHeadphones',
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
        <g id="Headphones">
    <path d="M12.23,3.065h-.46a8.211,8.211,0,0,0-8.2,8.2v6.25a3.385,3.385,0,0,0,.89,2.3,3.423,3.423,0,0,0,2.53,1.12h.53a1.225,1.225,0,0,0,1.22-1.22v-4.4A1.225,1.225,0,0,0,7.52,14.1H7.11a3.6,3.6,0,0,0-2.54,1.05v-3.88a7.208,7.208,0,0,1,7.2-7.2h.46a7.208,7.208,0,0,1,7.2,7.2v3.88a3.6,3.6,0,0,0-2.54-1.05h-.41a1.225,1.225,0,0,0-1.22,1.22v4.4a1.225,1.225,0,0,0,1.22,1.22h.53a3.423,3.423,0,0,0,2.53-1.12,3.385,3.385,0,0,0,.89-2.3v-6.25A8.211,8.211,0,0,0,12.23,3.065ZM4.58,17.275A2.511,2.511,0,0,1,7.11,15.1h.41a.222.222,0,0,1,.22.22v4.4a.222.222,0,0,1-.22.22H6.99a2.422,2.422,0,0,1-1.79-.79,2.322,2.322,0,0,1-.63-1.63A1.927,1.927,0,0,1,4.58,17.275Zm14.22,1.87a2.422,2.422,0,0,1-1.79.79h-.53a.222.222,0,0,1-.22-.22v-4.4a.222.222,0,0,1,.22-.22h.41a2.511,2.511,0,0,1,2.53,2.18,1.927,1.927,0,0,1,.01.24A2.322,2.322,0,0,1,18.8,19.145Z" />
  </g>
      </BaseIcon>
    </template>