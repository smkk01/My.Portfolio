const STORAGE_KEY = 'portfolio-contact-messages'

export function saveContactMessage(message) {
  let stored
  try {
    stored = window.localStorage.getItem(STORAGE_KEY)
  } catch (error) {
    throw new Error('This browser blocked access to local storage. Allow site storage and try again.', { cause: error })
  }

  let messages = []

  if (stored) {
    try {
      const parsed = JSON.parse(stored)
      if (!Array.isArray(parsed)) throw new Error('Stored messages are not a list.')
      messages = parsed
    } catch (error) {
      throw new Error('Saved messages could not be read. Clear this site’s contact-message storage and try again.', { cause: error })
    }
  }

  const savedMessage = {
    ...message,
    id: window.crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...messages, savedMessage]))
  } catch (error) {
    const storageMessage = error instanceof DOMException && error.name === 'QuotaExceededError'
      ? 'Browser storage is full, so your message could not be saved. Free up site storage and try again.'
      : 'Your message could not be saved in browser storage. Check your browser storage settings and try again.'
    throw new Error(storageMessage, { cause: error })
  }

  return savedMessage
}
