
export default function ProductDetailsLoading() {
  return (
    <main className="min-h-screen animate-pulse bg-[#f8fafa] px-4 py-8">
      <div className="mx-auto max-w-6xl space-y-8">
        
        <section className="rounded-2xl border border-gray-100 bg-white p-6 md:p-8">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-2xl bg-gray-200" />

            <div className="flex-1 space-y-3">
              <div className="h-7 w-48 max-w-full rounded bg-gray-200" />
              <div className="h-4 w-64 max-w-full rounded bg-gray-200" />
              <div className="h-5 w-24 rounded-full bg-gray-200" />
            </div>
          </div>

          <div className="mt-6 h-20 rounded-xl bg-gray-100" />
        </section>

       
        <section className="space-y-4">
          <div className="h-6 w-48 rounded bg-gray-200" />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="h-28 rounded-2xl bg-white p-5 shadow-sm"
              >
                <div className="h-4 w-24 rounded bg-gray-200" />
                <div className="mt-4 h-7 w-32 rounded bg-gray-200" />
              </div>
            ))}
          </div>
        </section>

        
        <section className="space-y-4">
          <div className="h-6 w-56 rounded bg-gray-200" />

          <div className="space-y-3 rounded-2xl bg-white p-5">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="h-12 rounded-lg bg-gray-100"
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}