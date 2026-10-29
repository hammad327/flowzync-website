export async function db(resource, init = {}) {
  const url = process.env.SUPABASE_URL?.trim().replace(/\/+$/, '');
  const key = process.env.SUPABASE_SERVICE_KEY?.trim();
  if (!url || !key) throw new Error('Durable storage is not connected. Configure Supabase and run the admin migration.');
  const r = await fetch(`${url}/rest/v1/${resource}`, {
    ...init,
    cache: 'no-store',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
      ...init.headers
    },
    signal: AbortSignal.timeout(7000)
  });
  if (!r.ok) throw new Error(`Storage unavailable (${r.status}). Check the admin database migration and service connection.`);
  const text = await r.text();
  return text ? JSON.parse(text) : null;
}
