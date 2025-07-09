import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';


export function GET(request: Request) {
    // console.log("ICB Fetching data from Firebase");
    // fetchData();
    const MENU_ITEMS = [
        {
            id: 1,
            title: "Take Social Insurance Number",
            description: "One of the most important things to do in Canada",
            steps: [
                {title: "Collect your documents", points: ["Passport", "Valid VISA permit", "Proof of address - (utility bill, bank statement, rent agreement, etc.)"]},
                {title: "Visit Service Canada branch", points: ["Take a token", "Hand over your documents when you get a chance"]},
                {title: "Collect your SIN", points: ["Keep your SIN as a secret", "Don't share anyone other than your trusted bank or employer", "SIN is used for calculating your income and taxes"]},
                {title: "Visit Service Canada branch1", points: ["Take a token", "Hand over your documents when you get a chance"]},
                {title: "Visit Service Canada branch2", points: ["Take a token", "Hand over your documents when you get a chance"]},
                {title: "Visit Service Canada branch3", points: ["Take a token", "Hand over your documents when you get a chance"]},
            ]
    
        },
        {
            id: 2,
            title: "Create a Bank Account",
            description: "Open a bank account to manage your finances",
            steps: [
                {title: "Visit the bank", points: ["Make an appointment to meet an agent"]},
                {title: "Collect your documents", points: ["Passports", "Valid VISA permit", "Proof of address - (utility bill, bank statement, rent agreement, etc.)", "SIN"]},
                {title: "Visit the bank at the appointment time", points: ["Discuss with your agent about your most suitable savings and credit accounts", "Create your account", "Grab your debits and credit cards"]},]
        },
        {
            id: 3,
            title: "Services",
            description: "Explore the services we offer",
            steps: [
                {title: "Step 1", points: ["Open the app", "point 2", "point 3"]},
                {title: "Step 2", points: ["Open the app", "point 2", "point 3"]},
                {title: "Step 3", points: ["Open the app", "point 2", "point 3"]},]
        },
        {
            id: 4,
            title: "Contact",
            description: "Get in touch with us",
            steps: [
                {title: "Step 1", points: ["Open the app", "point 2", "point 3"]},
                {title: "Step 2", points: ["Open the app", "point 2", "point 3"]},
                {title: "Step 3", points: ["Open the app", "point 2", "point 3"]},]
        },
        {
            id: 5,
            title: "Blog",
            description: "Read our latest articles",
            steps: [
                {title: "Step 1", points: ["Open the app", "point 2", "point 3"]},
                {title: "Step 2", points: ["Open the app", "point 2", "point 3"]},
                {title: "Step 3", points: ["Open the app", "point 2", "point 3"]},]
        },
        {
            id: 6,
            title: "Careers",
            description: "Join our team",
            steps: [
                {title: "Step 1", points: ["Open the app", "point 2", "point 3"]},
                {title: "Step 2", points: ["Open the app", "point 2", "point 3"]},
                {title: "Step 3", points: ["Open the app", "point 2", "point 3"]},]
        },
        {
            id: 7,
            title: "FAQ",
            description: "Find answers to common questions",
            steps: [
                {title: "Step 1", points: ["Open the app", "point 2", "point 3"]},
                {title: "Step 2", points: ["Open the app", "point 2", "point 3"]},
                {title: "Step 3", points: ["Open the app", "point 2", "point 3"]},]
        },
        {
            id: 8,
            title: "Portfolio",
            description: "View our past projects",
            steps: [
                {title: "Step 1", points: ["Open the app", "point 2", "point 3"]},
                {title: "Step 2", points: ["Open the app", "point 2", "point 3"]},
                {title: "Step 3", points: ["Open the app", "point 2", "point 3"]},]
        },
        {
            id: 9,
            title: "Testimonials",
            description: "See what our clients say about us",
            steps: [
                {title: "Step 1", points: ["Open the app", "point 2", "point 3"]},
                {title: "Step 2", points: ["Open the app", "point 2", "point 3"]},
                {title: "Step 3", points: ["Open the app", "point 2", "point 3"]},]
        },
        {
            id: 10,
            title: "Support",
            description: "Access customer support resources",
            steps: [
                {title: "Step 1", points: ["Open the app", "point 2", "point 3"]},
                {title: "Step 2", points: ["Open the app", "point 2", "point 3"]},
                {title: "Step 3", points: ["Open the app", "point 2", "point 3"]},]
        },
    ];
    return Response.json(MENU_ITEMS);
  }

  async function fetchData() {
    const querySnapshot = await getDocs(collection(db, "skip-trap"));
    console.log("Hiiii there he uee icb ");
    querySnapshot.forEach((doc) => {
        console.log("Hiiii there");
      console.log(`${doc.id} => ${doc.data()}`);
    });
  }
  