
-- Schedule the sync-eli5 function to run daily at 2 AM UTC
SELECT cron.schedule(
  'daily-eli5-sync',
  '0 2 * * *',
  $$
  SELECT
    net.http_post(
      url:='https://jldfcivjrsbxobfobqas.supabase.co/functions/v1/sync-eli5',
      headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpsZGZjaXZqcnNieG9iZm9icWFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzMjc1NjUsImV4cCI6MjA3NDkwMzU2NX0.N8RZs8XzQODhxiKRsWH5yS1XJ6W2w73bCxm1koaqLZc"}'::jsonb,
      body:='{}'::jsonb
    ) as request_id;
  $$
);
