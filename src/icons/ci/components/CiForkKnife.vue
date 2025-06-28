<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiForkKnife',
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
        <g id="Fork_Knife" data-name="Fork &amp; Knife">
    <g>
      <path d="M18.83,2.25a6.469,6.469,0,0,0-4.37,6.12v3.15a1.784,1.784,0,0,0,1.78,1.78h2.7v8.14a.5.5,0,0,0,.5.5.508.508,0,0,0,.5-.5V2.56a.508.508,0,0,0-.5-.5.467.467,0,0,0-.17.03ZM16.24,12.3a.781.781,0,0,1-.78-.78V8.37a5.482,5.482,0,0,1,3.48-5.1V12.3Z" />
      <path d="M11.44,2.07a.5.5,0,0,0-.5.5V7.55H8.5V2.57a.5.5,0,0,0-.5-.5.5.5,0,0,0-.5.5V7.55H5.06V2.57a.5.5,0,0,0-.5-.5.5.5,0,0,0-.5.5V9.05a2.507,2.507,0,0,0,2.5,2.5H7.5v9.89a.508.508,0,0,0,.5.5.5.5,0,0,0,.5-.5V11.55h.94a2.5,2.5,0,0,0,2.5-2.5V2.57A.5.5,0,0,0,11.44,2.07Zm-.5,6.98a1.5,1.5,0,0,1-1.5,1.5H6.56a1.511,1.511,0,0,1-1.5-1.5v-.5h5.88Z" />
    </g>
  </g>
      </BaseIcon>
    </template>