<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiBandage',
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
        <g id="Bandage">
    <g>
      <path d="M17.435,7.5H6.565a4.5,4.5,0,0,0,0,9h10.87a4.5,4.5,0,0,0,0-9Zm-9.93,8h-.94a3.5,3.5,0,0,1,0-7h.94Zm8,0h-7v-7h7Zm1.93,0h-.93v-7h.93a3.5,3.5,0,0,1,0,7Z" />
      <circle cx="10.252" cy="10.501" r="0.625" />
      <circle cx="10.252" cy="13.501" r="0.625" />
      <circle cx="13.752" cy="10.5" r="0.625" />
      <circle cx="13.752" cy="13.5" r="0.625" />
    </g>
  </g>
      </BaseIcon>
    </template>