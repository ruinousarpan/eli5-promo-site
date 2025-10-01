-- Create questions table for synced ELI5 content
CREATE TABLE IF NOT EXISTS public.questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  body_question TEXT,
  body_answer TEXT,
  summary TEXT,
  seo_title TEXT,
  seo_description TEXT,
  source_url TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;

-- Public read access (this is syndicated public content)
CREATE POLICY "Questions are viewable by everyone"
  ON public.questions
  FOR SELECT
  USING (true);

-- Create index for slug lookups
CREATE INDEX idx_questions_slug ON public.questions(slug);

-- Create index for full-text search on title
CREATE INDEX idx_questions_title ON public.questions USING gin(to_tsvector('english', title));

-- Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_questions_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_questions_timestamp
  BEFORE UPDATE ON public.questions
  FOR EACH ROW
  EXECUTE FUNCTION update_questions_updated_at();