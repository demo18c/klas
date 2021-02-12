import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from 'react-three-fiber';
import { Sphere } from '@react-three/drei';

const Huge = () => {
	const group = useRef();
	useFrame(() => (group.current.rotation.x = group.current.rotation.z += 0.01));
	return (
		<group ref={group} dispose={null}>
			<Sphere>
				<meshStandardMaterial roughness={0} color={'blue'} emissive={new THREE.Color(0x440000)} />
			</Sphere>

			{/* <mesh position={[0, 3, 2]} rotation={[Math.PI / 2, 0, 0]}>
				<sphereGeometry attach="geometry" />
				<meshStandardMaterial roughness={0.2} color={'blue'} emissive={new THREE.Color(0x440000)} /> */}
			{/* </mesh> */}
		</group>
	);
};

export default Huge;
