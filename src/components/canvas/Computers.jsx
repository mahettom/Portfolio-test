import { meshBounds, OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../Loader'
import CanvasLoader from '../Loader'


const Computers = ({ isMobile }) => {

  const computer = useGLTF('./hero_model/scene.gltf')

  return (


    <mesh>
      <hemisphereLight intensity={0.30} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 30]}
        intensity={1}
      />

      <primitive
        object={computer.scene}
        scale={isMobile ? 22 : 30}
        position={isMobile ? [0, 0, 2.2] : [0, 0, 1, 5]}
      // rotation={[0, 0, 0]}
      />
    </mesh>
  )
}


const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {

    const mediaQuery = window.matchMedia("(max-width: 500px)")
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])



  return (

    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [0, 15, 100], fov: 5 }}
      gl={{ preserveDrawingBuffer: true }}>

      <Suspense fallback={<CanvasLoader />}>

        <OrbitControls enableZoom={false} />
        <Computers isMobile={isMobile} />

      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export { ComputersCanvas };
