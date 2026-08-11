import { ArrowRight, Warning, Info, CheckCircle } from "@phosphor-icons/react/dist/ssr"

interface StatusBannerProps {
  lastUpdated?: string
  status?: "operational" | "disrupted" | "unknown"
  whatsappNumber?: string
}

export function StatusBanner({
  lastUpdated = new Date().toLocaleDateString("en-KE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
  status = "unknown",
  whatsappNumber = "254717344440",
}: StatusBannerProps) {
  const statusConfig = {
    operational: {
      icon: <CheckCircle size={18} weight="fill" className="shrink-0" aria-hidden="true" />,
      borderClass: "border-emerald-500",
      bgClass: "bg-emerald-50",
      textClass: "text-emerald-900",
      subtextClass: "text-emerald-700",
      buttonClass: "bg-emerald-600 hover:bg-emerald-700",
      label: "eTIMS appears operational",
      message: "eTIMS is working normally at our last check.",
    },
    disrupted: {
      icon: <Warning size={18} weight="fill" className="shrink-0" aria-hidden="true" />,
      borderClass: "border-orange-500",
      bgClass: "bg-orange-50",
      textClass: "text-orange-900",
      subtextClass: "text-orange-700",
      buttonClass: "bg-orange-600 hover:bg-orange-700",
      label: "eTIMS may be experiencing issues",
      message: "Check the steps below for offline invoicing while KRA resolves the issue.",
    },
    unknown: {
      icon: <Info size={18} weight="fill" className="shrink-0" aria-hidden="true" />,
      borderClass: "border-amber-500",
      bgClass: "bg-amber-50",
      textClass: "text-amber-900",
      subtextClass: "text-amber-700",
      buttonClass: "bg-amber-600 hover:bg-amber-700",
      label: "eTIMS status unconfirmed",
      message: "Check KRA's official channels or contact us for real-time status.",
    },
  }

  const config = statusConfig[status]

  return (
    <div
      className={`border-l-4 ${config.borderClass} ${config.bgClass} p-4 rounded-r-lg mb-8`}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-start gap-3">
        <div className={`${config.textClass} mt-0.5`}>{config.icon}</div>
        <div className="flex-1">
          <p className={`font-semibold ${config.textClass} text-[0.9rem]`}>
            {config.label}: {config.message}
          </p>
          <p className={`text-sm ${config.subtextClass} mt-1`}>
            Last checked: {lastUpdated}
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hi%2C%20I%20need%20help%20with%20eTIMS%20right%20now`}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 ${config.buttonClass} text-white font-semibold py-2 px-4 rounded text-sm mt-3 transition-colors`}
          >
            WhatsApp us for help now
            <ArrowRight size={14} weight="bold" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  )
}
