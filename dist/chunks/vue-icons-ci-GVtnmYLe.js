import { defineComponent as a, resolveComponent as l, createBlock as r, openBlock as n, normalizeStyle as i, normalizeClass as c, withCtx as p, createElementVNode as s } from "vue";
import { B as d, _ as u } from "./vendor-D7CANDSR.js";
const g = a({
  name: "CiAirportSign1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function B(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Airport_Sign_1",
        "data-name": "Airport Sign 1"
      }, [
        s("g", null, [
          s("path", { d: "M13.105,12.609v2.279a.119.119,0,0,0,.061.105l.622.355a.49.49,0,0,1,.242.365l.049.413a.243.243,0,0,1-.307.263l-1.641-.459a.486.486,0,0,0-.262,0l-1.641.459a.244.244,0,0,1-.308-.263l.05-.413a.487.487,0,0,1,.242-.365l.621-.355a.12.12,0,0,0,.062-.105V12.609a.122.122,0,0,0-.137-.121l-3.485.435A.242.242,0,0,1,7,12.682v-.624a.486.486,0,0,1,.316-.455l3.5-1.313a.122.122,0,0,0,.079-.114V9.435a4.756,4.756,0,0,1,.1-.981h0a1.015,1.015,0,0,1,1.2-.833,1.063,1.063,0,0,1,.819.9l.015.094a6.3,6.3,0,0,1,.077.976v.587a.121.121,0,0,0,.079.114l3.5,1.313a.486.486,0,0,1,.316.455v.624a.243.243,0,0,1-.274.241l-3.484-.435A.121.121,0,0,0,13.105,12.609Z" }),
          s("path", { d: "M12,21.933A9.933,9.933,0,1,1,21.933,12,9.944,9.944,0,0,1,12,21.933ZM12,3.067A8.933,8.933,0,1,0,20.933,12,8.943,8.943,0,0,0,12,3.067Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Jl = /* @__PURE__ */ u(g, [["render", B]]), h = a({
  name: "CiAlarmOff",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function v(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Alarm_Off",
        "data-name": "Alarm Off"
      }, [
        s("g", null, [
          s("path", { d: "M4.564,3.856a.5.5,0,0,0-.7.71l.29.29-.5.5a2.019,2.019,0,0,0-.01,2.85l.65.67a8.273,8.273,0,0,0-.71,3.39A8.427,8.427,0,0,0,12,20.686a8.275,8.275,0,0,0,5.72-2.26c.57.57,1.14,1.15,1.71,1.71a.5.5,0,0,0,.71-.7Zm-.21,2.21.51-.5c.32.33.65.65.98.98a6.38,6.38,0,0,0-1.06,1.4l-.43-.44A1.032,1.032,0,0,1,4.354,6.066ZM12,19.686a7.43,7.43,0,0,1-7.42-7.42,7.312,7.312,0,0,1,1.96-5.02l2.59,2.59q3.945,3.945,7.88,7.88A7.27,7.27,0,0,1,12,19.686Z" }),
          s("path", { d: "M20.354,8.216a2.04,2.04,0,0,0,0-2.86l-1.46-1.45a2.01,2.01,0,0,0-2.85,0l-.68.67a8.528,8.528,0,0,0-6.38-.17c-.6.23-.34,1.19.27.97a7.419,7.419,0,0,1,9.64,9.64c-.22.6.74.86.97.26a8.506,8.506,0,0,0-.17-6.39Zm-2.4-1.9a8.068,8.068,0,0,0-1.65-1.27l.44-.43a1.026,1.026,0,0,1,1.45,0l1.45,1.45a1.014,1.014,0,0,1,0,1.44l-.43.44A8.262,8.262,0,0,0,17.954,6.316Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Yl = /* @__PURE__ */ u(h, [["render", v]]), $ = a({
  name: "CiAlarmOn",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function S(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Alarm_On",
        "data-name": "Alarm On"
      }, [
        s("g", null, [
          s("path", { d: "M20.352,8.213a2.017,2.017,0,0,0,0-2.851L18.9,3.9a2.038,2.038,0,0,0-2.86,0l-.67.659A8.238,8.238,0,0,0,12,3.852a8.332,8.332,0,0,0-3.39.71L7.962,3.9a2.038,2.038,0,0,0-2.86,0L3.652,5.362a2.02,2.02,0,0,0-.01,2.851l.65.67a8.419,8.419,0,1,0,16.13,3.39,8.4,8.4,0,0,0-.72-3.411ZM4.362,6.062l1.45-1.45a1.016,1.016,0,0,1,1.44,0l.44.43a8.427,8.427,0,0,0-2.91,2.9l-.42-.43A1.027,1.027,0,0,1,4.362,6.062ZM12,19.682a7.415,7.415,0,1,1,7.42-7.409A7.421,7.421,0,0,1,12,19.682Zm7.22-11.75a8.578,8.578,0,0,0-2.91-2.89l.44-.43a1.016,1.016,0,0,1,1.44,0l1.45,1.45a1.027,1.027,0,0,1,0,1.451Z" }),
          s("path", { d: "M17.042,12.763H12a.455.455,0,0,1-.27-.081c-.03-.02-.05-.039-.07-.049a.442.442,0,0,1-.16-.36V7.232a.5.5,0,0,1,1,0v4.531h4.54A.5.5,0,0,1,17.042,12.763Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Xl = /* @__PURE__ */ u($, [["render", S]]), k = a({
  name: "CiAlignBottom",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function w(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Align_Bottom",
        "data-name": "Align Bottom"
      }, [
        s("g", null, [
          s("path", { d: "M3.548,20.922h16.9a.5.5,0,0,0,0-1H3.548a.5.5,0,0,0,0,1Z" }),
          s("path", { d: "M9,18.919H6.565a2.5,2.5,0,0,1-2.5-2.5V5.578a2.5,2.5,0,0,1,2.5-2.5H9a2.5,2.5,0,0,1,2.5,2.5V16.419A2.5,2.5,0,0,1,9,18.919ZM6.565,4.078a1.5,1.5,0,0,0-1.5,1.5V16.419a1.5,1.5,0,0,0,1.5,1.5H9a1.5,1.5,0,0,0,1.5-1.5V5.578A1.5,1.5,0,0,0,9,4.078Z" }),
          s("path", { d: "M17.437,18.919H15a2.5,2.5,0,0,1-2.5-2.5V10.55A2.5,2.5,0,0,1,15,8.05h2.434a2.5,2.5,0,0,1,2.5,2.5v5.869A2.5,2.5,0,0,1,17.437,18.919ZM15,9.05a1.5,1.5,0,0,0-1.5,1.5v5.869a1.5,1.5,0,0,0,1.5,1.5h2.434a1.5,1.5,0,0,0,1.5-1.5V10.55a1.5,1.5,0,0,0-1.5-1.5Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const xl = /* @__PURE__ */ u(k, [["render", w]]), z = a({
  name: "CiAlignCenterH",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Z(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Align_Center-H",
        "data-name": "Align Center-H"
      }, [
        s("path", { d: "M17.42,4.062H12.5v-.51a.5.5,0,0,0-1,0v.51H6.58a2.507,2.507,0,0,0-2.5,2.5V9a2.5,2.5,0,0,0,2.5,2.5H11.5v1H9.06A2.507,2.507,0,0,0,6.56,15v2.44a2.507,2.507,0,0,0,2.5,2.5H11.5v.51a.5.5,0,0,0,1,0v-.51h2.43a2.5,2.5,0,0,0,2.5-2.5V15a2.5,2.5,0,0,0-2.5-2.5H12.5v-1h4.92A2.5,2.5,0,0,0,19.92,9V6.562A2.507,2.507,0,0,0,17.42,4.062ZM11.5,18.942H9.06a1.511,1.511,0,0,1-1.5-1.5V15a1.5,1.5,0,0,1,1.5-1.5H11.5Zm0-8.44H6.58A1.5,1.5,0,0,1,5.08,9V6.562a1.5,1.5,0,0,1,1.5-1.5H11.5Zm3.43,3a1.5,1.5,0,0,1,1.5,1.5v2.44a1.5,1.5,0,0,1-1.5,1.5H12.5V13.5ZM18.92,9a1.5,1.5,0,0,1-1.5,1.5H12.5V5.062h4.92a1.5,1.5,0,0,1,1.5,1.5Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const er = /* @__PURE__ */ u(z, [["render", Z]]), M = a({
  name: "CiAlignCenterV",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function A(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Align_Center-V",
        "data-name": "Align Center-V"
      }, [
        s("path", { d: "M20.446,11.5h-.51V9.07a2.5,2.5,0,0,0-2.5-2.5h-2.43a2.5,2.5,0,0,0-2.5,2.5V11.5H11.5V6.58A2.5,2.5,0,0,0,9,4.08H6.566a2.5,2.5,0,0,0-2.5,2.5V11.5h-.52a.5.5,0,0,0,0,1h.52v4.92a2.5,2.5,0,0,0,2.5,2.5H9a2.5,2.5,0,0,0,2.5-2.5V12.5h1.01v2.43a2.5,2.5,0,0,0,2.5,2.5h2.43a2.5,2.5,0,0,0,2.5-2.5V12.5h.51A.5.5,0,0,0,20.446,11.5ZM10.5,17.42A1.5,1.5,0,0,1,9,18.92H6.566a1.5,1.5,0,0,1-1.5-1.5V12.5H10.5Zm0-5.92H5.066V6.58a1.5,1.5,0,0,1,1.5-1.5H9a1.5,1.5,0,0,1,1.5,1.5Zm8.44,3.43a1.5,1.5,0,0,1-1.5,1.5h-2.43a1.5,1.5,0,0,1-1.5-1.5V12.5h5.43Zm0-3.43h-5.43V9.07a1.5,1.5,0,0,1,1.5-1.5h2.43a1.5,1.5,0,0,1,1.5,1.5Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const sr = /* @__PURE__ */ u(M, [["render", A]]), H = a({
  name: "CiAlignLeft",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function V(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Align_Left",
        "data-name": "Align Left"
      }, [
        s("g", null, [
          s("path", { d: "M3.078,3.548v16.9a.5.5,0,0,0,1,0V3.548a.5.5,0,0,0-1,0Z" }),
          s("path", { d: "M18.422,11.5H7.582A2.5,2.5,0,0,1,5.082,9V6.565a2.5,2.5,0,0,1,2.5-2.5h10.84a2.5,2.5,0,0,1,2.5,2.5V9A2.5,2.5,0,0,1,18.422,11.5ZM7.582,5.065a1.5,1.5,0,0,0-1.5,1.5V9a1.5,1.5,0,0,0,1.5,1.5h10.84a1.5,1.5,0,0,0,1.5-1.5V6.565a1.5,1.5,0,0,0-1.5-1.5Z" }),
          s("path", { d: "M13.451,19.938H7.582a2.5,2.5,0,0,1-2.5-2.5V15a2.5,2.5,0,0,1,2.5-2.5h5.869a2.5,2.5,0,0,1,2.5,2.5v2.436A2.5,2.5,0,0,1,13.451,19.938ZM7.582,13.5a1.5,1.5,0,0,0-1.5,1.5v2.436a1.5,1.5,0,0,0,1.5,1.5h5.869a1.5,1.5,0,0,0,1.5-1.5V15a1.5,1.5,0,0,0-1.5-1.5Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const or = /* @__PURE__ */ u(H, [["render", V]]), I = a({
  name: "CiAlignRight",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function _(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Align_Right",
        "data-name": "Align Right"
      }, [
        s("g", null, [
          s("path", { d: "M19.922,3.548v16.9a.5.5,0,0,0,1,0V3.548a.5.5,0,0,0-1,0Z" }),
          s("path", { d: "M16.419,11.5H5.578A2.5,2.5,0,0,1,3.078,9V6.565a2.5,2.5,0,0,1,2.5-2.5H16.419a2.5,2.5,0,0,1,2.5,2.5V9A2.5,2.5,0,0,1,16.419,11.5ZM5.578,5.065a1.5,1.5,0,0,0-1.5,1.5V9a1.5,1.5,0,0,0,1.5,1.5H16.419a1.5,1.5,0,0,0,1.5-1.5V6.565a1.5,1.5,0,0,0-1.5-1.5Z" }),
          s("path", { d: "M16.419,19.938H10.55a2.5,2.5,0,0,1-2.5-2.5V15a2.5,2.5,0,0,1,2.5-2.5h5.869a2.5,2.5,0,0,1,2.5,2.5v2.436A2.5,2.5,0,0,1,16.419,19.938ZM10.55,13.5A1.5,1.5,0,0,0,9.05,15v2.436a1.5,1.5,0,0,0,1.5,1.5h5.869a1.5,1.5,0,0,0,1.5-1.5V15a1.5,1.5,0,0,0-1.5-1.5Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const tr = /* @__PURE__ */ u(I, [["render", _]]), b = a({
  name: "CiAlignTop",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function O(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Align_Top",
        "data-name": "Align Top"
      }, [
        s("g", null, [
          s("path", { d: "M3.548,4.078h16.9a.5.5,0,0,0,0-1H3.548a.5.5,0,0,0,0,1Z" }),
          s("path", { d: "M9,20.922H6.565a2.5,2.5,0,0,1-2.5-2.5V7.582a2.5,2.5,0,0,1,2.5-2.5H9a2.5,2.5,0,0,1,2.5,2.5v10.84A2.5,2.5,0,0,1,9,20.922ZM6.565,6.082a1.5,1.5,0,0,0-1.5,1.5v10.84a1.5,1.5,0,0,0,1.5,1.5H9a1.5,1.5,0,0,0,1.5-1.5V7.582A1.5,1.5,0,0,0,9,6.082Z" }),
          s("path", { d: "M17.438,15.951H15a2.5,2.5,0,0,1-2.5-2.5V7.582a2.5,2.5,0,0,1,2.5-2.5h2.435a2.5,2.5,0,0,1,2.5,2.5v5.869A2.5,2.5,0,0,1,17.438,15.951ZM15,6.082a1.5,1.5,0,0,0-1.5,1.5v5.869a1.5,1.5,0,0,0,1.5,1.5h2.435a1.5,1.5,0,0,0,1.5-1.5V7.582a1.5,1.5,0,0,0-1.5-1.5Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const ar = /* @__PURE__ */ u(b, [["render", O]]), L = a({
  name: "CiApple",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function j(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Apple" }, [
        s("path", { d: "M14.875,6.612l.05-.05a3.229,3.229,0,0,0,.95-2.58.976.976,0,0,0-.9-.9,3.229,3.229,0,0,0-2.58.95,3.279,3.279,0,0,0-.85,1.46,4.661,4.661,0,0,0-2.69-1.75.5.5,0,1,0-.22.98,3.664,3.664,0,0,1,2.59,2.2,5.577,5.577,0,0,0-1.9-.32,5.847,5.847,0,0,0-5.84,5.84c0,2.98,2.41,8.49,5.84,8.49a5.821,5.821,0,0,0,2.4-.52.683.683,0,0,1,.56,0,5.73,5.73,0,0,0,2.38.52c3.44,0,5.85-5.51,5.85-8.49A5.838,5.838,0,0,0,14.875,6.612Zm-1.77-1.87a2.3,2.3,0,0,1,1.78-.68c0,.06.01.12.01.17a2.326,2.326,0,0,1-.67,1.63,2.359,2.359,0,0,1-1.79.66A2.247,2.247,0,0,1,13.105,4.742Zm1.56,15.19a4.787,4.787,0,0,1-1.97-.43,1.718,1.718,0,0,0-.69-.15,1.649,1.649,0,0,0-.69.15,4.879,4.879,0,0,1-1.99.43c-2.58,0-4.84-4.67-4.84-7.49a4.855,4.855,0,0,1,6.83-4.42,1.56,1.56,0,0,0,.67.15h.02a1.683,1.683,0,0,0,.69-.15,4.777,4.777,0,0,1,1.97-.42,4.852,4.852,0,0,1,4.85,4.84C19.515,15.262,17.245,19.932,14.665,19.932Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const lr = /* @__PURE__ */ u(L, [["render", j]]), P = a({
  name: "CiAt",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function D(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "At" }, [
        s("path", { d: "M12.09,21.925a9.846,9.846,0,0,1-3.838-.747A9.673,9.673,0,0,1,3.005,15.93,10.034,10.034,0,0,1,2.244,12a10.425,10.425,0,0,1,.695-3.8,9.606,9.606,0,0,1,2-3.169A9.269,9.269,0,0,1,8.1,2.862a10.605,10.605,0,0,1,4.175-.787,10.516,10.516,0,0,1,4.334.827A8.437,8.437,0,0,1,19.64,5.119a8.622,8.622,0,0,1,1.707,3.1,9.263,9.263,0,0,1,.377,3.487,5.809,5.809,0,0,1-1.3,3.6A3.6,3.6,0,0,1,17.7,16.473a3.628,3.628,0,0,1-2.162-.609,2.82,2.82,0,0,1-1.119-1.694l.5.106a2.582,2.582,0,0,1-1.3,1.3A4.37,4.37,0,0,1,11.746,16,3.681,3.681,0,0,1,9.88,15.54a3.2,3.2,0,0,1-1.237-1.271A3.843,3.843,0,0,1,8.2,12.4a3.88,3.88,0,0,1,.456-1.926A3.191,3.191,0,0,1,9.919,9.214a3.792,3.792,0,0,1,1.853-.443,4.716,4.716,0,0,1,1.767.364,2.622,2.622,0,0,1,1.383,1.3l-.5.5V9.461a.4.4,0,0,1,.4-.4h.232a.4.4,0,0,1,.4.4v3.518a2.723,2.723,0,0,0,.529,1.674,2.173,2.173,0,0,0,1.853.708,2.281,2.281,0,0,0,1.323-.41,2.938,2.938,0,0,0,.967-1.178,4.947,4.947,0,0,0,.437-1.852,9.439,9.439,0,0,0-.417-3.574A7.285,7.285,0,0,0,18.5,5.588a7.424,7.424,0,0,0-2.679-1.78,9.605,9.605,0,0,0-3.547-.622,9.041,9.041,0,0,0-3.758.741,8.252,8.252,0,0,0-2.773,2,8.8,8.8,0,0,0-1.72,2.838,9.27,9.27,0,0,0-.589,3.262,8.568,8.568,0,0,0,.682,3.408A8.951,8.951,0,0,0,6,18.24a8.707,8.707,0,0,0,2.785,1.892,8.515,8.515,0,0,0,3.389.682,9.851,9.851,0,0,0,2.679-.378,8.451,8.451,0,0,0,2-.831.4.4,0,0,1,.553.158l.1.192a.4.4,0,0,1-.141.526,9.832,9.832,0,0,1-2.391,1.04A10.5,10.5,0,0,1,12.09,21.925ZM11.8,14.859a2.469,2.469,0,0,0,1.786-.649,2.427,2.427,0,0,0,.675-1.839,2.414,2.414,0,0,0-.7-1.886A2.532,2.532,0,0,0,11.8,9.856a2.482,2.482,0,0,0-1.839.649,2.523,2.523,0,0,0-.65,1.866,2.4,2.4,0,0,0,.682,1.865A2.574,2.574,0,0,0,11.8,14.859Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const rr = /* @__PURE__ */ u(P, [["render", D]]), F = a({
  name: "CiAvocado",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function R(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Avocado" }, [
        s("g", null, [
          s("path", { d: "M11.982,21.939a7.759,7.759,0,0,1-.818-.044A7.58,7.58,0,0,1,6.1,9.6a3.578,3.578,0,0,0,.684-2.271,5.128,5.128,0,0,1,3.8-5.085,5.266,5.266,0,0,1,4.6.892,5.185,5.185,0,0,1,2.039,4.14A3.6,3.6,0,0,0,17.9,9.61a7.574,7.574,0,0,1-5.918,12.329Zm.009-18.877a4.538,4.538,0,0,0-1.158.152,4.126,4.126,0,0,0-3.055,4.07,4.532,4.532,0,0,1-.9,2.947,6.555,6.555,0,0,0-1.366,5.231A6.643,6.643,0,0,0,11.271,20.9a6.575,6.575,0,0,0,5.851-10.662,4.453,4.453,0,0,1-.9-2.9,4.214,4.214,0,0,0-4.228-4.273Z" }),
          s("ellipse", {
            cx: "11.999",
            cy: "14.856",
            rx: "2.5",
            ry: "3"
          })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const nr = /* @__PURE__ */ u(F, [["render", R]]), T = a({
  name: "CiBacon",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function q(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Bacon" }, [
        s("path", { d: "M20.605,7.455l-3.49-3.49a.8.8,0,0,0-1.08-.04,1.833,1.833,0,0,1-.93.37,3.787,3.787,0,0,0-2.21,1.12,3.918,3.918,0,0,0-1.13,2.22,1.681,1.681,0,0,1-.53,1.1,1.753,1.753,0,0,1-1.1.53,4.026,4.026,0,0,0-3.35,3.35,1.677,1.677,0,0,1-.53,1.1,1.721,1.721,0,0,1-1.11.53,4.041,4.041,0,0,0-1.62.63,1.1,1.1,0,0,0-.14,1.66l3.5,3.5a.781.781,0,0,0,.55.23.822.822,0,0,0,.53-.19,1.759,1.759,0,0,1,.93-.38,3.8,3.8,0,0,0,2.21-1.12,3.948,3.948,0,0,0,1.14-2.22,1.71,1.71,0,0,1,.52-1.1,1.776,1.776,0,0,1,1.11-.53,4.03,4.03,0,0,0,3.34-3.35,1.66,1.66,0,0,1,.53-1.1,1.721,1.721,0,0,1,1.11-.53,4.018,4.018,0,0,0,1.61-.62,1.091,1.091,0,0,0,.14-1.67ZM4.1,15.7a3.15,3.15,0,0,1,1.24-.47,2.635,2.635,0,0,0,1.63-.81,2.587,2.587,0,0,0,.8-1.61,2.852,2.852,0,0,1,.86-1.7,2.9,2.9,0,0,1,1.7-.86,2.745,2.745,0,0,0,1.62-.8,2.687,2.687,0,0,0,.8-1.62,2.9,2.9,0,0,1,.86-1.7,2.814,2.814,0,0,1,1.69-.85,2.819,2.819,0,0,0,1.24-.48l1.3,1.3a2.362,2.362,0,0,1-.98.35,3.515,3.515,0,0,0-2.95,2.95,2.136,2.136,0,0,1-.67,1.36,2.159,2.159,0,0,1-1.36.67,3.44,3.44,0,0,0-1.96.99,3.351,3.351,0,0,0-.98,1.96,2.355,2.355,0,0,1-2.03,2.03,3.242,3.242,0,0,0-1.58.66L4.1,15.835ZM19.9,8.3a3.059,3.059,0,0,1-1.23.47,2.659,2.659,0,0,0-1.63.81,2.587,2.587,0,0,0-.8,1.61,2.852,2.852,0,0,1-.86,1.7,2.883,2.883,0,0,1-1.69.86,2.812,2.812,0,0,0-2.43,2.42,2.878,2.878,0,0,1-.86,1.7,2.8,2.8,0,0,1-1.68.85,2.808,2.808,0,0,0-1.25.48l-1.3-1.29a2.423,2.423,0,0,1,.97-.35,3.377,3.377,0,0,0,1.96-.99,3.44,3.44,0,0,0,.99-1.96,2.217,2.217,0,0,1,.66-1.36,2.292,2.292,0,0,1,1.36-.67,3.317,3.317,0,0,0,1.96-.99,3.351,3.351,0,0,0,.99-1.96,2.355,2.355,0,0,1,2.03-2.03,3.479,3.479,0,0,0,1.59-.66l1.23,1.23Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const ir = /* @__PURE__ */ u(T, [["render", q]]), U = a({
  name: "CiBadgeDollar",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function G(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("rect", {
        id: "Badge-Dollar",
        "serif:id": "Badge Dollar",
        x: "0",
        y: "0",
        width: "24",
        height: "24",
        style: { fill: "none" }
      }, null, -1),
      s("g", {
        id: "Badge-Dollar1",
        "serif:id": "Badge Dollar"
      }, [
        s("path", { d: "M21.953,12c0,0.591 -0.346,1.124 -0.839,1.61c-0.295,0.29 -0.639,0.568 -0.942,0.85c-0.242,0.225 -0.46,0.446 -0.562,0.692c-0.107,0.257 -0.114,0.576 -0.105,0.913c0.011,0.416 0.056,0.855 0.059,1.265c0.006,0.691 -0.123,1.304 -0.526,1.708c-0.404,0.403 -1.017,0.532 -1.708,0.526c-0.41,-0.004 -0.849,-0.048 -1.264,-0.059c-0.337,-0.009 -0.657,-0.002 -0.914,0.105c-0.246,0.102 -0.467,0.32 -0.692,0.562c-0.282,0.303 -0.56,0.647 -0.85,0.941c-0.486,0.494 -1.019,0.84 -1.61,0.84c-0.591,-0 -1.124,-0.346 -1.61,-0.84c-0.29,-0.294 -0.568,-0.638 -0.85,-0.941c-0.225,-0.242 -0.447,-0.46 -0.692,-0.562c-0.257,-0.107 -0.577,-0.114 -0.913,-0.105c-0.416,0.011 -0.855,0.055 -1.265,0.059c-0.691,0.006 -1.305,-0.123 -1.708,-0.526c-0.404,-0.404 -0.532,-1.017 -0.526,-1.708c0.003,-0.41 0.048,-0.849 0.059,-1.265c0.009,-0.337 0.002,-0.656 -0.105,-0.914c-0.102,-0.245 -0.32,-0.466 -0.562,-0.691c-0.302,-0.282 -0.646,-0.56 -0.941,-0.85c-0.493,-0.486 -0.84,-1.019 -0.84,-1.61c0,-0.591 0.347,-1.124 0.84,-1.61c0.295,-0.29 0.639,-0.568 0.941,-0.85c0.242,-0.225 0.46,-0.446 0.562,-0.691c0.107,-0.258 0.114,-0.577 0.105,-0.914c-0.011,-0.416 -0.056,-0.855 -0.059,-1.265c-0.006,-0.691 0.122,-1.304 0.526,-1.708c0.403,-0.403 1.017,-0.532 1.708,-0.526c0.41,0.004 0.849,0.048 1.265,0.059c0.336,0.009 0.656,0.002 0.913,-0.105c0.245,-0.102 0.467,-0.32 0.692,-0.562c0.282,-0.303 0.56,-0.647 0.85,-0.941c0.486,-0.494 1.019,-0.84 1.61,-0.84c0.591,0 1.124,0.346 1.61,0.84c0.29,0.294 0.568,0.638 0.85,0.941c0.225,0.242 0.446,0.46 0.692,0.562c0.257,0.107 0.577,0.114 0.914,0.105c0.415,-0.011 0.854,-0.055 1.264,-0.059c0.691,-0.006 1.304,0.123 1.708,0.526c0.403,0.404 0.532,1.017 0.526,1.708c-0.003,0.41 -0.048,0.849 -0.059,1.265c-0.009,0.337 -0.002,0.656 0.105,0.913c0.102,0.246 0.32,0.467 0.562,0.692c0.303,0.282 0.647,0.56 0.942,0.85c0.493,0.486 0.839,1.019 0.839,1.61Zm-1,0c0,-0.188 -0.088,-0.355 -0.206,-0.518c-0.164,-0.226 -0.388,-0.437 -0.622,-0.646c-0.583,-0.521 -1.205,-1.04 -1.439,-1.604c-0.242,-0.585 -0.177,-1.399 -0.136,-2.178c0.017,-0.315 0.027,-0.622 -0.015,-0.895c-0.029,-0.191 -0.08,-0.365 -0.204,-0.489c-0.125,-0.125 -0.299,-0.176 -0.49,-0.205c-0.273,-0.042 -0.58,-0.032 -0.895,-0.015c-0.779,0.041 -1.593,0.106 -2.177,-0.136c-0.565,-0.234 -1.084,-0.855 -1.605,-1.439c-0.209,-0.234 -0.42,-0.458 -0.646,-0.622c-0.163,-0.118 -0.33,-0.206 -0.518,-0.206c-0.187,0 -0.355,0.088 -0.518,0.206c-0.226,0.164 -0.437,0.388 -0.646,0.622c-0.521,0.584 -1.04,1.205 -1.605,1.439c-0.584,0.242 -1.398,0.177 -2.177,0.136c-0.315,-0.017 -0.622,-0.027 -0.895,0.015c-0.192,0.029 -0.365,0.08 -0.49,0.205c-0.125,0.124 -0.175,0.298 -0.204,0.489c-0.042,0.273 -0.032,0.58 -0.016,0.895c0.042,0.779 0.107,1.593 -0.135,2.177c-0.234,0.565 -0.855,1.084 -1.439,1.605c-0.234,0.209 -0.458,0.42 -0.622,0.646c-0.118,0.163 -0.206,0.33 -0.206,0.518c0,0.188 0.088,0.355 0.206,0.518c0.164,0.226 0.388,0.437 0.622,0.646c0.584,0.521 1.205,1.04 1.439,1.605c0.242,0.584 0.177,1.398 0.135,2.177c-0.016,0.315 -0.026,0.622 0.016,0.895c0.029,0.191 0.079,0.365 0.204,0.489c0.125,0.125 0.298,0.176 0.49,0.205c0.273,0.042 0.58,0.032 0.895,0.015c0.779,-0.041 1.593,-0.106 2.177,0.136c0.565,0.234 1.084,0.855 1.605,1.439c0.209,0.234 0.42,0.458 0.646,0.622c0.163,0.118 0.331,0.206 0.518,0.206c0.188,-0 0.355,-0.088 0.518,-0.206c0.226,-0.164 0.437,-0.388 0.646,-0.622c0.521,-0.584 1.04,-1.205 1.605,-1.439c0.584,-0.242 1.398,-0.177 2.177,-0.136c0.315,0.017 0.622,0.027 0.895,-0.015c0.191,-0.029 0.365,-0.08 0.49,-0.205c0.124,-0.124 0.175,-0.298 0.204,-0.489c0.042,-0.273 0.032,-0.58 0.015,-0.895c-0.041,-0.779 -0.106,-1.593 0.136,-2.178c0.234,-0.564 0.856,-1.083 1.439,-1.604c0.234,-0.209 0.458,-0.42 0.622,-0.646c0.118,-0.163 0.206,-0.33 0.206,-0.518Zm-9.453,3.5l-1.25,-0c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l2.25,-0c0.552,-0 1,-0.447 1,-1c0,-0.552 -0.448,-1 -1,-1l-1,-0c-1.104,-0 -2,-0.895 -2,-2c0,-1.104 0.896,-2 2,-2l0,-1c-0,-0.276 0.224,-0.5 0.5,-0.5c0.276,-0 0.5,0.224 0.5,0.5l0,1l1.25,-0c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-2.25,-0c-0.552,-0 -1,0.448 -1,1c0,0.553 0.448,1 1,1l1,-0c1.104,-0 2,0.896 2,2c0,1.105 -0.896,2 -2,2l0,1c-0,0.276 -0.224,0.5 -0.5,0.5c-0.276,0 -0.5,-0.224 -0.5,-0.5l0,-1Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const cr = /* @__PURE__ */ u(U, [["render", G]]), W = a({
  name: "CiBag1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function E(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Bag_1",
        "data-name": "Bag 1"
      }, [
        s("path", { d: "M20.37,17.65a16.777,16.777,0,0,0-2.01-5.54,17.037,17.037,0,0,0-3.74-4.55l-.1-.08a.121.121,0,0,1-.02-.15l1.49-2.59a1.12,1.12,0,0,0,0-1.12,1.092,1.092,0,0,0-.97-.55H8.98a1.1,1.1,0,0,0-.97.55,1.12,1.12,0,0,0,0,1.12l1.5,2.59a.124.124,0,0,1-.03.15l-.09.08A17.327,17.327,0,0,0,3.63,17.65a4.051,4.051,0,0,0-.04.48,2.8,2.8,0,0,0,2.8,2.8H17.62a2.782,2.782,0,0,0,2.13-.99A2.834,2.834,0,0,0,20.37,17.65ZM8.88,4.24a.1.1,0,0,1,0-.12.106.106,0,0,1,.1-.05h6.04a.143.143,0,0,1,.11.05.163.163,0,0,1,0,.12l-1.59,2.8H10.46Zm5.09,4.08a16.436,16.436,0,0,1,5.42,9.5,1.817,1.817,0,0,1-.4,1.47,1.786,1.786,0,0,1-1.37.64H6.39a1.805,1.805,0,0,1-1.8-1.8,1.628,1.628,0,0,1,.03-.31,16.286,16.286,0,0,1,5.42-9.5l.32-.28h3.28Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const pr = /* @__PURE__ */ u(W, [["render", E]]), N = a({
  name: "CiBandage",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Q(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Bandage" }, [
        s("g", null, [
          s("path", { d: "M17.435,7.5H6.565a4.5,4.5,0,0,0,0,9h10.87a4.5,4.5,0,0,0,0-9Zm-9.93,8h-.94a3.5,3.5,0,0,1,0-7h.94Zm8,0h-7v-7h7Zm1.93,0h-.93v-7h.93a3.5,3.5,0,0,1,0,7Z" }),
          s("circle", {
            cx: "10.252",
            cy: "10.501",
            r: "0.625"
          }),
          s("circle", {
            cx: "10.252",
            cy: "13.501",
            r: "0.625"
          }),
          s("circle", {
            cx: "13.752",
            cy: "10.5",
            r: "0.625"
          }),
          s("circle", {
            cx: "13.752",
            cy: "13.5",
            r: "0.625"
          })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const dr = /* @__PURE__ */ u(N, [["render", Q]]), K = a({
  name: "CiBank",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function J(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Bank" }, [
        s("path", { d: "M19.505,17.943V10.362a1.491,1.491,0,0,0,1.39-1.12,1.468,1.468,0,0,0-.7-1.68l-7.45-4.3a1.521,1.521,0,0,0-1.49,0l-7.45,4.3a1.468,1.468,0,0,0-.7,1.68,1.487,1.487,0,0,0,1.45,1.12h.13v7.57h-.12a1.5,1.5,0,0,0,0,3h14.87a1.5,1.5,0,0,0,.07-2.989ZM4.555,9.362a.505.505,0,0,1-.25-.94l7.45-4.289a.474.474,0,0,1,.49,0L19.7,8.422a.5.5,0,0,1-.25.94Zm13.95,1v7.57H14.9v-7.57Zm-4.61,0v7.57h-3.61v-7.57Zm-4.61,0v7.57h-3.6v-7.57Zm10.15,9.57H4.565a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h14.87a.5.5,0,0,1,.5.5A.5.5,0,0,1,19.435,19.932Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const ur = /* @__PURE__ */ u(K, [["render", J]]), Y = a({
  name: "CiBarcode",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function X(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Barcode" }, [
        s("g", null, [
          s("path", { d: "M8.066,4.065H3.648a1.732,1.732,0,0,0-.963.189A1.368,1.368,0,0,0,2.066,5.48v4.585a.5.5,0,0,0,1,0V5.785a1.794,1.794,0,0,1,.014-.518c.077-.236.319-.2.514-.2H8.066a.5.5,0,0,0,0-1Z" }),
          s("path", { d: "M2.063,13.937v4.418a1.733,1.733,0,0,0,.189.963,1.369,1.369,0,0,0,1.227.619H8.063a.5.5,0,0,0,0-1H3.783a1.831,1.831,0,0,1-.518-.014c-.236-.077-.2-.319-.2-.514V13.937a.5.5,0,0,0-1,0Z" }),
          s("path", { d: "M15.934,19.935h4.418a1.732,1.732,0,0,0,.963-.189,1.368,1.368,0,0,0,.619-1.226V13.935a.5.5,0,0,0-1,0v4.28a1.794,1.794,0,0,1-.014.518c-.077.236-.319.2-.514.2H15.934a.5.5,0,0,0,0,1Z" }),
          s("path", { d: "M21.937,10.063V5.645a1.733,1.733,0,0,0-.189-.963,1.369,1.369,0,0,0-1.227-.619H15.937a.5.5,0,0,0,0,1h4.28a1.831,1.831,0,0,1,.518.014c.236.077.2.319.2.514v4.472a.5.5,0,0,0,1,0Z" }),
          s("g", null, [
            s("rect", {
              x: "10.999",
              y: "7.643",
              width: "1",
              height: "8.709",
              rx: "0.5"
            }),
            s("rect", {
              x: "14.249",
              y: "7.643",
              width: "1",
              height: "8.709",
              rx: "0.5"
            }),
            s("rect", {
              x: "16.499",
              y: "7.643",
              width: "1",
              height: "8.709",
              rx: "0.5"
            }),
            s("rect", {
              x: "6.499",
              y: "7.643",
              width: "1",
              height: "8.709",
              rx: "0.5"
            }),
            s("rect", {
              x: "8.499",
              y: "7.643",
              width: "1.5",
              height: "8.709",
              rx: "0.75"
            })
          ])
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const fr = /* @__PURE__ */ u(Y, [["render", X]]), x = a({
  name: "CiBaseball",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function e0(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Baseball" }, [
        s("path", { d: "M19.02,4.976A9.927,9.927,0,1,0,15.74,21.2,9.908,9.908,0,0,0,21.93,12,9.856,9.856,0,0,0,19.02,4.976Zm-13.34.71a8.9,8.9,0,0,1,6.04-2.61,8.461,8.461,0,0,1-.34,2.26l-.34-.19a.5.5,0,0,0-.5.86l.5.29a9.227,9.227,0,0,1-1.57,2.47l-.35-.35a.5.5,0,0,0-.7,0,.5.5,0,0,0,0,.71l.34.34a8.875,8.875,0,0,1-2.47,1.58L6,10.536a.5.5,0,0,0-.68-.19.505.505,0,0,0-.18.69l.2.34a8.2,8.2,0,0,1-2.26.35A8.827,8.827,0,0,1,5.68,5.686ZM11.74,17a.5.5,0,1,0-.5.87l.49.29a10.008,10.008,0,0,0-.45,2.74,8.9,8.9,0,0,1-8.18-8.17,9.378,9.378,0,0,0,2.75-.46l.29.5a.5.5,0,0,0,.43.25.475.475,0,0,0,.25-.07.493.493,0,0,0,.18-.68l-.21-.36a9.461,9.461,0,0,0,2.68-1.73l.36.36a.5.5,0,0,0,.35.15.508.508,0,0,0,.36-.15.513.513,0,0,0,0-.71l-.36-.36A9.665,9.665,0,0,0,11.9,6.8l.37.21a.475.475,0,0,0,.25.07.511.511,0,0,0,.44-.25.494.494,0,0,0-.19-.68l-.51-.29a9.789,9.789,0,0,0,.46-2.76,8.924,8.924,0,0,1,8.18,8.18,10.08,10.08,0,0,0-2.74.46l-.28-.49a.505.505,0,0,0-.69-.18.491.491,0,0,0-.18.68l.2.35a9.684,9.684,0,0,0-2.68,1.73l-.35-.35a.5.5,0,0,0-.71,0,.5.5,0,0,0,0,.7l.36.36a9.2,9.2,0,0,0-1.73,2.67Zm6.58,1.32a8.851,8.851,0,0,1-6.04,2.6,8.388,8.388,0,0,1,.34-2.25l.35.2a.451.451,0,0,0,.25.07.5.5,0,0,0,.43-.25.505.505,0,0,0-.18-.69l-.51-.29a8.7,8.7,0,0,1,1.57-2.47l.36.36a.5.5,0,0,0,.7-.71l-.36-.36a9.124,9.124,0,0,1,2.48-1.57l.3.52a.5.5,0,0,0,.43.25.451.451,0,0,0,.25-.07.505.505,0,0,0,.19-.68l-.21-.36a8.449,8.449,0,0,1,2.25-.34,8.992,8.992,0,0,1-.66,3.14A9.172,9.172,0,0,1,18.32,18.316Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const yr = /* @__PURE__ */ u(x, [["render", e0]]), s0 = a({
  name: "CiBasketball",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function o0(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Basketball" }, [
        s("path", { d: "M19.02,4.971a9.941,9.941,0,1,0,0,14.05A9.941,9.941,0,0,0,19.02,4.971Zm-13.34.71a8.894,8.894,0,0,1,6.05-2.6,8.812,8.812,0,0,1-2.61,6.04,8.75,8.75,0,0,1-6.04,2.61A8.875,8.875,0,0,1,5.68,5.681ZM3.1,12.731a9.772,9.772,0,0,0,6.73-2.9,9.8,9.8,0,0,0,2.9-6.73,8.908,8.908,0,0,1,5.23,2.24L5.34,17.951A8.881,8.881,0,0,1,3.1,12.731Zm8.18,8.17a8.872,8.872,0,0,1-5.23-2.24L18.66,6.041a8.91,8.91,0,0,1,2.24,5.24,9.86,9.86,0,0,0-9.62,9.62Zm7.04-2.59a8.856,8.856,0,0,1-6.04,2.61,8.851,8.851,0,0,1,8.64-8.64A8.847,8.847,0,0,1,18.32,18.311Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Cr = /* @__PURE__ */ u(s0, [["render", o0]]), t0 = a({
  name: "CiBatteryCharging",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function a0(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Battery_Charging",
        "data-name": "Battery Charging"
      }, [
        s("g", null, [
          s("path", { d: "M17.505,18.5H4.065a2,2,0,0,1-2-2v-9a2,2,0,0,1,2-2h13.44a2,2,0,0,1,2,2v1h.93a1.5,1.5,0,0,1,1.5,1.5v4a1.5,1.5,0,0,1-1.5,1.5h-.93v1A2,2,0,0,1,17.505,18.5ZM4.065,6.5a1,1,0,0,0-1,1v9a1,1,0,0,0,1,1h13.44a1,1,0,0,0,1-1V15.25a.752.752,0,0,1,.75-.75h1.18a.5.5,0,0,0,.5-.5V10a.5.5,0,0,0-.5-.5h-1.18a.752.752,0,0,1-.75-.75V7.5a1,1,0,0,0-1-1Z" }),
          s("path", { d: "M13.174,11.191H11.891a.11.11,0,0,1-.1-.15l.655-1.669a.251.251,0,0,0-.233-.342H9.274a.248.248,0,0,0-.231.157L8.292,11.04a.11.11,0,0,0,.1.151H9.829a.11.11,0,0,1,.1.144l-.776,3.53a.085.085,0,0,0,.139.081l3.947-3.561A.109.109,0,0,0,13.174,11.191Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const mr = /* @__PURE__ */ u(t0, [["render", a0]]), l0 = a({
  name: "CiBatteryEmpty",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function r0(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Battery_Empty",
        "data-name": "Battery Empty"
      }, [
        s("path", { d: "M17.505,18.5H4.065a2,2,0,0,1-2-2v-9a2,2,0,0,1,2-2h13.44a2,2,0,0,1,2,2v1h.93a1.5,1.5,0,0,1,1.5,1.5v4a1.5,1.5,0,0,1-1.5,1.5h-.93v1A2,2,0,0,1,17.505,18.5ZM4.065,6.5a1,1,0,0,0-1,1v9a1,1,0,0,0,1,1h13.44a1,1,0,0,0,1-1V15.25a.752.752,0,0,1,.75-.75h1.18a.5.5,0,0,0,.5-.5V10a.5.5,0,0,0-.5-.5h-1.18a.752.752,0,0,1-.75-.75V7.5a1,1,0,0,0-1-1Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const gr = /* @__PURE__ */ u(l0, [["render", r0]]), n0 = a({
  name: "CiBatteryFull",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function i0(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Battery_Full",
        "data-name": "Battery Full"
      }, [
        s("g", null, [
          s("path", { d: "M17.505,18.5H4.065a2,2,0,0,1-2-2v-9a2,2,0,0,1,2-2h13.44a2,2,0,0,1,2,2v1h.93a1.5,1.5,0,0,1,1.5,1.5v4a1.5,1.5,0,0,1-1.5,1.5h-.93v1A2,2,0,0,1,17.505,18.5ZM4.065,6.5a1,1,0,0,0-1,1v9a1,1,0,0,0,1,1h13.44a1,1,0,0,0,1-1V15.25a.751.751,0,0,1,.75-.75h1.18a.5.5,0,0,0,.5-.5V10a.5.5,0,0,0-.5-.5h-1.18a.751.751,0,0,1-.75-.75V7.5a1,1,0,0,0-1-1Z" }),
          s("rect", {
            x: "4.063",
            y: "7.499",
            width: "13.437",
            height: "8.998",
            rx: "1"
          })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Br = /* @__PURE__ */ u(n0, [["render", i0]]), c0 = a({
  name: "CiBeaker1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function p0(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Beaker_1",
        "data-name": "Beaker 1"
      }, [
        s("path", { d: "M19.447,18.645l-.51-1.52a17.9,17.9,0,0,0-4.02-6.66,1.493,1.493,0,0,1-.42-1.04V3.065H15a.5.5,0,0,0,0-1H9a.5.5,0,0,0,0,1h.5v6.36a1.484,1.484,0,0,1-.41,1.04,17.9,17.9,0,0,0-4.02,6.66l-.52,1.52a2.5,2.5,0,0,0,2.37,3.29h10.16a2.5,2.5,0,0,0,2.37-3.29Zm-9.64-7.49a2.477,2.477,0,0,0,.69-1.73V3.065h3v6.36a2.486,2.486,0,0,0,.7,1.73,16.907,16.907,0,0,1,3.01,4.38H6.787A16.943,16.943,0,0,1,9.807,11.155Zm8.49,9.16a1.507,1.507,0,0,1-1.22.62H6.917a1.5,1.5,0,0,1-1.42-1.98l.51-1.52q.15-.45.33-.9h11.32q.18.45.33.9l.51,1.52A1.5,1.5,0,0,1,18.3,20.315Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const hr = /* @__PURE__ */ u(c0, [["render", p0]]), d0 = a({
  name: "CiBeerMugFull",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function u0(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Beer_Mug_Full",
        "data-name": "Beer Mug Full"
      }, [
        s("g", null, [
          s("path", { d: "M18.356,9.63h-.97V7.99a2.938,2.938,0,0,0,.5-1.65,1.77,1.77,0,0,0-.01-.23,2.905,2.905,0,0,0-1.64-2.38,2.956,2.956,0,0,0-2.4-.07,3.278,3.278,0,0,0-5.62,0,2.9,2.9,0,0,0-1.68-.17,2.866,2.866,0,0,0-2.16,1.75,2.948,2.948,0,0,0,.3,2.77V19.43a2.5,2.5,0,0,0,2.5,2.5h7.71a2.5,2.5,0,0,0,2.5-2.5v-.99l.91-.36a2.433,2.433,0,0,0,1.54-2.27V11.1A1.481,1.481,0,0,0,18.356,9.63Zm-1.97,9.8a1.5,1.5,0,0,1-1.5,1.5H7.176a1.5,1.5,0,0,1-1.5-1.5V11.34a2.858,2.858,0,0,0,1.93.74c.13,0,.25-.01.37-.02V18.4a.5.5,0,0,0,.5.5.5.5,0,0,0,.5-.5V11.82a.17.17,0,0,0-.01-.07,2.939,2.939,0,0,0,1.57-2.46h4.42a2.86,2.86,0,0,0,1.43-.38Zm-.01-11.77a1.949,1.949,0,0,1-1.42.63h-4.61a.8.8,0,0,0-.79.61,1.231,1.231,0,0,0-.02.2,1.975,1.975,0,0,1-1.05,1.78,1.934,1.934,0,0,1-2.8-1.72,1.808,1.808,0,0,1,.17-.77.6.6,0,0,0-.13-.68,1.939,1.939,0,0,1-.41-2.11,1.868,1.868,0,0,1,1.4-1.13,2.531,2.531,0,0,1,.38-.03,1.909,1.909,0,0,1,.86.2.766.766,0,0,0,.59.06A.8.8,0,0,0,9,4.32a2.273,2.273,0,0,1,4.06,0,.751.751,0,0,0,.44.38.8.8,0,0,0,.59-.05,1.917,1.917,0,0,1,2.79,1.54A1.886,1.886,0,0,1,16.376,7.66Zm2.46,8.15a1.428,1.428,0,0,1-.92,1.34l-.52.22V10.63h.96a.478.478,0,0,1,.48.47Z" }),
          s("path", { d: "M13.577,18.9a.5.5,0,0,1-.5-.5V11.82a.5.5,0,0,1,1,0V18.4A.5.5,0,0,1,13.577,18.9Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const vr = /* @__PURE__ */ u(d0, [["render", u0]]), f0 = a({
  name: "CiBellOff",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function y0(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Bell_Off",
        "data-name": "Bell Off"
      }, [
        s("g", null, [
          s("path", { d: "M9.624,5.2c-.571.3-.079,1.124.5.864.509-.227,1.068-.287,1.115-.95.028-.41.014-.81.476-.993a.776.776,0,0,1,1.035.71c.048.461.035.821.548,1.024a4.811,4.811,0,0,1,2.812,2.432,5.63,5.63,0,0,1,.414,2.467v2.02a.5.5,0,0,0,1,0c0-1.646.185-3.394-.521-4.929a5.542,5.542,0,0,0-3.019-2.808c-.034-.013-.155-.069-.227-.092,0-.021,0-.044,0-.059a2.009,2.009,0,0,0-.257-.945,1.739,1.739,0,0,0-3.1.172,1.992,1.992,0,0,0-.153.792c0,.012,0,.033,0,.052C10.24,4.959,9.808,5.107,9.624,5.2Z" }),
          s("path", { d: "M4.57,3.86c-.46-.46-1.17.25-.71.7C4.92,5.62,5.98,6.69,7.04,7.75a5.535,5.535,0,0,0-.57,2.44v4.54a2.122,2.122,0,0,0-1.88,2.11v.53a2.121,2.121,0,0,0,2.12,2.12H10.3a1.725,1.725,0,0,0,3.4,0h3.59a2.12,2.12,0,0,0,1.15-.34l.99.99a.5.5,0,0,0,.71-.71ZM17.7,18.41a1.15,1.15,0,0,1-.41.08H6.71a1.118,1.118,0,0,1-1.12-1.12v-.53a1.118,1.118,0,0,1,1.12-1.12.762.762,0,0,0,.76-.77V10.19A4.375,4.375,0,0,1,7.8,8.51Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const $r = /* @__PURE__ */ u(f0, [["render", y0]]), C0 = a({
  name: "CiBellOn",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function m0(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Bell_On",
        "data-name": "Bell On"
      }, [
        s("path", { d: "M18.79,15.34a2.087,2.087,0,0,0-1.26-.61V10.19a5.5,5.5,0,0,0-1.62-3.91,5.826,5.826,0,0,0-2.15-1.33V4.89a1.8,1.8,0,0,0-1.61-1.81,1.749,1.749,0,0,0-1.91,1.75v.12a5.547,5.547,0,0,0-3.77,5.24v4.54a2.122,2.122,0,0,0-1.88,2.11v.53a2.121,2.121,0,0,0,2.12,2.12H10.3a1.725,1.725,0,0,0,3.4,0h3.59a2.121,2.121,0,0,0,2.12-2.12v-.53A2.1,2.1,0,0,0,18.79,15.34Zm-.38,2.03a1.118,1.118,0,0,1-1.12,1.12H6.71a1.118,1.118,0,0,1-1.12-1.12v-.53a1.118,1.118,0,0,1,1.12-1.12.762.762,0,0,0,.76-.77V10.19a4.555,4.555,0,0,1,3.24-4.34.729.729,0,0,0,.53-.71V4.83a.735.735,0,0,1,.25-.56.744.744,0,0,1,.51-.2h.07a.807.807,0,0,1,.69.82v.25a.729.729,0,0,0,.53.71A4.668,4.668,0,0,1,15.2,6.99a4.468,4.468,0,0,1,1.33,3.2v4.76a.8.8,0,0,0,.22.55.773.773,0,0,0,.54.22,1.127,1.127,0,0,1,1.12,1.12Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Sr = /* @__PURE__ */ u(C0, [["render", m0]]), g0 = a({
  name: "CiBezier",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function B0(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Bezier" }, [
        s("path", { d: "M20.435,8.005a1.5,1.5,0,1,0-1.41-2H13.5v-.25a.749.749,0,0,0-.75-.75h-1.5a.755.755,0,0,0-.75.75v.25H4.975a1.5,1.5,0,0,0-2.91.5,1.5,1.5,0,0,0,2.91.5h3.79c-2.5,1.61-4.23,5-4.47,8.99h-.28a.749.749,0,0,0-.75.75v1.5a.749.749,0,0,0,.75.75h1.5a.755.755,0,0,0,.75-.75v-1.5a.755.755,0,0,0-.75-.75h-.21c.27-4.22,2.38-7.78,5.19-8.73a.747.747,0,0,0,.75.74h1.5a.741.741,0,0,0,.75-.74c2.81.95,4.93,4.51,5.21,8.73h-.22a.749.749,0,0,0-.75.75v1.5a.749.749,0,0,0,.75.75h1.5a.755.755,0,0,0,.75-.75v-1.5a.755.755,0,0,0-.75-.75H19.7c-.24-3.99-1.97-7.38-4.46-8.99h3.78A1.5,1.5,0,0,0,20.435,8.005Zm0-2a.508.508,0,0,1,.5.5.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5A.5.5,0,0,1,20.435,6.005Zm-16.87,1a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5.508.508,0,0,1,.5.5A.5.5,0,0,1,3.565,7.005ZM5.265,18h-1V17h1ZM12.5,7.005h-1v-1h1ZM18.735,17h1v1h-1Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const kr = /* @__PURE__ */ u(g0, [["render", B0]]), h0 = a({
  name: "CiBitcoin",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function v0(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Bitcoin" }, [
        s("g", null, [
          s("path", { d: "M12,21.934A9.934,9.934,0,1,1,21.934,12,9.945,9.945,0,0,1,12,21.934ZM12,3.066A8.934,8.934,0,1,0,20.934,12,8.944,8.944,0,0,0,12,3.066Z" }),
          s("path", { d: "M14.28,11.78A1.994,1.994,0,0,0,12.75,8.5H12.5V7.47A.489.489,0,0,0,12,7a.483.483,0,0,0-.5.47V8.5H10.25a1,1,0,0,0-1,1v5a1,1,0,0,0,1,1H11.5v1.03A.483.483,0,0,0,12,17a.489.489,0,0,0,.5-.47V15.5h.75a2.006,2.006,0,0,0,2-2A2.033,2.033,0,0,0,14.28,11.78ZM10.25,9.5h2.5a1,1,0,0,1,0,2h-2.5Zm3,5h-3v-2h3a1,1,0,0,1,0,2Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const wr = /* @__PURE__ */ u(h0, [["render", v0]]), $0 = a({
  name: "CiBluetooth",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function S0(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Bluetooth" }, [
        s("path", { d: "M18.649,15.938,11.829,12l6.82-3.94a.984.984,0,0,0,.5-.87.968.968,0,0,0-.5-.861L12.029,2.5a.989.989,0,0,0-1,0,1,1,0,0,0-.5.87v7.769q-2.1-1.23-4.22-2.44c-.24-.139-.47-.279-.71-.409a.5.5,0,0,0-.51.86L10.039,12c-1.41.81-2.83,1.62-4.23,2.44-.24.129-.48.27-.72.41a.5.5,0,0,0,.51.86c1.65-.951,3.28-1.891,4.93-2.85v7.769a.993.993,0,0,0,.5.871.969.969,0,0,0,1,0l6.62-3.82a1.007,1.007,0,0,0,0-1.74Zm-7.12-12.57,6.62,3.82-6.62,3.83Zm0,17.259V12.988l6.62,3.82Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const zr = /* @__PURE__ */ u($0, [["render", S0]]), k0 = a({
  name: "CiBookmark",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function w0(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Bookmark" }, [
        s("path", { d: "M17.6,21.945a1.483,1.483,0,0,1-1.01-.4l-4.251-3.9a.5.5,0,0,0-.68,0L7.409,21.545a1.5,1.5,0,0,1-2.516-1.1V4.57a2.5,2.5,0,0,1,2.5-2.5h9.214a2.5,2.5,0,0,1,2.5,2.5V20.442a1.481,1.481,0,0,1-.9,1.374A1.507,1.507,0,0,1,17.6,21.945ZM12,16.51a1.5,1.5,0,0,1,1.018.395l4.251,3.9a.5.5,0,0,0,.839-.368V4.57a1.5,1.5,0,0,0-1.5-1.5H7.393a1.5,1.5,0,0,0-1.5,1.5V20.442a.5.5,0,0,0,.839.368L10.983,16.9A1.5,1.5,0,0,1,12,16.51Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Zr = /* @__PURE__ */ u(k0, [["render", w0]]), z0 = a({
  name: "CiBookmarkCheck",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Z0(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Bookmark_Check",
        "data-name": "Bookmark Check"
      }, [
        s("g", null, [
          s("path", { d: "M17.6,21.938a1.482,1.482,0,0,1-1.011-.4l-4.251-3.9a.5.5,0,0,0-.678,0L7.41,21.538a1.5,1.5,0,0,1-2.517-1.1V4.563a2.5,2.5,0,0,1,2.5-2.5h9.214a2.5,2.5,0,0,1,2.5,2.5V20.435a1.483,1.483,0,0,1-.9,1.375A1.526,1.526,0,0,1,17.6,21.938ZM12,16.5a1.5,1.5,0,0,1,1.018.395L17.269,20.8a.5.5,0,0,0,.838-.368V4.563a1.5,1.5,0,0,0-1.5-1.5H7.393a1.5,1.5,0,0,0-1.5,1.5V20.435a.5.5,0,0,0,.839.368L10.983,16.9A1.5,1.5,0,0,1,12,16.5Z" }),
          s("path", { d: "M14.85,9.08c-.11.12-.23.23-.35.35-.83.83-1.65,1.65-2.47,2.48a.513.513,0,0,1-.71,0c-.47-.48-.94-.95-1.42-1.42a.5.5,0,0,1,.71-.71c.35.36.7.71,1.06,1.06.83-.82,1.65-1.65,2.48-2.47C14.6,7.91,15.31,8.62,14.85,9.08Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Mr = /* @__PURE__ */ u(z0, [["render", Z0]]), M0 = a({
  name: "CiBookmarkMinus",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function A0(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Bookmark_Minus",
        "data-name": "Bookmark Minus"
      }, [
        s("g", null, [
          s("path", { d: "M17.6,21.938a1.482,1.482,0,0,1-1.011-.4l-4.251-3.9a.5.5,0,0,0-.678,0L7.41,21.538a1.5,1.5,0,0,1-2.517-1.1V4.563a2.5,2.5,0,0,1,2.5-2.5h9.214a2.5,2.5,0,0,1,2.5,2.5V20.435a1.483,1.483,0,0,1-.9,1.375A1.526,1.526,0,0,1,17.6,21.938ZM12,16.5a1.5,1.5,0,0,1,1.018.395L17.269,20.8a.5.5,0,0,0,.838-.368V4.563a1.5,1.5,0,0,0-1.5-1.5H7.393a1.5,1.5,0,0,0-1.5,1.5V20.435a.5.5,0,0,0,.839.368L10.983,16.9A1.5,1.5,0,0,1,12,16.5Z" }),
          s("path", { d: "M10,10.277a.5.5,0,0,1,0-1h4a.5.5,0,0,1,0,1Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Ar = /* @__PURE__ */ u(M0, [["render", A0]]), H0 = a({
  name: "CiBookmarkPlus",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function V0(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Bookmark_Plus",
        "data-name": "Bookmark Plus"
      }, [
        s("g", null, [
          s("path", { d: "M17.6,21.938a1.482,1.482,0,0,1-1.011-.4l-4.251-3.9a.5.5,0,0,0-.678,0L7.41,21.538a1.5,1.5,0,0,1-2.517-1.1V4.563a2.5,2.5,0,0,1,2.5-2.5h9.214a2.5,2.5,0,0,1,2.5,2.5V20.435a1.483,1.483,0,0,1-.9,1.375A1.526,1.526,0,0,1,17.6,21.938ZM12,16.5a1.5,1.5,0,0,1,1.018.395L17.269,20.8a.5.5,0,0,0,.838-.368V4.563a1.5,1.5,0,0,0-1.5-1.5H7.393a1.5,1.5,0,0,0-1.5,1.5V20.435a.5.5,0,0,0,.839.368L10.983,16.9A1.5,1.5,0,0,1,12,16.5Z" }),
          s("path", { d: "M14,10.28H12.5v1.5a.5.5,0,0,1-1,0v-1.5H10a.5.5,0,0,1,0-1h1.5V7.78a.5.5,0,0,1,1,0v1.5H14A.5.5,0,0,1,14,10.28Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Hr = /* @__PURE__ */ u(H0, [["render", V0]]), I0 = a({
  name: "CiBookmarkRemove",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function _0(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Bookmark_Remove",
        "data-name": "Bookmark Remove"
      }, [
        s("g", null, [
          s("path", { d: "M17.6,21.938a1.482,1.482,0,0,1-1.011-.4l-4.251-3.9a.5.5,0,0,0-.678,0L7.41,21.538a1.5,1.5,0,0,1-2.517-1.1V4.563a2.5,2.5,0,0,1,2.5-2.5h9.214a2.5,2.5,0,0,1,2.5,2.5V20.435a1.483,1.483,0,0,1-.9,1.375A1.526,1.526,0,0,1,17.6,21.938ZM12,16.5a1.5,1.5,0,0,1,1.018.395L17.269,20.8a.5.5,0,0,0,.838-.368V4.563a1.5,1.5,0,0,0-1.5-1.5H7.393a1.5,1.5,0,0,0-1.5,1.5V20.435a.5.5,0,0,0,.839.368L10.983,16.9A1.5,1.5,0,0,1,12,16.5Z" }),
          s("path", { d: "M10.23,10.84a.5.5,0,0,0,.71.71L12,10.491,13.06,11.55a.523.523,0,0,0,.71,0,.513.513,0,0,0,0-.71L12.709,9.779,13.77,8.72a.5.5,0,0,0-.71-.71c-.35.35-.7.71-1.06,1.06L10.94,8.01a.5.5,0,0,0-.71,0,.524.524,0,0,0,0,.71c.35.35.71.7,1.06,1.06Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Vr = /* @__PURE__ */ u(I0, [["render", _0]]), b0 = a({
  name: "CiBowlNoodles",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function O0(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Bowl_Noodles",
        "data-name": "Bowl & Noodles"
      }, [
        s("path", { d: "M19.5,10.705a.948.948,0,0,0-.92-.67h-5.07V8.355l4.75.17h.02a.734.734,0,0,0,.73-.73.718.718,0,0,0-.75-.72l-4.75.17V5.405l4.78-.67a.723.723,0,0,0,.62-.72.487.487,0,0,0-.01-.12.716.716,0,0,0-.87-.58l-4.6.98a1.5,1.5,0,0,0-2.92.47v.15l-1.14.24a1.494,1.494,0,0,0-2.86.61v.01l-1.2.25a.267.267,0,0,0-.2.26v.04a.257.257,0,0,0,.29.21l1.11-.15V7.5l-1.25.04a.263.263,0,0,0-.25.26.256.256,0,0,0,.25.26l1.25.04v1.94H5.425a.963.963,0,0,0-.92.68,10.119,10.119,0,0,0,1.19,8.53l.61.92a1.233,1.233,0,0,0,1.05.57h9.3a1.228,1.228,0,0,0,1.04-.57l.61-.92A10.136,10.136,0,0,0,19.5,10.705Zm-7.99-5.94a.5.5,0,0,1,.5-.5.5.5,0,0,1,.5.5v5.24h-1Zm-2,1.2,1-.14v1.53l-1,.03Zm0,2.25,1,.03v1.79h-1Zm-2-2.45a.5.5,0,0,1,.5-.5.5.5,0,0,1,.5.5v4.24h-1Zm9.96,12.93-.6.93a.261.261,0,0,1-.21.11h-9.3a.236.236,0,0,1-.21-.11l-.61-.93a9.229,9.229,0,0,1-1.11-7.66l13.12-.03A9.122,9.122,0,0,1,17.465,18.7Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Ir = /* @__PURE__ */ u(b0, [["render", O0]]), L0 = a({
  name: "CiBoxes",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function j0(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Boxes" }, [
        s("path", { d: "M19.435,11.5h-2.72V4.56a1.5,1.5,0,0,0-1.5-1.5H8.785a1.5,1.5,0,0,0-1.5,1.5V11.5H4.565a1.5,1.5,0,0,0-1.5,1.5v6.44a1.5,1.5,0,0,0,1.5,1.5H11a1.468,1.468,0,0,0,1-.39,1.487,1.487,0,0,0,1,.39h6.44a1.5,1.5,0,0,0,1.5-1.5V13A1.5,1.5,0,0,0,19.435,11.5ZM11.5,19.44a.5.5,0,0,1-.5.5H4.565a.5.5,0,0,1-.5-.5V13a.5.5,0,0,1,.5-.5h1.97v2a.5.5,0,0,0,.5.5h1.5a.508.508,0,0,0,.5-.5v-2H11.5ZM8.285,11.5V4.56a.5.5,0,0,1,.5-.5h1.96v2a.5.5,0,0,0,.5.5h1.5a.5.5,0,0,0,.5-.5v-2h1.97a.5.5,0,0,1,.5.5V11.5Zm11.65,7.94a.508.508,0,0,1-.5.5H13a.508.508,0,0,1-.5-.5V12.5h2.47v2a.5.5,0,0,0,.5.5h1.5a.5.5,0,0,0,.5-.5v-2h1.97a.5.5,0,0,1,.5.5Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const _r = /* @__PURE__ */ u(L0, [["render", j0]]), P0 = a({
  name: "CiBoxList",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function D0(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Box_List",
        "data-name": "Box List"
      }, [
        s("g", null, [
          s("path", { d: "M6.562,8.062h-2a1.5,1.5,0,0,1-1.5-1.5v-2a1.5,1.5,0,0,1,1.5-1.5h2a1.5,1.5,0,0,1,1.5,1.5v2A1.5,1.5,0,0,1,6.562,8.062Zm-2-4a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5v-2a.5.5,0,0,0-.5-.5Z" }),
          s("path", { d: "M6.562,20.938h-2a1.5,1.5,0,0,1-1.5-1.5v-2a1.5,1.5,0,0,1,1.5-1.5h2a1.5,1.5,0,0,1,1.5,1.5v2A1.5,1.5,0,0,1,6.562,20.938Zm-2-4a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5v-2a.5.5,0,0,0-.5-.5Z" }),
          s("path", { d: "M6.562,14.5h-2a1.5,1.5,0,0,1-1.5-1.5V11a1.5,1.5,0,0,1,1.5-1.5h2a1.5,1.5,0,0,1,1.5,1.5v2A1.5,1.5,0,0,1,6.562,14.5Zm-2-4a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5V11a.5.5,0,0,0-.5-.5Z" }),
          s("path", { d: "M20.438,6.062h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z" }),
          s("path", { d: "M20.438,12.5h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z" }),
          s("path", { d: "M20.438,18.935h-9a.5.5,0,1,1,0-1h9a.5.5,0,0,1,0,1Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const br = /* @__PURE__ */ u(P0, [["render", D0]]), F0 = a({
  name: "CiBrightnessDown",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function R0(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Brightness_Down",
        "data-name": "Brightness Down"
      }, [
        s("g", null, [
          s("path", { d: "M12,17.5A5.5,5.5,0,1,1,17.5,12,5.506,5.506,0,0,1,12,17.5Zm0-10A4.5,4.5,0,1,0,16.5,12,4.505,4.505,0,0,0,12,7.5Z" }),
          s("circle", {
            cx: "12",
            cy: "2.813",
            r: "0.75"
          }),
          s("circle", {
            cx: "12",
            cy: "21.187",
            r: "0.75"
          }),
          s("circle", {
            cx: "21.187",
            cy: "12",
            r: "0.75"
          }),
          s("circle", {
            cx: "2.813",
            cy: "12",
            r: "0.75"
          }),
          s("circle", {
            cx: "18.496",
            cy: "5.504",
            r: "0.75"
          }),
          s("circle", {
            cx: "5.504",
            cy: "18.496",
            r: "0.75"
          }),
          s("circle", {
            cx: "18.496",
            cy: "18.496",
            r: "0.75"
          }),
          s("circle", {
            cx: "5.504",
            cy: "5.504",
            r: "0.75"
          })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Or = /* @__PURE__ */ u(F0, [["render", R0]]), T0 = a({
  name: "CiBrightnessUp",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function q0(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Brightness_Up",
        "data-name": "Brightness Up"
      }, [
        s("g", null, [
          s("path", { d: "M12,17.5A5.5,5.5,0,1,1,17.5,12,5.506,5.506,0,0,1,12,17.5Zm0-10A4.5,4.5,0,1,0,16.5,12,4.505,4.505,0,0,0,12,7.5Z" }),
          s("circle", {
            cx: "12",
            cy: "3.063",
            r: "1"
          }),
          s("circle", {
            cx: "12",
            cy: "20.937",
            r: "1"
          }),
          s("circle", {
            cx: "20.937",
            cy: "12",
            r: "1"
          }),
          s("circle", {
            cx: "3.063",
            cy: "12",
            r: "1"
          }),
          s("circle", {
            cx: "18.319",
            cy: "5.681",
            r: "1"
          }),
          s("circle", {
            cx: "5.681",
            cy: "18.319",
            r: "1"
          }),
          s("circle", {
            cx: "18.319",
            cy: "18.319",
            r: "1"
          }),
          s("circle", {
            cx: "5.681",
            cy: "5.681",
            r: "1"
          })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Lr = /* @__PURE__ */ u(T0, [["render", q0]]), U0 = a({
  name: "CiBullhorn",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function G0(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("rect", {
        id: "Bullhorn",
        x: "0",
        y: "0",
        width: "24",
        height: "24",
        style: { fill: "none" }
      }, null, -1),
      s("g", {
        id: "Bullhorn1",
        "serif:id": "Bullhorn"
      }, [
        s("path", { d: "M4.5,16.474c-0.849,-0.4 -1.436,-1.263 -1.436,-2.264l-0,-4.419c-0,-1.38 1.118,-2.5 2.5,-2.5l4.343,0c0.793,0 1.581,-0.132 2.33,-0.392c1.859,-0.705 3.792,-1.727 5.24,-2.922l0.869,-0.718c0.015,-0.013 0.032,-0.025 0.049,-0.036c0.666,-0.424 1.538,0.054 1.538,0.844l0,6.717c0.572,0.11 1.004,0.613 1.004,1.217c-0,0.604 -0.432,1.106 -1.004,1.216l-0,6.718c-0,0.787 -0.872,1.267 -1.538,0.843c-0.017,-0.011 -0.034,-0.023 -0.05,-0.036l-0.868,-0.718c-1.446,-1.195 -3.364,-2.214 -5.226,-2.891c-0.748,-0.261 -1.536,-0.394 -2.328,-0.394c-0.609,-0.029 -1.265,-0.029 -1.265,-0.029l0,2.147c0,1.148 -0.931,2.079 -2.079,2.079c-1.148,-0 -2.079,-0.931 -2.079,-2.079l0,-2.383Zm1,0.236l0,2.147c0,0.596 0.483,1.079 1.079,1.079c0.596,-0 1.079,-0.483 1.079,-1.079c0,-0 0,-2.147 0,-2.147l-2.094,-0c-0.031,-0 -0.053,-0 -0.064,-0Zm6,-0.882l0.142,0.04c2.37,0.664 4.575,1.817 6.473,3.385l0.818,0.677l-0,-15.859l-0.82,0.677c-1.897,1.566 -4.1,2.717 -6.468,3.379l-0.145,0.041l-0,7.66Zm-2.842,-0.118l1.842,0l-0,-7.419l-4.936,0c-0.829,0 -1.5,0.672 -1.5,1.5l-0,4.419c-0,0.829 0.671,1.5 1.499,1.5l3.095,0Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const jr = /* @__PURE__ */ u(U0, [["render", G0]]), W0 = a({
  name: "CiBurger",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function E0(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Burger" }, [
        s("g", null, [
          s("path", { d: "M19.325,11.015a7.344,7.344,0,0,0-14.66,0,2.014,2.014,0,0,0-1.6,1.96v.16a2.016,2.016,0,0,0,1.64,1.97l.27,2.45a2.593,2.593,0,0,0,2.59,2.32h8.87a2.593,2.593,0,0,0,2.59-2.32l.27-2.45a2.016,2.016,0,0,0,1.64-1.97v-.16A2,2,0,0,0,19.325,11.015ZM12,5.125a6.365,6.365,0,0,1,6.34,5.85H5.665A6.362,6.362,0,0,1,12,5.125Zm6.04,12.32a1.6,1.6,0,0,1-1.6,1.43H7.565a1.6,1.6,0,0,1-1.6-1.43l-.26-2.31H18.3Zm1.9-4.31a1,1,0,0,1-1,1H5.065a1,1,0,0,1-1-1v-.16a1,1,0,0,1,1-1h13.87a1,1,0,0,1,1,1Z" }),
          s("circle", {
            cx: "12",
            cy: "6.622",
            r: "0.5"
          }),
          s("circle", {
            cx: "8.323",
            cy: "8.323",
            r: "0.5"
          }),
          s("circle", {
            cx: "15.676",
            cy: "8.323",
            r: "0.5"
          })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Pr = /* @__PURE__ */ u(W0, [["render", E0]]), N0 = a({
  name: "CiCalculator1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Q0(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Calculator_1",
        "data-name": "Calculator 1"
      }, [
        s("g", null, [
          s("path", { d: "M16.5,21.937h-9a2.5,2.5,0,0,1-2.5-2.5V4.563a2.5,2.5,0,0,1,2.5-2.5h9a2.5,2.5,0,0,1,2.5,2.5V19.437A2.5,2.5,0,0,1,16.5,21.937ZM7.5,3.063A1.5,1.5,0,0,0,6,4.563V19.437a1.5,1.5,0,0,0,1.5,1.5h9a1.5,1.5,0,0,0,1.5-1.5V4.563a1.5,1.5,0,0,0-1.5-1.5Z" }),
          s("path", { d: "M14.5,9.757h-5A1.5,1.5,0,0,1,8,8.257V6.563a1.5,1.5,0,0,1,1.5-1.5h5a1.5,1.5,0,0,1,1.5,1.5V8.257A1.5,1.5,0,0,1,14.5,9.757Zm-5-3.694a.5.5,0,0,0-.5.5V8.257a.5.5,0,0,0,.5.5h5a.5.5,0,0,0,.5-.5V6.563a.5.5,0,0,0-.5-.5Z" }),
          s("g", null, [
            s("circle", {
              cx: "12",
              cy: "11.508",
              r: "0.75"
            }),
            s("circle", {
              cx: "15.25",
              cy: "11.508",
              r: "0.75"
            }),
            s("circle", {
              cx: "8.75",
              cy: "11.508",
              r: "0.75"
            })
          ]),
          s("g", null, [
            s("circle", {
              cx: "12",
              cy: "14.848",
              r: "0.75"
            }),
            s("circle", {
              cx: "15.25",
              cy: "14.848",
              r: "0.75"
            }),
            s("circle", {
              cx: "8.75",
              cy: "14.848",
              r: "0.75"
            })
          ]),
          s("g", null, [
            s("circle", {
              cx: "15.25",
              cy: "18.187",
              r: "0.75"
            }),
            s("path", { d: "M12.248,18.687H8.5a.5.5,0,0,1,0-1h3.744a.5.5,0,1,1,0,1Z" })
          ])
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Dr = /* @__PURE__ */ u(N0, [["render", Q0]]), K0 = a({
  name: "CiCalculator2",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function J0(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Calculator_2",
        "data-name": "Calculator 2"
      }, [
        s("g", null, [
          s("path", { d: "M20.45,7.83h-2.8v2.81a.5.5,0,0,1-1,0V7.83H13.84a.5.5,0,0,1,0-1h2.81V4.02a.5.5,0,0,1,1,0V6.83h2.8A.5.5,0,0,1,20.45,7.83Z" }),
          s("path", { d: "M3.545,7.83a.5.5,0,0,1,0-1h6.619a.5.5,0,0,1,0,1Z" }),
          s("g", null, [
            s("path", { d: "M13.836,16.05a.5.5,0,0,1,0-1h6.619a.5.5,0,0,1,0,1Z" }),
            s("path", { d: "M13.836,20.191a.5.5,0,0,1,0-1h6.619a.5.5,0,0,1,0,1Z" })
          ]),
          s("path", { d: "M9.55,19.61a.5.5,0,0,1-.71.7L6.86,18.33c-.66.65-1.33,1.32-1.99,1.98a.5.5,0,0,1-.71-.7l1.99-1.99L4.16,15.63a.5.5,0,0,1,.71-.7l.58.58,1.4,1.4c.67-.66,1.33-1.32,1.99-1.98a.5.5,0,0,1,.71.7L7.56,17.62Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Fr = /* @__PURE__ */ u(K0, [["render", J0]]), Y0 = a({
  name: "CiCalendar",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function X0(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Calendar" }, [
        s("path", { d: "M18.44,4.955H16.5V3.545a.5.5,0,0,0-1,0v1.41h-7V3.545a.5.5,0,0,0-1,0v1.41H5.56a2.5,2.5,0,0,0-2.5,2.5v11a2.5,2.5,0,0,0,2.5,2.5H18.44a2.5,2.5,0,0,0,2.5-2.5v-11A2.5,2.5,0,0,0,18.44,4.955Zm1.5,13.5a1.5,1.5,0,0,1-1.5,1.5H5.56a1.5,1.5,0,0,1-1.5-1.5v-8.42H19.94Zm0-9.42H4.06V7.455a1.5,1.5,0,0,1,1.5-1.5H7.5v.59a.5.5,0,0,0,1,0v-.59h7v.59a.5.5,0,1,0,1,0v-.59h1.94a1.5,1.5,0,0,1,1.5,1.5Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Rr = /* @__PURE__ */ u(Y0, [["render", X0]]), x0 = a({
  name: "CiCalendarDate",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function e1(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Calendar_Date",
        "data-name": "Calendar Date"
      }, [
        s("g", null, [
          s("path", { d: "M18.435,4.955H16.5V3.545a.5.5,0,0,0-1,0v1.41h-7V3.545a.5.5,0,1,0-1,0v1.41H5.565a2.5,2.5,0,0,0-2.5,2.5v11a2.5,2.5,0,0,0,2.5,2.5h12.87a2.5,2.5,0,0,0,2.5-2.5v-11A2.5,2.5,0,0,0,18.435,4.955Zm1.5,13.5a1.5,1.5,0,0,1-1.5,1.5H5.565a1.5,1.5,0,0,1-1.5-1.5v-8.42h15.87Zm0-9.42H4.065V7.455a1.5,1.5,0,0,1,1.5-1.5H7.5v.59a.5.5,0,0,0,1,0v-.59h7v.59a.5.5,0,0,0,1,0v-.59h1.94a1.5,1.5,0,0,1,1.5,1.5Z" }),
          s("path", { d: "M11.492,17.173V13.714a.075.075,0,0,0-.114-.064l-.638.392a.15.15,0,0,1-.229-.128v-.65a.3.3,0,0,1,.146-.258l.764-.457a.3.3,0,0,1,.154-.043H12.2a.3.3,0,0,1,.3.3v4.367a.3.3,0,0,1-.3.3h-.409A.3.3,0,0,1,11.492,17.173Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Tr = /* @__PURE__ */ u(x0, [["render", e1]]), s1 = a({
  name: "CiCamera",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function o1(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Camera" }, [
        s("g", null, [
          s("path", { d: "M20.435,19.925H3.565a1.5,1.5,0,0,1-1.5-1.5V9.285a1.5,1.5,0,0,1,1.5-1.5H6.223a.5.5,0,0,0,.5-.454l.166-1.8a1.49,1.49,0,0,1,1.5-1.454h7.23a1.5,1.5,0,0,1,1.5,1.5l.164,1.756a.5.5,0,0,0,.5.454h2.658a1.5,1.5,0,0,1,1.5,1.5v9.14A1.5,1.5,0,0,1,20.435,19.925ZM3.565,8.785a.5.5,0,0,0-.5.5v9.14a.5.5,0,0,0,.5.5h16.87a.5.5,0,0,0,.5-.5V9.285a.5.5,0,0,0-.5-.5H17.777a1.5,1.5,0,0,1-1.494-1.362l-.166-1.8a.515.515,0,0,0-.5-.546H8.385a.5.5,0,0,0-.5.5L7.717,7.423A1.5,1.5,0,0,1,6.223,8.785Z" }),
          s("path", { d: "M12,17.282a4,4,0,1,1,4-4A4,4,0,0,1,12,17.282Zm0-7a3,3,0,1,0,3,3A3,3,0,0,0,12,10.282Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const qr = /* @__PURE__ */ u(s1, [["render", o1]]), t1 = a({
  name: "CiChat1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function a1(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Chat_1",
        "data-name": "Chat 1"
      }, [
        s("path", { d: "M3.316,19.937A1.251,1.251,0,0,1,2.065,18.69l0-1.716L2.068,6.56a2.5,2.5,0,0,1,2.5-2.5H19.44a2.5,2.5,0,0,1,2.5,2.5v8.41a2.5,2.5,0,0,1-2.5,2.5H6.918a1.49,1.49,0,0,0-1.06.439L4.2,19.57A1.246,1.246,0,0,1,3.316,19.937ZM4.568,5.062a1.5,1.5,0,0,0-1.5,1.5L3.06,16.973l0,1.714a.25.25,0,0,0,.427.176L5.151,17.2a2.482,2.482,0,0,1,1.767-.732H19.44a1.5,1.5,0,0,0,1.5-1.5V6.562a1.5,1.5,0,0,0-1.5-1.5Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Ur = /* @__PURE__ */ u(t1, [["render", a1]]), l1 = a({
  name: "CiChat2",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function r1(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Chat_2",
        "data-name": "Chat 2"
      }, [
        s("path", { d: "M12,19.937a1.243,1.243,0,0,1-.833-.319L9.281,17.932a1.531,1.531,0,0,0-1.08-.458H4.561a2.5,2.5,0,0,1-2.5-2.5l.006-8.41a2.5,2.5,0,0,1,2.5-2.5H19.439a2.5,2.5,0,0,1,2.5,2.5v8.411a2.5,2.5,0,0,1-2.5,2.5H15.79a1.483,1.483,0,0,0-1.062.441l-1.895,1.7A1.243,1.243,0,0,1,12,19.937ZM4.567,5.063a1.5,1.5,0,0,0-1.5,1.5l-.006,8.411a1.5,1.5,0,0,0,1.5,1.5H8.2a2.483,2.483,0,0,1,1.767.732l1.864,1.667a.248.248,0,0,0,.333,0l1.874-1.682a2.5,2.5,0,0,1,1.751-.716h3.649a1.5,1.5,0,0,0,1.5-1.5V6.563a1.5,1.5,0,0,0-1.5-1.5Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Gr = /* @__PURE__ */ u(l1, [["render", r1]]), n1 = a({
  name: "CiCircleAlert",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function i1(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Circle_Alert",
        "data-name": "Circle Alert"
      }, [
        s("g", null, [
          s("g", null, [
            s("path", { d: "M12.5,9a.5.5,0,0,0-1,0h0V13.02a.5.5,0,0,0,1,0Z" }),
            s("circle", {
              cx: "12",
              cy: "15.001",
              r: "0.5"
            })
          ]),
          s("path", { d: "M12,21.935A9.933,9.933,0,1,1,21.934,12,9.945,9.945,0,0,1,12,21.935ZM12,3.069A8.933,8.933,0,1,0,20.934,12,8.944,8.944,0,0,0,12,3.069Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Wr = /* @__PURE__ */ u(n1, [["render", i1]]), c1 = a({
  name: "CiCircleCheck",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function p1(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Circle_Check",
        "data-name": "Circle Check"
      }, [
        s("g", null, [
          s("path", { d: "M15.81,10.4a.5.5,0,0,0-.71-.71l-3.56,3.56L9.81,11.52a.5.5,0,0,0-.71.71l2.08,2.08a.513.513,0,0,0,.71,0Z" }),
          s("path", { d: "M12,21.934A9.934,9.934,0,1,1,21.933,12,9.945,9.945,0,0,1,12,21.934ZM12,3.067A8.934,8.934,0,1,0,20.933,12,8.944,8.944,0,0,0,12,3.067Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Er = /* @__PURE__ */ u(c1, [["render", p1]]), d1 = a({
  name: "CiCircleChevDown",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function u1(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Circle_Chev_Down",
        "data-name": "Circle Chev Down"
      }, [
        s("g", null, [
          s("path", { d: "M12.35,13.85a.492.492,0,0,1-.7,0l-3-3a.495.495,0,0,1,.7-.7L12,12.79l2.65-2.64a.495.495,0,0,1,.7.7Z" }),
          s("path", { d: "M21.933,12A9.933,9.933,0,1,1,12,2.067,9.944,9.944,0,0,1,21.933,12ZM3.067,12A8.933,8.933,0,1,0,12,3.067,8.943,8.943,0,0,0,3.067,12Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Nr = /* @__PURE__ */ u(d1, [["render", u1]]), f1 = a({
  name: "CiCircleChevLeft",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function y1(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Circle_Chev_Left",
        "data-name": "Circle Chev Left"
      }, [
        s("g", null, [
          s("path", { d: "M10.15,12.35a.492.492,0,0,1,0-.7l3-3a.495.495,0,0,1,.7.7L11.21,12l2.64,2.65a.495.495,0,0,1-.7.7Z" }),
          s("path", { d: "M12,21.933A9.933,9.933,0,1,1,21.933,12,9.944,9.944,0,0,1,12,21.933ZM12,3.067A8.933,8.933,0,1,0,20.933,12,8.943,8.943,0,0,0,12,3.067Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Qr = /* @__PURE__ */ u(f1, [["render", y1]]), C1 = a({
  name: "CiCircleChevRight",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function m1(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Circle_Chev_Right",
        "data-name": "Circle Chev Right"
      }, [
        s("g", null, [
          s("path", { d: "M13.85,11.65a.492.492,0,0,1,0,.7l-3,3a.495.495,0,0,1-.7-.7L12.79,12,10.15,9.35a.495.495,0,0,1,.7-.7Z" }),
          s("path", { d: "M12,2.067A9.933,9.933,0,1,1,2.067,12,9.944,9.944,0,0,1,12,2.067Zm0,18.866A8.933,8.933,0,1,0,3.067,12,8.943,8.943,0,0,0,12,20.933Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Kr = /* @__PURE__ */ u(C1, [["render", m1]]), g1 = a({
  name: "CiCircleChevUp",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function B1(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Circle_Chev_Up",
        "data-name": "Circle Chev Up"
      }, [
        s("g", null, [
          s("path", { d: "M11.65,10.15a.492.492,0,0,1,.7,0l3,3a.495.495,0,0,1-.7.7L12,11.21,9.35,13.85a.495.495,0,0,1-.7-.7Z" }),
          s("path", { d: "M2.067,12A9.933,9.933,0,1,1,12,21.934,9.944,9.944,0,0,1,2.067,12Zm18.866,0A8.933,8.933,0,1,0,12,20.934,8.943,8.943,0,0,0,20.933,12Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Jr = /* @__PURE__ */ u(g1, [["render", B1]]), h1 = a({
  name: "CiCircleInfo",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function v1(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Circle_Info",
        "data-name": "Circle Info"
      }, [
        s("g", null, [
          s("g", null, [
            s("path", { d: "M11.5,15a.5.5,0,0,0,1,0h0V10.981a.5.5,0,0,0-1,0Z" }),
            s("circle", {
              cx: "12",
              cy: "8.999",
              r: "0.5"
            })
          ]),
          s("path", { d: "M12,2.065A9.934,9.934,0,1,1,2.066,12,9.945,9.945,0,0,1,12,2.065Zm0,18.867A8.934,8.934,0,1,0,3.066,12,8.944,8.944,0,0,0,12,20.932Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Yr = /* @__PURE__ */ u(h1, [["render", v1]]), $1 = a({
  name: "CiCircleList",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function S1(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Circle_List",
        "data-name": "Circle List"
      }, [
        s("g", null, [
          s("path", { d: "M20.438,6.062h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z" }),
          s("path", { d: "M20.438,12.5h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z" }),
          s("path", { d: "M20.438,18.935h-9a.5.5,0,1,1,0-1h9a.5.5,0,0,1,0,1Z" }),
          s("path", { d: "M5.562,8.062a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,5.562,8.062Zm0-4a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,5.562,4.062Z" }),
          s("path", { d: "M5.562,14.5a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,5.562,14.5Zm0-4a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,5.562,10.5Z" }),
          s("path", { d: "M5.562,20.938a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,5.562,20.938Zm0-4a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,5.562,16.938Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Xr = /* @__PURE__ */ u($1, [["render", S1]]), k1 = a({
  name: "CiCircleMinus",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function w1(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Circle_Minus",
        "data-name": "Circle Minus"
      }, [
        s("g", null, [
          s("path", { d: "M15,11.5h0a.5.5,0,0,1,0,1H9a.5.5,0,0,1,0-1Z" }),
          s("path", { d: "M12,21.934A9.933,9.933,0,1,1,21.932,12,9.945,9.945,0,0,1,12,21.934ZM12,3.068A8.933,8.933,0,1,0,20.932,12,8.944,8.944,0,0,0,12,3.068Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const xr = /* @__PURE__ */ u(k1, [["render", w1]]), z1 = a({
  name: "CiCircleMore",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Z1(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Circle_More",
        "data-name": "Circle More"
      }, [
        s("g", null, [
          s("circle", {
            cx: "12.001",
            cy: "12",
            r: "1"
          }),
          s("circle", {
            cx: "16.001",
            cy: "12",
            r: "1"
          }),
          s("circle", {
            cx: "8.001",
            cy: "12",
            r: "1"
          }),
          s("path", { d: "M12,21.932A9.934,9.934,0,1,1,21.934,12,9.944,9.944,0,0,1,12,21.932ZM12,3.065A8.934,8.934,0,1,0,20.934,12,8.944,8.944,0,0,0,12,3.065Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const e4 = /* @__PURE__ */ u(z1, [["render", Z1]]), M1 = a({
  name: "CiCirclePlus",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function A1(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Circle_Plus",
        "data-name": "Circle Plus"
      }, [
        s("g", null, [
          s("path", { d: "M15,12.5H12.5V15a.5.5,0,0,1-1,0V12.5H9a.5.5,0,0,1,0-1h2.5V9a.5.5,0,0,1,1,0v2.5H15A.5.5,0,0,1,15,12.5Z" }),
          s("path", { d: "M12,21.932A9.934,9.934,0,1,1,21.932,12,9.944,9.944,0,0,1,12,21.932ZM12,3.065A8.934,8.934,0,1,0,20.932,12,8.944,8.944,0,0,0,12,3.065Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const s4 = /* @__PURE__ */ u(M1, [["render", A1]]), H1 = a({
  name: "CiCircleQuestion",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function V1(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Circle_Question",
        "data-name": "Circle Question"
      }, [
        s("g", null, [
          s("g", null, [
            s("path", { d: "M11.411,12.459a1.547,1.547,0,0,1,.341-.6,2.644,2.644,0,0,1,.535-.417,2.2,2.2,0,0,0,.363-.286,1.2,1.2,0,0,0,.256-.363A1.084,1.084,0,0,0,13,10.341a.923.923,0,0,0-.142-.517.938.938,0,0,0-.374-.338,1.123,1.123,0,0,0-.519-.119,1.173,1.173,0,0,0-.495.107.934.934,0,0,0-.389.335.884.884,0,0,0-.111.224.516.516,0,0,1-.483.359h0a.506.506,0,0,1-.479-.675,1.661,1.661,0,0,1,.178-.349,1.8,1.8,0,0,1,.748-.634,2.437,2.437,0,0,1,1.031-.215,2.4,2.4,0,0,1,1.082.231,1.737,1.737,0,0,1,.721.641,1.772,1.772,0,0,1,.257.96,1.841,1.841,0,0,1-.118.678,1.685,1.685,0,0,1-.334.536,2.289,2.289,0,0,1-.52.417,2.277,2.277,0,0,0-.462.369,1.113,1.113,0,0,0-.256.455,2.344,2.344,0,0,0-.045.283.487.487,0,0,1-.483.429h0a.484.484,0,0,1-.483-.531A2.931,2.931,0,0,1,11.411,12.459Z" }),
            s("circle", {
              cx: "11.793",
              cy: "14.891",
              r: "0.587"
            })
          ]),
          s("path", { d: "M12,21.931A9.934,9.934,0,1,1,21.934,12,9.945,9.945,0,0,1,12,21.931ZM12,3.064A8.934,8.934,0,1,0,20.934,12,8.943,8.943,0,0,0,12,3.064Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const o4 = /* @__PURE__ */ u(H1, [["render", V1]]), I1 = a({
  name: "CiCircleRemove",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function _1(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Circle_Remove",
        "data-name": "Circle Remove"
      }, [
        s("g", null, [
          s("path", { d: "M9.525,13.765a.5.5,0,0,0,.71.71c.59-.59,1.175-1.18,1.765-1.76l1.765,1.76a.5.5,0,0,0,.71-.71c-.59-.58-1.18-1.175-1.76-1.765.41-.42.82-.825,1.23-1.235.18-.18.35-.36.53-.53a.5.5,0,0,0-.71-.71L12,11.293,10.235,9.525a.5.5,0,0,0-.71.71L11.293,12Z" }),
          s("path", { d: "M12,21.933A9.933,9.933,0,1,1,21.934,12,9.945,9.945,0,0,1,12,21.933ZM12,3.067A8.933,8.933,0,1,0,20.934,12,8.944,8.944,0,0,0,12,3.067Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const t4 = /* @__PURE__ */ u(I1, [["render", _1]]), b1 = a({
  name: "CiClock1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function O1(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Clock_1",
        "data-name": "Clock 1"
      }, [
        s("g", null, [
          s("path", { d: "M12,21.933A9.933,9.933,0,1,1,21.933,12,9.944,9.944,0,0,1,12,21.933ZM12,3.067A8.933,8.933,0,1,0,20.933,12,8.943,8.943,0,0,0,12,3.067Z" }),
          s("path", { d: "M11.5,6a.5.5,0,0,1,1,0v4.8c1.13-1.13,2.26-2.27,3.39-3.4a.5.5,0,0,1,.71.71l-4.26,4.25a.463.463,0,0,1-.58.07c-.01-.02-.02-.02-.03-.02a.425.425,0,0,1-.22-.33Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const a4 = /* @__PURE__ */ u(b1, [["render", O1]]), L1 = a({
  name: "CiClock2",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function j1(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Clock_2",
        "data-name": "Clock 2"
      }, [
        s("g", null, [
          s("path", { d: "M12,21.933A9.933,9.933,0,1,1,21.933,12,9.944,9.944,0,0,1,12,21.933ZM12,3.067A8.933,8.933,0,1,0,20.933,12,8.943,8.943,0,0,0,12,3.067Z" }),
          s("path", { d: "M18,12.5H12a.429.429,0,0,1-.34-.14c-.01,0-.01-.01-.02-.02A.429.429,0,0,1,11.5,12V6a.5.5,0,0,1,1,0v5.5H18A.5.5,0,0,1,18,12.5Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const l4 = /* @__PURE__ */ u(L1, [["render", j1]]), P1 = a({
  name: "CiCloud",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function D1(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("rect", {
        id: "Cloud",
        x: "0",
        y: "0",
        width: "24",
        height: "24",
        style: { fill: "none" }
      }, null, -1),
      s("g", {
        id: "Cloud1",
        "serif:id": "Cloud"
      }, [
        s("path", { d: "M16.588,10.046c0.215,-0.032 0.434,-0.048 0.66,-0.048c2.7,-0 4.871,2.278 4.692,5.016c-0.163,2.494 -2.338,4.389 -4.838,4.389l-7.456,-0c-3.982,-0 -7.402,-3.069 -7.588,-7.047c-0.199,-4.251 3.188,-7.758 7.395,-7.758c3.415,-0 6.286,2.309 7.135,5.448Zm-13.531,2.263c0.162,3.448 3.138,6.094 6.589,6.094l7.456,-0c1.977,-0 3.712,-1.482 3.841,-3.454c0.141,-2.156 -1.568,-3.951 -3.695,-3.951c-0.279,-0 -0.546,0.032 -0.806,0.091l-0.001,0.001c-0.343,0.076 -0.666,-0.128 -0.742,-0.471l-0.001,-0.003c-0.625,-2.871 -3.182,-5.018 -6.245,-5.018c-3.64,-0 -6.569,3.034 -6.396,6.711Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const r4 = /* @__PURE__ */ u(P1, [["render", D1]]), F1 = a({
  name: "CiCloudDrizzle",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function R1(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("rect", {
        id: "Cloud-Drizzle",
        "serif:id": "Cloud Drizzle",
        x: "0",
        y: "0",
        width: "24",
        height: "24",
        style: { fill: "none" }
      }, null, -1),
      s("g", {
        id: "Cloud-Drizzle1",
        "serif:id": "Cloud Drizzle"
      }, [
        s("path", { d: "M8.446,20.343c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,1.018c0,0.276 -0.224,0.5 -0.5,0.5c-0.276,0 -0.5,-0.224 -0.5,-0.5l0,-1.018Zm9.159,-3.556c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,1.018c0,0.276 -0.224,0.5 -0.5,0.5c-0.276,0 -0.5,-0.224 -0.5,-0.5l0,-1.018Zm-6.105,0c-0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,1.018c-0,0.276 -0.224,0.5 -0.5,0.5c-0.276,0 -0.5,-0.224 -0.5,-0.5l0,-1.018Zm3.052,3.556c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,1.018c0,0.276 -0.224,0.5 -0.5,0.5c-0.276,0 -0.5,-0.224 -0.5,-0.5l0,-1.018Zm-9.159,-3.556c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,1.018c0,0.276 -0.224,0.5 -0.5,0.5c-0.276,0 -0.5,-0.224 -0.5,-0.5l0,-1.018Zm10.364,-10.282c0.15,-0.018 0.302,-0.028 0.459,-0.028c2.225,-0 4.014,1.878 3.867,4.135c-0.135,2.055 -1.925,3.616 -3.984,3.616l-5.989,-0c-3.251,-0 -6.042,-2.507 -6.194,-5.754c-0.163,-3.471 2.602,-6.335 6.037,-6.335c2.759,-0 5.081,1.845 5.804,4.366Zm-10.842,1.922c0.127,2.717 2.475,4.801 5.195,4.801l5.989,-0c1.536,-0 2.885,-1.149 2.986,-2.682c0.109,-1.675 -1.218,-3.069 -2.869,-3.069c-0.217,-0 -0.424,0.026 -0.625,0.071l-0.002,0.001c-0.329,0.073 -0.641,-0.126 -0.714,-0.455l-0,-0.002c-0.493,-2.261 -2.508,-3.953 -4.922,-3.953c-2.867,-0 -5.174,2.391 -5.038,5.288Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const n4 = /* @__PURE__ */ u(F1, [["render", R1]]), T1 = a({
  name: "CiCloudMoon",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function q1(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("rect", {
        id: "Cloud-Moon",
        "serif:id": "Cloud Moon",
        x: "0",
        y: "0",
        width: "24",
        height: "24",
        style: { fill: "none" }
      }, null, -1),
      s("g", {
        id: "Cloud-Moon1",
        "serif:id": "Cloud Moon"
      }, [
        s("path", { d: "M18.051,14.945c0.442,0.675 0.679,1.497 0.622,2.376c-0.134,2.054 -1.925,3.616 -3.983,3.616l-5.987,-0c-3.251,-0 -6.04,-2.506 -6.193,-5.752c-0.162,-3.47 2.602,-6.333 6.036,-6.333c0.42,-0 0.83,0.042 1.225,0.124c-0.005,-2.664 1.652,-4.954 3.975,-5.871l0.003,-0.001c0.597,-0.232 1.146,0.382 0.914,0.945c-0.302,0.74 -0.438,1.555 -0.374,2.414c0.164,2.237 1.788,4.193 3.971,4.732c0.814,0.201 1.619,0.211 2.361,0.057c0.611,-0.136 1.083,0.537 0.778,1.045c-0.002,0.003 -0.004,0.006 -0.005,0.009c-0.772,1.23 -1.948,2.173 -3.343,2.639Zm-7.27,-5.667c1.721,0.685 3.051,2.14 3.567,3.939c0.149,-0.019 0.302,-0.028 0.459,-0.028c0.959,-0 1.837,0.349 2.514,0.926c1.127,-0.275 2.11,-0.913 2.825,-1.783c-0.687,0.063 -1.404,0.012 -2.126,-0.167c-2.597,-0.641 -4.533,-2.965 -4.729,-5.628c-0.057,-0.776 0.023,-1.521 0.223,-2.219c-1.715,0.945 -2.856,2.831 -2.733,4.96Zm-7.272,5.86c0.128,2.716 2.474,4.799 5.194,4.799l5.987,-0c1.535,-0 2.885,-1.149 2.985,-2.681c0.109,-1.674 -1.218,-3.067 -2.868,-3.067c-0.218,-0 -0.424,0.024 -0.625,0.07l-0.003,0.001c-0.33,0.073 -0.64,-0.124 -0.713,-0.454l-0.001,-0.002c-0.492,-2.261 -2.506,-3.952 -4.919,-3.952c-2.866,-0 -5.172,2.39 -5.037,5.286Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const i4 = /* @__PURE__ */ u(T1, [["render", q1]]), U1 = a({
  name: "CiCloudOff",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function G1(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Cloud_Off",
        "data-name": "Cloud Off"
      }, [
        s("g", null, [
          s("path", { d: "M20.8,16.577c-.41.49-1.12-.22-.7-.71a3.585,3.585,0,0,0,.37-4.04A3.266,3.266,0,0,0,16.6,10.3a.5.5,0,0,1-.56-.23,5.391,5.391,0,0,0-5.3-3.1c-.64.04-.64-.96,0-1a6.346,6.346,0,0,1,5.99,3.26,4.255,4.255,0,0,1,4.6,2.1A4.579,4.579,0,0,1,20.8,16.577Z" }),
          s("path", { d: "M4.941,4.237a.5.5,0,0,0-.7.7l2.69,2.69a6.273,6.273,0,0,0-1.94,3.78,3.342,3.342,0,0,0-2.65,4.6,3.518,3.518,0,0,0,3.48,2.05h11.53c.58.57,1.14,1.14,1.71,1.71a.5.5,0,0,0,.71-.71Zm.3,12.81a2.352,2.352,0,0,1-2.16-2.25,2.309,2.309,0,0,1,2.35-2.42.515.515,0,0,0,.5-.5,5.377,5.377,0,0,1,1.71-3.54q4.35,4.365,8.71,8.72Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const c4 = /* @__PURE__ */ u(U1, [["render", G1]]), W1 = a({
  name: "CiCloudOn",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function E1(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Cloud_On",
        "data-name": "Cloud On"
      }, [
        s("path", { d: "M21.917,13.484a4.381,4.381,0,0,0-5.19-4.26,6.281,6.281,0,0,0-11.75,2.19,3.237,3.237,0,0,0-2.66,2,3.433,3.433,0,0,0,.82,3.74c1.12,1.03,2.54.89,3.94.89h10.15a4.514,4.514,0,0,0,4.69-4.32Zm-4.65,3.56c-1.19.01-2.38,0-3.56,0-2.75,0-5.49.06-8.23,0a2.383,2.383,0,0,1-2.33-1.73,2.333,2.333,0,0,1,2.28-2.94.515.515,0,0,0,.5-.5,5.3,5.3,0,0,1,10.11-1.81.5.5,0,0,0,.56.23,3.366,3.366,0,0,1,4.33,3.32A3.489,3.489,0,0,1,17.267,17.044Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const p4 = /* @__PURE__ */ u(W1, [["render", E1]]), N1 = a({
  name: "CiCloudRainbow",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Q1(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("rect", {
        id: "Cloud-Rainbow",
        "serif:id": "Cloud Rainbow",
        x: "0",
        y: "0",
        width: "24",
        height: "24",
        style: { fill: "none" }
      }, null, -1),
      s("g", {
        id: "Cloud-Rainbow1",
        "serif:id": "Cloud Rainbow"
      }, [
        s("path", { d: "M13.845,10.956c0.149,0.31 0.272,0.635 0.368,0.971c0.157,-0.019 0.317,-0.029 0.481,-0.029c2.278,-0 4.11,1.922 3.959,4.232c-0.138,2.104 -1.971,3.703 -4.079,3.703l-6.153,-0c-3.332,-0 -6.193,-2.569 -6.349,-5.898c-0.168,-3.558 2.667,-6.493 6.188,-6.493c0.254,-0 0.505,0.015 0.751,0.045c0.213,-0.286 0.451,-0.557 0.715,-0.82c3.325,-3.336 8.732,-3.336 12.067,-0.001c0.196,0.196 0.196,0.512 0,0.708c-0.195,0.195 -0.512,0.195 -0.707,-0c-2.944,-2.945 -7.717,-2.945 -10.652,-0.001c-0.115,0.115 -0.223,0.23 -0.327,0.348c0.501,0.156 0.974,0.374 1.411,0.645c2.369,-2.314 6.178,-2.297 8.525,0.05c0.196,0.196 0.196,0.512 0,0.708c-0.195,0.195 -0.512,0.195 -0.707,-0c-1.922,-1.923 -5.016,-1.974 -7.001,-0.155c0.371,0.325 0.702,0.692 0.987,1.096c1.412,-1.303 3.6,-1.27 4.971,0.101c0.196,0.196 0.196,0.512 0,0.708c-0.195,0.195 -0.512,0.195 -0.707,-0c-1.014,-1.015 -2.648,-1.015 -3.663,-0c-0.026,0.026 -0.053,0.054 -0.078,0.082Zm-10.774,2.932c0.131,2.799 2.549,4.945 5.35,4.945l6.153,-0c1.585,-0 2.977,-1.186 3.081,-2.768c0.113,-1.728 -1.257,-3.167 -2.961,-3.167c-0.224,-0 -0.437,0.025 -0.644,0.073c-0.002,0 -0.005,0.001 -0.007,0.002c-0.334,0.071 -0.642,-0.128 -0.713,-0.46c-0.508,-2.329 -2.584,-4.071 -5.07,-4.071c-2.953,-0 -5.33,2.462 -5.189,5.446Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const d4 = /* @__PURE__ */ u(N1, [["render", Q1]]), K1 = a({
  name: "CiCloudSun",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function J1(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("rect", {
        id: "Cloud-Sun",
        "serif:id": "Cloud Sun",
        x: "0",
        y: "0",
        width: "24",
        height: "24",
        style: { fill: "none" }
      }, null, -1),
      s("g", {
        id: "Cloud-Sun1",
        "serif:id": "Cloud Sun"
      }, [
        s("path", { d: "M17.879,15.227c0.26,0.565 0.387,1.202 0.343,1.873c-0.134,2.054 -1.924,3.616 -3.982,3.616l-5.987,-0c-3.251,-0 -6.04,-2.506 -6.193,-5.752c-0.162,-3.47 2.602,-6.333 6.036,-6.333c0.496,-0 0.978,0.059 1.439,0.172l0.743,-0.43l-0.57,-2.116l-0.001,-0.002c-0.189,-0.715 0.471,-1.359 1.162,-1.171c0,0 1.893,0.506 2.137,0.571l1.089,-1.894c0.356,-0.628 1.277,-0.639 1.654,-0.011c0.001,0.002 0.002,0.004 0.004,0.006l1.101,1.899l2.116,-0.57l0.002,-0.001c0.711,-0.188 1.36,0.46 1.172,1.171l-0.001,0.002l-0.571,2.126l1.898,1.091c0.002,0.001 0.005,0.003 0.007,0.005c0.626,0.375 0.626,1.272 0,1.647c-0.002,0.001 -0.004,0.002 -0.006,0.004l-1.899,1.101l0.571,2.116l0.001,0.002c0.188,0.711 -0.461,1.36 -1.172,1.172l-0.001,-0.001l-1.092,-0.293Zm-7.118,-5.978c0.382,0.188 0.741,0.415 1.072,0.676c0.188,-1.545 1.5,-2.728 3.087,-2.728c1.716,0 3.11,1.382 3.11,3.11c0,1.388 -0.911,2.565 -2.167,2.964c0.393,0.167 0.754,0.396 1.068,0.676c0.047,0.005 0.093,0.014 0.139,0.027l2.088,0.561c-0.101,-0.375 -0.56,-2.075 -0.56,-2.075c-0.122,-0.424 0.068,-0.868 0.441,-1.075c0,-0 1.543,-0.896 1.865,-1.083c-0.339,-0.195 -1.862,-1.071 -1.857,-1.068c-0.381,-0.211 -0.571,-0.655 -0.449,-1.079l0.56,-2.085l-2.078,0.56c-0.003,0.001 -0.005,0.002 -0.008,0.002c-0.421,0.106 -0.858,-0.073 -1.064,-0.444c-0,0 -0.896,-1.543 -1.083,-1.865l-1.071,1.864c-0.003,0.003 -0.005,0.007 -0.007,0.011c-0.228,0.373 -0.643,0.538 -1.058,0.434c-0.003,-0 -0.005,-0.001 -0.008,-0.002l-2.088,-0.558l0.56,2.075c0.001,0.003 0.002,0.006 0.002,0.009c0.105,0.417 -0.087,0.854 -0.441,1.062l-0.053,0.031Zm2.209,1.854c0.155,0.212 0.297,0.434 0.423,0.666c0.386,0.4 0.927,0.648 1.527,0.648c1.164,0 2.11,-0.946 2.11,-2.11c0,-1.172 -0.946,-2.11 -2.11,-2.11c-1.164,0 -2.11,0.938 -2.11,2.11c0,0.282 0.058,0.549 0.16,0.796Zm3.387,3.676c-0.517,-0.502 -1.223,-0.811 -2,-0.811c-0.218,-0 -0.424,0.024 -0.625,0.07l-0.003,0.001c-0.33,0.073 -0.64,-0.124 -0.714,-0.454l-0,-0.002c-0.492,-2.261 -2.506,-3.952 -4.919,-3.952c-2.866,-0 -5.173,2.39 -5.037,5.286c0.128,2.716 2.474,4.799 5.194,4.799l5.987,-0c1.535,-0 2.885,-1.149 2.985,-2.681c0.055,-0.854 -0.263,-1.635 -0.807,-2.195c-0.021,-0.02 -0.041,-0.04 -0.061,-0.061Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const u4 = /* @__PURE__ */ u(K1, [["render", J1]]), Y1 = a({
  name: "CiCoffeeBean",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function X1(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Coffee_Bean",
        "data-name": "Coffee Bean"
      }, [
        s("path", { d: "M19.151,4.868a6.744,6.744,0,0,0-5.96-1.69,12.009,12.009,0,0,0-6.54,3.47,11.988,11.988,0,0,0-3.48,6.55,6.744,6.744,0,0,0,1.69,5.95,6.406,6.406,0,0,0,4.63,1.78,11.511,11.511,0,0,0,7.87-3.56C21.3,13.428,22.1,7.818,19.151,4.868Zm-14.99,8.48a11.041,11.041,0,0,1,3.19-5.99,10.976,10.976,0,0,1,5.99-3.19,8.016,8.016,0,0,1,1.18-.09,5.412,5.412,0,0,1,3.92,1.49.689.689,0,0,1,.11.13,6.542,6.542,0,0,1-2.12,1.23,7.666,7.666,0,0,0-2.96,1.93,7.666,7.666,0,0,0-1.93,2.96,6.589,6.589,0,0,1-1.71,2.63,6.7,6.7,0,0,1-2.63,1.71,7.478,7.478,0,0,0-2.35,1.36A6.18,6.18,0,0,1,4.161,13.348Zm12.49,3.31c-3.55,3.55-8.52,4.35-11.08,1.79a1.538,1.538,0,0,1-.12-.13,6.677,6.677,0,0,1,2.13-1.23,7.862,7.862,0,0,0,2.96-1.93,7.738,7.738,0,0,0,1.93-2.96,6.589,6.589,0,0,1,1.71-2.63,6.589,6.589,0,0,1,2.63-1.71,7.6,7.6,0,0,0,2.34-1.37C20.791,9.2,19.821,13.488,16.651,16.658Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const f4 = /* @__PURE__ */ u(Y1, [["render", X1]]), x1 = a({
  name: "CiCoffeeCup",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ee(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Coffee_Cup",
        "data-name": "Coffee Cup"
      }, [
        s("path", { d: "M18.79,5.67a1.5,1.5,0,0,0-1.16-1.46l-.38-1.38a1.081,1.081,0,0,0-1.05-.76H7.79a1.06,1.06,0,0,0-1.04.76L6.37,4.21A1.537,1.537,0,0,0,5.21,5.76,1.476,1.476,0,0,0,6.27,7.18l.1,2.77a.75.75,0,0,0-.42.22.768.768,0,0,0-.21.56l.24,5.76a.759.759,0,0,0,.65.72l.08,2.22a2.579,2.579,0,0,0,2.59,2.5h5.39a2.581,2.581,0,0,0,2.6-2.5l.08-2.22a.76.76,0,0,0,.64-.72l.24-5.76a.768.768,0,0,0-.21-.56.72.72,0,0,0-.41-.22l.1-2.77A1.534,1.534,0,0,0,18.79,5.67Zm-11-2.6,8.49.03.3,1.07H7.44Zm8.5,16.33a1.578,1.578,0,0,1-1.6,1.53H9.3A1.575,1.575,0,0,1,7.71,19.4l-.08-2.18h8.74ZM9.9,13.58a2.1,2.1,0,1,1,2.1,2.1A2.1,2.1,0,0,1,9.9,13.58Zm6.73-3.65H7.37l-.1-2.67h9.45Zm.66-3.67H6.71a.522.522,0,0,1-.5-.59.5.5,0,0,1,.5-.5H17.29a.528.528,0,0,1,.5.59A.5.5,0,0,1,17.29,6.26Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const y4 = /* @__PURE__ */ u(x1, [["render", ee]]), se = a({
  name: "CiCoinInsert",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function oe(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Coin_Insert",
        "data-name": "Coin Insert"
      }, [
        s("g", null, [
          s("path", { d: "M21.44,17.7H17.77a7.484,7.484,0,0,0,1.78-4.86A7.55,7.55,0,1,0,6.23,17.7H2.56a.508.508,0,0,0-.5.5.5.5,0,0,0,.5.5H21.44a.5.5,0,0,0,.5-.5A.508.508,0,0,0,21.44,17.7Zm-5.03,0H7.62a6.546,6.546,0,1,1,8.78-.01Z" }),
          s("path", { d: "M14,13.965a1.616,1.616,0,0,1-1.5,1.61v.65a.485.485,0,0,1-.5.48.491.491,0,0,1-.5-.48v-.64h-.81a.5.5,0,0,1-.5-.5.508.508,0,0,1,.5-.5h1.69a.617.617,0,0,0,.62-.62.623.623,0,0,0-.62-.62h-.75a1.618,1.618,0,0,1-.13-3.23v-.65a.491.491,0,0,1,.5-.48.485.485,0,0,1,.5.48v.64h.81a.5.5,0,0,1,0,1H11.63a.62.62,0,0,0,0,1.24h.75A1.626,1.626,0,0,1,14,13.965Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const C4 = /* @__PURE__ */ u(se, [["render", oe]]), te = a({
  name: "CiCoins1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ae(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Coins_1",
        "data-name": "Coins 1"
      }, [
        s("path", { d: "M18.46,10.905a3.469,3.469,0,0,0-2.47,1.04,2.3,2.3,0,0,0-.86-1.73,2.257,2.257,0,0,0,.86-1.78,2.288,2.288,0,0,0-2.28-2.29H4.35a2.284,2.284,0,0,0-1.43,4.07,2.282,2.282,0,0,0,0,3.57,2.277,2.277,0,0,0,1.43,4.06h9.36a2.29,2.29,0,0,0,2.06-1.29,3.434,3.434,0,0,0,2.69,1.3,3.475,3.475,0,1,0,0-6.95Zm-4.75,5.94H4.35a1.28,1.28,0,1,1,0-2.56h9.36a1.28,1.28,0,1,1,0,2.56Zm0-3.56H4.35a1.285,1.285,0,1,1,0-2.57h9.36a1.285,1.285,0,0,1,0,2.57Zm0-3.57H4.35a1.285,1.285,0,1,1,0-2.57h9.36a1.285,1.285,0,0,1,0,2.57Zm4.75,7.14a2.475,2.475,0,1,1,2.48-2.48A2.477,2.477,0,0,1,18.46,16.855Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const m4 = /* @__PURE__ */ u(te, [["render", ae]]), le = a({
  name: "CiCompass1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function re(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Compass_1",
        "data-name": "Compass 1"
      }, [
        s("g", null, [
          s("path", { d: "M4.661,20.937a1.589,1.589,0,0,1-1.117-.48,1.534,1.534,0,0,1-.4-1.59L6.58,8.937A3.8,3.8,0,0,1,8.938,6.58l9.93-3.439a1.537,1.537,0,0,1,1.589.4,1.532,1.532,0,0,1,.4,1.588L17.42,15.061a3.8,3.8,0,0,1-2.358,2.358l-9.93,3.439A1.442,1.442,0,0,1,4.661,20.937ZM19.337,4.062a.424.424,0,0,0-.142.024L9.267,7.525A2.8,2.8,0,0,0,7.525,9.266L4.087,19.2a.6.6,0,0,0,.717.718l9.93-3.439a2.8,2.8,0,0,0,1.741-1.741L19.913,4.8a.551.551,0,0,0-.163-.553A.609.609,0,0,0,19.337,4.062Z" }),
          s("circle", {
            cx: "12",
            cy: "12",
            r: "1.563"
          })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const g4 = /* @__PURE__ */ u(le, [["render", re]]), ne = a({
  name: "CiCreditCard1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ie(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Credit_Card_1",
        "data-name": "Credit Card 1"
      }, [
        s("g", null, [
          s("path", { d: "M19.44,5.14H4.56a2.5,2.5,0,0,0-2.5,2.5v8.72a2.5,2.5,0,0,0,2.5,2.5H19.44a2.5,2.5,0,0,0,2.5-2.5V7.64A2.5,2.5,0,0,0,19.44,5.14ZM3.06,7.64a1.5,1.5,0,0,1,1.5-1.5H19.44a1.5,1.5,0,0,1,1.5,1.5v.5H3.06Zm17.88,8.72a1.5,1.5,0,0,1-1.5,1.5H4.56a1.5,1.5,0,0,1-1.5-1.5V9.64H20.94Z" }),
          s("path", { d: "M8.063,14.247h-3a.5.5,0,1,1,0-1h3a.5.5,0,1,1,0,1Z" }),
          s("path", { d: "M18.934,14.25h-6.5a.5.5,0,1,1,0-1h6.5a.5.5,0,0,1,0,1Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const B4 = /* @__PURE__ */ u(ne, [["render", ie]]), ce = a({
  name: "CiCreditCard2",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function pe(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Credit_Card_2",
        "data-name": "Credit Card 2"
      }, [
        s("g", null, [
          s("path", { d: "M19.437,18.859H4.563a2.5,2.5,0,0,1-2.5-2.5V7.641a2.5,2.5,0,0,1,2.5-2.5H19.437a2.5,2.5,0,0,1,2.5,2.5v8.718A2.5,2.5,0,0,1,19.437,18.859ZM4.563,6.141a1.5,1.5,0,0,0-1.5,1.5v8.718a1.5,1.5,0,0,0,1.5,1.5H19.437a1.5,1.5,0,0,0,1.5-1.5V7.641a1.5,1.5,0,0,0-1.5-1.5Z" }),
          s("path", { d: "M8.063,14.247h-3a.5.5,0,1,1,0-1h3a.5.5,0,1,1,0,1Z" }),
          s("path", { d: "M18.934,14.249h-6.5a.5.5,0,0,1,0-1h6.5a.5.5,0,0,1,0,1Z" }),
          s("rect", {
            x: "16.434",
            y: "7.14",
            width: "2",
            height: "4",
            rx: "0.5",
            transform: "translate(8.293 26.574) rotate(-90)"
          })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const h4 = /* @__PURE__ */ u(ce, [["render", pe]]), de = a({
  name: "CiCreditCardOff",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ue(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Credit_Card_Off",
        "data-name": "Credit Card Off"
      }, [
        s("g", null, [
          s("path", { d: "M21.94,7.64v9.3a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5V9.64H13.49a.75.75,0,0,1,0-1.5h7.45v-.5a1.5,1.5,0,0,0-1.5-1.5H9.89a.5.5,0,0,1,0-1h9.55A2.5,2.5,0,0,1,21.94,7.64Z" }),
          s("path", { d: "M8.064,14.246h-3a.5.5,0,0,1,0-1h3a.5.5,0,0,1,0,1Z" }),
          s("path", { d: "M18.935,14.248h-.944a.5.5,0,0,1,0-1h.944a.5.5,0,0,1,0,1Z" }),
          s("path", { d: "M18.76,18.05,4.01,3.3c-.46-.46-1.17.25-.71.7L4.44,5.14a2.5,2.5,0,0,0-2.38,2.5v8.72a2.5,2.5,0,0,0,2.5,2.5h13.6L20,20.7c.45.46,1.16-.25.7-.71ZM3.06,7.64a1.5,1.5,0,0,1,1.5-1.5h.88c.66.67,1.33,1.34,2,2H3.06Zm9.49,5.61h-.12a.5.5,0,0,0-.5.5.508.508,0,0,0,.5.5h1.12l3.61,3.61H4.56a1.5,1.5,0,0,1-1.5-1.5V9.64H8.94Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const v4 = /* @__PURE__ */ u(de, [["render", ue]]), fe = a({
  name: "CiCrop",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ye(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Crop1" }, [
        s("path", { d: "M5.624,6.623l-2.075,-0c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l2.075,-0l0,-2.073c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,2.073l9.191,-0c1.414,-0 2.561,1.147 2.561,2.561l-0,9.193l2.075,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-2.075,0l-0,2.073c-0,0.276 -0.224,0.5 -0.5,0.5c-0.276,-0 -0.5,-0.224 -0.5,-0.5l-0,-2.073l-9.191,0c-1.414,0 -2.561,-1.147 -2.561,-2.561l0,-9.193Zm11.752,10.754l-0,-9.193c-0,-0.862 -0.699,-1.561 -1.561,-1.561l-9.191,-0l0,9.193c0,0.862 0.699,1.561 1.561,1.561l9.191,0Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const $4 = /* @__PURE__ */ u(fe, [["render", ye]]), Ce = a({
  name: "CiDark",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function me(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Dark" }, [
        s("path", { d: "M12.741,20.917a9.389,9.389,0,0,1-1.395-.105,9.141,9.141,0,0,1-1.465-17.7,1.177,1.177,0,0,1,1.21.281,1.273,1.273,0,0,1,.325,1.293,8.112,8.112,0,0,0-.353,2.68,8.266,8.266,0,0,0,4.366,6.857,7.628,7.628,0,0,0,3.711.993,1.242,1.242,0,0,1,.994,1.963h0A9.148,9.148,0,0,1,12.741,20.917ZM10.261,4.05a.211.211,0,0,0-.065.011,8.137,8.137,0,1,0,9.131,12.526h0a.224.224,0,0,0,.013-.235.232.232,0,0,0-.206-.136A8.619,8.619,0,0,1,14.946,15.1a9.274,9.274,0,0,1-4.883-7.7,9.123,9.123,0,0,1,.4-3.008.286.286,0,0,0-.069-.285A.184.184,0,0,0,10.261,4.05Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const S4 = /* @__PURE__ */ u(Ce, [["render", me]]), ge = a({
  name: "CiDatabase",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Be(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Database" }, [
        s("path", { d: "M12,2.06c-3.53,0-6.18,1.23-6.18,2.86V19.08c0,1.63,2.65,2.86,6.18,2.86s6.18-1.23,6.18-2.86V4.92C18.18,3.29,15.52,2.06,12,2.06Zm5.18,17.02c0,.78-1.97,1.86-5.18,1.86s-5.18-1.08-5.18-1.86V15.96A9.349,9.349,0,0,0,12,17.22a9.373,9.373,0,0,0,5.18-1.26Zm0-4.72c0,.78-1.97,1.86-5.18,1.86s-5.18-1.08-5.18-1.86V11.24A9.349,9.349,0,0,0,12,12.5a9.373,9.373,0,0,0,5.18-1.26Zm0-4.72c0,.78-1.97,1.86-5.18,1.86S6.82,10.42,6.82,9.64V6.52A9.349,9.349,0,0,0,12,7.78a9.373,9.373,0,0,0,5.18-1.26ZM12,6.78c-3.21,0-5.18-1.08-5.18-1.86S8.79,3.06,12,3.06s5.18,1.08,5.18,1.86S15.21,6.78,12,6.78Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const k4 = /* @__PURE__ */ u(ge, [["render", Be]]), he = a({
  name: "CiDeliveryTruck",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ve(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Delivery_Truck",
        "data-name": "Delivery Truck"
      }, [
        s("g", null, [
          s("path", { d: "M21.47,11.185l-1.03-1.43a2.5,2.5,0,0,0-2.03-1.05H14.03V6.565a2.5,2.5,0,0,0-2.5-2.5H4.56a2.507,2.507,0,0,0-2.5,2.5v9.94a1.5,1.5,0,0,0,1.5,1.5H4.78a2.242,2.242,0,0,0,4.44,0h5.56a2.242,2.242,0,0,0,4.44,0h1.22a1.5,1.5,0,0,0,1.5-1.5v-3.87A2.508,2.508,0,0,0,21.47,11.185ZM7,18.935a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,7,18.935Zm6.03-1.93H9.15a2.257,2.257,0,0,0-4.3,0H3.56a.5.5,0,0,1-.5-.5V6.565a1.5,1.5,0,0,1,1.5-1.5h6.97a1.5,1.5,0,0,1,1.5,1.5ZM17,18.935a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,17,18.935Zm3.94-2.43a.5.5,0,0,1-.5.5H19.15a2.257,2.257,0,0,0-4.3,0h-.82v-7.3h4.38a1.516,1.516,0,0,1,1.22.63l1.03,1.43a1.527,1.527,0,0,1,.28.87Z" }),
          s("path", { d: "M18.029,12.205h-2a.5.5,0,0,1,0-1h2a.5.5,0,0,1,0,1Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const w4 = /* @__PURE__ */ u(he, [["render", ve]]), $e = a({
  name: "CiDesktop",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Se(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Desktop" }, [
        s("path", { d: "M18.435,3.065H5.565a2.5,2.5,0,0,0-2.5,2.5v8.87a2.5,2.5,0,0,0,2.5,2.5h2.91l-.37,3H7a.5.5,0,0,0,0,1h10.01a.5.5,0,0,0,0-1H15.9l-.37-3h2.91a2.5,2.5,0,0,0,2.5-2.5V5.565A2.5,2.5,0,0,0,18.435,3.065Zm-9.33,16.87.38-3h5.03l.37,3Zm10.83-5.5a1.5,1.5,0,0,1-1.5,1.5H5.565a1.5,1.5,0,0,1-1.5-1.5v-.5h15.87Zm0-1.5H4.065V5.565a1.5,1.5,0,0,1,1.5-1.5h12.87a1.5,1.5,0,0,1,1.5,1.5Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const z4 = /* @__PURE__ */ u($e, [["render", Se]]), ke = a({
  name: "CiDesktopMouse1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function we(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Desktop_Mouse_1",
        "data-name": "Desktop Mouse 1"
      }, [
        s("path", { d: "M13.435,2.065h-2.87a6.5,6.5,0,0,0-6.5,6.5v6.87a6.5,6.5,0,0,0,6.5,6.5h2.87a6.5,6.5,0,0,0,6.5-6.5V8.565A6.5,6.5,0,0,0,13.435,2.065Zm-8.37,6.5a5.51,5.51,0,0,1,5.5-5.5h.94v6.44H5.065Zm13.87,6.87a5.5,5.5,0,0,1-5.5,5.5h-2.87a5.5,5.5,0,0,1-5.5-5.5v-4.93h13.87Zm0-5.93h-6.43V3.065h.93a5.5,5.5,0,0,1,5.5,5.5Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Z4 = /* @__PURE__ */ u(ke, [["render", we]]), ze = a({
  name: "CiDesktopMouse2",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ze(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Desktop_Mouse_2",
        "data-name": "Desktop Mouse 2"
      }, [
        s("g", null, [
          s("path", { d: "M13.437,21.938H10.563a6.508,6.508,0,0,1-6.5-6.5V8.562a6.508,6.508,0,0,1,6.5-6.5h2.874a6.508,6.508,0,0,1,6.5,6.5v6.876A6.508,6.508,0,0,1,13.437,21.938ZM10.563,3.062a5.506,5.506,0,0,0-5.5,5.5v6.876a5.506,5.506,0,0,0,5.5,5.5h2.874a5.506,5.506,0,0,0,5.5-5.5V8.562a5.506,5.506,0,0,0-5.5-5.5Z" }),
          s("path", { d: "M11.5,6.541v4a.5.5,0,0,0,1,0v-4a.5.5,0,0,0-1,0Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const M4 = /* @__PURE__ */ u(ze, [["render", Ze]]), Me = a({
  name: "CiDiscount1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ae(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("rect", {
        id: "Discount-1",
        "serif:id": "Discount 1",
        x: "0",
        y: "0",
        width: "24",
        height: "24",
        style: { fill: "none" }
      }, null, -1),
      s("g", {
        id: "Discount-11",
        "serif:id": "Discount 1"
      }, [
        s("path", { d: "M21.953,12c0,0.591 -0.346,1.124 -0.839,1.61c-0.295,0.29 -0.639,0.568 -0.942,0.85c-0.242,0.225 -0.46,0.446 -0.562,0.692c-0.107,0.257 -0.114,0.576 -0.105,0.913c0.011,0.416 0.056,0.855 0.059,1.265c0.006,0.691 -0.123,1.304 -0.526,1.708c-0.404,0.403 -1.017,0.532 -1.708,0.526c-0.41,-0.004 -0.849,-0.048 -1.264,-0.059c-0.337,-0.009 -0.657,-0.002 -0.914,0.105c-0.246,0.102 -0.467,0.32 -0.692,0.562c-0.282,0.303 -0.56,0.647 -0.85,0.941c-0.486,0.494 -1.019,0.84 -1.61,0.84c-0.591,-0 -1.124,-0.346 -1.61,-0.84c-0.29,-0.294 -0.568,-0.638 -0.85,-0.941c-0.225,-0.242 -0.447,-0.46 -0.692,-0.562c-0.257,-0.107 -0.577,-0.114 -0.913,-0.105c-0.416,0.011 -0.855,0.055 -1.265,0.059c-0.691,0.006 -1.305,-0.123 -1.708,-0.526c-0.404,-0.404 -0.532,-1.017 -0.526,-1.708c0.003,-0.41 0.048,-0.849 0.059,-1.265c0.009,-0.337 0.002,-0.656 -0.105,-0.914c-0.102,-0.245 -0.32,-0.466 -0.562,-0.691c-0.302,-0.282 -0.646,-0.56 -0.941,-0.85c-0.493,-0.486 -0.84,-1.019 -0.84,-1.61c0,-0.591 0.347,-1.124 0.84,-1.61c0.295,-0.29 0.639,-0.568 0.941,-0.85c0.242,-0.225 0.46,-0.446 0.562,-0.691c0.107,-0.258 0.114,-0.577 0.105,-0.914c-0.011,-0.416 -0.056,-0.855 -0.059,-1.265c-0.006,-0.691 0.122,-1.304 0.526,-1.708c0.403,-0.403 1.017,-0.532 1.708,-0.526c0.41,0.004 0.849,0.048 1.265,0.059c0.336,0.009 0.656,0.002 0.913,-0.105c0.245,-0.102 0.467,-0.32 0.692,-0.562c0.282,-0.303 0.56,-0.647 0.85,-0.941c0.486,-0.494 1.019,-0.84 1.61,-0.84c0.591,0 1.124,0.346 1.61,0.84c0.29,0.294 0.568,0.638 0.85,0.941c0.225,0.242 0.446,0.46 0.692,0.562c0.257,0.107 0.577,0.114 0.914,0.105c0.415,-0.011 0.854,-0.055 1.264,-0.059c0.691,-0.006 1.304,0.123 1.708,0.526c0.403,0.404 0.532,1.017 0.526,1.708c-0.003,0.41 -0.048,0.849 -0.059,1.265c-0.009,0.337 -0.002,0.656 0.105,0.913c0.102,0.246 0.32,0.467 0.562,0.692c0.303,0.282 0.647,0.56 0.942,0.85c0.493,0.486 0.839,1.019 0.839,1.61Zm-1,0c0,-0.188 -0.088,-0.355 -0.206,-0.518c-0.164,-0.226 -0.388,-0.437 -0.622,-0.646c-0.583,-0.521 -1.205,-1.04 -1.439,-1.604c-0.242,-0.585 -0.177,-1.399 -0.136,-2.178c0.017,-0.315 0.027,-0.622 -0.015,-0.895c-0.029,-0.191 -0.08,-0.365 -0.204,-0.489c-0.125,-0.125 -0.299,-0.176 -0.49,-0.205c-0.273,-0.042 -0.58,-0.032 -0.895,-0.015c-0.779,0.041 -1.593,0.106 -2.177,-0.136c-0.565,-0.234 -1.084,-0.855 -1.605,-1.439c-0.209,-0.234 -0.42,-0.458 -0.646,-0.622c-0.163,-0.118 -0.33,-0.206 -0.518,-0.206c-0.187,0 -0.355,0.088 -0.518,0.206c-0.226,0.164 -0.437,0.388 -0.646,0.622c-0.521,0.584 -1.04,1.205 -1.605,1.439c-0.584,0.242 -1.398,0.177 -2.177,0.136c-0.315,-0.017 -0.622,-0.027 -0.895,0.015c-0.192,0.029 -0.365,0.08 -0.49,0.205c-0.125,0.124 -0.175,0.298 -0.204,0.489c-0.042,0.273 -0.032,0.58 -0.016,0.895c0.042,0.779 0.107,1.593 -0.135,2.177c-0.234,0.565 -0.855,1.084 -1.439,1.605c-0.234,0.209 -0.458,0.42 -0.622,0.646c-0.118,0.163 -0.206,0.33 -0.206,0.518c0,0.188 0.088,0.355 0.206,0.518c0.164,0.226 0.388,0.437 0.622,0.646c0.584,0.521 1.205,1.04 1.439,1.605c0.242,0.584 0.177,1.398 0.135,2.177c-0.016,0.315 -0.026,0.622 0.016,0.895c0.029,0.191 0.079,0.365 0.204,0.489c0.125,0.125 0.298,0.176 0.49,0.205c0.273,0.042 0.58,0.032 0.895,0.015c0.779,-0.041 1.593,-0.106 2.177,0.136c0.565,0.234 1.084,0.855 1.605,1.439c0.209,0.234 0.42,0.458 0.646,0.622c0.163,0.118 0.331,0.206 0.518,0.206c0.188,-0 0.355,-0.088 0.518,-0.206c0.226,-0.164 0.437,-0.388 0.646,-0.622c0.521,-0.584 1.04,-1.205 1.605,-1.439c0.584,-0.242 1.398,-0.177 2.177,-0.136c0.315,0.017 0.622,0.027 0.895,-0.015c0.191,-0.029 0.365,-0.08 0.49,-0.205c0.124,-0.124 0.175,-0.298 0.204,-0.489c0.042,-0.273 0.032,-0.58 0.015,-0.895c-0.041,-0.779 -0.106,-1.593 0.136,-2.178c0.234,-0.564 0.856,-1.083 1.439,-1.604c0.234,-0.209 0.458,-0.42 0.622,-0.646c0.118,-0.163 0.206,-0.33 0.206,-0.518Zm-10.531,-1.762c-0.396,0.396 -1.039,0.396 -1.435,-0c-0.396,-0.396 -0.396,-1.04 -0,-1.436c0.396,-0.396 1.039,-0.396 1.435,0c0.396,0.396 0.396,1.04 0,1.436Zm4.471,-1.838c0.195,-0.195 0.512,-0.195 0.707,0c0.195,0.195 0.195,0.512 -0,0.707l-6.493,6.493c-0.195,0.195 -0.512,0.195 -0.707,0c-0.195,-0.195 -0.195,-0.512 -0,-0.707l6.493,-6.493Zm-1.315,5.363c0.396,-0.396 1.039,-0.396 1.435,0c0.396,0.396 0.396,1.04 0,1.436c-0.396,0.396 -1.039,0.396 -1.435,-0c-0.397,-0.396 -0.397,-1.04 -0,-1.436Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const A4 = /* @__PURE__ */ u(Me, [["render", Ae]]), He = a({
  name: "CiDollar",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ve(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Dollar" }, [
        s("g", null, [
          s("path", { d: "M12,21.934A9.934,9.934,0,1,1,21.934,12,9.945,9.945,0,0,1,12,21.934ZM12,3.066A8.934,8.934,0,1,0,20.934,12,8.944,8.944,0,0,0,12,3.066Z" }),
          s("path", { d: "M14.5,13.5a2.006,2.006,0,0,1-2,2v1.01a.5.5,0,0,1-1,0V15.5H10.25a.5.5,0,0,1,0-1H12.5a1,1,0,0,0,0-2h-1a2,2,0,0,1,0-4V7.49a.5.5,0,0,1,1,0V8.5h1.25a.5.5,0,0,1,0,1H11.5a1,1,0,0,0,0,2h1A2.006,2.006,0,0,1,14.5,13.5Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const H4 = /* @__PURE__ */ u(He, [["render", Ve]]), Ie = a({
  name: "CiDroplet",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function _e(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Droplet" }, [
        s("path", { d: "M12,21.936A7.27,7.27,0,0,1,7.656,20.5c-2.332-1.724-3.187-5.6-1.868-8.46l4.875-9.173A1.515,1.515,0,0,1,12,2.064h0a1.512,1.512,0,0,1,1.337.805L18.2,12.017c1.331,2.888.475,6.762-1.856,8.485A7.274,7.274,0,0,1,12,21.936ZM12,3.064a.51.51,0,0,0-.456.274L6.683,12.485c-1.1,2.4-.376,5.777,1.568,7.212a6.4,6.4,0,0,0,7.5,0c1.942-1.435,2.668-4.817,1.554-7.237l-4.85-9.122A.507.507,0,0,0,12,3.064Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const V4 = /* @__PURE__ */ u(Ie, [["render", _e]]), be = a({
  name: "CiDumbbell",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Oe(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Dumbbell" }, [
        s("path", { d: "M21.435,11.5h-.38V8.12a1.626,1.626,0,0,0-1.62-1.62h-.63V6.12a1.625,1.625,0,0,0-3.25,0V11.5H8.445V6.12a1.625,1.625,0,0,0-3.25,0V6.5h-.63a1.62,1.62,0,0,0-1.62,1.62V11.5h-.38a.5.5,0,1,0,0,1h.38v3.37a1.622,1.622,0,0,0,1.62,1.63H5.2v.37a1.625,1.625,0,1,0,3.25,0V12.5h7.11v5.37a1.625,1.625,0,1,0,3.25,0V17.5h.63a1.628,1.628,0,0,0,1.62-1.63V12.5h.38a.5.5,0,1,0,0-1ZM5.2,16.5h-.63a.625.625,0,0,1-.62-.63V8.12a.623.623,0,0,1,.62-.62H5.2Zm2.25,1.37a.634.634,0,0,1-.63.63.625.625,0,0,1-.62-.63V6.12a.623.623,0,0,1,.62-.62.632.632,0,0,1,.63.62Zm10.36,0a.625.625,0,1,1-1.25,0V6.12a.625.625,0,0,1,1.25,0Zm2.25-2a.625.625,0,0,1-.62.63h-.63v-9h.63a.623.623,0,0,1,.62.62Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const I4 = /* @__PURE__ */ u(be, [["render", Oe]]), Le = a({
  name: "CiEdit",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function je(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Edit" }, [
        s("g", null, [
          s("path", { d: "M3.548,20.938h16.9a.5.5,0,0,0,0-1H3.548a.5.5,0,0,0,0,1Z" }),
          s("path", { d: "M9.71,17.18a2.587,2.587,0,0,0,1.12-.65l9.54-9.54a1.75,1.75,0,0,0,0-2.47l-.94-.93a1.788,1.788,0,0,0-2.47,0L7.42,13.12a2.473,2.473,0,0,0-.64,1.12L6.04,17a.737.737,0,0,0,.19.72.767.767,0,0,0,.53.22Zm.41-1.36a1.468,1.468,0,0,1-.67.39l-.97.26-1-1,.26-.97a1.521,1.521,0,0,1,.39-.67l.38-.37,1.99,1.99Zm1.09-1.08L9.22,12.75l6.73-6.73,1.99,1.99Zm8.45-8.45L18.65,7.3,16.66,5.31l1.01-1.02a.748.748,0,0,1,1.06,0l.93.94A.754.754,0,0,1,19.66,6.29Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const _4 = /* @__PURE__ */ u(Le, [["render", je]]), Pe = a({
  name: "CiEraser",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function De(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Eraser" }, [
        s("path", { d: "M20.454,19.028h-7.01l6.62-6.63a2.935,2.935,0,0,0,.87-2.09,2.844,2.844,0,0,0-.87-2.05l-3.42-3.44a2.93,2.93,0,0,0-4.13.01L3.934,13.4a2.946,2.946,0,0,0,0,4.14l1.48,1.49H3.554a.5.5,0,0,0,0,1h16.9A.5.5,0,0,0,20.454,19.028Zm-7.24-13.5a1.956,1.956,0,0,1,2.73,0l3.42,3.44a1.868,1.868,0,0,1,.57,1.35,1.93,1.93,0,0,1-.57,1.37l-5.64,5.64-6.15-6.16Zm-1.19,13.5h-5.2l-2.18-2.2a1.931,1.931,0,0,1,0-2.72l2.23-2.23,6.15,6.15Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const b4 = /* @__PURE__ */ u(Pe, [["render", De]]), Fe = a({
  name: "CiExport",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Re(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Export" }, [
        s("g", null, [
          s("path", { d: "M5.552,20.968a2.577,2.577,0,0,1-2.5-2.73c-.012-2.153,0-4.306,0-6.459a.5.5,0,0,1,1,0c0,2.2-.032,4.4,0,6.6.016,1.107.848,1.589,1.838,1.589H18.353A1.546,1.546,0,0,0,19.825,19a3.023,3.023,0,0,0,.1-1.061V11.779h0a.5.5,0,0,1,1,0c0,2.224.085,4.465,0,6.687a2.567,2.567,0,0,1-2.67,2.5Z" }),
          s("path", { d: "M12.337,3.176a.455.455,0,0,0-.311-.138c-.015,0-.028,0-.043-.006s-.027,0-.041.006a.457.457,0,0,0-.312.138L7.961,6.845a.5.5,0,0,0,.707.707l2.816-2.815V15.479a.5.5,0,0,0,1,0V4.737L15.3,7.552a.5.5,0,0,0,.707-.707Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const O4 = /* @__PURE__ */ u(Fe, [["render", Re]]), Te = a({
  name: "CiEyeOff",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function qe(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "unread" }, [
        s("g", null, [
          s("path", { d: "M10.182,6.314a10.215,10.215,0,0,1,7.9,1.782,9.145,9.145,0,0,1,2.5,2.817,1.875,1.875,0,0,1,.082,2.024,9.266,9.266,0,0,1-1.485,2.008c-.446.464.26,1.172.707.707,1.1-1.144,2.533-2.86,1.9-4.554a8.845,8.845,0,0,0-2.721-3.5A11.243,11.243,0,0,0,9.916,5.35c-.633.11-.364,1.074.266.964Z" }),
          s("path", { d: "M19.824,19.11q-3.045-3.045-6.09-6.08c-.93-.93-1.85-1.86-2.77-2.77Q8.849,8.145,6.754,6.04L4.894,4.18c-.45-.45-1.16.26-.71.71l1.9,1.9a10.42,10.42,0,0,0-3.22,3.12,3.743,3.743,0,0,0-.8,2.28,4.581,4.581,0,0,0,.99,2.17,10.925,10.925,0,0,0,8.18,4.5A11.379,11.379,0,0,0,17,17.71l.25.25,1.86,1.86C19.564,20.27,20.274,19.56,19.824,19.11Zm-10.3-8.88c.25.24.49.49.73.73A2.039,2.039,0,0,0,12,14.03a2.023,2.023,0,0,0,1.04-.28c.25.24.49.49.73.73a3.047,3.047,0,0,1-4.25-4.25Zm-3.7,5.6a9.558,9.558,0,0,1-1.81-1.84c-.53-.71-1.19-1.62-.85-2.55a8.348,8.348,0,0,1,3.65-3.92c.67.67,1.34,1.33,2,2a4.04,4.04,0,0,0,5.67,5.67c.6.59,1.19,1.19,1.78,1.78A10.4,10.4,0,0,1,5.824,15.83Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const L4 = /* @__PURE__ */ u(Te, [["render", qe]]), Ue = a({
  name: "CiEyeOn",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ge(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "read" }, [
        s("g", null, [
          s("path", { d: "M12,18.883a10.8,10.8,0,0,1-9.675-5.728,2.6,2.6,0,0,1,0-2.31A10.8,10.8,0,0,1,12,5.117a10.8,10.8,0,0,1,9.675,5.728h0a2.6,2.6,0,0,1,0,2.31A10.8,10.8,0,0,1,12,18.883ZM12,6.117a9.787,9.787,0,0,0-8.78,5.176,1.586,1.586,0,0,0,0,1.415A9.788,9.788,0,0,0,12,17.883a9.787,9.787,0,0,0,8.78-5.176,1.584,1.584,0,0,0,0-1.414h0A9.787,9.787,0,0,0,12,6.117Z" }),
          s("path", { d: "M12,16.049A4.049,4.049,0,1,1,16.049,12,4.054,4.054,0,0,1,12,16.049Zm0-7.1A3.049,3.049,0,1,0,15.049,12,3.052,3.052,0,0,0,12,8.951Z" }),
          s("circle", {
            cx: "12",
            cy: "12",
            r: "2.028"
          })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const j4 = /* @__PURE__ */ u(Ue, [["render", Ge]]), We = a({
  name: "CiFacebook",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ee(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Facebook" }, [
        s("path", { d: "M19.02,4.975A9.93,9.93,0,0,0,2.07,12,9.935,9.935,0,0,0,12,21.935a9.98,9.98,0,0,0,3.8-.75,10.189,10.189,0,0,0,3.22-2.16,9.934,9.934,0,0,0,0-14.05Zm-.7,13.34A8.921,8.921,0,0,1,13,20.885v-6.56h1.88a1,1,0,0,0,0-2H13V9.585a1,1,0,0,1,1-1h1.2a1,1,0,0,0,0-2H13.5a2.5,2.5,0,0,0-2.5,2.5v3.24H9.13a1,1,0,1,0,0,2H11v6.56a8.919,8.919,0,1,1,9.26-5.47A9.061,9.061,0,0,1,18.32,18.315Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const P4 = /* @__PURE__ */ u(We, [["render", Ee]]), Ne = a({
  name: "CiFaceFrown",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Qe(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Face_Frown",
        "data-name": "Face Frown"
      }, [
        s("g", null, [
          s("path", { d: "M12,21.942A9.942,9.942,0,1,1,21.942,12,9.953,9.953,0,0,1,12,21.942ZM12,3.058A8.942,8.942,0,1,0,20.942,12,8.952,8.952,0,0,0,12,3.058Z" }),
          s("path", { d: "M17.206,16.481a6.033,6.033,0,0,0-10.412,0,.5.5,0,0,0,.863.5,5.033,5.033,0,0,1,8.685,0,.5.5,0,0,0,.864-.5Z" }),
          s("circle", {
            cx: "9",
            cy: "9.011",
            r: "1.25"
          }),
          s("circle", {
            cx: "15",
            cy: "9.011",
            r: "1.25"
          })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const D4 = /* @__PURE__ */ u(Ne, [["render", Qe]]), Ke = a({
  name: "CiFaceMeh",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Je(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Face_Meh",
        "data-name": "Face Meh"
      }, [
        s("g", null, [
          s("path", { d: "M12,21.942A9.942,9.942,0,1,1,21.942,12,9.953,9.953,0,0,1,12,21.942ZM12,3.058A8.942,8.942,0,1,0,20.942,12,8.952,8.952,0,0,0,12,3.058Z" }),
          s("circle", {
            cx: "9.001",
            cy: "8.99",
            r: "1.25"
          }),
          s("circle", {
            cx: "15.001",
            cy: "8.99",
            r: "1.25"
          }),
          s("path", { d: "M8.438,15.939h7.125a.5.5,0,0,0,0-1H8.438a.5.5,0,0,0,0,1Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const F4 = /* @__PURE__ */ u(Ke, [["render", Je]]), Ye = a({
  name: "CiFaceSmile",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Xe(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Face_Smile",
        "data-name": "Face Smile"
      }, [
        s("g", null, [
          s("path", { d: "M12,21.942A9.942,9.942,0,1,1,21.942,12,9.953,9.953,0,0,1,12,21.942ZM12,3.058A8.942,8.942,0,1,0,20.942,12,8.952,8.952,0,0,0,12,3.058Z" }),
          s("path", { d: "M16.693,13.744a5.041,5.041,0,0,1-9.387,0c-.249-.59-1.111-.081-.863.505a6.026,6.026,0,0,0,11.114,0c.247-.586-.614-1.1-.864-.505Z" }),
          s("circle", {
            cx: "9",
            cy: "9.011",
            r: "1.25"
          }),
          s("circle", {
            cx: "15",
            cy: "9.011",
            r: "1.25"
          })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const R4 = /* @__PURE__ */ u(Ye, [["render", Xe]]), xe = a({
  name: "CiFileOff",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function e5(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "File_Off",
        "data-name": "File Off"
      }, [
        s("g", null, [
          s("path", { d: "M4,3.308a.5.5,0,0,0-.7.71l.76.76v14.67a2.5,2.5,0,0,0,2.5,2.5H17.44a2.476,2.476,0,0,0,2.28-1.51l.28.28c.45.45,1.16-.26.7-.71Zm14.92,16.33a1.492,1.492,0,0,1-1.48,1.31H6.56a1.5,1.5,0,0,1-1.5-1.5V5.778Z" }),
          s("path", { d: "M13.38,3.088v2.92a2.5,2.5,0,0,0,2.5,2.5h3.07l-.01,6.7a.5.5,0,0,0,1,0V8.538a2.057,2.057,0,0,0-.75-1.47c-1.3-1.26-2.59-2.53-3.89-3.8a3.924,3.924,0,0,0-1.41-1.13,6.523,6.523,0,0,0-1.71-.06H6.81a.5.5,0,0,0,0,1Zm4.83,4.42H15.88a1.5,1.5,0,0,1-1.5-1.5V3.768Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const T4 = /* @__PURE__ */ u(xe, [["render", e5]]), s5 = a({
  name: "CiFileOn",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function o5(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "File_On",
        "data-name": "File On"
      }, [
        s("path", { d: "M19.485,7.35l-4.97-4.86a1.466,1.466,0,0,0-1.05-.43h-6.9a2.5,2.5,0,0,0-2.5,2.5V19.44a2.507,2.507,0,0,0,2.5,2.5h10.87a2.507,2.507,0,0,0,2.5-2.5V8.42A1.49,1.49,0,0,0,19.485,7.35Zm-1.27.15h-2.34a1.5,1.5,0,0,1-1.5-1.5V3.75Zm.72,11.94a1.5,1.5,0,0,1-1.5,1.5H6.565a1.5,1.5,0,0,1-1.5-1.5V4.56a1.5,1.5,0,0,1,1.5-1.5h6.81V6a2.5,2.5,0,0,0,2.5,2.5h3.06Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const q4 = /* @__PURE__ */ u(s5, [["render", o5]]), t5 = a({
  name: "CiFilter",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function a5(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Filter" }, [
        s("path", { d: "M14.037,20.937a1.015,1.015,0,0,1-.518-.145l-3.334-2a2.551,2.551,0,0,1-1.233-2.176V12.091a1.526,1.526,0,0,0-.284-.891L4.013,4.658a1.01,1.01,0,0,1,.822-1.6h14.33a1.009,1.009,0,0,1,.822,1.6h0L15.332,11.2a1.527,1.527,0,0,0-.285.891v7.834a1.013,1.013,0,0,1-1.01,1.012ZM4.835,4.063,9.482,10.62a2.515,2.515,0,0,1,.47,1.471v4.524a1.543,1.543,0,0,0,.747,1.318l3.334,2,.014-7.843a2.516,2.516,0,0,1,.471-1.471l4.654-6.542,0,0Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const U4 = /* @__PURE__ */ u(t5, [["render", a5]]), l5 = a({
  name: "CiFlag1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function r5(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Flag_1",
        "data-name": "Flag 1"
      }, [
        s("path", { d: "M20.565,3.18a.809.809,0,0,0-.81-.02l-1.13.56c-1.63.87-3.82.83-6.5-.13a9.141,9.141,0,0,0-7.3.52l-.76.41V3.56a.5.5,0,0,0-1,0V20.44a.5.5,0,0,0,1,0V15.9a.836.836,0,0,0,.2-.08l1.03-.55a8.163,8.163,0,0,1,6.5-.46c2.95,1.06,5.41,1.08,7.3.07l1.44-.72a.759.759,0,0,0,.4-.66V3.82A.751.751,0,0,0,20.565,3.18Zm-.63,10.16-1.31.66c-1.63.87-3.82.83-6.5-.13a9.141,9.141,0,0,0-7.3.52l-.76.4V5.65L5.3,4.99a8.122,8.122,0,0,1,6.5-.46c2.95,1.06,5.41,1.08,7.29.08l.85-.43Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const G4 = /* @__PURE__ */ u(l5, [["render", r5]]), n5 = a({
  name: "CiFloppyDisk",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function i5(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Floppy_Disk",
        "data-name": "Floppy Disk"
      }, [
        s("path", { d: "M20.015,7.015l-4.15-3.39a2.54,2.54,0,0,0-1.58-.56H4.565a1.5,1.5,0,0,0-1.5,1.5v14.87a1.5,1.5,0,0,0,1.5,1.5h14.87a1.5,1.5,0,0,0,1.5-1.5V8.955A2.507,2.507,0,0,0,20.015,7.015ZM6.565,4.065h5.75v1.37a.5.5,0,0,1-.5.5H7.065a.5.5,0,0,1-.5-.5Zm0,15.87v-5.93a1.5,1.5,0,0,1,1.5-1.5h7.87a1.5,1.5,0,0,1,1.5,1.5v5.93Zm13.37-.5a.5.5,0,0,1-.5.5h-1v-5.93a2.507,2.507,0,0,0-2.5-2.5H8.065a2.5,2.5,0,0,0-2.5,2.5v5.93h-1a.5.5,0,0,1-.5-.5V4.565a.5.5,0,0,1,.5-.5h1v1.37a1.5,1.5,0,0,0,1.5,1.5h4.75a1.5,1.5,0,0,0,1.5-1.5V4.065h.97a1.514,1.514,0,0,1,.95.34l4.14,3.38a1.483,1.483,0,0,1,.56,1.17Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const W4 = /* @__PURE__ */ u(n5, [["render", i5]]), c5 = a({
  name: "CiFolderOff",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function p5(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Folder_Off",
        "data-name": "Folder Off"
      }, [
        s("g", null, [
          s("path", { d: "M4.013,3.3a.5.5,0,0,0-.711.71l.25.25A2.438,2.438,0,0,0,2.062,6.5v11a2.453,2.453,0,0,0,2.451,2.44h14.72l.759.76c.461.46,1.171-.25.711-.7Zm.5,15.64A1.45,1.45,0,0,1,3.062,17.5V6.5a1.444,1.444,0,0,1,1.31-1.43C5.893,6.6,7.432,8.14,8.963,9.66q4.485,4.485,8.96,8.97l.31.31Z" }),
          s("path", { d: "M21.438,17.693a.5.5,0,0,1-.5-.5V9.175a1.445,1.445,0,0,0-1.445-1.444H12.827a1.5,1.5,0,0,1-1.474-1.225l-.05-.267a1.445,1.445,0,0,0-1.42-1.178H8.8a.5.5,0,0,1,0-1H9.883a2.446,2.446,0,0,1,2.4,1.994l.05.268a.5.5,0,0,0,.491.408h6.666a2.448,2.448,0,0,1,2.445,2.444v8.018A.5.5,0,0,1,21.438,17.693Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const E4 = /* @__PURE__ */ u(c5, [["render", p5]]), d5 = a({
  name: "CiFolderOn",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function u5(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Folder_On",
        "data-name": "Folder On"
      }, [
        s("path", { d: "M19.435,19.94H4.565a2.5,2.5,0,0,1-2.5-2.5V6.56a2.5,2.5,0,0,1,2.5-2.5h5.27A2.5,2.5,0,0,1,12.292,6.1l.042.222a.5.5,0,0,0,.491.408h6.61a2.5,2.5,0,0,1,2.5,2.5v8.21A2.5,2.5,0,0,1,19.435,19.94ZM4.565,5.06a1.5,1.5,0,0,0-1.5,1.5V17.44a1.5,1.5,0,0,0,1.5,1.5h14.87a1.5,1.5,0,0,0,1.5-1.5V9.23a1.5,1.5,0,0,0-1.5-1.5h-6.61a1.5,1.5,0,0,1-1.474-1.225l-.042-.221A1.5,1.5,0,0,0,9.835,5.06Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const N4 = /* @__PURE__ */ u(d5, [["render", u5]]), f5 = a({
  name: "CiFootball",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function y5(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Football" }, [
        s("g", null, [
          s("path", { d: "M20.278,4.757a1.64,1.64,0,0,0-1.03-1.04,12.248,12.248,0,0,0-15.53,15.53,1.64,1.64,0,0,0,1.04,1.03,12.306,12.306,0,0,0,3.95.66,12.262,12.262,0,0,0,11.57-16.18Zm-15.2,14.58a.725.725,0,0,1-.42-.42,11.379,11.379,0,0,1-.58-4.26l5.26,5.26A11.352,11.352,0,0,1,5.078,19.337Zm11.56-2.71a11.179,11.179,0,0,1-6.03,3.14l-6.38-6.38a11.083,11.083,0,0,1,3.14-6.02,11.193,11.193,0,0,1,6.03-3.15l6.38,6.38A11.245,11.245,0,0,1,16.638,16.627Zm3.29-7.3-5.26-5.26c.21,0,.41-.01.62-.01a11.154,11.154,0,0,1,3.63.61.682.682,0,0,1,.42.41A11.543,11.543,0,0,1,19.928,9.327Z" }),
          s("path", { d: "M10.4,15.257a.5.5,0,0,0,.35.15.508.508,0,0,0,.36-.15.5.5,0,0,0,0-.7l-.48-.48L12,12.707l.48.48a.518.518,0,0,0,.35.14.543.543,0,0,0,.36-.14.513.513,0,0,0,0-.71l-.48-.48,1.37-1.37.48.48a.5.5,0,0,0,.7-.71L13.6,8.737a.5.5,0,0,0-.71,0,.5.5,0,0,0,0,.7l.49.49L12,11.3l-.48-.48a.495.495,0,1,0-.7.7l.48.48-1.37,1.38-.49-.49a.5.5,0,0,0-.7,0,.5.5,0,0,0,0,.71Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Q4 = /* @__PURE__ */ u(f5, [["render", y5]]), C5 = a({
  name: "CiForkKnife",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function m5(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Fork_Knife",
        "data-name": "Fork & Knife"
      }, [
        s("g", null, [
          s("path", { d: "M18.83,2.25a6.469,6.469,0,0,0-4.37,6.12v3.15a1.784,1.784,0,0,0,1.78,1.78h2.7v8.14a.5.5,0,0,0,.5.5.508.508,0,0,0,.5-.5V2.56a.508.508,0,0,0-.5-.5.467.467,0,0,0-.17.03ZM16.24,12.3a.781.781,0,0,1-.78-.78V8.37a5.482,5.482,0,0,1,3.48-5.1V12.3Z" }),
          s("path", { d: "M11.44,2.07a.5.5,0,0,0-.5.5V7.55H8.5V2.57a.5.5,0,0,0-.5-.5.5.5,0,0,0-.5.5V7.55H5.06V2.57a.5.5,0,0,0-.5-.5.5.5,0,0,0-.5.5V9.05a2.507,2.507,0,0,0,2.5,2.5H7.5v9.89a.508.508,0,0,0,.5.5.5.5,0,0,0,.5-.5V11.55h.94a2.5,2.5,0,0,0,2.5-2.5V2.57A.5.5,0,0,0,11.44,2.07Zm-.5,6.98a1.5,1.5,0,0,1-1.5,1.5H6.56a1.511,1.511,0,0,1-1.5-1.5v-.5h5.88Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const K4 = /* @__PURE__ */ u(C5, [["render", m5]]), g5 = a({
  name: "CiFries",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function B5(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Fries" }, [
        s("path", { d: "M19.51,9.535a1.091,1.091,0,0,0-.81-.36H17.67a.5.5,0,0,0-.17.02V4.815a1.5,1.5,0,0,0-1.5-1.5h-.5a1.3,1.3,0,0,0-.52.1,1.474,1.474,0,0,0-1.48-1.35H13a1.5,1.5,0,0,0-1.5,1.5v1.59a1.386,1.386,0,0,0-.5-.09h-.5a1.348,1.348,0,0,0-.5.09v-.34a1.5,1.5,0,0,0-1.5-1.5H8a1.5,1.5,0,0,0-1.5,1.5V9.2a.5.5,0,0,0-.17-.02H5.3a1.1,1.1,0,0,0-1.08,1.2l.85,8.98a2.84,2.84,0,0,0,2.84,2.58h8.18a2.84,2.84,0,0,0,2.84-2.58l.85-8.98A1.112,1.112,0,0,0,19.51,9.535ZM15,4.815a.5.5,0,0,1,.5-.5H16a.5.5,0,0,1,.5.5v6.14h.01A2.915,2.915,0,0,1,15,13.015Zm-2.5,8.53V3.565a.5.5,0,0,1,.5-.5h.5a.5.5,0,0,1,.5.5v9.76Zm-2.5-.02V6.565a.5.5,0,0,1,.5-.5H11a.5.5,0,0,1,.5.5v6.78ZM7.5,4.815a.5.5,0,0,1,.5-.5h.5a.5.5,0,0,1,.5.5v8.2a2.877,2.877,0,0,1-1.5-2.06Zm11.29,5.391-.85,9.049a1.85,1.85,0,0,1-1.85,1.68H7.91a1.84,1.84,0,0,1-1.84-1.68l-.86-9.08H6.33a.1.1,0,0,1,.09.08l.05.56a3.891,3.891,0,0,0,3.88,3.53h3.3a3.884,3.884,0,0,0,3.88-3.53l.05-.56a.106.106,0,0,1,.09-.08Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const J4 = /* @__PURE__ */ u(g5, [["render", B5]]), h5 = a({
  name: "CiGift",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function v5(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Gift" }, [
        s("path", { d: "M19.435,5.568h-2.38a1.979,1.979,0,0,0-.51-1.92,2.022,2.022,0,0,0-2.83,0L12,5.367l-1.71-1.719a2,2,0,0,0-2.83,0,1.979,1.979,0,0,0-.51,1.92H4.565a1.5,1.5,0,0,0-1.5,1.5v1A1.487,1.487,0,0,0,4,9.448v8.99a2.507,2.507,0,0,0,2.5,2.5h11a2.5,2.5,0,0,0,2.5-2.5V9.458a1.509,1.509,0,0,0,.94-1.39v-1A1.5,1.5,0,0,0,19.435,5.568ZM8.165,4.357a1,1,0,0,1,1.41,0l1.21,1.211H8.015A.989.989,0,0,1,8.165,4.357ZM11,19.938H6.5a1.5,1.5,0,0,1-1.5-1.5V9.568h6Zm0-11.37H4.565a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5H11Zm3.43-4.211A1,1,0,0,1,16,5.568h-2.78ZM19,18.438a1.5,1.5,0,0,1-1.5,1.5H13V9.568h6Zm.94-10.37a.5.5,0,0,1-.5.5H13v-2h6.44a.5.5,0,0,1,.5.5Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Y4 = /* @__PURE__ */ u(h5, [["render", v5]]), $5 = a({
  name: "CiGlass",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function S5(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Glass" }, [
        s("path", { d: "M18.279,2.54a1.475,1.475,0,0,0-1.1-.48H6.819a1.47,1.47,0,0,0-1.09.48,1.5,1.5,0,0,0-.41,1.12L6.379,19.6a2.51,2.51,0,0,0,2.49,2.34h6.26a2.519,2.519,0,0,0,2.5-2.34l1.05-15.94A1.5,1.5,0,0,0,18.279,2.54Zm-1.65,16.99a1.508,1.508,0,0,1-1.5,1.41H8.869a1.506,1.506,0,0,1-1.49-1.41l-.64-9.62a2.981,2.981,0,0,0,1.17-.49,1.828,1.828,0,0,1,1.18-.39,1.858,1.858,0,0,1,1.19.39,3.025,3.025,0,0,0,3.45,0,1.879,1.879,0,0,1,1.19-.39,1.828,1.828,0,0,1,1.18.39,3,3,0,0,0,1.16.49Zm.7-10.62a2.317,2.317,0,0,1-.69-.33,2.98,2.98,0,0,0-3.45,0,1.885,1.885,0,0,1-1.18.38,1.939,1.939,0,0,1-1.19-.38,2.818,2.818,0,0,0-1.73-.55,2.809,2.809,0,0,0-1.72.55,2.374,2.374,0,0,1-.7.33l-.35-5.32a.468.468,0,0,1,.14-.37.484.484,0,0,1,.36-.16h10.36a.523.523,0,0,1,.37.16.46.46,0,0,1,.13.37Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const X4 = /* @__PURE__ */ u($5, [["render", S5]]), k5 = a({
  name: "CiGlobe",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function w5(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Globe" }, [
        s("path", { d: "M14.645,2.428a8.1,8.1,0,0,0-1.61-.3,9.332,9.332,0,0,0-3.6.28l-.07.02a9.928,9.928,0,0,0,.01,19.15,9.091,9.091,0,0,0,2.36.34,1.274,1.274,0,0,0,.27.02,9.65,9.65,0,0,0,2.63-.36,9.931,9.931,0,0,0,.01-19.15Zm-.27.96a8.943,8.943,0,0,1,5.84,5.11h-4.26a13.778,13.778,0,0,0-2.74-5.35A8.254,8.254,0,0,1,14.375,3.388Zm-2.37-.09a12.78,12.78,0,0,1,2.91,5.2H9.075A12.545,12.545,0,0,1,12.005,3.3Zm3.16,6.2a13.193,13.193,0,0,1,0,5.01H8.845a12.185,12.185,0,0,1-.25-2.5,12.353,12.353,0,0,1,.25-2.51Zm-5.6-6.09.07-.02a9.152,9.152,0,0,1,1.16-.23A13.618,13.618,0,0,0,8.045,8.5H3.8A9,9,0,0,1,9.565,3.408Zm-6.5,8.6a8.71,8.71,0,0,1,.37-2.51h4.39a13.95,13.95,0,0,0-.23,2.51,13.757,13.757,0,0,0,.23,2.5H3.435A8.591,8.591,0,0,1,3.065,12.008Zm6.57,8.61a8.9,8.9,0,0,1-5.84-5.11h4.24a13.632,13.632,0,0,0,2.77,5.35A8.1,8.1,0,0,1,9.635,20.618Zm-.56-5.11h5.84a12.638,12.638,0,0,1-2.91,5.21A12.872,12.872,0,0,1,9.075,15.508Zm5.3,5.11a11.551,11.551,0,0,1-1.17.24,13.8,13.8,0,0,0,2.75-5.35h4.26A8.924,8.924,0,0,1,14.375,20.618Zm1.8-6.11a13.611,13.611,0,0,0,0-5.01h4.39a8.379,8.379,0,0,1,.37,2.51,8.687,8.687,0,0,1-.36,2.5Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const x4 = /* @__PURE__ */ u(k5, [["render", w5]]), z5 = a({
  name: "CiGPS",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Z5(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "GPS" }, [
        s("g", null, [
          s("path", { d: "M12,14.5A2.5,2.5,0,1,1,14.5,12,2.5,2.5,0,0,1,12,14.5Zm0-4A1.5,1.5,0,1,0,13.5,12,1.5,1.5,0,0,0,12,10.5Z" }),
          s("path", { d: "M21.435,11.505h-1.46a7.98,7.98,0,0,0-7.48-7.48V2.565a.508.508,0,0,0-.5-.5.515.515,0,0,0-.5.5v1.46a8,8,0,0,0-7.48,7.48H2.565a.5.5,0,1,0,0,1h1.45a8.012,8.012,0,0,0,7.48,7.48v1.45a.508.508,0,0,0,.5.5.5.5,0,0,0,.5-.5v-1.45a8,8,0,0,0,7.48-7.48h1.46a.5.5,0,0,0,0-1ZM12,19.005a7,7,0,1,1,7-7A7.021,7.021,0,0,1,12,19.005Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const en = /* @__PURE__ */ u(z5, [["render", Z5]]), M5 = a({
  name: "CiGrid2H",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function A5(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Grid__2-H",
        "data-name": "Grid _2-H"
      }, [
        s("g", null, [
          s("path", { d: "M18.437,11H5.565a2.5,2.5,0,0,1-2.5-2.5V5.564a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5V8.5A2.5,2.5,0,0,1,18.437,11ZM5.565,4.064a1.5,1.5,0,0,0-1.5,1.5V8.5a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V5.564a1.5,1.5,0,0,0-1.5-1.5Z" }),
          s("path", { d: "M18.437,20.936H5.565a2.5,2.5,0,0,1-2.5-2.5V15.5a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5v2.934A2.5,2.5,0,0,1,18.437,20.936ZM5.565,14a1.5,1.5,0,0,0-1.5,1.5v2.934a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V15.5a1.5,1.5,0,0,0-1.5-1.5Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const sn = /* @__PURE__ */ u(M5, [["render", A5]]), H5 = a({
  name: "CiGrid2V",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function V5(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Grid_2-V" }, [
        s("g", null, [
          s("path", { d: "M18.436,20.937H15.5a2.5,2.5,0,0,1-2.5-2.5V5.565a2.5,2.5,0,0,1,2.5-2.5h2.933a2.5,2.5,0,0,1,2.5,2.5V18.437A2.5,2.5,0,0,1,18.436,20.937ZM15.5,4.065a1.5,1.5,0,0,0-1.5,1.5V18.437a1.5,1.5,0,0,0,1.5,1.5h2.933a1.5,1.5,0,0,0,1.5-1.5V5.565a1.5,1.5,0,0,0-1.5-1.5Z" }),
          s("path", { d: "M8.5,20.937H5.564a2.5,2.5,0,0,1-2.5-2.5V5.565a2.5,2.5,0,0,1,2.5-2.5H8.5a2.5,2.5,0,0,1,2.5,2.5V18.437A2.5,2.5,0,0,1,8.5,20.937ZM5.564,4.065a1.5,1.5,0,0,0-1.5,1.5V18.437a1.5,1.5,0,0,0,1.5,1.5H8.5a1.5,1.5,0,0,0,1.5-1.5V5.565a1.5,1.5,0,0,0-1.5-1.5Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const on = /* @__PURE__ */ u(H5, [["render", V5]]), I5 = a({
  name: "CiGrid31",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function _5(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Grid_3-1" }, [
        s("g", null, [
          s("g", null, [
            s("path", { d: "M11.434,20.936H5.563a2.5,2.5,0,0,1-2.5-2.5V15.5a2.5,2.5,0,0,1,2.5-2.5h5.871a2.5,2.5,0,0,1,2.5,2.5v2.933A2.5,2.5,0,0,1,11.434,20.936ZM5.563,14a1.5,1.5,0,0,0-1.5,1.5v2.933a1.5,1.5,0,0,0,1.5,1.5h5.871a1.5,1.5,0,0,0,1.5-1.5V15.5a1.5,1.5,0,0,0-1.5-1.5Z" }),
            s("path", { d: "M18.435,20.936a2.5,2.5,0,0,1-2.5-2.5V15.5a2.5,2.5,0,0,1,5,0v2.934A2.5,2.5,0,0,1,18.435,20.936Zm0-6.934a1.5,1.5,0,0,0-1.5,1.5v2.934a1.5,1.5,0,0,0,3,0V15.5A1.5,1.5,0,0,0,18.435,14Z" })
          ]),
          s("path", { d: "M18.435,11H5.563a2.5,2.5,0,0,1-2.5-2.5V5.564a2.5,2.5,0,0,1,2.5-2.5H18.435a2.5,2.5,0,0,1,2.5,2.5V8.5A2.5,2.5,0,0,1,18.435,11ZM5.563,4.064a1.5,1.5,0,0,0-1.5,1.5V8.5a1.5,1.5,0,0,0,1.5,1.5H18.435a1.5,1.5,0,0,0,1.5-1.5V5.564a1.5,1.5,0,0,0-1.5-1.5Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const tn = /* @__PURE__ */ u(I5, [["render", _5]]), b5 = a({
  name: "CiGrid32",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function O5(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Grid_3-2" }, [
        s("g", null, [
          s("g", null, [
            s("path", { d: "M18.437,11H12.566a2.5,2.5,0,0,1-2.5-2.5V5.564a2.5,2.5,0,0,1,2.5-2.5h5.871a2.5,2.5,0,0,1,2.5,2.5V8.5A2.5,2.5,0,0,1,18.437,11ZM12.566,4.064a1.5,1.5,0,0,0-1.5,1.5V8.5a1.5,1.5,0,0,0,1.5,1.5h5.871a1.5,1.5,0,0,0,1.5-1.5V5.564a1.5,1.5,0,0,0-1.5-1.5Z" }),
            s("path", { d: "M5.565,11a2.5,2.5,0,0,1-2.5-2.5V5.564a2.5,2.5,0,1,1,5,0V8.5A2.5,2.5,0,0,1,5.565,11Zm0-6.934a1.5,1.5,0,0,0-1.5,1.5V8.5a1.5,1.5,0,0,0,3,0V5.564A1.5,1.5,0,0,0,5.565,4.064Z" })
          ]),
          s("path", { d: "M18.437,20.936H5.565a2.5,2.5,0,0,1-2.5-2.5V15.5a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5v2.934A2.5,2.5,0,0,1,18.437,20.936ZM5.565,14a1.5,1.5,0,0,0-1.5,1.5v2.934a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V15.5a1.5,1.5,0,0,0-1.5-1.5Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const an = /* @__PURE__ */ u(b5, [["render", O5]]), L5 = a({
  name: "CiGrid41",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function j5(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Grid_4-1" }, [
        s("g", null, [
          s("path", { d: "M8.5,11H5.563a2.5,2.5,0,0,1-2.5-2.5V5.564a2.5,2.5,0,0,1,2.5-2.5H8.5a2.5,2.5,0,0,1,2.5,2.5V8.5A2.5,2.5,0,0,1,8.5,11ZM5.563,4.064a1.5,1.5,0,0,0-1.5,1.5V8.5a1.5,1.5,0,0,0,1.5,1.5H8.5A1.5,1.5,0,0,0,10,8.5V5.564a1.5,1.5,0,0,0-1.5-1.5Z" }),
          s("path", { d: "M18.436,11H15.5A2.5,2.5,0,0,1,13,8.5V5.564a2.5,2.5,0,0,1,2.5-2.5h2.934a2.5,2.5,0,0,1,2.5,2.5V8.5A2.5,2.5,0,0,1,18.436,11ZM15.5,4.064a1.5,1.5,0,0,0-1.5,1.5V8.5A1.5,1.5,0,0,0,15.5,10h2.934a1.5,1.5,0,0,0,1.5-1.5V5.564a1.5,1.5,0,0,0-1.5-1.5Z" }),
          s("path", { d: "M8.5,20.936H5.564a2.5,2.5,0,0,1-2.5-2.5V15.5a2.5,2.5,0,0,1,2.5-2.5H8.5A2.5,2.5,0,0,1,11,15.5v2.936A2.5,2.5,0,0,1,8.5,20.936ZM5.564,14a1.5,1.5,0,0,0-1.5,1.5v2.936a1.5,1.5,0,0,0,1.5,1.5H8.5a1.5,1.5,0,0,0,1.5-1.5V15.5A1.5,1.5,0,0,0,8.5,14Z" }),
          s("path", { d: "M18.436,20.936H15.5a2.5,2.5,0,0,1-2.5-2.5V15.5A2.5,2.5,0,0,1,15.5,13h2.934a2.5,2.5,0,0,1,2.5,2.5v2.936A2.5,2.5,0,0,1,18.436,20.936ZM15.5,14A1.5,1.5,0,0,0,14,15.5v2.936a1.5,1.5,0,0,0,1.5,1.5h2.934a1.5,1.5,0,0,0,1.5-1.5V15.5a1.5,1.5,0,0,0-1.5-1.5Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const ln = /* @__PURE__ */ u(L5, [["render", j5]]), P5 = a({
  name: "CiGrid42",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function D5(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Grid_4-2" }, [
        s("g", null, [
          s("g", null, [
            s("path", { d: "M8.5,13.933H5.563a2.5,2.5,0,0,1-2.5-2.5V5.563a2.5,2.5,0,0,1,2.5-2.5H8.5a2.5,2.5,0,0,1,2.5,2.5v5.87A2.5,2.5,0,0,1,8.5,13.933ZM5.563,4.063a1.5,1.5,0,0,0-1.5,1.5v5.87a1.5,1.5,0,0,0,1.5,1.5H8.5a1.5,1.5,0,0,0,1.5-1.5V5.563a1.5,1.5,0,0,0-1.5-1.5Z" }),
            s("path", { d: "M8.5,20.935H5.564a2.5,2.5,0,0,1,0-5H8.5a2.5,2.5,0,1,1,0,5Zm-2.934-4a1.5,1.5,0,0,0,0,3H8.5a1.5,1.5,0,1,0,0-3Z" })
          ]),
          s("g", null, [
            s("path", { d: "M18.436,20.935H15.5a2.5,2.5,0,0,1-2.5-2.5v-5.87a2.5,2.5,0,0,1,2.5-2.5h2.934a2.5,2.5,0,0,1,2.5,2.5v5.87A2.5,2.5,0,0,1,18.436,20.935ZM15.5,11.065a1.5,1.5,0,0,0-1.5,1.5v5.87a1.5,1.5,0,0,0,1.5,1.5h2.934a1.5,1.5,0,0,0,1.5-1.5v-5.87a1.5,1.5,0,0,0-1.5-1.5Z" }),
            s("path", { d: "M18.436,8.063H15.5a2.5,2.5,0,0,1,0-5h2.934a2.5,2.5,0,0,1,0,5Zm-2.934-4a1.5,1.5,0,0,0,0,3h2.934a1.5,1.5,0,0,0,0-3Z" })
          ])
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const rn = /* @__PURE__ */ u(P5, [["render", D5]]), F5 = a({
  name: "CiHardDrive",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function R5(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Hard_Drive",
        "data-name": "Hard Drive"
      }, [
        s("g", null, [
          s("path", { d: "M20.905,14.325l-1.83-10.04a1.507,1.507,0,0,0-1.47-1.22H6.405A1.493,1.493,0,0,0,4.925,4.3l-1.84,10.03a2.452,2.452,0,0,0-.02.27v4.84a1.5,1.5,0,0,0,1.5,1.5h14.87a1.511,1.511,0,0,0,1.5-1.5V14.6A1.241,1.241,0,0,0,20.905,14.325Zm-15-9.85a.5.5,0,0,1,.5-.41h11.2a.511.511,0,0,1,.49.4l1.74,9.54H4.165Zm14.03,14.96a.5.5,0,0,1-.5.5H4.565a.5.5,0,0,1-.5-.5l.01-4.43h15.86Z" }),
          s("circle", {
            cx: "5.561",
            cy: "17.47",
            r: "0.5"
          }),
          s("circle", {
            cx: "7.561",
            cy: "17.47",
            r: "0.5"
          }),
          s("path", { d: "M18.45,17.97a.5.5,0,0,0,0-1h-5a.5.5,0,0,0,0,1Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const nn = /* @__PURE__ */ u(F5, [["render", R5]]), T5 = a({
  name: "CiHashtag",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function q5(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Hashtag" }, [
        s("path", { d: "M20.435,15.506H16.2l.61-7h3.63a.5.5,0,0,0,.5-.5.5.5,0,0,0-.5-.5H16.9l.34-3.87a.509.509,0,0,0-.46-.54.5.5,0,0,0-.54.46l-.35,3.95H8.9l.34-3.87a.509.509,0,0,0-.46-.54.491.491,0,0,0-.54.46l-.35,3.95H3.565a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h4.24l-.62,7H3.565a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h3.54l-.34,3.86a.508.508,0,0,0,.45.54h.05a.516.516,0,0,0,.5-.46l.34-3.94h7l-.34,3.86a.508.508,0,0,0,.45.54h.05a.516.516,0,0,0,.5-.46l.34-3.94h4.33a.5.5,0,0,0,.5-.5A.5.5,0,0,0,20.435,15.506Zm-5.25,0H8.2l.61-7h7Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const cn = /* @__PURE__ */ u(T5, [["render", q5]]), U5 = a({
  name: "CiHeadphones",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function G5(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Headphones" }, [
        s("path", { d: "M12.23,3.065h-.46a8.211,8.211,0,0,0-8.2,8.2v6.25a3.385,3.385,0,0,0,.89,2.3,3.423,3.423,0,0,0,2.53,1.12h.53a1.225,1.225,0,0,0,1.22-1.22v-4.4A1.225,1.225,0,0,0,7.52,14.1H7.11a3.6,3.6,0,0,0-2.54,1.05v-3.88a7.208,7.208,0,0,1,7.2-7.2h.46a7.208,7.208,0,0,1,7.2,7.2v3.88a3.6,3.6,0,0,0-2.54-1.05h-.41a1.225,1.225,0,0,0-1.22,1.22v4.4a1.225,1.225,0,0,0,1.22,1.22h.53a3.423,3.423,0,0,0,2.53-1.12,3.385,3.385,0,0,0,.89-2.3v-6.25A8.211,8.211,0,0,0,12.23,3.065ZM4.58,17.275A2.511,2.511,0,0,1,7.11,15.1h.41a.222.222,0,0,1,.22.22v4.4a.222.222,0,0,1-.22.22H6.99a2.422,2.422,0,0,1-1.79-.79,2.322,2.322,0,0,1-.63-1.63A1.927,1.927,0,0,1,4.58,17.275Zm14.22,1.87a2.422,2.422,0,0,1-1.79.79h-.53a.222.222,0,0,1-.22-.22v-4.4a.222.222,0,0,1,.22-.22h.41a2.511,2.511,0,0,1,2.53,2.18,1.927,1.927,0,0,1,.01.24A2.322,2.322,0,0,1,18.8,19.145Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const pn = /* @__PURE__ */ u(U5, [["render", G5]]), W5 = a({
  name: "CiHeart",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function E5(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Heart" }, [
        s("path", { d: "M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const dn = /* @__PURE__ */ u(W5, [["render", E5]]), N5 = a({
  name: "CiHome",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Q5(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Home" }, [
        s("path", { d: "M19.37,10.22l-6.2-7.6a1.5,1.5,0,0,0-2.33-.01L4.63,10.22a2.5,2.5,0,0,0-.57,1.59v7.63a2.507,2.507,0,0,0,2.5,2.5H17.44a2.507,2.507,0,0,0,2.5-2.5V11.81A2.5,2.5,0,0,0,19.37,10.22ZM10,20.94v-5.5a1.5,1.5,0,0,1,1.5-1.5h1a1.5,1.5,0,0,1,1.5,1.5v5.5Zm8.94-1.5a1.511,1.511,0,0,1-1.5,1.5H15v-5.5a2.5,2.5,0,0,0-2.5-2.5h-1A2.5,2.5,0,0,0,9,15.44v5.5H6.56a1.511,1.511,0,0,1-1.5-1.5V11.81a1.474,1.474,0,0,1,.34-.95l6.22-7.61A.474.474,0,0,1,12,3.06a.479.479,0,0,1,.39.19l6.21,7.61a1.474,1.474,0,0,1,.34.95Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const un = /* @__PURE__ */ u(N5, [["render", Q5]]), K5 = a({
  name: "CiHospital1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function J5(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Hospital_1",
        "data-name": "Hospital 1"
      }, [
        s("g", null, [
          s("path", { d: "M18.435,7.5h-1.93V5.56a2.5,2.5,0,0,0-2.5-2.5h-4a2.5,2.5,0,0,0-2.5,2.5V7.5H5.565a2.5,2.5,0,0,0-2.5,2.5v9.44a1.511,1.511,0,0,0,1.5,1.5h14.87a1.5,1.5,0,0,0,1.5-1.5V10A2.5,2.5,0,0,0,18.435,7.5ZM7.505,19.94H4.565a.508.508,0,0,1-.5-.5V10a1.5,1.5,0,0,1,1.5-1.5h1.94Zm8,0h-1.5v-2.5a2.038,2.038,0,0,0-.59-1.42,2,2,0,0,0-3.41,1.42v2.5h-1.5V5.56a1.5,1.5,0,0,1,1.5-1.5h4a1.5,1.5,0,0,1,1.5,1.5Zm4.43-.5a.5.5,0,0,1-.5.5h-2.93V8.5h1.93a1.5,1.5,0,0,1,1.5,1.5Z" }),
          s("path", { d: "M14.505,8.56a.5.5,0,0,1-.5.5h-1.5v1.5a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5V9.06h-1.5a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h1.5V6.56a.5.5,0,0,1,.5-.5.508.508,0,0,1,.5.5v1.5h1.5A.508.508,0,0,1,14.505,8.56Z" }),
          s("g", null, [
            s("path", { d: "M5.786,13.217a.5.5,0,0,1-.5-.5v-1.5a.5.5,0,0,1,1,0v1.5A.5.5,0,0,1,5.786,13.217Z" }),
            s("path", { d: "M5.786,17.717a.5.5,0,0,1-.5-.5v-1.5a.5.5,0,0,1,1,0v1.5A.5.5,0,0,1,5.786,17.717Z" })
          ]),
          s("g", null, [
            s("path", { d: "M18.221,13.217a.5.5,0,0,1-.5-.5v-1.5a.5.5,0,0,1,1,0v1.5A.5.5,0,0,1,18.221,13.217Z" }),
            s("path", { d: "M18.221,17.717a.5.5,0,0,1-.5-.5v-1.5a.5.5,0,0,1,1,0v1.5A.5.5,0,0,1,18.221,17.717Z" })
          ])
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const fn = /* @__PURE__ */ u(K5, [["render", J5]]), Y5 = a({
  name: "CiHotdog",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function X5(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Hotdog" }, [
        s("g", null, [
          s("path", { d: "M19.1,9.349l-9.74,9.74.01.01,9.74-9.74Z" }),
          s("path", { d: "M20.276,9.119l-.47-.47a3.157,3.157,0,0,0-.03-4.43,3.212,3.212,0,0,0-4.42-.03l-.48-.48a2.3,2.3,0,0,0-3.18,0l-7.98,7.98a2.263,2.263,0,0,0,0,3.18l.48.48a3.145,3.145,0,0,0,.03,4.42,3.089,3.089,0,0,0,2.23.92,3.126,3.126,0,0,0,2.2-.89l.47.47a2.245,2.245,0,0,0,3.18,0l7.97-7.97A2.245,2.245,0,0,0,20.276,9.119Zm-15.85,3.27,7.97-7.97a1.243,1.243,0,0,1,1.77,0l.47.47L4.9,14.629l-.47-.47A1.249,1.249,0,0,1,4.426,12.389Zm3.52,6.7a2.2,2.2,0,0,1-3.02-.03,2.149,2.149,0,0,1-.03-3.01l11.16-11.16a2.163,2.163,0,0,1,1.49-.6,2.155,2.155,0,0,1,1.55,3.65Zm11.63-7.49-7.98,7.97a1.275,1.275,0,0,1-1.76,0l-.47-.47-.01-.01,9.74-9.74.01.01.47.47A1.268,1.268,0,0,1,19.576,11.6Z" }),
          s("path", { d: "M6.57,17.569a.5.5,0,0,1-.354-.854,4.533,4.533,0,0,1,1.357-.967,3.491,3.491,0,0,0,1.1-.778,3.514,3.514,0,0,0,.779-1.1,5.034,5.034,0,0,1,2.324-2.324,3.517,3.517,0,0,0,1.1-.78,3.536,3.536,0,0,0,.78-1.1,4.534,4.534,0,0,1,.97-1.359,4.54,4.54,0,0,1,1.359-.97,3.53,3.53,0,0,0,1.1-.78.5.5,0,1,1,.707.707,4.516,4.516,0,0,1-1.36.969,3.506,3.506,0,0,0-1.1.781,3.535,3.535,0,0,0-.781,1.1,4.516,4.516,0,0,1-.969,1.36,4.5,4.5,0,0,1-1.359.969,4.029,4.029,0,0,0-1.874,1.874,4.5,4.5,0,0,1-.967,1.357,4.524,4.524,0,0,1-1.358.968,3.51,3.51,0,0,0-1.1.777A.5.5,0,0,1,6.57,17.569Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const yn = /* @__PURE__ */ u(Y5, [["render", X5]]), x5 = a({
  name: "CiIceCream",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function es(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Ice_Cream",
        "data-name": "Ice Cream"
      }, [
        s("path", { d: "M16.54,5.94a4.594,4.594,0,0,0-9.08,0,3.065,3.065,0,0,0-.76,5.85l3.92,9.25a1.5,1.5,0,0,0,2.76,0l3.92-9.26a3.058,3.058,0,0,0-.76-5.84ZM12.46,20.65a.5.5,0,0,1-.92,0L7.89,12.03h8.22Zm3.64-9.62H7.9a2.06,2.06,0,1,1,.01-4.12.5.5,0,0,0,.5-.48,3.6,3.6,0,0,1,7.18,0,.506.506,0,0,0,.51.48,2.06,2.06,0,0,1,0,4.12Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Cn = /* @__PURE__ */ u(x5, [["render", es]]), ss = a({
  name: "CiImageOff",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function os(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("rect", {
        id: "Image-Off",
        "serif:id": "Image Off",
        x: "0",
        y: "0",
        width: "24",
        height: "24",
        style: { fill: "none" }
      }, null, -1),
      s("g", {
        id: "Image-Off1",
        "serif:id": "Image Off"
      }, [
        s("path", { d: "M19.937,14.218l0,-8.654c0,-0.829 -0.672,-1.5 -1.5,-1.5l-10.628,-0c-0.276,-0 -0.5,-0.225 -0.5,-0.5c0,-0.276 0.224,-0.5 0.5,-0.5l10.628,-0c1.38,-0 2.5,1.118 2.5,2.5l0,10.624c0,0.276 -0.224,0.5 -0.5,0.501c-0.276,-0 -0.5,-0.225 -0.5,-0.5l0,-0.556l-4.583,-4.584c-0.456,-0.456 0.251,-1.163 0.707,-0.707c0.162,0.162 2.37,2.37 3.876,3.876Zm-0.121,6.304c-0.395,0.262 -0.869,0.415 -1.379,0.415l-12.874,-0c-1.381,-0 -2.5,-1.119 -2.5,-2.5l0,-12.873c0,-0.51 0.153,-0.984 0.414,-1.38l-0.263,-0.263c-0.456,-0.456 0.251,-1.163 0.707,-0.707c0.088,0.088 0.176,0.176 0.263,0.263c0.245,0.245 16.095,16.094 16.339,16.338l0.263,0.263c0.455,0.456 -0.252,1.163 -0.707,0.707c-0.088,-0.087 -0.175,-0.175 -0.263,-0.263Zm-11.104,-11.103l-2.001,-2.001c-0.094,0.196 -0.146,0.415 -0.146,0.647c-0,0.829 0.672,1.5 1.5,1.5c0.232,-0 0.451,-0.052 0.647,-0.146Zm-2.733,-2.733l-1.77,-1.77c-0.093,0.196 -0.146,0.416 -0.146,0.648l0,10.717l1.926,-1.926c0.587,-0.586 1.536,-0.586 2.122,-0l0.555,0.554c0.195,0.196 0.511,0.196 0.706,0l2.415,-2.415l-2.343,-2.343c-0.395,0.262 -0.869,0.414 -1.379,0.414c-1.38,-0 -2.5,-1.119 -2.5,-2.5c-0,-0.509 0.152,-0.983 0.414,-1.379Zm-1.916,11.009l0,0.741c0,0.829 0.671,1.5 1.5,1.5l12.874,0c0.232,0 0.451,-0.052 0.647,-0.145c-0.165,-0.165 -3.264,-3.263 -6.59,-6.59l-2.414,2.415c-0.585,0.586 -1.537,0.586 -2.122,0l-0.554,-0.554c-0.195,-0.196 -0.512,-0.196 -0.708,0l-2.633,2.633Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const mn = /* @__PURE__ */ u(ss, [["render", os]]), ts = a({
  name: "CiImageOn",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function as(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Image_On",
        "data-name": "Image On"
      }, [
        s("g", null, [
          s("path", { d: "M18.435,3.06H5.565a2.5,2.5,0,0,0-2.5,2.5V18.44a2.507,2.507,0,0,0,2.5,2.5h12.87a2.507,2.507,0,0,0,2.5-2.5V5.56A2.5,2.5,0,0,0,18.435,3.06ZM4.065,5.56a1.5,1.5,0,0,1,1.5-1.5h12.87a1.5,1.5,0,0,1,1.5,1.5v8.66l-3.88-3.88a1.509,1.509,0,0,0-2.12,0l-4.56,4.57a.513.513,0,0,1-.71,0l-.56-.56a1.522,1.522,0,0,0-2.12,0l-1.92,1.92Zm15.87,12.88a1.5,1.5,0,0,1-1.5,1.5H5.565a1.5,1.5,0,0,1-1.5-1.5v-.75L6.7,15.06a.5.5,0,0,1,.35-.14.524.524,0,0,1,.36.14l.55.56a1.509,1.509,0,0,0,2.12,0l4.57-4.57a.5.5,0,0,1,.71,0l4.58,4.58Z" }),
          s("path", { d: "M8.062,10.565a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,8.062,10.565Zm0-4a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,8.062,6.565Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const gn = /* @__PURE__ */ u(ts, [["render", as]]), ls = a({
  name: "CiImport",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function rs(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Import" }, [
        s("g", null, [
          s("path", { d: "M5.552,20.968a2.577,2.577,0,0,1-2.5-2.73c-.012-2.153,0-4.306,0-6.459a.5.5,0,0,1,1,0c0,2.2-.032,4.4,0,6.6.016,1.107.848,1.589,1.838,1.589H18.353A1.546,1.546,0,0,0,19.825,19a3.023,3.023,0,0,0,.1-1.061V11.779h0a.5.5,0,0,1,1,0c0,2.224.085,4.465,0,6.687a2.567,2.567,0,0,1-2.67,2.5Z" }),
          s("path", { d: "M11.63,15.818a.459.459,0,0,0,.312.138c.014,0,.027.005.042.006s.027,0,.041-.006a.457.457,0,0,0,.312-.138l3.669-3.669a.5.5,0,0,0-.707-.707l-2.815,2.815V3.515a.5.5,0,0,0-1,0V14.257L8.668,11.442a.5.5,0,0,0-.707.707Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Bn = /* @__PURE__ */ u(ls, [["render", rs]]), ns = a({
  name: "CiInboxIn",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function is(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Inbox_In",
        "data-name": "Inbox In"
      }, [
        s("g", null, [
          s("path", { d: "M11.5,9.361V4.531a.5.5,0,0,1,1,0v4.82l1.27-1.27a.524.524,0,0,1,.71,0,.513.513,0,0,1,0,.71l-2.13,2.12a.492.492,0,0,1-.7,0l-2.12-2.12a.5.5,0,0,1,0-.71.511.511,0,0,1,.7,0Z" }),
          s("path", { d: "M20.488,19.949H3.512A1.451,1.451,0,0,1,2.062,18.5V12.861a1.451,1.451,0,0,1,1.45-1.449h4.1a1.444,1.444,0,0,1,1.3.8l1.373,2.726a.449.449,0,0,0,.4.247h2.629a.448.448,0,0,0,.4-.248l1.373-2.724a1.442,1.442,0,0,1,1.3-.8h4.1a1.451,1.451,0,0,1,1.45,1.449V18.5A1.451,1.451,0,0,1,20.488,19.949ZM3.512,12.412a.45.45,0,0,0-.45.449V18.5a.45.45,0,0,0,.45.449H20.488a.45.45,0,0,0,.45-.449V12.861a.45.45,0,0,0-.45-.449h-4.1a.449.449,0,0,0-.4.247L14.61,15.384a1.445,1.445,0,0,1-1.295.8H10.686a1.442,1.442,0,0,1-1.295-.8L8.018,12.659a.449.449,0,0,0-.4-.247Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const hn = /* @__PURE__ */ u(ns, [["render", is]]), cs = a({
  name: "CiInboxOut",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ps(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Inbox_Out",
        "data-name": "Inbox Out"
      }, [
        s("g", null, [
          s("path", { d: "M20.488,19.944H3.512a1.452,1.452,0,0,1-1.45-1.45V12.856a1.452,1.452,0,0,1,1.45-1.45h4.1a1.442,1.442,0,0,1,1.3.8l1.373,2.725a.449.449,0,0,0,.4.247h2.629a.448.448,0,0,0,.4-.248L15.09,12.2a1.442,1.442,0,0,1,1.3-.8h4.1a1.452,1.452,0,0,1,1.45,1.45v5.638A1.452,1.452,0,0,1,20.488,19.944ZM3.512,12.406a.451.451,0,0,0-.45.45v5.638a.45.45,0,0,0,.45.45H20.488a.45.45,0,0,0,.45-.45V12.856a.451.451,0,0,0-.45-.45h-4.1a.449.449,0,0,0-.4.247L14.61,15.378a1.445,1.445,0,0,1-1.295.8H10.686a1.444,1.444,0,0,1-1.295-.8L8.018,12.653a.449.449,0,0,0-.4-.247Z" }),
          s("path", { d: "M12.5,5.753v4.83a.5.5,0,0,1-1,0V5.763l-1.27,1.27a.524.524,0,0,1-.71,0,.513.513,0,0,1,0-.71l2.13-2.12a.492.492,0,0,1,.7,0l2.12,2.12a.5.5,0,0,1,0,.71.511.511,0,0,1-.7,0Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const vn = /* @__PURE__ */ u(cs, [["render", ps]]), ds = a({
  name: "CiIndent",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function us(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Indent" }, [
        s("g", null, [
          s("path", { d: "M20.437,4.064H3.563a.5.5,0,0,1,0-1H20.437a.5.5,0,0,1,0,1Z" }),
          s("path", { d: "M20.437,9.688h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z" }),
          s("path", { d: "M20.437,15.312h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z" }),
          s("path", { d: "M20.437,20.936H3.563a.5.5,0,1,1,0-1H20.437a.5.5,0,1,1,0,1Z" }),
          s("path", { d: "M7.91,11.65a.492.492,0,0,1,0,.7l-2,2a.495.495,0,0,1-.7-.7L6.36,12.5H3.54a.5.5,0,0,1,0-1H6.35c-.38-.38-.76-.76-1.14-1.15a.495.495,0,0,1,.7-.7Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const $n = /* @__PURE__ */ u(ds, [["render", us]]), fs = a({
  name: "CiInstagram",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ys(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Instagram" }, [
        s("g", null, [
          s("path", { d: "M18.437,20.937H5.563a2.5,2.5,0,0,1-2.5-2.5V5.563a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5V18.437A2.5,2.5,0,0,1,18.437,20.937ZM5.563,4.063a1.5,1.5,0,0,0-1.5,1.5V18.437a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V5.563a1.5,1.5,0,0,0-1.5-1.5Z" }),
          s("path", { d: "M12,16.594A4.595,4.595,0,1,1,16.6,12,4.6,4.6,0,0,1,12,16.594ZM12,8.4A3.595,3.595,0,1,0,15.6,12,3.6,3.6,0,0,0,12,8.4Z" }),
          s("circle", {
            cx: "17.2",
            cy: "6.83",
            r: "1.075"
          })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Sn = /* @__PURE__ */ u(fs, [["render", ys]]), Cs = a({
  name: "CiKeyboard",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ms(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Keyboard" }, [
        s("g", null, [
          s("path", { d: "M19.437,18.5H4.562a2.5,2.5,0,0,1-2.5-2.5V8a2.5,2.5,0,0,1,2.5-2.5H19.437a2.5,2.5,0,0,1,2.5,2.5v8A2.5,2.5,0,0,1,19.437,18.5ZM4.562,6.5A1.5,1.5,0,0,0,3.062,8v8a1.5,1.5,0,0,0,1.5,1.5H19.437a1.5,1.5,0,0,0,1.5-1.5V8a1.5,1.5,0,0,0-1.5-1.5Z" }),
          s("path", { d: "M5.548,16.5h12.9a.5.5,0,0,0,0-1H5.548a.5.5,0,0,0,0,1Z" }),
          s("g", null, [
            s("circle", {
              cx: "5.82",
              cy: "9.248",
              r: "0.75"
            }),
            s("circle", {
              cx: "9.94",
              cy: "9.248",
              r: "0.75"
            }),
            s("circle", {
              cx: "14.06",
              cy: "9.248",
              r: "0.75"
            }),
            s("circle", {
              cx: "18.18",
              cy: "9.248",
              r: "0.75"
            })
          ]),
          s("g", null, [
            s("circle", {
              cx: "5.82",
              cy: "12.998",
              r: "0.75"
            }),
            s("circle", {
              cx: "9.94",
              cy: "12.998",
              r: "0.75"
            }),
            s("circle", {
              cx: "14.06",
              cy: "12.998",
              r: "0.75"
            }),
            s("circle", {
              cx: "18.18",
              cy: "12.998",
              r: "0.75"
            })
          ])
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const kn = /* @__PURE__ */ u(Cs, [["render", ms]]), gs = a({
  name: "CiLaptop",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Bs(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Laptop" }, [
        s("path", { d: "M21.485,16.155a.992.992,0,0,0-.77-.36h-.33V6.565a2.5,2.5,0,0,0-2.5-2.5H6.115a2.5,2.5,0,0,0-2.5,2.5V15.8h-.34a1,1,0,0,0-.98,1.17l.3,1.73a1.5,1.5,0,0,0,1.48,1.24h15.85a1.5,1.5,0,0,0,1.48-1.24l.3-1.73A.986.986,0,0,0,21.485,16.155ZM4.615,6.565a1.5,1.5,0,0,1,1.5-1.5h11.77a1.5,1.5,0,0,1,1.5,1.5V15.8H4.615Zm15.8,11.96a.494.494,0,0,1-.49.41H4.075a.494.494,0,0,1-.49-.41l-.31-1.73h17.44Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const wn = /* @__PURE__ */ u(gs, [["render", Bs]]), hs = a({
  name: "CiLemon",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function vs(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Lemon" }, [
        s("g", null, [
          s("path", { d: "M6,20.924a2.172,2.172,0,0,1-1.545-.642l-.734-.733a2.207,2.207,0,0,1-.16-2.947,1.18,1.18,0,0,0,.272-1.117A9.105,9.105,0,0,1,6.205,6.208a9.1,9.1,0,0,1,9.277-2.371,1.149,1.149,0,0,0,1.062-.229l.055-.044a2.205,2.205,0,0,1,2.946.161l.734.733a2.207,2.207,0,0,1,.16,2.947,1.179,1.179,0,0,0-.272,1.116A9.11,9.11,0,0,1,17.8,17.8,9.109,9.109,0,0,1,8.518,20.17a1.14,1.14,0,0,0-1.062.229A2.324,2.324,0,0,1,6,20.924ZM12.812,4.4a8.427,8.427,0,0,0-5.9,2.519,8.1,8.1,0,0,0-2.133,8.246,2.149,2.149,0,0,1-.395,2.014,1.227,1.227,0,0,0,.044,1.667l.734.733a1.209,1.209,0,0,0,1.613.088,2.175,2.175,0,0,1,2.067-.438,8.1,8.1,0,0,0,8.246-2.133,8.1,8.1,0,0,0,2.133-8.246,2.144,2.144,0,0,1,.395-2.013,1.229,1.229,0,0,0-.044-1.668l-.734-.733a1.206,1.206,0,0,0-1.612-.089l-.052.042a2.148,2.148,0,0,1-2.016.4A7.213,7.213,0,0,0,12.812,4.4Z" }),
          s("path", { d: "M6.457,12.286a.523.523,0,0,1-.178-.032.5.5,0,0,1-.29-.646,9.841,9.841,0,0,1,5.338-5.5.5.5,0,1,1,.386.921,8.845,8.845,0,0,0-4.789,4.939A.5.5,0,0,1,6.457,12.286Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const zn = /* @__PURE__ */ u(hs, [["render", vs]]), $s = a({
  name: "CiLight",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ss(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Light" }, [
        s("g", null, [
          s("path", { d: "M12,18.09A6.09,6.09,0,1,1,18.09,12,6.1,6.1,0,0,1,12,18.09ZM12,6.91A5.09,5.09,0,1,0,17.09,12,5.1,5.1,0,0,0,12,6.91Z" }),
          s("path", { d: "M11.5,2.568v1.6a.5.5,0,1,0,1,0v-1.6a.5.5,0,1,0-1,0Z" }),
          s("path", { d: "M12.5,21.432v-1.6a.5.5,0,0,0-1,0v1.6a.5.5,0,1,0,1,0Z" }),
          s("path", { d: "M21.432,11.5h-1.6a.5.5,0,0,0,0,1h1.6a.5.5,0,1,0,0-1Z" }),
          s("path", { d: "M2.568,12.5h1.6a.5.5,0,1,0,0-1h-1.6a.5.5,0,1,0,0,1Z" }),
          s("path", { d: "M18.316,4.977l-.992.992-.141.141a.514.514,0,0,0-.146.353.508.508,0,0,0,.146.354.5.5,0,0,0,.354.146.515.515,0,0,0,.353-.146l.992-.992.141-.141a.515.515,0,0,0,.147-.354.508.508,0,0,0-.147-.353.5.5,0,0,0-.353-.147.522.522,0,0,0-.354.147Z" }),
          s("path", { d: "M5.684,19.023l.992-.992.141-.141a.514.514,0,0,0,.146-.353.508.508,0,0,0-.146-.354.5.5,0,0,0-.354-.146.515.515,0,0,0-.353.146l-.992.992-.141.141a.515.515,0,0,0-.147.354.508.508,0,0,0,.147.353.5.5,0,0,0,.353.147.522.522,0,0,0,.354-.147Z" }),
          s("path", { d: "M19.023,18.316l-.992-.992-.141-.141a.514.514,0,0,0-.353-.146.508.508,0,0,0-.354.146.5.5,0,0,0-.146.354.515.515,0,0,0,.146.353l.992.992.141.141a.515.515,0,0,0,.354.147.508.508,0,0,0,.353-.147.5.5,0,0,0,.147-.353.522.522,0,0,0-.147-.354Z" }),
          s("path", { d: "M4.977,5.684l.992.992.141.141a.514.514,0,0,0,.353.146.508.508,0,0,0,.354-.146.5.5,0,0,0,.146-.354.515.515,0,0,0-.146-.353l-.992-.992-.141-.141A.515.515,0,0,0,5.33,4.83a.508.508,0,0,0-.353.147.5.5,0,0,0-.147.353.522.522,0,0,0,.147.354Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Zn = /* @__PURE__ */ u($s, [["render", Ss]]), ks = a({
  name: "CiLineHeight",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ws(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Line_Height",
        "data-name": "Line Height"
      }, [
        s("g", null, [
          s("path", { d: "M20.439,4.062h-9a.5.5,0,1,1,0-1h9a.5.5,0,0,1,0,1Z" }),
          s("path", { d: "M20.439,9.686h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z" }),
          s("path", { d: "M20.439,15.31h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z" }),
          s("path", { d: "M20.439,20.934h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z" }),
          s("path", { d: "M3.208,18.8a.5.5,0,0,1,.71-.71l1.14,1.14V4.775l-1.14,1.14a.513.513,0,0,1-.71,0,.5.5,0,0,1,0-.71l2-2a.494.494,0,0,1,.34-.14.549.549,0,0,1,.37.14l2,2a.524.524,0,0,1,0,.71.5.5,0,0,1-.71,0l-1.15-1.15v14.47l1.15-1.15a.5.5,0,1,1,.71.71l-2,2a.513.513,0,0,1-.71,0Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Mn = /* @__PURE__ */ u(ks, [["render", ws]]), zs = a({
  name: "CiLink",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Zs(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Link" }, [
        s("g", null, [
          s("path", { d: "M10.9,8a4.055,4.055,0,0,1,1.352.135,2.511,2.511,0,0,1-.7,4.863.5.5,0,0,0,0,1,3.508,3.508,0,0,0,2.944-5.2A3.557,3.557,0,0,0,11.434,7H5.59A3.5,3.5,0,0,0,5.4,14c.724.041,1.458,0,2.183,0a.5.5,0,0,0,0-1h0c-1.323,0-2.915.262-3.891-.843A2.522,2.522,0,0,1,5.59,8Z" }),
          s("path", { d: "M18.41,17a3.5,3.5,0,0,0,.192-6.994c-.724-.041-1.458,0-2.183,0a.5.5,0,0,0,0,1h0c1.323,0,2.915-.262,3.891.843A2.522,2.522,0,0,1,18.41,16H13.1a4.055,4.055,0,0,1-1.352-.135,2.511,2.511,0,0,1,.7-4.863.5.5,0,0,0,0-1,3.508,3.508,0,0,0-2.944,5.2A3.557,3.557,0,0,0,12.566,17Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const An = /* @__PURE__ */ u(zs, [["render", Zs]]), Ms = a({
  name: "CiLinkedIn",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function As(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "LinkedIn" }, [
        s("g", null, [
          s("path", { d: "M18.44,3.06H5.56a2.507,2.507,0,0,0-2.5,2.5V18.44a2.507,2.507,0,0,0,2.5,2.5H18.44a2.5,2.5,0,0,0,2.5-2.5V5.56A2.5,2.5,0,0,0,18.44,3.06Zm1.5,15.38a1.511,1.511,0,0,1-1.5,1.5H5.56a1.511,1.511,0,0,1-1.5-1.5V5.56a1.511,1.511,0,0,1,1.5-1.5H18.44a1.511,1.511,0,0,1,1.5,1.5Z" }),
          s("g", null, [
            s("path", { d: "M6.376,10.748a1,1,0,1,1,2,0v6.5h0a1,1,0,0,1-2,0Z" }),
            s("circle", {
              cx: "7.376",
              cy: "6.744",
              r: "1"
            }),
            s("path", { d: "M17.62,13.37v3.88a1,1,0,1,1-2,0V13.37a1.615,1.615,0,1,0-3.23,0v3.88a1,1,0,0,1-2,0v-6.5a1.016,1.016,0,0,1,1-1,.94.94,0,0,1,.84.47,3.609,3.609,0,0,1,5.39,3.15Z" })
          ])
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Hn = /* @__PURE__ */ u(Ms, [["render", As]]), Hs = a({
  name: "CiLocationArrow1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Vs(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Location_Arrow_1",
        "data-name": "Location Arrow 1"
      }, [
        s("path", { d: "M14.472,20.937a1.438,1.438,0,0,1-1.3-.812L10.3,14.343a1.418,1.418,0,0,0-.642-.641L3.874,10.831A1.462,1.462,0,0,1,4.06,8.136l14.952-5a1.46,1.46,0,0,1,1.849,1.847l-5,14.952a1.439,1.439,0,0,1-1.284.994C14.543,20.936,14.507,20.937,14.472,20.937ZM19.479,4.063a.488.488,0,0,0-.149.024h0l-14.952,5a.46.46,0,0,0-.058.849L10.1,12.805A2.444,2.444,0,0,1,11.2,13.9l2.87,5.782a.443.443,0,0,0,.445.255.45.45,0,0,0,.4-.312l5-14.953a.462.462,0,0,0-.433-.607Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Vn = /* @__PURE__ */ u(Hs, [["render", Vs]]), Is = a({
  name: "CiLocationOff",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function _s(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Location_Off",
        "data-name": "Location Off"
      }, [
        s("g", null, [
          s("path", { d: "M18.2,14.462a.5.5,0,0,1-.417-.775A6.791,6.791,0,0,0,18.831,9.06a6.909,6.909,0,0,0-6.022-5.946A6.834,6.834,0,0,0,8.252,4.175a.5.5,0,1,1-.545-.838,7.882,7.882,0,0,1,10.909,10.9A.5.5,0,0,1,18.2,14.462Z" }),
          s("path", { d: "M4,3.3a.5.5,0,0,0-.7.7l1.92,1.92a7.784,7.784,0,0,0-1.11,4.03A7.879,7.879,0,0,0,5.55,14.5l5.06,6.74a1.724,1.724,0,0,0,1.39.69,1.705,1.705,0,0,0,1.38-.69l3.06-4.09c.5.49.99.99,1.48,1.48.7.69,1.39,1.38,2.08,2.07.45.46,1.16-.25.7-.71Zm8.58,17.34a.734.734,0,0,1-.58.29.754.754,0,0,1-.59-.29l-5.05-6.73a6.9,6.9,0,0,1-.41-7.26q1.5,1.515,3.01,3.01,3.39,3.39,6.77,6.78Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const In = /* @__PURE__ */ u(Is, [["render", _s]]), bs = a({
  name: "CiLocationOn",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Os(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Location_On",
        "data-name": "Location On"
      }, [
        s("g", null, [
          s("path", { d: "M12,21.933a1.715,1.715,0,0,1-1.384-.691L5.555,14.5a7.894,7.894,0,1,1,12.885-.009L13.385,21.24A1.717,1.717,0,0,1,12,21.933ZM11.992,3.066A6.81,6.81,0,0,0,7.414,4.815a6.891,6.891,0,0,0-1.05,9.1l5.051,6.727a.725.725,0,0,0,.584.292h0a.732.732,0,0,0,.586-.292l5.044-6.734A6.874,6.874,0,0,0,12.81,3.113,7.277,7.277,0,0,0,11.992,3.066Z" }),
          s("path", { d: "M12,12.5A2.5,2.5,0,1,1,14.5,10,2.5,2.5,0,0,1,12,12.5Zm0-4A1.5,1.5,0,1,0,13.5,10,1.5,1.5,0,0,0,12,8.5Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const _n = /* @__PURE__ */ u(bs, [["render", Os]]), Ls = a({
  name: "CiLock",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function js(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Lock" }, [
        s("g", null, [
          s("path", { d: "M17.44,9.33h-1.1V6.4a4.34,4.34,0,0,0-8.68,0V9.33H6.56a2.5,2.5,0,0,0-2.5,2.5v7.61a2.507,2.507,0,0,0,2.5,2.5H17.44a2.507,2.507,0,0,0,2.5-2.5V11.83A2.5,2.5,0,0,0,17.44,9.33ZM8.66,6.4a3.34,3.34,0,0,1,6.68,0V9.33H8.66ZM18.94,19.44a1.511,1.511,0,0,1-1.5,1.5H6.56a1.511,1.511,0,0,1-1.5-1.5V11.83a1.5,1.5,0,0,1,1.5-1.5H17.44a1.5,1.5,0,0,1,1.5,1.5Z" }),
          s("path", { d: "M13,14.95a.984.984,0,0,1-.5.86v1.5a.5.5,0,0,1-1,0v-1.5a.984.984,0,0,1-.5-.86,1,1,0,0,1,2,0Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const bn = /* @__PURE__ */ u(Ls, [["render", js]]), Ps = a({
  name: "CiLogin",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ds(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Login" }, [
        s("g", null, [
          s("path", { d: "M20.944,18.432a2.577,2.577,0,0,1-2.729,2.5c-2.153.012-4.307,0-6.46,0a.5.5,0,0,1,0-1c2.2,0,4.4.032,6.6,0,1.107-.016,1.589-.848,1.589-1.838V5.63a1.545,1.545,0,0,0-.969-1.471,3.027,3.027,0,0,0-1.061-.095H11.755a.5.5,0,0,1,0-1c2.225,0,4.465-.085,6.688,0a2.566,2.566,0,0,1,2.5,2.67Z" }),
          s("path", { d: "M15.794,12.354a.459.459,0,0,0,.138-.312A.3.3,0,0,0,15.938,12a.29.29,0,0,0-.006-.041.455.455,0,0,0-.138-.313L12.125,7.978a.5.5,0,0,0-.707.707L14.234,11.5H3.492a.5.5,0,0,0,0,1H14.234l-2.816,2.815a.5.5,0,0,0,.707.707Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const On = /* @__PURE__ */ u(Ps, [["render", Ds]]), Fs = a({
  name: "CiLogout",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Rs(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Logout" }, [
        s("g", null, [
          s("path", { d: "M20.968,18.448a2.577,2.577,0,0,1-2.73,2.5c-2.153.012-4.306,0-6.459,0a.5.5,0,0,1,0-1c2.2,0,4.4.032,6.6,0,1.107-.016,1.589-.848,1.589-1.838V5.647A1.546,1.546,0,0,0,19,4.175a3.023,3.023,0,0,0-1.061-.095H11.779a.5.5,0,0,1,0-1c2.224,0,4.465-.085,6.687,0a2.567,2.567,0,0,1,2.5,2.67Z" }),
          s("path", { d: "M3.176,11.663a.455.455,0,0,0-.138.311c0,.015,0,.028-.006.043s0,.027.006.041a.457.457,0,0,0,.138.312l3.669,3.669a.5.5,0,0,0,.707-.707L4.737,12.516H15.479a.5.5,0,0,0,0-1H4.737L7.552,8.7a.5.5,0,0,0-.707-.707Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Ln = /* @__PURE__ */ u(Fs, [["render", Rs]]), Ts = a({
  name: "CiLollipop",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function qs(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Lollipop" }, [
        s("path", { d: "M18,6.565h-.19a6,6,0,0,0-11.62,0H6a1.5,1.5,0,1,0,0,3h.19a5.992,5.992,0,0,0,5.31,4.48v7.39a.5.5,0,0,0,.5.5.5.5,0,0,0,.5-.5v-7.39a6.013,6.013,0,0,0,5.31-4.48H18a1.5,1.5,0,1,0,0-3Zm-6-3.5a4.991,4.991,0,0,1,4.77,3.5H7.23A4.991,4.991,0,0,1,12,3.065Zm0,10a4.991,4.991,0,0,1-4.77-3.5h9.54A4.991,4.991,0,0,1,12,13.065Zm6-4.5H6a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5H18a.5.5,0,0,1,.5.5A.508.508,0,0,1,18,8.565Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const jn = /* @__PURE__ */ u(Ts, [["render", qs]]), Us = a({
  name: "CiMail",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Gs(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Mail" }, [
        s("path", { d: "M19.435,4.065H4.565a2.5,2.5,0,0,0-2.5,2.5v10.87a2.5,2.5,0,0,0,2.5,2.5h14.87a2.5,2.5,0,0,0,2.5-2.5V6.565A2.5,2.5,0,0,0,19.435,4.065Zm-14.87,1h14.87a1.489,1.489,0,0,1,1.49,1.39c-2.47,1.32-4.95,2.63-7.43,3.95a6.172,6.172,0,0,1-1.06.53,2.083,2.083,0,0,1-1.67-.39c-1.42-.75-2.84-1.51-4.25-2.26-1.14-.6-2.3-1.21-3.44-1.82A1.491,1.491,0,0,1,4.565,5.065Zm16.37,12.37a1.5,1.5,0,0,1-1.5,1.5H4.565a1.5,1.5,0,0,1-1.5-1.5V7.6c2.36,1.24,4.71,2.5,7.07,3.75a5.622,5.622,0,0,0,1.35.6,2.872,2.872,0,0,0,2-.41c1.45-.76,2.89-1.53,4.34-2.29,1.04-.56,2.07-1.1,3.11-1.65Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Pn = /* @__PURE__ */ u(Us, [["render", Gs]]), Ws = a({
  name: "CiMap",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Es(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Map" }, [
        s("path", { d: "M20.21,4.576a1.906,1.906,0,0,0-1.63-.35l-3.53.89a1.086,1.086,0,0,1-.44,0L9.63,3.876a2.041,2.041,0,0,0-.92,0L4.5,4.936a1.893,1.893,0,0,0-1.44,1.84v11.15a1.871,1.871,0,0,0,.73,1.5,1.906,1.906,0,0,0,1.63.35l3.53-.89a1.086,1.086,0,0,1,.44,0l4.98,1.24a2.315,2.315,0,0,0,.46.05,2.4,2.4,0,0,0,.46-.05l4.21-1.06a1.893,1.893,0,0,0,1.44-1.84V6.076A1.871,1.871,0,0,0,20.21,4.576ZM8.67,17.926l-3.49.87a.89.89,0,0,1-1.12-.87V6.776a.9.9,0,0,1,.68-.87l3.93-.99Zm5.66,1.16-4.66-1.16V4.916l4.66,1.16Zm5.61-1.86a.9.9,0,0,1-.68.87l-3.93.99V6.076l3.49-.87a.908.908,0,0,1,.78.16.886.886,0,0,1,.34.71Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Dn = /* @__PURE__ */ u(Ws, [["render", Es]]), Ns = a({
  name: "CiMapPin",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Qs(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Map_Pin",
        "data-name": "Map Pin"
      }, [
        s("path", { d: "M12,2.06a5.5,5.5,0,0,0-.5,10.97v8.41a.5.5,0,0,0,.5.5.5.5,0,0,0,.5-.5V13.03A5.5,5.5,0,0,0,12,2.06Zm0,10a4.5,4.5,0,1,1,4.5-4.5A4.5,4.5,0,0,1,12,12.06Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Fn = /* @__PURE__ */ u(Ns, [["render", Qs]]), Ks = a({
  name: "CiMaximize1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Js(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Maximize_1",
        "data-name": "Maximize 1"
      }, [
        s("g", null, [
          s("path", { d: "M3.065,16.16a.5.5,0,0,1,1,0v3.07l.01-.01,6.07-6.07a.5.5,0,0,1,.71.71c-.29.29-.58.57-.87.86-1.74,1.74-3.47,3.48-5.21,5.22h3.07a.5.5,0,0,1,0,1H3.565a.429.429,0,0,1-.34-.14c-.01-.01-.02-.01-.02-.02a.384.384,0,0,1-.13-.26C3.066,20.442,3.065,16.16,3.065,16.16Z" }),
          s("path", { d: "M20.935,3.56V7.84a.5.5,0,0,1-1,0V4.77l-.01.01q-3.045,3.03-6.07,6.07a.5.5,0,0,1-.71-.71c.29-.29.58-.57.86-.86,1.75-1.74,3.48-3.48,5.22-5.22h-3.07a.5.5,0,0,1,0-1h4.28a.429.429,0,0,1,.34.14c.01.01.02.01.02.02A.429.429,0,0,1,20.935,3.56Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Rn = /* @__PURE__ */ u(Ks, [["render", Js]]), Ys = a({
  name: "CiMaximize2",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Xs(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Maximize_2",
        "data-name": "Maximize 2"
      }, [
        s("g", null, [
          s("path", { d: "M10.513,3.066H4.93a2.058,2.058,0,0,0-1.15.22,1.6,1.6,0,0,0-.717,1.437v5.793a.5.5,0,0,0,1,0V5.107a2.521,2.521,0,0,1,.022-.689c.115-.373.469-.352.777-.352h5.651a.5.5,0,0,0,0-1Z" }),
          s("path", { d: "M3.063,13.488v5.583a2.057,2.057,0,0,0,.221,1.15,1.6,1.6,0,0,0,1.436.717h5.793a.5.5,0,0,0,0-1H5.1a2.483,2.483,0,0,1-.689-.022c-.372-.115-.352-.469-.352-.777V13.488a.5.5,0,0,0-1,0Z" }),
          s("path", { d: "M13.487,20.934H19.07a2.058,2.058,0,0,0,1.15-.22,1.6,1.6,0,0,0,.717-1.437V13.484a.5.5,0,0,0-1,0v5.409a2.521,2.521,0,0,1-.022.689c-.115.373-.469.352-.777.352H13.487a.5.5,0,0,0,0,1Z" }),
          s("path", { d: "M20.937,10.512V4.929a2.057,2.057,0,0,0-.221-1.15,1.6,1.6,0,0,0-1.436-.717H13.487a.5.5,0,0,0,0,1H18.9a2.483,2.483,0,0,1,.689.022c.372.115.352.469.352.777v5.651a.5.5,0,0,0,1,0Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Tn = /* @__PURE__ */ u(Ys, [["render", Xs]]), xs = a({
  name: "CiMedal",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function eo(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Medal" }, [
        s("g", null, [
          s("path", { d: "M20.692,3.755a1.519,1.519,0,0,0-1.27-.69h-4.41a1.487,1.487,0,0,0-1.36.87L12,7.485l-1.66-3.55a1.487,1.487,0,0,0-1.36-.87H4.572a1.5,1.5,0,0,0-1.35,2.14l3.73,8.02a5.638,5.638,0,0,0-.46,2.21,5.5,5.5,0,0,0,11,0,5.419,5.419,0,0,0-.46-2.2l3.75-8.03A1.525,1.525,0,0,0,20.692,3.755ZM4.122,4.785a.527.527,0,0,1,.03-.49.494.494,0,0,1,.42-.23h4.41a.507.507,0,0,1,.46.29l2.61,5.58h-.06a5.505,5.505,0,0,0-4.43,2.25Zm7.87,15.15a4.5,4.5,0,1,1,4.5-4.5A4.5,4.5,0,0,1,11.992,19.935Zm7.89-15.15-3.46,7.4a5.454,5.454,0,0,0-3.21-2.11l-.66-1.42,2-4.3a.507.507,0,0,1,.46-.29h4.41a.482.482,0,0,1,.42.23A.505.505,0,0,1,19.882,4.785Z" }),
          s("path", { d: "M12.077,16.88l1.024.538a.174.174,0,0,0,.253-.184l-.2-1.14a.174.174,0,0,1,.051-.154l.828-.807a.175.175,0,0,0-.1-.3L12.8,14.669a.177.177,0,0,1-.132-.1l-.512-1.037a.174.174,0,0,0-.313,0l-.512,1.037a.174.174,0,0,1-.131.1l-1.145.166a.175.175,0,0,0-.1.3l.828.807a.174.174,0,0,1,.05.154l-.2,1.14a.174.174,0,0,0,.253.184l1.024-.538A.172.172,0,0,1,12.077,16.88Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const qn = /* @__PURE__ */ u(xs, [["render", eo]]), so = a({
  name: "CiMedicalCase",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function oo(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Medical_Case",
        "data-name": "Medical Case"
      }, [
        s("g", null, [
          s("path", { d: "M18.435,6.465h-1.43v-.9a2.5,2.5,0,0,0-2.5-2.5h-5a2.5,2.5,0,0,0-2.5,2.5v.9H5.565a2.5,2.5,0,0,0-2.5,2.5v9.47a2.5,2.5,0,0,0,2.5,2.5h12.87a2.5,2.5,0,0,0,2.5-2.5V8.965A2.5,2.5,0,0,0,18.435,6.465Zm-10.43-.9a1.5,1.5,0,0,1,1.5-1.5h5a1.5,1.5,0,0,1,1.5,1.5v.9h-8Zm11.93,12.87a1.5,1.5,0,0,1-1.5,1.5H5.565a1.5,1.5,0,0,1-1.5-1.5V8.965a1.5,1.5,0,0,1,1.5-1.5h12.87a1.5,1.5,0,0,1,1.5,1.5Z" }),
          s("path", { d: "M14.505,13.675a.5.5,0,0,1-.5.5h-1.5v1.5a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5v-1.5h-1.5a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h1.5v-1.5a.5.5,0,0,1,.5-.5.508.508,0,0,1,.5.5v1.5h1.5A.508.508,0,0,1,14.505,13.675Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Un = /* @__PURE__ */ u(so, [["render", oo]]), to = a({
  name: "CiMedicalClipboard",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ao(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Medical_Clipboard",
        "data-name": "Medical Clipboard"
      }, [
        s("g", null, [
          s("path", { d: "M17.44,3.5H15.75V2.97a.949.949,0,0,0-1-.91H9.25a.949.949,0,0,0-1,.91V3.5H6.56A2.5,2.5,0,0,0,4.06,6V19.44a2.5,2.5,0,0,0,2.5,2.5H17.44a2.5,2.5,0,0,0,2.5-2.5V6A2.5,2.5,0,0,0,17.44,3.5ZM9.25,3.06l5.5.01V4.19c0,.61-.69,1.12-1.5,1.12h-2.5c-.82,0-1.5-.51-1.5-1.12Zm9.69,16.38a1.511,1.511,0,0,1-1.5,1.5H6.56a1.5,1.5,0,0,1-1.5-1.5V6a1.5,1.5,0,0,1,1.5-1.5H8.28a2.4,2.4,0,0,0,2.47,1.81h2.5A2.4,2.4,0,0,0,15.72,4.5h1.72A1.5,1.5,0,0,1,18.94,6Z" }),
          s("path", { d: "M14.5,12.71a.5.5,0,0,1-.5.5H12.5v1.5a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5v-1.5H10a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h1.5v-1.5a.5.5,0,0,1,.5-.5.508.508,0,0,1,.5.5v1.5H14A.508.508,0,0,1,14.5,12.71Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Gn = /* @__PURE__ */ u(to, [["render", ao]]), lo = a({
  name: "CiMedicalCross",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ro(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Medical_Cross",
        "data-name": "Medical Cross"
      }, [
        s("path", { d: "M12.943,20.93H11.057a2.388,2.388,0,0,1-2.386-2.386V15.3l-3.215.029a2.39,2.39,0,0,1-2.387-2.386V11.057A2.39,2.39,0,0,1,5.456,8.67H8.7L8.671,5.456A2.388,2.388,0,0,1,11.057,3.07h1.886a2.388,2.388,0,0,1,2.386,2.386V8.7l3.215-.03a2.39,2.39,0,0,1,2.387,2.387v1.886a2.39,2.39,0,0,1-2.387,2.386H15.3l.028,3.215A2.388,2.388,0,0,1,12.943,20.93ZM5.456,9.67a1.388,1.388,0,0,0-1.387,1.387v1.886a1.388,1.388,0,0,0,1.387,1.386H8.7a.972.972,0,0,1,.972.971v3.244a1.388,1.388,0,0,0,1.386,1.386h1.886a1.388,1.388,0,0,0,1.386-1.386V15.3a.972.972,0,0,1,.972-.971h3.243a1.388,1.388,0,0,0,1.387-1.386V11.057A1.388,1.388,0,0,0,18.544,9.67H15.3a.972.972,0,0,1-.972-.97V5.456A1.388,1.388,0,0,0,12.943,4.07H11.057A1.388,1.388,0,0,0,9.671,5.456V8.7a.972.972,0,0,1-.972.97Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Wn = /* @__PURE__ */ u(lo, [["render", ro]]), no = a({
  name: "CiMedicalMask",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function io(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Medical_Mask",
        "data-name": "Medical Mask"
      }, [
        s("g", null, [
          s("path", { d: "M21.435,12.53H19.5V9.17h1.94a.5.5,0,0,0,.5-.5.5.5,0,0,0-.5-.5H19.5V7.23A2.5,2.5,0,0,0,17,4.73H7a2.507,2.507,0,0,0-2.5,2.5v.94H2.565a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5H4.5v3.36H2.565a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5H4.5v.33a4.283,4.283,0,0,0,2.43,3.84l1.74.82a7.79,7.79,0,0,0,6.67,0l1.73-.82h.01a4.274,4.274,0,0,0,2.42-3.84v-.33h1.94a.5.5,0,0,0,.5-.5A.5.5,0,0,0,21.435,12.53ZM18.5,13.86a3.238,3.238,0,0,1-1.85,2.93l-1.73.82a6.767,6.767,0,0,1-5.83,0l-1.73-.82A3.248,3.248,0,0,1,5.5,13.86V7.23A1.5,1.5,0,0,1,7,5.73H17a1.5,1.5,0,0,1,1.5,1.5Z" }),
          s("path", { d: "M14.5,14.534h-5a.5.5,0,0,1,0-1h5a.5.5,0,0,1,0,1Z" }),
          s("path", { d: "M16,10.168H8a.5.5,0,1,1,0-1h8a.5.5,0,0,1,0,1Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const En = /* @__PURE__ */ u(no, [["render", io]]), co = a({
  name: "CiMemoPad",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function po(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Memo_Pad",
        "data-name": "Memo Pad"
      }, [
        s("g", null, [
          s("path", { d: "M17.44,2.065H6.56a2.507,2.507,0,0,0-2.5,2.5v14.87a2.507,2.507,0,0,0,2.5,2.5H17.44a2.5,2.5,0,0,0,2.5-2.5V4.565A2.5,2.5,0,0,0,17.44,2.065Zm1.5,17.37a1.5,1.5,0,0,1-1.5,1.5H6.56a1.5,1.5,0,0,1-1.5-1.5V6.505H18.94Z" }),
          s("g", null, [
            s("path", { d: "M7.549,9.506h0a.5.5,0,0,1,0-1h8.909a.5.5,0,0,1,0,1Z" }),
            s("path", { d: "M7.549,12.506h0a.5.5,0,0,1,0-1h6.5a.5.5,0,0,1,0,1Z" }),
            s("path", { d: "M7.566,18.374h0a.5.5,0,1,1,0-1h3.251a.5.5,0,0,1,0,1Z" })
          ])
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Nn = /* @__PURE__ */ u(co, [["render", po]]), uo = a({
  name: "CiMicrochip",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function fo(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Microchip" }, [
        s("g", null, [
          s("path", { d: "M13,14.5H11A1.5,1.5,0,0,1,9.5,13V11A1.5,1.5,0,0,1,11,9.5h2A1.5,1.5,0,0,1,14.5,11v2A1.5,1.5,0,0,1,13,14.5Zm-2-4a.5.5,0,0,0-.5.5v2a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5V11a.5.5,0,0,0-.5-.5Z" }),
          s("path", { d: "M20.435,14.5h-1.93v-5h1.93a.5.5,0,0,0,0-1h-1.93V8a2.507,2.507,0,0,0-2.5-2.5h-.5V3.565a.508.508,0,0,0-.5-.5.5.5,0,0,0-.5.5V5.5h-5V3.565a.508.508,0,0,0-.5-.5.5.5,0,0,0-.5.5V5.5h-.5A2.5,2.5,0,0,0,5.505,8v.5H3.565a.5.5,0,1,0,0,1h1.94v5H3.565a.5.5,0,1,0,0,1h1.94V16a2.5,2.5,0,0,0,2.5,2.5h.5v1.94a.5.5,0,0,0,1,0V18.5h5v1.94a.5.5,0,0,0,1,0V18.5h.5a2.507,2.507,0,0,0,2.5-2.5v-.5h1.93a.5.5,0,0,0,0-1ZM17.505,16a1.5,1.5,0,0,1-1.5,1.5h-8a1.5,1.5,0,0,1-1.5-1.5V8a1.5,1.5,0,0,1,1.5-1.5h8a1.511,1.511,0,0,1,1.5,1.5Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Qn = /* @__PURE__ */ u(uo, [["render", fo]]), yo = a({
  name: "CiMicrophoneOff",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Co(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Microphone_Off",
        "data-name": "Microphone Off"
      }, [
        s("g", null, [
          s("path", { d: "M16.5,7.046v4.72a.5.5,0,0,1-1,0V9.946H14a.5.5,0,0,1,0-1h1.5v-2H13.57a.5.5,0,0,1,0-1h1.87a3.23,3.23,0,0,0-.2-.72,3.533,3.533,0,0,0-6.16-.59c-.36.53-1.23.03-.87-.5a4.509,4.509,0,0,1,7.71.21A5.255,5.255,0,0,1,16.5,7.046Z" }),
          s("path", { d: "M20.14,19.436q-2.625-2.64-5.27-5.28Q10.685,9.986,6.51,5.8c-.65-.64-1.3-1.29-1.94-1.94a.5.5,0,0,0-.71.71Q5.69,6.381,7.5,8.206v3.92a4.591,4.591,0,0,0,3.59,4.61,4.629,4.629,0,0,0,3.9-1.04c.24.24.48.47.71.71a5.252,5.252,0,0,1-6.62.67,5.2,5.2,0,0,1-2.05-2.76,7.608,7.608,0,0,1-.24-2.33v-2.2a.5.5,0,0,0-1,0,15.463,15.463,0,0,0,.34,4.99,6.276,6.276,0,0,0,5.37,4.17v1.99H8a.5.5,0,0,0,0,1h8a.5.5,0,0,0,0-1H12.5v-2a6.118,6.118,0,0,0,3.91-1.82l1.08,1.08c.65.65,1.3,1.3,1.95,1.94A.5.5,0,0,0,20.14,19.436Zm-11.2-5.42a3.991,3.991,0,0,1-.44-2.03V9.206l5.77,5.77A3.521,3.521,0,0,1,8.94,14.016Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Kn = /* @__PURE__ */ u(yo, [["render", Co]]), mo = a({
  name: "CiMicrophoneOn",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function go(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Microphone_On",
        "data-name": "Microphone On"
      }, [
        s("g", null, [
          s("path", { d: "M11.989,2.065a4.507,4.507,0,0,0-4.5,4.5v5.76a4.5,4.5,0,0,0,9,0V6.565A4.507,4.507,0,0,0,11.989,2.065Zm0,13.76a3.5,3.5,0,0,1-3.5-3.5V6.565a3.5,3.5,0,0,1,6.94-.62h-1.87a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h1.93v2h-1.93a.5.5,0,0,0-.5.5.508.508,0,0,0,.5.5h1.93v2h-1.94a.508.508,0,0,0-.5.5.515.515,0,0,0,.5.5h1.88A3.492,3.492,0,0,1,11.989,15.825Z" }),
          s("path", { d: "M12.489,18.925v2.01h3.5a.5.5,0,0,1,0,1h-8a.5.5,0,0,1,0-1h3.5v-1.99a6.055,6.055,0,0,1-2.74-.88,6.291,6.291,0,0,1-2.97-5.14c-.03-1.04,0-2.09,0-3.13a.5.5,0,0,1,1,0c0,1.04-.03,2.09,0,3.13A5.212,5.212,0,0,0,17.2,12.7c.01-.96,0-1.93,0-2.9a.5.5,0,0,1,1,0,26.322,26.322,0,0,1-.08,3.97A6.235,6.235,0,0,1,12.489,18.925Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Jn = /* @__PURE__ */ u(mo, [["render", go]]), Bo = a({
  name: "CiMinimize1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ho(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Minimize_1",
        "data-name": "Minimize 1"
      }, [
        s("g", null, [
          s("path", { d: "M11,17.78a.5.5,0,0,1-1,0V14.71L3.92,20.79a.5.5,0,0,1-.71-.71c.29-.29.58-.57.87-.86C5.82,17.48,7.55,15.74,9.3,14H6.22a.5.5,0,0,1,0-1H10.5a.429.429,0,0,1,.34.14c.01.01.02.01.02.02a.384.384,0,0,1,.13.26Z" }),
          s("path", { d: "M14.7,10h3.08a.5.5,0,0,1,0,1H13.5a.429.429,0,0,1-.34-.14c-.01-.01-.02-.01-.02-.02a.384.384,0,0,1-.13-.26L13,6.22a.5.5,0,0,1,1,0V9.29l.01-.01,6.07-6.07a.5.5,0,0,1,.71.71Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Yn = /* @__PURE__ */ u(Bo, [["render", ho]]), vo = a({
  name: "CiMinimize2",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function $o(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Minimize_2",
        "data-name": "Minimize 2"
      }, [
        s("g", null, [
          s("path", { d: "M3.563,11.016H9.146A2.057,2.057,0,0,0,10.3,10.8a1.6,1.6,0,0,0,.717-1.436V3.566a.5.5,0,0,0-1,0V8.974a2.481,2.481,0,0,1-.022.689c-.115.373-.468.353-.777.353H3.563a.5.5,0,0,0,0,1Z" }),
          s("path", { d: "M11.013,20.438V14.855a2.065,2.065,0,0,0-.22-1.15,1.6,1.6,0,0,0-1.437-.717H3.563a.5.5,0,0,0,0,1H8.972a2.482,2.482,0,0,1,.689.022c.373.115.352.469.352.777v5.651a.5.5,0,0,0,1,0Z" }),
          s("path", { d: "M20.437,12.984H14.854a2.057,2.057,0,0,0-1.15.221,1.6,1.6,0,0,0-.717,1.436v5.793a.5.5,0,0,0,1,0V15.026a2.481,2.481,0,0,1,.022-.689c.115-.373.468-.353.777-.353h5.651a.5.5,0,0,0,0-1Z" }),
          s("path", { d: "M12.987,3.562V9.145a2.065,2.065,0,0,0,.22,1.15,1.6,1.6,0,0,0,1.437.717h5.793a.5.5,0,0,0,0-1H15.028a2.482,2.482,0,0,1-.689-.022c-.373-.115-.352-.469-.352-.777V3.562a.5.5,0,0,0-1,0Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Xn = /* @__PURE__ */ u(vo, [["render", $o]]), So = a({
  name: "CiMobile1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ko(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Mobile_1",
        "data-name": "Mobile 1"
      }, [
        s("g", null, [
          s("path", { d: "M10,18.933h4a.5.5,0,0,0,0-1H10a.5.5,0,0,0,0,1Z" }),
          s("path", { d: "M16.727,21.937H7.273a2.384,2.384,0,0,1-2.239-2.5V4.563a2.384,2.384,0,0,1,2.239-2.5h9.454a2.384,2.384,0,0,1,2.239,2.5V19.437A2.384,2.384,0,0,1,16.727,21.937ZM7.273,3.063a1.39,1.39,0,0,0-1.239,1.5V19.437a1.39,1.39,0,0,0,1.239,1.5h9.454a1.39,1.39,0,0,0,1.239-1.5V4.563a1.39,1.39,0,0,0-1.239-1.5Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const xn = /* @__PURE__ */ u(So, [["render", ko]]), wo = a({
  name: "CiMobile2",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function zo(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Mobile_2",
        "data-name": "Mobile 2"
      }, [
        s("g", null, [
          s("circle", {
            cx: "12",
            cy: "17.937",
            r: "1"
          }),
          s("path", { d: "M16.727,21.937H7.273a2.384,2.384,0,0,1-2.239-2.5V4.563a2.384,2.384,0,0,1,2.239-2.5h9.454a2.384,2.384,0,0,1,2.239,2.5V19.437A2.384,2.384,0,0,1,16.727,21.937ZM7.273,3.063a1.39,1.39,0,0,0-1.239,1.5V19.437a1.39,1.39,0,0,0,1.239,1.5h9.454a1.39,1.39,0,0,0,1.239-1.5V4.563a1.39,1.39,0,0,0-1.239-1.5Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const e3 = /* @__PURE__ */ u(wo, [["render", zo]]), Zo = a({
  name: "CiMobile3",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Mo(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Mobile_3",
        "data-name": "Mobile 3"
      }, [
        s("g", null, [
          s("path", { d: "M16.73,2.065H7.27a2.386,2.386,0,0,0-2.24,2.5v14.87a2.386,2.386,0,0,0,2.24,2.5h9.46a2.386,2.386,0,0,0,2.24-2.5V4.565A2.386,2.386,0,0,0,16.73,2.065Zm1.24,17.37a1.391,1.391,0,0,1-1.24,1.5H7.27a1.391,1.391,0,0,1-1.24-1.5V4.565a1.391,1.391,0,0,1,1.24-1.5H8.8v.51a1,1,0,0,0,1,1h4.4a1,1,0,0,0,1-1v-.51h1.53a1.391,1.391,0,0,1,1.24,1.5Z" }),
          s("path", { d: "M10,18.934h4a.5.5,0,0,0,0-1H10a.5.5,0,0,0,0,1Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const s3 = /* @__PURE__ */ u(Zo, [["render", Mo]]), Ao = a({
  name: "CiMobile4",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ho(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Mobile_4",
        "data-name": "Mobile 4"
      }, [
        s("g", null, [
          s("circle", {
            cx: "12.003",
            cy: "18.937",
            r: "1"
          }),
          s("path", { d: "M16.725,2.065H7.275a2.386,2.386,0,0,0-2.24,2.5v14.87a2.386,2.386,0,0,0,2.24,2.5h9.45a2.379,2.379,0,0,0,2.24-2.5V4.565A2.379,2.379,0,0,0,16.725,2.065Zm1.24,17.37a1.384,1.384,0,0,1-1.24,1.5H7.275a1.391,1.391,0,0,1-1.24-1.5v-2.5h11.93Zm0-3.5H6.035V4.565a1.391,1.391,0,0,1,1.24-1.5h9.45a1.384,1.384,0,0,1,1.24,1.5Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const o3 = /* @__PURE__ */ u(Ao, [["render", Ho]]), Vo = a({
  name: "CiMoneyBill",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Io(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Money_Bill",
        "data-name": "Money Bill"
      }, [
        s("g", null, [
          s("path", { d: "M19.44,5.78H4.56a2.507,2.507,0,0,0-2.5,2.5v7.44a2.514,2.514,0,0,0,2.5,2.5H19.44a2.507,2.507,0,0,0,2.5-2.5V8.28A2.5,2.5,0,0,0,19.44,5.78ZM3.06,8.28a1.5,1.5,0,0,1,1.5-1.5H6.04A3.521,3.521,0,0,1,3.06,9.76Zm1.5,8.94a1.511,1.511,0,0,1-1.5-1.5V14.24a3.521,3.521,0,0,1,2.98,2.98Zm16.38-1.5a1.5,1.5,0,0,1-1.5,1.5H17.96a3.521,3.521,0,0,1,2.98-2.98Zm0-2.49a4.528,4.528,0,0,0-3.99,3.99H7.05a4.528,4.528,0,0,0-3.99-3.99V10.77A4.528,4.528,0,0,0,7.05,6.78h9.9a4.528,4.528,0,0,0,3.99,3.99Zm0-3.47a3.521,3.521,0,0,1-2.98-2.98h1.48a1.5,1.5,0,0,1,1.5,1.5Z" }),
          s("circle", {
            cx: "12.002",
            cy: "11.998",
            r: "2"
          })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const t3 = /* @__PURE__ */ u(Vo, [["render", Io]]), _o = a({
  name: "CiMoneyCheck1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function bo(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Money_Check_1",
        "data-name": "Money Check 1"
      }, [
        s("g", null, [
          s("path", { d: "M19.437,18.218H4.563a2.5,2.5,0,0,1-2.5-2.5V8.282a2.5,2.5,0,0,1,2.5-2.5H19.437a2.5,2.5,0,0,1,2.5,2.5v7.436A2.5,2.5,0,0,1,19.437,18.218ZM4.563,6.782a1.5,1.5,0,0,0-1.5,1.5v7.436a1.5,1.5,0,0,0,1.5,1.5H19.437a1.5,1.5,0,0,0,1.5-1.5V8.282a1.5,1.5,0,0,0-1.5-1.5Z" }),
          s("path", { d: "M12,12.786H5.064a.5.5,0,0,1,0-1H12a.5.5,0,0,1,0,1Z" }),
          s("path", { d: "M14,15.714H5.064a.5.5,0,1,1,0-1H14a.5.5,0,0,1,0,1Z" }),
          s("rect", {
            x: "15.436",
            y: "8.283",
            width: "4",
            height: "2",
            rx: "0.5"
          })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const a3 = /* @__PURE__ */ u(_o, [["render", bo]]), Oo = a({
  name: "CiMonitor",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Lo(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Monitor" }, [
        s("path", { d: "M18.435,3.06H5.565a2.5,2.5,0,0,0-2.5,2.5v8.88a2.507,2.507,0,0,0,2.5,2.5h2.91l-.37,3H7a.5.5,0,0,0,0,1h10.01a.5.5,0,0,0,0-1H15.9l-.37-3h2.91a2.507,2.507,0,0,0,2.5-2.5V5.56A2.5,2.5,0,0,0,18.435,3.06ZM14.9,19.94H9.115l.37-3h5.03Zm5.04-5.5a1.5,1.5,0,0,1-1.5,1.5H5.565a1.5,1.5,0,0,1-1.5-1.5V5.56a1.5,1.5,0,0,1,1.5-1.5h12.87a1.5,1.5,0,0,1,1.5,1.5Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const l3 = /* @__PURE__ */ u(Oo, [["render", Lo]]), jo = a({
  name: "CiMountain1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Po(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Mountain_1",
        "data-name": "Mountain 1"
      }, [
        s("path", { d: "M20.857,19.525l-6.57-14.96a2.5,2.5,0,0,0-4.58-.01l-6.56,14.96a1,1,0,0,0,.07.96.985.985,0,0,0,.84.46h15.89a1,1,0,0,0,.91-1.41ZM10.627,4.965a1.5,1.5,0,0,1,2.75,0l2.43,5.53-1.45,1.45a.5.5,0,0,1-.71,0l-2.04-2.03a1.5,1.5,0,0,0-1.06-.44h-1.9Zm-6.57,14.96,4.15-9.45h2.34a.491.491,0,0,1,.36.15l2.03,2.03A1.508,1.508,0,0,0,14,13.1a1.491,1.491,0,0,0,1.06-.44l1.18-1.17,3.71,8.45Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const r3 = /* @__PURE__ */ u(jo, [["render", Po]]), Do = a({
  name: "CiMug1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Fo(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Mug_1",
        "data-name": "Mug 1"
      }, [
        s("path", { d: "M18.115,5.91V4.97a1.2,1.2,0,0,0-1.2-1.2H4.265a1.2,1.2,0,0,0-1.2,1.2v9.14a11.321,11.321,0,0,0,.8,4.17A3.3,3.3,0,0,0,7,20.23h7.19a3.312,3.312,0,0,0,3.14-1.95,10.989,10.989,0,0,0,.74-3.13l1.04-.52a3.319,3.319,0,0,0,1.83-2.97V9.19A3.326,3.326,0,0,0,18.115,5.91Zm-1.73,12.01a2.3,2.3,0,0,1-2.2,1.31H7a2.312,2.312,0,0,1-2.2-1.31,10.238,10.238,0,0,1-.73-3.81V4.97a.2.2,0,0,1,.2-.2h12.65a.2.2,0,0,1,.2.2v9.14A10.238,10.238,0,0,1,16.385,17.92Zm3.55-6.26a2.287,2.287,0,0,1-1.28,2.07l-.54.27V6.93a2.316,2.316,0,0,1,1.82,2.26Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const n3 = /* @__PURE__ */ u(Do, [["render", Fo]]), Ro = a({
  name: "CiMusicNote1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function To(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Music_Note_1",
        "data-name": "Music Note 1"
      }, [
        s("path", { d: "M20.05,3.657a2.487,2.487,0,0,0-2.03-.56l-7.88,1.33a2.483,2.483,0,0,0-2.08,2.46v8.82a3,3,0,1,0,1,2.23V9.387l10.88-1.83v6.22a2.936,2.936,0,0,0-2-.77,3,3,0,1,0,3,3V5.567A2.513,2.513,0,0,0,20.05,3.657ZM6.06,19.937a2,2,0,1,1,2-2A1.993,1.993,0,0,1,6.06,19.937Zm11.88-1.93a2,2,0,1,1,2-2A2,2,0,0,1,17.94,18.007Zm2-11.46L9.06,8.377V6.887a1.483,1.483,0,0,1,1.25-1.47l7.88-1.33a1.493,1.493,0,0,1,1.75,1.48Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const i3 = /* @__PURE__ */ u(Ro, [["render", To]]), qo = a({
  name: "CiNoWaitingSign",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Uo(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "No_Watting_Sign",
        "data-name": "No Watting Sign"
      }, [
        s("path", { d: "M12,2.07a9.93,9.93,0,1,0,7.03,16.95.374.374,0,0,0,.06-.07A9.837,9.837,0,0,0,21.935,12,9.944,9.944,0,0,0,12,2.07Zm0,18.86A8.945,8.945,0,0,1,3.065,12a8.84,8.84,0,0,1,2.28-5.95l12.61,12.61A8.925,8.925,0,0,1,12,20.93Zm6.67-2.98L6.045,5.34a8.934,8.934,0,0,1,12.62,12.61Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const c3 = /* @__PURE__ */ u(qo, [["render", Uo]]), Go = a({
  name: "CiPalette",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Wo(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Palette" }, [
        s("g", null, [
          s("path", { d: "M19.31,20.93a1.62,1.62,0,0,0,1.62-1.62V15.93a1.62,1.62,0,0,0-1.62-1.62H14.37l4.66-4.66a1.642,1.642,0,0,0,0-2.3L16.64,4.96a1.636,1.636,0,0,0-2.3,0L9.69,9.62V4.56a1.5,1.5,0,0,0-1.5-1.5H4.57a1.5,1.5,0,0,0-1.5,1.5V18.44a2.507,2.507,0,0,0,2.5,2.5ZM9.69,11.04l5.36-5.37a.628.628,0,0,1,.88,0l2.39,2.39a.628.628,0,0,1,0,.88L9.69,17.57ZM4.07,4.56a.5.5,0,0,1,.5-.5H8.19a.5.5,0,0,1,.5.5V8.48H4.07Zm0,4.92H8.69v4.43H4.07ZM7.29,19.93l-1.72.01a1.5,1.5,0,0,1-1.5-1.5V14.91H8.69v3.53a1.5,1.5,0,0,1-1.4,1.49m12.64-.62a.623.623,0,0,1-.62.62H9.19a2.381,2.381,0,0,0,.42-.86l3.76-3.76h5.94a.623.623,0,0,1,.62.62Z" }),
          s("circle", {
            cx: "6.382",
            cy: "17.419",
            r: "0.844"
          })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const p3 = /* @__PURE__ */ u(Go, [["render", Wo]]), Eo = a({
  name: "CiPaperPlane",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function No(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Paper_Plane",
        "data-name": "Paper Plane"
      }, [
        s("path", { d: "M21.061,11.077,3.741,4.157a.994.994,0,0,0-1.17.32,1,1,0,0,0-.01,1.22l4.49,6a.525.525,0,0,1-.01.62L2.511,18.3a1.02,1.02,0,0,0,0,1.22,1,1,0,0,0,.8.4,1.021,1.021,0,0,0,.38-.07l17.36-6.9a1.006,1.006,0,0,0,.01-1.87ZM3.371,5.087l16.06,6.42H8.061a1.329,1.329,0,0,0-.21-.41Zm-.06,13.82,4.53-5.98a1.212,1.212,0,0,0,.22-.42h11.38Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const d3 = /* @__PURE__ */ u(Eo, [["render", No]]), Qo = a({
  name: "CiParking1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ko(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Parking_1",
        "data-name": "Parking 1"
      }, [
        s("g", null, [
          s("path", { d: "M12,21.933A9.933,9.933,0,1,1,21.933,12,9.944,9.944,0,0,1,12,21.933ZM12,3.067A8.933,8.933,0,1,0,20.933,12,8.943,8.943,0,0,0,12,3.067Z" }),
          s("path", { d: "M12.569,8.5h-1.75a.749.749,0,0,0-.75.75v5.74a.5.5,0,0,0,.5.5.5.5,0,0,0,.5-.5V13.5h1.5a2.5,2.5,0,0,0,0-5Zm0,4h-1.5v-3h1.5a1.5,1.5,0,0,1,0,3Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const u3 = /* @__PURE__ */ u(Qo, [["render", Ko]]), Jo = a({
  name: "CiPassport1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Yo(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Passport_1",
        "data-name": "Passport 1"
      }, [
        s("g", null, [
          s("path", { d: "M16.5,21.936h-9a2.5,2.5,0,0,1-2.5-2.5V4.564a2.5,2.5,0,0,1,2.5-2.5h9a2.5,2.5,0,0,1,2.5,2.5V19.436A2.5,2.5,0,0,1,16.5,21.936ZM7.5,3.064A1.5,1.5,0,0,0,6,4.564V19.436a1.5,1.5,0,0,0,1.5,1.5h9a1.5,1.5,0,0,0,1.5-1.5V4.564a1.5,1.5,0,0,0-1.5-1.5Z" }),
          s("path", { d: "M12,12.563a3.5,3.5,0,1,1,3.5-3.5A3.5,3.5,0,0,1,12,12.563Zm0-6a2.5,2.5,0,1,0,2.5,2.5A2.5,2.5,0,0,0,12,6.563Z" }),
          s("path", { d: "M15,18.438H9a.5.5,0,0,1,0-1h6a.5.5,0,1,1,0,1Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const f3 = /* @__PURE__ */ u(Jo, [["render", Yo]]), Xo = a({
  name: "CiPause1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function xo(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Pause_1",
        "data-name": "Pause 1"
      }, [
        s("g", null, [
          s("path", { d: "M8.25,21.937H6.564a2.5,2.5,0,0,1-2.5-2.5V4.563a2.5,2.5,0,0,1,2.5-2.5H8.25a2.5,2.5,0,0,1,2.5,2.5V19.437A2.5,2.5,0,0,1,8.25,21.937ZM6.564,3.063a1.5,1.5,0,0,0-1.5,1.5V19.437a1.5,1.5,0,0,0,1.5,1.5H8.25a1.5,1.5,0,0,0,1.5-1.5V4.563a1.5,1.5,0,0,0-1.5-1.5Z" }),
          s("path", { d: "M17.436,21.937H15.75a2.5,2.5,0,0,1-2.5-2.5V4.563a2.5,2.5,0,0,1,2.5-2.5h1.686a2.5,2.5,0,0,1,2.5,2.5V19.437A2.5,2.5,0,0,1,17.436,21.937ZM15.75,3.063a1.5,1.5,0,0,0-1.5,1.5V19.437a1.5,1.5,0,0,0,1.5,1.5h1.686a1.5,1.5,0,0,0,1.5-1.5V4.563a1.5,1.5,0,0,0-1.5-1.5Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const y3 = /* @__PURE__ */ u(Xo, [["render", xo]]), et = a({
  name: "CiPen",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function st(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Pen" }, [
        s("path", { d: "M20.235,11.284a2.3,2.3,0,0,0-3.01-.149L15.444,5.744a2.484,2.484,0,0,0-2.1-1.7l-8.581-.93A1.5,1.5,0,0,0,3.115,4.765l.93,8.579a2.479,2.479,0,0,0,1.7,2.1l5.39,1.77a2.258,2.258,0,0,0-.51,1.43,2.257,2.257,0,0,0,2.25,2.25,2.263,2.263,0,0,0,1.591-.661l5.77-5.769a2.249,2.249,0,0,0,0-3.181Zm-14.18,3.21a1.5,1.5,0,0,1-1.02-1.26l-.9-8.39,4.01,4.01a1.188,1.188,0,0,0,.281,1.221,1.167,1.167,0,1,0,1.649-1.651,1.143,1.143,0,0,0-1.209-.269l-4.02-4.02,8.39.9a1.476,1.476,0,0,1,1.259,1.02l1.931,5.86-4.51,4.51Zm11.709-2.51a1.25,1.25,0,0,1,2.13.891,1.237,1.237,0,0,1-.369.88l-5.771,5.77a1.277,1.277,0,0,1-1.769,0,1.253,1.253,0,0,1,0-1.76Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const C3 = /* @__PURE__ */ u(et, [["render", st]]), ot = a({
  name: "CiPenpot",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function tt(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("path", { d: "M4.415,7.22a.755.755,0,0,0-.35.64v9.67a1.536,1.536,0,0,0,.88,1.38l5.96,2.82a2.618,2.618,0,0,0,2.19,0l5.96-2.82a1.536,1.536,0,0,0,.88-1.38V7.86a.742.742,0,0,0-.36-.64l-2.23-1.15v-1a.98.98,0,0,0-.15-.52l-1.33-2.16a.749.749,0,0,0-1.28,0L13.3,4.5l-.66-1.07A.755.755,0,0,0,12,3.08a.791.791,0,0,0-.64.36l-.65,1.06L9.4,2.39a.749.749,0,0,0-1.28,0L6.805,4.55a.98.98,0,0,0-.15.52v1Zm12.93-.01.7.35-.7.33Zm-2.44-3.43h.64l.5.81h-1.64Zm1.44,1.81V8.36l-.61.29V5.59Zm-2.23,0h.62V9.12l-.62.3ZM8.445,3.78h.64l.5.81H7.945Zm1.44,1.81V9.41l-.61-.29V5.59Zm-2.23,0h.62V8.65l-.62-.29Zm-1,1.62v.68l-.7-.33ZM5.365,18a.52.52,0,0,1-.3-.47V8.24l6.43,3.04v9.59Zm6.13-7.83-.61-.29V6.64h.61Zm-.32-4.53.51-.82h.62l.51.82Zm1.94,1V9.89l-.62.29V6.64ZM12.5,20.88V11.29l6.44-3.05v9.29a.512.512,0,0,1-.31.47Z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const m3 = /* @__PURE__ */ u(ot, [["render", tt]]), at = a({
  name: "CiPercent",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function lt(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Percent" }, [
        s("g", null, [
          s("path", { d: "M12,21.934A9.934,9.934,0,1,1,21.933,12,9.945,9.945,0,0,1,12,21.934ZM12,3.066A8.934,8.934,0,1,0,20.933,12,8.944,8.944,0,0,0,12,3.066Z" }),
          s("path", { d: "M9,10.258a1.5,1.5,0,1,1,1.061-.439h0A1.5,1.5,0,0,1,9,10.258Zm0-2a.5.5,0,1,0,.353.146A.5.5,0,0,0,9,8.259Z" }),
          s("path", { d: "M7.758,16.743A.5.5,0,0,1,7.4,15.89L15.889,7.4a.5.5,0,0,1,.707.707L8.111,16.6A.5.5,0,0,1,7.758,16.743Z" }),
          s("path", { d: "M15,16.742a1.5,1.5,0,1,1,1.061-.438A1.493,1.493,0,0,1,15,16.742Zm0-2a.5.5,0,0,0-.354.147h0a.5.5,0,0,0-.146.352.5.5,0,1,0,1,0,.5.5,0,0,0-.5-.5Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const g3 = /* @__PURE__ */ u(at, [["render", lt]]), rt = a({
  name: "CiPhone",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function nt(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Phone" }, [
        s("path", { d: "M14.436,20.938A11.384,11.384,0,0,1,4.572,3.9a1.668,1.668,0,0,1,1.241-.822,1.716,1.716,0,0,1,1.454.492l3.139,3.14a1.715,1.715,0,0,1,0,2.427l-.295.3a1.937,1.937,0,0,0,0,2.736l1.72,1.721a1.983,1.983,0,0,0,2.736,0l.29-.29a1.719,1.719,0,0,1,2.428,0l3.139,3.139a1.724,1.724,0,0,1,.492,1.455,1.669,1.669,0,0,1-.822,1.239A11.327,11.327,0,0,1,14.436,20.938ZM6.042,4.063a.793.793,0,0,0-.1.006.673.673,0,0,0-.5.331A10.375,10.375,0,0,0,19.594,18.567a.674.674,0,0,0,.331-.5.734.734,0,0,0-.208-.618l-3.139-3.139a.717.717,0,0,0-1.014,0l-.29.29a3.006,3.006,0,0,1-4.15,0L9.4,12.876a2.939,2.939,0,0,1,0-4.149l.3-.3a.717.717,0,0,0,0-1.014L6.56,4.277A.729.729,0,0,0,6.042,4.063Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const B3 = /* @__PURE__ */ u(rt, [["render", nt]]), it = a({
  name: "CiPickerEmpty",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ct(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Picker_Empty",
        "data-name": "Picker Empty"
      }, [
        s("path", { d: "M20.94,5.876a2.805,2.805,0,0,0-.84-2.01,2.856,2.856,0,0,0-3.97,0l-2.21,2.21-.75-.75a.8.8,0,0,0-1.1,0,.785.785,0,0,0,0,1.1l.75.75-8.77,8.76a3.248,3.248,0,0,0-.92,2.13l-.07,1.52a1.311,1.311,0,0,0,.38.97,1.332,1.332,0,0,0,.91.38h.06l1.52-.07a3.248,3.248,0,0,0,2.13-.92l8.76-8.77.75.75a.8.8,0,0,0,1.1,0,.785.785,0,0,0,0-1.1l-.75-.75L20.1,7.9A2.828,2.828,0,0,0,20.94,5.876ZM7.35,19.236a2.22,2.22,0,0,1-1.46.63l-1.53.07a.243.243,0,0,1-.21-.09.3.3,0,0,1-.09-.21l.07-1.53a2.22,2.22,0,0,1,.63-1.46l8.77-8.76,2.59,2.59ZM19.4,7.2l-2.18,2.18-2.59-2.59,2.21-2.22a1.861,1.861,0,0,1,2.56,0,1.846,1.846,0,0,1,.54,1.31A1.869,1.869,0,0,1,19.4,7.2Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const h3 = /* @__PURE__ */ u(it, [["render", ct]]), pt = a({
  name: "CiPickerHalf",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function dt(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Picker_Half",
        "data-name": "Picker Half"
      }, [
        s("path", { d: "M20.936,5.889a2.825,2.825,0,0,0-4.81-2.02l-2.21,2.22-.75-.75a.771.771,0,0,0-.55-.22.8.8,0,0,0-.55.22.785.785,0,0,0,0,1.1l.75.75-8.76,8.76a3.154,3.154,0,0,0-.92,2.13l-.07,1.52a1.316,1.316,0,0,0,1.28,1.35h.06l1.52-.07a3.21,3.21,0,0,0,2.13-.93l8.76-8.76.75.75a.8.8,0,0,0,1.1,0,.785.785,0,0,0,0-1.1l-.75-.75,2.18-2.18A2.845,2.845,0,0,0,20.936,5.889Zm-8.56,8.33H7.2l6.33-6.32,2.59,2.59ZM19.4,7.2l-2.18,2.19L14.626,6.8l2.21-2.22a1.823,1.823,0,0,1,2.56,0,1.859,1.859,0,0,1,0,2.62Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const v3 = /* @__PURE__ */ u(pt, [["render", dt]]), ut = a({
  name: "CiPill",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ft(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Pill" }, [
        s("path", { d: "M19.31,4.691a5.5,5.5,0,0,0-7.78,0l-6.84,6.84a5.5,5.5,0,0,0,3.89,9.39,5.524,5.524,0,0,0,3.89-1.61l6.84-6.84a5.5,5.5,0,0,0,0-7.78Zm-.71,7.07-3.42,3.42L8.82,8.821,12.24,5.4a4.5,4.5,0,0,1,7.68,3.17A4.429,4.429,0,0,1,18.6,11.761Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const $3 = /* @__PURE__ */ u(ut, [["render", ft]]), yt = a({
  name: "CiPizza",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ct(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Pizza" }, [
        s("g", null, [
          s("path", { d: "M20.807,13.437l-.01-.04a19.05,19.05,0,0,0-10.23-10.21,1.574,1.574,0,0,0-2.08.93l-5.32,14.69a1.58,1.58,0,0,0,1.48,2.12,1.654,1.654,0,0,0,.54-.09l14.7-5.32a1.585,1.585,0,0,0,.91-.85A1.547,1.547,0,0,0,20.807,13.437Zm-6.98,2.98a1,1,0,0,0,.2.16L4.847,19.9a.582.582,0,0,1-.6-.14.556.556,0,0,1-.14-.61l2.39-6.6a1,1,0,0,0,.16.2,1.81,1.81,0,0,0,2.56-2.56,1.782,1.782,0,0,0-1.7-.47l1.09-2.98a17.346,17.346,0,0,1,6.82,5.57,2.447,2.447,0,0,0-1.6.71A2.4,2.4,0,0,0,13.827,16.417Zm6.05-2.15a.592.592,0,0,1-.33.31l-1.32.47c-.11-.23-.22-.45-.33-.67-.12-.24-.25-.48-.38-.71-.31-.55-.65-1.08-1-1.58a18.655,18.655,0,0,0-7.57-6.3l.48-1.33a.561.561,0,0,1,.31-.33.456.456,0,0,1,.23-.05.793.793,0,0,1,.25.05,18.013,18.013,0,0,1,9.67,9.68v.02A.561.561,0,0,1,19.877,14.267Z" }),
          s("circle", {
            cx: "7.835",
            cy: "16.489",
            r: "1.075"
          })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const S3 = /* @__PURE__ */ u(yt, [["render", Ct]]), mt = a({
  name: "CiPlane",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function gt(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Plane" }, [
        s("path", { d: "M11.9,20.936H10.85a.911.911,0,0,1-.9-1.023l.693-5.548H7.3l-.513.9a1.329,1.329,0,0,1-.992.657L5.1,16a.9.9,0,0,1-.8-.31.912.912,0,0,1-.185-.839l.774-2.769a.318.318,0,0,0,0-.173L4.114,9.145A.909.909,0,0,1,5.1,8l.695.083a1.331,1.331,0,0,1,.992.656l.513.9h3.34L9.946,4.088a.911.911,0,0,1,.9-1.024H11.9a1.327,1.327,0,0,1,1.236.857l2.144,5.714h1.046a8.5,8.5,0,0,1,1.758.184,2.166,2.166,0,0,1,1.429.9,2.209,2.209,0,0,1,.365,1.7A2.288,2.288,0,0,1,17.95,14.2l-.16.024a10.926,10.926,0,0,1-1.721.137h-.787l-2.144,5.714A1.327,1.327,0,0,1,11.9,20.936Zm-.951-1H11.9a.323.323,0,0,0,.3-.209l2.214-5.905a.71.71,0,0,1,.661-.457h.991a9.946,9.946,0,0,0,1.567-.125l.16-.025a1.3,1.3,0,0,0,1.1-.979,1.227,1.227,0,0,0-.2-.937,1.2,1.2,0,0,0-.793-.5,7.647,7.647,0,0,0-1.577-.167h-1.25a.711.711,0,0,1-.661-.456L12.2,4.273a.323.323,0,0,0-.3-.209h-.951l.722,5.778a.7.7,0,0,1-.7.793H7.127a.7.7,0,0,1-.614-.359l-.6-1.045a.32.32,0,0,0-.241-.16L5.113,9l.738,2.64a1.34,1.34,0,0,1,0,.711L5.113,15l.562-.067a.32.32,0,0,0,.241-.16l.6-1.049a.7.7,0,0,1,.612-.355h3.846a.7.7,0,0,1,.7.794ZM7.386,14.212l0,.005Zm3.295-.179v0Zm0-4.067v0Zm-3.3-.186,0,0Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const k3 = /* @__PURE__ */ u(mt, [["render", gt]]), Bt = a({
  name: "CiPlay1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ht(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Play_1",
        "data-name": "Play 1"
      }, [
        s("path", { d: "M6.562,21.94a2.5,2.5,0,0,1-2.5-2.5V4.56A2.5,2.5,0,0,1,7.978,2.5L18.855,9.939a2.5,2.5,0,0,1,0,4.12L7.977,21.5A2.5,2.5,0,0,1,6.562,21.94Zm0-18.884a1.494,1.494,0,0,0-.7.177,1.477,1.477,0,0,0-.8,1.327V19.439a1.5,1.5,0,0,0,2.35,1.235l10.877-7.44a1.5,1.5,0,0,0,0-2.471L7.413,3.326A1.491,1.491,0,0,0,6.564,3.056Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const w3 = /* @__PURE__ */ u(Bt, [["render", ht]]), vt = a({
  name: "CiPlug1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function $t(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Plug_1",
        "data-name": "Plug 1"
      }, [
        s("path", { d: "M17.305,5.755H15.5V2.545a.5.5,0,0,0-1,0v3.21h-5V2.545a.5.5,0,0,0-1,0v3.21H6.7a1.566,1.566,0,0,0-1.57,1.57v4.28a7.046,7.046,0,0,0,6.37,7.11v2.72a.5.5,0,0,0,1,0v-2.7a6.874,6.874,0,0,0,6.38-6.86V7.325A1.573,1.573,0,0,0,17.305,5.755Zm.57,6.12a5.875,5.875,0,0,1-6.06,5.87,6.054,6.054,0,0,1-5.69-6.14V7.325a.563.563,0,0,1,.57-.57h10.61a.57.57,0,0,1,.57.57Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const z3 = /* @__PURE__ */ u(vt, [["render", $t]]), St = a({
  name: "CiPower",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function kt(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Power" }, [
        s("g", null, [
          s("path", { d: "M6.638,5.209a8.782,8.782,0,1,0,13.917,8.96,8.871,8.871,0,0,0-3.189-8.96c-.5-.39-1.214.312-.707.707a7.93,7.93,0,0,1,3.082,7.113,7.787,7.787,0,0,1-15.308.956A7.9,7.9,0,0,1,7.345,5.916c.507-.394-.205-1.1-.707-.707Z" }),
          s("path", { d: "M12.5,12.519a.5.5,0,0,1-1,0V3.548h0a.5.5,0,0,1,1,0Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Z3 = /* @__PURE__ */ u(St, [["render", kt]]), wt = a({
  name: "CiPrescriptionBottle1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function zt(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Prescription_Bottle_1",
        "data-name": "Prescription Bottle 1"
      }, [
        s("path", { d: "M17.435,2.06H6.565a2.5,2.5,0,0,0-2.5,2.5v2a1.492,1.492,0,0,0,1.22,1.47V19.44a2.5,2.5,0,0,0,2.5,2.5h8.43a2.5,2.5,0,0,0,2.5-2.5V8.03a1.492,1.492,0,0,0,1.22-1.47v-2A2.5,2.5,0,0,0,17.435,2.06Zm.28,17.38a1.5,1.5,0,0,1-1.5,1.5H7.785a1.5,1.5,0,0,1-1.5-1.5v-.88h3.52a.491.491,0,0,0,.48-.5.485.485,0,0,0-.48-.5H6.285V15h2.57a.5.5,0,0,0,0-1H6.285V11.45h3.52a.491.491,0,0,0,.48-.5.485.485,0,0,0-.48-.5H6.285V8.06h11.43Zm1.22-12.88a.5.5,0,0,1-.5.5H5.565a.5.5,0,0,1-.5-.5v-2a1.5,1.5,0,0,1,1.5-1.5h10.87a1.5,1.5,0,0,1,1.5,1.5Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const M3 = /* @__PURE__ */ u(wt, [["render", zt]]), Zt = a({
  name: "CiRainbow",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Mt(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Rainbow" }, [
        s("g", null, [
          s("path", { d: "M3.089,16.71A9,9,0,0,1,8.97,8.326,8.912,8.912,0,0,1,20.911,16.71a.5.5,0,0,0,1,0,10.033,10.033,0,0,0-6.46-9.291,9.981,9.981,0,0,0-11.06,2.944,10.058,10.058,0,0,0-2.3,6.347.5.5,0,0,0,1,0Z" }),
          s("path", { d: "M5.985,16.71A6.078,6.078,0,0,1,12,10.7a6.078,6.078,0,0,1,6.015,6.015.5.5,0,0,0,1,0A7.013,7.013,0,0,0,6.606,12.228,7.151,7.151,0,0,0,4.985,16.71a.5.5,0,0,0,1,0Z" }),
          s("path", { d: "M8.88,16.71a3.12,3.12,0,0,1,6.24,0,.5.5,0,0,0,1,0,4.119,4.119,0,0,0-7.255-2.669A4.219,4.219,0,0,0,7.88,16.71a.5.5,0,0,0,1,0Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const A3 = /* @__PURE__ */ u(Zt, [["render", Mt]]), At = a({
  name: "CiReceipt",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ht(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Receipt" }, [
        s("g", null, [
          s("path", { d: "M12,21.919a1.454,1.454,0,0,1-.791-.232L9.645,20.666a.47.47,0,0,0-.439-.028l-1.776.829a1.466,1.466,0,0,1-1.4-.087,1.214,1.214,0,0,1-.581-1.02V3.641A1.217,1.217,0,0,1,6.033,2.62a1.469,1.469,0,0,1,1.4-.087l1.775.829a.469.469,0,0,0,.439-.026L11.21,2.313a1.464,1.464,0,0,1,1.581,0l1.564,1.022a.469.469,0,0,0,.44.026l1.775-.829a1.461,1.461,0,0,1,1.4.087,1.217,1.217,0,0,1,.581,1.021V20.36a1.216,1.216,0,0,1-.581,1.02,1.46,1.46,0,0,1-1.4.087L14.8,20.639a.474.474,0,0,0-.441.027l-1.564,1.021A1.448,1.448,0,0,1,12,21.919ZM9.4,19.6a1.44,1.44,0,0,1,.79.234l1.564,1.02a.464.464,0,0,0,.487,0l1.565-1.021a1.462,1.462,0,0,1,1.41-.095l1.774.828a.463.463,0,0,0,.437-.024.221.221,0,0,0,.118-.177V3.641a.219.219,0,0,0-.118-.177.461.461,0,0,0-.437-.025l-1.775.829a1.458,1.458,0,0,1-1.409-.095L12.243,3.151a.467.467,0,0,0-.486,0L10.192,4.172a1.467,1.467,0,0,1-1.41.1L7.007,3.439a.461.461,0,0,0-.437.025.219.219,0,0,0-.118.177V20.36a.221.221,0,0,0,.118.177.468.468,0,0,0,.437.024l1.776-.829A1.461,1.461,0,0,1,9.4,19.6Z" }),
          s("path", { d: "M15.046,7.4H8.954a.5.5,0,0,1,0-1h6.092a.5.5,0,0,1,0,1Z" }),
          s("path", { d: "M15.046,10.953H8.954a.5.5,0,0,1,0-1h6.092a.5.5,0,0,1,0,1Z" }),
          s("path", { d: "M12,14.5H8.954a.5.5,0,0,1,0-1H12a.5.5,0,0,1,0,1Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const H3 = /* @__PURE__ */ u(At, [["render", Ht]]), Vt = a({
  name: "CiRedo",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function It(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Redo" }, [
        s("path", { d: "M4.061,13.67A7.958,7.958,0,0,0,16.2,19.74a8.061,8.061,0,0,0,3.77-6.77.5.5,0,0,0-1,0,6.976,6.976,0,0,1-11,5.7,6.969,6.969,0,0,1,1-11.97,10.075,10.075,0,0,1,4.64-.69V7.46a.5.5,0,0,0,.81.39l2.47-1.95a.5.5,0,0,0,0-.79L14.4,3.17a.5.5,0,0,0-.8.4V5.01c-.71-.01-1.43-.03-2.13.02a7.985,7.985,0,0,0-7.41,8.64Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const V3 = /* @__PURE__ */ u(Vt, [["render", It]]), _t = a({
  name: "CiRepeat",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function bt(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("rect", {
        id: "Repeat",
        x: "0",
        y: "0",
        width: "24",
        height: "24",
        style: { fill: "none" }
      }, null, -1),
      s("g", {
        id: "Repeat1",
        "serif:id": "Repeat"
      }, [
        s("path", { d: "M2.078,17.562c-0.01,-0.039 -0.016,-0.08 -0.016,-0.123c0,-0.138 0.056,-0.263 0.147,-0.353c0.008,-0.009 1.416,-1.417 2,-2c0.198,-0.198 0.507,-0.183 0.707,-0c0.199,0.183 0.185,0.522 -0,0.707l-1.147,1.146l15.669,0c0.828,0 1.5,-0.671 1.5,-1.5l0,-3.439c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,3.439c0,1.381 -1.12,2.5 -2.5,2.5l-15.669,0l1.147,1.147c0.198,0.198 0.183,0.507 -0,0.707c-0.183,0.199 -0.522,0.185 -0.707,-0l-2,-2c-0.066,-0.063 -0.11,-0.143 -0.131,-0.231Zm19.845,-11.105c0.01,0.039 0.015,0.08 0.015,0.122c0,0.138 -0.056,0.263 -0.147,0.354c-0.008,0.008 -1.416,1.417 -2,2c-0.197,0.198 -0.507,0.183 -0.707,-0c-0.199,-0.183 -0.185,-0.522 0,-0.707l1.147,-1.147l-15.669,0c-0.828,0 -1.5,0.672 -1.5,1.5l0,3.439c-0,0.276 -0.224,0.5 -0.5,0.5c-0.276,0 -0.5,-0.224 -0.5,-0.5l0,-3.439c0,-1.381 1.12,-2.5 2.5,-2.5l15.669,0l-1.146,-1.146c-0.198,-0.198 -0.183,-0.507 -0,-0.707c0.183,-0.199 0.522,-0.185 0.707,-0l2,2c0.065,0.063 0.11,0.143 0.131,0.231Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const I3 = /* @__PURE__ */ u(_t, [["render", bt]]), Ot = a({
  name: "CiRollingSuitcase",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Lt(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Rolling_Suitcase",
        "data-name": "Rolling Suitcase"
      }, [
        s("path", { d: "M16.25,7.49H15V3.56a1.5,1.5,0,0,0-1.5-1.5h-3A1.511,1.511,0,0,0,9,3.56V7.49H7.75a2.5,2.5,0,0,0-2.5,2.5v8.44a2.5,2.5,0,0,0,2.5,2.5h.5v.01a1,1,0,0,0,2,0v-.01h3.5v.01a1,1,0,0,0,2,0v-.01h.5a2.5,2.5,0,0,0,2.5-2.5V9.99A2.5,2.5,0,0,0,16.25,7.49ZM10,3.56a.508.508,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5V7.5H10Zm7.75,14.87a1.5,1.5,0,0,1-1.5,1.5H7.75a1.5,1.5,0,0,1-1.5-1.5V9.99a1.511,1.511,0,0,1,1.5-1.5h8.5a1.5,1.5,0,0,1,1.5,1.5Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const _3 = /* @__PURE__ */ u(Ot, [["render", Lt]]), jt = a({
  name: "CiRoute",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Pt(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Route" }, [
        s("path", { d: "M21.792,17.086c-.58-.58-1.16-1.17-1.75-1.75-.08-.08-.16-.17-.25-.25a.492.492,0,0,0-.7,0,.5.5,0,0,0,0,.71l1.14,1.14H9.282a2.22,2.22,0,0,1,0-4.44h3a3.215,3.215,0,1,0,0-6.43H7.012a2.5,2.5,0,1,0,0,1h5.27a2.215,2.215,0,1,1,0,4.43h-3a3.22,3.22,0,1,0,0,6.44h10.96l-.9.9c-.09.08-.17.17-.25.25a.5.5,0,0,0,0,.71.511.511,0,0,0,.7,0l1.75-1.75.25-.25A.5.5,0,0,0,21.792,17.086ZM4.562,8.066a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,4.562,8.066Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const b3 = /* @__PURE__ */ u(jt, [["render", Pt]]), Dt = a({
  name: "CiRouter",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ft(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Router" }, [
        s("g", null, [
          s("path", { d: "M19.44,10.94H17.93V4.54a.5.5,0,0,0-1,0v6.4H7.06V7a.5.5,0,0,0-1,0v3.94H4.56a2.507,2.507,0,0,0-2.5,2.5v4a2.514,2.514,0,0,0,2.5,2.5H19.44a2.507,2.507,0,0,0,2.5-2.5v-4A2.5,2.5,0,0,0,19.44,10.94Zm1.5,6.5a1.5,1.5,0,0,1-1.5,1.5H4.56a1.511,1.511,0,0,1-1.5-1.5v-4a1.5,1.5,0,0,1,1.5-1.5H19.44a1.5,1.5,0,0,1,1.5,1.5Z" }),
          s("circle", {
            cx: "4.75",
            cy: "15.436",
            r: "0.75"
          }),
          s("circle", {
            cx: "8.25",
            cy: "15.436",
            r: "0.75"
          }),
          s("path", { d: "M18.5,16.936h-5a1.5,1.5,0,1,1,0-3h5a1.5,1.5,0,0,1,0,3Zm-5-2a.5.5,0,1,0,0,1h5a.5.5,0,0,0,0-1Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const O3 = /* @__PURE__ */ u(Dt, [["render", Ft]]), Rt = a({
  name: "CiRuler",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Tt(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Ruler" }, [
        s("g", null, [
          s("path", { d: "M9.479,3.5a1.5,1.5,0,0,0-2.12,0L3.5,7.35a1.516,1.516,0,0,0-.44,1.06A1.5,1.5,0,0,0,3.5,9.47L14.519,20.5a1.509,1.509,0,0,0,2.13,0l3.85-3.86a1.491,1.491,0,0,0,0-2.12ZM8.359,7.08a.5.5,0,0,0,0,.71.524.524,0,0,0,.71,0c.55-.56,1.09-1.1,1.65-1.64l1.25,1.25-.9.9a.483.483,0,0,0,0,.7.5.5,0,0,0,.71,0c.29-.3.6-.6.9-.89l1.25,1.25-1.64,1.65a.495.495,0,0,0,.7.7c.56-.55,1.1-1.09,1.65-1.64l1.25,1.25-.9.9a.524.524,0,0,0-.14.36.5.5,0,0,0,.14.35.513.513,0,0,0,.71,0l.9-.9,1.26,1.26-1.65,1.64a.5.5,0,0,0,.71.71c.55-.56,1.09-1.1,1.65-1.64l1.23,1.23a.5.5,0,0,1,0,.7l-3.86,3.86a.5.5,0,0,1-.71,0L4.209,8.77a.491.491,0,0,1-.15-.36.485.485,0,0,1,.15-.35L8.069,4.2a.508.508,0,0,1,.7,0l1.24,1.24Z" }),
          s("path", { d: "M18.939,12.96l-.04-.04c.01,0,.01,0,.02.01S18.939,12.95,18.939,12.96Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const L3 = /* @__PURE__ */ u(Rt, [["render", Tt]]), qt = a({
  name: "CiSatellite1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ut(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Satellite_1",
        "data-name": "Satellite 1"
      }, [
        s("path", { d: "M17.135,12.37a5.447,5.447,0,0,0,3.42-1.2.982.982,0,0,0,.37-.72,1.04,1.04,0,0,0-.31-.8l-2.78-2.78c.39-.39.8-.8,1.19-1.2.08-.07.15-.14.23-.22a.511.511,0,0,0,0-.7.5.5,0,0,0-.71,0c-.48.47-.94.94-1.42,1.41l-2.78-2.78a1.077,1.077,0,0,0-.8-.31,1,1,0,0,0-.72.37,5.454,5.454,0,0,0-1.19,3.67l-1.45,1.46L7.855,6.24a.978.978,0,0,0-1.41,0L3.365,9.32a1,1,0,0,0,0,1.41L5.7,13.06l-.41.4a2.65,2.65,0,0,0,0,3.74L6.8,18.71a2.632,2.632,0,0,0,3.74,0l.4-.4,2.33,2.33a1,1,0,0,0,1.41,0l3.08-3.09a1,1,0,0,0,0-1.41l-2.32-2.32,1.45-1.46A2.09,2.09,0,0,0,17.135,12.37ZM4.065,10.03l3.09-3.09,2.32,2.33L6.4,12.35Zm12.99,6.82-3.08,3.08-2.33-2.33,3.08-3.08Zm-5.23-8.51a5.482,5.482,0,0,0,3.84,3.83l-5.84,5.84a1.642,1.642,0,0,1-2.32,0l-1.52-1.52a1.642,1.642,0,0,1,0-2.32Zm2.12,1.71a4.417,4.417,0,0,1-.3-5.96l3.13,3.13,3.14,3.14.02.03A4.5,4.5,0,0,1,13.945,10.05Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const j3 = /* @__PURE__ */ u(qt, [["render", Ut]]), Gt = a({
  name: "CiSaveDown1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Wt(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Save_Down_1",
        "data-name": "Save Down 1"
      }, [
        s("g", null, [
          s("path", { d: "M17.617,6.383a7.944,7.944,0,0,1-1.748,12.568A8.028,8.028,0,0,1,4.283,13.908,8.028,8.028,0,0,1,6.378,6.391c.451-.46-.256-1.168-.707-.707A8.946,8.946,0,0,0,15.427,20.27a8.946,8.946,0,0,0,2.9-14.594c-.451-.461-1.158.247-.707.707Z" }),
          s("path", { d: "M15.355,10.6l-3,3a.5.5,0,0,1-.35.15.508.508,0,0,1-.36-.15l-3-3a.5.5,0,0,1,.71-.71l2.14,2.14V3.555a.508.508,0,0,1,.5-.5.5.5,0,0,1,.5.5v8.49l2.15-2.16a.5.5,0,0,1,.71.71Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const P3 = /* @__PURE__ */ u(Gt, [["render", Wt]]), Et = a({
  name: "CiSaveDown2",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Nt(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Save_Down_2",
        "data-name": "Save Down 2"
      }, [
        s("g", null, [
          s("path", { d: "M18.437,20.948H5.563a2.372,2.372,0,0,1-2.5-2.21v-11a2.372,2.372,0,0,1,2.5-2.211h.462a.5.5,0,0,1,0,1H5.563a1.38,1.38,0,0,0-1.5,1.211v11a1.38,1.38,0,0,0,1.5,1.21H18.437a1.38,1.38,0,0,0,1.5-1.21v-11a1.38,1.38,0,0,0-1.5-1.211h-.462a.5.5,0,0,1,0-1h.462a2.372,2.372,0,0,1,2.5,2.211v11A2.372,2.372,0,0,1,18.437,20.948Z" }),
          s("path", { d: "M15.355,10.592l-3,3a.5.5,0,0,1-.35.15.508.508,0,0,1-.36-.15l-3-3a.5.5,0,0,1,.71-.71l2.14,2.139V3.552a.508.508,0,0,1,.5-.5.5.5,0,0,1,.5.5v8.49l2.15-2.16a.5.5,0,0,1,.71.71Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const D3 = /* @__PURE__ */ u(Et, [["render", Nt]]), Qt = a({
  name: "CiSaveUp1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Kt(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Save_Up_1",
        "data-name": "Save Up 1"
      }, [
        s("g", null, [
          s("path", { d: "M17.617,6.374a7.946,7.946,0,0,1-1.748,12.569A8.028,8.028,0,0,1,4.283,13.9,8.029,8.029,0,0,1,6.378,6.382c.451-.46-.256-1.168-.707-.707a8.946,8.946,0,0,0,9.756,14.587,8.946,8.946,0,0,0,2.9-14.595c-.451-.46-1.158.247-.707.707Z" }),
          s("path", { d: "M8.645,6.213l3-3a.5.5,0,0,1,.35-.15.508.508,0,0,1,.36.15l3,3a.5.5,0,0,1-.71.71l-2.14-2.14v8.47a.508.508,0,0,1-.5.5.5.5,0,0,1-.5-.5V4.763l-2.15,2.16a.5.5,0,0,1-.71-.71Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const F3 = /* @__PURE__ */ u(Qt, [["render", Kt]]), Jt = a({
  name: "CiSaveUp2",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Yt(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Save_Up_2",
        "data-name": "Save Up 2"
      }, [
        s("g", null, [
          s("path", { d: "M18.437,20.937H5.563a2.372,2.372,0,0,1-2.5-2.211v-11a2.372,2.372,0,0,1,2.5-2.212h.462a.5.5,0,0,1,0,1H5.563a1.381,1.381,0,0,0-1.5,1.212v11a1.38,1.38,0,0,0,1.5,1.211H18.437a1.38,1.38,0,0,0,1.5-1.211v-11a1.381,1.381,0,0,0-1.5-1.212h-.462a.5.5,0,0,1,0-1h.462a2.372,2.372,0,0,1,2.5,2.212v11A2.372,2.372,0,0,1,18.437,20.937Z" }),
          s("path", { d: "M8.645,6.213l3-3a.5.5,0,0,1,.35-.15.508.508,0,0,1,.36.15l3,3a.5.5,0,0,1-.71.71l-2.14-2.14v8.47a.508.508,0,0,1-.5.5.5.5,0,0,1-.5-.5V4.763l-2.15,2.16a.5.5,0,0,1-.71-.71Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const R3 = /* @__PURE__ */ u(Jt, [["render", Yt]]), Xt = a({
  name: "CiSearch",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function xt(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("path", { d: "M20.74,20.086l-3.755-3.755a7.943,7.943,0,1,0-.712.7l3.76,3.76a.5.5,0,0,0,.707-.707ZM4.113,11.02a6.96,6.96,0,1,1,6.96,6.96A6.968,6.968,0,0,1,4.113,11.02Z" }, null, -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const T3 = /* @__PURE__ */ u(Xt, [["render", xt]]), e2 = a({
  name: "CiServer",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function s2(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Server" }, [
        s("g", null, [
          s("path", { d: "M20.437,11H3.563a1.5,1.5,0,0,1-1.5-1.5V5.565a1.5,1.5,0,0,1,1.5-1.5H20.437a1.5,1.5,0,0,1,1.5,1.5v3.93A1.5,1.5,0,0,1,20.437,11ZM3.563,5.065a.5.5,0,0,0-.5.5v3.93a.5.5,0,0,0,.5.5H20.437a.5.5,0,0,0,.5-.5V5.565a.5.5,0,0,0-.5-.5Z" }),
          s("path", { d: "M20.437,19.935H3.563a1.5,1.5,0,0,1-1.5-1.5v-3.93a1.5,1.5,0,0,1,1.5-1.5H20.437a1.5,1.5,0,0,1,1.5,1.5v3.93A1.5,1.5,0,0,1,20.437,19.935ZM3.563,14.005a.5.5,0,0,0-.5.5v3.93a.5.5,0,0,0,.5.5H20.437a.5.5,0,0,0,.5-.5v-3.93a.5.5,0,0,0-.5-.5Z" }),
          s("circle", {
            cx: "5.563",
            cy: "7.53",
            r: "0.5"
          }),
          s("circle", {
            cx: "7.563",
            cy: "7.53",
            r: "0.5"
          }),
          s("path", { d: "M13.452,8.03a.5.5,0,0,1,0-1h5a.5.5,0,0,1,0,1Z" }),
          s("circle", {
            cx: "5.563",
            cy: "16.47",
            r: "0.5"
          }),
          s("circle", {
            cx: "7.563",
            cy: "16.47",
            r: "0.5"
          }),
          s("path", { d: "M13.452,16.97a.5.5,0,0,1,0-1h5a.5.5,0,0,1,0,1Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const q3 = /* @__PURE__ */ u(e2, [["render", s2]]), o2 = a({
  name: "CiSettings",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function t2(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Settings" }, [
        s("g", null, [
          s("path", { d: "M12.6,20.936H11.3a.883.883,0,0,1-.852-.654l-.774-2.833-2.5,1.435a.886.886,0,0,1-1.06-.138l-.925-.919a.884.884,0,0,1-.143-1.066l1.469-2.545L6.509,14.2l-2.787-.747a.882.882,0,0,1-.654-.851V11.3a.882.882,0,0,1,.652-.85l2.839-.777L5.12,7.171a.885.885,0,0,1,.141-1.062l.918-.918A.885.885,0,0,1,7.24,5.049L9.792,6.514l.012,0,.745-2.79a.881.881,0,0,1,.851-.655h1.3a.883.883,0,0,1,.852.655l.762,2.838,2.509-1.441a.885.885,0,0,1,1.059.138l.926.919a.882.882,0,0,1,.141,1.067L17.483,9.777l.008.022,2.786.746a.883.883,0,0,1,.653.851v1.3a.883.883,0,0,1-.654.852l-2.837.774,1.439,2.505a.881.881,0,0,1-.141,1.063l-.917.917a.888.888,0,0,1-1.063.141l-2.539-1.462L14.2,17.5l-.745,2.785A.885.885,0,0,1,12.6,20.936Zm-1.21-1h1.119l.738-2.756a.888.888,0,0,1,.528-.592l.134-.052a.873.873,0,0,1,.76.057l2.51,1.445.789-.789-1.423-2.478a.881.881,0,0,1-.048-.78l.052-.125a.875.875,0,0,1,.584-.51l2.8-.749v-1.12l-2.755-.737a.885.885,0,0,1-.592-.529l-.052-.132a.882.882,0,0,1,.057-.763L18.04,6.818l-.8-.79-2.48,1.425a.878.878,0,0,1-.772.052l-.115-.047a.888.888,0,0,1-.518-.588l-.748-2.806H11.492l-.738,2.762a.883.883,0,0,1-.539.6l-.12.045a.874.874,0,0,1-.751-.058L6.822,5.962l-.789.789L7.455,9.227a.886.886,0,0,1,.046.785l-.051.12a.876.876,0,0,1-.579.5l-2.8.758v1.121l2.757.738a.889.889,0,0,1,.591.525l.048.121a.874.874,0,0,1-.055.77L5.958,17.181l.8.791,2.47-1.419a.878.878,0,0,1,.787-.045l.106.044a.874.874,0,0,1,.526.591ZM9.75,17.482l.008,0ZM9.6,17.421l.007,0ZM6.487,14.147h0Zm.044-4.411h0Zm7.724-3.2Z" }),
          s("path", { d: "M12,15a3,3,0,1,1,3-3A3,3,0,0,1,12,15Zm0-5a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const U3 = /* @__PURE__ */ u(o2, [["render", t2]]), a2 = a({
  name: "CiShare1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function l2(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Share_1",
        "data-name": "Share 1"
      }, [
        s("g", null, [
          s("path", { d: "M12.223,11.075a.5.5,0,0,0,.7.71l7-7v3.58a.508.508,0,0,0,.5.5.5.5,0,0,0,.5-.5V3.575a.5.5,0,0,0-.5-.5h-4.79a.5.5,0,0,0,0,1h3.58Z" }),
          s("path", { d: "M17.876,20.926H6.124a3.053,3.053,0,0,1-3.05-3.05V6.124a3.053,3.053,0,0,1,3.05-3.05h6.028a.5.5,0,0,1,0,1H6.124a2.053,2.053,0,0,0-2.05,2.05V17.876a2.053,2.053,0,0,0,2.05,2.05H17.876a2.053,2.053,0,0,0,2.05-2.05V11.849a.5.5,0,0,1,1,0v6.027A3.053,3.053,0,0,1,17.876,20.926Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const G3 = /* @__PURE__ */ u(a2, [["render", l2]]), r2 = a({
  name: "CiShare2",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function n2(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Share_2",
        "data-name": "Share 2"
      }, [
        s("path", { d: "M18.44,15.94a2.5,2.5,0,0,0-1.96.95L7.97,12.64a2.356,2.356,0,0,0,0-1.29l8.5-4.25a2.5,2.5,0,1,0-.53-1.54,2.269,2.269,0,0,0,.09.65l-8.5,4.25a2.5,2.5,0,1,0,0,3.08l8.5,4.25a2.269,2.269,0,0,0-.09.65,2.5,2.5,0,1,0,2.5-2.5Zm0-11.88a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,18.44,4.06ZM5.56,13.5A1.5,1.5,0,1,1,7.06,12,1.5,1.5,0,0,1,5.56,13.5Zm12.88,6.44a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,18.44,19.94Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const W3 = /* @__PURE__ */ u(r2, [["render", n2]]), i2 = a({
  name: "CiShirt",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function c2(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Shirt" }, [
        s("g", null, [
          s("path", { d: "M16.657,21.949H7.343a2.5,2.5,0,0,1-2.5-2.5V11.222a6.468,6.468,0,0,1,.112-1.2L5.224,8.59a5.572,5.572,0,0,0,.094-1.015V3.3a1.252,1.252,0,0,1,1.25-1.25H8.815a1.251,1.251,0,0,1,1.25,1.25V6.413a1.935,1.935,0,0,0,3.87,0V3.3a1.251,1.251,0,0,1,1.25-1.25h2.247a1.252,1.252,0,0,1,1.25,1.25V7.575a5.486,5.486,0,0,0,.1,1.015l.269,1.431a6.57,6.57,0,0,1,.111,1.2v8.227A2.5,2.5,0,0,1,16.657,21.949ZM6.568,3.051a.251.251,0,0,0-.25.25V7.575a6.543,6.543,0,0,1-.111,1.2l-.27,1.432a5.5,5.5,0,0,0-.094,1.015v8.227a1.5,1.5,0,0,0,1.5,1.5h9.314a1.5,1.5,0,0,0,1.5-1.5V11.222a5.519,5.519,0,0,0-.094-1.016l-.269-1.43a6.453,6.453,0,0,1-.112-1.2V3.3a.251.251,0,0,0-.25-.25H15.185a.251.251,0,0,0-.25.25V6.413a2.935,2.935,0,0,1-5.87,0V3.3a.251.251,0,0,0-.25-.25Z" }),
          s("path", { d: "M11.986,17.333V13.874a.075.075,0,0,0-.114-.064l-.638.392a.149.149,0,0,1-.228-.128v-.65a.3.3,0,0,1,.145-.258l.764-.457a.3.3,0,0,1,.154-.043H12.7a.3.3,0,0,1,.3.3v4.367a.3.3,0,0,1-.3.3h-.409A.3.3,0,0,1,11.986,17.333Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const E3 = /* @__PURE__ */ u(i2, [["render", c2]]), p2 = a({
  name: "CiShop",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function d2(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Shop" }, [
        s("path", { d: "M20.6,5.26a2.512,2.512,0,0,0-2.48-2.2H5.885a2.512,2.512,0,0,0-2.48,2.19l-.3,2.47a3.411,3.411,0,0,0,1.16,2.56v8.16a2.5,2.5,0,0,0,2.5,2.5h10.47a2.5,2.5,0,0,0,2.5-2.5V10.28A3.411,3.411,0,0,0,20.9,7.72Zm-6.59,14.68h-4V15.86a1.5,1.5,0,0,1,1.5-1.5h1a1.5,1.5,0,0,1,1.5,1.5Zm4.73-1.5a1.5,1.5,0,0,1-1.5,1.5h-2.23V15.86a2.5,2.5,0,0,0-2.5-2.5h-1a2.5,2.5,0,0,0-2.5,2.5v4.08H6.765a1.5,1.5,0,0,1-1.5-1.5V10.87a3.223,3.223,0,0,0,1.24.24,3.358,3.358,0,0,0,2.58-1.19.241.241,0,0,1,.34,0,3.358,3.358,0,0,0,2.58,1.19A3.393,3.393,0,0,0,14.6,9.92a.219.219,0,0,1,.16-.07.238.238,0,0,1,.17.07,3.358,3.358,0,0,0,2.58,1.19,3.173,3.173,0,0,0,1.23-.24Zm-1.23-8.33a2.386,2.386,0,0,1-1.82-.83,1.2,1.2,0,0,0-.92-.43h-.01a1.194,1.194,0,0,0-.92.42,2.476,2.476,0,0,1-3.65,0,1.24,1.24,0,0,0-1.86,0A2.405,2.405,0,0,1,4.1,7.78l.3-2.4a1.517,1.517,0,0,1,1.49-1.32h12.23a1.5,1.5,0,0,1,1.49,1.32l.29,2.36A2.392,2.392,0,0,1,17.505,10.11Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const N3 = /* @__PURE__ */ u(p2, [["render", d2]]), u2 = a({
  name: "CiShoppingBasket",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function f2(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Shopping_Basket",
        "data-name": "Shopping Basket"
      }, [
        s("g", null, [
          s("path", { d: "M19.44,7.937H17.3l-1.21-4.51a.508.508,0,0,0-.61-.35.489.489,0,0,0-.35.61l1.14,4.25H7.74l1.14-4.25a.5.5,0,0,0-.36-.61.513.513,0,0,0-.61.35l-1.2,4.51H4.56a1.5,1.5,0,0,0-.32,2.96l.74,7.77a2.492,2.492,0,0,0,2.49,2.27h9.06a2.492,2.492,0,0,0,2.49-2.27l.74-7.77a1.5,1.5,0,0,0-.32-2.96Zm-1.41,10.64a1.5,1.5,0,0,1-1.5,1.36H7.47a1.5,1.5,0,0,1-1.5-1.36l-.72-7.64h13.5Zm1.41-8.64H4.56a.508.508,0,0,1-.5-.5.5.5,0,0,1,.5-.5H19.44a.5.5,0,0,1,.5.5A.508.508,0,0,1,19.44,9.937Z" }),
          s("path", { d: "M9.5,17.432a.5.5,0,0,1-.5-.5v-3a.5.5,0,0,1,1,0v3A.5.5,0,0,1,9.5,17.432Z" }),
          s("path", { d: "M14.5,17.432a.5.5,0,0,1-.5-.5v-3a.5.5,0,0,1,1,0v3A.5.5,0,0,1,14.5,17.432Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Q3 = /* @__PURE__ */ u(u2, [["render", f2]]), y2 = a({
  name: "CiShoppingCart",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function C2(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("rect", {
        id: "Shopping-Cart",
        "serif:id": "Shopping Cart",
        x: "0",
        y: "0",
        width: "24",
        height: "24",
        style: { fill: "none" }
      }, null, -1),
      s("g", {
        id: "Shopping-Cart1",
        "serif:id": "Shopping Cart"
      }, [
        s("path", { d: "M17.437,19.934c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1c0.552,0 1,0.448 1,1Zm-11.217,-4.266l-0.945,-10.9c-0.03,-0.391 -0.356,-0.693 -0.749,-0.693l-0.966,-0c-0.276,-0 -0.5,-0.224 -0.5,-0.5c0,-0.276 0.224,-0.5 0.5,-0.5l0.966,-0c0.916,-0 1.676,0.704 1.746,1.617l0.139,1.818l13.03,-0c0.885,-0 1.577,0.76 1.494,1.638l-0.668,7.52c-0.121,1.285 -1.199,2.267 -2.489,2.267l-9.069,0c-1.29,0 -2.367,-0.981 -2.489,-2.267Zm0.274,-8.158l0.722,8.066c0.073,0.77 0.719,1.359 1.493,1.359l9.069,0c0.774,0 1.42,-0.589 1.493,-1.359l0.668,-7.518c0.028,-0.294 -0.203,-0.548 -0.498,-0.548l-12.947,-0Zm4.454,12.424c-0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c-0,-0.552 0.448,-1 1,-1c0.552,0 1,0.448 1,1Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const K3 = /* @__PURE__ */ u(y2, [["render", C2]]), m2 = a({
  name: "CiShoppingTag",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function g2(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Shopping_Tag",
        "data-name": "Shopping Tag"
      }, [
        s("g", null, [
          s("path", { d: "M20.605,5.988a2.8,2.8,0,0,0-2.6-2.59l-4.56-.32a2.842,2.842,0,0,0-2.17.81L3.9,11.278a2.794,2.794,0,0,0,0,3.95l4.87,4.88a2.8,2.8,0,0,0,3.96,0l7.38-7.39a2.779,2.779,0,0,0,.81-2.17ZM12.015,19.4a1.8,1.8,0,0,1-2.54,0l-4.87-4.87a1.793,1.793,0,0,1,0-2.55l1.17-1.17,7.42,7.42Zm7.38-7.38-5.5,5.5L6.485,10.1l5.5-5.5a1.786,1.786,0,0,1,1.27-.53c.04,0,.08.01.12.01l4.56.32a1.8,1.8,0,0,1,1.67,1.66l.32,4.56A1.829,1.829,0,0,1,19.4,12.018Z" }),
          s("circle", {
            cx: "17",
            cy: "6.999",
            r: "0.862"
          })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const J3 = /* @__PURE__ */ u(m2, [["render", g2]]), B2 = a({
  name: "CiShuffle",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function h2(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Shuffle" }, [
        s("path", { d: "M21.794,17.082a.513.513,0,0,1,0,.71c-.08.08-.17.16-.25.25-.58.58-1.17,1.16-1.75,1.75a.5.5,0,0,1-.71-.71c.09-.08.17-.17.25-.25l.9-.9h-3.85a2.509,2.509,0,0,1-2.15-1.21L12,12.982l-2.24,3.74a2.509,2.509,0,0,1-2.15,1.21H2.564a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h5.05A1.507,1.507,0,0,0,8.9,16.2l2.51-4.2L8.9,7.792a1.507,1.507,0,0,0-1.29-.73H2.564a.5.5,0,0,1,0-1h5.05a2.518,2.518,0,0,1,2.15,1.22L12,11.032l2.24-3.75a2.489,2.489,0,0,1,2.14-1.22h3.85l-1.15-1.15a.5.5,0,1,1,.71-.7c.08.08.17.16.25.25.58.58,1.17,1.16,1.75,1.75a.5.5,0,0,1,0,.7c-.08.09-.17.17-.25.25-.58.59-1.17,1.17-1.75,1.75a.5.5,0,1,1-.71-.7l.25-.25.9-.9h-3.85a1.519,1.519,0,0,0-1.29.73L12.584,12l2.51,4.2a1.519,1.519,0,0,0,1.29.73h3.84l-1.14-1.14a.5.5,0,0,1,.71-.71Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Y3 = /* @__PURE__ */ u(B2, [["render", h2]]), v2 = a({
  name: "CiSignpostCombined1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function $2(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Signpost_Combined_1",
        "data-name": "Signpost Combined 1"
      }, [
        s("g", null, [
          s("path", { d: "M20.437,11.5H6.536a2.628,2.628,0,0,1-1.723-.629L2.564,8.915A1.329,1.329,0,0,1,2.57,6.831L4.813,4.88a2.619,2.619,0,0,1,1.723-.629h13.9a1.451,1.451,0,0,1,1.5,1.393v4.463A1.451,1.451,0,0,1,20.437,11.5Zm-13.9-6.25a1.64,1.64,0,0,0-1.067.384L3.215,7.6a.364.364,0,0,0-.152.281.349.349,0,0,0,.141.27l.011.01,2.254,1.961a1.644,1.644,0,0,0,1.067.384h13.9a.463.463,0,0,0,.5-.394V5.644a.463.463,0,0,0-.5-.393Z" }),
          s("path", { d: "M17.464,19.749H3.563a1.451,1.451,0,0,1-1.5-1.394V13.892a1.451,1.451,0,0,1,1.5-1.393h13.9a2.621,2.621,0,0,1,1.724.63l2.249,1.956a1.329,1.329,0,0,1-.007,2.083l-2.242,1.951A2.625,2.625,0,0,1,17.464,19.749ZM3.563,13.5a.463.463,0,0,0-.5.393v4.463a.463.463,0,0,0,.5.394h13.9a1.644,1.644,0,0,0,1.068-.385l2.253-1.96a.362.362,0,0,0,.152-.28.351.351,0,0,0-.141-.271l-.011-.01-2.254-1.96a1.64,1.64,0,0,0-1.067-.384Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const X3 = /* @__PURE__ */ u(v2, [["render", $2]]), S2 = a({
  name: "CiSignpostL1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function k2(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Signpost_L_1",
        "data-name": "Signpost L 1"
      }, [
        s("path", { d: "M20.437,16H6.536a2.489,2.489,0,0,1-1.744-.709L2.542,13.1a1.5,1.5,0,0,1,.007-2.2L4.792,8.709A2.483,2.483,0,0,1,6.536,8h13.9a1.5,1.5,0,0,1,1.5,1.5v5A1.5,1.5,0,0,1,20.437,16ZM6.536,9a1.491,1.491,0,0,0-1.046.425l-2.255,2.2A.5.5,0,0,0,3.063,12a.494.494,0,0,0,.162.369l.01.01,2.254,2.2A1.492,1.492,0,0,0,6.536,15h13.9a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,0-.5-.5Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const x3 = /* @__PURE__ */ u(S2, [["render", k2]]), w2 = a({
  name: "CiSignpostR1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function z2(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Signpost_R_1",
        "data-name": "Signpost R 1"
      }, [
        s("path", { d: "M3.563,8h13.9a2.489,2.489,0,0,1,1.744.709l2.25,2.192a1.5,1.5,0,0,1-.007,2.2l-2.243,2.187A2.483,2.483,0,0,1,17.464,16H3.563a1.5,1.5,0,0,1-1.5-1.5v-5A1.5,1.5,0,0,1,3.563,8Zm13.9,7a1.491,1.491,0,0,0,1.046-.425l2.255-2.2A.5.5,0,0,0,20.937,12a.494.494,0,0,0-.162-.369l-.01-.01-2.254-2.2A1.492,1.492,0,0,0,17.464,9H3.563a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const ei = /* @__PURE__ */ u(w2, [["render", z2]]), Z2 = a({
  name: "CiSliderHorizontal",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function M2(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Slider_Horizontal",
        "data-name": "Slider Horizontal"
      }, [
        s("g", null, [
          s("path", { d: "M21.45,7.5H9.99A2,2,0,0,0,8.06,6h-1A2,2,0,0,0,5.13,7.5H2.55a.5.5,0,0,0-.5.5.508.508,0,0,0,.5.5H5.13A2,2,0,0,0,7.06,10h1A2,2,0,0,0,9.99,8.5H21.45A.5.5,0,0,0,21.45,7.5ZM8.06,9h-1a1.006,1.006,0,0,1-1-.98V8a1,1,0,0,1,1-1h1a1,1,0,1,1,0,2Z" }),
          s("path", { d: "M21.45,15.5H18.87A2,2,0,0,0,16.94,14h-1a2,2,0,0,0-1.93,1.5H2.55a.5.5,0,0,0,0,1H14.01A2,2,0,0,0,15.94,18h1a2,2,0,0,0,1.93-1.5h2.58a.5.5,0,0,0,.5-.5A.508.508,0,0,0,21.45,15.5Zm-3.51.5a1,1,0,0,1-1,1h-1a1,1,0,1,1,0-2h1a1.006,1.006,0,0,1,1,.98Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const si = /* @__PURE__ */ u(Z2, [["render", M2]]), A2 = a({
  name: "CiSliderVertical",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function H2(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Slider_Vertical",
        "data-name": "Slider Vertical"
      }, [
        s("g", null, [
          s("path", { d: "M8.5,5.13V2.55a.5.5,0,0,0-.5-.5.508.508,0,0,0-.5.5V5.13A2,2,0,0,0,6,7.06v1A2,2,0,0,0,7.5,9.99V21.45a.5.5,0,0,0,1,0V9.99A2,2,0,0,0,10,8.06v-1A2,2,0,0,0,8.5,5.13ZM9,8.06a1,1,0,1,1-2,0v-1a1.006,1.006,0,0,1,.98-1H8a1,1,0,0,1,1,1Z" }),
          s("path", { d: "M16.5,14.01V2.55a.5.5,0,0,0-1,0V14.01A2,2,0,0,0,14,15.94v1a2,2,0,0,0,1.5,1.93v2.58a.5.5,0,0,0,.5.5.508.508,0,0,0,.5-.5V18.87A2,2,0,0,0,18,16.94v-1A2,2,0,0,0,16.5,14.01Zm.5,2.93a1.006,1.006,0,0,1-.98,1H16a1,1,0,0,1-1-1v-1a1,1,0,1,1,2,0Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const oi = /* @__PURE__ */ u(A2, [["render", H2]]), V2 = a({
  name: "CiSpeaker",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function I2(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Speaker" }, [
        s("g", null, [
          s("path", { d: "M17.437,21.938H6.562a2.5,2.5,0,0,1-2.5-2.5V4.562a2.5,2.5,0,0,1,2.5-2.5H17.437a2.5,2.5,0,0,1,2.5,2.5V19.438A2.5,2.5,0,0,1,17.437,21.938ZM6.562,3.062a1.5,1.5,0,0,0-1.5,1.5V19.438a1.5,1.5,0,0,0,1.5,1.5H17.437a1.5,1.5,0,0,0,1.5-1.5V4.562a1.5,1.5,0,0,0-1.5-1.5Z" }),
          s("path", { d: "M12,18.939a3.75,3.75,0,1,1,3.75-3.75A3.755,3.755,0,0,1,12,18.939Zm0-6.5a2.75,2.75,0,1,0,2.75,2.75A2.752,2.752,0,0,0,12,12.439Z" }),
          s("path", { d: "M12,9.563a2.25,2.25,0,1,1,2.25-2.25A2.253,2.253,0,0,1,12,9.563Zm0-3.5a1.25,1.25,0,1,0,1.25,1.25A1.251,1.251,0,0,0,12,6.063Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const ti = /* @__PURE__ */ u(V2, [["render", I2]]), _2 = a({
  name: "CiSquareAlert",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function b2(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Square_Alert",
        "data-name": "Square Alert"
      }, [
        s("g", null, [
          s("path", { d: "M18.437,20.936H5.562a2.5,2.5,0,0,1-2.5-2.5V5.562a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5V18.436A2.5,2.5,0,0,1,18.437,20.936ZM5.562,4.062a1.5,1.5,0,0,0-1.5,1.5V18.436a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V5.562a1.5,1.5,0,0,0-1.5-1.5Z" }),
          s("g", null, [
            s("path", { d: "M11.5,10.982a.5.5,0,0,1,1,0V15h0a.5.5,0,0,1-1,0Z" }),
            s("circle", {
              cx: "12",
              cy: "9",
              r: "0.5"
            })
          ])
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const ai = /* @__PURE__ */ u(_2, [["render", b2]]), O2 = a({
  name: "CiSquareCheck",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function L2(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Square_Check",
        "data-name": "Square Check"
      }, [
        s("g", null, [
          s("path", { d: "M18.437,20.939H5.563a2.5,2.5,0,0,1-2.5-2.5V5.566a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5V18.439A2.5,2.5,0,0,1,18.437,20.939ZM5.563,4.066a1.5,1.5,0,0,0-1.5,1.5V18.439a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V5.566a1.5,1.5,0,0,0-1.5-1.5Z" }),
          s("path", { d: "M15.81,10.4c.45-.46-.26-1.17-.71-.71l-3.56,3.56c-.58-.58-1.16-1.15-1.73-1.73a.5.5,0,0,0-.71.71l2.08,2.08a.513.513,0,0,0,.71,0Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const li = /* @__PURE__ */ u(O2, [["render", L2]]), j2 = a({
  name: "CiSquareChevDown",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function P2(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Square_Chev_Down",
        "data-name": "Square Chev Down"
      }, [
        s("g", null, [
          s("path", { d: "M8.65,10.85a.495.495,0,0,1,.7-.7L12,12.79l2.65-2.64a.495.495,0,0,1,.7.7l-3,3a.492.492,0,0,1-.7,0Z" }),
          s("path", { d: "M3.063,18.437V5.563a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5V18.437a2.5,2.5,0,0,1-2.5,2.5H5.563A2.5,2.5,0,0,1,3.063,18.437ZM19.937,5.563a1.5,1.5,0,0,0-1.5-1.5H5.563a1.5,1.5,0,0,0-1.5,1.5V18.437a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const ri = /* @__PURE__ */ u(j2, [["render", P2]]), D2 = a({
  name: "CiSquareChevLeft",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function F2(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Square_Chev_Left",
        "data-name": "Square Chev Left"
      }, [
        s("g", null, [
          s("path", { d: "M11.21,12l2.64,2.65a.495.495,0,0,1-.7.7c-.13-.12-.25-.24-.38-.37-.87-.87-1.75-1.75-2.62-2.63a.492.492,0,0,1,0-.7l3-3a.495.495,0,0,1,.7.7Z" }),
          s("path", { d: "M18.437,20.939H5.562a2.5,2.5,0,0,1-2.5-2.5V5.566a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5V18.439A2.5,2.5,0,0,1,18.437,20.939ZM5.562,4.066a1.5,1.5,0,0,0-1.5,1.5V18.439a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V5.566a1.5,1.5,0,0,0-1.5-1.5Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const ni = /* @__PURE__ */ u(D2, [["render", F2]]), R2 = a({
  name: "CiSquareChevRight",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function T2(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Square_Chev_Right",
        "data-name": "Square Chev Right"
      }, [
        s("g", null, [
          s("path", { d: "M10.85,15.35a.495.495,0,0,1-.7-.7L12.79,12,10.15,9.35a.495.495,0,0,1,.7-.7l3,3a.492.492,0,0,1,0,.7Z" }),
          s("path", { d: "M18.437,20.937H5.563a2.5,2.5,0,0,1-2.5-2.5V5.563a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5V18.437A2.5,2.5,0,0,1,18.437,20.937ZM5.563,4.063a1.5,1.5,0,0,0-1.5,1.5V18.437a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V5.563a1.5,1.5,0,0,0-1.5-1.5Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const ii = /* @__PURE__ */ u(R2, [["render", T2]]), q2 = a({
  name: "CiSquareChevUp",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function U2(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Square_Chev_Up",
        "data-name": "Square Chev Up"
      }, [
        s("g", null, [
          s("path", { d: "M15.35,13.15a.495.495,0,0,1-.7.7L12,11.21,9.35,13.85a.495.495,0,0,1-.7-.7l3-3a.492.492,0,0,1,.7,0Z" }),
          s("path", { d: "M20.937,5.563V18.437a2.5,2.5,0,0,1-2.5,2.5H5.563a2.5,2.5,0,0,1-2.5-2.5V5.563a2.5,2.5,0,0,1,2.5-2.5H18.437A2.5,2.5,0,0,1,20.937,5.563ZM4.063,18.437a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V5.563a1.5,1.5,0,0,0-1.5-1.5H5.563a1.5,1.5,0,0,0-1.5,1.5Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const ci = /* @__PURE__ */ u(q2, [["render", U2]]), G2 = a({
  name: "CiSquareInfo",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function W2(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Square_Info",
        "data-name": "Square Info"
      }, [
        s("g", null, [
          s("path", { d: "M18.438,20.937H5.564a2.5,2.5,0,0,1-2.5-2.5V5.563a2.5,2.5,0,0,1,2.5-2.5H18.438a2.5,2.5,0,0,1,2.5,2.5V18.437A2.5,2.5,0,0,1,18.438,20.937ZM5.564,4.063a1.5,1.5,0,0,0-1.5,1.5V18.437a1.5,1.5,0,0,0,1.5,1.5H18.438a1.5,1.5,0,0,0,1.5-1.5V5.563a1.5,1.5,0,0,0-1.5-1.5Z" }),
          s("g", null, [
            s("path", { d: "M12.5,9a.5.5,0,0,0-1,0h0v4.018a.5.5,0,0,0,1,0Z" }),
            s("circle", {
              cx: "12",
              cy: "14.999",
              r: "0.5"
            })
          ])
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const pi = /* @__PURE__ */ u(G2, [["render", W2]]), E2 = a({
  name: "CiSquareMinus",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function N2(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Square_Minus",
        "data-name": "Square Minus"
      }, [
        s("g", null, [
          s("path", { d: "M18.438,20.938H5.564a2.5,2.5,0,0,1-2.5-2.5V5.564a2.5,2.5,0,0,1,2.5-2.5H18.438a2.5,2.5,0,0,1,2.5,2.5V18.438A2.5,2.5,0,0,1,18.438,20.938ZM5.564,4.064a1.5,1.5,0,0,0-1.5,1.5V18.438a1.5,1.5,0,0,0,1.5,1.5H18.438a1.5,1.5,0,0,0,1.5-1.5V5.564a1.5,1.5,0,0,0-1.5-1.5Z" }),
          s("path", { d: "M9,12.5a.5.5,0,0,1,0-1h6a.5.5,0,0,1,0,1Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const di = /* @__PURE__ */ u(E2, [["render", N2]]), Q2 = a({
  name: "CiSquareMore",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function K2(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Square_More",
        "data-name": "Square More"
      }, [
        s("g", null, [
          s("path", { d: "M18.437,20.938H5.562a2.5,2.5,0,0,1-2.5-2.5V5.565a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5V18.438A2.5,2.5,0,0,1,18.437,20.938ZM5.562,4.065a1.5,1.5,0,0,0-1.5,1.5V18.438a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V5.565a1.5,1.5,0,0,0-1.5-1.5Z" }),
          s("circle", {
            cx: "11.999",
            cy: "12.002",
            r: "1"
          }),
          s("circle", {
            cx: "15.999",
            cy: "12.002",
            r: "1"
          }),
          s("circle", {
            cx: "7.999",
            cy: "12.002",
            r: "1"
          })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const ui = /* @__PURE__ */ u(Q2, [["render", K2]]), J2 = a({
  name: "CiSquarePlus",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Y2(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Square_Plus",
        "data-name": "Square Plus"
      }, [
        s("g", null, [
          s("path", { d: "M18.438,20.938H5.563a2.5,2.5,0,0,1-2.5-2.5V5.564a2.5,2.5,0,0,1,2.5-2.5H18.438a2.5,2.5,0,0,1,2.5,2.5V18.438A2.5,2.5,0,0,1,18.438,20.938ZM5.563,4.064a1.5,1.5,0,0,0-1.5,1.5V18.438a1.5,1.5,0,0,0,1.5,1.5H18.438a1.5,1.5,0,0,0,1.5-1.5V5.564a1.5,1.5,0,0,0-1.5-1.5Z" }),
          s("path", { d: "M15,12.5H12.5V15a.5.5,0,0,1-1,0V12.5H9a.5.5,0,0,1,0-1h2.5V9a.5.5,0,0,1,1,0v2.5H15A.5.5,0,0,1,15,12.5Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const fi = /* @__PURE__ */ u(J2, [["render", Y2]]), X2 = a({
  name: "CiSquareQuestion",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function x2(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Square_Question",
        "data-name": "Square Question"
      }, [
        s("g", null, [
          s("g", null, [
            s("path", { d: "M11.41,12.461a1.555,1.555,0,0,1,.341-.6,2.68,2.68,0,0,1,.535-.417,2.2,2.2,0,0,0,.363-.285,1.218,1.218,0,0,0,.256-.364A1.083,1.083,0,0,0,13,10.344a.927.927,0,0,0-.142-.518.946.946,0,0,0-.374-.338,1.135,1.135,0,0,0-.519-.119,1.188,1.188,0,0,0-.5.107.934.934,0,0,0-.389.335.884.884,0,0,0-.111.224.515.515,0,0,1-.483.359h0a.506.506,0,0,1-.479-.675,1.653,1.653,0,0,1,.178-.348,1.789,1.789,0,0,1,.748-.634,2.609,2.609,0,0,1,2.113.015,1.733,1.733,0,0,1,.721.642,1.766,1.766,0,0,1,.257.959,1.833,1.833,0,0,1-.118.678,1.674,1.674,0,0,1-.334.536,2.289,2.289,0,0,1-.52.417,2.245,2.245,0,0,0-.462.37,1.1,1.1,0,0,0-.256.454,2.344,2.344,0,0,0-.045.283.486.486,0,0,1-.483.429h0a.484.484,0,0,1-.483-.53A2.928,2.928,0,0,1,11.41,12.461Z" }),
            s("circle", {
              cx: "11.792",
              cy: "14.894",
              r: "0.587"
            })
          ]),
          s("path", { d: "M18.438,20.938H5.563a2.5,2.5,0,0,1-2.5-2.5V5.564a2.5,2.5,0,0,1,2.5-2.5H18.438a2.5,2.5,0,0,1,2.5,2.5V18.438A2.5,2.5,0,0,1,18.438,20.938ZM5.563,4.064a1.5,1.5,0,0,0-1.5,1.5V18.438a1.5,1.5,0,0,0,1.5,1.5H18.438a1.5,1.5,0,0,0,1.5-1.5V5.564a1.5,1.5,0,0,0-1.5-1.5Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const yi = /* @__PURE__ */ u(X2, [["render", x2]]), ea = a({
  name: "CiSquareRemove",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function sa(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Square_Remove",
        "data-name": "Square Remove"
      }, [
        s("g", null, [
          s("path", { d: "M18.437,20.937H5.563a2.5,2.5,0,0,1-2.5-2.5V5.563a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5V18.437A2.5,2.5,0,0,1,18.437,20.937ZM5.563,4.063a1.5,1.5,0,0,0-1.5,1.5V18.437a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V5.563a1.5,1.5,0,0,0-1.5-1.5Z" }),
          s("path", { d: "M13.767,14.477a.5.5,0,0,0,.71-.71L12.707,12l1.77-1.77a.5.5,0,0,0-.71-.7L12,11.3l-1.77-1.77a.5.5,0,0,0-.7.7c.59.59,1.17,1.18,1.77,1.77l-1.77,1.77c-.46.45.25,1.16.7.71L12,12.707Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Ci = /* @__PURE__ */ u(ea, [["render", sa]]), oa = a({
  name: "CiStar",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ta(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Star" }, [
        s("path", { d: "M16.6,20.463a1.5,1.5,0,0,1-.7-.174l-3.666-1.927a.5.5,0,0,0-.464,0L8.1,20.289a1.5,1.5,0,0,1-2.177-1.581l.7-4.082a.5.5,0,0,0-.143-.442L3.516,11.293a1.5,1.5,0,0,1,.832-2.559l4.1-.6a.5.5,0,0,0,.376-.273l1.833-3.714a1.5,1.5,0,0,1,2.69,0l1.833,3.714a.5.5,0,0,0,.376.274l4.1.6a1.5,1.5,0,0,1,.832,2.559l-2.965,2.891a.5.5,0,0,0-.144.442l.7,4.082A1.5,1.5,0,0,1,16.6,20.463Zm-3.9-2.986L16.364,19.4a.5.5,0,0,0,.725-.527l-.7-4.082a1.5,1.5,0,0,1,.432-1.328l2.965-2.89a.5.5,0,0,0-.277-.853l-4.1-.6a1.5,1.5,0,0,1-1.13-.821L12.449,4.594a.516.516,0,0,0-.9,0L9.719,8.308a1.5,1.5,0,0,1-1.13.82l-4.1.6a.5.5,0,0,0-.277.853L7.18,13.468A1.5,1.5,0,0,1,7.611,14.8l-.7,4.082a.5.5,0,0,0,.726.527L11.3,17.477a1.5,1.5,0,0,1,1.4,0Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const mi = /* @__PURE__ */ u(oa, [["render", ta]]), aa = a({
  name: "CiStethoscope",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function la(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Stethoscope" }, [
        s("path", { d: "M18.185,9.256a2.748,2.748,0,0,0-.5,5.45v2.31a2.923,2.923,0,0,1-2.92,2.92h-2.78a2.923,2.923,0,0,1-2.92-2.92v-.98a5.5,5.5,0,0,0,5-5.47V5.286a1.483,1.483,0,0,0-1.03-1.42l-2.31-.78a.5.5,0,0,0-.63.32.491.491,0,0,0,.31.63l2.32.78a.486.486,0,0,1,.34.47v5.28a4.5,4.5,0,0,1-9,0V5.286a.486.486,0,0,1,.34-.47l2.32-.78a.491.491,0,0,0,.31-.63.5.5,0,0,0-.63-.32l-2.31.78a1.483,1.483,0,0,0-1.03,1.42v5.28a5.5,5.5,0,0,0,5,5.47v.98a3.926,3.926,0,0,0,3.92,3.92h2.78a3.926,3.926,0,0,0,3.92-3.92v-2.31a2.748,2.748,0,0,0-.5-5.45Zm0,4.5a1.75,1.75,0,1,1,1.75-1.75A1.758,1.758,0,0,1,18.185,13.756Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const gi = /* @__PURE__ */ u(aa, [["render", la]]), ra = a({
  name: "CiStickyNote",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function na(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Sticky_Note",
        "data-name": "Sticky Note"
      }, [
        s("path", { d: "M18.44,3.065H5.56a2.507,2.507,0,0,0-2.5,2.5v12.87a2.507,2.507,0,0,0,2.5,2.5h8.68A2.482,2.482,0,0,0,16,20.2l4.21-4.2a2.505,2.505,0,0,0,.73-1.77V5.565A2.5,2.5,0,0,0,18.44,3.065Zm-4.38,13.5v3.37H5.56a1.5,1.5,0,0,1-1.5-1.5V5.565a1.5,1.5,0,0,1,1.5-1.5H18.44a1.5,1.5,0,0,1,1.5,1.5v8.5H16.56A2.507,2.507,0,0,0,14.06,16.565Zm1,3.13v-3.13a1.5,1.5,0,0,1,1.5-1.5h3.13Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Bi = /* @__PURE__ */ u(ra, [["render", na]]), ia = a({
  name: "CiStop1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ca(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Stop_1",
        "data-name": "Stop 1"
      }, [
        s("path", { d: "M18.437,20.937H5.563a2.5,2.5,0,0,1-2.5-2.5V5.563a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5V18.437A2.5,2.5,0,0,1,18.437,20.937ZM5.563,4.063a1.5,1.5,0,0,0-1.5,1.5V18.437a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V5.563a1.5,1.5,0,0,0-1.5-1.5Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const hi = /* @__PURE__ */ u(ia, [["render", ca]]), pa = a({
  name: "CiStopSign1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function da(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Stop_Sign_1",
        "data-name": "Stop Sign 1"
      }, [
        s("g", null, [
          s("path", { d: "M12.531,15.688H10.14a.5.5,0,0,1,0-1h2.391a1.094,1.094,0,0,0,0-2.188H11.468a2.094,2.094,0,0,1,0-4.188h2.391a.5.5,0,0,1,0,1H11.468a1.094,1.094,0,0,0,0,2.188h1.063a2.094,2.094,0,0,1,0,4.188Z" }),
          s("path", { d: "M15.079,21.933H8.92A2.482,2.482,0,0,1,7.153,21.2L2.8,16.847a2.484,2.484,0,0,1-.732-1.768V8.921A2.486,2.486,0,0,1,2.8,7.153L7.153,2.8A2.482,2.482,0,0,1,8.92,2.067h6.159a2.482,2.482,0,0,1,1.767.732L21.2,7.154a2.482,2.482,0,0,1,.732,1.767v6.158a2.491,2.491,0,0,1-.731,1.768L16.846,21.2A2.482,2.482,0,0,1,15.079,21.933ZM8.92,3.067a1.511,1.511,0,0,0-1.06.439L3.506,7.861a1.489,1.489,0,0,0-.439,1.06v6.158a1.491,1.491,0,0,0,.439,1.061L7.86,20.494a1.511,1.511,0,0,0,1.06.439h6.159a1.511,1.511,0,0,0,1.06-.439l4.355-4.354a1.494,1.494,0,0,0,.439-1.061V8.921a1.511,1.511,0,0,0-.439-1.06L16.139,3.506a1.511,1.511,0,0,0-1.06-.439Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const vi = /* @__PURE__ */ u(pa, [["render", da]]), ua = a({
  name: "CiStopwatch",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function fa(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("rect", {
        id: "Stopwatch",
        x: "0",
        y: "0",
        width: "24",
        height: "24",
        style: { fill: "none" }
      }, null, -1),
      s("g", {
        id: "Stopwatch1",
        "serif:id": "Stopwatch"
      }, [
        s("path", { d: "M17.925,7.828c1.226,1.391 1.97,3.217 1.97,5.215c0,4.358 -3.537,7.895 -7.895,7.895c-4.358,0 -7.896,-3.537 -7.896,-7.895c0,-4.189 3.271,-7.621 7.396,-7.879l0,-1.103l-1.587,0c-0.645,0 -0.643,-1 -0,-1l4.174,0c0.645,0 0.644,1 -0,1l-1.587,0l0,1.103c1.803,0.113 3.443,0.832 4.718,1.956c0.378,-0.378 0.756,-0.756 1.135,-1.134c0.197,-0.198 0.507,-0.183 0.707,-0c0.199,0.183 0.185,0.522 -0,0.707l-1.135,1.135Zm0.97,5.215c0,-3.805 -3.089,-6.895 -6.895,-6.895c-3.806,0.001 -6.896,3.09 -6.896,6.895c0,3.806 3.09,6.895 6.896,6.895c3.806,0 6.895,-3.089 6.895,-6.895Zm-6.395,0.001c0,0.645 -1,0.643 -1,-0l0,-4.704c0,-0.644 1,-0.643 1,-0l0,4.704Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const $i = /* @__PURE__ */ u(ua, [["render", fa]]), ya = a({
  name: "CiStreamOff",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ca(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Stream_Off",
        "data-name": "Stream Off"
      }, [
        s("g", null, [
          s("path", { d: "M4.911,4.206c-.45-.45-1.16.26-.71.71l.32.32v.01A10.646,10.646,0,0,0,5.541,19.8c.48.43,1.19-.28.71-.71a9.623,9.623,0,0,1-1.01-13.13l2.27,2.27a6.022,6.022,0,0,0,.61,8.18c.48.44,1.19-.27.71-.7a5.024,5.024,0,0,1-.61-6.77l2.61,2.61a1.13,1.13,0,0,0-.09.45,1.248,1.248,0,0,0,1.25,1.24,1.13,1.13,0,0,0,.45-.09l4.77,4.77.86.86a3.024,3.024,0,0,1-.31.31.355.355,0,0,0-.11.16.406.406,0,0,0-.04.19.381.381,0,0,0,.04.19.386.386,0,0,0,.11.17.5.5,0,0,0,.35.14.585.585,0,0,0,.13-.02.432.432,0,0,0,.22-.12c.11-.1.22-.2.32-.3.1.09.19.19.29.29.45.45,1.16-.26.71-.71Z" }),
          s("path", { d: "M17.73,4.908a9.624,9.624,0,0,1,2.3,11.1c-.265.582.6,1.09.864.505A10.647,10.647,0,0,0,18.438,4.2c-.475-.433-1.185.272-.708.707Z" }),
          s("path", { d: "M15.15,8.291a5.016,5.016,0,0,1,1.6,4.572.515.515,0,0,0,.349.615.5.5,0,0,0,.615-.349,6.042,6.042,0,0,0-1.852-5.546c-.476-.431-1.185.274-.708.708Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Si = /* @__PURE__ */ u(ya, [["render", Ca]]), ma = a({
  name: "CiStreamOn",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ga(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Stream_On",
        "data-name": "Stream On"
      }, [
        s("g", null, [
          s("path", { d: "M6.26,19.089A9.625,9.625,0,0,1,6.234,4.911C6.709,4.475,6,3.769,5.527,4.2A10.516,10.516,0,0,0,5.553,19.8c.475.433,1.184-.273.707-.707Z" }),
          s("path", { d: "M8.84,15.706a5.024,5.024,0,0,1-.014-7.412c.474-.437-.234-1.143-.707-.707a6.028,6.028,0,0,0,.014,8.826c.474.434,1.183-.272.707-.707Z" }),
          s("circle", {
            cx: "12",
            cy: "12",
            r: "1.244"
          }),
          s("path", { d: "M17.74,4.911a9.625,9.625,0,0,1,.026,14.178c-.475.436.234,1.142.707.707A10.516,10.516,0,0,0,18.447,4.2c-.475-.433-1.184.273-.707.707Z" }),
          s("path", { d: "M15.16,8.294a5.024,5.024,0,0,1,.014,7.412c-.474.437.234,1.143.707.707a6.028,6.028,0,0,0-.014-8.826c-.474-.434-1.183.272-.707.707Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const ki = /* @__PURE__ */ u(ma, [["render", ga]]), Ba = a({
  name: "CiSun",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ha(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Sun" }, [
        s("g", null, [
          s("path", { d: "M12,20.937a1.074,1.074,0,0,1-.94-.542L9.61,17.9a.084.084,0,0,0-.1-.041L6.728,18.6A1.087,1.087,0,0,1,5.4,17.272l.748-2.8a.088.088,0,0,0-.041-.1l-2.5-1.439a1.086,1.086,0,0,1,0-1.881L6.1,9.61a.087.087,0,0,0,.041-.1L5.4,6.728A1.087,1.087,0,0,1,6.728,5.4l2.8.748a.091.091,0,0,0,.1-.041l1.439-2.5A1.076,1.076,0,0,1,12,3.063h0a1.074,1.074,0,0,1,.94.542L14.39,6.1a.084.084,0,0,0,.1.041L17.272,5.4A1.087,1.087,0,0,1,18.6,6.728l-.748,2.8a.087.087,0,0,0,.041.1l2.5,1.439a1.086,1.086,0,0,1,0,1.881L17.9,14.39a.089.089,0,0,0-.041.1l.748,2.784A1.087,1.087,0,0,1,17.272,18.6l-2.8-.748a.089.089,0,0,0-.1.041l-1.439,2.5a1.076,1.076,0,0,1-.94.544ZM9.534,16.853a1.091,1.091,0,0,1,.942.541l1.448,2.5a.082.082,0,0,0,.075.043h0a.081.081,0,0,0,.074-.043l1.44-2.5a1.083,1.083,0,0,1,1.221-.507l2.8.747a.087.087,0,0,0,.106-.106l-.747-2.785a1.089,1.089,0,0,1,.5-1.222l2.5-1.448a.086.086,0,0,0,0-.15l-2.5-1.439a1.086,1.086,0,0,1-.507-1.221l.747-2.8a.08.08,0,0,0-.022-.083.086.086,0,0,0-.085-.023l-2.784.747a1.088,1.088,0,0,1-1.222-.5l-1.448-2.5A.082.082,0,0,0,12,4.063h0a.081.081,0,0,0-.074.043l-1.44,2.5a1.087,1.087,0,0,1-1.222.507l-2.8-.747a.087.087,0,0,0-.106.106L7.11,9.254a1.089,1.089,0,0,1-.5,1.222l-2.5,1.448A.082.082,0,0,0,4.063,12a.081.081,0,0,0,.043.074l2.5,1.44a1.087,1.087,0,0,1,.507,1.221l-.747,2.8a.08.08,0,0,0,.022.083.087.087,0,0,0,.085.023l2.784-.747A1.077,1.077,0,0,1,9.534,16.853Z" }),
          s("path", { d: "M12,15.875A3.875,3.875,0,1,1,15.875,12,3.88,3.88,0,0,1,12,15.875Zm0-6.75A2.875,2.875,0,1,0,14.875,12,2.879,2.879,0,0,0,12,9.125Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const wi = /* @__PURE__ */ u(Ba, [["render", ha]]), va = a({
  name: "CiTablets1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function $a(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Tablets_1",
        "data-name": "Tablets 1"
      }, [
        s("path", { d: "M14.76,3.065a6.171,6.171,0,0,0-6.11,5.58,6.159,6.159,0,1,0,6.71,6.71,6.159,6.159,0,0,0-.6-12.29ZM9.23,19.935A5.166,5.166,0,0,1,5.24,11.5l7.27,7.26A5.153,5.153,0,0,1,9.23,19.935Zm3.99-1.88-7.27-7.27a5.165,5.165,0,0,1,7.27,7.27Zm2.15-3.71a6.12,6.12,0,0,0-5.72-5.71,5.157,5.157,0,1,1,5.72,5.71Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const zi = /* @__PURE__ */ u(va, [["render", $a]]), Sa = a({
  name: "CiTempHigh",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ka(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Temp_High",
        "data-name": "Temp High"
      }, [
        s("g", null, [
          s("path", { d: "M14.863,13.4V4.939a2.929,2.929,0,0,0-.84-2.03,2.859,2.859,0,0,0-2.23-.82,2.948,2.948,0,0,0-2.66,3l.01,8.28a4.755,4.755,0,0,0,1.9,8.46,5.093,5.093,0,0,0,.95.09,4.759,4.759,0,0,0,4.76-4.75A4.684,4.684,0,0,0,14.863,13.4Zm-.48,6.66a3.783,3.783,0,0,1-3.15.78,3.7,3.7,0,0,1-2.92-2.98,3.745,3.745,0,0,1,1.43-3.69.962.962,0,0,0,.39-.77V5.089a1.968,1.968,0,0,1,1.73-2,.66.66,0,0,1,.14-.01,1.878,1.878,0,0,1,1.86,1.86V13.4a.962.962,0,0,0,.39.77,3.742,3.742,0,0,1,.13,5.89Z" }),
          s("path", { d: "M13.893,17.169a1.89,1.89,0,0,1-3.78,0,1.858,1.858,0,0,1,1.39-1.81V5.4a.5.5,0,0,1,1,0v9.96A1.869,1.869,0,0,1,13.893,17.169Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Zi = /* @__PURE__ */ u(Sa, [["render", ka]]), wa = a({
  name: "CiText",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function za(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Text" }, [
        s("path", { d: "M18.44,2.06H5.56a1.5,1.5,0,0,0-1.5,1.5v4.5a.5.5,0,0,0,1,0v-1H10V20.94H8a.5.5,0,0,0,0,1h8a.5.5,0,0,0,0-1H14V7.06h4.94v1a.5.5,0,0,0,1,0V3.56A1.5,1.5,0,0,0,18.44,2.06Zm.5,4H14a1,1,0,0,0-1,1V20.94H11V7.06a1,1,0,0,0-1-1H5.06V3.56a.5.5,0,0,1,.5-.5H18.44a.5.5,0,0,1,.5.5Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Mi = /* @__PURE__ */ u(wa, [["render", za]]), Za = a({
  name: "CiTextAlignCenter",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ma(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Text_Align_Center",
        "data-name": "Text Align Center"
      }, [
        s("g", null, [
          s("path", { d: "M20.437,4.063H3.563a.5.5,0,1,1,0-1H20.437a.5.5,0,1,1,0,1Z" }),
          s("path", { d: "M16.5,8.5h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z" }),
          s("path", { d: "M16.5,16.5h-9a.5.5,0,1,1,0-1h9a.5.5,0,1,1,0,1Z" }),
          s("path", { d: "M20.437,12.5H3.563a.5.5,0,0,1,0-1H20.437a.5.5,0,0,1,0,1Z" }),
          s("path", { d: "M20.437,20.937H3.563a.5.5,0,1,1,0-1H20.437a.5.5,0,0,1,0,1Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Ai = /* @__PURE__ */ u(Za, [["render", Ma]]), Aa = a({
  name: "CiTextAlignJustify",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ha(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Text_Align_Justify",
        "data-name": "Text Align Justify"
      }, [
        s("g", null, [
          s("path", { d: "M20.437,4.064H3.563a.5.5,0,0,1,0-1H20.437a.5.5,0,0,1,0,1Z" }),
          s("path", { d: "M20.437,8.5H3.563a.5.5,0,0,1,0-1H20.437a.5.5,0,0,1,0,1Z" }),
          s("path", { d: "M20.437,16.5H3.563a.5.5,0,1,1,0-1H20.437a.5.5,0,0,1,0,1Z" }),
          s("path", { d: "M20.437,12.5H3.563a.5.5,0,0,1,0-1H20.437a.5.5,0,0,1,0,1Z" }),
          s("path", { d: "M20.437,20.936H3.563a.5.5,0,1,1,0-1H20.437a.5.5,0,1,1,0,1Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Hi = /* @__PURE__ */ u(Aa, [["render", Ha]]), Va = a({
  name: "CiTextAlignLeft",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ia(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Text_Align_Left",
        "data-name": "Text Align Left"
      }, [
        s("g", null, [
          s("path", { d: "M20.438,4.063H3.563a.5.5,0,1,1,0-1H20.438a.5.5,0,1,1,0,1Z" }),
          s("path", { d: "M12.562,8.5h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z" }),
          s("path", { d: "M12.562,16.5h-9a.5.5,0,1,1,0-1h9a.5.5,0,0,1,0,1Z" }),
          s("path", { d: "M20.436,12.5H3.562a.5.5,0,1,1,0-1H20.436a.5.5,0,0,1,0,1Z" }),
          s("path", { d: "M20.436,20.937H3.562a.5.5,0,0,1,0-1H20.436a.5.5,0,0,1,0,1Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Vi = /* @__PURE__ */ u(Va, [["render", Ia]]), _a = a({
  name: "CiTextAlignRight",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ba(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Text_Align_Right",
        "data-name": "Text Align Right"
      }, [
        s("g", null, [
          s("path", { d: "M20.437,4.064H3.563a.5.5,0,0,1,0-1H20.437a.5.5,0,0,1,0,1Z" }),
          s("path", { d: "M20.437,8.5h-9a.5.5,0,1,1,0-1h9a.5.5,0,0,1,0,1Z" }),
          s("path", { d: "M20.437,16.5h-9a.5.5,0,1,1,0-1h9a.5.5,0,0,1,0,1Z" }),
          s("path", { d: "M20.437,12.5H3.563a.5.5,0,0,1,0-1H20.437a.5.5,0,0,1,0,1Z" }),
          s("path", { d: "M20.437,20.936H3.563a.5.5,0,1,1,0-1H20.437a.5.5,0,1,1,0,1Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Ii = /* @__PURE__ */ u(_a, [["render", ba]]), Oa = a({
  name: "CiTimer",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function La(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Timer" }, [
        s("g", null, [
          s("path", { d: "M2.336,9.685A9.934,9.934,0,0,0,13.592,21.808,9.931,9.931,0,0,0,20.708,7.23,10.046,10.046,0,0,0,12,2.072a.507.507,0,0,0-.5.5v4.2a.5.5,0,0,0,1,0v-4.2l-.5.5a8.935,8.935,0,0,1,8.433,11.892A8.938,8.938,0,0,1,6.468,19.027,9.041,9.041,0,0,1,3.3,9.951c.142-.627-.822-.9-.964-.266Z" }),
          s("path", { d: "M7.4,8.117a.5.5,0,0,1,.707-.707l4.243,4.242h0a.5.5,0,0,1-.707.707Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const _i = /* @__PURE__ */ u(Oa, [["render", La]]), ja = a({
  name: "CiTrashCan",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Pa(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Trash_Can",
        "data-name": "Trash Can"
      }, [
        s("g", null, [
          s("path", { d: "M19.45,4.06H15.27v-.5a1.5,1.5,0,0,0-1.5-1.5H10.23a1.5,1.5,0,0,0-1.5,1.5v.5H4.55a.5.5,0,0,0,0,1h.72l.42,14.45a2.493,2.493,0,0,0,2.5,2.43h7.62a2.493,2.493,0,0,0,2.5-2.43l.42-14.45h.72A.5.5,0,0,0,19.45,4.06Zm-9.72-.5a.5.5,0,0,1,.5-.5h3.54a.5.5,0,0,1,.5.5v.5H9.73Zm7.58,15.92a1.5,1.5,0,0,1-1.5,1.46H8.19a1.5,1.5,0,0,1-1.5-1.46L6.26,5.06H17.74Z" }),
          s("path", { d: "M8.375,8h0a.5.5,0,0,1,1,0l.25,10a.5.5,0,0,1-1,0Z" }),
          s("path", { d: "M15.625,8.007a.5.5,0,0,0-1,0h0l-.25,10a.5.5,0,0,0,1,0Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const bi = /* @__PURE__ */ u(ja, [["render", Pa]]), Da = a({
  name: "CiTrophy",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Fa(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Trophy" }, [
        s("path", { d: "M19.435,5.055h-.97c.01-.12.02-.24.02-.36a1.645,1.645,0,0,0-.45-1.18,1.462,1.462,0,0,0-1.05-.45H7.025a1.484,1.484,0,0,0-1.06.45,1.6,1.6,0,0,0-.44,1.18c0,.12.01.24.02.36h-.98a1.5,1.5,0,0,0-1.5,1.5v2a4.5,4.5,0,0,0,4.27,4.49c1.07,2.3,2.53,3.79,4.17,4.04v2.85h-4a.5.5,0,1,0,0,1h9a.5.5,0,0,0,0-1h-4v-2.85c1.64-.25,3.1-1.74,4.17-4.04a4.493,4.493,0,0,0,4.26-4.49v-2A1.5,1.5,0,0,0,19.435,5.055Zm-15.37,3.5v-2a.5.5,0,0,1,.5-.5h1.04a22.9,22.9,0,0,0,1.28,5.93A3.5,3.5,0,0,1,4.065,8.555Zm7.94,7.57c-2.82,0-5.23-5.04-5.48-11.47a.573.573,0,0,1,.16-.44.48.48,0,0,1,.34-.15h9.96a.442.442,0,0,1,.33.15.62.62,0,0,1,.17.44C17.235,11.085,14.825,16.125,12.005,16.125Zm7.93-7.57a3.508,3.508,0,0,1-2.8,3.42,23.353,23.353,0,0,0,1.27-5.92h1.03a.5.5,0,0,1,.5.5Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Oi = /* @__PURE__ */ u(Da, [["render", Fa]]), Ra = a({
  name: "CiTurnL1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ta(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Turn_L_1",
        "data-name": "Turn L 1"
      }, [
        s("path", { d: "M20.939,9.509v10.93a.508.508,0,0,1-.5.5.5.5,0,0,1-.5-.5V9.509a3.5,3.5,0,0,0-3.5-3.5h-9.9l-.01,1.44a.5.5,0,0,1-.81.4l-2.47-1.96a.5.5,0,0,1,0-.78l2.49-1.94a.5.5,0,0,1,.81.4l-.01,1.44h9.9A4.507,4.507,0,0,1,20.939,9.509Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Li = /* @__PURE__ */ u(Ra, [["render", Ta]]), qa = a({
  name: "CiTurnR1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ua(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Turn_R_1",
        "data-name": "Turn R 1"
      }, [
        s("path", { d: "M3.061,9.509v10.93a.508.508,0,0,0,.5.5.5.5,0,0,0,.5-.5V9.509a3.5,3.5,0,0,1,3.5-3.5h9.9l.01,1.44a.5.5,0,0,0,.81.4l2.47-1.96a.5.5,0,0,0,0-.78l-2.49-1.94a.5.5,0,0,0-.81.4l.01,1.44h-9.9A4.507,4.507,0,0,0,3.061,9.509Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const ji = /* @__PURE__ */ u(qa, [["render", Ua]]), Ga = a({
  name: "CiTwitter",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Wa(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Twitter" }, [
        s("path", { d: "M19.913,5.322a1.034,1.034,0,0,1,.837,1.629L19.708,8.432c-.064,5.086-1.765,8.539-5.056,10.264A10.917,10.917,0,0,1,9.6,19.835a12.233,12.233,0,0,1-6.2-1.524.76.76,0,0,1-.317-.8.768.768,0,0,1,.63-.6,20.6,20.6,0,0,0,3.745-.886C2,13.5,3.19,7.824,3.71,6.081a1.028,1.028,0,0,1,1.729-.422,9.931,9.931,0,0,0,5.995,2.95A4.188,4.188,0,0,1,12.725,5.3a4.125,4.125,0,0,1,5.7.02ZM4.521,17.794c1.862.872,6.226,1.819,9.667.016,2.955-1.549,4.476-4.732,4.521-9.461a.771.771,0,0,1,.142-.436l1.081-1.538-.041-.053c-.518-.007-1.029-.014-1.55,0a.835.835,0,0,1-.547-.221,3.13,3.13,0,0,0-4.383-.072,3.174,3.174,0,0,0-.935,2.87.646.646,0,0,1-.154.545.591.591,0,0,1-.516.205A10.924,10.924,0,0,1,4.722,6.354c-.67,2.078-1.52,7.094,3.869,9.065a.632.632,0,0,1,.416.538.625.625,0,0,1-.3.6A13.178,13.178,0,0,1,4.521,17.794ZM11.875,8.65h0Zm7.793-.161,0,0Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Pi = /* @__PURE__ */ u(Ga, [["render", Wa]]), Ea = a({
  name: "CiUmbrella",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Na(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Umbrella" }, [
        s("path", { d: "M12.5,4.06v-.5a.509.509,0,0,0-.15-.35.483.483,0,0,0-.7,0,.491.491,0,0,0-.15.35v.5a8.41,8.41,0,0,0-7.88,7.82.976.976,0,0,0,.27.74,1.029,1.029,0,0,0,.74.32H11.5v5.22a1.653,1.653,0,0,1-.62,1.54A1.528,1.528,0,0,1,8.5,18.54a.5.5,0,0,0-1,0,2.433,2.433,0,0,0,2.43,2.4,2.45,2.45,0,0,0,2.57-2.29c.08-1.39,0-2.81,0-4.2V12.94h6.87a1.029,1.029,0,0,0,.74-.32.976.976,0,0,0,.27-.74A8.41,8.41,0,0,0,12.5,4.06Zm6.87,7.88-14.75.01a7.4,7.4,0,0,1,14.76-.02C19.38,11.94,19.38,11.94,19.37,11.94Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Di = /* @__PURE__ */ u(Ea, [["render", Na]]), Qa = a({
  name: "CiUndo",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ka(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Undo" }, [
        s("path", { d: "M19.939,13.67A7.958,7.958,0,0,1,7.8,19.74a8.061,8.061,0,0,1-3.77-6.77.5.5,0,0,1,1,0,6.976,6.976,0,0,0,11,5.7,6.969,6.969,0,0,0-1-11.97,10.075,10.075,0,0,0-4.64-.69V7.46a.5.5,0,0,1-.81.39L7.109,5.9a.5.5,0,0,1,0-.79L9.6,3.17a.5.5,0,0,1,.8.4V5.01c.71-.01,1.43-.03,2.13.02a7.985,7.985,0,0,1,7.41,8.64Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Fi = /* @__PURE__ */ u(Qa, [["render", Ka]]), Ja = a({
  name: "CiUnlock",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ya(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Unlock" }, [
        s("g", null, [
          s("path", { d: "M17.44,9.33h-1.1c0-.97.01-1.95,0-2.92A4.343,4.343,0,0,0,8.36,4.04c-.36.53.51,1.03.87.5a3.365,3.365,0,0,1,5.23-.39c1.04,1.11.88,2.57.88,3.96V9.33H6.56a2.5,2.5,0,0,0-2.5,2.5v7.61a2.507,2.507,0,0,0,2.5,2.5H17.44a2.507,2.507,0,0,0,2.5-2.5V11.83A2.5,2.5,0,0,0,17.44,9.33Zm1.5,10.11a1.511,1.511,0,0,1-1.5,1.5H6.56a1.511,1.511,0,0,1-1.5-1.5V11.83a1.5,1.5,0,0,1,1.5-1.5H17.44a1.5,1.5,0,0,1,1.5,1.5Z" }),
          s("path", { d: "M13,14.95a.984.984,0,0,1-.5.86v1.5a.5.5,0,0,1-1,0v-1.5a.984.984,0,0,1-.5-.86,1,1,0,0,1,2,0Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Ri = /* @__PURE__ */ u(Ja, [["render", Ya]]), Xa = a({
  name: "CiUsb",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function xa(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Usb" }, [
        s("g", null, [
          s("path", { d: "M20.44,8.355H18.31v-.14a1.443,1.443,0,0,0-1.44-1.45H7.29a5.235,5.235,0,0,0,0,10.47h9.58a1.443,1.443,0,0,0,1.44-1.45v-.14h2.13a1.511,1.511,0,0,0,1.5-1.5V9.855A1.5,1.5,0,0,0,20.44,8.355Zm-3.13,7.43a.446.446,0,0,1-.44.45H7.29a4.235,4.235,0,0,1,0-8.47h9.58a.446.446,0,0,1,.44.45Zm3.63-1.64a.508.508,0,0,1-.5.5H18.31V9.355h2.13a.5.5,0,0,1,.5.5Z" }),
          s("path", { d: "M6.29,13.444A1.446,1.446,0,1,1,7.738,12,1.447,1.447,0,0,1,6.29,13.444Zm0-1.892A.446.446,0,1,0,6.738,12,.446.446,0,0,0,6.29,11.552Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Ti = /* @__PURE__ */ u(Xa, [["render", xa]]), el = a({
  name: "CiUser",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function sl(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "User" }, [
        s("g", null, [
          s("path", { d: "M17.438,21.937H6.562a2.5,2.5,0,0,1-2.5-2.5V18.61c0-3.969,3.561-7.2,7.938-7.2s7.938,3.229,7.938,7.2v.827A2.5,2.5,0,0,1,17.438,21.937ZM12,12.412c-3.826,0-6.938,2.78-6.938,6.2v.827a1.5,1.5,0,0,0,1.5,1.5H17.438a1.5,1.5,0,0,0,1.5-1.5V18.61C18.938,15.192,15.826,12.412,12,12.412Z" }),
          s("path", { d: "M12,9.911a3.924,3.924,0,1,1,3.923-3.924A3.927,3.927,0,0,1,12,9.911Zm0-6.847a2.924,2.924,0,1,0,2.923,2.923A2.926,2.926,0,0,0,12,3.064Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const qi = /* @__PURE__ */ u(el, [["render", sl]]), ol = a({
  name: "CiVault",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function tl(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Vault" }, [
        s("g", null, [
          s("path", { d: "M15.935,6.06H8.065a2,2,0,0,0-2,2v6a1.993,1.993,0,0,0,2,2h7.87a2,2,0,0,0,2-2v-6A2.006,2.006,0,0,0,15.935,6.06Zm1,8a1,1,0,0,1-1,1H8.065a.99.99,0,0,1-1-1v-6a1,1,0,0,1,1-1h7.87a1,1,0,0,1,1,1Z" }),
          s("path", { d: "M18.435,3.06H5.565a2.507,2.507,0,0,0-2.5,2.5v11a2.5,2.5,0,0,0,2.5,2.5v.38a1.5,1.5,0,0,0,1.5,1.5h1.43a1.5,1.5,0,0,0,1.5-1.5v-.38h4v.38a1.5,1.5,0,0,0,1.5,1.5h1.44a1.5,1.5,0,0,0,1.5-1.5v-.38a2.5,2.5,0,0,0,2.5-2.5v-11A2.507,2.507,0,0,0,18.435,3.06ZM8.995,19.44a.5.5,0,0,1-.5.5H7.065a.5.5,0,0,1-.5-.5v-.38h2.43Zm8.44,0a.5.5,0,0,1-.5.5H15.5a.508.508,0,0,1-.5-.5v-.38h2.44Zm2.5-2.88a1.5,1.5,0,0,1-1.5,1.5H5.565a1.5,1.5,0,0,1-1.5-1.5v-11a1.5,1.5,0,0,1,1.5-1.5h12.87a1.5,1.5,0,0,1,1.5,1.5Z" }),
          s("path", { d: "M14.265,10.56h-.61A1.656,1.656,0,0,0,12.5,9.4V8.79a.491.491,0,0,0-.5-.48.5.5,0,0,0-.5.48V9.4a1.656,1.656,0,0,0-1.16,1.16h-.61a.5.5,0,0,0-.48.5.491.491,0,0,0,.48.5h.61a1.656,1.656,0,0,0,1.16,1.16v.62a.489.489,0,0,0,.5.47.483.483,0,0,0,.5-.47v-.62a1.622,1.622,0,0,0,1.16-1.16h.61a.485.485,0,0,0,.48-.5A.491.491,0,0,0,14.265,10.56ZM12,11.81a.75.75,0,1,1,.75-.75A.749.749,0,0,1,12,11.81Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Ui = /* @__PURE__ */ u(ol, [["render", tl]]), al = a({
  name: "CiVial",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function ll(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Vial" }, [
        s("path", { d: "M20.779,9.441l-.48-.47L15.039,3.7l-.48-.48a.5.5,0,0,0-.7,0,.5.5,0,0,0,0,.71l.47.48L4.159,14.581a3.694,3.694,0,0,0,0,5.22l.04.04a3.706,3.706,0,0,0,5.23,0L19.6,9.671l.47.48a.52.52,0,0,0,.71,0A.513.513,0,0,0,20.779,9.441Zm-12.06,9.69a2.7,2.7,0,0,1-3.81,0l-.04-.04a2.7,2.7,0,0,1,0-3.81l1.7-1.7h7.71Zm6.56-6.55H7.569l7.47-7.46,3.85,3.85Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Gi = /* @__PURE__ */ u(al, [["render", ll]]), rl = a({
  name: "CiVideoOff",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function nl(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Video_Off",
        "data-name": "Video Off"
      }, [
        s("g", null, [
          s("path", { d: "M20.783,9.51v6.53a.5.5,0,0,1-1,0V9.6c0-.85.06-1.72,0-2.57-.03-.37-.27-.5-.61-.3-.39.22-.76.51-1.13.76-.73.49-1.47.99-2.2,1.49,0,.71-.01,1.41-.01,2.11a.5.5,0,0,1-1,0V9.12c0-.58.01-1.16,0-1.74a1.524,1.524,0,0,0-1.56-1.5c-1.22-.01-2.43,0-3.65,0a.5.5,0,0,1,0-1h2.13c.6,0,1.22-.05,1.81.01a2.54,2.54,0,0,1,2.27,2.5c0,.13.01.26,0,.39.77-.53,1.55-1.05,2.32-1.57a2.466,2.466,0,0,1,1.26-.6,1.364,1.364,0,0,1,1.37,1.36C20.813,7.81,20.783,8.67,20.783,9.51Z" }),
          s("path", { d: "M19.773,19.08q-6.5-6.51-12.99-13c-.62-.62-1.24-1.24-1.87-1.86-.45-.46-1.16.25-.7.71l.28.28A2.468,2.468,0,0,0,3.2,7.38v9.24a2.5,2.5,0,0,0,2.5,2.5h7.63a2.5,2.5,0,0,0,2.5-2.5v-.07l1.37,1.37c.62.62,1.24,1.24,1.87,1.86A.5.5,0,0,0,19.773,19.08Zm-4.94-2.46a1.5,1.5,0,0,1-1.5,1.5H5.7a1.5,1.5,0,0,1-1.5-1.5V7.38a1.5,1.5,0,0,1,1.04-1.42l9.59,9.59Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Wi = /* @__PURE__ */ u(rl, [["render", nl]]), il = a({
  name: "CiVideoOn",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function cl(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Video_On",
        "data-name": "Video On"
      }, [
        s("path", { d: "M21.05,5.05a1.433,1.433,0,0,0-1.48.08L16.25,7.37V6.56a2.5,2.5,0,0,0-2.5-2.5H4.69a2.5,2.5,0,0,0-2.5,2.5V17.44a2.5,2.5,0,0,0,2.5,2.5h9.06a2.5,2.5,0,0,0,2.5-2.5v-.81l3.32,2.24a1.5,1.5,0,0,0,.81.24,1.414,1.414,0,0,0,1.43-1.43V6.32A1.437,1.437,0,0,0,21.05,5.05Zm-5.8,12.39a1.5,1.5,0,0,1-1.5,1.5H4.69a1.5,1.5,0,0,1-1.5-1.5V6.56a1.5,1.5,0,0,1,1.5-1.5h9.06a1.5,1.5,0,0,1,1.5,1.5Zm5.56.24a.415.415,0,0,1-.23.38.425.425,0,0,1-.45-.02l-3.88-2.62V8.58l3.88-2.62a.425.425,0,0,1,.45-.02.415.415,0,0,1,.23.38Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Ei = /* @__PURE__ */ u(il, [["render", cl]]), pl = a({
  name: "CiViewBoard",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function dl(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "View_Board",
        "data-name": "View Board"
      }, [
        s("g", null, [
          s("path", { d: "M18.437,20.936H5.563a2.5,2.5,0,0,1-2.5-2.5V5.562a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5V18.436A2.5,2.5,0,0,1,18.437,20.936ZM5.563,4.062a1.5,1.5,0,0,0-1.5,1.5V18.436a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V5.562a1.5,1.5,0,0,0-1.5-1.5Z" }),
          s("path", { d: "M12.5,14.544a.5.5,0,0,1-1,0v-8h0a.5.5,0,0,1,1,0Z" }),
          s("path", { d: "M16.717,12.453a.5.5,0,0,1-1,0V6.544h0a.5.5,0,0,1,1,0Z" }),
          s("path", { d: "M8.28,6.544a.5.5,0,0,0-1,0h0v4a.5.5,0,0,0,1,0Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Ni = /* @__PURE__ */ u(pl, [["render", dl]]), ul = a({
  name: "CiViewColumn",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function fl(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "View_Column",
        "data-name": "View Column"
      }, [
        s("path", { d: "M18.44,3.06H5.56a2.507,2.507,0,0,0-2.5,2.5V18.44a2.514,2.514,0,0,0,2.5,2.5H18.44a2.514,2.514,0,0,0,2.5-2.5V5.56A2.507,2.507,0,0,0,18.44,3.06ZM8.67,19.94H5.56a1.511,1.511,0,0,1-1.5-1.5V5.56a1.5,1.5,0,0,1,1.5-1.5H8.67Zm1-15.88h4.66V19.94H9.67ZM19.94,18.44a1.511,1.511,0,0,1-1.5,1.5H15.33V4.06h3.11a1.5,1.5,0,0,1,1.5,1.5Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Qi = /* @__PURE__ */ u(ul, [["render", fl]]), yl = a({
  name: "CiViewList",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Cl(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "View_List",
        "data-name": "View List"
      }, [
        s("g", null, [
          s("path", { d: "M18.436,20.937H5.562a2.5,2.5,0,0,1-2.5-2.5V5.563a2.5,2.5,0,0,1,2.5-2.5H18.436a2.5,2.5,0,0,1,2.5,2.5V18.437A2.5,2.5,0,0,1,18.436,20.937ZM5.562,4.063a1.5,1.5,0,0,0-1.5,1.5V18.437a1.5,1.5,0,0,0,1.5,1.5H18.436a1.5,1.5,0,0,0,1.5-1.5V5.563a1.5,1.5,0,0,0-1.5-1.5Z" }),
          s("path", { d: "M6.544,8.283h0a.519.519,0,0,1-.353-.147.5.5,0,0,1,0-.707.512.512,0,0,1,.353-.146H7.55a.516.516,0,0,1,.353.146.5.5,0,0,1,.147.354.5.5,0,0,1-.5.5Z" }),
          s("path", { d: "M6.544,12.5h0a.523.523,0,0,1-.353-.146.5.5,0,0,1,0-.708.516.516,0,0,1,.353-.146H7.55a.521.521,0,0,1,.353.146.5.5,0,0,1,0,.708.516.516,0,0,1-.353.146Z" }),
          s("path", { d: "M6.544,16.72h0a.519.519,0,0,1-.353-.147.5.5,0,0,1,0-.707.516.516,0,0,1,.353-.146H7.55a.516.516,0,0,1,.353.146.5.5,0,0,1,.147.354.5.5,0,0,1-.5.5Z" }),
          s("path", { d: "M10.554,8.281h0a.5.5,0,0,1,0-1h6.9a.5.5,0,0,1,0,1Z" }),
          s("path", { d: "M10.554,12.5h0a.5.5,0,0,1,0-1h6.9a.5.5,0,0,1,0,1Z" }),
          s("path", { d: "M10.554,16.718h0a.5.5,0,0,1,0-1h6.9a.5.5,0,0,1,0,1Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Ki = /* @__PURE__ */ u(yl, [["render", Cl]]), ml = a({
  name: "CiViewTable",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function gl(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "View_Table",
        "data-name": "View Table"
      }, [
        s("path", { d: "M18.44,3.06H5.56a2.507,2.507,0,0,0-2.5,2.5V18.44a2.507,2.507,0,0,0,2.5,2.5H18.44a2.514,2.514,0,0,0,2.5-2.5V5.56A2.514,2.514,0,0,0,18.44,3.06ZM8.71,19.94H5.56a1.5,1.5,0,0,1-1.5-1.5V15.33H8.71Zm0-5.61H4.06V9.67H8.71Zm0-5.66H4.06V5.56a1.5,1.5,0,0,1,1.5-1.5H8.71Zm11.23,9.77a1.511,1.511,0,0,1-1.5,1.5H9.71V15.33H19.94Zm0-4.11H9.71V9.67H19.94Zm0-5.66H9.71V4.06h8.73a1.511,1.511,0,0,1,1.5,1.5Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Ji = /* @__PURE__ */ u(ml, [["render", gl]]), Bl = a({
  name: "CiViewTimeline",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function hl(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "View_Timeline",
        "data-name": "View Timeline"
      }, [
        s("g", null, [
          s("path", { d: "M18.436,20.94H5.562a2.5,2.5,0,0,1-2.5-2.5V5.567a2.5,2.5,0,0,1,2.5-2.5H18.436a2.5,2.5,0,0,1,2.5,2.5V18.44A2.5,2.5,0,0,1,18.436,20.94ZM5.562,4.067a1.5,1.5,0,0,0-1.5,1.5V18.44a1.5,1.5,0,0,0,1.5,1.5H18.436a1.5,1.5,0,0,0,1.5-1.5V5.567a1.5,1.5,0,0,0-1.5-1.5Z" }),
          s("path", { d: "M6.544,8.287h0a.5.5,0,0,1,0-1H12a.5.5,0,0,1,0,1Z" }),
          s("path", { d: "M9.271,12.5h0a.5.5,0,0,1,0-1h5.454a.5.5,0,0,1,0,1Z" }),
          s("path", { d: "M12,16.724h0a.5.5,0,0,1,0-1h5.455a.5.5,0,0,1,0,1Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Yi = /* @__PURE__ */ u(Bl, [["render", hl]]), vl = a({
  name: "CiVirus",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function $l(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Virus" }, [
        s("path", { d: "M5.86,19.905a.485.485,0,0,0,.35.15.469.469,0,0,0,.35-.15.483.483,0,0,0,0-.7l-.53-.53,1.74-1.74a6.426,6.426,0,0,0,3.73,1.54v2.46h-.75a.5.5,0,0,0,0,1h2.5a.5.5,0,1,0,0-1H12.5v-2.46a6.426,6.426,0,0,0,3.73-1.54l1.74,1.74-.53.53a.483.483,0,0,0,0,.7.469.469,0,0,0,.35.15.485.485,0,0,0,.35-.15l1.77-1.76a.513.513,0,0,0,0-.71.5.5,0,0,0-.71,0l-.52.53-1.74-1.74a6.435,6.435,0,0,0,1.54-3.73h2.46v.75a.5.5,0,0,0,.5.5.5.5,0,0,0,.5-.5v-2.5a.508.508,0,0,0-.5-.5.5.5,0,0,0-.5.5v.75H18.48a6.418,6.418,0,0,0-1.55-3.72l1.75-1.74.52.53a.508.508,0,0,0,.36.15.5.5,0,0,0,.35-.15.513.513,0,0,0,0-.71l-1.77-1.77a.5.5,0,0,0-.7,0,.5.5,0,0,0,0,.71l.53.53-1.74,1.74a6.382,6.382,0,0,0-3.73-1.55V3.065h.75a.5.5,0,0,0,.5-.5.5.5,0,0,0-.5-.5h-2.5a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h.75v2.45a6.382,6.382,0,0,0-3.73,1.55L6.03,5.325l.53-.53a.5.5,0,0,0,0-.71.5.5,0,0,0-.7,0L4.09,5.855a.513.513,0,0,0,0,.71.5.5,0,0,0,.35.15.508.508,0,0,0,.36-.15l.52-.53,1.75,1.74A6.418,6.418,0,0,0,5.52,11.5H3.06v-.75a.5.5,0,0,0-.5-.5.508.508,0,0,0-.5.5v2.5a.5.5,0,0,0,.5.5.5.5,0,0,0,.5-.5V12.5H5.52a6.435,6.435,0,0,0,1.54,3.73l-1.74,1.74-.52-.53a.5.5,0,0,0-.71,0,.513.513,0,0,0,0,.71Zm10.03-4.02A5.5,5.5,0,1,1,17.5,12,5.448,5.448,0,0,1,15.89,15.885Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const Xi = /* @__PURE__ */ u(vl, [["render", $l]]), Sl = a({
  name: "CiVoicemail",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function kl(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Voicemail" }, [
        s("path", { d: "M17.435,7.5a4.5,4.5,0,0,0-2.82,8H9.385a4.494,4.494,0,1,0-2.82,1h10.87a4.5,4.5,0,0,0,0-9ZM3.065,12a3.5,3.5,0,1,1,3.56,3.5h-.06A3.5,3.5,0,0,1,3.065,12Zm14.37,3.5h-.06a3.53,3.53,0,1,1,.06,0Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const xi = /* @__PURE__ */ u(Sl, [["render", kl]]), wl = a({
  name: "CiVolume",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function zl(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Volume" }, [
        s("path", { d: "M17.849,20.934a1.555,1.555,0,0,1-.781-.212l-4.16-2.4a3.769,3.769,0,0,0-1.877-.5H7.214a2.631,2.631,0,0,1-2.628-2.627V8.809A2.631,2.631,0,0,1,7.214,6.182h3.817a3.747,3.747,0,0,0,1.877-.5l4.16-2.4a1.564,1.564,0,0,1,2.346,1.354V19.369a1.57,1.57,0,0,1-1.565,1.565ZM7.214,7.182A1.63,1.63,0,0,0,5.586,8.809v6.382a1.629,1.629,0,0,0,1.628,1.627h3.817a4.756,4.756,0,0,1,2.377.637l4.16,2.4a.543.543,0,0,0,.563,0,.553.553,0,0,0,.283-.487V4.632a.565.565,0,0,0-.846-.489l-4.16,2.4a4.753,4.753,0,0,1-2.377.637Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const ec = /* @__PURE__ */ u(wl, [["render", zl]]), Zl = a({
  name: "CiVolumeHigh",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ml(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Volume_Hight",
        "data-name": "Volume Hight"
      }, [
        s("g", null, [
          s("path", { d: "M13.816,19.937a1.446,1.446,0,0,1-.717-.194L9.43,17.623a3.257,3.257,0,0,0-1.625-.434H4.439a2.379,2.379,0,0,1-2.375-2.376V9.187A2.378,2.378,0,0,1,4.439,6.812H7.805A3.257,3.257,0,0,0,9.43,6.376L13.1,4.259A1.437,1.437,0,0,1,15.255,5.5V18.5a1.424,1.424,0,0,1-.718,1.245A1.445,1.445,0,0,1,13.816,19.937ZM4.439,7.812A1.377,1.377,0,0,0,3.064,9.187v5.626a1.378,1.378,0,0,0,1.375,1.376H7.805a4.254,4.254,0,0,1,2.125.569L13.6,18.876a.439.439,0,0,0,.657-.38V5.5a.438.438,0,0,0-.657-.379L9.93,7.242a4.251,4.251,0,0,1-2.125.57Z" }),
          s("path", { d: "M18.407,6.262a7.79,7.79,0,0,1,.021,11.476c-.474.437.235,1.143.707.707a8.793,8.793,0,0,0-.021-12.89c-.474-.434-1.184.272-.707.707Z" }),
          s("path", { d: "M16.91,9.031a4.021,4.021,0,0,1,.012,5.938c-.474.438.234,1.143.707.707a5.025,5.025,0,0,0-.012-7.352c-.474-.434-1.183.272-.707.707Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const sc = /* @__PURE__ */ u(Zl, [["render", Ml]]), Al = a({
  name: "CiVolumeMute",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Hl(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Volume_Mute",
        "data-name": "Volume Mute"
      }, [
        s("g", null, [
          s("path", { d: "M13.817,19.936a1.424,1.424,0,0,1-.719-.2L9.43,17.624a3.254,3.254,0,0,0-1.625-.436H4.44a2.377,2.377,0,0,1-2.375-2.375V9.187A2.378,2.378,0,0,1,4.44,6.811H7.805A3.257,3.257,0,0,0,9.43,6.377L13.1,4.259A1.438,1.438,0,0,1,15.255,5.5V18.5a1.423,1.423,0,0,1-.718,1.245A1.439,1.439,0,0,1,13.817,19.936ZM4.44,7.811A1.377,1.377,0,0,0,3.065,9.187v5.626A1.377,1.377,0,0,0,4.44,16.188H7.805a4.247,4.247,0,0,1,2.125.571L13.6,18.876a.437.437,0,0,0,.439,0,.433.433,0,0,0,.218-.379V5.5a.438.438,0,0,0-.657-.379L9.93,7.242a4.25,4.25,0,0,1-2.125.569Z" }),
          s("path", { d: "M17.606,14.445a.5.5,0,0,1-.7-.711c.17-.169.34-.349.52-.52l1.21-1.209c-.57-.581-1.15-1.161-1.73-1.74a.5.5,0,0,1,.7-.71l1.74,1.739,1.74-1.739a.5.5,0,0,1,.7.71l-1.73,1.74,1.73,1.729a.5.5,0,0,1-.7.711L19.343,12.7Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const oc = /* @__PURE__ */ u(Al, [["render", Hl]]), Vl = a({
  name: "CiWallet",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Il(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Wallet" }, [
        s("g", null, [
          s("path", { d: "M19.435,4.065H4.565a2.5,2.5,0,0,0-2.5,2.5v10.87a2.5,2.5,0,0,0,2.5,2.5h14.87a2.5,2.5,0,0,0,2.5-2.5V6.565A2.5,2.5,0,0,0,19.435,4.065Zm1.5,9.93h-6.42a2,2,0,0,1,0-4h6.42Zm-6.42-5a3,3,0,0,0,0,6h6.42v2.44a1.5,1.5,0,0,1-1.5,1.5H4.565a1.5,1.5,0,0,1-1.5-1.5V6.565a1.5,1.5,0,0,1,1.5-1.5h14.87a1.5,1.5,0,0,1,1.5,1.5v2.43Z" }),
          s("circle", {
            cx: "14.519",
            cy: "11.996",
            r: "1"
          })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const tc = /* @__PURE__ */ u(Vl, [["render", Il]]), _l = a({
  name: "CiWarning",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function bl(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Warning" }, [
        s("g", null, [
          s("g", null, [
            s("path", { d: "M12.5,8.752a.5.5,0,0,0-1,0h0v6a.5.5,0,0,0,1,0Z" }),
            s("circle", {
              cx: "11.999",
              cy: "16.736",
              r: "0.5"
            })
          ]),
          s("path", { d: "M18.642,20.934H5.385A2.5,2.5,0,0,1,3.163,17.29L9.792,4.421a2.5,2.5,0,0,1,4.444,0L20.865,17.29a2.5,2.5,0,0,1-2.223,3.644ZM12.014,4.065a1.478,1.478,0,0,0-1.334.814L4.052,17.748a1.5,1.5,0,0,0,1.333,2.186H18.642a1.5,1.5,0,0,0,1.334-2.186L13.348,4.879A1.478,1.478,0,0,0,12.014,4.065Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const ac = /* @__PURE__ */ u(_l, [["render", bl]]), Ol = a({
  name: "CiWavePulse1",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ll(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Wave_Pulse_1",
        "data-name": "Wave Pulse 1"
      }, [
        s("path", { d: "M8.974,18h0a1.446,1.446,0,0,1-1.259-.972L5.872,12.883c-.115-.26-.262-.378-.349-.378H2.562a.5.5,0,1,1,0-1H5.523a1.444,1.444,0,0,1,1.263.972l1.839,4.145c.116.261.258.378.349.378h0c.088,0,.229-.113.344-.368L13.7,6.956A1.423,1.423,0,0,1,14.958,6h0a1.449,1.449,0,0,1,1.26.975l1.839,4.151c.11.249.259.379.349.379h3.028a.5.5,0,0,1,0,1H18.41a1.444,1.444,0,0,1-1.263-.975L15.308,7.379c-.116-.261-.259-.378-.35-.379h0c-.088,0-.229.114-.344.368l-4.385,9.676A1.437,1.437,0,0,1,8.974,18Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const lc = /* @__PURE__ */ u(Ol, [["render", Ll]]), jl = a({
  name: "CiWheat",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Pl(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Wheat" }, [
        s("path", { d: "M15.247,13.836a3.115,3.115,0,0,0,.79-2.78,1.053,1.053,0,0,0-.8-.81,3.1,3.1,0,0,0,.8-2.79,1.061,1.061,0,0,0-.82-.82,3.211,3.211,0,0,0-2.04.25A3.09,3.09,0,0,0,14,4.816a3.1,3.1,0,0,0-1.41-2.57,1.043,1.043,0,0,0-1.16-.01A3.124,3.124,0,0,0,10,4.816a3.052,3.052,0,0,0,.83,2.07,3.154,3.154,0,0,0-2.04-.25,1.048,1.048,0,0,0-.82.82,3.1,3.1,0,0,0,.79,2.79,1.041,1.041,0,0,0-.79.81,3.11,3.11,0,0,0,.78,2.78,1.071,1.071,0,0,0-.78.82,3.031,3.031,0,0,0,3,3.7,2.436,2.436,0,0,0,.53-.05v3.15a.5.5,0,0,0,1,0v-3.15a2.469,2.469,0,0,0,.54.05,3.054,3.054,0,0,0,2.17-.88,3.124,3.124,0,0,0,.83-2.82A1.083,1.083,0,0,0,15.247,13.836Zm-3.83,3.48a2.12,2.12,0,0,1-1.92-.55,2.041,2.041,0,0,1-.51-1.96,2.558,2.558,0,0,1,.47-.04,1.984,1.984,0,0,1,1.45.59A2.011,2.011,0,0,1,11.417,17.316Zm0-3.6a2.112,2.112,0,0,1-1.92-.55,2.022,2.022,0,0,1-.51-1.95,1.93,1.93,0,0,1,.47-.05,1.984,1.984,0,0,1,1.45.59A2.011,2.011,0,0,1,11.417,13.716Zm0-3.6a2.112,2.112,0,0,1-1.92-.55,2.022,2.022,0,0,1-.51-1.95,2.592,2.592,0,0,1,.47-.05,1.984,1.984,0,0,1,1.45.59A2.011,2.011,0,0,1,11.417,10.116Zm.56-3.55A2.1,2.1,0,0,1,11,4.816a2.005,2.005,0,0,1,1.04-1.74A2.1,2.1,0,0,1,13,4.816,2.054,2.054,0,0,1,11.977,6.566Zm2.53,10.2a2.072,2.072,0,0,1-1.96.51,2.384,2.384,0,0,1-.05-.45v-.02a2.065,2.065,0,0,1,.59-1.46,1.99,1.99,0,0,1,1.4-.57,2.279,2.279,0,0,1,.57.07A2.14,2.14,0,0,1,14.507,16.766Zm0-3.6a2.047,2.047,0,0,1-1.96.51,2.384,2.384,0,0,1-.05-.45v-.02a2.024,2.024,0,0,1,.59-1.45,1.957,1.957,0,0,1,1.4-.58,2.863,2.863,0,0,1,.57.07A2.14,2.14,0,0,1,14.507,13.166Zm0-3.6a2.024,2.024,0,0,1-1.96.51,2.384,2.384,0,0,1-.05-.45v-.02a2.024,2.024,0,0,1,.59-1.45,1.955,1.955,0,0,1,1.41-.57,2.259,2.259,0,0,1,.56.07A2.12,2.12,0,0,1,14.507,9.566Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const rc = /* @__PURE__ */ u(jl, [["render", Pl]]), Dl = a({
  name: "CiWiFiOff",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Fl(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Wi-Fi_Off",
        "data-name": "Wi-Fi Off"
      }, [
        s("g", { id: "Icon" }, [
          s("path", { d: "M10.37,6.564a12.392,12.392,0,0,1,10.71,3.93c.436.476,1.141-.233.708-.708A13.324,13.324,0,0,0,10.37,5.564c-.631.076-.638,1.077,0,1Z" }),
          s("path", { d: "M13.907,10.283A8.641,8.641,0,0,1,18.349,12.9c.434.477,1.139-.232.707-.707a9.586,9.586,0,0,0-4.883-2.871c-.626-.146-.893.818-.266.965Z" }),
          s("circle", {
            cx: "12.003",
            cy: "16.922",
            r: "1.12"
          }),
          s("path", { d: "M19.773,19.06a.5.5,0,0,1-.71.71l-5.84-5.84A4.478,4.478,0,0,0,8.7,15.24c-.43.48-1.14-.23-.71-.7a5.47,5.47,0,0,1,4.06-1.78l-2.37-2.37a8.693,8.693,0,0,0-4.03,2.53c-.43.48-1.13-.23-.7-.71A9.439,9.439,0,0,1,8.893,9.6L6.883,7.59a12.557,12.557,0,0,0-3.96,2.94.5.5,0,1,1-.7-.71,13.109,13.109,0,0,1,3.91-2.98l-1.9-1.9a.5.5,0,0,1,.71-.71Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const nc = /* @__PURE__ */ u(Dl, [["render", Fl]]), Rl = a({
  name: "CiWiFiOn",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Tl(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", {
        id: "Wi-Fi_On",
        "data-name": "Wi-Fi On"
      }, [
        s("g", { id: "Icon" }, [
          s("path", { d: "M2.922,10.777a12.194,12.194,0,0,1,18.155-.034c.436.476,1.141-.233.707-.707a13.189,13.189,0,0,0-19.569.034c-.432.475.273,1.184.707.707Z" }),
          s("path", { d: "M5.654,13.169a8.615,8.615,0,0,1,12.691-.024c.437.475,1.143-.234.707-.707a9.621,9.621,0,0,0-14.106.024c-.433.474.272,1.184.708.707Z" }),
          s("path", { d: "M8.7,15.492a4.47,4.47,0,0,1,6.6-.013c.438.474,1.143-.235.707-.707a5.475,5.475,0,0,0-8.015.013c-.434.474.271,1.183.707.707Z" }),
          s("circle", {
            cx: "11.999",
            cy: "17.172",
            r: "1.12"
          })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const ic = /* @__PURE__ */ u(Rl, [["render", Tl]]), ql = a({
  name: "CiYoutube",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Ul(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("g", { id: "Youtube" }, [
        s("g", null, [
          s("path", { d: "M19.437,19.937H4.562a2.5,2.5,0,0,1-2.5-2.5V6.563a2.5,2.5,0,0,1,2.5-2.5H19.437a2.5,2.5,0,0,1,2.5,2.5V17.437A2.5,2.5,0,0,1,19.437,19.937ZM4.562,5.063a1.5,1.5,0,0,0-1.5,1.5V17.437a1.5,1.5,0,0,0,1.5,1.5H19.437a1.5,1.5,0,0,0,1.5-1.5V6.563a1.5,1.5,0,0,0-1.5-1.5Z" }),
          s("path", { d: "M14.568,11.149,10.6,8.432a1.032,1.032,0,0,0-1.614.851v5.434a1.032,1.032,0,0,0,1.614.851l3.972-2.717A1.031,1.031,0,0,0,14.568,11.149Z" })
        ])
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const cc = /* @__PURE__ */ u(ql, [["render", Ul]]), Gl = a({
  name: "CiZoomIn",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Wl(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("rect", {
        id: "Zoom-In",
        "serif:id": "Zoom In",
        x: "0",
        y: "0",
        width: "24",
        height: "24",
        style: { fill: "none" }
      }, null, -1),
      s("g", {
        id: "Zoom-In1",
        "serif:id": "Zoom In"
      }, [
        s("path", { d: "M16.279,17.039c-1.396,1.209 -3.216,1.941 -5.206,1.941c-4.393,0 -7.96,-3.567 -7.96,-7.96c-0,-4.393 3.567,-7.96 7.96,-7.96c4.393,0 7.96,3.567 7.96,7.96c-0,2.044 -0.772,3.909 -2.04,5.319l0.165,0.165c1.194,1.194 2.388,2.388 3.583,3.582c0.455,0.456 -0.252,1.163 -0.707,0.708l-3.755,-3.755Zm1.754,-6.019c-0,-3.841 -3.119,-6.96 -6.96,-6.96c-3.842,0 -6.96,3.119 -6.96,6.96c-0,3.841 3.118,6.96 6.96,6.96c3.841,0 6.96,-3.119 6.96,-6.96Zm-7.46,0.5l-1.5,0c-0.645,0 -0.643,-1 -0,-1l1.5,0l-0,-1.5c-0,-0.645 1,-0.643 1,0l-0,1.5l1.5,0c0.645,0 0.643,1 -0,1l-1.5,0l-0,1.5c-0,0.645 -1,0.643 -1,0l-0,-1.5Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const pc = /* @__PURE__ */ u(Gl, [["render", Wl]]), El = a({
  name: "CiZoomOut",
  components: {
    BaseIcon: d
  },
  props: {
    size: {
      type: String,
      default: "1em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    strokeColor: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    },
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    cssClass() {
      return this.class ? this.class : "";
    }
  }
});
function Nl(e, o, f, y, C, m) {
  const t = l("BaseIcon");
  return n(), r(t, {
    size: e.size,
    color: e.color,
    strokeColor: e.strokeColor,
    class: c(e.cssClass),
    style: i(e.style),
    viewBox: e.viewBox
  }, {
    default: p(() => o[0] || (o[0] = [
      s("rect", {
        id: "Zoom-Out",
        "serif:id": "Zoom Out",
        x: "0",
        y: "0",
        width: "24",
        height: "24",
        style: { fill: "none" }
      }, null, -1),
      s("g", {
        id: "Zoom-Out1",
        "serif:id": "Zoom Out"
      }, [
        s("path", { d: "M16.279,17.039c-1.396,1.209 -3.216,1.941 -5.206,1.941c-4.393,0 -7.96,-3.567 -7.96,-7.96c-0,-4.393 3.567,-7.96 7.96,-7.96c4.393,0 7.96,3.567 7.96,7.96c-0,2.044 -0.772,3.909 -2.04,5.319l0.165,0.165c1.194,1.194 2.388,2.388 3.583,3.582c0.455,0.456 -0.252,1.163 -0.707,0.708l-3.755,-3.755Zm1.754,-6.019c-0,-3.841 -3.119,-6.96 -6.96,-6.96c-3.842,0 -6.96,3.119 -6.96,6.96c-0,3.841 3.118,6.96 6.96,6.96c3.841,0 6.96,-3.119 6.96,-6.96Zm-4.96,-0.5c0.645,0 0.643,1 -0,1l-4,0c-0.645,0 -0.643,-1 -0,-1l4,0Z" })
      ], -1)
    ])),
    _: 1
  }, 8, ["size", "color", "strokeColor", "class", "style", "viewBox"]);
}
const dc = /* @__PURE__ */ u(El, [["render", Nl]]);
export {
  Kr as $,
  kr as A,
  wr as B,
  Jl as C,
  zr as D,
  Zr as E,
  Mr as F,
  Ar as G,
  Hr as H,
  Vr as I,
  Ir as J,
  _r as K,
  br as L,
  Or as M,
  Lr as N,
  jr as O,
  Pr as P,
  Dr as Q,
  Fr as R,
  Rr as S,
  Tr as T,
  qr as U,
  Ur as V,
  Gr as W,
  Wr as X,
  Er as Y,
  Nr as Z,
  Qr as _,
  Yl as a,
  ln as a$,
  Jr as a0,
  Yr as a1,
  Xr as a2,
  xr as a3,
  e4 as a4,
  s4 as a5,
  o4 as a6,
  t4 as a7,
  a4 as a8,
  l4 as a9,
  _4 as aA,
  b4 as aB,
  O4 as aC,
  L4 as aD,
  j4 as aE,
  P4 as aF,
  D4 as aG,
  F4 as aH,
  R4 as aI,
  T4 as aJ,
  q4 as aK,
  U4 as aL,
  G4 as aM,
  W4 as aN,
  E4 as aO,
  N4 as aP,
  Q4 as aQ,
  K4 as aR,
  J4 as aS,
  Y4 as aT,
  X4 as aU,
  x4 as aV,
  en as aW,
  sn as aX,
  on as aY,
  tn as aZ,
  an as a_,
  r4 as aa,
  n4 as ab,
  i4 as ac,
  c4 as ad,
  p4 as ae,
  d4 as af,
  u4 as ag,
  f4 as ah,
  y4 as ai,
  C4 as aj,
  m4 as ak,
  g4 as al,
  B4 as am,
  h4 as an,
  v4 as ao,
  $4 as ap,
  S4 as aq,
  k4 as ar,
  w4 as as,
  z4 as at,
  Z4 as au,
  M4 as av,
  A4 as aw,
  H4 as ax,
  V4 as ay,
  I4 as az,
  Xl as b,
  m3 as b$,
  rn as b0,
  nn as b1,
  cn as b2,
  pn as b3,
  dn as b4,
  un as b5,
  fn as b6,
  yn as b7,
  Cn as b8,
  mn as b9,
  Un as bA,
  Gn as bB,
  Wn as bC,
  En as bD,
  Nn as bE,
  Qn as bF,
  Kn as bG,
  Jn as bH,
  Yn as bI,
  Xn as bJ,
  xn as bK,
  e3 as bL,
  s3 as bM,
  o3 as bN,
  t3 as bO,
  a3 as bP,
  l3 as bQ,
  r3 as bR,
  n3 as bS,
  i3 as bT,
  c3 as bU,
  p3 as bV,
  d3 as bW,
  u3 as bX,
  f3 as bY,
  y3 as bZ,
  C3 as b_,
  gn as ba,
  Bn as bb,
  hn as bc,
  vn as bd,
  $n as be,
  Sn as bf,
  kn as bg,
  wn as bh,
  zn as bi,
  Zn as bj,
  Mn as bk,
  An as bl,
  Hn as bm,
  Vn as bn,
  In as bo,
  _n as bp,
  bn as bq,
  On as br,
  Ln as bs,
  jn as bt,
  Pn as bu,
  Dn as bv,
  Fn as bw,
  Rn as bx,
  Tn as by,
  qn as bz,
  xl as c,
  Zi as c$,
  g3 as c0,
  B3 as c1,
  h3 as c2,
  v3 as c3,
  $3 as c4,
  S3 as c5,
  k3 as c6,
  w3 as c7,
  z3 as c8,
  Z3 as c9,
  x3 as cA,
  ei as cB,
  si as cC,
  oi as cD,
  ti as cE,
  ai as cF,
  li as cG,
  ri as cH,
  ni as cI,
  ii as cJ,
  ci as cK,
  pi as cL,
  di as cM,
  ui as cN,
  fi as cO,
  yi as cP,
  Ci as cQ,
  mi as cR,
  gi as cS,
  Bi as cT,
  hi as cU,
  vi as cV,
  $i as cW,
  Si as cX,
  ki as cY,
  wi as cZ,
  zi as c_,
  M3 as ca,
  A3 as cb,
  H3 as cc,
  V3 as cd,
  I3 as ce,
  _3 as cf,
  b3 as cg,
  O3 as ch,
  L3 as ci,
  j3 as cj,
  P3 as ck,
  D3 as cl,
  F3 as cm,
  R3 as cn,
  T3 as co,
  q3 as cp,
  U3 as cq,
  G3 as cr,
  W3 as cs,
  E3 as ct,
  N3 as cu,
  Q3 as cv,
  K3 as cw,
  J3 as cx,
  Y3 as cy,
  X3 as cz,
  er as d,
  Mi as d0,
  Ai as d1,
  Hi as d2,
  Vi as d3,
  Ii as d4,
  _i as d5,
  bi as d6,
  Oi as d7,
  Li as d8,
  ji as d9,
  ic as dA,
  cc as dB,
  pc as dC,
  dc as dD,
  Pi as da,
  Di as db,
  Fi as dc,
  Ri as dd,
  Ti as de,
  qi as df,
  Ui as dg,
  Gi as dh,
  Wi as di,
  Ei as dj,
  Ni as dk,
  Qi as dl,
  Ki as dm,
  Ji as dn,
  Yi as dp,
  Xi as dq,
  xi as dr,
  ec as ds,
  sc as dt,
  oc as du,
  tc as dv,
  ac as dw,
  lc as dx,
  rc as dy,
  nc as dz,
  sr as e,
  or as f,
  tr as g,
  ar as h,
  lr as i,
  rr as j,
  nr as k,
  ir as l,
  cr as m,
  pr as n,
  dr as o,
  ur as p,
  fr as q,
  yr as r,
  Cr as s,
  mr as t,
  gr as u,
  Br as v,
  hr as w,
  vr as x,
  $r as y,
  Sr as z
};
