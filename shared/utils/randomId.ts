export default function randomId(): string {
  if ('crypto' in window && crypto.randomUUID) {
    return crypto.randomUUID()
  }

  return String(new Date().getTime())
}
