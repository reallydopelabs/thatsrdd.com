export default function (func, time = 100) {
  let lastTime = 0
  return () => {
    const now = new Date()
    if (now - lastTime >= time) {
      func()
      time = now
    }
  }
}
