<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgEventbrite',
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
        <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M14.6734 17.4378C12.3057 18.5419 9.5858 17.9679 7.85444 16.2039L21.8647 9.67074C21.7105 9.02969 21.4902 8.39446 21.2008 7.77376C18.8667 2.76836 12.9169 0.602811 7.91152 2.93687C2.90612 5.27092 0.740567 11.2207 3.07462 16.2261C5.40868 21.2315 11.3585 23.3971 16.3639 21.063C19.016 19.8263 20.8708 17.5746 21.6815 14.986H17.3424C16.7484 16.0235 15.8393 16.8941 14.6734 17.4378ZM9.60199 6.5621C7.23436 7.66615 5.92572 10.1185 6.16403 12.5786L16.4208 7.79583C14.6894 6.03194 11.9696 5.45805 9.60199 6.5621Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>