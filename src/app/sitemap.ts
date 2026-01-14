import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://xplorebytesolutions.com")
    .trim()
    .replace(/\/+$/, "");
  
  // Define routes with their SEO priorities
  const routes: Array<{ path: string; priority: number; changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" }> = [
    // Home - Highest priority
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    
    // Core money pages - High priority
    { path: "/pricing", priority: 0.9, changeFrequency: "weekly" },
    { path: "/features", priority: 0.9, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
    
    // SEO Landing Pages - High priority
    { path: "/whatsapp-crm", priority: 0.9, changeFrequency: "weekly" },
    { path: "/whatsapp-crm-for-small-business", priority: 0.9, changeFrequency: "weekly" },
    { path: "/whatsapp-business-api-provider", priority: 0.9, changeFrequency: "weekly" },
    { path: "/whatsapp-team-inbox", priority: 0.9, changeFrequency: "weekly" },
    { path: "/whatsapp-chatbot-builder", priority: 0.9, changeFrequency: "weekly" },
    { path: "/whatsapp-campaigns", priority: 0.9, changeFrequency: "weekly" },
    { path: "/whatsapp-business", priority: 0.9, changeFrequency: "weekly" },
    
    // Feature pages - Medium-high priority
    { path: "/features/ai-chatbots-flows", priority: 0.8, changeFrequency: "weekly" },
    { path: "/features/campaigns-broadcasting", priority: 0.8, changeFrequency: "weekly" },
    { path: "/features/analytics-reporting", priority: 0.8, changeFrequency: "weekly" },
    
    // Supporting pages - Medium priority
    { path: "/about-us", priority: 0.7, changeFrequency: "monthly" },
    { path: "/product", priority: 0.7, changeFrequency: "weekly" },
    { path: "/product-updates", priority: 0.7, changeFrequency: "weekly" },
    { path: "/api-documentation", priority: 0.7, changeFrequency: "monthly" },
    { path: "/support-center", priority: 0.7, changeFrequency: "monthly" },
    { path: "/login", priority: 0.7, changeFrequency: "monthly" },
    
    // Legal pages - Lower priority
    { path: "/privacy-policy", priority: 0.5, changeFrequency: "yearly" },
    { path: "/terms-of-service", priority: 0.5, changeFrequency: "yearly" },
    { path: "/acceptable-use-policy", priority: 0.5, changeFrequency: "yearly" },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
