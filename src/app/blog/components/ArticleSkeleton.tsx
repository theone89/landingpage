export default function ArticleSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm h-full">
            <div className="h-48 bg-gray-200 rounded-t-lg"></div>
            <div className="p-4">
              <div className="flex justify-between mb-2">
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              </div>
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
              <div className="h-4 bg-gray-200 rounded w-1/4 mt-4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
