"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRules = void 0;
const Criterion_1 = require("@civ-clone/core-rule/Criterion");
const Effect_1 = require("@civ-clone/core-rule/Effect");
const Year_1 = require("@civ-clone/core-game-year/Rules/Year");
const getRules = () => [
    new Year_1.default(new Criterion_1.default((turn) => turn < 252), new Effect_1.default((turn) => turn * 20 - 4020)),
    new Year_1.default(new Criterion_1.default((turn) => turn > 251), new Criterion_1.default((turn) => turn < 302), new Effect_1.default((turn) => (turn - 251) * 10 + 1000)),
    new Year_1.default(new Criterion_1.default((turn) => turn > 301), new Criterion_1.default((turn) => turn < 352), new Effect_1.default((turn) => (turn - 301) * 5 + 1500)),
    new Year_1.default(new Criterion_1.default((turn) => turn > 351), new Criterion_1.default((turn) => turn < 402), new Effect_1.default((turn) => (turn - 351) * 2 + 1750)),
    new Year_1.default(new Criterion_1.default((turn) => turn > 401), new Effect_1.default((turn) => turn - 401 + 1850)),
];
exports.getRules = getRules;
exports.default = exports.getRules;
//# sourceMappingURL=year.js.map