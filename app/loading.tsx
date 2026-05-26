import Sidebar from '@/components/Sidebar';

export default function Loading() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-neutral-950 text-white">
      <Sidebar />
      
      <main className="flex-1 p-6 lg:p-10 pb-24 md:pb-10 overflow-y-auto">
        <header className="mb-10">
          <div className="h-8 w-64 bg-neutral-800 rounded-lg animate-pulse mb-3" />
          <div className="h-4 w-96 bg-neutral-900 rounded-lg animate-pulse" />
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[220px]">
          
          <article className="col-span-1 md:col-span-2 lg:col-span-2 bg-neutral-900 border border-neutral-800 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between animate-pulse">
             <div className="h-8 w-40 bg-neutral-800 rounded-lg" />
             <div className="h-24 bg-neutral-950 rounded-xl border border-neutral-800" />
          </article>

          {[1, 2, 3].map((i) => (
            <article key={i} className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 flex flex-col justify-between animate-pulse">
              <div>
                <div className="w-12 h-12 bg-neutral-800 rounded-full mb-4" />
                <div className="h-6 w-32 bg-neutral-800 rounded-lg" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <div className="h-4 w-16 bg-neutral-800 rounded" />
                  <div className="h-4 w-8 bg-neutral-800 rounded" />
                </div>
                <div className="w-full h-2 bg-neutral-950 rounded-full" />
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}