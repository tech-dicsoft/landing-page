import { Canvas } from "@react-three/fiber";
import HeroScene from "./HeroScene";

export default function Hero(): React.ReactElement {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          className="w-full h-full"
          gl={{ alpha: true, antialias: true }}
        >
          <HeroScene />
        </Canvas>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-white/60 to-white" aria-hidden />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dic-blue-dark tracking-tight">
          DIC SOFT
        </h1>
        <p className="mt-2 text-lg sm:text-xl text-dic-blue font-medium">
          Digital Innovation Computing Solutions
        </p>
        <p className="mt-6 text-xl sm:text-2xl text-gray-700 font-light">
          &ldquo;Delivering tech excellence for global businesses&rdquo;
        </p>
        <p className="mt-4 text-dic-cyan font-semibold text-lg sm:text-xl">
          Let&apos;s make awesome things that matter
        </p>
      </div>
    </section>
  );
}
