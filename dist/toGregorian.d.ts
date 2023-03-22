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
export declare function toGregorian(dateString: string, separate?: string, isPadZero?: boolean): string;
