"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toJapaneseCalendar = void 0;
var eraList_1 = require("./eraList");
/**
* Convert a given date string to the corresponding Japanese calendar format.
* @param dateString - The input date string in ISO 8601 format (e.g., '2023-03-21', '2023/03/21').
* @param isFirstYearToNumber - Optional flag indicating whether to represent the first year of an era as a number (default is false; the first year will be represented as '元').
* @param isPadZero - Optional flag to zero fill (default is false; Not Zero-Filled).
* @returns The date string in the Japanese calendar format (e.g., '令和5年3月21日').
* @throws If the input date string is invalid or the year is not supported.
* @example
* // returns '令和5年3月21日'
* toJapaneseCalendar('2023-03-21');
* @example
* // returns '令和元年5月1日'
* toJapaneseCalendar('2019-05-01');
* @example
* // returns '令和1年5月1日'
* toJapaneseCalendar('2019-05-01', true);
* @see {@link https://github.com/Rujuu-prog/wareki-tool-kit} for the canonical source repository
*/
function toJapaneseCalendar(dateString, isFirstYearToNumber, isPadZero) {
    if (isFirstYearToNumber === void 0) { isFirstYearToNumber = false; }
    if (isPadZero === void 0) { isPadZero = false; }
    var date = parseDateString(dateString);
    // const date = new Date(dateString)
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
    var paddedMonth = isPadZero ? String(month).padStart(2, '0') : month;
    var paddedDay = isPadZero ? String(day).padStart(2, '0') : day;
    if (eraYear === 1 && !isFirstYearToNumber) {
        return "".concat(era.name, "\u5143\u5E74").concat(paddedMonth, "\u6708").concat(paddedDay, "\u65E5");
    }
    else {
        return "".concat(era.name).concat(eraYear, "\u5E74").concat(paddedMonth, "\u6708").concat(paddedDay, "\u65E5");
    }
}
exports.toJapaneseCalendar = toJapaneseCalendar;
function parseDateString(dateString) {
    // Try ISO 8601 format (e.g., '2023-03-21', '2023/03/21')
    var date = new Date(dateString);
    if (!isNaN(date.getTime())) {
        return date;
    }
    // Try 'YYYY年MM月DD日' format
    var match = dateString.match(/^(\d{4})年(\d{1,2})月(\d{1,2})日$/);
    if (match != null) {
        var year = parseInt(match[1], 10);
        var month = parseInt(match[2], 10) - 1; // Note: month is 0-indexed in JavaScript Date objects
        var day = parseInt(match[3], 10);
        date = new Date(year, month, day);
        if (!isNaN(date.getTime())) {
            return date;
        }
    }
    throw new Error('Invalid date');
}
//# sourceMappingURL=toJapaneseCalendar.js.map