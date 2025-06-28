<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiVial',
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
        <g id="Vial">
    <path d="M20.779,9.441l-.48-.47L15.039,3.7l-.48-.48a.5.5,0,0,0-.7,0,.5.5,0,0,0,0,.71l.47.48L4.159,14.581a3.694,3.694,0,0,0,0,5.22l.04.04a3.706,3.706,0,0,0,5.23,0L19.6,9.671l.47.48a.52.52,0,0,0,.71,0A.513.513,0,0,0,20.779,9.441Zm-12.06,9.69a2.7,2.7,0,0,1-3.81,0l-.04-.04a2.7,2.7,0,0,1,0-3.81l1.7-1.7h7.71Zm6.56-6.55H7.569l7.47-7.46,3.85,3.85Z" />
  </g>
      </BaseIcon>
    </template>