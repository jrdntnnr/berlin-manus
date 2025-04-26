import Link from 'next/link';

export default function Day1() {
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
          <Link href="/day1" className="hover:underline font-bold">Day 1</Link>
          <Link href="/day2" className="hover:underline">Day 2</Link>
          <Link href="/day3" className="hover:underline">Day 3</Link>
          <Link href="/day4" className="hover:underline">Day 4</Link>
          <Link href="/day5" className="hover:underline">Day 5</Link>
          <Link href="/backup" className="hover:underline">Backup Options</Link>
          <Link href="/shopping" className="hover:underline">Shopping Days</Link>
        </div>
      </nav>
      
      <main className="container mx-auto p-4">
        <div className="bg-blue-700 text-white p-4 mb-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Day 1 (Tuesday, May 20) - Alexanderplatz & Surroundings</h2>
          <p className="text-white">Getting oriented in your neighborhood</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Morning</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-800">
              <li>Breakfast at your hotel</li>
              <li>Visit <a href="https://tv-turm.de/en/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Berlin TV Tower (Fernsehturm)</a> - Great views of the city to get oriented (kid-friendly, impressive elevator ride)</li>
              <li>Explore Alexanderplatz and see the World Clock</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Lunch</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-800">
              <li><a href="https://www.hofbraeu-wirtshaus.de/en/berlin/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Hofbräu Berlin</a> - German restaurant with a kid-friendly menu</li>
              <li>Address: Karl-Liebknecht-Str. 30, 10178 Berlin</li>
              <li>Features: Traditional German food, spacious seating, children's menu</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Afternoon</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-800">
              <li>Visit <a href="https://www.smb.museum/en/museums-institutions/museumsinsel-berlin/home/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Museum Island</a> - Choose one museum based on kids' interests:
                <ul className="list-circle pl-5 mt-1">
                  <li>Pergamon Museum (ancient history)</li>
                  <li>Neues Museum (Egyptian collection including the bust of Nefertiti)</li>
                </ul>
              </li>
              <li>See <a href="https://www.berlinerdom.de/en/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Berlin Cathedral</a> from outside or go inside if interested</li>
              <li>Relax at Lustgarten Park</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Evening</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-800">
              <li>Dinner at <a href="https://www.berliner-kartoffelhaus.de/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Berliner Kartoffelhaus</a> (Berlin Potato House) - Specializes in potato dishes</li>
              <li>Address: Karl-Liebknecht-Str. 9, 10178 Berlin</li>
              <li>Features: Kid-friendly German cuisine, potato specialties</li>
              <li>Evening stroll along the Spree River</li>
              <li>Optional: Shopping at <a href="https://www.alexacentre.com/en/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Alexa Shopping Center</a> (open until 9 PM) - Perfect for your 12-year-old's shopping interest</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <h3 className="text-xl font-bold text-blue-800 mb-2">Today's Map</h3>
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d2428.1887632669376!2d13.407693776882784!3d52.51957787218435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e2!4m5!1s0x47a84e1f9cec5c29%3A0x5a3c1c0c3c8fbd2!2sLittenstra%C3%9Fe%20106%2C%2010179%20Berlin%2C%20Germany!3m2!1d52.5144349!2d13.4159723!4m5!1s0x47a84e1f7ba7a9fb%3A0x27efd3e03e24f082!2sFernsehturm%20Berlin%2C%20Panoramastra%C3%9Fe%2C%20Berlin%2C%20Germany!3m2!1d52.520815399999996!2d13.4094172!4m5!1s0x47a84e1f7ba7a9fb%3A0x6b8f1f7a5b4a1d4e!2sHofbr%C3%A4u%20Berlin%2C%20Karl-Liebknecht-Stra%C3%9Fe%2C%20Berlin%2C%20Germany!3m2!1d52.5219!2d13.4025!4m5!1s0x47a84e1f7ba7a9fb%3A0x6b8f1f7a5b4a1d4e!2sBerliner%20Kartoffelhaus%2C%20Karl-Liebknecht-Stra%C3%9Fe%2C%20Berlin%2C%20Germany!3m2!1d52.5219!2d13.4025!5e0!3m2!1sen!2sus!4v1714149410799!5m2!1sen!2sus" 
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
          <h3 className="text-xl font-bold text-blue-800 mb-2">Tips for Day 1</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-800">
            <li>Book TV Tower tickets in advance to avoid long lines</li>
            <li>Museum Island can be busy - consider getting a Museum Pass if you plan to visit multiple museums during your stay</li>
            <li>Alexa Shopping Center has many stores appealing to teenagers</li>
            <li>All locations today are within walking distance of your hotel</li>
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
