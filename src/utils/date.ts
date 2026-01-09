import { format } from 'date-fns';

/**
 * Formats a date in UTC to avoid timezone shift issues.
 * When dates are stored as YYYY-MM-DD without time, they're parsed as midnight UTC.
 * Formatting in local time can shift the displayed date back by a day.
 */
export function formatDateUTC(date: Date, formatStr: string = 'MMM d, yyyy'): string {
  // Adjust for timezone offset to ensure we format the UTC date
  const utcDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
  return format(utcDate, formatStr);
}
