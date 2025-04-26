import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 p-4">
        <div className="container mx-auto">
          <Link href="/" className="text-blue-400 hover:underline">← Back to Home</Link>
          <h1 className="text-3xl font-bold mt-2">Additional Shopping Days</h1>
        </div>
      </header>

      <div className="container mx-auto p-4">
        <p className="text-gray-300 mb-8">
          Based on your interest in shopping, especially for your 12-year-old, we've created these additional shopping-focused day plans. 
          Each includes transportation from your hotel at Littenstraße 106, kid-friendly dining options, and diverse shopping experiences.
        </p>

        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Kurfürstendamm & Haribo Shop Day</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Morning</h3>
            <div className="bg-gray-700 rounded-lg p-4">
              <p>Start at Littenstraße 106 (hotel) and take U2 to Wittenbergplatz</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Visit the famous <a href="https://www.kadewe.de/en/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"><strong>KaDeWe</strong></a> (Kaufhaus des Westens) department store</li>
                <li>Explore the luxury food hall on the 6th floor</li>
                <li>Browse through high-end fashion departments</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Lunch</h3>
            <div className="bg-gray-700 rounded-lg p-4">
              <p>Enjoy lunch at one of KaDeWe's restaurants with views over Berlin</p>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Afternoon</h3>
            <div className="bg-gray-700 rounded-lg p-4">
              <ul className="list-disc pl-6">
                <li>Visit the <a href="https://www.haribo.com/en" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"><strong>Haribo Shop</strong></a> at Tauentzienstraße 2-3 (just a 2-minute walk from Wittenbergplatz)</li>
                <li>Explore <a href="https://www.visitberlin.de/en/shopping-kurfurstendamm" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Kurfürstendamm</a> (Ku'damm) luxury shopping boulevard</li>
                <li>Visit designer stores like Louis Vuitton, Gucci, and Prada</li>
                <li>Check out Europa-Center shopping mall</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Dinner</h3>
            <div className="bg-gray-700 rounded-lg p-4">
              <p>Restaurant options near Ku'damm with kid-friendly menus:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Hard Rock Cafe Berlin (Kurfürstendamm 224)</li>
                <li>Vapiano (casual Italian, multiple locations)</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-white mb-2">Map of Day's Locations</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d9713.893008278327!2d13.37241267823486!3d52.50292267805605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x47a84e1eabc10895%3A0x9e3a1fcc313cc3bb!2sLittenstra%C3%9Fe%20106%2C%2010179%20Berlin%2C%20Germany!3m2!1d52.5161328!2d13.4134507!4m5!1s0x47a8505586a52303%3A0x9caa0b48c3f7e2a1!2sTauentzienstra%C3%9Fe%202-3%2C%2010789%20Berlin%2C%20Germany!3m2!1d52.5022649!2d13.3387569!5e0!3m2!1sen!2sus!4v1682517462752!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Friedrichstraße & Hackescher Markt Day</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Morning</h3>
            <div className="bg-gray-700 rounded-lg p-4">
              <p>Take S-Bahn from Alexanderplatz to Friedrichstraße</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Visit <strong>Galeries Lafayette</strong> Berlin (French department store)</li>
                <li>Explore Quartier 206 with its elegant Art Deco style and exclusive boutiques</li>
                <li>Browse Dussmann "department store of culture" for books, music, and gifts</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Lunch</h3>
            <div className="bg-gray-700 rounded-lg p-4">
              <p>Eat at Augustiner am Gendarmenmarkt (traditional German food with kids menu)</p>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Afternoon</h3>
            <div className="bg-gray-700 rounded-lg p-4">
              <ul className="list-disc pl-6">
                <li>Walk or take a short tram ride to Hackescher Markt</li>
                <li>Explore the boutiques and designer shops in Hackescher Höfe (beautiful restored courtyard complex)</li>
                <li>Visit international fashion chain shops like Urban Outfitters</li>
                <li>Check out small independent designer stores</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Dinner</h3>
            <div className="bg-gray-700 rounded-lg p-4">
              <p><a href="https://www.hofbraeu-wirtshaus.de/en/berlin/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Hofbräu Berlin</a> (Bavarian restaurant with kid-friendly options)</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-white mb-2">Map of Day's Locations</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d4855.9789984089!2d13.394099139550781!3d52.52066500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x47a84e1eabc10895%3A0x9e3a1fcc313cc3bb!2sLittenstra%C3%9Fe%20106%2C%2010179%20Berlin%2C%20Germany!3m2!1d52.5161328!2d13.4134507!4m5!1s0x47a851df3b3d6b91%3A0xb4aa0f057c763e33!2sFriedrichstra%C3%9Fe%2C%20Berlin%2C%20Germany!3m2!1d52.5170365!2d13.3888599!5e0!3m2!1sen!2sus!4v1682517562752!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Prenzlauer Berg Vintage Shopping Day</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Morning</h3>
            <div className="bg-gray-700 rounded-lg p-4">
              <p>Take tram from Alexanderplatz to Kastanienallee</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Explore the "hipster mile" of Kastanienallee with its vintage shops and boutiques</li>
                <li>Visit Garage Prenzlauer Berg (three-floor vintage store)</li>
                <li>Browse through unique clothing and accessories</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Lunch</h3>
            <div className="bg-gray-700 rounded-lg p-4">
              <p>Prater Biergarten (Berlin's oldest beer garden with simple German food, family-friendly)</p>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Afternoon</h3>
            <div className="bg-gray-700 rounded-lg p-4">
              <ul className="list-disc pl-6">
                <li>Visit Mauerpark (if Sunday, experience the famous flea market with vintage clothes, handicrafts, and street performances)</li>
                <li>Explore Kulturbrauerei (former brewery turned cultural hub)</li>
                <li>Check out small designer shops along Oderberger Straße</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Dinner</h3>
            <div className="bg-gray-700 rounded-lg p-4">
              <p>November restaurant (Japanese-inspired cuisine with children's options)</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-white mb-2">Map of Day's Locations</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d9711.35478767432!2d13.399999978234863!3d52.53292267805605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x47a84e1eabc10895%3A0x9e3a1fcc313cc3bb!2sLittenstra%C3%9Fe%20106%2C%2010179%20Berlin%2C%20Germany!3m2!1d52.5161328!2d13.4134507!4m5!1s0x47a84e1f5dba4d27%3A0x2d77b434f2da3456!2sKastanienallee%2C%20Berlin%2C%20Germany!3m2!1d52.5387126!2d13.4012561!5e0!3m2!1sen!2sus!4v1682517662752!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Mall of Berlin & Potsdamer Platz Day</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Morning</h3>
            <div className="bg-gray-700 rounded-lg p-4">
              <p>Take U2 from Alexanderplatz to Potsdamer Platz</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Visit the <a href="https://www.mallofberlin.de/en/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"><strong>Mall of Berlin</strong></a> at Leipziger Platz with its 300 shops</li>
                <li>Explore high-end fashion labels and Germany's largest Food Court</li>
                <li>Shop for clothing, electronics, and souvenirs</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Lunch</h3>
            <div className="bg-gray-700 rounded-lg p-4">
              <p>Try various options at the Mall of Berlin Food Court</p>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Afternoon</h3>
            <div className="bg-gray-700 rounded-lg p-4">
              <ul className="list-disc pl-6">
                <li>Walk to Potsdamer Platz for more shopping at Potsdamer Platz Arkaden</li>
                <li>Visit <a href="https://www.legolanddiscoverycentre.com/berlin/en/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">LEGO Store</a> (great for kids)</li>
                <li>Check out Sony Center with its impressive architecture</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Dinner</h3>
            <div className="bg-gray-700 rounded-lg p-4">
              <p>Vapiano at Potsdamer Platz (Italian food with options for kids)</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-white mb-2">Map of Day's Locations</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d9713.893008278327!2d13.37241267823486!3d52.50292267805605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x47a84e1eabc10895%3A0x9e3a1fcc313cc3bb!2sLittenstra%C3%9Fe%20106%2C%2010179%20Berlin%2C%20Germany!3m2!1d52.5161328!2d13.4134507!4m5!1s0x47a851c655f20989%3A0x62428a62448ad322!2sMall%20of%20Berlin%2C%20Leipziger%20Pl.%2012%2C%2010117%20Berlin%2C%20Germany!3m2!1d52.5091863!2d13.3798926!5e0!3m2!1sen!2sus!4v1682517762752!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Alexanderplatz & Alexa Shopping Day</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Morning</h3>
            <div className="bg-gray-700 rounded-lg p-4">
              <p>Start at your hotel and walk to Alexanderplatz</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Visit Galeria Kaufhof department store</li>
                <li>Explore the World Clock, TV Tower area, and central square</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Lunch</h3>
            <div className="bg-gray-700 rounded-lg p-4">
              <p>Alex Foodcourt in Alexa Shopping Centre</p>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Afternoon</h3>
            <div className="bg-gray-700 rounded-lg p-4">
              <ul className="list-disc pl-6">
                <li>Shop at <a href="https://www.alexacentre.com/en/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"><strong>Alexa Shopping Centre</strong></a> with its 180 shops and 17 restaurants</li>
                <li>Visit Primark for budget-friendly fashion</li>
                <li>Check out Saturn electronics store</li>
                <li>Browse through various fashion retailers suitable for teenagers</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Dinner</h3>
            <div className="bg-gray-700 rounded-lg p-4">
              <p>Return to hotel area for dinner at <a href="https://www.berliner-kartoffelhaus.de/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Berliner Kartoffelhaus</a> (potato-focused German restaurant with kids menu)</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-white mb-2">Map of Day's Locations</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2427.9732520695817!2d13.408262315818994!3d52.51613297981431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x47a84e1eabc10895%3A0x9e3a1fcc313cc3bb!2sLittenstra%C3%9Fe%20106%2C%2010179%20Berlin%2C%20Germany!3m2!1d52.5161328!2d13.4134507!4m5!1s0x47a84e1f514f3c59%3A0x19c1e1ff02d7e401!2sAlexa%2C%20Grunerstra%C3%9Fe%2020%2C%2010179%20Berlin%2C%20Germany!3m2!1d52.5198647!2d13.4158809!5e0!3m2!1sen!2sus!4v1682517862752!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>

        <div className="mt-8 mb-4">
          <Link href="/" className="text-blue-400 hover:underline">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
