<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CiAlarmOff',
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
        <g id="Alarm_Off" data-name="Alarm Off">
    <g>
      <path d="M4.564,3.856a.5.5,0,0,0-.7.71l.29.29-.5.5a2.019,2.019,0,0,0-.01,2.85l.65.67a8.273,8.273,0,0,0-.71,3.39A8.427,8.427,0,0,0,12,20.686a8.275,8.275,0,0,0,5.72-2.26c.57.57,1.14,1.15,1.71,1.71a.5.5,0,0,0,.71-.7Zm-.21,2.21.51-.5c.32.33.65.65.98.98a6.38,6.38,0,0,0-1.06,1.4l-.43-.44A1.032,1.032,0,0,1,4.354,6.066ZM12,19.686a7.43,7.43,0,0,1-7.42-7.42,7.312,7.312,0,0,1,1.96-5.02l2.59,2.59q3.945,3.945,7.88,7.88A7.27,7.27,0,0,1,12,19.686Z" />
      <path d="M20.354,8.216a2.04,2.04,0,0,0,0-2.86l-1.46-1.45a2.01,2.01,0,0,0-2.85,0l-.68.67a8.528,8.528,0,0,0-6.38-.17c-.6.23-.34,1.19.27.97a7.419,7.419,0,0,1,9.64,9.64c-.22.6.74.86.97.26a8.506,8.506,0,0,0-.17-6.39Zm-2.4-1.9a8.068,8.068,0,0,0-1.65-1.27l.44-.43a1.026,1.026,0,0,1,1.45,0l1.45,1.45a1.014,1.014,0,0,1,0,1.44l-.43.44A8.262,8.262,0,0,0,17.954,6.316Z" />
    </g>
  </g>
      </BaseIcon>
    </template>