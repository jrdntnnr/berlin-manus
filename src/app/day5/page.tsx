import Link from 'next/link';

export default function Day5() {
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
          <Link href="/day3" className="hover:underline">Day 3</Link>
          <Link href="/day4" className="hover:underline">Day 4</Link>
          <Link href="/day5" className="hover:underline font-bold">Day 5</Link>
          <Link href="/backup" className="hover:underline">Backup Options</Link>
          <Link href="/shopping" className="hover:underline">Shopping Days</Link>
        </div>
      </nav>
      
      <main className="container mx-auto p-4">
        <div className="bg-blue-700 text-white p-4 mb-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Day 5 (Saturday, May 24) - Family Fun Day</h2>
          <p className="text-white">Interactive experiences for the whole family</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Morning</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-800">
              <li>Breakfast at your hotel</li>
              <li>Visit <a href="https://www.legolanddiscoverycentre.com/berlin/en/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LEGOLAND Discovery Centre Berlin</a> - Perfect for kids aged 10-12</li>
              <li>Enjoy the rides, 4D cinema, and LEGO building areas</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Lunch</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-800">
              <li>Lunch at <a href="https://www.mallofberlin.de/en/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Mall of Berlin</a> food court - Many options for everyone</li>
              <li>Address: Leipziger Platz 12, 10117 Berlin</li>
              <li>Features: Variety of international cuisines, quick service</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Afternoon</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-800">
              <li>Shopping at <a href="https://www.mallofberlin.de/en/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Mall of Berlin</a> - Over 300 shops (great for your 12-year-old's shopping interest)</li>
              <li>Visit the <a href="https://www.haribo.com/en-us" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Haribo Store</a> at Tauentzienstraße 2-3 (near KaDeWe) - Fun for kids to pick out German candy</li>
              <li>Explore Potsdamer Platz area</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Evening</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-800">
              <li>Dinner at Vapiano - Italian restaurant where kids can watch their food being prepared</li>
              <li>Address: Potsdamer Platz 1, 10785 Berlin</li>
              <li>Features: Interactive food preparation, pasta and pizza options</li>
              <li>Evening walk around Potsdamer Platz</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <h3 className="text-xl font-bold text-blue-800 mb-2">Today's Map</h3>
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d9713.148559374655!2d13.372731036418456!3d52.51631139351731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e2!4m5!1s0x47a84e1f9cec5c29%3A0x5a3c1c0c3c8fbd2!2sLittenstra%C3%9Fe%20106%2C%2010179%20Berlin%2C%20Germany!3m2!1d52.5144349!2d13.4159723!4m5!1s0x47a851c655f20989%3A0x62c542abd7ab2037!2sLEGOLAND%C2%AE%20Discovery%20Centre%20Berlin%2C%20Potsdamer%20Stra%C3%9Fe%204%2C%2010785%20Berlin%2C%20Germany!3m2!1d52.5091288!2d13.3751571!4m5!1s0x47a851c607196a5b%3A0xb7b0fd20e8678a3b!2sMall%20of%20Berlin%2C%20Leipziger%20Platz%2012%2C%2010117%20Berlin%2C%20Germany!3m2!1d52.5098085!2d13.3799454!4m5!1s0x47a8511d884b66c5%3A0x57df821ca8d97d3f!2sHARIBO%20Shop%20Berlin%2C%20Tauentzienstra%C3%9Fe%202-3%2C%2010789%20Berlin%2C%20Germany!3m2!1d52.5015217!2d13.3404798!5e0!3m2!1sen!2sus!4v1714149410799!5m2!1sen!2sus" 
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
          <h3 className="text-xl font-bold text-blue-800 mb-2">Tips for Day 5</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-800">
            <li>Book LEGOLAND tickets online in advance to save time and money</li>
            <li>Mall of Berlin is huge - plan which stores you want to visit in advance</li>
            <li>The Haribo Store is a fun experience for kids - they can create their own candy mix</li>
            <li>Vapiano can get busy on Saturday evenings - consider arriving early</li>
            <li>This day has a good mix of activities and shopping for your 12-year-old</li>
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
