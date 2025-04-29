import ColorTest from "@/components/ColorTest";

export default function TestPage() {
  return (
    <div className="min-h-screen bg-light-gray py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Tailwind Test Page</h1>
        <ColorTest />

        {/* Test the button styles too */}
        <div className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold">Button Tests</h2>
          <button className="bg-accent text-white px-6 py-2 rounded-md">
            Accent Button
          </button>
          <button className="bg-primary text-white px-6 py-2 rounded-md ml-4">
            Primary Button
          </button>
          <button className="bg-teal text-white px-6 py-2 rounded-md ml-4">
            Teal Button
          </button>
        </div>
      </div>
    </div>
  );
}
