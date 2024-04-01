"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isNotNull_js_1 = require("./isNotNull.js");
describe('isNotNull', () => {
    test('`null` returns false', () => {
        expect((0, isNotNull_js_1.isNotNull)(null)).toEqual(false);
    });
    test('`undefined` returns true', () => {
        expect((0, isNotNull_js_1.isNotNull)(undefined)).toEqual(true);
    });
    test('`0` returns true', () => {
        expect((0, isNotNull_js_1.isNotNull)(0)).toEqual(true);
    });
    test("`''` returns true", () => {
        expect((0, isNotNull_js_1.isNotNull)('')).toEqual(true);
    });
});
//# sourceMappingURL=isNotNull.spec.js.map