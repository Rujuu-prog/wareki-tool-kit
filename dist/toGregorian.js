"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toGregorian = void 0;
var eraList_1 = require("./eraList");
function toGregorian(dateString, separate) {
    if (separate === void 0) { separate = 'k'; }
    var eraNames = eraList_1.eraList.map(function (e) { return e.name; }).join('|');
    var regex = new RegExp("^(".concat(eraNames, ")(\\d+)\u5E74(\\d+)\u6708(\\d+)\u65E5$"));
    var matches = dateString.match(regex);
    if (matches == null) {
        throw new Error('Invalid date');
    }
    var eraName = matches[1];
    var yearInEra = parseInt(matches[2], 10);
    var month = parseInt(matches[3], 10);
    var day = parseInt(matches[4], 10);
    var era = eraList_1.eraList.find(function (e) { return e.name === eraName; });
    if (era === undefined) {
        throw new Error('The entered year is not supported.');
    }
    var gregorianYear = era.startYear + yearInEra - 1;
    // 区切り文字切り替え
    if (separate === 'k') {
        return "".concat(gregorianYear, "\u5E74").concat(month, "\u6708").concat(day, "\u65E5");
    }
    else {
        return "".concat(gregorianYear).concat(separate).concat(month).concat(separate).concat(day);
    }
}
exports.toGregorian = toGregorian;
//# sourceMappingURL=toGregorian.js.map