"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isNotUndefined_js_1 = require("./isNotUndefined.js");
describe('isNotUndefined', () => {
    test('`undefined` returns false', () => {
        expect((0, isNotUndefined_js_1.isNotUndefined)(undefined)).toEqual(false);
    });
    test('`null` returns true', () => {
        expect((0, isNotUndefined_js_1.isNotUndefined)(null)).toEqual(true);
    });
    test('`0` returns true', () => {
        expect((0, isNotUndefined_js_1.isNotUndefined)(0)).toEqual(true);
    });
    test("`''` returns true", () => {
        expect((0, isNotUndefined_js_1.isNotUndefined)('')).toEqual(true);
    });
});
//# sourceMappingURL=isNotUndefined.spec.js.map