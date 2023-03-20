"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toJapaneseCalendar = void 0;
var eraList_1 = require("./eraList");
function toJapaneseCalendar(dateString, isFirstYearToNumber) {
    if (isFirstYearToNumber === void 0) { isFirstYearToNumber = false; }
    var date = new Date(dateString);
    if (isNaN(date.getTime())) {
        throw new Error('Invalid date');
    }
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var era = eraList_1.eraList.find(function (era) { return year >= era.startYear; });
    if (era == null) {
        throw new Error('The entered year is not supported.');
    }
    var eraYear = year - era.startYear + 1;
    if (eraYear === 1 && isFirstYearToNumber) {
        return "".concat(era.name, "\u5143\u5E74").concat(month, "\u6708").concat(day, "\u65E5");
    }
    else {
        return "".concat(era.name).concat(eraYear, "\u5E74").concat(month, "\u6708").concat(day, "\u65E5");
    }
}
exports.toJapaneseCalendar = toJapaneseCalendar;
//# sourceMappingURL=toJapaneseCalendar.js.map