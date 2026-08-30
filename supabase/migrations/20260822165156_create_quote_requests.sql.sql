/*
# Create quote_requests table (single-tenant, no auth)

1. New Tables
- `quote_requests`
  - `id` (uuid, primary key)
  - `name` (text, not null) — customer's full name
  - `phone` (text, not null) — contact number
  - `email` (text, nullable) — optional email
  - `service` (text, not null) — which service they're interested in
  - `message` (text, not null) — details of the request
  - `status` (text, default 'new') — lead status tracking
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `quote_requests`.
- Allow anon + authenticated INSERT (public form submissions).
- No SELECT/UPDATE/DELETE from the frontend (admin-only via dashboard).
3. Notes
- This is a no-auth public contact form. Anyone can submit a quote request.
- Only INSERT is exposed to the anon key; reads/updates/deletes are admin-only.
*/

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  service text NOT NULL,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_quote_requests" ON quote_requests;
CREATE POLICY "anon_insert_quote_requests" ON quote_requests FOR INSERT
TO anon, authenticated WITH CHECK (true);