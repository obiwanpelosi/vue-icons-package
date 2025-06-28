import { defineComponent as r, resolveComponent as l, createBlock as n, openBlock as i, normalizeStyle as a, normalizeClass as c, withCtx as u, createElementVNode as s } from "vue";
import { B as p, _ as d } from "./vendor-D7CANDSR.js";
const m = r({
  name: "FiActivity",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function B(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "22 12 18 12 15 21 9 3 6 12 2 12" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const ou = /* @__PURE__ */ d(m, [["render", B]]), $ = r({
  name: "FiAirplay",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function g(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" }, null, -1),
      s("polygon", { points: "12 15 17 21 7 21 12 15" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const su = /* @__PURE__ */ d($, [["render", g]]), S = r({
  name: "FiAlertCircle",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function v(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, null, -1),
      s("line", {
        x1: "12",
        y1: "8",
        x2: "12",
        y2: "12"
      }, null, -1),
      s("line", {
        x1: "12",
        y1: "16",
        x2: "12.01",
        y2: "16"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const tu = /* @__PURE__ */ d(S, [["render", v]]), w = r({
  name: "FiAlertOctagon",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function z(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polygon", { points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" }, null, -1),
      s("line", {
        x1: "12",
        y1: "8",
        x2: "12",
        y2: "12"
      }, null, -1),
      s("line", {
        x1: "12",
        y1: "16",
        x2: "12.01",
        y2: "16"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const ru = /* @__PURE__ */ d(w, [["render", z]]), h = r({
  name: "FiAlertTriangle",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function L(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }, null, -1),
      s("line", {
        x1: "12",
        y1: "9",
        x2: "12",
        y2: "13"
      }, null, -1),
      s("line", {
        x1: "12",
        y1: "17",
        x2: "12.01",
        y2: "17"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const lu = /* @__PURE__ */ d(h, [["render", L]]), F = r({
  name: "FiAlignCenter",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function I(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("line", {
        x1: "18",
        y1: "10",
        x2: "6",
        y2: "10"
      }, null, -1),
      s("line", {
        x1: "21",
        y1: "6",
        x2: "3",
        y2: "6"
      }, null, -1),
      s("line", {
        x1: "21",
        y1: "14",
        x2: "3",
        y2: "14"
      }, null, -1),
      s("line", {
        x1: "18",
        y1: "18",
        x2: "6",
        y2: "18"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const nu = /* @__PURE__ */ d(F, [["render", I]]), j = r({
  name: "FiAlignJustify",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function x(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("line", {
        x1: "21",
        y1: "10",
        x2: "3",
        y2: "10"
      }, null, -1),
      s("line", {
        x1: "21",
        y1: "6",
        x2: "3",
        y2: "6"
      }, null, -1),
      s("line", {
        x1: "21",
        y1: "14",
        x2: "3",
        y2: "14"
      }, null, -1),
      s("line", {
        x1: "21",
        y1: "18",
        x2: "3",
        y2: "18"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const iu = /* @__PURE__ */ d(j, [["render", x]]), b = r({
  name: "FiAlignLeft",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function O(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("line", {
        x1: "17",
        y1: "10",
        x2: "3",
        y2: "10"
      }, null, -1),
      s("line", {
        x1: "21",
        y1: "6",
        x2: "3",
        y2: "6"
      }, null, -1),
      s("line", {
        x1: "21",
        y1: "14",
        x2: "3",
        y2: "14"
      }, null, -1),
      s("line", {
        x1: "17",
        y1: "18",
        x2: "3",
        y2: "18"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const au = /* @__PURE__ */ d(b, [["render", O]]), W = r({
  name: "FiAlignRight",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function _(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("line", {
        x1: "21",
        y1: "10",
        x2: "7",
        y2: "10"
      }, null, -1),
      s("line", {
        x1: "21",
        y1: "6",
        x2: "3",
        y2: "6"
      }, null, -1),
      s("line", {
        x1: "21",
        y1: "14",
        x2: "3",
        y2: "14"
      }, null, -1),
      s("line", {
        x1: "21",
        y1: "18",
        x2: "7",
        y2: "18"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const cu = /* @__PURE__ */ d(W, [["render", _]]), M = r({
  name: "FiAnchor",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function A(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "5",
        r: "3"
      }, null, -1),
      s("line", {
        x1: "12",
        y1: "22",
        x2: "12",
        y2: "8"
      }, null, -1),
      s("path", { d: "M5 12H2a10 10 0 0 0 20 0h-3" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const uu = /* @__PURE__ */ d(M, [["render", A]]), H = r({
  name: "FiAperture",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function V(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, null, -1),
      s("line", {
        x1: "14.31",
        y1: "8",
        x2: "20.05",
        y2: "17.94"
      }, null, -1),
      s("line", {
        x1: "9.69",
        y1: "8",
        x2: "21.17",
        y2: "8"
      }, null, -1),
      s("line", {
        x1: "7.38",
        y1: "12",
        x2: "13.12",
        y2: "2.06"
      }, null, -1),
      s("line", {
        x1: "9.69",
        y1: "16",
        x2: "3.95",
        y2: "6.06"
      }, null, -1),
      s("line", {
        x1: "14.31",
        y1: "16",
        x2: "2.83",
        y2: "16"
      }, null, -1),
      s("line", {
        x1: "16.62",
        y1: "12",
        x2: "10.88",
        y2: "21.94"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const pu = /* @__PURE__ */ d(H, [["render", V]]), P = r({
  name: "FiArchive",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function D(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "21 8 21 21 3 21 3 8" }, null, -1),
      s("rect", {
        x: "1",
        y: "3",
        width: "22",
        height: "5"
      }, null, -1),
      s("line", {
        x1: "10",
        y1: "12",
        x2: "14",
        y2: "12"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const du = /* @__PURE__ */ d(P, [["render", D]]), T = r({
  name: "FiArrowDown",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function U(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("line", {
        x1: "12",
        y1: "5",
        x2: "12",
        y2: "19"
      }, null, -1),
      s("polyline", { points: "19 12 12 19 5 12" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const yu = /* @__PURE__ */ d(T, [["render", U]]), R = r({
  name: "FiArrowDownCircle",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function q(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, null, -1),
      s("polyline", { points: "8 12 12 16 16 12" }, null, -1),
      s("line", {
        x1: "12",
        y1: "8",
        x2: "12",
        y2: "16"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const fu = /* @__PURE__ */ d(R, [["render", q]]), G = r({
  name: "FiArrowDownLeft",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function E(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("line", {
        x1: "17",
        y1: "7",
        x2: "7",
        y2: "17"
      }, null, -1),
      s("polyline", { points: "17 17 7 17 7 7" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Cu = /* @__PURE__ */ d(G, [["render", E]]), X = r({
  name: "FiArrowDownRight",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Z(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("line", {
        x1: "7",
        y1: "7",
        x2: "17",
        y2: "17"
      }, null, -1),
      s("polyline", { points: "17 7 17 17 7 17" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const ku = /* @__PURE__ */ d(X, [["render", Z]]), N = r({
  name: "FiArrowLeft",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function J(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("line", {
        x1: "19",
        y1: "12",
        x2: "5",
        y2: "12"
      }, null, -1),
      s("polyline", { points: "12 19 5 12 12 5" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const mu = /* @__PURE__ */ d(N, [["render", J]]), K = r({
  name: "FiArrowLeftCircle",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Y(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, null, -1),
      s("polyline", { points: "12 8 8 12 12 16" }, null, -1),
      s("line", {
        x1: "16",
        y1: "12",
        x2: "8",
        y2: "12"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Bu = /* @__PURE__ */ d(K, [["render", Y]]), Q = r({
  name: "FiArrowRight",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ee(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("line", {
        x1: "5",
        y1: "12",
        x2: "19",
        y2: "12"
      }, null, -1),
      s("polyline", { points: "12 5 19 12 12 19" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const $u = /* @__PURE__ */ d(Q, [["render", ee]]), oe = r({
  name: "FiArrowRightCircle",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function se(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, null, -1),
      s("polyline", { points: "12 16 16 12 12 8" }, null, -1),
      s("line", {
        x1: "8",
        y1: "12",
        x2: "16",
        y2: "12"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const gu = /* @__PURE__ */ d(oe, [["render", se]]), te = r({
  name: "FiArrowUp",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function re(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("line", {
        x1: "12",
        y1: "19",
        x2: "12",
        y2: "5"
      }, null, -1),
      s("polyline", { points: "5 12 12 5 19 12" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Su = /* @__PURE__ */ d(te, [["render", re]]), le = r({
  name: "FiArrowUpCircle",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ne(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, null, -1),
      s("polyline", { points: "16 12 12 8 8 12" }, null, -1),
      s("line", {
        x1: "12",
        y1: "16",
        x2: "12",
        y2: "8"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const vu = /* @__PURE__ */ d(le, [["render", ne]]), ie = r({
  name: "FiArrowUpLeft",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ae(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("line", {
        x1: "17",
        y1: "17",
        x2: "7",
        y2: "7"
      }, null, -1),
      s("polyline", { points: "7 17 7 7 17 7" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const wu = /* @__PURE__ */ d(ie, [["render", ae]]), ce = r({
  name: "FiArrowUpRight",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ue(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("line", {
        x1: "7",
        y1: "17",
        x2: "17",
        y2: "7"
      }, null, -1),
      s("polyline", { points: "7 7 17 7 17 17" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const zu = /* @__PURE__ */ d(ce, [["render", ue]]), pe = r({
  name: "FiAtSign",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function de(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "4"
      }, null, -1),
      s("path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const hu = /* @__PURE__ */ d(pe, [["render", de]]), ye = r({
  name: "FiAward",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function fe(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "8",
        r: "7"
      }, null, -1),
      s("polyline", { points: "8.21 13.89 7 23 12 20 17 23 15.79 13.88" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Lu = /* @__PURE__ */ d(ye, [["render", fe]]), Ce = r({
  name: "FiBarChart",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ke(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("line", {
        x1: "12",
        y1: "20",
        x2: "12",
        y2: "10"
      }, null, -1),
      s("line", {
        x1: "18",
        y1: "20",
        x2: "18",
        y2: "4"
      }, null, -1),
      s("line", {
        x1: "6",
        y1: "20",
        x2: "6",
        y2: "16"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Fu = /* @__PURE__ */ d(Ce, [["render", ke]]), me = r({
  name: "FiBarChart2",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Be(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("line", {
        x1: "18",
        y1: "20",
        x2: "18",
        y2: "10"
      }, null, -1),
      s("line", {
        x1: "12",
        y1: "20",
        x2: "12",
        y2: "4"
      }, null, -1),
      s("line", {
        x1: "6",
        y1: "20",
        x2: "6",
        y2: "14"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Iu = /* @__PURE__ */ d(me, [["render", Be]]), $e = r({
  name: "FiBattery",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ge(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("rect", {
        x: "1",
        y: "6",
        width: "18",
        height: "12",
        rx: "2",
        ry: "2"
      }, null, -1),
      s("line", {
        x1: "23",
        y1: "13",
        x2: "23",
        y2: "11"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const ju = /* @__PURE__ */ d($e, [["render", ge]]), Se = r({
  name: "FiBatteryCharging",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ve(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19" }, null, -1),
      s("line", {
        x1: "23",
        y1: "13",
        x2: "23",
        y2: "11"
      }, null, -1),
      s("polyline", { points: "11 6 7 12 13 12 9 18" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const xu = /* @__PURE__ */ d(Se, [["render", ve]]), we = r({
  name: "FiBell",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ze(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" }, null, -1),
      s("path", { d: "M13.73 21a2 2 0 0 1-3.46 0" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const bu = /* @__PURE__ */ d(we, [["render", ze]]), he = r({
  name: "FiBellOff",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Le(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M13.73 21a2 2 0 0 1-3.46 0" }, null, -1),
      s("path", { d: "M18.63 13A17.89 17.89 0 0 1 18 8" }, null, -1),
      s("path", { d: "M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14" }, null, -1),
      s("path", { d: "M18 8a6 6 0 0 0-9.33-5" }, null, -1),
      s("line", {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Ou = /* @__PURE__ */ d(he, [["render", Le]]), Fe = r({
  name: "FiBluetooth",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ie(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Wu = /* @__PURE__ */ d(Fe, [["render", Ie]]), je = r({
  name: "FiBold",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function xe(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" }, null, -1),
      s("path", { d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const _u = /* @__PURE__ */ d(je, [["render", xe]]), be = r({
  name: "FiBook",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Oe(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20" }, null, -1),
      s("path", { d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Mu = /* @__PURE__ */ d(be, [["render", Oe]]), We = r({
  name: "FiBookmark",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function _e(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Au = /* @__PURE__ */ d(We, [["render", _e]]), Me = r({
  name: "FiBookOpen",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ae(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }, null, -1),
      s("path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Hu = /* @__PURE__ */ d(Me, [["render", Ae]]), He = r({
  name: "FiBox",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ve(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }, null, -1),
      s("polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }, null, -1),
      s("line", {
        x1: "12",
        y1: "22.08",
        x2: "12",
        y2: "12"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Vu = /* @__PURE__ */ d(He, [["render", Ve]]), Pe = r({
  name: "FiBriefcase",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function De(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("rect", {
        x: "2",
        y: "7",
        width: "20",
        height: "14",
        rx: "2",
        ry: "2"
      }, null, -1),
      s("path", { d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Pu = /* @__PURE__ */ d(Pe, [["render", De]]), Te = r({
  name: "FiCalendar",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ue(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("rect", {
        x: "3",
        y: "4",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }, null, -1),
      s("line", {
        x1: "16",
        y1: "2",
        x2: "16",
        y2: "6"
      }, null, -1),
      s("line", {
        x1: "8",
        y1: "2",
        x2: "8",
        y2: "6"
      }, null, -1),
      s("line", {
        x1: "3",
        y1: "10",
        x2: "21",
        y2: "10"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Du = /* @__PURE__ */ d(Te, [["render", Ue]]), Re = r({
  name: "FiCamera",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function qe(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" }, null, -1),
      s("circle", {
        cx: "12",
        cy: "13",
        r: "4"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Tu = /* @__PURE__ */ d(Re, [["render", qe]]), Ge = r({
  name: "FiCameraOff",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ee(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("line", {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23"
      }, null, -1),
      s("path", { d: "M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Uu = /* @__PURE__ */ d(Ge, [["render", Ee]]), Xe = r({
  name: "FiCast",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ze(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" }, null, -1),
      s("line", {
        x1: "2",
        y1: "20",
        x2: "2.01",
        y2: "20"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Ru = /* @__PURE__ */ d(Xe, [["render", Ze]]), Ne = r({
  name: "FiCheck",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Je(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "20 6 9 17 4 12" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const qu = /* @__PURE__ */ d(Ne, [["render", Je]]), Ke = r({
  name: "FiCheckCircle",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ye(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }, null, -1),
      s("polyline", { points: "22 4 12 14.01 9 11.01" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Gu = /* @__PURE__ */ d(Ke, [["render", Ye]]), Qe = r({
  name: "FiCheckSquare",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function eo(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "9 11 12 14 22 4" }, null, -1),
      s("path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Eu = /* @__PURE__ */ d(Qe, [["render", eo]]), oo = r({
  name: "FiChevronDown",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function so(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "6 9 12 15 18 9" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Xu = /* @__PURE__ */ d(oo, [["render", so]]), to = r({
  name: "FiChevronLeft",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ro(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "15 18 9 12 15 6" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Zu = /* @__PURE__ */ d(to, [["render", ro]]), lo = r({
  name: "FiChevronRight",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function no(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "9 18 15 12 9 6" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Nu = /* @__PURE__ */ d(lo, [["render", no]]), io = r({
  name: "FiChevronsDown",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ao(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "7 13 12 18 17 13" }, null, -1),
      s("polyline", { points: "7 6 12 11 17 6" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Ju = /* @__PURE__ */ d(io, [["render", ao]]), co = r({
  name: "FiChevronsLeft",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function uo(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "11 17 6 12 11 7" }, null, -1),
      s("polyline", { points: "18 17 13 12 18 7" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Ku = /* @__PURE__ */ d(co, [["render", uo]]), po = r({
  name: "FiChevronsRight",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function yo(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "13 17 18 12 13 7" }, null, -1),
      s("polyline", { points: "6 17 11 12 6 7" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Yu = /* @__PURE__ */ d(po, [["render", yo]]), fo = r({
  name: "FiChevronsUp",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Co(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "17 11 12 6 7 11" }, null, -1),
      s("polyline", { points: "17 18 12 13 7 18" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Qu = /* @__PURE__ */ d(fo, [["render", Co]]), ko = r({
  name: "FiChevronUp",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function mo(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "18 15 12 9 6 15" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const e1 = /* @__PURE__ */ d(ko, [["render", mo]]), Bo = r({
  name: "FiChrome",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function $o(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, null, -1),
      s("circle", {
        cx: "12",
        cy: "12",
        r: "4"
      }, null, -1),
      s("line", {
        x1: "21.17",
        y1: "8",
        x2: "12",
        y2: "8"
      }, null, -1),
      s("line", {
        x1: "3.95",
        y1: "6.06",
        x2: "8.54",
        y2: "14"
      }, null, -1),
      s("line", {
        x1: "10.88",
        y1: "21.94",
        x2: "15.46",
        y2: "14"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const o1 = /* @__PURE__ */ d(Bo, [["render", $o]]), go = r({
  name: "FiCircle",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function So(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const s1 = /* @__PURE__ */ d(go, [["render", So]]), vo = r({
  name: "FiClipboard",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function wo(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }, null, -1),
      s("rect", {
        x: "8",
        y: "2",
        width: "8",
        height: "4",
        rx: "1",
        ry: "1"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const t1 = /* @__PURE__ */ d(vo, [["render", wo]]), zo = r({
  name: "FiClock",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ho(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, null, -1),
      s("polyline", { points: "12 6 12 12 16 14" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const r1 = /* @__PURE__ */ d(zo, [["render", ho]]), Lo = r({
  name: "FiCloud",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Fo(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const l1 = /* @__PURE__ */ d(Lo, [["render", Fo]]), Io = r({
  name: "FiCloudDrizzle",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function jo(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("line", {
        x1: "8",
        y1: "19",
        x2: "8",
        y2: "21"
      }, null, -1),
      s("line", {
        x1: "8",
        y1: "13",
        x2: "8",
        y2: "15"
      }, null, -1),
      s("line", {
        x1: "16",
        y1: "19",
        x2: "16",
        y2: "21"
      }, null, -1),
      s("line", {
        x1: "16",
        y1: "13",
        x2: "16",
        y2: "15"
      }, null, -1),
      s("line", {
        x1: "12",
        y1: "21",
        x2: "12",
        y2: "23"
      }, null, -1),
      s("line", {
        x1: "12",
        y1: "15",
        x2: "12",
        y2: "17"
      }, null, -1),
      s("path", { d: "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const n1 = /* @__PURE__ */ d(Io, [["render", jo]]), xo = r({
  name: "FiCloudLightning",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function bo(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9" }, null, -1),
      s("polyline", { points: "13 11 9 17 15 17 11 23" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const i1 = /* @__PURE__ */ d(xo, [["render", bo]]), Oo = r({
  name: "FiCloudOff",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Wo(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3" }, null, -1),
      s("line", {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const a1 = /* @__PURE__ */ d(Oo, [["render", Wo]]), _o = r({
  name: "FiCloudRain",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Mo(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("line", {
        x1: "16",
        y1: "13",
        x2: "16",
        y2: "21"
      }, null, -1),
      s("line", {
        x1: "8",
        y1: "13",
        x2: "8",
        y2: "21"
      }, null, -1),
      s("line", {
        x1: "12",
        y1: "15",
        x2: "12",
        y2: "23"
      }, null, -1),
      s("path", { d: "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const c1 = /* @__PURE__ */ d(_o, [["render", Mo]]), Ao = r({
  name: "FiCloudSnow",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ho(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" }, null, -1),
      s("line", {
        x1: "8",
        y1: "16",
        x2: "8.01",
        y2: "16"
      }, null, -1),
      s("line", {
        x1: "8",
        y1: "20",
        x2: "8.01",
        y2: "20"
      }, null, -1),
      s("line", {
        x1: "12",
        y1: "18",
        x2: "12.01",
        y2: "18"
      }, null, -1),
      s("line", {
        x1: "12",
        y1: "22",
        x2: "12.01",
        y2: "22"
      }, null, -1),
      s("line", {
        x1: "16",
        y1: "16",
        x2: "16.01",
        y2: "16"
      }, null, -1),
      s("line", {
        x1: "16",
        y1: "20",
        x2: "16.01",
        y2: "20"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const u1 = /* @__PURE__ */ d(Ao, [["render", Ho]]), Vo = r({
  name: "FiCode",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Po(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "16 18 22 12 16 6" }, null, -1),
      s("polyline", { points: "8 6 2 12 8 18" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const p1 = /* @__PURE__ */ d(Vo, [["render", Po]]), Do = r({
  name: "FiCodepen",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function To(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polygon", { points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" }, null, -1),
      s("line", {
        x1: "12",
        y1: "22",
        x2: "12",
        y2: "15.5"
      }, null, -1),
      s("polyline", { points: "22 8.5 12 15.5 2 8.5" }, null, -1),
      s("polyline", { points: "2 15.5 12 8.5 22 15.5" }, null, -1),
      s("line", {
        x1: "12",
        y1: "2",
        x2: "12",
        y2: "8.5"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const d1 = /* @__PURE__ */ d(Do, [["render", To]]), Uo = r({
  name: "FiCodesandbox",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ro(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }, null, -1),
      s("polyline", { points: "7.5 4.21 12 6.81 16.5 4.21" }, null, -1),
      s("polyline", { points: "7.5 19.79 7.5 14.6 3 12" }, null, -1),
      s("polyline", { points: "21 12 16.5 14.6 16.5 19.79" }, null, -1),
      s("polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }, null, -1),
      s("line", {
        x1: "12",
        y1: "22.08",
        x2: "12",
        y2: "12"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const y1 = /* @__PURE__ */ d(Uo, [["render", Ro]]), qo = r({
  name: "FiCoffee",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Go(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M18 8h1a4 4 0 0 1 0 8h-1" }, null, -1),
      s("path", { d: "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" }, null, -1),
      s("line", {
        x1: "6",
        y1: "1",
        x2: "6",
        y2: "4"
      }, null, -1),
      s("line", {
        x1: "10",
        y1: "1",
        x2: "10",
        y2: "4"
      }, null, -1),
      s("line", {
        x1: "14",
        y1: "1",
        x2: "14",
        y2: "4"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const f1 = /* @__PURE__ */ d(qo, [["render", Go]]), Eo = r({
  name: "FiColumns",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Xo(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const C1 = /* @__PURE__ */ d(Eo, [["render", Xo]]), Zo = r({
  name: "FiCommand",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function No(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const k1 = /* @__PURE__ */ d(Zo, [["render", No]]), Jo = r({
  name: "FiCompass",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ko(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, null, -1),
      s("polygon", { points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const m1 = /* @__PURE__ */ d(Jo, [["render", Ko]]), Yo = r({
  name: "FiCopy",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Qo(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("rect", {
        x: "9",
        y: "9",
        width: "13",
        height: "13",
        rx: "2",
        ry: "2"
      }, null, -1),
      s("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const B1 = /* @__PURE__ */ d(Yo, [["render", Qo]]), es = r({
  name: "FiCornerDownLeft",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function os(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "9 10 4 15 9 20" }, null, -1),
      s("path", { d: "M20 4v7a4 4 0 0 1-4 4H4" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const $1 = /* @__PURE__ */ d(es, [["render", os]]), ss = r({
  name: "FiCornerDownRight",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ts(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "15 10 20 15 15 20" }, null, -1),
      s("path", { d: "M4 4v7a4 4 0 0 0 4 4h12" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const g1 = /* @__PURE__ */ d(ss, [["render", ts]]), rs = r({
  name: "FiCornerLeftDown",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ls(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "14 15 9 20 4 15" }, null, -1),
      s("path", { d: "M20 4h-7a4 4 0 0 0-4 4v12" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const S1 = /* @__PURE__ */ d(rs, [["render", ls]]), ns = r({
  name: "FiCornerLeftUp",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function is(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "14 9 9 4 4 9" }, null, -1),
      s("path", { d: "M20 20h-7a4 4 0 0 1-4-4V4" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const v1 = /* @__PURE__ */ d(ns, [["render", is]]), as = r({
  name: "FiCornerRightDown",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function cs(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "10 15 15 20 20 15" }, null, -1),
      s("path", { d: "M4 4h7a4 4 0 0 1 4 4v12" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const w1 = /* @__PURE__ */ d(as, [["render", cs]]), us = r({
  name: "FiCornerRightUp",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ps(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "10 9 15 4 20 9" }, null, -1),
      s("path", { d: "M4 20h7a4 4 0 0 0 4-4V4" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const z1 = /* @__PURE__ */ d(us, [["render", ps]]), ds = r({
  name: "FiCornerUpLeft",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ys(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "9 14 4 9 9 4" }, null, -1),
      s("path", { d: "M20 20v-7a4 4 0 0 0-4-4H4" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const h1 = /* @__PURE__ */ d(ds, [["render", ys]]), fs = r({
  name: "FiCornerUpRight",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Cs(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "15 14 20 9 15 4" }, null, -1),
      s("path", { d: "M4 20v-7a4 4 0 0 1 4-4h12" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const L1 = /* @__PURE__ */ d(fs, [["render", Cs]]), ks = r({
  name: "FiCpu",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ms(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("rect", {
        x: "4",
        y: "4",
        width: "16",
        height: "16",
        rx: "2",
        ry: "2"
      }, null, -1),
      s("rect", {
        x: "9",
        y: "9",
        width: "6",
        height: "6"
      }, null, -1),
      s("line", {
        x1: "9",
        y1: "1",
        x2: "9",
        y2: "4"
      }, null, -1),
      s("line", {
        x1: "15",
        y1: "1",
        x2: "15",
        y2: "4"
      }, null, -1),
      s("line", {
        x1: "9",
        y1: "20",
        x2: "9",
        y2: "23"
      }, null, -1),
      s("line", {
        x1: "15",
        y1: "20",
        x2: "15",
        y2: "23"
      }, null, -1),
      s("line", {
        x1: "20",
        y1: "9",
        x2: "23",
        y2: "9"
      }, null, -1),
      s("line", {
        x1: "20",
        y1: "14",
        x2: "23",
        y2: "14"
      }, null, -1),
      s("line", {
        x1: "1",
        y1: "9",
        x2: "4",
        y2: "9"
      }, null, -1),
      s("line", {
        x1: "1",
        y1: "14",
        x2: "4",
        y2: "14"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const F1 = /* @__PURE__ */ d(ks, [["render", ms]]), Bs = r({
  name: "FiCreditCard",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function $s(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("rect", {
        x: "1",
        y: "4",
        width: "22",
        height: "16",
        rx: "2",
        ry: "2"
      }, null, -1),
      s("line", {
        x1: "1",
        y1: "10",
        x2: "23",
        y2: "10"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const I1 = /* @__PURE__ */ d(Bs, [["render", $s]]), gs = r({
  name: "FiCrop",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ss(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M6.13 1L6 16a2 2 0 0 0 2 2h15" }, null, -1),
      s("path", { d: "M1 6.13L16 6a2 2 0 0 1 2 2v15" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const j1 = /* @__PURE__ */ d(gs, [["render", Ss]]), vs = r({
  name: "FiCrosshair",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ws(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, null, -1),
      s("line", {
        x1: "22",
        y1: "12",
        x2: "18",
        y2: "12"
      }, null, -1),
      s("line", {
        x1: "6",
        y1: "12",
        x2: "2",
        y2: "12"
      }, null, -1),
      s("line", {
        x1: "12",
        y1: "6",
        x2: "12",
        y2: "2"
      }, null, -1),
      s("line", {
        x1: "12",
        y1: "22",
        x2: "12",
        y2: "18"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const x1 = /* @__PURE__ */ d(vs, [["render", ws]]), zs = r({
  name: "FiDatabase",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function hs(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("ellipse", {
        cx: "12",
        cy: "5",
        rx: "9",
        ry: "3"
      }, null, -1),
      s("path", { d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" }, null, -1),
      s("path", { d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const b1 = /* @__PURE__ */ d(zs, [["render", hs]]), Ls = r({
  name: "FiDelete",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Fs(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" }, null, -1),
      s("line", {
        x1: "18",
        y1: "9",
        x2: "12",
        y2: "15"
      }, null, -1),
      s("line", {
        x1: "12",
        y1: "9",
        x2: "18",
        y2: "15"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const O1 = /* @__PURE__ */ d(Ls, [["render", Fs]]), Is = r({
  name: "FiDisc",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function js(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, null, -1),
      s("circle", {
        cx: "12",
        cy: "12",
        r: "3"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const W1 = /* @__PURE__ */ d(Is, [["render", js]]), xs = r({
  name: "FiDivide",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function bs(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "6",
        r: "2"
      }, null, -1),
      s("line", {
        x1: "5",
        y1: "12",
        x2: "19",
        y2: "12"
      }, null, -1),
      s("circle", {
        cx: "12",
        cy: "18",
        r: "2"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const _1 = /* @__PURE__ */ d(xs, [["render", bs]]), Os = r({
  name: "FiDivideCircle",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ws(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("line", {
        x1: "8",
        y1: "12",
        x2: "16",
        y2: "12"
      }, null, -1),
      s("line", {
        x1: "12",
        y1: "16",
        x2: "12",
        y2: "16"
      }, null, -1),
      s("line", {
        x1: "12",
        y1: "8",
        x2: "12",
        y2: "8"
      }, null, -1),
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const M1 = /* @__PURE__ */ d(Os, [["render", Ws]]), _s = r({
  name: "FiDivideSquare",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ms(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("rect", {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }, null, -1),
      s("line", {
        x1: "8",
        y1: "12",
        x2: "16",
        y2: "12"
      }, null, -1),
      s("line", {
        x1: "12",
        y1: "16",
        x2: "12",
        y2: "16"
      }, null, -1),
      s("line", {
        x1: "12",
        y1: "8",
        x2: "12",
        y2: "8"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const A1 = /* @__PURE__ */ d(_s, [["render", Ms]]), As = r({
  name: "FiDollarSign",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Hs(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("line", {
        x1: "12",
        y1: "1",
        x2: "12",
        y2: "23"
      }, null, -1),
      s("path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const H1 = /* @__PURE__ */ d(As, [["render", Hs]]), Vs = r({
  name: "FiDownload",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ps(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }, null, -1),
      s("polyline", { points: "7 10 12 15 17 10" }, null, -1),
      s("line", {
        x1: "12",
        y1: "15",
        x2: "12",
        y2: "3"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const V1 = /* @__PURE__ */ d(Vs, [["render", Ps]]), Ds = r({
  name: "FiDownloadCloud",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ts(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "8 17 12 21 16 17" }, null, -1),
      s("line", {
        x1: "12",
        y1: "12",
        x2: "12",
        y2: "21"
      }, null, -1),
      s("path", { d: "M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const P1 = /* @__PURE__ */ d(Ds, [["render", Ts]]), Us = r({
  name: "FiDribbble",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Rs(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, null, -1),
      s("path", { d: "M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const D1 = /* @__PURE__ */ d(Us, [["render", Rs]]), qs = r({
  name: "FiDroplet",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Gs(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const T1 = /* @__PURE__ */ d(qs, [["render", Gs]]), Es = r({
  name: "FiEdit",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Xs(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }, null, -1),
      s("path", { d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const U1 = /* @__PURE__ */ d(Es, [["render", Xs]]), Zs = r({
  name: "FiEdit2",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ns(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const R1 = /* @__PURE__ */ d(Zs, [["render", Ns]]), Js = r({
  name: "FiEdit3",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ks(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M12 20h9" }, null, -1),
      s("path", { d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const q1 = /* @__PURE__ */ d(Js, [["render", Ks]]), Ys = r({
  name: "FiExternalLink",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Qs(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }, null, -1),
      s("polyline", { points: "15 3 21 3 21 9" }, null, -1),
      s("line", {
        x1: "10",
        y1: "14",
        x2: "21",
        y2: "3"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const G1 = /* @__PURE__ */ d(Ys, [["render", Qs]]), et = r({
  name: "FiEye",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ot(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }, null, -1),
      s("circle", {
        cx: "12",
        cy: "12",
        r: "3"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const E1 = /* @__PURE__ */ d(et, [["render", ot]]), st = r({
  name: "FiEyeOff",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function tt(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" }, null, -1),
      s("line", {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const X1 = /* @__PURE__ */ d(st, [["render", tt]]), rt = r({
  name: "FiFacebook",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function lt(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Z1 = /* @__PURE__ */ d(rt, [["render", lt]]), nt = r({
  name: "FiFastForward",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function it(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polygon", { points: "13 19 22 12 13 5 13 19" }, null, -1),
      s("polygon", { points: "2 19 11 12 2 5 2 19" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const N1 = /* @__PURE__ */ d(nt, [["render", it]]), at = r({
  name: "FiFeather",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ct(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" }, null, -1),
      s("line", {
        x1: "16",
        y1: "8",
        x2: "2",
        y2: "22"
      }, null, -1),
      s("line", {
        x1: "17.5",
        y1: "15",
        x2: "9",
        y2: "15"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const J1 = /* @__PURE__ */ d(at, [["render", ct]]), ut = r({
  name: "FiFigma",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function pt(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" }, null, -1),
      s("path", { d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" }, null, -1),
      s("path", { d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" }, null, -1),
      s("path", { d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" }, null, -1),
      s("path", { d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const K1 = /* @__PURE__ */ d(ut, [["render", pt]]), dt = r({
  name: "FiFile",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function yt(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" }, null, -1),
      s("polyline", { points: "13 2 13 9 20 9" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Y1 = /* @__PURE__ */ d(dt, [["render", yt]]), ft = r({
  name: "FiFileMinus",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ct(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }, null, -1),
      s("polyline", { points: "14 2 14 8 20 8" }, null, -1),
      s("line", {
        x1: "9",
        y1: "15",
        x2: "15",
        y2: "15"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Q1 = /* @__PURE__ */ d(ft, [["render", Ct]]), kt = r({
  name: "FiFilePlus",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function mt(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }, null, -1),
      s("polyline", { points: "14 2 14 8 20 8" }, null, -1),
      s("line", {
        x1: "12",
        y1: "18",
        x2: "12",
        y2: "12"
      }, null, -1),
      s("line", {
        x1: "9",
        y1: "15",
        x2: "15",
        y2: "15"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const ep = /* @__PURE__ */ d(kt, [["render", mt]]), Bt = r({
  name: "FiFileText",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function $t(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }, null, -1),
      s("polyline", { points: "14 2 14 8 20 8" }, null, -1),
      s("line", {
        x1: "16",
        y1: "13",
        x2: "8",
        y2: "13"
      }, null, -1),
      s("line", {
        x1: "16",
        y1: "17",
        x2: "8",
        y2: "17"
      }, null, -1),
      s("polyline", { points: "10 9 9 9 8 9" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const op = /* @__PURE__ */ d(Bt, [["render", $t]]), gt = r({
  name: "FiFilm",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function St(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("rect", {
        x: "2",
        y: "2",
        width: "20",
        height: "20",
        rx: "2.18",
        ry: "2.18"
      }, null, -1),
      s("line", {
        x1: "7",
        y1: "2",
        x2: "7",
        y2: "22"
      }, null, -1),
      s("line", {
        x1: "17",
        y1: "2",
        x2: "17",
        y2: "22"
      }, null, -1),
      s("line", {
        x1: "2",
        y1: "12",
        x2: "22",
        y2: "12"
      }, null, -1),
      s("line", {
        x1: "2",
        y1: "7",
        x2: "7",
        y2: "7"
      }, null, -1),
      s("line", {
        x1: "2",
        y1: "17",
        x2: "7",
        y2: "17"
      }, null, -1),
      s("line", {
        x1: "17",
        y1: "17",
        x2: "22",
        y2: "17"
      }, null, -1),
      s("line", {
        x1: "17",
        y1: "7",
        x2: "22",
        y2: "7"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const sp = /* @__PURE__ */ d(gt, [["render", St]]), vt = r({
  name: "FiFilter",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function wt(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const tp = /* @__PURE__ */ d(vt, [["render", wt]]), zt = r({
  name: "FiFlag",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ht(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" }, null, -1),
      s("line", {
        x1: "4",
        y1: "22",
        x2: "4",
        y2: "15"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const rp = /* @__PURE__ */ d(zt, [["render", ht]]), Lt = r({
  name: "FiFolder",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ft(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const lp = /* @__PURE__ */ d(Lt, [["render", Ft]]), It = r({
  name: "FiFolderMinus",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function jt(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" }, null, -1),
      s("line", {
        x1: "9",
        y1: "14",
        x2: "15",
        y2: "14"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const np = /* @__PURE__ */ d(It, [["render", jt]]), xt = r({
  name: "FiFolderPlus",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function bt(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" }, null, -1),
      s("line", {
        x1: "12",
        y1: "11",
        x2: "12",
        y2: "17"
      }, null, -1),
      s("line", {
        x1: "9",
        y1: "14",
        x2: "15",
        y2: "14"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const ip = /* @__PURE__ */ d(xt, [["render", bt]]), Ot = r({
  name: "FiFramer",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Wt(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const ap = /* @__PURE__ */ d(Ot, [["render", Wt]]), _t = r({
  name: "FiFrown",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Mt(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, null, -1),
      s("path", { d: "M16 16s-1.5-2-4-2-4 2-4 2" }, null, -1),
      s("line", {
        x1: "9",
        y1: "9",
        x2: "9.01",
        y2: "9"
      }, null, -1),
      s("line", {
        x1: "15",
        y1: "9",
        x2: "15.01",
        y2: "9"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const cp = /* @__PURE__ */ d(_t, [["render", Mt]]), At = r({
  name: "FiGift",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ht(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "20 12 20 22 4 22 4 12" }, null, -1),
      s("rect", {
        x: "2",
        y: "7",
        width: "20",
        height: "5"
      }, null, -1),
      s("line", {
        x1: "12",
        y1: "22",
        x2: "12",
        y2: "7"
      }, null, -1),
      s("path", { d: "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" }, null, -1),
      s("path", { d: "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const up = /* @__PURE__ */ d(At, [["render", Ht]]), Vt = r({
  name: "FiGitBranch",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Pt(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("line", {
        x1: "6",
        y1: "3",
        x2: "6",
        y2: "15"
      }, null, -1),
      s("circle", {
        cx: "18",
        cy: "6",
        r: "3"
      }, null, -1),
      s("circle", {
        cx: "6",
        cy: "18",
        r: "3"
      }, null, -1),
      s("path", { d: "M18 9a9 9 0 0 1-9 9" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const pp = /* @__PURE__ */ d(Vt, [["render", Pt]]), Dt = r({
  name: "FiGitCommit",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Tt(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "4"
      }, null, -1),
      s("line", {
        x1: "1.05",
        y1: "12",
        x2: "7",
        y2: "12"
      }, null, -1),
      s("line", {
        x1: "17.01",
        y1: "12",
        x2: "22.96",
        y2: "12"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const dp = /* @__PURE__ */ d(Dt, [["render", Tt]]), Ut = r({
  name: "FiGithub",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Rt(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const yp = /* @__PURE__ */ d(Ut, [["render", Rt]]), qt = r({
  name: "FiGitlab",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Gt(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const fp = /* @__PURE__ */ d(qt, [["render", Gt]]), Et = r({
  name: "FiGitMerge",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Xt(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "18",
        cy: "18",
        r: "3"
      }, null, -1),
      s("circle", {
        cx: "6",
        cy: "6",
        r: "3"
      }, null, -1),
      s("path", { d: "M6 21V9a9 9 0 0 0 9 9" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Cp = /* @__PURE__ */ d(Et, [["render", Xt]]), Zt = r({
  name: "FiGitPullRequest",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Nt(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "18",
        cy: "18",
        r: "3"
      }, null, -1),
      s("circle", {
        cx: "6",
        cy: "6",
        r: "3"
      }, null, -1),
      s("path", { d: "M13 6h3a2 2 0 0 1 2 2v7" }, null, -1),
      s("line", {
        x1: "6",
        y1: "9",
        x2: "6",
        y2: "21"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const kp = /* @__PURE__ */ d(Zt, [["render", Nt]]), Jt = r({
  name: "FiGlobe",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Kt(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, null, -1),
      s("line", {
        x1: "2",
        y1: "12",
        x2: "22",
        y2: "12"
      }, null, -1),
      s("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const mp = /* @__PURE__ */ d(Jt, [["render", Kt]]), Yt = r({
  name: "FiGrid",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Qt(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("rect", {
        x: "3",
        y: "3",
        width: "7",
        height: "7"
      }, null, -1),
      s("rect", {
        x: "14",
        y: "3",
        width: "7",
        height: "7"
      }, null, -1),
      s("rect", {
        x: "14",
        y: "14",
        width: "7",
        height: "7"
      }, null, -1),
      s("rect", {
        x: "3",
        y: "14",
        width: "7",
        height: "7"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Bp = /* @__PURE__ */ d(Yt, [["render", Qt]]), er = r({
  name: "FiHardDrive",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function or(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("line", {
        x1: "22",
        y1: "12",
        x2: "2",
        y2: "12"
      }, null, -1),
      s("path", { d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" }, null, -1),
      s("line", {
        x1: "6",
        y1: "16",
        x2: "6.01",
        y2: "16"
      }, null, -1),
      s("line", {
        x1: "10",
        y1: "16",
        x2: "10.01",
        y2: "16"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const $p = /* @__PURE__ */ d(er, [["render", or]]), sr = r({
  name: "FiHash",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function tr(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("line", {
        x1: "4",
        y1: "9",
        x2: "20",
        y2: "9"
      }, null, -1),
      s("line", {
        x1: "4",
        y1: "15",
        x2: "20",
        y2: "15"
      }, null, -1),
      s("line", {
        x1: "10",
        y1: "3",
        x2: "8",
        y2: "21"
      }, null, -1),
      s("line", {
        x1: "16",
        y1: "3",
        x2: "14",
        y2: "21"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const gp = /* @__PURE__ */ d(sr, [["render", tr]]), rr = r({
  name: "FiHeadphones",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function lr(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M3 18v-6a9 9 0 0 1 18 0v6" }, null, -1),
      s("path", { d: "M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Sp = /* @__PURE__ */ d(rr, [["render", lr]]), nr = r({
  name: "FiHeart",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ir(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const vp = /* @__PURE__ */ d(nr, [["render", ir]]), ar = r({
  name: "FiHelpCircle",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function cr(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, null, -1),
      s("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }, null, -1),
      s("line", {
        x1: "12",
        y1: "17",
        x2: "12.01",
        y2: "17"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const wp = /* @__PURE__ */ d(ar, [["render", cr]]), ur = r({
  name: "FiHexagon",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function pr(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const zp = /* @__PURE__ */ d(ur, [["render", pr]]), dr = r({
  name: "FiHome",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function yr(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }, null, -1),
      s("polyline", { points: "9 22 9 12 15 12 15 22" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const hp = /* @__PURE__ */ d(dr, [["render", yr]]), fr = r({
  name: "FiImage",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Cr(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("rect", {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }, null, -1),
      s("circle", {
        cx: "8.5",
        cy: "8.5",
        r: "1.5"
      }, null, -1),
      s("polyline", { points: "21 15 16 10 5 21" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Lp = /* @__PURE__ */ d(fr, [["render", Cr]]), kr = r({
  name: "FiInbox",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function mr(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "22 12 16 12 14 15 10 15 8 12 2 12" }, null, -1),
      s("path", { d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Fp = /* @__PURE__ */ d(kr, [["render", mr]]), Br = r({
  name: "FiInfo",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function $r(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, null, -1),
      s("line", {
        x1: "12",
        y1: "16",
        x2: "12",
        y2: "12"
      }, null, -1),
      s("line", {
        x1: "12",
        y1: "8",
        x2: "12.01",
        y2: "8"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Ip = /* @__PURE__ */ d(Br, [["render", $r]]), gr = r({
  name: "FiInstagram",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Sr(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("rect", {
        x: "2",
        y: "2",
        width: "20",
        height: "20",
        rx: "5",
        ry: "5"
      }, null, -1),
      s("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }, null, -1),
      s("line", {
        x1: "17.5",
        y1: "6.5",
        x2: "17.51",
        y2: "6.5"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const jp = /* @__PURE__ */ d(gr, [["render", Sr]]), vr = r({
  name: "FiItalic",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function wr(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("line", {
        x1: "19",
        y1: "4",
        x2: "10",
        y2: "4"
      }, null, -1),
      s("line", {
        x1: "14",
        y1: "20",
        x2: "5",
        y2: "20"
      }, null, -1),
      s("line", {
        x1: "15",
        y1: "4",
        x2: "9",
        y2: "20"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const xp = /* @__PURE__ */ d(vr, [["render", wr]]), zr = r({
  name: "FiKey",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function hr(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const bp = /* @__PURE__ */ d(zr, [["render", hr]]), Lr = r({
  name: "FiLayers",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Fr(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polygon", { points: "12 2 2 7 12 12 22 7 12 2" }, null, -1),
      s("polyline", { points: "2 17 12 22 22 17" }, null, -1),
      s("polyline", { points: "2 12 12 17 22 12" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Op = /* @__PURE__ */ d(Lr, [["render", Fr]]), Ir = r({
  name: "FiLayout",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function jr(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("rect", {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }, null, -1),
      s("line", {
        x1: "3",
        y1: "9",
        x2: "21",
        y2: "9"
      }, null, -1),
      s("line", {
        x1: "9",
        y1: "21",
        x2: "9",
        y2: "9"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Wp = /* @__PURE__ */ d(Ir, [["render", jr]]), xr = r({
  name: "FiLifeBuoy",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function br(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, null, -1),
      s("circle", {
        cx: "12",
        cy: "12",
        r: "4"
      }, null, -1),
      s("line", {
        x1: "4.93",
        y1: "4.93",
        x2: "9.17",
        y2: "9.17"
      }, null, -1),
      s("line", {
        x1: "14.83",
        y1: "14.83",
        x2: "19.07",
        y2: "19.07"
      }, null, -1),
      s("line", {
        x1: "14.83",
        y1: "9.17",
        x2: "19.07",
        y2: "4.93"
      }, null, -1),
      s("line", {
        x1: "14.83",
        y1: "9.17",
        x2: "18.36",
        y2: "5.64"
      }, null, -1),
      s("line", {
        x1: "4.93",
        y1: "19.07",
        x2: "9.17",
        y2: "14.83"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const _p = /* @__PURE__ */ d(xr, [["render", br]]), Or = r({
  name: "FiLink",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Wr(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }, null, -1),
      s("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Mp = /* @__PURE__ */ d(Or, [["render", Wr]]), _r = r({
  name: "FiLink2",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Mr(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" }, null, -1),
      s("line", {
        x1: "8",
        y1: "12",
        x2: "16",
        y2: "12"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Ap = /* @__PURE__ */ d(_r, [["render", Mr]]), Ar = r({
  name: "FiLinkedin",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Hr(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }, null, -1),
      s("rect", {
        x: "2",
        y: "9",
        width: "4",
        height: "12"
      }, null, -1),
      s("circle", {
        cx: "4",
        cy: "4",
        r: "2"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Hp = /* @__PURE__ */ d(Ar, [["render", Hr]]), Vr = r({
  name: "FiList",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Pr(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("line", {
        x1: "8",
        y1: "6",
        x2: "21",
        y2: "6"
      }, null, -1),
      s("line", {
        x1: "8",
        y1: "12",
        x2: "21",
        y2: "12"
      }, null, -1),
      s("line", {
        x1: "8",
        y1: "18",
        x2: "21",
        y2: "18"
      }, null, -1),
      s("line", {
        x1: "3",
        y1: "6",
        x2: "3.01",
        y2: "6"
      }, null, -1),
      s("line", {
        x1: "3",
        y1: "12",
        x2: "3.01",
        y2: "12"
      }, null, -1),
      s("line", {
        x1: "3",
        y1: "18",
        x2: "3.01",
        y2: "18"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Vp = /* @__PURE__ */ d(Vr, [["render", Pr]]), Dr = r({
  name: "FiLoader",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Tr(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("line", {
        x1: "12",
        y1: "2",
        x2: "12",
        y2: "6"
      }, null, -1),
      s("line", {
        x1: "12",
        y1: "18",
        x2: "12",
        y2: "22"
      }, null, -1),
      s("line", {
        x1: "4.93",
        y1: "4.93",
        x2: "7.76",
        y2: "7.76"
      }, null, -1),
      s("line", {
        x1: "16.24",
        y1: "16.24",
        x2: "19.07",
        y2: "19.07"
      }, null, -1),
      s("line", {
        x1: "2",
        y1: "12",
        x2: "6",
        y2: "12"
      }, null, -1),
      s("line", {
        x1: "18",
        y1: "12",
        x2: "22",
        y2: "12"
      }, null, -1),
      s("line", {
        x1: "4.93",
        y1: "19.07",
        x2: "7.76",
        y2: "16.24"
      }, null, -1),
      s("line", {
        x1: "16.24",
        y1: "7.76",
        x2: "19.07",
        y2: "4.93"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Pp = /* @__PURE__ */ d(Dr, [["render", Tr]]), Ur = r({
  name: "FiLock",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Rr(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("rect", {
        x: "3",
        y: "11",
        width: "18",
        height: "11",
        rx: "2",
        ry: "2"
      }, null, -1),
      s("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Dp = /* @__PURE__ */ d(Ur, [["render", Rr]]), qr = r({
  name: "FiLogIn",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Gr(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" }, null, -1),
      s("polyline", { points: "10 17 15 12 10 7" }, null, -1),
      s("line", {
        x1: "15",
        y1: "12",
        x2: "3",
        y2: "12"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Tp = /* @__PURE__ */ d(qr, [["render", Gr]]), Er = r({
  name: "FiLogOut",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Xr(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }, null, -1),
      s("polyline", { points: "16 17 21 12 16 7" }, null, -1),
      s("line", {
        x1: "21",
        y1: "12",
        x2: "9",
        y2: "12"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Up = /* @__PURE__ */ d(Er, [["render", Xr]]), Zr = r({
  name: "FiMail",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Nr(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" }, null, -1),
      s("polyline", { points: "22,6 12,13 2,6" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Rp = /* @__PURE__ */ d(Zr, [["render", Nr]]), Jr = r({
  name: "FiMap",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Kr(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polygon", { points: "1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" }, null, -1),
      s("line", {
        x1: "8",
        y1: "2",
        x2: "8",
        y2: "18"
      }, null, -1),
      s("line", {
        x1: "16",
        y1: "6",
        x2: "16",
        y2: "22"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const qp = /* @__PURE__ */ d(Jr, [["render", Kr]]), Yr = r({
  name: "FiMapPin",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Qr(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" }, null, -1),
      s("circle", {
        cx: "12",
        cy: "10",
        r: "3"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Gp = /* @__PURE__ */ d(Yr, [["render", Qr]]), el = r({
  name: "FiMaximize",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ol(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Ep = /* @__PURE__ */ d(el, [["render", ol]]), sl = r({
  name: "FiMaximize2",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function tl(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "15 3 21 3 21 9" }, null, -1),
      s("polyline", { points: "9 21 3 21 3 15" }, null, -1),
      s("line", {
        x1: "21",
        y1: "3",
        x2: "14",
        y2: "10"
      }, null, -1),
      s("line", {
        x1: "3",
        y1: "21",
        x2: "10",
        y2: "14"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Xp = /* @__PURE__ */ d(sl, [["render", tl]]), rl = r({
  name: "FiMeh",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ll(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, null, -1),
      s("line", {
        x1: "8",
        y1: "15",
        x2: "16",
        y2: "15"
      }, null, -1),
      s("line", {
        x1: "9",
        y1: "9",
        x2: "9.01",
        y2: "9"
      }, null, -1),
      s("line", {
        x1: "15",
        y1: "9",
        x2: "15.01",
        y2: "9"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Zp = /* @__PURE__ */ d(rl, [["render", ll]]), nl = r({
  name: "FiMenu",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function il(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("line", {
        x1: "3",
        y1: "12",
        x2: "21",
        y2: "12"
      }, null, -1),
      s("line", {
        x1: "3",
        y1: "6",
        x2: "21",
        y2: "6"
      }, null, -1),
      s("line", {
        x1: "3",
        y1: "18",
        x2: "21",
        y2: "18"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Np = /* @__PURE__ */ d(nl, [["render", il]]), al = r({
  name: "FiMessageCircle",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function cl(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Jp = /* @__PURE__ */ d(al, [["render", cl]]), ul = r({
  name: "FiMessageSquare",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function pl(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Kp = /* @__PURE__ */ d(ul, [["render", pl]]), dl = r({
  name: "FiMic",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function yl(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" }, null, -1),
      s("path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }, null, -1),
      s("line", {
        x1: "12",
        y1: "19",
        x2: "12",
        y2: "23"
      }, null, -1),
      s("line", {
        x1: "8",
        y1: "23",
        x2: "16",
        y2: "23"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Yp = /* @__PURE__ */ d(dl, [["render", yl]]), fl = r({
  name: "FiMicOff",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Cl(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("line", {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23"
      }, null, -1),
      s("path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6" }, null, -1),
      s("path", { d: "M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23" }, null, -1),
      s("line", {
        x1: "12",
        y1: "19",
        x2: "12",
        y2: "23"
      }, null, -1),
      s("line", {
        x1: "8",
        y1: "23",
        x2: "16",
        y2: "23"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Qp = /* @__PURE__ */ d(fl, [["render", Cl]]), kl = r({
  name: "FiMinimize",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ml(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const ed = /* @__PURE__ */ d(kl, [["render", ml]]), Bl = r({
  name: "FiMinimize2",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function $l(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "4 14 10 14 10 20" }, null, -1),
      s("polyline", { points: "20 10 14 10 14 4" }, null, -1),
      s("line", {
        x1: "14",
        y1: "10",
        x2: "21",
        y2: "3"
      }, null, -1),
      s("line", {
        x1: "3",
        y1: "21",
        x2: "10",
        y2: "14"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const od = /* @__PURE__ */ d(Bl, [["render", $l]]), gl = r({
  name: "FiMinus",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Sl(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("line", {
        x1: "5",
        y1: "12",
        x2: "19",
        y2: "12"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const sd = /* @__PURE__ */ d(gl, [["render", Sl]]), vl = r({
  name: "FiMinusCircle",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function wl(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, null, -1),
      s("line", {
        x1: "8",
        y1: "12",
        x2: "16",
        y2: "12"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const td = /* @__PURE__ */ d(vl, [["render", wl]]), zl = r({
  name: "FiMinusSquare",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function hl(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("rect", {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }, null, -1),
      s("line", {
        x1: "8",
        y1: "12",
        x2: "16",
        y2: "12"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const rd = /* @__PURE__ */ d(zl, [["render", hl]]), Ll = r({
  name: "FiMonitor",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Fl(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("rect", {
        x: "2",
        y: "3",
        width: "20",
        height: "14",
        rx: "2",
        ry: "2"
      }, null, -1),
      s("line", {
        x1: "8",
        y1: "21",
        x2: "16",
        y2: "21"
      }, null, -1),
      s("line", {
        x1: "12",
        y1: "17",
        x2: "12",
        y2: "21"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const ld = /* @__PURE__ */ d(Ll, [["render", Fl]]), Il = r({
  name: "FiMoon",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function jl(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const nd = /* @__PURE__ */ d(Il, [["render", jl]]), xl = r({
  name: "FiMoreHorizontal",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function bl(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "1"
      }, null, -1),
      s("circle", {
        cx: "19",
        cy: "12",
        r: "1"
      }, null, -1),
      s("circle", {
        cx: "5",
        cy: "12",
        r: "1"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const id = /* @__PURE__ */ d(xl, [["render", bl]]), Ol = r({
  name: "FiMoreVertical",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Wl(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "1"
      }, null, -1),
      s("circle", {
        cx: "12",
        cy: "5",
        r: "1"
      }, null, -1),
      s("circle", {
        cx: "12",
        cy: "19",
        r: "1"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const ad = /* @__PURE__ */ d(Ol, [["render", Wl]]), _l = r({
  name: "FiMousePointer",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ml(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" }, null, -1),
      s("path", { d: "M13 13l6 6" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const cd = /* @__PURE__ */ d(_l, [["render", Ml]]), Al = r({
  name: "FiMove",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Hl(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "5 9 2 12 5 15" }, null, -1),
      s("polyline", { points: "9 5 12 2 15 5" }, null, -1),
      s("polyline", { points: "15 19 12 22 9 19" }, null, -1),
      s("polyline", { points: "19 9 22 12 19 15" }, null, -1),
      s("line", {
        x1: "2",
        y1: "12",
        x2: "22",
        y2: "12"
      }, null, -1),
      s("line", {
        x1: "12",
        y1: "2",
        x2: "12",
        y2: "22"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const ud = /* @__PURE__ */ d(Al, [["render", Hl]]), Vl = r({
  name: "FiMusic",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Pl(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M9 18V5l12-2v13" }, null, -1),
      s("circle", {
        cx: "6",
        cy: "18",
        r: "3"
      }, null, -1),
      s("circle", {
        cx: "18",
        cy: "16",
        r: "3"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const pd = /* @__PURE__ */ d(Vl, [["render", Pl]]), Dl = r({
  name: "FiNavigation",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Tl(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polygon", { points: "3 11 22 2 13 21 11 13 3 11" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const dd = /* @__PURE__ */ d(Dl, [["render", Tl]]), Ul = r({
  name: "FiNavigation2",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Rl(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polygon", { points: "12 2 19 21 12 17 5 21 12 2" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const yd = /* @__PURE__ */ d(Ul, [["render", Rl]]), ql = r({
  name: "FiOctagon",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Gl(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polygon", { points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const fd = /* @__PURE__ */ d(ql, [["render", Gl]]), El = r({
  name: "FiPackage",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Xl(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("line", {
        x1: "16.5",
        y1: "9.4",
        x2: "7.5",
        y2: "4.21"
      }, null, -1),
      s("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }, null, -1),
      s("polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }, null, -1),
      s("line", {
        x1: "12",
        y1: "22.08",
        x2: "12",
        y2: "12"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Cd = /* @__PURE__ */ d(El, [["render", Xl]]), Zl = r({
  name: "FiPaperclip",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Nl(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const kd = /* @__PURE__ */ d(Zl, [["render", Nl]]), Jl = r({
  name: "FiPause",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Kl(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("rect", {
        x: "6",
        y: "4",
        width: "4",
        height: "16"
      }, null, -1),
      s("rect", {
        x: "14",
        y: "4",
        width: "4",
        height: "16"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const md = /* @__PURE__ */ d(Jl, [["render", Kl]]), Yl = r({
  name: "FiPauseCircle",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ql(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, null, -1),
      s("line", {
        x1: "10",
        y1: "15",
        x2: "10",
        y2: "9"
      }, null, -1),
      s("line", {
        x1: "14",
        y1: "15",
        x2: "14",
        y2: "9"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Bd = /* @__PURE__ */ d(Yl, [["render", Ql]]), en = r({
  name: "FiPenTool",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function on(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M12 19l7-7 3 3-7 7-3-3z" }, null, -1),
      s("path", { d: "M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" }, null, -1),
      s("path", { d: "M2 2l7.586 7.586" }, null, -1),
      s("circle", {
        cx: "11",
        cy: "11",
        r: "2"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const $d = /* @__PURE__ */ d(en, [["render", on]]), sn = r({
  name: "FiPercent",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function tn(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("line", {
        x1: "19",
        y1: "5",
        x2: "5",
        y2: "19"
      }, null, -1),
      s("circle", {
        cx: "6.5",
        cy: "6.5",
        r: "2.5"
      }, null, -1),
      s("circle", {
        cx: "17.5",
        cy: "17.5",
        r: "2.5"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const gd = /* @__PURE__ */ d(sn, [["render", tn]]), rn = r({
  name: "FiPhone",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ln(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Sd = /* @__PURE__ */ d(rn, [["render", ln]]), nn = r({
  name: "FiPhoneCall",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function an(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const vd = /* @__PURE__ */ d(nn, [["render", an]]), cn = r({
  name: "FiPhoneForwarded",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function un(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "19 1 23 5 19 9" }, null, -1),
      s("line", {
        x1: "15",
        y1: "5",
        x2: "23",
        y2: "5"
      }, null, -1),
      s("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const wd = /* @__PURE__ */ d(cn, [["render", un]]), pn = r({
  name: "FiPhoneIncoming",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function dn(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "16 2 16 8 22 8" }, null, -1),
      s("line", {
        x1: "23",
        y1: "1",
        x2: "16",
        y2: "8"
      }, null, -1),
      s("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const zd = /* @__PURE__ */ d(pn, [["render", dn]]), yn = r({
  name: "FiPhoneMissed",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function fn(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("line", {
        x1: "23",
        y1: "1",
        x2: "17",
        y2: "7"
      }, null, -1),
      s("line", {
        x1: "17",
        y1: "1",
        x2: "23",
        y2: "7"
      }, null, -1),
      s("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const hd = /* @__PURE__ */ d(yn, [["render", fn]]), Cn = r({
  name: "FiPhoneOff",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function kn(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91" }, null, -1),
      s("line", {
        x1: "23",
        y1: "1",
        x2: "1",
        y2: "23"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Ld = /* @__PURE__ */ d(Cn, [["render", kn]]), mn = r({
  name: "FiPhoneOutgoing",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Bn(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "23 7 23 1 17 1" }, null, -1),
      s("line", {
        x1: "16",
        y1: "8",
        x2: "23",
        y2: "1"
      }, null, -1),
      s("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Fd = /* @__PURE__ */ d(mn, [["render", Bn]]), $n = r({
  name: "FiPieChart",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function gn(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83" }, null, -1),
      s("path", { d: "M22 12A10 10 0 0 0 12 2v10z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Id = /* @__PURE__ */ d($n, [["render", gn]]), Sn = r({
  name: "FiPlay",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function vn(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polygon", { points: "5 3 19 12 5 21 5 3" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const jd = /* @__PURE__ */ d(Sn, [["render", vn]]), wn = r({
  name: "FiPlayCircle",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function zn(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, null, -1),
      s("polygon", { points: "10 8 16 12 10 16 10 8" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const xd = /* @__PURE__ */ d(wn, [["render", zn]]), hn = r({
  name: "FiPlus",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ln(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("line", {
        x1: "12",
        y1: "5",
        x2: "12",
        y2: "19"
      }, null, -1),
      s("line", {
        x1: "5",
        y1: "12",
        x2: "19",
        y2: "12"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const bd = /* @__PURE__ */ d(hn, [["render", Ln]]), Fn = r({
  name: "FiPlusCircle",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function In(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, null, -1),
      s("line", {
        x1: "12",
        y1: "8",
        x2: "12",
        y2: "16"
      }, null, -1),
      s("line", {
        x1: "8",
        y1: "12",
        x2: "16",
        y2: "12"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Od = /* @__PURE__ */ d(Fn, [["render", In]]), jn = r({
  name: "FiPlusSquare",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function xn(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("rect", {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }, null, -1),
      s("line", {
        x1: "12",
        y1: "8",
        x2: "12",
        y2: "16"
      }, null, -1),
      s("line", {
        x1: "8",
        y1: "12",
        x2: "16",
        y2: "12"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Wd = /* @__PURE__ */ d(jn, [["render", xn]]), bn = r({
  name: "FiPocket",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function On(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z" }, null, -1),
      s("polyline", { points: "8 10 12 14 16 10" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const _d = /* @__PURE__ */ d(bn, [["render", On]]), Wn = r({
  name: "FiPower",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function _n(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M18.36 6.64a9 9 0 1 1-12.73 0" }, null, -1),
      s("line", {
        x1: "12",
        y1: "2",
        x2: "12",
        y2: "12"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Md = /* @__PURE__ */ d(Wn, [["render", _n]]), Mn = r({
  name: "FiPrinter",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function An(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "6 9 6 2 18 2 18 9" }, null, -1),
      s("path", { d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" }, null, -1),
      s("rect", {
        x: "6",
        y: "14",
        width: "12",
        height: "8"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Ad = /* @__PURE__ */ d(Mn, [["render", An]]), Hn = r({
  name: "FiRadio",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Vn(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "2"
      }, null, -1),
      s("path", { d: "M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Hd = /* @__PURE__ */ d(Hn, [["render", Vn]]), Pn = r({
  name: "FiRefreshCcw",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Dn(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "1 4 1 10 7 10" }, null, -1),
      s("polyline", { points: "23 20 23 14 17 14" }, null, -1),
      s("path", { d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Vd = /* @__PURE__ */ d(Pn, [["render", Dn]]), Tn = r({
  name: "FiRefreshCw",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Un(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "23 4 23 10 17 10" }, null, -1),
      s("polyline", { points: "1 20 1 14 7 14" }, null, -1),
      s("path", { d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Pd = /* @__PURE__ */ d(Tn, [["render", Un]]), Rn = r({
  name: "FiRepeat",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function qn(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "17 1 21 5 17 9" }, null, -1),
      s("path", { d: "M3 11V9a4 4 0 0 1 4-4h14" }, null, -1),
      s("polyline", { points: "7 23 3 19 7 15" }, null, -1),
      s("path", { d: "M21 13v2a4 4 0 0 1-4 4H3" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Dd = /* @__PURE__ */ d(Rn, [["render", qn]]), Gn = r({
  name: "FiRewind",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function En(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polygon", { points: "11 19 2 12 11 5 11 19" }, null, -1),
      s("polygon", { points: "22 19 13 12 22 5 22 19" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Td = /* @__PURE__ */ d(Gn, [["render", En]]), Xn = r({
  name: "FiRotateCcw",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Zn(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "1 4 1 10 7 10" }, null, -1),
      s("path", { d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Ud = /* @__PURE__ */ d(Xn, [["render", Zn]]), Nn = r({
  name: "FiRotateCw",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Jn(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "23 4 23 10 17 10" }, null, -1),
      s("path", { d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Rd = /* @__PURE__ */ d(Nn, [["render", Jn]]), Kn = r({
  name: "FiRss",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Yn(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M4 11a9 9 0 0 1 9 9" }, null, -1),
      s("path", { d: "M4 4a16 16 0 0 1 16 16" }, null, -1),
      s("circle", {
        cx: "5",
        cy: "19",
        r: "1"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const qd = /* @__PURE__ */ d(Kn, [["render", Yn]]), Qn = r({
  name: "FiSave",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ei(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" }, null, -1),
      s("polyline", { points: "17 21 17 13 7 13 7 21" }, null, -1),
      s("polyline", { points: "7 3 7 8 15 8" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Gd = /* @__PURE__ */ d(Qn, [["render", ei]]), oi = r({
  name: "FiScissors",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function si(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "6",
        cy: "6",
        r: "3"
      }, null, -1),
      s("circle", {
        cx: "6",
        cy: "18",
        r: "3"
      }, null, -1),
      s("line", {
        x1: "20",
        y1: "4",
        x2: "8.12",
        y2: "15.88"
      }, null, -1),
      s("line", {
        x1: "14.47",
        y1: "14.48",
        x2: "20",
        y2: "20"
      }, null, -1),
      s("line", {
        x1: "8.12",
        y1: "8.12",
        x2: "12",
        y2: "12"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Ed = /* @__PURE__ */ d(oi, [["render", si]]), ti = r({
  name: "FiSearch",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ri(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "11",
        cy: "11",
        r: "8"
      }, null, -1),
      s("line", {
        x1: "21",
        y1: "21",
        x2: "16.65",
        y2: "16.65"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Xd = /* @__PURE__ */ d(ti, [["render", ri]]), li = r({
  name: "FiSend",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ni(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("line", {
        x1: "22",
        y1: "2",
        x2: "11",
        y2: "13"
      }, null, -1),
      s("polygon", { points: "22 2 15 22 11 13 2 9 22 2" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Zd = /* @__PURE__ */ d(li, [["render", ni]]), ii = r({
  name: "FiServer",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ai(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("rect", {
        x: "2",
        y: "2",
        width: "20",
        height: "8",
        rx: "2",
        ry: "2"
      }, null, -1),
      s("rect", {
        x: "2",
        y: "14",
        width: "20",
        height: "8",
        rx: "2",
        ry: "2"
      }, null, -1),
      s("line", {
        x1: "6",
        y1: "6",
        x2: "6.01",
        y2: "6"
      }, null, -1),
      s("line", {
        x1: "6",
        y1: "18",
        x2: "6.01",
        y2: "18"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Nd = /* @__PURE__ */ d(ii, [["render", ai]]), ci = r({
  name: "FiSettings",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ui(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "3"
      }, null, -1),
      s("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Jd = /* @__PURE__ */ d(ci, [["render", ui]]), pi = r({
  name: "FiShare",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function di(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" }, null, -1),
      s("polyline", { points: "16 6 12 2 8 6" }, null, -1),
      s("line", {
        x1: "12",
        y1: "2",
        x2: "12",
        y2: "15"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Kd = /* @__PURE__ */ d(pi, [["render", di]]), yi = r({
  name: "FiShare2",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function fi(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "18",
        cy: "5",
        r: "3"
      }, null, -1),
      s("circle", {
        cx: "6",
        cy: "12",
        r: "3"
      }, null, -1),
      s("circle", {
        cx: "18",
        cy: "19",
        r: "3"
      }, null, -1),
      s("line", {
        x1: "8.59",
        y1: "13.51",
        x2: "15.42",
        y2: "17.49"
      }, null, -1),
      s("line", {
        x1: "15.41",
        y1: "6.51",
        x2: "8.59",
        y2: "10.49"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Yd = /* @__PURE__ */ d(yi, [["render", fi]]), Ci = r({
  name: "FiShield",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ki(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Qd = /* @__PURE__ */ d(Ci, [["render", ki]]), mi = r({
  name: "FiShieldOff",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Bi(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18" }, null, -1),
      s("path", { d: "M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38" }, null, -1),
      s("line", {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const e2 = /* @__PURE__ */ d(mi, [["render", Bi]]), $i = r({
  name: "FiShoppingBag",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function gi(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" }, null, -1),
      s("line", {
        x1: "3",
        y1: "6",
        x2: "21",
        y2: "6"
      }, null, -1),
      s("path", { d: "M16 10a4 4 0 0 1-8 0" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const o2 = /* @__PURE__ */ d($i, [["render", gi]]), Si = r({
  name: "FiShoppingCart",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function vi(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "9",
        cy: "21",
        r: "1"
      }, null, -1),
      s("circle", {
        cx: "20",
        cy: "21",
        r: "1"
      }, null, -1),
      s("path", { d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const s2 = /* @__PURE__ */ d(Si, [["render", vi]]), wi = r({
  name: "FiShuffle",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function zi(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "16 3 21 3 21 8" }, null, -1),
      s("line", {
        x1: "4",
        y1: "20",
        x2: "21",
        y2: "3"
      }, null, -1),
      s("polyline", { points: "21 16 21 21 16 21" }, null, -1),
      s("line", {
        x1: "15",
        y1: "15",
        x2: "21",
        y2: "21"
      }, null, -1),
      s("line", {
        x1: "4",
        y1: "4",
        x2: "9",
        y2: "9"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const t2 = /* @__PURE__ */ d(wi, [["render", zi]]), hi = r({
  name: "FiSidebar",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Li(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("rect", {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }, null, -1),
      s("line", {
        x1: "9",
        y1: "3",
        x2: "9",
        y2: "21"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const r2 = /* @__PURE__ */ d(hi, [["render", Li]]), Fi = r({
  name: "FiSkipBack",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ii(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polygon", { points: "19 20 9 12 19 4 19 20" }, null, -1),
      s("line", {
        x1: "5",
        y1: "19",
        x2: "5",
        y2: "5"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const l2 = /* @__PURE__ */ d(Fi, [["render", Ii]]), ji = r({
  name: "FiSkipForward",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function xi(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polygon", { points: "5 4 15 12 5 20 5 4" }, null, -1),
      s("line", {
        x1: "19",
        y1: "5",
        x2: "19",
        y2: "19"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const n2 = /* @__PURE__ */ d(ji, [["render", xi]]), bi = r({
  name: "FiSlack",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Oi(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z" }, null, -1),
      s("path", { d: "M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" }, null, -1),
      s("path", { d: "M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z" }, null, -1),
      s("path", { d: "M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z" }, null, -1),
      s("path", { d: "M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z" }, null, -1),
      s("path", { d: "M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" }, null, -1),
      s("path", { d: "M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z" }, null, -1),
      s("path", { d: "M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const i2 = /* @__PURE__ */ d(bi, [["render", Oi]]), Wi = r({
  name: "FiSlash",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function _i(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, null, -1),
      s("line", {
        x1: "4.93",
        y1: "4.93",
        x2: "19.07",
        y2: "19.07"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const a2 = /* @__PURE__ */ d(Wi, [["render", _i]]), Mi = r({
  name: "FiSliders",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ai(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("line", {
        x1: "4",
        y1: "21",
        x2: "4",
        y2: "14"
      }, null, -1),
      s("line", {
        x1: "4",
        y1: "10",
        x2: "4",
        y2: "3"
      }, null, -1),
      s("line", {
        x1: "12",
        y1: "21",
        x2: "12",
        y2: "12"
      }, null, -1),
      s("line", {
        x1: "12",
        y1: "8",
        x2: "12",
        y2: "3"
      }, null, -1),
      s("line", {
        x1: "20",
        y1: "21",
        x2: "20",
        y2: "16"
      }, null, -1),
      s("line", {
        x1: "20",
        y1: "12",
        x2: "20",
        y2: "3"
      }, null, -1),
      s("line", {
        x1: "1",
        y1: "14",
        x2: "7",
        y2: "14"
      }, null, -1),
      s("line", {
        x1: "9",
        y1: "8",
        x2: "15",
        y2: "8"
      }, null, -1),
      s("line", {
        x1: "17",
        y1: "16",
        x2: "23",
        y2: "16"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const c2 = /* @__PURE__ */ d(Mi, [["render", Ai]]), Hi = r({
  name: "FiSmartphone",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Vi(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("rect", {
        x: "5",
        y: "2",
        width: "14",
        height: "20",
        rx: "2",
        ry: "2"
      }, null, -1),
      s("line", {
        x1: "12",
        y1: "18",
        x2: "12.01",
        y2: "18"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const u2 = /* @__PURE__ */ d(Hi, [["render", Vi]]), Pi = r({
  name: "FiSmile",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Di(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, null, -1),
      s("path", { d: "M8 14s1.5 2 4 2 4-2 4-2" }, null, -1),
      s("line", {
        x1: "9",
        y1: "9",
        x2: "9.01",
        y2: "9"
      }, null, -1),
      s("line", {
        x1: "15",
        y1: "9",
        x2: "15.01",
        y2: "9"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const p2 = /* @__PURE__ */ d(Pi, [["render", Di]]), Ti = r({
  name: "FiSpeaker",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ui(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("rect", {
        x: "4",
        y: "2",
        width: "16",
        height: "20",
        rx: "2",
        ry: "2"
      }, null, -1),
      s("circle", {
        cx: "12",
        cy: "14",
        r: "4"
      }, null, -1),
      s("line", {
        x1: "12",
        y1: "6",
        x2: "12.01",
        y2: "6"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const d2 = /* @__PURE__ */ d(Ti, [["render", Ui]]), Ri = r({
  name: "FiSquare",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function qi(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("rect", {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const y2 = /* @__PURE__ */ d(Ri, [["render", qi]]), Gi = r({
  name: "FiStar",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ei(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const f2 = /* @__PURE__ */ d(Gi, [["render", Ei]]), Xi = r({
  name: "FiStopCircle",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Zi(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, null, -1),
      s("rect", {
        x: "9",
        y: "9",
        width: "6",
        height: "6"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const C2 = /* @__PURE__ */ d(Xi, [["render", Zi]]), Ni = r({
  name: "FiSun",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ji(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "5"
      }, null, -1),
      s("line", {
        x1: "12",
        y1: "1",
        x2: "12",
        y2: "3"
      }, null, -1),
      s("line", {
        x1: "12",
        y1: "21",
        x2: "12",
        y2: "23"
      }, null, -1),
      s("line", {
        x1: "4.22",
        y1: "4.22",
        x2: "5.64",
        y2: "5.64"
      }, null, -1),
      s("line", {
        x1: "18.36",
        y1: "18.36",
        x2: "19.78",
        y2: "19.78"
      }, null, -1),
      s("line", {
        x1: "1",
        y1: "12",
        x2: "3",
        y2: "12"
      }, null, -1),
      s("line", {
        x1: "21",
        y1: "12",
        x2: "23",
        y2: "12"
      }, null, -1),
      s("line", {
        x1: "4.22",
        y1: "19.78",
        x2: "5.64",
        y2: "18.36"
      }, null, -1),
      s("line", {
        x1: "18.36",
        y1: "5.64",
        x2: "19.78",
        y2: "4.22"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const k2 = /* @__PURE__ */ d(Ni, [["render", Ji]]), Ki = r({
  name: "FiSunrise",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Yi(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M17 18a5 5 0 0 0-10 0" }, null, -1),
      s("line", {
        x1: "12",
        y1: "2",
        x2: "12",
        y2: "9"
      }, null, -1),
      s("line", {
        x1: "4.22",
        y1: "10.22",
        x2: "5.64",
        y2: "11.64"
      }, null, -1),
      s("line", {
        x1: "1",
        y1: "18",
        x2: "3",
        y2: "18"
      }, null, -1),
      s("line", {
        x1: "21",
        y1: "18",
        x2: "23",
        y2: "18"
      }, null, -1),
      s("line", {
        x1: "18.36",
        y1: "11.64",
        x2: "19.78",
        y2: "10.22"
      }, null, -1),
      s("line", {
        x1: "23",
        y1: "22",
        x2: "1",
        y2: "22"
      }, null, -1),
      s("polyline", { points: "8 6 12 2 16 6" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const m2 = /* @__PURE__ */ d(Ki, [["render", Yi]]), Qi = r({
  name: "FiSunset",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ea(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M17 18a5 5 0 0 0-10 0" }, null, -1),
      s("line", {
        x1: "12",
        y1: "9",
        x2: "12",
        y2: "2"
      }, null, -1),
      s("line", {
        x1: "4.22",
        y1: "10.22",
        x2: "5.64",
        y2: "11.64"
      }, null, -1),
      s("line", {
        x1: "1",
        y1: "18",
        x2: "3",
        y2: "18"
      }, null, -1),
      s("line", {
        x1: "21",
        y1: "18",
        x2: "23",
        y2: "18"
      }, null, -1),
      s("line", {
        x1: "18.36",
        y1: "11.64",
        x2: "19.78",
        y2: "10.22"
      }, null, -1),
      s("line", {
        x1: "23",
        y1: "22",
        x2: "1",
        y2: "22"
      }, null, -1),
      s("polyline", { points: "16 5 12 9 8 5" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const B2 = /* @__PURE__ */ d(Qi, [["render", ea]]), oa = r({
  name: "FiTable",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function sa(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const $2 = /* @__PURE__ */ d(oa, [["render", sa]]), ta = r({
  name: "FiTablet",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ra(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("rect", {
        x: "4",
        y: "2",
        width: "16",
        height: "20",
        rx: "2",
        ry: "2"
      }, null, -1),
      s("line", {
        x1: "12",
        y1: "18",
        x2: "12.01",
        y2: "18"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const g2 = /* @__PURE__ */ d(ta, [["render", ra]]), la = r({
  name: "FiTag",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function na(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" }, null, -1),
      s("line", {
        x1: "7",
        y1: "7",
        x2: "7.01",
        y2: "7"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const S2 = /* @__PURE__ */ d(la, [["render", na]]), ia = r({
  name: "FiTarget",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function aa(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, null, -1),
      s("circle", {
        cx: "12",
        cy: "12",
        r: "6"
      }, null, -1),
      s("circle", {
        cx: "12",
        cy: "12",
        r: "2"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const v2 = /* @__PURE__ */ d(ia, [["render", aa]]), ca = r({
  name: "FiTerminal",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ua(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "4 17 10 11 4 5" }, null, -1),
      s("line", {
        x1: "12",
        y1: "19",
        x2: "20",
        y2: "19"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const w2 = /* @__PURE__ */ d(ca, [["render", ua]]), pa = r({
  name: "FiThermometer",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function da(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const z2 = /* @__PURE__ */ d(pa, [["render", da]]), ya = r({
  name: "FiThumbsDown",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function fa(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const h2 = /* @__PURE__ */ d(ya, [["render", fa]]), Ca = r({
  name: "FiThumbsUp",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ka(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const L2 = /* @__PURE__ */ d(Ca, [["render", ka]]), ma = r({
  name: "FiToggleLeft",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ba(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("rect", {
        x: "1",
        y: "5",
        width: "22",
        height: "14",
        rx: "7",
        ry: "7"
      }, null, -1),
      s("circle", {
        cx: "8",
        cy: "12",
        r: "3"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const F2 = /* @__PURE__ */ d(ma, [["render", Ba]]), $a = r({
  name: "FiToggleRight",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ga(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("rect", {
        x: "1",
        y: "5",
        width: "22",
        height: "14",
        rx: "7",
        ry: "7"
      }, null, -1),
      s("circle", {
        cx: "16",
        cy: "12",
        r: "3"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const I2 = /* @__PURE__ */ d($a, [["render", ga]]), Sa = r({
  name: "FiTool",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function va(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const j2 = /* @__PURE__ */ d(Sa, [["render", va]]), wa = r({
  name: "FiTrash",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function za(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "3 6 5 6 21 6" }, null, -1),
      s("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const x2 = /* @__PURE__ */ d(wa, [["render", za]]), ha = r({
  name: "FiTrash2",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function La(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "3 6 5 6 21 6" }, null, -1),
      s("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }, null, -1),
      s("line", {
        x1: "10",
        y1: "11",
        x2: "10",
        y2: "17"
      }, null, -1),
      s("line", {
        x1: "14",
        y1: "11",
        x2: "14",
        y2: "17"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const b2 = /* @__PURE__ */ d(ha, [["render", La]]), Fa = r({
  name: "FiTrello",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ia(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("rect", {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }, null, -1),
      s("rect", {
        x: "7",
        y: "7",
        width: "3",
        height: "9"
      }, null, -1),
      s("rect", {
        x: "14",
        y: "7",
        width: "3",
        height: "5"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const O2 = /* @__PURE__ */ d(Fa, [["render", Ia]]), ja = r({
  name: "FiTrendingDown",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function xa(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "23 18 13.5 8.5 8.5 13.5 1 6" }, null, -1),
      s("polyline", { points: "17 18 23 18 23 12" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const W2 = /* @__PURE__ */ d(ja, [["render", xa]]), ba = r({
  name: "FiTrendingUp",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Oa(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "23 6 13.5 15.5 8.5 10.5 1 18" }, null, -1),
      s("polyline", { points: "17 6 23 6 23 12" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const _2 = /* @__PURE__ */ d(ba, [["render", Oa]]), Wa = r({
  name: "FiTriangle",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function _a(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const M2 = /* @__PURE__ */ d(Wa, [["render", _a]]), Ma = r({
  name: "FiTruck",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Aa(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("rect", {
        x: "1",
        y: "3",
        width: "15",
        height: "13"
      }, null, -1),
      s("polygon", { points: "16 8 20 8 23 11 23 16 16 16 16 8" }, null, -1),
      s("circle", {
        cx: "5.5",
        cy: "18.5",
        r: "2.5"
      }, null, -1),
      s("circle", {
        cx: "18.5",
        cy: "18.5",
        r: "2.5"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const A2 = /* @__PURE__ */ d(Ma, [["render", Aa]]), Ha = r({
  name: "FiTv",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Va(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("rect", {
        x: "2",
        y: "7",
        width: "20",
        height: "15",
        rx: "2",
        ry: "2"
      }, null, -1),
      s("polyline", { points: "17 2 12 7 7 2" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const H2 = /* @__PURE__ */ d(Ha, [["render", Va]]), Pa = r({
  name: "FiTwitch",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Da(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const V2 = /* @__PURE__ */ d(Pa, [["render", Da]]), Ta = r({
  name: "FiTwitter",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ua(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const P2 = /* @__PURE__ */ d(Ta, [["render", Ua]]), Ra = r({
  name: "FiType",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function qa(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "4 7 4 4 20 4 20 7" }, null, -1),
      s("line", {
        x1: "9",
        y1: "20",
        x2: "15",
        y2: "20"
      }, null, -1),
      s("line", {
        x1: "12",
        y1: "4",
        x2: "12",
        y2: "20"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const D2 = /* @__PURE__ */ d(Ra, [["render", qa]]), Ga = r({
  name: "FiUmbrella",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ea(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const T2 = /* @__PURE__ */ d(Ga, [["render", Ea]]), Xa = r({
  name: "FiUnderline",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Za(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" }, null, -1),
      s("line", {
        x1: "4",
        y1: "21",
        x2: "20",
        y2: "21"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const U2 = /* @__PURE__ */ d(Xa, [["render", Za]]), Na = r({
  name: "FiUnlock",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ja(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("rect", {
        x: "3",
        y: "11",
        width: "18",
        height: "11",
        rx: "2",
        ry: "2"
      }, null, -1),
      s("path", { d: "M7 11V7a5 5 0 0 1 9.9-1" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const R2 = /* @__PURE__ */ d(Na, [["render", Ja]]), Ka = r({
  name: "FiUpload",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ya(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }, null, -1),
      s("polyline", { points: "17 8 12 3 7 8" }, null, -1),
      s("line", {
        x1: "12",
        y1: "3",
        x2: "12",
        y2: "15"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const q2 = /* @__PURE__ */ d(Ka, [["render", Ya]]), Qa = r({
  name: "FiUploadCloud",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ec(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "16 16 12 12 8 16" }, null, -1),
      s("line", {
        x1: "12",
        y1: "12",
        x2: "12",
        y2: "21"
      }, null, -1),
      s("path", { d: "M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" }, null, -1),
      s("polyline", { points: "16 16 12 12 8 16" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const G2 = /* @__PURE__ */ d(Qa, [["render", ec]]), oc = r({
  name: "FiUser",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function sc(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }, null, -1),
      s("circle", {
        cx: "12",
        cy: "7",
        r: "4"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const E2 = /* @__PURE__ */ d(oc, [["render", sc]]), tc = r({
  name: "FiUserCheck",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function rc(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }, null, -1),
      s("circle", {
        cx: "8.5",
        cy: "7",
        r: "4"
      }, null, -1),
      s("polyline", { points: "17 11 19 13 23 9" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const X2 = /* @__PURE__ */ d(tc, [["render", rc]]), lc = r({
  name: "FiUserMinus",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function nc(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }, null, -1),
      s("circle", {
        cx: "8.5",
        cy: "7",
        r: "4"
      }, null, -1),
      s("line", {
        x1: "23",
        y1: "11",
        x2: "17",
        y2: "11"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Z2 = /* @__PURE__ */ d(lc, [["render", nc]]), ic = r({
  name: "FiUserPlus",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ac(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }, null, -1),
      s("circle", {
        cx: "8.5",
        cy: "7",
        r: "4"
      }, null, -1),
      s("line", {
        x1: "20",
        y1: "8",
        x2: "20",
        y2: "14"
      }, null, -1),
      s("line", {
        x1: "23",
        y1: "11",
        x2: "17",
        y2: "11"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const N2 = /* @__PURE__ */ d(ic, [["render", ac]]), cc = r({
  name: "FiUsers",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function uc(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }, null, -1),
      s("circle", {
        cx: "9",
        cy: "7",
        r: "4"
      }, null, -1),
      s("path", { d: "M23 21v-2a4 4 0 0 0-3-3.87" }, null, -1),
      s("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const J2 = /* @__PURE__ */ d(cc, [["render", uc]]), pc = r({
  name: "FiUserX",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function dc(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }, null, -1),
      s("circle", {
        cx: "8.5",
        cy: "7",
        r: "4"
      }, null, -1),
      s("line", {
        x1: "18",
        y1: "8",
        x2: "23",
        y2: "13"
      }, null, -1),
      s("line", {
        x1: "23",
        y1: "8",
        x2: "18",
        y2: "13"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const K2 = /* @__PURE__ */ d(pc, [["render", dc]]), yc = r({
  name: "FiVideo",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function fc(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polygon", { points: "23 7 16 12 23 17 23 7" }, null, -1),
      s("rect", {
        x: "1",
        y: "5",
        width: "15",
        height: "14",
        rx: "2",
        ry: "2"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Y2 = /* @__PURE__ */ d(yc, [["render", fc]]), Cc = r({
  name: "FiVideoOff",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function kc(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10" }, null, -1),
      s("line", {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Q2 = /* @__PURE__ */ d(Cc, [["render", kc]]), mc = r({
  name: "FiVoicemail",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Bc(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "5.5",
        cy: "11.5",
        r: "4.5"
      }, null, -1),
      s("circle", {
        cx: "18.5",
        cy: "11.5",
        r: "4.5"
      }, null, -1),
      s("line", {
        x1: "5.5",
        y1: "16",
        x2: "18.5",
        y2: "16"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const ey = /* @__PURE__ */ d(mc, [["render", Bc]]), $c = r({
  name: "FiVolume",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function gc(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const oy = /* @__PURE__ */ d($c, [["render", gc]]), Sc = r({
  name: "FiVolume1",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function vc(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }, null, -1),
      s("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const sy = /* @__PURE__ */ d(Sc, [["render", vc]]), wc = r({
  name: "FiVolume2",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function zc(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }, null, -1),
      s("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const ty = /* @__PURE__ */ d(wc, [["render", zc]]), hc = r({
  name: "FiVolumeX",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Lc(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }, null, -1),
      s("line", {
        x1: "23",
        y1: "9",
        x2: "17",
        y2: "15"
      }, null, -1),
      s("line", {
        x1: "17",
        y1: "9",
        x2: "23",
        y2: "15"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const ry = /* @__PURE__ */ d(hc, [["render", Lc]]), Fc = r({
  name: "FiWatch",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ic(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "7"
      }, null, -1),
      s("polyline", { points: "12 9 12 12 13.5 13.5" }, null, -1),
      s("path", { d: "M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const ly = /* @__PURE__ */ d(Fc, [["render", Ic]]), jc = r({
  name: "FiWifi",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function xc(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M5 12.55a11 11 0 0 1 14.08 0" }, null, -1),
      s("path", { d: "M1.42 9a16 16 0 0 1 21.16 0" }, null, -1),
      s("path", { d: "M8.53 16.11a6 6 0 0 1 6.95 0" }, null, -1),
      s("line", {
        x1: "12",
        y1: "20",
        x2: "12.01",
        y2: "20"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const ny = /* @__PURE__ */ d(jc, [["render", xc]]), bc = r({
  name: "FiWifiOff",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Oc(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("line", {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23"
      }, null, -1),
      s("path", { d: "M16.72 11.06A10.94 10.94 0 0 1 19 12.55" }, null, -1),
      s("path", { d: "M5 12.55a10.94 10.94 0 0 1 5.17-2.39" }, null, -1),
      s("path", { d: "M10.71 5.05A16 16 0 0 1 22.58 9" }, null, -1),
      s("path", { d: "M1.42 9a15.91 15.91 0 0 1 4.7-2.88" }, null, -1),
      s("path", { d: "M8.53 16.11a6 6 0 0 1 6.95 0" }, null, -1),
      s("line", {
        x1: "12",
        y1: "20",
        x2: "12.01",
        y2: "20"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const iy = /* @__PURE__ */ d(bc, [["render", Oc]]), Wc = r({
  name: "FiWind",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function _c(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const ay = /* @__PURE__ */ d(Wc, [["render", _c]]), Mc = r({
  name: "FiX",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ac(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
      }, null, -1),
      s("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const cy = /* @__PURE__ */ d(Mc, [["render", Ac]]), Hc = r({
  name: "FiXCircle",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Vc(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }, null, -1),
      s("line", {
        x1: "15",
        y1: "9",
        x2: "9",
        y2: "15"
      }, null, -1),
      s("line", {
        x1: "9",
        y1: "9",
        x2: "15",
        y2: "15"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const uy = /* @__PURE__ */ d(Hc, [["render", Vc]]), Pc = r({
  name: "FiXOctagon",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Dc(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polygon", { points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" }, null, -1),
      s("line", {
        x1: "15",
        y1: "9",
        x2: "9",
        y2: "15"
      }, null, -1),
      s("line", {
        x1: "9",
        y1: "9",
        x2: "15",
        y2: "15"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const py = /* @__PURE__ */ d(Pc, [["render", Dc]]), Tc = r({
  name: "FiXSquare",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Uc(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("rect", {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }, null, -1),
      s("line", {
        x1: "9",
        y1: "9",
        x2: "15",
        y2: "15"
      }, null, -1),
      s("line", {
        x1: "15",
        y1: "9",
        x2: "9",
        y2: "15"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const dy = /* @__PURE__ */ d(Tc, [["render", Uc]]), Rc = r({
  name: "FiYoutube",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function qc(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("path", { d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" }, null, -1),
      s("polygon", { points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const yy = /* @__PURE__ */ d(Rc, [["render", qc]]), Gc = r({
  name: "FiZap",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ec(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const fy = /* @__PURE__ */ d(Gc, [["render", Ec]]), Xc = r({
  name: "FiZapOff",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Zc(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("polyline", { points: "12.41 6.75 13 2 10.57 4.92" }, null, -1),
      s("polyline", { points: "18.57 12.91 21 10 15.66 10" }, null, -1),
      s("polyline", { points: "8 8 3 14 12 14 11 22 16 16" }, null, -1),
      s("line", {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Cy = /* @__PURE__ */ d(Xc, [["render", Zc]]), Nc = r({
  name: "FiZoomIn",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Jc(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "11",
        cy: "11",
        r: "8"
      }, null, -1),
      s("line", {
        x1: "21",
        y1: "21",
        x2: "16.65",
        y2: "16.65"
      }, null, -1),
      s("line", {
        x1: "11",
        y1: "8",
        x2: "11",
        y2: "14"
      }, null, -1),
      s("line", {
        x1: "8",
        y1: "11",
        x2: "14",
        y2: "11"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const ky = /* @__PURE__ */ d(Nc, [["render", Jc]]), Kc = r({
  name: "FiZoomOut",
  components: {
    BaseIcon: p
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: "currentColor"
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Yc(e, o, y, f, C, k) {
  const t = l("BaseIcon");
  return i(), n(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: a(e.style),
    viewBox: e.viewBox
  }, {
    default: u(() => o[0] || (o[0] = [
      s("circle", {
        cx: "11",
        cy: "11",
        r: "8"
      }, null, -1),
      s("line", {
        x1: "21",
        y1: "21",
        x2: "16.65",
        y2: "16.65"
      }, null, -1),
      s("line", {
        x1: "8",
        y1: "11",
        x2: "14",
        y2: "11"
      }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const my = /* @__PURE__ */ d(Kc, [["render", Yc]]);
export {
  e1 as $,
  Iu as A,
  ju as B,
  xu as C,
  bu as D,
  Ou as E,
  ou as F,
  Wu as G,
  _u as H,
  Mu as I,
  Au as J,
  Hu as K,
  Vu as L,
  Pu as M,
  Du as N,
  Tu as O,
  Uu as P,
  Ru as Q,
  qu as R,
  Gu as S,
  Eu as T,
  Xu as U,
  Zu as V,
  Nu as W,
  Ju as X,
  Ku as Y,
  Yu as Z,
  Qu as _,
  su as a,
  up as a$,
  o1 as a0,
  s1 as a1,
  t1 as a2,
  r1 as a3,
  l1 as a4,
  n1 as a5,
  i1 as a6,
  a1 as a7,
  c1 as a8,
  u1 as a9,
  H1 as aA,
  V1 as aB,
  P1 as aC,
  D1 as aD,
  T1 as aE,
  U1 as aF,
  R1 as aG,
  q1 as aH,
  G1 as aI,
  E1 as aJ,
  X1 as aK,
  Z1 as aL,
  N1 as aM,
  J1 as aN,
  K1 as aO,
  Y1 as aP,
  Q1 as aQ,
  ep as aR,
  op as aS,
  sp as aT,
  tp as aU,
  rp as aV,
  lp as aW,
  np as aX,
  ip as aY,
  ap as aZ,
  cp as a_,
  p1 as aa,
  d1 as ab,
  y1 as ac,
  f1 as ad,
  C1 as ae,
  k1 as af,
  m1 as ag,
  B1 as ah,
  $1 as ai,
  g1 as aj,
  S1 as ak,
  v1 as al,
  w1 as am,
  z1 as an,
  h1 as ao,
  L1 as ap,
  F1 as aq,
  I1 as ar,
  j1 as as,
  x1 as at,
  b1 as au,
  O1 as av,
  W1 as aw,
  _1 as ax,
  M1 as ay,
  A1 as az,
  tu as b,
  gd as b$,
  pp as b0,
  dp as b1,
  yp as b2,
  fp as b3,
  Cp as b4,
  kp as b5,
  mp as b6,
  Bp as b7,
  $p as b8,
  gp as b9,
  Xp as bA,
  Zp as bB,
  Np as bC,
  Jp as bD,
  Kp as bE,
  Yp as bF,
  Qp as bG,
  ed as bH,
  od as bI,
  sd as bJ,
  td as bK,
  rd as bL,
  ld as bM,
  nd as bN,
  id as bO,
  ad as bP,
  cd as bQ,
  ud as bR,
  pd as bS,
  dd as bT,
  yd as bU,
  fd as bV,
  Cd as bW,
  kd as bX,
  md as bY,
  Bd as bZ,
  $d as b_,
  Sp as ba,
  vp as bb,
  wp as bc,
  zp as bd,
  hp as be,
  Lp as bf,
  Fp as bg,
  Ip as bh,
  jp as bi,
  xp as bj,
  bp as bk,
  Op as bl,
  Wp as bm,
  _p as bn,
  Mp as bo,
  Ap as bp,
  Hp as bq,
  Vp as br,
  Pp as bs,
  Dp as bt,
  Tp as bu,
  Up as bv,
  Rp as bw,
  qp as bx,
  Gp as by,
  Ep as bz,
  ru as c,
  x2 as c$,
  Sd as c0,
  vd as c1,
  wd as c2,
  zd as c3,
  hd as c4,
  Ld as c5,
  Fd as c6,
  Id as c7,
  jd as c8,
  xd as c9,
  t2 as cA,
  r2 as cB,
  l2 as cC,
  n2 as cD,
  i2 as cE,
  a2 as cF,
  c2 as cG,
  u2 as cH,
  p2 as cI,
  d2 as cJ,
  y2 as cK,
  f2 as cL,
  C2 as cM,
  k2 as cN,
  m2 as cO,
  B2 as cP,
  $2 as cQ,
  g2 as cR,
  S2 as cS,
  v2 as cT,
  w2 as cU,
  z2 as cV,
  h2 as cW,
  L2 as cX,
  F2 as cY,
  I2 as cZ,
  j2 as c_,
  bd as ca,
  Od as cb,
  Wd as cc,
  _d as cd,
  Md as ce,
  Ad as cf,
  Hd as cg,
  Vd as ch,
  Pd as ci,
  Dd as cj,
  Td as ck,
  Ud as cl,
  Rd as cm,
  qd as cn,
  Gd as co,
  Ed as cp,
  Xd as cq,
  Zd as cr,
  Nd as cs,
  Jd as ct,
  Kd as cu,
  Yd as cv,
  Qd as cw,
  e2 as cx,
  o2 as cy,
  s2 as cz,
  lu as d,
  b2 as d0,
  O2 as d1,
  W2 as d2,
  _2 as d3,
  M2 as d4,
  A2 as d5,
  H2 as d6,
  V2 as d7,
  P2 as d8,
  D2 as d9,
  dy as dA,
  yy as dB,
  fy as dC,
  Cy as dD,
  ky as dE,
  my as dF,
  T2 as da,
  U2 as db,
  R2 as dc,
  q2 as dd,
  G2 as de,
  E2 as df,
  X2 as dg,
  Z2 as dh,
  N2 as di,
  J2 as dj,
  K2 as dk,
  Y2 as dl,
  Q2 as dm,
  ey as dn,
  oy as dp,
  sy as dq,
  ty as dr,
  ry as ds,
  ly as dt,
  ny as du,
  iy as dv,
  ay as dw,
  cy as dx,
  uy as dy,
  py as dz,
  nu as e,
  iu as f,
  au as g,
  cu as h,
  uu as i,
  pu as j,
  du as k,
  yu as l,
  fu as m,
  Cu as n,
  ku as o,
  mu as p,
  Bu as q,
  $u as r,
  gu as s,
  Su as t,
  vu as u,
  wu as v,
  zu as w,
  hu as x,
  Lu as y,
  Fu as z
};
