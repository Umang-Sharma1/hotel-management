import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lpwprmrovibsqlvzafiz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwd3BybXJvdmlic3FsdnphZml6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ4ODkwNTksImV4cCI6MjAxMDQ2NTA1OX0.xLCVUTI8DS1P29Yf9AYs-pr5Q2_hapqe0x7boCs32KU";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
