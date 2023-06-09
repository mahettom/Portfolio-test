import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'


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
        scale={isMobile ? 16 : 30}
        position={isMobile ? [0, 0, 0] : [0, 0, 1, 5]}
      // rotation={[0, 0, 0]}
      />
    </mesh>
  )
}


const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // ———————————————————————  store the actual width of the page
    const mediaQuery = window.matchMedia("(max-width: 500px)")
    setIsMobile(mediaQuery.matches)
    // ————————————————— litsten for mediaChange and handle update
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    // ——————————————————————— if change occur, trigger handleChange
    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])


  return (

    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [0, 15, 100], fov: 4.8 }}
      gl={{ preserveDrawingBuffer: true }}>

      <Suspense fallback={''}>

        <OrbitControls enableZoom={false} />
        <Computers isMobile={isMobile} />

      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export { ComputersCanvas };
