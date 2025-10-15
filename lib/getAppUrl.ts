export function getAppUrl(): string {
  // Return NEXTAUTH_URL if explicitly set (recommended)
  if (process.env.NEXTAUTH_URL) return process.env.NEXTAUTH_URL;

  // In Vercel, VERCEL_URL is set to the deployment hostname (e.g. my-app.vercel.app)
  // Use it to construct an https URL when present.
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

  // Fallback to localhost for local development
  return 'http://localhost:3000';
}

export default getAppUrl;
