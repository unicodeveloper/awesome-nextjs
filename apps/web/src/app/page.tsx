export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-center">
        <h1 className="text-6xl font-bold mb-4">
          ShareSteak
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Modern Meat Marketplace Platform
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Direct Connection</h2>
            <p className="text-gray-600">
              Connect directly with meat producers, eliminating intermediaries
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Group Purchasing</h2>
            <p className="text-gray-600">
              Leverage collective buying power for wholesale prices
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Community Driven</h2>
            <p className="text-gray-600">
              Forums, reviews, and direct messaging with producers
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
