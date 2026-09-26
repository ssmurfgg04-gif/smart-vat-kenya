import { FACTS } from "@/src/lib/vat-facts"
import { WA_PATHS } from "@/src/lib/whatsapp"

// Restored floating WhatsApp CTA (desktop pill + mobile sticky bar).
// Same surfaces as the component removed in cc11f84, new number, and every
// link routes through the internal counted /wa/ redirect instead of wa.me.
export function WhatsAppButton() {
  return (
    <>
      {/* Desktop: floating pill */}
      <a
        href={WA_PATHS.quote}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with Smart VAT Kenya on WhatsApp - ${FACTS.contact.whatsappIntl}`}
        data-track="wa-cta"
        data-cta-type="floating"
        data-service="general"
        className="hidden sm:flex fixed right-[calc(env(safe-area-inset-right,0px)+1rem)] bottom-[calc(env(safe-area-inset-bottom,0px)+1.5rem)] z-50 items-center justify-center gap-2 min-h-12 min-w-12 bg-[#128C7E] hover:bg-[#0e6d5c] text-white font-semibold text-[0.9rem] px-4 py-3 rounded-full shadow-md transition-colors active:scale-[0.98]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 shrink-0 fill-white" aria-hidden="true">
          <path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.47.645 4.79 1.77 6.81L2 30l7.38-1.74A13.95 13.95 0 0 0 16.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.6a11.55 11.55 0 0 1-5.9-1.61l-.42-.25-4.38 1.03 1.04-4.27-.28-.44a11.57 11.57 0 0 1-1.78-6.07C4.32 9.1 9.6 3.82 16.003 3.82c3.1 0 6.01 1.21 8.2 3.4a11.54 11.54 0 0 1 3.4 8.2c.003 6.4-5.28 11.18-11.6 11.18zm6.37-8.67c-.35-.18-2.07-1.02-2.39-1.13-.32-.12-.56-.18-.79.17-.24.35-.9 1.13-1.1 1.37-.2.24-.41.27-.76.09-.35-.18-1.47-.54-2.8-1.73-1.04-.93-1.74-2.07-1.94-2.42-.2-.35-.02-.54.15-.71.16-.16.35-.41.52-.62.18-.2.24-.35.35-.59.12-.24.06-.44-.03-.62-.09-.18-.79-1.9-1.08-2.6-.28-.68-.57-.59-.79-.6l-.67-.01c-.24 0-.62.09-.94.44-.32.35-1.23 1.2-1.23 2.93 0 1.73 1.26 3.4 1.44 3.63.18.24 2.48 3.79 6.01 5.31.84.36 1.5.58 2.01.74.85.27 1.62.23 2.23.14.68-.1 2.07-.85 2.37-1.67.29-.82.29-1.52.2-1.67-.08-.14-.32-.23-.67-.41z" />
        </svg>
        <span className="whitespace-nowrap">Chat on WhatsApp</span>
      </a>
      {/* Mobile: bottom sticky bar with safe-area padding */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-50 bg-white dark:bg-[#10161d] border-t border-hairline px-4 py-3 pb-[calc(env(safe-area-inset-bottom,0px)+0.75rem)] flex items-center justify-between gap-3">
        <p className="text-[0.82rem] font-medium text-[#14243e] dark:text-canvas leading-snug">VAT services from KES 5,000<br /><span className="text-[0.7rem] text-ink-muted font-normal">WhatsApp us anytime - replies within the hour</span></p>
        <a
          href={WA_PATHS.quote}
          target="_blank"
          rel="noopener noreferrer"
          data-track="wa-cta"
          data-cta-type="mobile-bar"
          data-service="general"
          className="shrink-0 inline-flex items-center gap-2 bg-[#128C7E] hover:bg-[#0e6d5c] text-white font-semibold text-[0.85rem] px-4 py-2.5 rounded-full transition-colors active:scale-[0.98]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-4 h-4 fill-white" aria-hidden="true">
            <path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.47.645 4.79 1.77 6.81L2 30l7.38-1.74A13.95 13.95 0 0 0 16.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.6a11.55 11.55 0 0 1-5.9-1.61l-.42-.25-4.38 1.03 1.04-4.27-.28-.44a11.57 11.57 0 0 1-1.78-6.07C4.32 9.1 9.6 3.82 16.003 3.82c3.1 0 6.01 1.21 8.2 3.4a11.54 11.54 0 0 1 3.4 8.2c.003 6.4-5.28 11.18-11.6 11.18zm6.37-8.67c-.35-.18-2.07-1.02-2.39-1.13-.32-.12-.56-.18-.79.17-.24.35-.9 1.13-1.1 1.37-.2.24-.41.27-.76.09-.35-.18-1.47-.54-2.8-1.73-1.04-.93-1.74-2.07-1.94-2.42-.2-.35-.02-.54.15-.71.16-.16.35-.41.52-.62.18-.2.24-.35.35-.59.12-.24.06-.44-.03-.62-.09-.18-.79-1.9-1.08-2.6-.28-.68-.57-.59-.79-.6l-.67-.01c-.24 0-.62.09-.94.44-.32.35-1.23 1.2-1.23 2.93 0 1.73 1.26 3.4 1.44 3.63.18.24 2.48 3.79 6.01 5.31.84.36 1.5.58 2.01.74.85.27 1.62.23 2.23.14.68-.1 2.07-.85 2.37-1.67.29-.82.29-1.52.2-1.67-.08-.14-.32-.23-.67-.41z" />
          </svg>
          Get a Quote
        </a>
      </div>
    </>
  )
}
