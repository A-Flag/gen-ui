// import "./style.css";
import * as THREE from "three";

//导入轨道控制器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

//导入动画库
import gsap from "gsap";
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
  console.log(animate1);
  if (animate1.isActive()) {
    animate1.pause();
  } else {
    animate1.resume();
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
