import Link from 'next/link';

export default function Day4() {
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
          <Link href="/day4" className="hover:underline font-bold">Day 4</Link>
          <Link href="/day5" className="hover:underline">Day 5</Link>
          <Link href="/backup" className="hover:underline">Backup Options</Link>
          <Link href="/shopping" className="hover:underline">Shopping Days</Link>
        </div>
      </nav>
      
      <main className="container mx-auto p-4">
        <div className="bg-blue-700 text-white p-4 mb-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Day 4 (Friday, May 23) - Potsdam Day Trip</h2>
          <p className="text-white">Exploring palaces and gardens</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Morning</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-800">
              <li>Breakfast at your hotel</li>
              <li>Take the S-Bahn to Potsdam (about 30-40 minutes from Alexanderplatz)</li>
              <li>Visit <a href="https://www.spsg.de/en/palaces-gardens/object/sanssouci-palace" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Sanssouci Palace</a> and Gardens - Frederick the Great's summer palace</li>
              <li>Explore the beautiful terraced gardens</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Lunch</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-800">
              <li>Lunch at Mövenpick Restaurant in the Potsdam Hauptbahnhof</li>
              <li>Address: Babelsberger Str. 1, 14473 Potsdam</li>
              <li>Features: Family-friendly with kids menu, convenient location</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Afternoon</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-800">
              <li>Explore the <a href="http://www.potsdam.de/en/content/dutch-quarter" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Dutch Quarter</a> (Holländisches Viertel) - Charming area with red brick houses</li>
              <li>Shopping opportunity for your 12-year-old - unique boutiques and craft shops</li>
              <li>Visit Cecilienhof Palace (optional - if kids are interested in WWII history)</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Evening</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-800">
              <li>Dinner at Zum Fliegenden Holländer in the Dutch Quarter</li>
              <li>Address: Mittelstraße 30, 14467 Potsdam</li>
              <li>Features: Traditional German food, family-friendly</li>
              <li>Return to Berlin by S-Bahn</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <h3 className="text-xl font-bold text-blue-800 mb-2">Today's Map</h3>
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d19429.78722661516!2d13.0473!3d52.4009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e2!4m5!1s0x47a84e1f9cec5c29%3A0x5a3c1c0c3c8fbd2!2sLittenstra%C3%9Fe%20106%2C%2010179%20Berlin%2C%20Germany!3m2!1d52.5144349!2d13.4159723!4m5!1s0x47a8f5cd843bfdd9%3A0xb7e13e875f54aa6e!2sSanssouci%20Palace%2C%20Maulbeerallee%2C%20Potsdam%2C%20Germany!3m2!1d52.4042779!2d13.0384656!4m5!1s0x47a8f5c8959718a9%3A0x7edf0a3a9d5bf54c!2sDutch%20Quarter%2C%20Potsdam%2C%20Germany!3m2!1d52.4100442!2d13.0599298!4m5!1s0x47a8f5c8959718a9%3A0x7edf0a3a9d5bf54c!2sZum%20Fliegenden%20Holl%C3%A4nder%2C%20Mittelstra%C3%9Fe%2C%20Potsdam%2C%20Germany!3m2!1d52.4100442!2d13.0599298!5e0!3m2!1sen!2sus!4v1714149410799!5m2!1sen!2sus" 
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
          <h3 className="text-xl font-bold text-blue-800 mb-2">Tips for Day 4</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-800">
            <li>Buy a VBB day ticket that covers Berlin zones ABC (includes Potsdam)</li>
            <li>Book Sanssouci Palace tickets in advance - timed entry only</li>
            <li>Wear comfortable walking shoes - Sanssouci Gardens are extensive</li>
            <li>The Dutch Quarter is great for shopping and has many cute cafes for an afternoon break</li>
            <li>Consider renting bikes in Potsdam to cover more ground</li>
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
