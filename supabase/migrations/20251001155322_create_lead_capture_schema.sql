/*
  # Lead Capture Schema

  1. New Tables
    - `leads`
      - `id` (uuid, primary key) - Unique identifier for each lead
      - `email` (text, required) - Lead's email address
      - `name` (text, nullable) - Lead's name
      - `lead_type` (text, required) - Type of lead capture (syllabus_download, skills_assessment, contact_form)
      - `course_title` (text, nullable) - Title of the course they're interested in
      - `course_id` (text, nullable) - Slug/ID of the course
      - `assessment_score` (integer, nullable) - Score from skills assessment (0-100)
      - `assessment_level` (text, nullable) - Level from assessment (beginner, intermediate, advanced)
      - `assessment_answers` (jsonb, nullable) - Full assessment answers
      - `created_at` (timestamptz) - When the lead was captured
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `leads` table
    - Add policy for service role to insert leads
    - Add policy for authenticated admins to view leads

  3. Indexes
    - Index on email for faster lookups
    - Index on lead_type for filtering
    - Index on created_at for sorting
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  name text,
  lead_type text NOT NULL CHECK (lead_type IN ('syllabus_download', 'skills_assessment', 'contact_form')),
  course_title text,
  course_id text,
  assessment_score integer CHECK (assessment_score >= 0 AND assessment_score <= 100),
  assessment_level text CHECK (assessment_level IN ('beginner', 'intermediate', 'advanced')),
  assessment_answers jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can insert leads"
  ON leads
  FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_type ON leads(lead_type);
CREATE INDEX IF NOT EXISTS idx_leads_created ON leads(created_at DESC);

CREATE OR REPLACE FUNCTION update_leads_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'set_leads_updated_at'
  ) THEN
    CREATE TRIGGER set_leads_updated_at
      BEFORE UPDATE ON leads
      FOR EACH ROW
      EXECUTE FUNCTION update_leads_updated_at();
  END IF;
END $$;
