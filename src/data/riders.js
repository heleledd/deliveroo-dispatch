import markBImg from '../images/rider-profiles/mark-bike.jpg';

const riders = [
  {
    id: 1,
    name: "Malik Ahmad",
    vehicle: "Electric Bike",
    profileImg: {
            src: "https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=",
            alt: "Malik Ahmad Profile"
        },
    completedJobs: 0,
    earningsToday: 0,
    tipsEarned: 0,
    isAvailable: true,
    jobAssigned: null,
    jobStartsAt: null,
    availableAt: null,
    speed: 6,
    shift_start: "10:00",
    shift_end: "18:00",
    status: "Online",
    shortBio: "Malik (30) travels through park paths and side streets to avoid traffic. He is usually active on the deliveroo app from 11am to 11pm 6 days a week.",
    fullBio: "He accepts jobs from Just Eats as well as Deliveroo."
  },
  {
    id: 2,
    name: "Marina Rodrigues",
    vehicle: "Motorbike",
    profileImg: {
            src: "https://i.pinimg.com/736x/77/71/68/7771683223d86b237a3304d6f32828b9.jpg",
            alt: "Marina Rodrigues Profile"
        },
    completedJobs: 0,
    earningsToday: 0,
    tipsEarned: 0,
    isAvailable: true,
    jobAssigned: null,
    jobStartsAt: null,
    availableAt: null,
    speed: 6,
    status: "Online",
    shift_start: "10:00",
    shift_end: "18:00",
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
    speed: 4,
    status: "Online",
    shift_start: "10:00",
    shift_end: "18:00",
    shortBio: "Mark (21) is a local university student studying Maths. He loves cycling, and being outside and does food delivery to earn a little extra cash at his convenience.",
    fullBio: ""
  },
  {
    id: 4,
    name: "Joseph Bolaji",
    vehicle: "Electric Bike",
    profileImg: {
            src: "https://images.pexels.com/photos/8377494/pexels-photo-8377494.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            alt: "Joseph Bolaji Profile"
        },
    completedJobs: 0,
    earningsToday: 0,
    tipsEarned: 0,
    isAvailable: true,
    jobAssigned: null,
    jobStartsAt: null,
    availableAt: null,
    speed: 10,
    status: "Online",
    shift_start: "10:00",
    shift_end: "18:00",
    shortBio: "Joseph (28) is speedy and dangerous. He'll stop at nothing to get food delivered so that he can maximise his income as much as possible. He works for around 10 hours a day as much as he can.",
    fullBio: ""
  },
  {
    id: 5,
    name: "Gruff Evans",
    vehicle: "Car",
    profileImg: {
            src: markBImg,
            alt: "Mark B"
        },
    completedJobs: 0,
    earningsToday: 0,
    tipsEarned: 0,
    isAvailable: true,
    jobAssigned: null,
    jobStartsAt: null,
    availableAt: null,
    speed: 9,
    status: "Online",
    shift_start: "10:00",
    shift_end: "18:00",
    shortBio: "Gruff (50) lives alone and has recently signed up to deliver food for Deliveroo to fill his evenings and try something new using his car. He is very reliable and friendly and usually works after his day job as an accountant",
    fullBio: ""
  },
  {
    id: 6,
    name: "Laurence Jones",
    vehicle: "Electric Bike",
    profileImg: {
            src: markBImg,
            alt: "Laurence Jones Profile"
        },
    completedJobs: 0,
    earningsToday: 0,
    tipsEarned: 0,
    isAvailable: true,
    jobAssigned: null,
    jobStartsAt: null,
    availableAt: null,
    speed: 6,
    status: "Online",
    shift_start: "10:00",
    shift_end: "18:00",
    shortBio: "Laurence (23) is usually active on the Deliveroo app between 11am and 4pm. His dream is to become a YouTuber but in the meantime he delivers food to pay the bills while working on his channel outside of the lunchtime peak.",
    fullBio: ""
  },

];


export default riders;