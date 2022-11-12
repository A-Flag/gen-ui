// import "./style.css";
import * as THREE from "three";

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

//将几何体添加到场景
scene.add(cube);

//初始化渲染器
const renderer = new THREE.WebGL1Renderer();

//渲染的尺寸大小
renderer.setSize(window.innerWidth, window.innerHeight);
console.log("renderer-", renderer);
document.body.appendChild(renderer.domElement);

renderer.render(scene, camera);
