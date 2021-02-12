import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls, Sky, PerspectiveCamera, Stars, Environment } from '@react-three/drei';
import Huge from './Huge';
import Floor from './Floor';
// import Model from './Silvusafterchrome';
// import Decoy from './Silvusafterchromeex';
import Sil from './Sil';
import Siltwo from './Siltwo';
import Model from './Klaspic';

const Home = () => {
	return (
		<Canvas pixelRatio={[1, 2]} camera={{ position: [10, 2, 0], fov: 60 }}>
			<ambientLight position={[0, 4, 0]} intensity={5} lookAt={[0, 0, 0]} />
			{/* <PerspectiveCamera /> */}
			{/* <pointLight position={[0, 9, 0]} lookAt={[0, 0, 0]} /> */}
			<pointLight shadow position={[3, 2, -1]} intensity={0.5} />
			<ambientLight intensity={0.5} color={'white'} />
			{/* <directionalLight position={[-3, 0, -2]} intensity={0.1} />
			<directionalLight position={[3, 2, 2]} intensity={0.1} />
			<directionalLight position={[3, 3, -2]} intensity={0.1} /> */}
			<OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={true} enablePan={true} />
			<axesHelper />
			<Suspense fallback={null}>
				<Floor />
				<Stars />
				<Environment files="royal_esplanade_1k.hdr" />
				<Sky sunPosition={[100, 10, 100]} />
				{/* <Huge /> */}
				<Model position={[0, -3, 0]} />
				<Siltwo position={[-1, 0, -1]} />
				{/* <Sil /> */}
				{/* <Decoy /> */}
			</Suspense>
		</Canvas>
	);
};

export default Home;
