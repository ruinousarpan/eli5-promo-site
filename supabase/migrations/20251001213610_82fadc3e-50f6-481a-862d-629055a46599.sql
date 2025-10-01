-- Enable pg_cron and pg_net extensions for scheduled jobs
CREATE EXTENSION IF NOT EXISTS pg_cron WITH SCHEMA extensions;
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- Grant permissions to postgres role
GRANT USAGE ON SCHEMA cron TO postgres;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA cron TO postgres;

-- Setup cron to sync ELI5 questions every 10 minutes
SELECT cron.schedule(
  'sync-eli5-questions',
  '*/10 * * * *',
  $$
  SELECT
    net.http_post(
      url:='https://jldfcivjrsbxobfobqas.supabase.co/functions/v1/sync-eli5',
      headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpsZGZjaXZqcnNieG9iZm9icWFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzMjc1NjUsImV4cCI6MjA3NDkwMzU2NX0.N8RZs8XzQODhxiKRsWH5yS1XJ6W2w73bCxm1koaqLZc"}'::jsonb,
      body:='{}'::jsonb
    ) as request_id;
  $$
);