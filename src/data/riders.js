import markBImg from '../images/rider-profiles/markB.png';

const riders = [
  {
    id: 1,
    name: "Samir Khan",
    vehicle: "Electric Bike",
    profileImg: {
            src: "https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=",
            alt: "Mount Fuji"
        },
    completedJobs: 0,
    earningsToday: 0,
    tipsEarned: 0,
    isAvailable: true,
    jobAssigned: null,
    jobStartsAt: null,
    availableAt: null,
    speed: 8,
    neediness: 8,
    shift_start: "10:00",
    shift_end: "18:00",
    status: "Online",
    bio: "Fast and reliable rider who's been with Deliveroo for 3 years."
  },
  {
    id: 2,
    name: "Sophia Smith",
    vehicle: "Car",
    profileImg: {
            src: "https://i.pinimg.com/736x/77/71/68/7771683223d86b237a3304d6f32828b9.jpg",
            alt: "Mount Fuji"
        },
    completedJobs: 0,
    earningsToday: 0,
    tipsEarned: 0,
    isAvailable: true,
    jobAssigned: null,
    jobStartsAt: null,
    availableAt: null,
    speed: 10,
    neediness: 4,
    status: "Online",
    shift_start: "10:00",
    shift_end: "18:00",
    bio: "hello."
  },
  {
    id: 3,
    name: "Mark Bramble",
    vehicle: "Bike",
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
    speed: 5,
    neediness: 4,
    status: "Online",
    shift_start: "10:00",
    shift_end: "18:00",
    bio: "Student who loves biking."
  },
  {
    id: 4,
    name: "Ahmed Ali",
    vehicle: "Electric Bike",
    profileImg: {
            src: "https://images.pexels.com/photos/8377494/pexels-photo-8377494.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            alt: "Mount Fuji"
        },
    completedJobs: 0,
    earningsToday: 0,
    tipsEarned: 0,
    isAvailable: true,
    jobAssigned: null,
    jobStartsAt: null,
    availableAt: null,
    speed: 10,
    neediness: 10,
    status: "Online",
    shift_start: "10:00",
    shift_end: "18:00",
    bio: "Speedy and dangerous. He'll stop at nothing to get food delivered."
  }

];


export default riders;