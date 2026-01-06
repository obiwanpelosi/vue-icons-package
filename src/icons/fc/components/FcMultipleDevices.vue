<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'FcMultipleDevices',
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
          default: '0 0 48 48'
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
        <path fill="#546E7A" d="M4,28V8c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4v20c0,2.2-1.8,4-4,4H8C5.8,32,4,30.2,4,28z"/>
    <path fill="#BBDEFB" d="M36,7H8C7.4,7,7,7.4,7,8v20c0,0.6,0.4,1,1,1h28c0.6,0,1-0.4,1-1V8C37,7.4,36.6,7,36,7z"/>
    <path fill="#37474F" d="M38,33H6c-2.2,0-4-1.8-4-4v0h40v0C42,31.2,40.2,33,38,33z"/>
    <path fill="#E38939" d="M24,40V16c0-2.2,1.8-4,4-4h12c2.2,0,4,1.8,4,4v24c0,2.2-1.8,4-4,4H28C25.8,44,24,42.2,24,40z"/>
    <path fill="#FFF3E0" d="M40,15H28c-0.6,0-1,0.4-1,1v22c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1V16C41,15.4,40.6,15,40,15z"/>
    <circle fill="#A6642A" cx="34" cy="41.5" r="1.5"/>
      </BaseIcon>
    </template>