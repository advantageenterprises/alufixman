/*
# Add quote request contact details

1. Changes
- Add `property_address` to store the location where work is requested.
- Add `preferred_date` to store the customer's requested service date.
- Both fields are optional so existing quote requests remain valid.

2. Data safety
- Existing rows and columns are preserved.
- No destructive operations are performed.

3. Security
- Existing row-level security and public insert policy remain unchanged.
*/

ALTER TABLE quote_requests
  ADD COLUMN IF NOT EXISTS property_address text,
  ADD COLUMN IF NOT EXISTS preferred_date date;