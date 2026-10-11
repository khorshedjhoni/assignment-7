
export default function Loading() {
  return (
    <main className="min-h-screen animate-pulse bg-[#f1f5f0] px-4 py-8">
      <div className="mx-auto max-w-6xl">
        
        <div className="mb-6 h-8 w-48 rounded bg-gray-200" />
        <div className="mb-8 h-4 w-72 max-w-full rounded bg-gray-200" />

    
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-4 shadow-sm"
            >
              
              <div className="mb-4 flex h-40 items-center justify-center rounded-lg bg-gray-200">
                <div className="h-12 w-12 rounded-full bg-gray-300" />
              </div>

            
              <div className="mb-3 h-5 w-3/4 rounded bg-gray-200" />

              
              <div className="mb-4 h-4 w-1/2 rounded bg-gray-200" />

    
              <div className="mb-3 h-6 w-2/3 rounded bg-gray-200" />

            
              <div className="h-7 w-20 rounded-full bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}