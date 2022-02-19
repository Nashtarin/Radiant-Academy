import { useRouter } from "next/router";

export default function forumNumber() {
    const router = useRouter();
    const pageNumber = router.query.forumNumber;
    return (
      <div>
        <h1 className="text-5xl">This is {pageNumber}</h1>
      </div>
    );
  };

// const forumNumber = () => {
//     const router = useRouter();
//     const pageNumber = router.query.forumNumber;
//     console.log(pageNumber);
//     return (
//         <div>
//             <h1 className="text-5xl">This is Fourm {pageNumber}</h1>
//         </div>
//     );
// };

// export default forumNumber;