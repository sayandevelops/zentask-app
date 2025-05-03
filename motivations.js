const motivations = [
    {
      quote: "Every step you take is progress.",
      image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b"
    },
    {
      quote: "You’re closer than you think.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
    },
    {
      quote: "Make it happen. Shock everyone.",
      image: "https://images.unsplash.com/photo-1531497865141-42e7f44d0130"
    },
    {
      quote: "Be a warrior, not a worrier.",
      image: "https://images.unsplash.com/photo-1508780709619-79562169bc64"
    },
    {
      quote: "Consistency creates miracles.",
      image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca"
    },
    {
      quote: "Focus on the goal, not the obstacle.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
    },
    {
      quote: "Your best is yet to come.",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    {
      quote: "Keep your head high and your goals higher.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
    },
    {
      quote: "Turn your can'ts into cans.",
      image: "https://images.unsplash.com/photo-1524492449090-1aee2c954377"
    },
    {
      quote: "Today is another chance to get better.",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    },
    {
      quote: "Work hard, dream big.",
      image: "https://images.unsplash.com/photo-1573497019400-bd12c79dbb42"
    },
    {
      quote: "You are stronger than your excuses.",
      image: "https://images.unsplash.com/photo-1554774853-b414d35b2d4b"
    },
    {
      quote: "Stay hungry, stay foolish.",
      image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d"
    },
    {
      quote: "Big journeys begin with small steps.",
      image: "https://images.unsplash.com/photo-1494173853739-c21f58b16055"
    },
    {
      quote: "Success starts with self-discipline.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
    },
    {
      quote: "Fall down 7 times, get up 8.",
      image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
    },
    {
      quote: "Good things take time.",
      image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33"
    },
    {
      quote: "Be your own hero.",
      image: "https://images.unsplash.com/photo-1508923567004-3a6b8004f3d5"
    },
    {
      quote: "Focus. Hustle. Win.",
      image: "https://images.unsplash.com/photo-1521335629791-ce4aec67ddaf"
    },
    {
      quote: "Stay patient and trust your journey.",
      image: "https://images.unsplash.com/photo-1584467735871-bcdb0f5f3b91"
    },
    {
      quote: "Progress over perfection.",
      image: "https://images.unsplash.com/photo-1583347212881-7cf0425e2385"
    },
    {
      quote: "Everything you need is already inside you.",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e"
    },
    {
      quote: "Fuel your hustle with purpose.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
    },
    {
      quote: "Rise and grind.",
      image: "https://images.unsplash.com/photo-1494172961521-33799ddd43a5"
    },
    {
      quote: "You got this!",
      image: "https://images.unsplash.com/photo-1485217988980-11786ced9454"
    },
    {
      quote: "Do your future self a favor: work hard today.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
    },
    {
      quote: "Push harder than yesterday.",
      image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507"
    },
    {
      quote: "You are unstoppable.",
      image: "https://images.unsplash.com/photo-1573496799515-d20a7c8591e8"
    },
    {
      quote: "The comeback is always stronger than the setback.",
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
    },
    {
      quote: "Impossible is just an opinion.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
    },
    {
      quote: "Discipline = freedom.",
      image: "https://images.unsplash.com/photo-1601758003122-58e88b2f8234"
    },
    {
      quote: "Prove them wrong.",
      image: "https://images.unsplash.com/photo-1520975918312-0f2f68edeb3b"
    },
    {
      quote: "Let your actions speak.",
      image: "https://images.unsplash.com/photo-1608453445317-48f5212a938c"
    },
    {
      quote: "Mindset is everything.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
    },
    {
      quote: "No pressure, no diamonds.",
      image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca"
    },
    {
      quote: "Don’t quit. Suffer now and live the rest of your life a champion.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
    },
    {
      quote: "Winners are not afraid of losing.",
      image: "https://images.unsplash.com/photo-1496368935781-f07aa80c1b47"
    },
    {
      quote: "Focus on progress, not perfection.",
      image: "https://images.unsplash.com/photo-1525253086316-d0c936c814f8"
    },
    {
      quote: "Strive for greatness.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334"
    },
    {
      quote: "Make your move before you're ready.",
      image: "https://images.unsplash.com/photo-1508923567004-3a6b8004f3d5"
    },
    {
      quote: "Create your own sunshine.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
    },
    {
      quote: "Champions keep playing until they get it right.",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70"
    },
    {
      quote: "If you want it, work for it.",
      image: "https://images.unsplash.com/photo-1531497865141-42e7f44d0130"
    },
    {
      quote: "Success is earned, not given.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
    },
    {
      quote: "Start where you are. Use what you have.",
      image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335"
    },
    {
      quote: "Small effort today, big reward tomorrow.",
      image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546"
    },
    {
      quote: "Don’t just wish for it, work for it.",
      image: "https://images.unsplash.com/photo-1485217988980-11786ced9454"
    },
    {
      quote: "Dream big. Work smart.",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
    },
    {
      quote: "You were born to do great things.",
      image: "https://images.unsplash.com/photo-1533140402042-6661b3ca6847"
    },
    {
      quote: "There’s no traffic on the extra mile.",
      image: "https://images.unsplash.com/photo-1504457046788-2509f3e84c36"
    },
    // Continue from index 50
{
    quote: "Today is another chance to get better.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  },
  {
    quote: "Work hard, dream big.",
    image: "https://images.unsplash.com/photo-1515162305285-9c8cf9d9f6c4"
  },
  {
    quote: "You are stronger than your excuses.",
    image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507"
  },
  {
    quote: "Stay hungry, stay foolish.",
    image: "https://images.unsplash.com/photo-1531497865141-42e7f44d0130"
  },
  {
    quote: "Big journeys begin with small steps.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
  },
  {
    quote: "Success starts with self-discipline.",
    image: "https://images.unsplash.com/photo-1533055640609-dc73c1b8ba31"
  },
  {
    quote: "Fall down 7 times, get up 8.",
    image: "https://images.unsplash.com/photo-1600488994701-329c6a7b6cc0"
  },
  {
    quote: "Good things take time.",
    image: "https://images.unsplash.com/photo-1493244040629-496f6d136cc3"
  },
  {
    quote: "Be your own hero.",
    image: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368"
  },
  {
    quote: "Focus. Hustle. Win.",
    image: "https://images.unsplash.com/photo-1532074205216-9f576e6e9475"
  },
  {
    quote: "Stay patient and trust your journey.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
  },
  {
    quote: "Progress over perfection.",
    image: "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c"
  },
  {
    quote: "Everything you need is already inside you.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
  },
  {
    quote: "Fuel your hustle with purpose.",
    image: "https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c"
  },
  {
    quote: "Rise and grind.",
    image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde"
  },
  {
    quote: "You got this!",
    image: "https://images.unsplash.com/photo-1526481280691-1810a5d6e940"
  },
  {
    quote: "Do your future self a favor: work hard today.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
  },
  {
    quote: "Push harder than yesterday.",
    image: "https://images.unsplash.com/photo-1542144582-1ba00456b5d3"
  },
  {
    quote: "You are unstoppable.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
  },
  {
    quote: "The comeback is always stronger than the setback.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334"
  },
  {
    quote: "Impossible is just an opinion.",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df"
  },
  {
    quote: "Discipline = freedom.",
    image: "https://images.unsplash.com/photo-1589820296154-3c60f5c69c8a"
  },
  {
    quote: "Prove them wrong.",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df"
  },
  {
    quote: "Let your actions speak.",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d"
  },
  {
    quote: "Mindset is everything.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  {
    quote: "No pressure, no diamonds.",
    image: "https://images.unsplash.com/photo-1533738364-42d41c1d12ab"
  },
  {
    quote: "Don’t quit. Suffer now and live the rest of your life a champion.",
    image: "https://images.unsplash.com/photo-1483721310020-03333e577078"
  },
  {
    quote: "Winners are not afraid of losing.",
    image: "https://images.unsplash.com/photo-1558980664-10ea7c0373a9"
  },
  {
    quote: "Focus on progress, not perfection.",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325"
  },
  {
    quote: "Strive for greatness.",
    image: "https://images.unsplash.com/photo-1523289333742-be1143f6b766"
  },
  {
    quote: "Make your move before you're ready.",
    image: "https://images.unsplash.com/photo-1508780709619-79562169bc64"
  },
  {
    quote: "Create your own sunshine.",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
  },
  {
    quote: "Champions keep playing until they get it right.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
  },
  {
    quote: "If you want it, work for it.",
    image: "https://images.unsplash.com/photo-1477965283033-c4e4d1759b71"
  },
  {
    quote: "Success is earned, not given.",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136"
  },
  {
    quote: "Start where you are. Use what you have.",
    image: "https://images.unsplash.com/photo-1518600506278-4e8ef466b810"
  },
  {
    quote: "Small effort today, big reward tomorrow.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
  },
  {
    quote: "Don’t just wish for it, work for it.",
    image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d"
  },
  {
    quote: "Dream big. Work smart.",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
  },
  {
    quote: "You were born to do great things.",
    image: "https://images.unsplash.com/photo-1532171875345-91870b4a74f2"
  },
  {
    quote: "There’s no traffic on the extra mile.",
    image: "https://images.unsplash.com/photo-1532074205216-9f576e6e9475"
  },
  {
    quote: "Focus like a laser. Execute like a machine.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad"
  },
  {
    quote: "The only limit is you.",
    image: "https://images.unsplash.com/photo-1573497019227-1f74aa1b183d"
  },
  {
    quote: "Grind now, shine later.",
    image: "https://images.unsplash.com/photo-1589820296466-d845c6c6bd7b"
  },
  {
    quote: "Fall in love with the process.",
    image: "https://images.unsplash.com/photo-1558981283-c69d1cf8c776"
  },
  {
    quote: "Don’t count the days. Make the days count.",
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442"
  },
  {
    quote: "Energy and persistence conquer all things.",
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb"
  },
  {
    quote: "Stay focused and never give up.",
    image: "https://images.unsplash.com/photo-1601039641467-70646d5a1280"
  },
  {
    quote: "You are your only limit.",
    image: "https://images.unsplash.com/photo-1590487989350-e1876f92d1b1"
  }
  ];
  
 
  