import Link from 'next/link';

export default function Day3() {
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
          <Link href="/day2" className="hover:underline">Day 2</Link>
          <Link href="/day3" className="hover:underline font-bold">Day 3</Link>
          <Link href="/day4" className="hover:underline">Day 4</Link>
          <Link href="/day5" className="hover:underline">Day 5</Link>
          <Link href="/backup" className="hover:underline">Backup Options</Link>
          <Link href="/shopping" className="hover:underline">Shopping Days</Link>
        </div>
      </nav>
      
      <main className="container mx-auto p-4">
        <div className="bg-blue-700 text-white p-4 mb-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Day 3 (Thursday, May 22) - Tiergarten & Zoo</h2>
          <p className="text-white">Animal adventures and park exploration</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Morning</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-800">
              <li>Breakfast at your hotel</li>
              <li>Visit <a href="https://www.zoo-berlin.de/en/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Berlin Zoo</a> - One of the most diverse zoos in the world (perfect for children)</li>
              <li>See the famous pandas, elephants, and the aquarium</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Lunch</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-800">
              <li>Lunch at the Zoo restaurant or nearby GOSCH at Bikini Berlin</li>
              <li>Address: Budapester Str. 38-50, 10787 Berlin (Bikini Berlin)</li>
              <li>Features: Seafood restaurant with kid-friendly options, casual atmosphere</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Afternoon</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-800">
              <li>Explore <a href="https://www.visitberlin.de/en/tiergarten" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Tiergarten Park</a> - Berlin's largest inner-city park</li>
              <li>Visit the <a href="https://www.berlin.de/en/attractions-and-sights/3560160-3104052-victory-column.en.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Victory Column</a> (Siegessäule) - Climb to the top for great views</li>
              <li>Rent a rowboat on the park's lake (weather permitting)</li>
              <li>Visit the park's playgrounds</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Evening</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-800">
              <li>Dinner at Schleusenkrug - Relaxed beer garden restaurant by the canal</li>
              <li>Address: Müller-Breslau-Straße, 10623 Berlin</li>
              <li>Features: Outdoor seating, German cuisine, relaxed atmosphere perfect after a day in the park</li>
              <li>Shopping at <a href="https://www.kadewe.de/en/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">KaDeWe</a> (Kaufhaus des Westens) - Europe's second-largest department store (open until 8 PM)</li>
              <li>Special focus on the 6th floor food hall - amazing desserts for kids!</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <h3 className="text-xl font-bold text-blue-800 mb-2">Today's Map</h3>
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d9713.148559374655!2d13.342731036418456!3d52.51631139351731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e2!4m5!1s0x47a84e1f9cec5c29%3A0x5a3c1c0c3c8fbd2!2sLittenstra%C3%9Fe%20106%2C%2010179%20Berlin%2C%20Germany!3m2!1d52.5144349!2d13.4159723!4m5!1s0x47a851d00f714303%3A0xb7b4fcea44396e2d!2sBerlin%20Zoo%2C%20Hardenbergplatz%208%2C%2010787%20Berlin%2C%20Germany!3m2!1d52.5063719!2d13.3374202!4m5!1s0x47a851a7825287bb%3A0xb7b97d167e7d57d!2sVictory%20Column%2C%20Gro%C3%9Fer%20Stern%2C%2010557%20Berlin%2C%20Germany!3m2!1d52.5144404!2d13.3500906!4m5!1s0x47a8511d884b66c5%3A0x57df821ca8d97d3f!2sKaDeWe%20Berlin%2C%20Tauentzienstra%C3%9Fe%2C%20Berlin%2C%20Germany!3m2!1d52.5015217!2d13.3404798!5e0!3m2!1sen!2sus!4v1714149410799!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{border:0}} 
              allowFullScreen={true}  
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <h3 className="text-xl font-bold text-blue-800 mb-2">Tips for Day 3</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-800">
            <li>Arrive at the Zoo early to avoid crowds (opens at 9 AM)</li>
            <li>The Victory Column has 285 steps to the top - make sure kids are up for the climb</li>
            <li>KaDeWe's 6th floor food hall is a highlight - plan to spend some time exploring the different food stations</li>
            <li>Tiergarten is huge - consider renting bikes to explore more of it</li>
            <li>This day involves more walking than others - wear comfortable shoes</li>
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
