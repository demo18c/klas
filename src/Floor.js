import React from 'react';
import { Plane } from '@react-three/drei';
import { RGB_PVRTC_2BPPV1_Format } from 'three';
function Floor() {
	return (
		<Plane args={[100, 100]} position={[0, -2, 0]} rotation={[Math.PI / 2, Math.PI, 0]}>
			<meshStandardMaterial attache="material" color="grey" />
		</Plane>
	);
}

export default Floor;
