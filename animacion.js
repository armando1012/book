  		// workaround for chrome bug: https://code.google.com/p/chromium/issues/detail?id=35980#c12
  		if (window.innerWidth === 0) { window.innerWidth = parent.innerWidth;
  		    window.innerHeight = parent.innerHeight; }

  		var camera, scene, renderer;
  		var geometry, material, mesh;

  		init();
  		animate();

  		function init() {

  		    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 2, 1000);
  		    camera.position.z = 400;

  		    scene = new THREE.Scene();

  		    geometry = new THREE.IcosahedronGeometry(100, 1);
  		    material = new THREE.MeshBasicMaterial({ color: 0xDDDDDD, wireframe: true, wireframeLinewidth: 1 });

  		    mesh = new THREE.Mesh(geometry, material);
  		    scene.add(mesh);

  		    renderer = new THREE.CanvasRenderer();
  		    renderer.setSize(window.innerWidth, window.innerHeight);

  		    document.body.appendChild(renderer.domElement);

  		}

  		function animate() {

  		    requestAnimationFrame(animate);

  		    mesh.rotation.x += 0.03;
  		    mesh.rotation.y += 0.02;

  		    renderer.render(scene, camera);

  		}