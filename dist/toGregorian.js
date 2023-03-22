"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toGregorian = void 0;
var eraList_1 = require("./eraList");
/**
 * Converts a Japanese date string to a Gregorian date string.
 *
 * @param dateString - The Japanese date string to be converted (e.g. "令和3年02月12日").
 * @param separate - The separator to use for the Gregorian date string. Defaults to 'k', which will use the format "YYYY年MM月DD日". Use any other character for a custom separator (e.g. '-' for "YYYY-MM-DD").
 * @param isPadZero - Whether to pad the month and day with a leading zero if they are less than 10. Defaults to false.
 * @returns - The Gregorian date string in the format specified by the `separate` parameter.
 * @throws - Throws an error if the input `dateString` is invalid or if the year is not supported.
 * @example
 * // returns '2023年3月21日'
 * toGregorian('令和5年3月21日')
 * @example
 * // returns '2023/3/21'
 * toGregorian('令和5年3月21日', '/')
 * @example
 * // returns '2023-3-21'
 * toGregorian('令和5年3月21日', '-')
 * @example
 * // returns '2023-03-21'
 * toGregorian('令和5年3月21日', '-', true)
 * @see {@link https://github.com/Rujuu-prog/wareki-tool-kit} for the canonical source repository
 */
function toGregorian(dateString, separate, isPadZero) {
    if (separate === void 0) { separate = 'k'; }
    if (isPadZero === void 0) { isPadZero = false; }
    // Replace "元" with "1" if present in the dateString
    var dateStringReplaced = dateString.replace(/元/, '1');
    var eraNames = eraList_1.eraList.map(function (e) { return e.name; }).join('|');
    var regex = new RegExp("^(".concat(eraNames, ")(\\d+)\u5E74(\\d+)\u6708(\\d+)\u65E5$"));
    var matches = dateStringReplaced.match(regex);
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
    var paddedMonth = isPadZero ? String(month).padStart(2, '0') : month;
    var paddedDay = isPadZero ? String(day).padStart(2, '0') : day;
    // 区切り文字切り替え
    if (separate === 'k') {
        return "".concat(gregorianYear, "\u5E74").concat(paddedMonth, "\u6708").concat(paddedDay, "\u65E5");
    }
    else {
        return "".concat(gregorianYear).concat(separate).concat(paddedMonth).concat(separate).concat(paddedDay);
    }
}
exports.toGregorian = toGregorian;
//# sourceMappingURL=toGregorian.js.map