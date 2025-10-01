-- Fix search_path security warning by recreating function with proper settings
DROP FUNCTION IF EXISTS update_questions_updated_at() CASCADE;

CREATE OR REPLACE FUNCTION update_questions_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql 
SECURITY DEFINER
SET search_path = public;

-- Recreate the trigger
CREATE TRIGGER trigger_update_questions_timestamp
  BEFORE UPDATE ON public.questions
  FOR EACH ROW
  EXECUTE FUNCTION update_questions_updated_at();