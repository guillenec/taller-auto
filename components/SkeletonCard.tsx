export default function SkeletonCard() {
    return (
        <div className="animate-pulse bg-white rounded-2xl p-5 shadow">
            <div className="h-40 bg-gray-300 rounded-xl"></div>
            <div className="mt-4 h-4 bg-gray-300 rounded w-1/2"></div>
            <div className="mt-2 h-3 bg-gray-300 rounded w-3/4"></div>
        </div>
    );
}
