import { createClient } from "@supabase/supabase-js";
const VITE_SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjZmlqZnRta2tzbHB3dm96YnhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQxMDQyNTIsImV4cCI6MjAzOTY4MDI1Mn0.1UzpF4GfQWP60B7m1mhjXe0JKpyTNkp78DVHpNIyRUs";

const VITE_SUPABASE_URL = "https://ucfijftmkkslpwvozbxd.supabase.co";
export const supabaseUrl = VITE_SUPABASE_URL;
const supabaseKey = VITE_SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
