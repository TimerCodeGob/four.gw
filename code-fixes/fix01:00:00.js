import * as Three from
"https://cdn.jsdelivr.net/npm/three@0.161.0/build/three.module.js";

// Global Object
window.My = { ...Three };

// --- MENU CSS ---
const style = document.createElement('style');
style.innerHTML = `
    #menu-fourgw {
        position: absolute;
        top: 20px;
        left: 20px;
        width: 100px;
        height: 100px;
        background-color: red;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: lime;
        font-family: Arial, sans-serif;
        font-weight: bold;
        font-size: 14px;
        z-index: 100;
        box-shadow: 0 0 15px rgba(255,0,0,0.5);
        user-select: none;
    }
`;
document.head.appendChild(style);

// --- MENU HTML ---
const menu = document.createElement('div');
menu.id = 'menu-fourgw';
menu.innerHTML = 'Four.gw<br>&copy;';
document.body.appendChild(menu);

// --- HELPERS ---
window.My.animate = function(callback) {
    function loop() {
        requestAnimationFrame(loop);
        callback();
    }
    loop();
};

window.My.createRenderer = function(canvas) {
    const renderer = new Three.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    return renderer;
};

window.My.Vector4 = function(x = 0, y = 0, z = 0, a = 0) { 
    return { x, y, z, a }; 
};

window.My.project4Dto3D = function(v4, distance = 5) {
    const w = 1 / (distance - v4.a);
    return new Three.Vector3(v4.x * w, v4.y * w, v4.z * w);
};
