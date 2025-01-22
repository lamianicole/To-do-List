import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://fmtcfqurrquyenpgfkzf.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtdGNmcXVycnF1eWVucGdma3pmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY3NzM2MDQsImV4cCI6MjA1MjM0OTYwNH0.OL9_gRyqxQIJ-bng9hAXc1yJtsuIrfZ8EOOmurhF5EE')