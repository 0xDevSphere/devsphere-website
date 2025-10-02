export function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    // Avoid duplicate loads
    const existing = Array.from(document.scripts).find((s) => s.src === src)
    if (existing) {
      if ((existing as any)._loaded) return resolve()
      existing.addEventListener("load", () => resolve())
      existing.addEventListener("error", () => reject(new Error(`Failed to load script: ${src}`)))
      return
    }

    const script = document.createElement("script")
    script.src = src
    script.async = true
    script.defer = true
    ;(script as any)._loaded = false
    script.onload = () => {
      ;(script as any)._loaded = true
      resolve()
    }
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`))
    document.head.appendChild(script)
  })
}
