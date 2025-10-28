export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mb-4"></div>
        <div className="flex items-center">
          <div className="h-8 w-8 bg-primary-600 rounded-lg flex items-center justify-center mr-3">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Metro IVF Hospital</h2>
            <p className="text-sm text-gray-600">Loading...</p>
          </div>
        </div>
      </div>
    </div>
  )
}