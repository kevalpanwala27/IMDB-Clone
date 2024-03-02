// "use client";

// import Link from "next/link";

// import { useSearchParams } from "next/navigation";

// export default function NavbarItem({ title, param }) {
//   const searchParams = useSearchParams();
//   const genre = searchParams.get("genre");
//   return (
//     <div>
//       <Link
//         className={`m-4 hover:text-amber-600 font-semibold p-2 ${
//           genre &&
//           genre === param &&
//           "underline underline-offset-8 decoration-4  decoration-amber-500 rounded-lg"
//         }`}
//         href={`/?genre=${param}`}
//       >
//         {title}
//       </Link>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { Suspense } from 'react'; // Import Suspense
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param }) {
  return (
    <Suspense fallback={<div>Loading...</div>}> {/* Add Suspense boundary */}
      <NavbarItemContent title={title} param={param} />
    </Suspense>
  );
}

function NavbarItemContent({ title, param }) { // Extract component to handle Suspense
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        className={`m-4 hover:text-amber-600 font-semibold p-2 ${
          genre && genre === param && "underline underline-offset-8 decoration-4  decoration-amber-500 rounded-lg"
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
