import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 p-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Berlin Family Trip Planner</h1>
          <p className="text-gray-300 mt-2">May, 2025 | Staying in Mitte near Alexanderplatz</p>
        </div>
      </header>

      <div className="container mx-auto p-4">
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Your 5-Day Berlin Itinerary</h2>
          <p className="text-gray-300 mb-6">
            Welcome to your personalized Berlin family trip planner! We've created a comprehensive 5-day itinerary for your family of four, including your children aged 10 and 12. Each day is designed with kid-friendly attractions, suitable dining options, and shopping opportunities for your eldest child.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-2">Day 1: Alexanderplatz & Surroundings</h3>
              <p className="text-gray-300 mb-3">Explore the area around your hotel, including the TV Tower, Alexa Shopping Center, and Alexanderplatz.</p>
              <Link href="/day1" className="text-blue-400 hover:underline">View Day 1 Details →</Link>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-2">Day 2: Museum Island & Berlin Cathedral</h3>
              <p className="text-gray-300 mb-3">Visit the UNESCO World Heritage site of Museum Island, Berlin Cathedral, and the interactive DDR Museum.</p>
              <Link href="/day2" className="text-blue-400 hover:underline">View Day 2 Details →</Link>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-2">Day 3: Berlin Wall & Cold War History</h3>
              <p className="text-gray-300 mb-3">Explore Berlin's Cold War history at the East Side Gallery, Checkpoint Charlie, and related sites.</p>
              <Link href="/day3" className="text-blue-400 hover:underline">View Day 3 Details →</Link>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-2">Day 4: Tiergarten & Zoo</h3>
              <p className="text-gray-300 mb-3">Spend the day at Berlin Zoo, explore Tiergarten park, and visit the Victory Column.</p>
              <Link href="/day4" className="text-blue-400 hover:underline">View Day 4 Details →</Link>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-2">Day 5: Potsdam Day Trip</h3>
              <p className="text-gray-300 mb-3">Take a day trip to nearby Potsdam to see Sanssouci Palace, the Dutch Quarter, and more.</p>
              <Link href="/day5" className="text-blue-400 hover:underline">View Day 5 Details →</Link>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-2">Backup Options</h3>
              <p className="text-gray-300 mb-3">Two extra days of activities in case of bad weather, closures, or if you want alternatives.</p>
              <Link href="/backup" className="text-blue-400 hover:underline">View Backup Options →</Link>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Special Shopping Days</h2>
          <p className="text-gray-300 mb-6">
            Since your eldest child is interested in shopping, we've created additional shopping-focused day plans that you can substitute into your itinerary. These include the Haribo shop and various shopping districts throughout Berlin.
          </p>
          
          <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-2">Shopping-Focused Day Plans</h3>
            <p className="text-gray-300 mb-3">Explore Berlin's best shopping areas including Kurfürstendamm with the Haribo Shop, Friedrichstraße, Prenzlauer Berg, Mall of Berlin, and Alexanderplatz.</p>
            <Link href="/shopping" className="text-blue-400 hover:underline">View Shopping Day Plans →</Link>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Trip Overview</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Your Accommodation</h3>
            <div className="bg-gray-700 rounded-lg p-4">
              <p className="text-gray-300">Your hotel is located at Littenstraße 106 in the Mitte district, near Alexanderplatz. This central location provides excellent access to public transportation and many attractions are within walking distance.</p>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Transportation Tips</h3>
            <div className="bg-gray-700 rounded-lg p-4">
              <ul className="list-disc pl-6 text-gray-300">
                <li>Consider purchasing a Berlin WelcomeCard for unlimited public transportation and discounts at many attractions</li>
                <li>Berlin's public transportation system includes U-Bahn (subway), S-Bahn (urban rail), trams, and buses</li>
                <li>Children under 6 travel for free on public transportation</li>
                <li>Download the BVG app for real-time transportation information</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Family-Friendly Tips</h3>
            <div className="bg-gray-700 rounded-lg p-4">
              <ul className="list-disc pl-6 text-gray-300">
                <li>Most museums offer audio guides specifically designed for children</li>
                <li>Many restaurants have children's menus (Kindermenü) or will serve smaller portions upon request</li>
                <li>Public restrooms can be found in shopping centers, museums, and some U-Bahn stations</li>
                <li>Pharmacies (Apotheke) are marked with a red 'A' sign and can provide basic medical supplies</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Map of Your Hotel Location</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.0058959095396!2d13.411262076889106!3d52.51553087210752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e1eabc10895%3A0x9e3a1fcc313cc3bb!2sLittenstra%C3%9Fe%20106%2C%2010179%20Berlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1682518882752!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{border:0}} 
              allowFullScreen={true}  
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
