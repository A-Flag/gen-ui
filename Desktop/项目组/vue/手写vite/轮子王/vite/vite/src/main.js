import { str } from "./moduleA.js";
console.log("vite---");

//能够支持第三方库
import { createApp, h } from "vue";

const App = {
  render() {
    //<div><div>hei vite</div></div>
    return h("div", null, [h, "div", null, String("hei vite")]);
  },
};

createApp(App).mount("#app");
