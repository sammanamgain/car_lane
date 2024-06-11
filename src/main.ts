import "./style.css";
let canvas: HTMLElement = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.width = 720;
canvas.height = 560;
ctx.fillStyle = "black";
ctx.fillRect(100, 100, 500, 1000);
