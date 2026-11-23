export function Aurora() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[#080B14]" />
      <div className="animate-drift absolute -top-40 left-[8%] h-[34rem] w-[34rem] rounded-full bg-violet-600/25 blur-3xl" />
      <div className="animate-drift-slow absolute top-[18%] -right-24 h-[28rem] w-[28rem] rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute bottom-[-8rem] left-[-4rem] h-[24rem] w-[32rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:76px_76px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
    </div>
  );
}
