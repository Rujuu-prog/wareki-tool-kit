"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toJapaneseCalendar = void 0;
var eraList_1 = require("./eraList");
/**
Convert a given date string to the corresponding Japanese calendar format.
@param dateString - The input date string in ISO 8601 format (e.g., '2023-03-21').
@param isFirstYearToNumber - Optional flag indicating whether to represent the first year of an era as a number (default is false; the first year will be represented as '元').
@returns The date string in the Japanese calendar format (e.g., '令和5年3月21日').
@throws If the input date string is invalid or the year is not supported.
@example
// returns '令和5年3月21日'
toJapaneseCalendar('2023-03-21');
@example
// returns '令和元年5月1日'
toJapaneseCalendar('2019-05-01');
@example
// returns '令和1年5月1日'
toJapaneseCalendar('2019-05-01', true);
@see {@link https://github.com/username/reponame} for the canonical source repository
*/
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