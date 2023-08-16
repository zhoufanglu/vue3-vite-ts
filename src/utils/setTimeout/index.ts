function onTimeout(callback: () => void, delay: number) {
  const timeout = setTimeout(callback, delay)
  return () => {
    clearTimeout(timeout)
  }
}

const cancelTimeout = onTimeout(() => {
  // do something
}, 0)

// on destroy
cancelTimeout()
