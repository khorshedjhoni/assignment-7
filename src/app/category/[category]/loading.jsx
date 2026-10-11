
export default function CategoryLoading() {
  return (
    <main className="min-h-screen bg-[#f0f5f1] px-4 py-6">
      <div className="mx-auto max-w-6xl space-y-6">
      
        <div className="flex items-center gap-4 rounded-2xl border border-[#dfe8e0] bg-white p-5">
          <div className="h-12 w-12 animate-pulse rounded-xl bg-gray-200" />

          <div className="flex-1 space-y-2">
            <div className="h-6 w-40 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-56 max-w-full animate-pulse rounded bg-gray-200" />
          </div>
        </div>

        <div className="flex justify-end">
          <div className="h-10 w-64 max-w-full animate-pulse rounded-lg bg-gray-200" />
        </div>

       
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }, (_, index) => (
            <div
              key={index}
              className="animate-pulse rounded-2xl border border-gray-200 bg-white p-4"
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-gray-200" />

                <div className="flex-1 space-y-2">
                  <div className="h-4 w-2/3 rounded bg-gray-200" />
                  <div className="h-3 w-1/2 rounded bg-gray-200" />
                </div>
              </div>

              <div className="mt-5 flex justify-between gap-3">
                <div className="h-6 w-28 rounded bg-gray-200" />
                <div className="h-7 w-20 rounded-full bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

