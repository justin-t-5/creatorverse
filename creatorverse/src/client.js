import {createClient} from '@supabase/supabase-js';
const URL = 'https://nshnybizcrhrzuifpdbe.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zaG55Yml6Y3Jocnp1aWZwZGJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUwMjU1NzcsImV4cCI6MjA3MDYwMTU3N30.Hdkvlq8OrjL6crIqEKkd2uot5eMCFspSXcmM3VXx7OI';

export const supabase = createClient(URL, API_KEY);
