import React from "react";
import { ReactComponent as PreviousIcon } from "../../assets/svgs/PreviousIcon.svg";
import { ReactComponent as NextBtn } from "../../assets/svgs/NextBtn.svg";
import useWindowDimensions from "../../Hooks/UseWindowDimension";

// export default function PreviousNextQstn(props) {
//   return (
//     <div className="flex justify-evenly items-center py-6  lg:max-w-2xl mx-auto">
//       <div>
//         <button
//           onClick={() => props.decreaseQuestionNumber()}
//           className="text-white bg-primary px-12 font-body shadow-primary px-5 py-2 rounded-md focus:outline-none text-sm lg:text-md font-medium"
//         >
//           PREVIOUS
//         </button>
//       </div>
//       <div>
//         {props.questionNumber+1 === props.questionLength ? (
//           <button
//             onClick={() => props.handleOpen()}
//             className="text-white bg-primary px-12 font-body shadow-primary px-5 py-2 rounded-md focus:outline-none text-sm lg:text-md font-medium"
//           >
//             FINISH
//           </button>
//         ) : (
//           <button
//             onClick={() => props.increaseQuestionNumber()}
//             className="text-white bg-primary px-12 font-body shadow-primary px-5 py-2 rounded-md focus:outline-none text-sm lg:text-md font-medium"
//           >
//             NEXT
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

export default function TestPreviousNextQstn(props) {
  const { width } = useWindowDimensions();

  return width > 640 ? (
    <div className="flex justify-evenly items-center py-6  lg:max-w-2xl mx-auto">
      <div>
        <button
          onClick={() => props.decreaseQuestionNumber()}
          className="absolute rounded-full left-16 top-1/3 shadow-primary focus:outline-none transform scale-75"
        >
          <PreviousIcon />
        </button>
      </div>
      <div>
        {props.questionNumber + 1 === props.questionLength ? (
          <button
            onClick={() => props.handleOpen()}
            className="absolute right-16 top-1/3 shadow-primary rounded-full focus:outline-none  transform scale-75"
          >
            <NextBtn />
          </button>
        ) : (
          <button
            onClick={() => props.increaseQuestionNumber()}
            className="absolute right-16 top-1/3 shadow-primary rounded-full focus:outline-none  transform scale-75"
          >
            <NextBtn />
          </button>
        )}
      </div>
    </div>
  ) : (
    <div className="flex justify-evenly items-center py-6  lg:max-w-2xl mx-auto">
      <div>
        <button
          onClick={() => props.decreaseQuestionNumber()}
          className="text-white bg-primary px-12 font-body shadow-primary px-5 py-2 rounded-md focus:outline-none text-sm lg:text-md font-medium"
        >
          PREVIOUS
        </button>
      </div>
      <div>
        {props.questionNumber + 1 === props.questionLength ? (
          <button
            onClick={() => props.handleOpen()}
            className="text-white bg-primary px-12 font-body shadow-primary px-5 py-2 rounded-md focus:outline-none text-sm lg:text-md font-medium"
          >
            FINISH
          </button>
        ) : (
          <button
            onClick={() => props.increaseQuestionNumber()}
            className="text-white bg-primary px-12 font-body shadow-primary px-5 py-2 rounded-md focus:outline-none text-sm lg:text-md font-medium"
          >
            NEXT
          </button>
        )}
      </div>
    </div>
  );
}
