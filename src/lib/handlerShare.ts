const handlerShare = async ({ text, url }) => {
  const intent = 'https://x.com/intent/post'
  window.open(`${intent}?text=${encodeURIComponent(text)}$url=${encodeURIComponent(url)}`)
}

export { handlerShare }
export default handlerShare
