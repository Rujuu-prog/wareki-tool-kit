/**
Convert a given date string to the corresponding Japanese calendar format.
@param dateString - The input date string in ISO 8601 format (e.g., '2023-03-21', '2023/03/21').
@param isFirstYearToNumber - Optional flag indicating whether to represent the first year of an era as a number (default is false; the first year will be represented as '元').
@param isPadZero - Optional flag to zero fill (default is false; Not Zero-Filled).
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
@see {@link https://github.com/Rujuu-prog/wareki-tool-kit} for the canonical source repository
*/
export declare function toJapaneseCalendar(dateString: string, isFirstYearToNumber?: boolean, isPadZero?: boolean): string;
