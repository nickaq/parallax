const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api';

// Types
export interface ContactForm {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface SubscribeForm {
  email: string;
  name?: string;
}

export interface ParallaxConfig {
  id: number;
  name: string;
  description: string;
  heroOrbSpeed: number;
  heroOrbAmplitude: number;
  heroOrbMouseIntensity: number;
  heroCardSpeed: number;
  heroCardAmplitude: number;
  heroCardMouseIntensity: number;
  demoShapeSpeed: number;
  demoShapeAmplitude: number;
  demoShapeMouseIntensity: number;
  isDefault: boolean;
}

export interface Stats {
  totalPageViews: number;
  uniqueSessions: number;
  totalInteractions: number;
  totalSubscribers: number;
  totalMessages: number;
  avgScrollDepth: number | null;
}

// API Functions
export async function submitContact(data: ContactForm): Promise<{ success: boolean; message: string; id: number }> {
  const response = await fetch(`${API_BASE_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function subscribe(data: SubscribeForm): Promise<{ success: boolean; message: string; email: string }> {
  const response = await fetch(`${API_BASE_URL}/newsletter/subscribe`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function getPresets(): Promise<ParallaxConfig[]> {
  const response = await fetch(`${API_BASE_URL}/config/presets`);
  return response.json();
}

export async function getPreset(name: string): Promise<ParallaxConfig | null> {
  const response = await fetch(`${API_BASE_URL}/config/presets/${name}`);
  if (!response.ok) return null;
  return response.json();
}

export async function trackPageView(page: string, sessionId: string, referrer?: string): Promise<void> {
  await fetch(`${API_BASE_URL}/analytics/pageview`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ page, sessionId, referrer }),
  });
}

export async function trackInteraction(
  sessionId: string,
  eventType: string,
  section: string,
  scrollDepth?: number,
  duration?: number
): Promise<void> {
  await fetch(`${API_BASE_URL}/analytics/interaction`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sessionId, eventType, section, scrollDepth, duration }),
  });
}

export async function getStats(): Promise<Stats> {
  const response = await fetch(`${API_BASE_URL}/analytics/stats`);
  return response.json();
}
