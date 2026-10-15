import { useEffect } from 'react'

const baseUrl = 'https://smkk01.github.io/portfolio/'

function updateMeta(selector, attribute, value) {
  const element = document.querySelector(selector)
  if (element) element.setAttribute(attribute, value)
}

export function usePageMeta(title, description) {
  useEffect(() => {
    const fullTitle = `${title} | Khin Khin Su Mon`
    document.title = fullTitle
    updateMeta('meta[name="description"]', 'content', description)
    updateMeta('meta[property="og:title"]', 'content', fullTitle)
    updateMeta('meta[property="og:description"]', 'content', description)
    updateMeta('meta[name="twitter:title"]', 'content', fullTitle)
    updateMeta('meta[name="twitter:description"]', 'content', description)
    updateMeta('meta[property="og:url"]', 'content', baseUrl)
    updateMeta('link[rel="canonical"]', 'href', baseUrl)
  }, [title, description])
}
