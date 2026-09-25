import Criterion from '@civ-clone/core-rule/Criterion';
import Effect from '@civ-clone/core-rule/Effect';
import Year from '@civ-clone/core-game-year/Rules/Year';

export const getRules: () => Year[] = (): Year[] => [
  new Year(
    new Criterion((turn: number): boolean => turn < 252),
    new Effect((turn: number): number => turn * 20 - 4020)
  ),
  new Year(
    new Criterion((turn: number): boolean => turn > 251),
    new Criterion((turn: number): boolean => turn < 302),
    new Effect((turn: number): number => (turn - 251) * 10 + 1000)
  ),
  new Year(
    new Criterion((turn: number): boolean => turn > 301),
    new Criterion((turn: number): boolean => turn < 352),
    new Effect((turn: number): number => (turn - 301) * 5 + 1500)
  ),
  new Year(
    new Criterion((turn: number): boolean => turn > 351),
    new Criterion((turn: number): boolean => turn < 402),
    new Effect((turn: number): number => (turn - 351) * 2 + 1750)
  ),
  new Year(
    new Criterion((turn: number): boolean => turn > 401),
    new Effect((turn: number): number => turn - 401 + 1850)
  ),
];

export default getRules;
