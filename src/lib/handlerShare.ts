const handlerShare = async ({ text, url }: { text: string; url: string }) => {
  const intent = 'https://x.com/intent/post'
  window.open(`${intent}?text=${encodeURIComponent(text)}&url=%0A%0A${encodeURIComponent(url)}`)
}

export { handlerShare }
export default handlerShare
