// import styles from "../page.module.css";
// import { useState, useEffect } from "react";

// export default function page() {
//     const [dynamicData, setDynamicData] = useState({ message: "" });

//     useEffect(() => {
//       fetchData();
//     }, []);
  
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://dog.ceo/api/breed/bulldog/french/images/random",
//           {
//             cache: "no-store",
//           }
//         );
//         const data = await response.json();
//         setDynamicData(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
  
//     return (
//       <>
//         <h1>First Post</h1>
  
//         <img src={dynamicData.message} alt="Random Dog" />
  
//         <h2>
//           <Link href="/">Back to home</Link>
//         </h2>
//       </>
//     );
// }