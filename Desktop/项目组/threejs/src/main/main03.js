// import "./style.css";
import * as THREE from "three";

//导入轨道控制器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

//导入动画库
import gsap from "gsap";

//导入dat.gui
import * as dat from "dat.gui";

//使用控制器查看3d物体

//1.创建场景
const scene = new THREE.Scene();

//2.创建相机
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
// 设置相机位置
camera.position.set(0, 0, 10);
scene.add(camera);

//添加物体
const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xfff00 });

//根据几何体和材质创建物体
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

const gui = new dat.GUI();
gui
  .add(cube.position, "x")
  .min(0)
  .max(5)
  .step(0.01)
  .name("移动x坐标")
  .onChange((val) => {
    console.log("值被修改了", val);
  })
  .onFinishChange(() => {
    console.log("完全停下来");
  });

//修改物体颜色
let params = {
  color: "#ffff00",
  fn: () => {
    //让立方体运动起来
    gsap.to(cube.position, { x: 5, duration: 2, yoyo: true, repeat: -1 });
  },
};
gui.addColor(params, "color").onChange((value) => {
  console.log("修改了颜色");
  cube.material.color.set(value);
});

gui.add(cube, "visible").name("是否显示");
//点击是否显隐,设置选项框
gui.add(params, "fn").name("立方运动");

const folder = gui.addFolder("设置立方体");
folder.add(cube.material, "wireframe");
//修改物体位置
// cube.position.set(5, 0, 0);
// cube.position.x = 5;
//缩放位置
// cube.scale.set(3, 2, 1);
// cube.scale.x = 3;

//旋转
cube.rotation.set(Math.PI / 4, 0, 0, "XZY");

//将几何体添加到场景
scene.add(cube);

//初始化渲染器
const renderer = new THREE.WebGL1Renderer();

//渲染的尺寸大小
renderer.setSize(window.innerWidth, window.innerHeight);
console.log("renderer-", renderer);
document.body.appendChild(renderer.domElement);

// renderer.render(scene, camera);

//创建轨道控制器
const controls = new OrbitControls(camera, renderer.domElement); //关了可以开控制台

//设置控制器阻尼，效果更真实
controls.enableDamping = true;

//添加坐标轴辅助器
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

//设置时钟
const clock = new THREE.Clock();

//  设置动画
var animate1 = gsap.to(cube.position, {
  x: 5,
  duration: 5,
  ease: "power1.inOut",
  //无限次数-1
  repeat: 2,
  //往返运动
  yoyo: true,
  //延迟会员
  delay: 2,
  onComplete: () => {
    console.log("动画结束");
  },
  onStart: () => {
    console.log("动画开始");
  },
});
gsap.to(cube.rotation, {
  x: 2 * Math.PI,
  duration: 5,
  ease: "power1.inOut",
  repeat: 2,
});

window.addEventListener("dblclick", () => {
  const fullScreenElement = document.fullscreenElement;
  if (!fullScreenElement) {
    //进入或退出全屏
    renderer.domElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});
function render() {
  controls.update();
  //   console.log(time);
  //   cube.position.x += 0.01;
  //   cube.rotation.x += 0.01;

  //   let t = (time / 1000) % 5;
  //   cube.position.x = t * 1;
  //   if (cube.position.x > 5) {
  //     cube.position.x = 0;
  //   }
  //获取时钟运行的总时长
  //   let time = clock.getElapsedTime();
  //   let deltaTime = clock.getDelta();
  //   console.log(deltaTime, "time", time);
  renderer.render(scene, camera);
  //渲染下一贞
  requestAnimationFrame(render);
}
render();

//监听画面的变化，更新渲染画面
window.addEventListener("resize", () => {
  console.log("画面变化了");
  //更新摄像头
  camera.aspect = window.innerWidth / window.innerHeight;
  //更新摄像头投影矩阵
  camera.updateProjectionMatrix();
  //更新渲染器
  renderer.setSize(window.innerWidth, window.innerHeight);

  //设置渲染器像素比
  renderer.setPixelRatio(window.devicePixelRatio);
});
