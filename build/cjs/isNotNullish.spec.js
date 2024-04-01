"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isNotNullish_js_1 = require("./isNotNullish.js");
describe('isNotNullish', () => {
    test('`null` returns false', () => {
        expect((0, isNotNullish_js_1.isNotNullish)(null)).toEqual(false);
    });
    test('`undefined` returns false', () => {
        expect((0, isNotNullish_js_1.isNotNullish)(undefined)).toEqual(false);
    });
    test('`0` returns true', () => {
        expect((0, isNotNullish_js_1.isNotNullish)(0)).toEqual(true);
    });
    test("`''` returns true", () => {
        expect((0, isNotNullish_js_1.isNotNullish)('')).toEqual(true);
    });
});
//# sourceMappingURL=isNotNullish.spec.js.map