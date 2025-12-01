import markBImg from '../images/rider-profiles/mark-bike.jpg';
import malikImg from '../images/rider-profiles/malik.png';
import josephImg from '../images/rider-profiles/joseph.png';
import gruffImg from '../images/rider-profiles/gruff.png';
import laurenceImg from '../images/rider-profiles/lawrence.png';
import marinaImg from '../images/rider-profiles/marina.png';

const riders = [
  {
    id: 1,
    name: "Malik Ahmad",
    vehicle: "Electric Bike",
    profileImg: {
            src: malikImg,
            alt: "Malik Ahmad Profile"
        },
    jobsDone: 0,
    earningsToday: 0,
    tipsEarned: 0,
    isAvailable: true,
    jobAssigned: null,
    jobStartsAt: null,
    availableAt: null,
    isOnline: false,
    speed: 6,
    shift_start: 0,
    shift_end: 720,
    status: "Online",
    shortBio: "Malik (30) travels through park paths and side streets to avoid traffic. He is usually active on the deliveroo app from 11am to 11pm 6 days a week.",
    fullBio: "Malik keeps busy by accepting jobs from Just Eats as well as Deliveroo. Last year, his friend showed him how to turn his bike into an electric bike, which has helped him complete more jobs in less time and earn more money overall. His bike can now go at speeds up to 50mph - he's careful not to go that fast near any police! Another reason to avoid the police is that he's actually using an account he bought off the internet as he currently doesn't have the Right to Work in the UK."
  },
  {
    id: 2,
    name: "Marina Rodrigues",
    vehicle: "Motorbike",
    profileImg: {
            src: marinaImg,
            alt: "Marina Rodrigues Profile"
        },
    jobsDone: 0,
    earningsToday: 0,
    tipsEarned: 0,
    isAvailable: true,
    jobAssigned: null,
    jobStartsAt: null,
    availableAt: null,
    isOnline: false,
    speed: 6,
    status: "Online",
    shift_start: 480,
    shift_end: 720,
    shortBio: "Marina (35) is often active on the Deliveroo app for a few hours when she's not caring for her children or working as a cleaner.",
    fullBio: "Marina is struggling to make ends meet with two young children and a part-time cleaning job. She started delivering for Deliveroo to help pay the bills and enjoys the flexibility it offers her. She usually works in the evenings after putting her kids to bed but is shattered during the mornings and finds it hard to control her anger. She is gutted that she doesn't receive any holiday or sick leave from her work at Deliveroo - she really struggles with childcare during school terms."
  },
  {
    id: 3,
    name: "Mark Bramble",
    vehicle: "Push Bike",
    profileImg: {
            src: markBImg,
            alt: "Mark Bramble Profile"
        },
    jobsDone: 0,
    earningsToday: 0,
    tipsEarned: 0,
    isAvailable: true,
    jobAssigned: null,
    jobStartsAt: null,
    availableAt: null,
    isOnline: false,
    speed: 4,
    status: "Online",
    shift_start: 240,
    shift_end: 720,
    shortBio: "Mark (21) is a local university student studying Maths. He loves cycling, being outside and does food delivery to earn a little extra cash at his convenience.",
    fullBio: "Mark is a dedicated student who balances his academic responsibilities with his part-time delivery job. He enjoys the physical activity and the opportunity to explore the city on his bike. He was interested in how the app works but doesn't think he'll stay with Deliveroo for long since he wants to focus on his studies and possibly pursue a career in data science after graduation."
  },
  {
    id: 4,
    name: "Joseph Bolaji",
    vehicle: "Electric Bike",
    profileImg: {
            src: josephImg,
            alt: "Joseph Bolaji Profile"
        },
    jobsDone: 0,
    earningsToday: 0,
    tipsEarned: 0,
    isAvailable: true,
    jobAssigned: null,
    jobStartsAt: null,
    availableAt: null,
    isOnline: false,
    speed: 10,
    status: "Online",
    shift_start: 0,
    shift_end: 720,
    shortBio: "Joseph (28) is speedy and dangerous. He'll stop at nothing to get food delivered so that he can maximise his income as much as possible. He works for around 10 hours a day as much as he can.",
    fullBio: "Joseph has recently migrated to the UK from Nigeria. He is determined to make a success of his new life here and is working hard to save up money to bring his family over. Joseph is extremely competitive and views other riders as rivals. He is always looking for ways to improve his speed and efficiency, often taking risks on the road to ensure timely deliveries. Last month, Joseph was involved in a nasty road accident while coming home from delivering food in the centre of town which crushed his bike and left him with a broken arm. Thankfully, he has made a full recovery and is back on the road, more determined than ever to succeed since he has used all of his savings while recovering and is in a precarious position."
  },
  {
    id: 5,
    name: "Gruff Evans",
    vehicle: "Car",
    profileImg: {
            src: gruffImg,
            alt: "Gruff Evans Profile"
        },
    jobsDone: 0,
    earningsToday: 0,
    tipsEarned: 0,
    isAvailable: true,
    jobAssigned: null,
    jobStartsAt: null,
    availableAt: null,
    isOnline: false,
    speed: 9,
    status: "Online",
    shift_start: 420,
    shift_end: 720,
    shortBio: "Gruff (50) lives alone and has recently signed up to deliver food for Deliveroo to fill his evenings and try something new, using his car. He is very reliable and friendly and usually works after his day job as an accountant",
    fullBio: "Gruff has been an accountant for over 25 years but has recently found himself with more free time in the evenings after his children have moved out and started their own lives. He decided to take up food delivery as a way to stay out and about. However, he is currently looking at signing up as an Uber driver since driving with Delivroo is barely covering his fuel and car maintenance costs. He thinks it's possible he could be making a loss."
  },
  {
    id: 6,
    name: "Laurence Jones",
    vehicle: "Electric Bike",
    profileImg: {
            src: laurenceImg,
            alt: "Laurence Jones Profile"
        },
    jobsDone: 0,
    earningsToday: 0,
    tipsEarned: 0,
    isAvailable: true,
    jobAssigned: null,
    jobStartsAt: null,
    availableAt: null,
    isOnline: false,
    speed: 6,
    status: "Online",
    shift_start: 0,
    shift_end: 360,
    shortBio: "Laurence (23) is usually active on the Deliveroo app between 11am and 6pm. His dream is to become a YouTuber but in the meantime he delivers food to pay the bills while working on his channel.",
    fullBio: "Laurence highly values Deliveroo's flexibility - it allows him to work around his YouTube schedule and focus on creating content. He often films his delivery rides and shares them on his channel, which has been steadily gaining subscribers. He lives at home with his parents, who are worried that they are supporting him too much since he's living above his means."
  },

];


export default riders;