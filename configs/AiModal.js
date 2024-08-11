/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
 
   export const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
   history: [
    {
      role: "user",
      parts: [
        {text: "Generate Travel Plan for Location: Dartford, UK, for 3 Days and 2 Night for Couple with a Moderate budget with a Flight details, Flight Price with Booking url, Hotels Options list with hotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time to travel each of the location for 3 Days and 2 night with each day plan with best time to visit in JSON format\n"},
      ],
    },
    {
      role: "model",
      parts: [
        {text: "```json\n{\n  \"flight\": {\n    \"details\": \"London Gatwick Airport (LGW) to Dartford, Kent (approx. 40 minutes drive from airport)\",\n    \"price\": \"£30 - £50 per person (round trip)\",\n    \"booking_url\": \"https://www.easyjet.com/\",\n    \"tips\": \"Check for deals and book in advance, especially during peak season.\"\n  },\n  \"hotel\": [\n    {\n      \"name\": \"The Dartford Marriott Hotel\",\n      \"address\": \"Marriott Way, Dartford, DA1 1PH, United Kingdom\",\n      \"price\": \"£100 - £150 per night\",\n      \"image_url\": \"https://www.marriott.com/static/media/hotels/dtfdv/dtfdv_exterior_0002.jpg\",\n      \"geo_coordinates\": \"51.4893, 0.3261\",\n      \"rating\": 4.0,\n      \"description\": \"Modern hotel with comfortable rooms, a restaurant, and a bar.\"\n    },\n    {\n      \"name\": \"The Premier Inn Dartford\",\n      \"address\": \"19 Watling Street, Dartford, DA1 1DJ, United Kingdom\",\n      \"price\": \"£60 - £90 per night\",\n      \"image_url\": \"https://www.premierinn.com/media/images/hotels/dartford/dartford-exterior.jpg\",\n      \"geo_coordinates\": \"51.4891, 0.3217\",\n      \"rating\": 3.5,\n      \"description\": \"Budget-friendly hotel with comfortable rooms and a restaurant.\"\n    },\n    {\n      \"name\": \"The Holiday Inn Express Dartford\",\n      \"address\": \"London Road, Dartford, DA1 1PB, United Kingdom\",\n      \"price\": \"£70 - £110 per night\",\n      \"image_url\": \"https://media.ihg.com/media/images/hotels/media/1/10870/10870_1_1646941603.jpg\",\n      \"geo_coordinates\": \"51.4935, 0.3179\",\n      \"rating\": 3.8,\n      \"description\": \"Clean and modern hotel with a breakfast included.\"\n    }\n  ],\n  \"places_to_visit\": [\n    {\n      \"name\": \"The Historic Dockyard Chatham\",\n      \"details\": \"A fascinating museum and historical site showcasing the maritime history of Chatham.\",\n      \"image_url\": \"https://www.thedockyard.co.uk/media/1300/dockyard-aerial-2.jpg\",\n      \"geo_coordinates\": \"51.3757, 0.5502\",\n      \"ticket_pricing\": \"Adult: £15.50, Child: £8.50\",\n      \"time_to_travel\": \"30-45 minutes by car from Dartford\"\n    },\n    {\n      \"name\": \"Rochester Castle\",\n      \"details\": \"A majestic Norman castle with stunning views of the Medway.\",\n      \"image_url\": \"https://www.english-heritage.org.uk/sites/rochester-castle/media/167501/rochester-castle-02.jpg\",\n      \"geo_coordinates\": \"51.4113, 0.5202\",\n      \"ticket_pricing\": \"Adult: £12.50, Child: £7.50\",\n      \"time_to_travel\": \"20-30 minutes by car from Dartford\"\n    },\n    {\n      \"name\": \"Bluewater Shopping Centre\",\n      \"details\": \"A large shopping centre with over 300 stores, restaurants, and entertainment.\"\n      \"image_url\": \"https://www.bluewater.co.uk/media/images/uploads/bluewater_exterior_full.jpg\",\n      \"geo_coordinates\": \"51.4380, 0.4044\",\n      \"ticket_pricing\": \"Free\",\n      \"time_to_travel\": \"15-20 minutes by car from Dartford\"\n    },\n    {\n      \"name\": \"The O2\",\n      \"details\": \"A popular entertainment venue hosting concerts, events, and exhibitions.\",\n      \"image_url\": \"https://www.theo2.co.uk/media/images/o2-arena-london-header.jpg\",\n      \"geo_coordinates\": \"51.5059, 0.0036\",\n      \"ticket_pricing\": \"Varies depending on event\",\n      \"time_to_travel\": \"40-50 minutes by car from Dartford\"\n    },\n    {\n      \"name\": \"Gravesend Town\",\n      \"details\": \"A historic town with a charming riverside promenade and a variety of shops and restaurants.\"\n      \"image_url\": \"https://www.gravesend.gov.uk/media/images/gravesend_town.jpg\",\n      \"geo_coordinates\": \"51.4550, 0.5295\",\n      \"ticket_pricing\": \"Free\",\n      \"time_to_travel\": \"15-20 minutes by car from Dartford\"\n    }\n  ],\n  \"day_plan\": [\n    {\n      \"day\": \"Day 1\",\n      \"activities\": [\n        {\n          \"time\": \"Morning (10:00 AM - 12:00 PM)\",\n          \"activity\": \"Explore the Historic Dockyard Chatham, a fascinating museum and historical site showcasing the maritime history of Chatham.\",\n          \"location\": \"The Historic Dockyard Chatham\",\n          \"details\": \"Learn about the Royal Navy's past and see historic ships, submarines, and aircraft.\"\n        },\n        {\n          \"time\": \"Afternoon (12:30 PM - 2:30 PM)\",\n          \"activity\": \"Enjoy lunch at the Dockyard’s restaurant or explore the cafes and shops around the area.\",\n          \"location\": \"The Historic Dockyard Chatham\",\n          \"details\": \"Try the traditional fish and chips or explore the variety of food options available.\"\n        },\n        {\n          \"time\": \"Evening (3:00 PM - 5:00 PM)\",\n          \"activity\": \"Drive to Rochester Castle and climb the tower for stunning views of the Medway.\",\n          \"location\": \"Rochester Castle\",\n          \"details\": \"Enjoy the picturesque views and learn about the history of the castle.\"\n        },\n        {\n          \"time\": \"Evening (5:30 PM - 7:30 PM)\",\n          \"activity\": \"Have dinner at one of the charming restaurants in Rochester.\",\n          \"location\": \"Rochester Castle\",\n          \"details\": \"Try local delicacies or explore international cuisine options.\"\n        }\n      ]\n    },\n    {\n      \"day\": \"Day 2\",\n      \"activities\": [\n        {\n          \"time\": \"Morning (10:00 AM - 1:00 PM)\",\n          \"activity\": \"Visit Bluewater Shopping Centre and indulge in retail therapy.\",\n          \"location\": \"Bluewater Shopping Centre\",\n          \"details\": \"Explore a variety of stores, enjoy a coffee break, and have lunch at one of the many restaurants.\"\n        },\n        {\n          \"time\": \"Afternoon (1:30 PM - 4:30 PM)\",\n          \"activity\": \"Relax at the Bluewater Spa or enjoy the entertainment options at the centre.\",\n          \"location\": \"Bluewater Shopping Centre\",\n          \"details\": \"Enjoy a massage, a manicure, or catch a movie at the cinema.\"\n        },\n        {\n          \"time\": \"Evening (5:00 PM - 7:00 PM)\",\n          \"activity\": \"Head to Gravesend Town and enjoy a stroll along the riverside promenade.\",\n          \"location\": \"Gravesend Town\",\n          \"details\": \"Enjoy the scenic views and visit the shops and restaurants in the area.\"\n        },\n        {\n          \"time\": \"Evening (7:30 PM - 9:30 PM)\",\n          \"activity\": \"Have dinner at a restaurant in Gravesend and enjoy the evening atmosphere.\",\n          \"location\": \"Gravesend Town\",\n          \"details\": \"Try local seafood or explore other cuisine options.\"\n        }\n      ]\n    },\n    {\n      \"day\": \"Day 3\",\n      \"activities\": [\n        {\n          \"time\": \"Morning (10:00 AM - 12:00 PM)\",\n          \"activity\": \"Enjoy a leisurely breakfast at your hotel or a local café in Dartford.\",\n          \"location\": \"Dartford\",\n          \"details\": \"Start your day with a delicious breakfast and enjoy the local atmosphere.\"\n        },\n        {\n          \"time\": \"Afternoon (12:30 PM - 2:30 PM)\",\n          \"activity\": \"Explore Dartford town centre and discover its historical landmarks.\",\n          \"location\": \"Dartford\",\n          \"details\": \"Visit the historic St. Edmund’s Church or the Dartford Borough Museum.\"\n        },\n        {\n          \"time\": \"Afternoon (3:00 PM - 5:00 PM)\",\n          \"activity\": \"Head to the O2 and enjoy an afternoon of entertainment.\",\n          \"location\": \"The O2\",\n          \"details\": \"Watch a show, attend a concert, or visit the Up at The O2 climbing experience.\"\n        },\n        {\n          \"time\": \"Evening (6:00 PM - 8:00 PM)\",\n          \"activity\": \"Have dinner at one of the restaurants near The O2.\",\n          \"location\": \"The O2\",\n          \"details\": \"Enjoy a delicious meal and watch the vibrant atmosphere around The O2.\"\n        },\n        {\n          \"time\": \"Evening (8:30 PM - 10:30 PM)\",\n          \"activity\": \"Return to your hotel, relax, and reflect on your trip.\",\n          \"location\": \"Dartford\",\n          \"details\": \"Pack your bags and prepare for your journey back home.\"\n        }\n      ]\n    }\n  ]\n}\n```\n\n**Notes:**\n\n* This is just a sample plan and can be customized based on your interests and preferences.\n* The provided flight and hotel prices are approximate and may vary depending on the time of year and availability.\n* It's recommended to book flights and accommodation in advance, especially during peak season.\n* Consider purchasing a travel pass for public transportation to save money on travel costs.\n* Allow for extra time when traveling between locations, as traffic conditions can vary.\n* Enjoy your trip! \n"},
      ],
    },
  ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());

  