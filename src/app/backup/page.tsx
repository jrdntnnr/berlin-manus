import Link from 'next/link';

export default function Backup() {
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
          <Link href="/day5" className="hover:underline">Day 5</Link>
          <Link href="/backup" className="hover:underline font-bold">Backup Options</Link>
          <Link href="/shopping" className="hover:underline">Shopping Days</Link>
        </div>
      </nav>
      
      <main className="container mx-auto p-4">
        <div className="bg-blue-700 text-white p-4 mb-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Backup Options</h2>
          <p className="text-white">Alternative plans in case of bad weather or other changes</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <h3 className="text-xl font-bold text-blue-800 mb-2">Extra Day 1 - Indoor Activities</h3>
          <p className="text-gray-800 mb-4">Perfect for rainy days or if you need alternatives to the main itinerary</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="text-lg font-bold text-blue-800 mb-2">Morning</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                <li>Visit the <a href="https://www.smb.museum/en/museums-institutions/neues-museum/home/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Neues Museum</a> - Famous for the bust of Nefertiti (kid-friendly exhibits)</li>
                <li>Explore the <a href="https://www.smb.museum/en/museums-institutions/pergamonmuseum/home/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Pergamon Museum</a> - Ancient history with impressive reconstructions</li>
              </ul>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="text-lg font-bold text-blue-800 mb-2">Lunch</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                <li>Lunch at Hackescher Markt - Many family-friendly options</li>
                <li>Recommended: Zeit für Brot - Famous for cinnamon rolls</li>
                <li>Address: Alte Schönhauser Str. 4, 10119 Berlin</li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="text-lg font-bold text-blue-800 mb-2">Afternoon</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                <li>Visit the <a href="https://www.deutsches-technikmuseum.de/en/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">German Museum of Technology</a> - Interactive exhibits perfect for kids</li>
                <li>See the aviation exhibition with real airplanes</li>
                <li>Explore the computer and technology sections</li>
              </ul>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="text-lg font-bold text-blue-800 mb-2">Evening</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                <li>Dinner at <a href="https://www.mallofberlin.de/en/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Mall of Berlin</a> food court</li>
                <li>Shopping at Mall of Berlin - Over 300 shops</li>
                <li>Address: Leipziger Platz 12, 10117 Berlin</li>
              </ul>
            </div>
          </div>
          
          <div className="aspect-w-16 aspect-h-9 mt-4">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d9713.148559374655!2d13.382731036418456!3d52.51631139351731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e2!4m5!1s0x47a84e1f9cec5c29%3A0x5a3c1c0c3c8fbd2!2sLittenstra%C3%9Fe%20106%2C%2010179%20Berlin%2C%20Germany!3m2!1d52.5144349!2d13.4159723!4m5!1s0x47a84e1f7ba7a9fb%3A0x6b8f1f7a5b4a1d4e!2sNeues%20Museum%2C%20Bodestraße%2C%20Berlin%2C%20Germany!3m2!1d52.5219!2d13.4025!4m5!1s0x47a84e1f7ba7a9fb%3A0x6b8f1f7a5b4a1d4e!2sDeutsches%20Technikmuseum%20Berlin%2C%20Trebbiner%20Stra%C3%9Fe%2C%20Berlin%2C%20Germany!3m2!1d52.5219!2d13.4025!4m5!1s0x47a851c607196a5b%3A0xb7b0fd20e8678a3b!2sMall%20of%20Berlin%2C%20Leipziger%20Platz%2C%20Berlin%2C%20Germany!3m2!1d52.5098085!2d13.3799454!5e0!3m2!1sen!2sus!4v1714149410799!5m2!1sen!2sus" 
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
          <h3 className="text-xl font-bold text-blue-800 mb-2">Extra Day 2 - West Berlin Shopping & Fun</h3>
          <p className="text-gray-800 mb-4">A day focused on shopping and entertainment in West Berlin</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="text-lg font-bold text-blue-800 mb-2">Morning</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                <li>Visit <a href="https://www.kadewe.de/en/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">KaDeWe</a> (Kaufhaus des Westens) - Europe's second-largest department store</li>
                <li>Explore the famous 6th floor food hall - amazing for kids!</li>
                <li>Visit the <a href="https://www.haribo.com/en-us" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Haribo Store</a> at Tauentzienstraße 2-3 - Create your own candy mix</li>
              </ul>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="text-lg font-bold text-blue-800 mb-2">Lunch</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                <li>Lunch at KaDeWe food hall - Many options to choose from</li>
                <li>Try traditional German food or international cuisine</li>
                <li>Special desserts for the kids</li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="text-lg font-bold text-blue-800 mb-2">Afternoon</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                <li>Shopping along Kurfürstendamm (Ku'damm) - Berlin's famous shopping boulevard</li>
                <li>Visit Europa-Center - Shopping mall with a unique water clock</li>
                <li>Explore Bikini Berlin - Concept mall with unique shops</li>
              </ul>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="text-lg font-bold text-blue-800 mb-2">Evening</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                <li>Dinner at Bavarium in the Europa-Center - Bavarian restaurant with kid-friendly options</li>
                <li>Address: Tauentzienstraße 9-12, 10789 Berlin</li>
                <li>Optional: Visit the Monkey Bar at 25hours Hotel for panoramic views (family-friendly until 8 PM)</li>
              </ul>
            </div>
          </div>
          
          <div className="aspect-w-16 aspect-h-9 mt-4">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d9713.148559374655!2d13.332731036418456!3d52.51631139351731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e2!4m5!1s0x47a84e1f9cec5c29%3A0x5a3c1c0c3c8fbd2!2sLittenstra%C3%9Fe%20106%2C%2010179%20Berlin%2C%20Germany!3m2!1d52.5144349!2d13.4159723!4m5!1s0x47a8511d884b66c5%3A0x57df821ca8d97d3f!2sKaDeWe%20Berlin%2C%20Tauentzienstra%C3%9Fe%2C%20Berlin%2C%20Germany!3m2!1d52.5015217!2d13.3404798!4m5!1s0x47a8511d884b66c5%3A0x57df821ca8d97d3f!2sHARIBO%20Shop%20Berlin%2C%20Tauentzienstra%C3%9Fe%202-3%2C%2010789%20Berlin%2C%20Germany!3m2!1d52.5015217!2d13.3404798!4m5!1s0x47a850f8a5f6c9c7%3A0xb7b0fd20e8678a3b!2sEuropa-Center%2C%20Tauentzienstra%C3%9Fe%2C%20Berlin%2C%20Germany!3m2!1d52.5015217!2d13.3404798!5e0!3m2!1sen!2sus!4v1714149410799!5m2!1sen!2sus" 
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
          <h3 className="text-xl font-bold text-blue-800 mb-2">Tips for Backup Days</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-800">
            <li>These backup plans can replace any day in your main itinerary if needed</li>
            <li>Extra Day 1 is perfect for rainy weather as it focuses on indoor activities</li>
            <li>Extra Day 2 is great for shopping enthusiasts and can be adjusted to spend more time in specific stores</li>
            <li>Both days include activities that will appeal to your 12-year-old's interest in shopping</li>
            <li>Consider weather forecasts when deciding whether to substitute these backup days</li>
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
