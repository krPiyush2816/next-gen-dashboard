import { supabase } from '../lib/supabase';
import Sidebar from '@/components/Sidebar';
import CourseGrid from '@/components/CourseGrid';

export default async function Dashboard() {
  const { data: courses, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
        <p className="text-red-500">Database Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-neutral-950 text-white selection:bg-emerald-500/30">
      <Sidebar />
      
      <main className="flex-1 p-6 lg:p-10 pb-24 md:pb-10 overflow-y-auto overflow-x-hidden">
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, Piyush</h1>
          <p className="text-neutral-400 mt-1">You are on a 5-day learning streak. Keep it up!</p>
        </header>

        <CourseGrid courses={courses || []} />
      </main>
    </div>
  );
}