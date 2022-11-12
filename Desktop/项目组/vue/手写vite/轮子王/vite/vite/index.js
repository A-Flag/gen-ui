const Koa = require("koa");
const fs = require("fs");
const path = require("path");
const app = new Koa();

app.use(async (ctx) => {
  const { url, query } = ctx.request;
  console.log("url", url);
  // /=>index.html

  if (url === "/") {
    ctx.type = "text/html";
    let content = fs.readFileSync("./index.html", "utf-8");
    content = content.replace(
      "<script",
      `<script>
      window.process={env:{NODE_ENV:'dev'}}
      </script>
      <script`
    );
    ctx.body = content;
  } else if (url.endsWith(".js")) {
    const p = path.resolve(__dirname, url.slice(1));
    const content = fs.readFileSync(p, "utf-8");
    ctx.type = "application/javascript";
    ctx.body = rewriteImport(content);
  } else if (url.startsWith("/@modules")) {
    ///@modules/vue=> 代码位置/node_modules/vue/ 的es模块入口
    const prefix = path.resolve(
      __dirname,
      "node_modules",
      url.replace("/@modules/", "")
    );

    //读取package.json的module属性
    const module = require(prefix + "/package.json").module;
    //dist/vue.runtime.esm-bundler.js

    const p = path.resolve(prefix, module);
    const ret = fs.readFileSync(p, "utf-8");
    ctx.type = "application/javascript";
    ctx.body = rewriteImport(ret);
  }
  //src/mian.js=>xxxx/src/main.js
  //*js=>src/*.js

  //第三方库支持

  //需要改写，欺骗浏览器'vue'=>'./@modules'=>别名
  //fron 'xxx'
  //vue =>node_moules/***
  function rewriteImport(content) {
    //正则
    return content.replace(/ from ['|"]([^'"]+)['|"]/g, function (s0, s1) {
      if (s1[0] !== "." && s1[1] !== "/") {
        //是不是一个绝对路径或者是相对路径/ 或../ ./
        return ` from '/@modules/${s1}'`;
      } else {
        return s0;
      }
    });
  }
});
app.listen(3000, () => {
  console.log("vite -- start--3000");
});
