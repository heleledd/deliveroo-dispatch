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
    completedJobs: 0,
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
    fullBio: "He accepts jobs from Just Eats as well as Deliveroo."
  },
  {
    id: 2,
    name: "Marina Rodrigues",
    vehicle: "Motorbike",
    profileImg: {
            src: marinaImg,
            alt: "Marina Rodrigues Profile"
        },
    completedJobs: 0,
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
    fullBio: ""
  },
  {
    id: 3,
    name: "Mark Bramble",
    vehicle: "Push Bike",
    profileImg: {
            src: markBImg,
            alt: "Mark Bramble Profile"
        },
    completedJobs: 0,
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
    fullBio: ""
  },
  {
    id: 4,
    name: "Joseph Bolaji",
    vehicle: "Electric Bike",
    profileImg: {
            src: josephImg,
            alt: "Joseph Bolaji Profile"
        },
    completedJobs: 0,
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
    fullBio: ""
  },
  {
    id: 5,
    name: "Gruff Evans",
    vehicle: "Car",
    profileImg: {
            src: gruffImg,
            alt: "Gruff Evans Profile"
        },
    completedJobs: 0,
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
    fullBio: ""
  },
  {
    id: 6,
    name: "Laurence Jones",
    vehicle: "Electric Bike",
    profileImg: {
            src: laurenceImg,
            alt: "Laurence Jones Profile"
        },
    completedJobs: 0,
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
    fullBio: ""
  },

];


export default riders;