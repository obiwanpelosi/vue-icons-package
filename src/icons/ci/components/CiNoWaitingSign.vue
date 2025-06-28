<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiNoWaitingSign',
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
        <g id="No_Watting_Sign" data-name="No Watting Sign">
    <path d="M12,2.07a9.93,9.93,0,1,0,7.03,16.95.374.374,0,0,0,.06-.07A9.837,9.837,0,0,0,21.935,12,9.944,9.944,0,0,0,12,2.07Zm0,18.86A8.945,8.945,0,0,1,3.065,12a8.84,8.84,0,0,1,2.28-5.95l12.61,12.61A8.925,8.925,0,0,1,12,20.93Zm6.67-2.98L6.045,5.34a8.934,8.934,0,0,1,12.62,12.61Z" />
  </g>
      </BaseIcon>
    </template>