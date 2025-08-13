// Minimal GA4 initializer for Vite/SPA
// Reads the measurement ID from the caller and injects the gtag script

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: any[]) => void
  }
}

export function initGoogleAnalytics(measurementId?: string) {
  if (!measurementId) return
  if (typeof window === "undefined") return

  // Prevent duplicate injection
  if (document.getElementById("ga4-script")) return

  const script = document.createElement("script")
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  script.id = "ga4-script"
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  function gtag() {
    // @ts-expect-error variadic args
    window.dataLayer.push(arguments)
  }
  window.gtag = gtag
  gtag("js", new Date())
  gtag("config", measurementId)
}


