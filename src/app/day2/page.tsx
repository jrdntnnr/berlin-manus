import Link from 'next/link';

export default function Day2() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Berlin Family Trip Planner</h1>
          <p className="text-lg">May, 2025</p>
        </div>
      </header>
      
      <nav className="bg-blue-500 text-white p-2">
        <div className="container mx-auto flex flex-wrap justify-center space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/day1" className="hover:underline">Day 1</Link>
          <Link href="/day2" className="hover:underline font-bold">Day 2</Link>
          <Link href="/day3" className="hover:underline">Day 3</Link>
          <Link href="/day4" className="hover:underline">Day 4</Link>
          <Link href="/day5" className="hover:underline">Day 5</Link>
          <Link href="/backup" className="hover:underline">Backup Options</Link>
          <Link href="/shopping" className="hover:underline">Shopping Days</Link>
        </div>
      </nav>
      
      <main className="container mx-auto p-4">
        <div className="bg-blue-700 text-white p-4 mb-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Day 2 (Wednesday, May 21) - Berlin Wall & Cold War History</h2>
          <p className="text-white">Exploring Berlin's fascinating history</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Morning</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-800">
              <li>Breakfast at your hotel</li>
              <li>Visit <a href="https://www.ddr-museum.de/en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DDR Museum</a> - Interactive museum about life in East Germany (very kid-friendly with hands-on exhibits)</li>
              <li>Walk along the Spree River</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Lunch</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-800">
              <li>Hackescher Markt area - Many family-friendly restaurants</li>
              <li>Recommended: Spreegold (healthy options for kids)</li>
              <li>Address: Karl-Liebknecht-Str. 29, 10178 Berlin</li>
              <li>Features: Varied menu with healthy options, outdoor seating</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Afternoon</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-800">
              <li>Visit <a href="https://www.eastsidegalleryexhibition.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">East Side Gallery</a> - The longest remaining section of the Berlin Wall, covered in murals</li>
              <li>Take photos at the famous "Fraternal Kiss" mural</li>
              <li>Visit <a href="https://www.mauermuseum.de/en/start/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Checkpoint Charlie</a> - Famous Cold War border crossing point</li>
              <li>Optional: Checkpoint Charlie Museum (if kids are interested in escape stories)</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Evening</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-800">
              <li>Dinner at Maximilian - Family-friendly restaurant with German and international cuisine</li>
              <li>Address: Friedrichstraße 105b, 10117 Berlin</li>
              <li>Features: Kids menu, relaxed atmosphere</li>
              <li>Evening walk around Gendarmenmarkt square (one of Berlin's most beautiful squares)</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <h3 className="text-xl font-bold text-blue-800 mb-2">Today's Map</h3>
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d9713.148559374655!2d13.402731036418456!3d52.51631139351731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e2!4m5!1s0x47a84e1f9cec5c29%3A0x5a3c1c0c3c8fbd2!2sLittenstra%C3%9Fe%20106%2C%2010179%20Berlin%2C%20Germany!3m2!1d52.5144349!2d13.4159723!4m5!1s0x47a84e1f7ba7a9fb%3A0x6b8f1f7a5b4a1d4e!2sDDR%20Museum%2C%20Karl-Liebknecht-Stra%C3%9Fe%2C%20Berlin%2C%20Germany!3m2!1d52.5219!2d13.4025!4m5!1s0x47a84e1f7ba7a9fb%3A0x6b8f1f7a5b4a1d4e!2sEast%20Side%20Gallery%2C%20M%C3%BChlenstra%C3%9Fe%2C%20Berlin%2C%20Germany!3m2!1d52.5219!2d13.4025!4m5!1s0x47a84e1f7ba7a9fb%3A0x6b8f1f7a5b4a1d4e!2sCheckpoint%20Charlie%2C%20Friedrichstra%C3%9Fe%2C%20Berlin%2C%20Germany!3m2!1d52.5219!2d13.4025!5e0!3m2!1sen!2sus!4v1714149410799!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <h3 className="text-xl font-bold text-blue-800 mb-2">Tips for Day 2</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-800">
            <li>The DDR Museum is interactive and great for kids - plan to spend at least 1.5 hours there</li>
            <li>East Side Gallery is outdoors along the river - good for kids to stretch their legs</li>
            <li>Checkpoint Charlie area can be crowded with tourists - keep a close eye on children</li>
            <li>Consider using public transportation between East Side Gallery and Checkpoint Charlie (about 3 km apart)</li>
          </ul>
        </div>
      </main>
      
      <footer className="bg-blue-600 text-white p-4 mt-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>Berlin Family Trip Planner - May 2025</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/day1" className="hover:underline">Day 1</Link>
            <Link href="/day2" className="hover:underline">Day 2</Link>
            <Link href="/day3" className="hover:underline">Day 3</Link>
            <Link href="/day4" className="hover:underline">Day 4</Link>
            <Link href="/day5" className="hover:underline">Day 5</Link>
            <Link href="/backup" className="hover:underline">Backup Options</Link>
            <Link href="/shopping" className="hover:underline">Shopping Days</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
