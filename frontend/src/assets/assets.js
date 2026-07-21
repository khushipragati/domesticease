// ===== Importing assets =====
import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import logo1 from './logo1.png'
import image_banner from './image_banner.png'
import rekha from './rekha.png'
import image_1 from './image_1.png'
import image_2 from './image_2.png'
import image_3 from './image_3.png'
import image_4 from './image_4.png'
import image_5 from './image_5.png'


// ===== Assets Export =====
export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    profile_pic,
    contact_image,
    about_image,
    logo,
    dropdown_icon,
    menu_icon,
    cross_icon,
    chats_icon,
    verified_icon,
    arrow_icon,
    info_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    logo1,
    image_banner,
    rekha
}

// ===== Speciality Data =====
export const specialityData = [
    { speciality: 'Domestic help', image: image_1 },
    { speciality: 'Cooks', image: image_2 },
    { speciality: 'All Rounder', image: image_3 },
    { speciality: 'Babysitter', image: image_4 },
    { speciality: '24-Hrs Fulltime', image: image_5 }
]

// ===== Helpers Data =====
export const helpers = [
    {
        _id: 'rekha_1',
        name: 'Rekha Kumar Mishra',
        image: rekha,
        speciality: 'Domestic help',
        contact: 'Verified',
        experience: '4 Years',
        about: 'Experienced in full home upkeep, including cleaning, laundry, and daily household management.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London',
        },
    },
    {
        _id: 'rekha_2',
        name: 'Rekha Kumar Mishra',
        image: rekha,
        speciality: 'Cooks',
        degree: 'Verified',
        experience: '3 Years',
        about: 'Skilled home cook specializing in everyday meals with attention to dietary preferences.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London',
        },
    },
    {
        _id: 'rekha_3',
        name: 'Sarah Patel',
        image: rekha,
        speciality: 'Babysitter',
        degree: 'Verified',
        experience: '1 Year',
        about: 'Attentive and reliable childcare, focused on safety, routine, and engaging activities.',
        fees: 45,
        address: {
            line1: '5th Avenue, Baker Street',
            line2: 'Circle, Ring Road, London',
        },
    },
    {
        _id: 'rekha_4',
        name: 'Henry Adams',
        image: rekha,
        speciality: 'All Rounder',
        degree: 'Verified',
        experience: '5 Years',
        about: 'Handles a mix of household tasks including cleaning, cooking, and general home support.',
        fees: 55,
        address: {
            line1: '8th Cross, Jubilee Hills',
            line2: 'Ring Road, London',
        },
    },
    {
        _id: 'rekha_5',
        name: 'Laura White',
        image: rekha,
        speciality: '24-Hrs Fulltime',
        degree: 'Verified',
        experience: '7 Years',
        about: 'Live-in support covering household chores, cooking, and general assistance around the clock.',
        fees: 70,
        address: {
            line1: 'Sunset Boulevard, Downtown',
            line2: 'Ring Road, London',
        },
    },
    {
        _id: 'rekha_6',
        name: 'Daniel Brown',
        image: rekha,
        speciality: 'Cooks',
        degree: 'Verified',
        experience: '6 Years',
        about: 'Experienced cook comfortable with a wide range of cuisines and family meal planning.',
        fees: 65,
        address: {
            line1: 'Main Street, Soho',
            line2: 'Ring Road, London',
        },
    },
    {
        _id: 'rekha_7',
        name: 'Amelia Scott',
        image: rekha,
        speciality: 'Domestic help',
        degree: 'Verified',
        experience: '2 Years',
        about: 'Reliable help with cleaning, organizing, and everyday household upkeep.',
        fees: 40,
        address: {
            line1: 'Silver Street, West End',
            line2: 'Ring Road, London',
        },
    },
    {
        _id: 'rekha_8',
        name: 'Brian Lee',
        image: rekha,
        speciality: 'All Rounder',
        degree: 'Verified',
        experience: '4 Years',
        about: 'Comfortable handling multiple household tasks, from cleaning to basic maintenance.',
        fees: 50,
        address: {
            line1: 'Hill Road, Cambridge',
            line2: 'Ring Road, London',
        },
    },
    {
        _id: 'rekha_9',
        name: 'Chloe Green',
        image: rekha,
        speciality: 'Babysitter',
        degree: 'Verified',
        experience: '5 Years',
        about: 'Warm and experienced with children of all ages, from infants to school-age kids.',
        fees: 60,
        address: {
            line1: 'Baker Street, Marylebone',
            line2: 'Ring Road, London',
        },
    },
    {
        _id: 'rekha_10',
        name: 'Ethan Walker',
        image: rekha,
        speciality: '24-Hrs Fulltime',
        degree: 'Verified',
        experience: '8 Years',
        about: 'Dependable full-time support for households needing round-the-clock assistance.',
        fees: 75,
        address: {
            line1: 'Bond Street, Mayfair',
            line2: 'Ring Road, London',
        },
    },
    {
        _id: 'rekha_11',
        name: 'Olivia Martin',
        image: rekha,
        speciality: 'Babysitter',
        degree: 'Verified',
        experience: '3 Years',
        about: 'Patient and caring, with a focus on structured routines and safe play.',
        fees: 55,
        address: {
            line1: 'Fleet Street, City of London',
            line2: 'Ring Road, London',
        },
    },
    {
        _id: 'rekha_12',
        name: 'Michael Evans',
        image: rekha,
        speciality: 'Cooks',
        degree: 'Verified',
        experience: '6 Years',
        about: 'Experienced in meal prep and cooking for households with varied dietary needs.',
        fees: 65,
        address: {
            line1: 'Kensington High Street',
            line2: 'Ring Road, London',
        },
    },
    {
        _id: 'rekha_13',
        name: 'Sophia Carter',
        image: rekha,
        speciality: 'Domestic help',
        degree: 'Verified',
        experience: '2 Years',
        about: 'Focused on thorough, dependable cleaning and everyday household organization.',
        fees: 45,
        address: {
            line1: 'Park Lane, Westminster',
            line2: 'Ring Road, London',
        },
    },
    {
        _id: 'rekha_14',
        name: 'William Baker',
        image: rekha,
        speciality: 'All Rounder',
        degree: 'Verified',
        experience: '5 Years',
        about: 'Versatile support across cleaning, cooking, and general household tasks.',
        fees: 55,
        address: {
            line1: 'Oxford Street, Westminster',
            line2: 'Ring Road, London',
        },
    },
    {
        _id: 'rekha_15',
        name: 'Ava Johnson',
        image: rekha,
        speciality: 'Cooks',
        degree: 'Verified',
        experience: '4 Years',
        about: 'Skilled cook with experience preparing balanced, home-style meals for families.',
        fees: 60,
        address: {
            line1: 'Piccadilly Circus, Central London',
            line2: 'Ring Road, London',
        },
    },
]
