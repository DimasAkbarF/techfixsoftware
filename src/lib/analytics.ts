// Lightweight zero-dependency analytics & conversion tracking
// Integrates with window.gtag (Google Analytics 4) if present, or logs in debug mode.

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "set" | "js",
      targetId: string | Date,
      config?: Record<string, unknown>,
    ) => void;
  }
}

export type ConversionEvent =
  | "whatsapp_click"
  | "consultation_started"
  | "consultation_form_submit"
  | "service_view"
  | "service_cta_click"
  | "search_used"
  | "guide_view"
  | "problem_finder_complete";

export interface EventParams {
  event_category?: string;
  event_label?: string;
  service_name?: string;
  service_slug?: string;
  device_brand?: string;
  problem_type?: string;
  source_page?: string;
  search_query?: string;
  guide_title?: string;
  [key: string]: string | number | boolean | undefined;
}

export function trackEvent(name: ConversionEvent, params: EventParams = {}): void {
  if (typeof window === "undefined") return;

  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, {
        ...params,
        send_to_production: true,
      });
    }

    // Custom browser event for any listener or extensions
    window.dispatchEvent(
      new CustomEvent("techfix_analytics", {
        detail: { name, params, timestamp: Date.now() },
      }),
    );
  } catch {
    // Fail silently without disrupting user experience
  }
}

export function getStoredUtm(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const params = new URLSearchParams(window.location.search);
    const utm: Record<string, string> = {};
    for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]) {
      const val = params.get(key);
      if (val) utm[key] = val;
    }
    return utm;
  } catch {
    return {};
  }
}
