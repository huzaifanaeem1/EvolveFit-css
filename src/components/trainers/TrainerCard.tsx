// import React from "react";
// import Image from "next/image";
// import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
// import "../../styles/trainers/TrainerCard.css"
// type Trainer = {
//   id: number;
//   name: string;
//   desc: string;
//   profile: string;
//   fbLink: string;
//   xLink: string;
//   instaLink: string;
// };

// const TrainerCard = ({ trainer }: { trainer: Trainer }) => {
//   const { name, desc, profile, fbLink, xLink, instaLink } = trainer;
  
//   return (
//     <div className="trainer-card p-4 lg:w-1/2">
//       <div className="trainer-card__content h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
//         <Image
//           alt="trainer"
//           className="trainer-card__image flex-shrink-0 rounded-lg object-cover object-center sm:mb-0 mb-4 ring-2 ring-primary shadow-lg shadow-secondary/60"
//           src={profile}
//           width={200}
//           height={200}
//         />
//         <div className="trainer-card__details flex-grow sm:pl-8">
//           <h2 className="trainer-card__name title-font font-medium text-lg">{name}</h2>
//           <p className="trainer-card__description mb-4">{desc}</p>
//           <span className="trainer-card__social inline-flex">
//             <a href={fbLink} target="_blank" rel="noopener noreferrer">
//               <FaFacebook className="trainer-card__social-icon w-6 h-6 hover:text-secondary hover:scale-110 transform transition duration-400" />
//             </a>
//             <a href={xLink} target="_blank" rel="noopener noreferrer" className="ml-2">
//               <FaTwitter className="trainer-card__social-icon w-6 h-6 hover:text-secondary hover:scale-110 transform transition duration-400" />
//             </a>
//             <a href={instaLink} target="_blank" rel="noopener noreferrer" className="ml-2">
//               <FaInstagramSquare className="trainer-card__social-icon w-6 h-6 hover:text-secondary hover:scale-110 transform transition duration-400" />
//             </a>
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrainerCard;
