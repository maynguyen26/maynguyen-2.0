export default function ColorTest() {
  return (
    <div className="p-4 space-y-2">
      <h2 className="text-lg font-bold mb-4">Color Test Component</h2>

      {/* Test basic Tailwind classes */}
      <div className="p-2 bg-red-500 text-white">Basic Red (Should be red)</div>
      <div className="p-2 bg-blue-500 text-white">
        Basic Blue (Should be blue)
      </div>

      {/* Test with inline styles for comparison */}
      <div className="p-2 text-white" style={{ backgroundColor: "#1A2A56" }}>
        Direct Primary Style
      </div>
      <div className="p-2 text-white" style={{ backgroundColor: "#E94D8B" }}>
        Direct Accent Style
      </div>

      {/* Test custom colors */}
      <div className="p-2 bg-primary text-white">Primary Color (#1A2A56)</div>
      <div className="p-2 bg-primary-light text-white">
        Primary Light (#2B3B67)
      </div>
      <div className="p-2 bg-primary-dark text-white">
        Primary Dark (#0F1A46)
      </div>

      <div className="p-2 bg-accent text-white">Accent Color (#E94D8B)</div>
      <div className="p-2 bg-accent-light text-white">
        Accent Light (#F06DA3)
      </div>
      <div className="p-2 bg-accent-dark text-white">Accent Dark (#D03D7B)</div>

      <div className="p-2 bg-teal text-white">Teal Color (#29A0B1)</div>
      <div className="p-2 bg-gold text-white">Gold Color (#E7B75F)</div>
      <div className="p-2 bg-charcoal text-white">Charcoal Color (#2D3142)</div>
      <div className="p-2 bg-light-gray text-charcoal">
        Light Gray Color (#F5F5F7)
      </div>
      <div className="p-2 bg-card text-charcoal border border-gray-200">
        Card Color (#FFFFFF)
      </div>
    </div>
  );
}
