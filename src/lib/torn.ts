// Deterministic "torn paper" clip-path. Same seed, same tear, every build.
function rng(seed: number) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function torn(seed: number, depth = 1.6, steps = 14): string {
  const r = rng(seed);
  const pts: string[] = [];
  const j = () => (r() * depth).toFixed(2);
  for (let i = 0; i <= steps; i++) pts.push(`${((i / steps) * 100).toFixed(1)}% ${j()}%`);
  for (let i = 1; i <= Math.ceil(steps / 2); i++) pts.push(`${(100 - +j() * 0.6).toFixed(2)}% ${((i / Math.ceil(steps / 2)) * 100).toFixed(1)}%`);
  for (let i = steps - 1; i >= 0; i--) pts.push(`${((i / steps) * 100).toFixed(1)}% ${(100 - +j()).toFixed(2)}%`);
  for (let i = Math.ceil(steps / 2) - 1; i >= 1; i--) pts.push(`${(+j() * 0.6).toFixed(2)}% ${((i / Math.ceil(steps / 2)) * 100).toFixed(1)}%`);
  return `polygon(${pts.join(', ')})`;
}

// Small deterministic tilt in degrees, for stickers and scraps.
export function tilt(i: number, max = 3): string {
  const r = rng(i * 7919 + 13);
  return ((r() * 2 - 1) * max).toFixed(2);
}
