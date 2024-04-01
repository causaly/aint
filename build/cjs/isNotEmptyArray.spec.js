"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isNotEmptyArray_js_1 = require("./isNotEmptyArray.js");
describe('isNotEmptyArray', () => {
    test('`[]` returns false', () => {
        expect((0, isNotEmptyArray_js_1.isNotEmptyArray)([])).toEqual(false);
    });
    test('`[null]` returns true', () => {
        expect((0, isNotEmptyArray_js_1.isNotEmptyArray)([null])).toEqual(true);
    });
    test('`[undefined]` returns true', () => {
        expect((0, isNotEmptyArray_js_1.isNotEmptyArray)([undefined])).toEqual(true);
    });
    test('populated array returns true', () => {
        expect((0, isNotEmptyArray_js_1.isNotEmptyArray)([1])).toEqual(true);
    });
});
//# sourceMappingURL=isNotEmptyArray.spec.js.map