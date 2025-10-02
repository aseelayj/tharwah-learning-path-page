import { createClient } from 'npm:@supabase/supabase-js@2.57.4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

interface LeadData {
  email: string;
  name?: string;
  lead_type: 'syllabus_download' | 'skills_assessment' | 'contact_form';
  course_title?: string;
  course_id?: string;
  assessment_score?: number;
  assessment_level?: 'beginner' | 'intermediate' | 'advanced';
  assessment_answers?: Record<string, any>;
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        {
          status: 405,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const leadData: LeadData = await req.json();

    if (!leadData.email || !leadData.lead_type) {
      return new Response(
        JSON.stringify({ error: 'Email and lead_type are required' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          email: leadData.email,
          name: leadData.name,
          lead_type: leadData.lead_type,
          course_title: leadData.course_title,
          course_id: leadData.course_id,
          assessment_score: leadData.assessment_score,
          assessment_level: leadData.assessment_level,
          assessment_answers: leadData.assessment_answers,
        },
      ])
      .select()
      .maybeSingle();

    if (error) {
      console.error('Error inserting lead:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to capture lead', details: error.message }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true, data }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
