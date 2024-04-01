"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isNotEmptyString_js_1 = require("./isNotEmptyString.js");
describe('isNotEmptyString', () => {
    test("`''` returns false", () => {
        expect((0, isNotEmptyString_js_1.isNotEmptyString)('')).toEqual(false);
    });
    test('`undefined` returns true', () => {
        expect((0, isNotEmptyString_js_1.isNotEmptyString)(undefined)).toEqual(true);
    });
    test('`null` returns true', () => {
        expect((0, isNotEmptyString_js_1.isNotEmptyString)(null)).toEqual(true);
    });
    test('`0` returns true', () => {
        expect((0, isNotEmptyString_js_1.isNotEmptyString)(0)).toEqual(true);
    });
});
//# sourceMappingURL=isNotEmptyString.spec.js.map