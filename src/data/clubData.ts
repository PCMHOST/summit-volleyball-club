export const clubInfo = {
  name: "Summit Volleyball Club",
  shortName: "SVC",
  tagline: "Elevating Youth Volleyball in Greater Kansas City",
  director: "Erin Wilson",
  phone: "816-600-8383",
  email: "summitvbclub@gmail.com",
  venmo: "@SUMMITVC",
  facility: {
    name: "TM Fieldhouse",
    address: "1550 SE Hamblen Rd",
    city: "Lee's Summit, MO 64081",
    fullAddress: "1550 SE Hamblen Rd, Lee's Summit, MO 64081",
    mapUrl: "https://maps.google.com/?q=1550+SE+Hamblen+Rd+Lees+Summit+MO"
  },
  mailingAddress: "7905 SE 5th St, Blue Springs, MO 64014",
  tryoutRegistrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfUNaTqVxhk7yQLBdO3HCRh1X1dzkw2sLQnhuG6wUltKhcKsg/viewform?usp=header",
  ageCalculatorUrl: "https://hoaonline.org/UTL/UT6_JrAgeCalc2.C.php",
  hoaMembershipUrl: "https://www.hoavb.org",
  sportsEngineParentGuidePdf: "https://cdn3.sportngin.com/attachments/document/39cb-2015350/User_Account_Dashboard_Guide.pdf",
  sportsEngineHelpUrl: "https://help.sportsengine.com/en/collections/3502726-for-parents",
  socials: {
    facebook: "https://www.facebook.com/Summit-Volleyball-Club-KC-metro-249843418716624/",
    instagram: "https://www.instagram.com/svc_kcmetro/"
  }
};

export const stats = [
  { value: "20", label: "Competitive Club Teams" },
  { value: "3X", label: "Consecutive 18 National Bids" },
  { value: "11-0", label: "17 National MEQ Champions" },
  { value: "100%", label: "Whole-Athlete Development" }
];

export interface TeamItem {
  id: string;
  tab: string;
  slug: string;
  name: string;
  color: string;
  age: string;
  ageGroup: string;
  gender: 'Girls' | 'Boys';
  tier: string;
  badge?: string;
  coaches: string[];
  image: string;
  description: string;
}

export const girlsTeams: TeamItem[] = [
  {
    id: "team-11-black",
    tab: "11-1",
    slug: "11-black",
    name: "SVC 11 Black",
    color: "Black",
    age: "11U",
    ageGroup: "11U Girls",
    gender: "Girls",
    tier: "11-1 • Black",
    coaches: ["Jennifer Novogoratz (Assistant Coach)"],
    image: "/images/gallery/action-4.jpg",
    description: "Our foundational 11-1 competitive team fostering strong fundamentals, all-around court awareness, and a lifelong love for volleyball."
  },
  {
    id: "team-12-black",
    tab: "12-1",
    slug: "12-black",
    name: "SVC 12 Black",
    color: "Black",
    age: "12U",
    ageGroup: "12U Girls",
    gender: "Girls",
    tier: "12-1 • Black",
    coaches: ["Diana Blackburn (Head Coach)"],
    image: "/images/gallery/action-1.jpg",
    description: "Coached by 20+ year veteran Diana Blackburn with a standard of technical excellence, self-discipline, and team-first pride."
  },
  {
    id: "team-12-blue",
    tab: "12-2",
    slug: "12-blue",
    name: "SVC 12 Blue",
    color: "Blue",
    age: "12U",
    ageGroup: "12U Girls",
    gender: "Girls",
    tier: "12-2 • Blue",
    coaches: ["SVC 12U Coaching Staff"],
    image: "/images/gallery/action-2.jpg",
    description: "12-2 Blue roster building strong 6-rotation fundamentals, serve-receive consistency, and competitive HOA tournament experience."
  },
  {
    id: "team-13-black",
    tab: "13-1",
    slug: "13-black",
    name: "SVC 13 Black",
    color: "Black",
    age: "13U",
    ageGroup: "13U Girls",
    gender: "Girls",
    tier: "13-1 • Black",
    coaches: ["Alex Porter (Head Coach)", "Madison DeLuca (Assistant Coach)"],
    image: "/images/gallery/action-4.jpg",
    description: "Dynamic 13-1 roster focused on attacking timing, smart court decision-making, and mental toughness."
  },
  {
    id: "team-13-blue",
    tab: "13-2",
    slug: "13-blue",
    name: "SVC 13 Blue",
    color: "Blue",
    age: "13U",
    ageGroup: "13U Girls",
    gender: "Girls",
    tier: "13-2 • Blue",
    coaches: ["Trevor Gensler (Head Coach)"],
    image: "/images/gallery/action-5.jpg",
    description: "Led by 30-year veteran player and collegiate coach Trevor Gensler, instilling elite fundamentals and accountability."
  },
  {
    id: "team-14-national",
    tab: "14-1",
    slug: "14-national",
    name: "SVC 14 National",
    color: "National",
    age: "14U",
    ageGroup: "14U Girls",
    gender: "Girls",
    tier: "14-1 • National",
    coaches: ["Hannah Berry (Head Coach)", "Ava Martin (Assistant Coach)"],
    image: "/images/gallery/action-1.jpg",
    description: "Led by Assistant Club Director Hannah Berry and former collegiate libero Ava Martin, preparing 14U athletes for national qualifier competition."
  },
  {
    id: "team-14-blue",
    tab: "14-2",
    slug: "14-blue",
    name: "SVC 14 Blue",
    color: "Blue",
    age: "14U",
    ageGroup: "14U Girls",
    gender: "Girls",
    tier: "14-2 • Blue",
    coaches: ["Olivia Groom (Head Coach)", "Gracie Saale (Assistant Coach)"],
    image: "/images/gallery/action-2.jpg",
    description: "Focused on transitioning middle school athletes to high school speed, positional specialization, and team confidence."
  },
  {
    id: "team-14-white",
    tab: "14-3",
    slug: "14-white",
    name: "SVC 14 White",
    color: "White",
    age: "14U",
    ageGroup: "14U Girls",
    gender: "Girls",
    tier: "14-3 • White",
    coaches: ["SVC 14U Coaching Staff"],
    image: "/images/gallery/action-3.jpg",
    description: "Competitive 14-3 White roster emphasizing all-around skill mastery, communication, and HOA regional tournament competition."
  },
  {
    id: "team-15-black",
    tab: "15-1",
    slug: "15-black",
    name: "SVC 15 Black",
    color: "Black",
    age: "15U",
    ageGroup: "15U Girls",
    gender: "Girls",
    tier: "15-1 • Black",
    badge: "MEQ Qualifier Contenders",
    coaches: ["Connie Rogers (Head Coach)", "Samantha Rosales (Assistant Coach)"],
    image: "/images/teams/15-1-meq-champs.jpg",
    description: "High-energy 15-1 squad competing in National Qualifiers with a focus on coachability, effort, and strong team chemistry."
  },
  {
    id: "team-15-blue",
    tab: "15-2",
    slug: "15-blue",
    name: "SVC 15 Blue",
    color: "Blue",
    age: "15U",
    ageGroup: "15U Girls",
    gender: "Girls",
    tier: "15-2 • Blue",
    coaches: ["SVC 15U Coaching Staff"],
    image: "/images/gallery/action-5.jpg",
    description: "Competitive 15-2 Blue squad focused on high-tempo transition offense, defensive grit, and regional showcase competition."
  },
  {
    id: "team-15-white",
    tab: "15-3",
    slug: "15-white",
    name: "SVC 15 White",
    color: "White",
    age: "15U",
    ageGroup: "15U Girls",
    gender: "Girls",
    tier: "15-3 • White",
    coaches: ["Kelly Daniels (Head Coach)", "Jalyn Crist (Assistant Coach)"],
    image: "/images/gallery/action-6.jpg",
    description: "Guided by the PACE philosophy — Positive Attitude, Communication, and Effort — building complete high school athletes."
  },
  {
    id: "team-16-national",
    tab: "16-1",
    slug: "16-national",
    name: "SVC 16 National",
    color: "National",
    age: "16U",
    ageGroup: "16U Girls",
    gender: "Girls",
    tier: "16-1 • National",
    badge: "USAV Nationals Qualifier Tradition",
    coaches: ["SVC 16U National Staff"],
    image: "/images/gallery/action-4.jpg",
    description: "Our 16-1 National squad competing across premier national qualifiers and regional bid championships."
  },
  {
    id: "team-16-blue",
    tab: "16-2",
    slug: "16-blue",
    name: "SVC 16 Blue",
    color: "Blue",
    age: "16U",
    ageGroup: "16U Girls",
    gender: "Girls",
    tier: "16-2 • Blue",
    coaches: ["SVC 16U Coaching Staff"],
    image: "/images/gallery/action-5.jpg",
    description: "Competitive 16-2 Blue roster developing advanced offensive systems, serve-receive precision, and college recruiting readiness."
  },
  {
    id: "team-16-white",
    tab: "16-3",
    slug: "16-white",
    name: "SVC 16 White",
    color: "White",
    age: "16U",
    ageGroup: "16U Girls",
    gender: "Girls",
    tier: "16-3 • White",
    coaches: ["SVC 16U Coaching Staff"],
    image: "/images/gallery/action-2.jpg",
    description: "High-rep 16-3 White team emphasizing varsity-level skill execution, aggressive serving, and competitive tournament play."
  },
  {
    id: "team-17-national",
    tab: "17-1",
    slug: "17-national",
    name: "SVC 17 National",
    color: "National",
    age: "17U",
    ageGroup: "17U Girls",
    gender: "Girls",
    tier: "17-1 • National",
    badge: "11-0 Undefeated MEQ Champions (120 Teams)",
    coaches: ["Sarah Armstrong (Head Coach)", "Ciera Cory (Assistant Coach)", "Dakota Hearn (Assistant Coach)"],
    image: "/images/teams/17-national-meq.jpg",
    description: "Went 11-0 undefeated in Indianapolis to win the Mideast Qualifier out of 120 elite national teams and punch their ticket to USAV Nationals."
  },
  {
    id: "team-17-blue",
    tab: "17-2",
    slug: "17-blue",
    name: "SVC 17 Blue",
    color: "Blue",
    age: "17U",
    ageGroup: "17U Girls",
    gender: "Girls",
    tier: "17-2 • Blue",
    coaches: ["Erin Wilson (Club Director & Head Coach)"],
    image: "/images/teams/17-1-girls.jpg",
    description: "Led by Club Director Erin Wilson (25+ years coaching experience), emphasizing elite court IQ, discipline, and collegiate recruiting."
  },
  {
    id: "team-17-white",
    tab: "17-3",
    slug: "17-white",
    name: "SVC 17 White",
    color: "White",
    age: "17U",
    ageGroup: "17U Girls",
    gender: "Girls",
    tier: "17-3 • White",
    coaches: ["Amanda Chaney (Coach)"],
    image: "/images/gallery/action-3.jpg",
    description: "Focused on technical execution, mental toughness, and high-rep competitive tournament play in the HOA region."
  },
  {
    id: "team-18-black",
    tab: "18-1",
    slug: "18-black",
    name: "SVC 18 Black",
    color: "Black",
    age: "18U",
    ageGroup: "18U Girls",
    gender: "Girls",
    tier: "18-1 • Black",
    badge: "3x Consecutive USAV National Bid Tradition",
    coaches: ["Kristin Smoot-Irvin (Head Coach)", "Jocelyn Adams (Assistant Coach)"],
    image: "/images/teams/18-national-girls.jpg",
    description: "Our senior 18-1 division squad focused on collegiate preparation, high-tempo offense, and national qualifier competition."
  }
];

export const boysTeams: TeamItem[] = [
  {
    id: "team-boys-16",
    tab: "Boys 16-1",
    slug: "boys-16",
    name: "SVC 16 Boys",
    color: "Black",
    age: "16U",
    ageGroup: "16U Boys",
    gender: "Boys",
    tier: "Boys 16-1 • Black",
    badge: "HOA Regional Champions & USA Bid Winners",
    coaches: ["SVC Boys Coaching Staff"],
    image: "/images/teams/16-boys-bid.jpg",
    description: "Heart of America Boys Regional Champions and back-to-back USA National Bid winners representing Kansas City on the national stage."
  },
  {
    id: "team-boys-18",
    tab: "Boys 18-1",
    slug: "boys-18",
    name: "SVC 18 Boys",
    color: "Black",
    age: "18U",
    ageGroup: "18U Boys",
    gender: "Boys",
    tier: "Boys 18-1 • Black",
    badge: "USA National Bid Winners • Dallas & Reno",
    coaches: ["SVC Boys Coaching Staff"],
    image: "/images/teams/18-boys-bid.jpg",
    description: "Multiple-time USAV Boys Junior National Championship qualifiers competing against the top boys programs in the nation."
  }
];

export const allTeams: TeamItem[] = [...girlsTeams, ...boysTeams];

export const currentQualifications = [
  {
    season: "2025–2026",
    team: "SVC 18 National Girls",
    badge: "3RD STRAIGHT NATIONAL BID",
    destination: "Reno, NV • USAV Nationals",
    title: "3rd Year in a Row! 18 National Earns Bid at Regionals",
    description: "For the 3rd consecutive year, SVC 18 National has earned a bid to Nationals at Region Bid! We are beyond proud of these young women and their coaches. Reno, here we come!",
    image: "/images/teams/18-national-girls.jpg",
    featured: true
  },
  {
    season: "2025–2026",
    team: "SVC 18 Boys",
    badge: "USA NATIONAL BID",
    destination: "USAV Boys Junior Nationals",
    title: "Congratulations SVC 18 Boys on Earning a USA Bid!",
    description: "Dominant tournament performance earning an official USA Bid to represent Summit Volleyball Club and Kansas City on the national stage.",
    image: "/images/teams/18-boys-bid.jpg",
    featured: true
  },
  {
    season: "2025–2026",
    team: "SVC 16 Boys",
    badge: "USA NATIONAL BID",
    destination: "USAV Boys Junior Nationals",
    title: "Congratulations SVC 16 Boys on Earning a USA Bid!",
    description: "Back-to-back years of national qualification excellence for our 16U Boys program!",
    image: "/images/teams/16-boys-bid.jpg",
    featured: true
  },
  {
    season: "2024–2025",
    team: "SVC 17 National Girls",
    badge: "11-0 MEQ CHAMPIONS",
    destination: "Dallas, TX • American Bid",
    title: "11-0 Undefeated Mideast Qualifier Champions (120 Teams)!",
    description: "QUALIFIED BABY! Summit 17 National went 11-0 to win the Mideast Qualifier in Indianapolis out of 120 teams and earn the American Bid to Nationals in Dallas!",
    image: "/images/teams/17-national-meq.jpg",
    featured: true
  },
  {
    season: "2024–2025",
    team: "SVC 16-1 Boys",
    badge: "REGIONAL CHAMPIONS",
    destination: "Minneapolis, MN • Nationals",
    title: "Boys Regionals Champions & National Qualifiers!",
    description: "A hard day of play ending in winning Boys Regionals and qualifying for Nationals in Minneapolis!",
    image: "/images/teams/16-boys-regionals.jpg",
    featured: false
  },
  {
    season: "2023–2024",
    team: "SVC 16-1 National Girls & 18-1 Boys",
    badge: "REGION BID WINNERS",
    destination: "Las Vegas, NV & Dallas, TX",
    title: "Vegas & Dallas Bound! 16 National Girls & 18-1 Boys Qualify",
    description: "16 National won Region Bid to punch their ticket to Las Vegas, while 18-1 Boys earned their berth to Dallas Nationals!",
    image: "/images/teams/18-1-boys-dallas.jpg",
    videoUrl: "https://cdn4.sportngin.com/attachments/video_file/81c7-503085/SVC_16-1_girls_final_point_at_Regionals_031024_1080.mp4",
    featured: false
  }
];

export const collegeCommits = [
  {
    name: "Keastin Kitchen",
    college: "Sterling College",
    mascot: "Warriors Volleyball",
    division: "Collegiate Commit",
    image: "/images/commits/keastin-kitchen.jpg"
  },
  {
    name: "Haley Anderson",
    college: "Southeast CC",
    mascot: "Bobcats Volleyball",
    division: "Collegiate Commit",
    image: "/images/commits/haley-anderson.jpg"
  },
  {
    name: "Grace Lowry",
    college: "Stevenson University",
    mascot: "Mustangs Volleyball",
    division: "NCAA Commit",
    image: "/images/commits/grace-lowry.jpg"
  },
  {
    name: "Micah Reid",
    college: "Central Christian College of Kansas",
    mascot: "SVC 18 Boys • Men's Volleyball",
    division: "NAIA Commit",
    image: "/images/commits/micah-reid.jpg"
  },
  {
    name: "Payton Kemp",
    college: "Labette CC",
    mascot: "Cardinals Volleyball",
    division: "Collegiate Commit",
    image: "/images/commits/payton-kemp.jpg"
  }
];

export const wholeAthletePillars = [
  {
    role: "Sports Nutritionist",
    expert: "Rebecca McConville, MS, RD, LD",
    affiliation: "UMKC Sports Nutritionist",
    description: "Licensed dietitian providing club-wide nutrition seminars, tournament fueling strategies, and an approved SVC grocery list to sustain peak tournament performance."
  },
  {
    role: "Physical Therapy & Injury Prevention",
    expert: "KC Rehab & Wellness Center",
    affiliation: "Priority 24-Hour Free Injury Evaluations",
    description: "Custom volleyball-specific injury prevention warm-up routines before every practice and game, plus free priority injury evaluations within 24 hours."
  },
  {
    role: "Sports Performance & Agility",
    expert: "Upward Performance & Physical Training",
    affiliation: "Grain Valley, MO",
    description: "Explosive vertical jump, lateral court speed, and volleyball-specific strength and conditioning tailored for youth and high school athletes."
  },
  {
    role: "Sport Psychology & Mindset",
    expert: "Cindy Swatek • VIDA Mindset & Performance",
    affiliation: "On-Court Mental Resilience Coaching",
    description: "Hands-on team sessions building confidence, managing performance anxiety, sharpening focus, and competing with a composed, fearless mindset."
  }
];

export const girlsTryoutSchedule = [
  { age: "11U", dates: "Saturday, July 11 & Sunday, July 12", time: "1:00 PM – 2:30 PM" },
  { age: "12U", dates: "Saturday, July 11 & Sunday, July 12", time: "1:00 PM – 2:30 PM" },
  { age: "13U", dates: "Saturday, July 11 & Sunday, July 12", time: "9:00 AM – 10:30 AM" },
  { age: "14U", dates: "Saturday, July 11 & Sunday, July 12", time: "9:00 AM – 10:30 AM" },
  { age: "15U", dates: "Saturday, July 11 & Sunday, July 12", time: "11:00 AM – 12:30 PM" },
  { age: "16U", dates: "Saturday, July 11 & Sunday, July 12", time: "11:00 AM – 12:30 PM" },
  { age: "17U", dates: "Saturday, July 11 & Sunday, July 12", time: "3:00 PM – 4:30 PM" },
  { age: "18U", dates: "Saturday, July 11 & Sunday, July 12", time: "1:00 PM – 2:30 PM" }
];

export const boysTryoutSchedule = {
  openGyms: [
    { division: "15U / 16U Boys", sessions: ["May 21: 5:30–7:00 PM", "June 22: 7:30–9:00 PM", "June 29: 7:30–9:00 PM", "July 21: 6:00–7:30 PM"] },
    { division: "17U / 18U Boys", sessions: ["May 21: 7:30–9:00 PM", "June 22: 5:30–7:00 PM", "June 29: 5:30–7:00 PM", "July 21: 6:00–7:30 PM"] }
  ],
  tryouts: [
    { division: "15U / 16U Boys", dates: "July 25 & July 26", time: "10:00 AM – 11:30 AM" },
    { division: "17U / 18U Boys", dates: "July 25 & July 26", time: "10:00 AM – 11:30 AM" }
  ]
};

export const rosterOpenings = [
  { team: "12 Premier", positions: "Defensive Specialist (DS)" },
  { team: "12 Select", positions: "Setter (S)" },
  { team: "13 Premier", positions: "Middle Hitter (MH)" },
  { team: "14 Select", positions: "2 Setters (S)" },
  { team: "17 Premier", positions: "Outside Hitter (OH)" },
  { team: "18 Premier", positions: "Outside Hitter (OH), Middle Hitter (MH), Right Side (RH)" }
];

export const coachesList = [
  {
    name: "Erin Wilson",
    role: "Club Director & SVC 17 Blue Head Coach",
    team: "Club Director • SVC 17 Blue",
    image: "/images/coaches/erin.png",
    bio: "25+ years of coaching experience and former collegiate hitter. Qualified her 18s team for USAV Nationals and leads SVC's whole-athlete philosophy."
  },
  {
    name: "Hannah Berry",
    role: "Assistant Club Director & SVC 14 National Head Coach",
    team: "Asst. Club Director • SVC 14 National",
    image: "/images/coaches/hannah.png",
    bio: "Assistant Club Director and member of the first SVC team to qualify for USAV Nationals as a National-level libero, now entering her 5th year coaching."
  },
  {
    name: "Sarah Armstrong",
    role: "SVC 17 National Head Coach",
    team: "SVC 17 National",
    image: "/images/coaches/sarah.png",
    bio: "6 years with SVC and qualified her teams for USAV Nationals three consecutive years, excelling at increasing game speed and technical accuracy."
  },
  {
    name: "Ciera Cory",
    role: "SVC 17 National Assistant Coach",
    team: "SVC 17 National",
    image: "/images/coaches/ciera.png",
    bio: "Former collegiate setter at Ottawa University (2020–2023) and Assistant Varsity Coach at Notre Dame de Sion High School."
  },
  {
    name: "Dakota Hearn",
    role: "SVC 17 National Assistant Coach",
    team: "SVC 17 National",
    image: "/images/coaches/dakota.png",
    bio: "Focuses on increasing athlete power, speed, and overall tournament performance for SVC 17 National."
  },
  {
    name: "Kristin Smoot-Irvin",
    role: "SVC 18 Black Head Coach",
    team: "SVC 18 Black",
    image: "/images/coaches/kristin.png",
    bio: "Former SVC alumna who played 3 seasons with Summit before returning to lead our 18 Black squad with high energy and competitive grit."
  },
  {
    name: "Jocelyn Adams",
    role: "SVC 18 Black Assistant Coach",
    team: "SVC 18 Black",
    image: "/images/coaches/jocelyn.png",
    bio: "Former club and collegiate volleyball athlete entering her 2nd season coaching with Summit Volleyball Club."
  },
  {
    name: "Amanda Chaney",
    role: "SVC 17 Silver Assistant Coach",
    team: "SVC 17 Silver",
    image: "/images/coaches/amanda.png",
    bio: "Head Coach at Hyman Brand Middle School entering her 2nd season with SVC, focusing on the mental side of the game and athlete confidence."
  },
  {
    name: "Connie Rogers",
    role: "SVC 15 Black Head Coach",
    team: "SVC 15 Black",
    image: "/images/coaches/connie.png",
    bio: "Entering her 5th season coaching at SVC after moving up from 11s, known for high-energy practices and National Qualifier preparation."
  },
  {
    name: "Samantha Rosales",
    role: "SVC 15 Black Assistant Coach",
    team: "SVC 15 Black",
    image: "/images/coaches/sam.png",
    bio: "Four-season SVC alumna as a setter and hitter, now in her 4th season coaching at Summit Volleyball Club."
  },
  {
    name: "Kelly Daniels",
    role: "SVC 15 White Head Coach",
    team: "SVC 15 White",
    image: "/images/coaches/kelly.png",
    bio: "Nearly 3 decades of coaching experience since 1996, qualifying multiple teams for USAV Junior Nationals and NJCAA DII Championships."
  },
  {
    name: "Jalyn Crist",
    role: "SVC 15 White Assistant Coach",
    team: "SVC 15 White",
    image: "/images/coaches/jalyn.png",
    bio: "5th season with Summit and 6th year coaching overall; also coaches Upper School volleyball at HBHA in Overland Park."
  },
  {
    name: "Ava Martin",
    role: "SVC 14 National Assistant Coach",
    team: "SVC 14 National",
    image: "/images/coaches/ava.png",
    bio: "Former collegiate libero at Missouri Valley College returning for her 3rd season coaching at SVC."
  },
  {
    name: "Olivia Groom",
    role: "SVC 14 Blue Head Coach",
    team: "SVC 14 Blue",
    image: "/images/coaches/olivia.png",
    bio: "3rd year club coach and Lee's Summit High School boys volleyball coach dedicated to developing skill and confidence."
  },
  {
    name: "Gracie Saale",
    role: "SVC 14 Blue Assistant Coach",
    team: "SVC 14 Blue",
    image: "/images/coaches/gracie.png",
    bio: "2nd year SVC coach and B-Team volleyball coach at Summit Lakes Middle School."
  },
  {
    name: "Alex Porter",
    role: "SVC 13 Black Head Coach",
    team: "SVC 13 Black",
    image: "/images/coaches/alex.png",
    bio: "Entering her 3rd year coaching with SVC, specializing in both front-row and back-row mechanics and smart court IQ."
  },
  {
    name: "Madison DeLuca",
    role: "SVC 13 Black Assistant Coach",
    team: "SVC 13 Black",
    image: "/images/coaches/maddie.png",
    bio: "3rd year competitive coach placing strong emphasis on front-row timing, decision-making, and attacking confidence."
  },
  {
    name: "Trevor Gensler",
    role: "SVC 13 Blue Head Coach",
    team: "SVC 13 Blue",
    image: "/images/coaches/trevor.png",
    bio: "30+ years of volleyball experience; former collegiate player at Graceland University and assistant coach at KCKCC."
  },
  {
    name: "Diana Blackburn",
    role: "SVC 12 Black Head Coach",
    team: "SVC 12 Black",
    image: "/images/coaches/diana.png",
    bio: "20+ years coaching at the club and high school level (Lee's Summit North, Blue Valley NW, Ray-Pec) and multiple seasons with SVC."
  },
  {
    name: "Jennifer Novogoratz",
    role: "SVC 11 Black Assistant Coach",
    team: "SVC 11 Black",
    image: "/images/coaches/jennifer.png",
    bio: "Entering her 7th year coaching youth volleyball (4th–8th grade) and serves as a MSHSAA referee during the school season."
  }
];
