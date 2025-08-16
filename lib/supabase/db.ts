import { supabase } from '@/lib/supabase/client';

export async function getAllInstruments() {
  const { data: instruments, error } = await supabase.from('instruments').select('*').eq('name', 'Mordor');
  if (error) throw error;
  return instruments;
}