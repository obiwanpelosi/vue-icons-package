<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import BaseIcon from '../../../BaseIcon.vue'
    
    export default defineComponent({
      name: 'CgInfinity',
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
    d="M8.12132 9.87868L10.2044 11.9617L10.2106 11.9555L11.6631 13.408L11.6693 13.4142L13.7907 15.5355C15.7433 17.4882 18.9091 17.4882 20.8617 15.5355C22.8144 13.5829 22.8144 10.4171 20.8617 8.46447C18.9091 6.51184 15.7433 6.51184 13.7907 8.46447L13.0773 9.17786L14.4915 10.5921L15.2049 9.87868C16.3764 8.70711 18.2759 8.70711 19.4475 9.87868C20.6191 11.0503 20.6191 12.9497 19.4475 14.1213C18.2759 15.2929 16.3764 15.2929 15.2049 14.1213L13.1326 12.0491L13.1263 12.0554L9.53553 8.46447C7.58291 6.51184 4.41709 6.51184 2.46447 8.46447C0.511845 10.4171 0.511845 13.5829 2.46447 15.5355C4.41709 17.4882 7.58291 17.4882 9.53553 15.5355L10.2488 14.8222L8.83463 13.408L8.12132 14.1213C6.94975 15.2929 5.05025 15.2929 3.87868 14.1213C2.70711 12.9497 2.70711 11.0503 3.87868 9.87868C5.05025 8.70711 6.94975 8.70711 8.12132 9.87868Z"
    fill="currentColor"
  />
      </BaseIcon>
    </template>