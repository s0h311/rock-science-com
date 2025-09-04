export function getTimeString(dateAsString: Date | string): string {
  return new Intl.DateTimeFormat('de-DE', {
    timeStyle: 'medium',
  }).format(new Date(dateAsString))
}

export function getDateString(dateAsString: Date | string): string {
  return new Intl.DateTimeFormat('de-DE', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(dateAsString))
}
