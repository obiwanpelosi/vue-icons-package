import {
  defineComponent as i,
  createElementBlock as l,
  openBlock as n,
  normalizeStyle as a,
  normalizeClass as p,
  renderSlot as c,
} from "vue";
const m = i({
    name: "BaseIcon",
    props: {
      size: {
        type: String,
        default: "1em",
      },
      color: {
        type: String,
        default: "currentColor",
      },
      strokeColor: {
        type: String,
        default: "",
      },
      class: {
        type: String,
        default: "",
      },
      style: {
        type: Object,
        default: () => ({}),
        required: !1,
      },
      viewBox: {
        type: String,
        default: "0 0 24 24",
      },
    },
    computed: {
      iconClasses() {
        return this.class;
      },
    },
  }),
  d = (e, o) => {
    const t = e.__vccOpts || e;
    for (const [r, s] of o) t[r] = s;
    return t;
  },
  f = ["width", "height", "fill", "stroke", "viewBox"];
function u(e, o, t, r, s, g) {
  return (
    n(),
    l(
      "svg",
      {
        width: e.size,
        height: e.size,
        class: p(e.iconClasses),
        fill: e.color,
        stroke: e.strokeColor,
        style: a(e.style),
        viewBox: e.viewBox,
        xmlns: "http://www.w3.org/2000/svg",
      },
      [c(e.$slots, "default")],
      14,
      f
    )
  );
}
const z = /* @__PURE__ */ d(m, [["render", u]]);
export { z as B, d as _ };
