astroSigns = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

function generateSign() {
  var randomMonth = Math.floor(Math.random * astroSigns.length);
  return astroSigns[randomMonth];
}

interests = [
  { title: "finance", ageRange: [20, 70] },
  { title: "acting", ageRange: [18, 40] },
  { title: "architecture", ageRange: [40, 80] },
  { title: "art", ageRange: [15, 70] },
  { title: "baking", ageRange: [20, 50] },
  { title: "ballet", ageRange: [16, 30] },
  { title: "bartending", ageRange: [21, 50] },
  { title: "biology", ageRange: [30, 70] },
  { title: "finance", ageRange: [20, 70] },
  { title: "photography", ageRange: [18, 40] },
  { title: "film", ageRange: [20, 40] },
  { title: "caretaking", ageRange: [35, 55] },
  { title: "cooking", ageRange: [16, 40] },
  { title: "computer programming", ageRange: [25, 60] },
  { title: "dentistry", ageRange: [40, 70] },
  { title: "medicine", ageRange: [40, 70] },
  { title: "engineering", ageRange: [30, 70] },
  { title: "farming", ageRange: [30, 70] },
  { title: "floristry", ageRange: [50, 90] },
  { title: "gardening", ageRange: [50, 90] },
  { title: "music", ageRange: [10, 35] },
  { title: "law", ageRange: [25, 80] },
  { title: "modeling", ageRange: [18, 30] },
  { title: "nursing", ageRange: [30, 70] },
  { title: "pharmaceuticals", ageRange: [35, 70] },
  { title: "politics", ageRange: [27, 70] },
  { title: "real estate", ageRange: [40, 70] },
  { title: "the church", ageRange: [40, 100] },
  { title: "science", ageRange: [40, 70] },
  { title: "singing", ageRange: [10, 30] },
  { title: "academia", ageRange: [35, 70] },
  { title: "teaching", ageRange: [25, 70] },
  { title: "vetenary care", ageRange: [25, 70] },
  { title: "classical music", ageRange: [35, 80] },
  { title: "restaurants", ageRange: [15, 50] },
];

function generateProfession(age) {
  var randomInterest = Math.floor(Math.random() * interests.length);
  while (
    age < interests[randomInterest].ageRange[0] ||
    age > interests[randomInterest].ageRange[1]
  ) {
    randomInterest = Math.floor(Math.random() * interests.length);
  }
  return interests[randomInterest].title;
}

// game of thrones / the matrix / deep red / beetlejuice / terminator / toy story
movies = [
  "tt0944947",
  "tt0133093",
  "tt0073582",
  "tt0094721",
  "tt0088247",
  "tt1979376",
];

