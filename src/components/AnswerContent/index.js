import React from "react";
import {
  CorrectAnswerBtn,
  DefaultAnswerBtn,
  WrongAnswerBtn,
} from "../Button/AnswerButton";
import Explanation from "./Explanation";
import PaginationLink from "./Pagination";

export default function AnswerContent() {
  return (
    <div className="max-w-screen-2xl mx-auto flex px-6 sm:px-16 w-full">
      <div className="pt-10 w-full">
        <h4 className="pb-8">Answers</h4>
        <div className="flex items-center">
          <div class="mr-8 font-medium rounded-full border-2 border-primary h-8 w-8 flex items-center justify-center text-center text-primary">
            1
          </div>
          <p className="text-lg">
            Express 287.387934578 correct to 2 significant figures
          </p>
        </div>

        <div className="flex flex-col gap-6 mt-16">
          <CorrectAnswerBtn>
            <span className="pr-8">a.</span>
            <span>290</span>
          </CorrectAnswerBtn>

          <DefaultAnswerBtn>
            <span className="pr-8">b.</span>
            <span>288</span>
          </DefaultAnswerBtn>

          <WrongAnswerBtn>
            <span className="pr-8">c.</span>
            <span>287</span>
          </WrongAnswerBtn>

          <DefaultAnswerBtn>
            <span className="pr-8">d.</span>
            <span>287.39</span>
          </DefaultAnswerBtn>
        </div>

        <div className="mt-20  pl-20 max-w-xl">
          <Explanation
            explanationText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus laoreet
        id magna vulputate quis ligula dui pharetra. Viverra enim posuere at
        enim turpis. Dictumst consequat, egestas imperdiet vivamus cursus nibh
        id facilisis. Mi gravida sagittis fringilla at tempus ornare. Massa
        mollis netus amet, in vel sed faucibus. Ipsum nec nibh donec non et
        lorem. Sed sit eget potenti feugiat urna, non, tristique. Et blandit
        vitae, ornare a ac facilisis enim. Turpis egestas eu eleifend pharetra
        aenean tristique adipiscing."
          />
        </div>
       
        <div className="my-12 pl-32 text-center">
          <PaginationLink />
        </div>
        <div className="text-right">
        <button className="text-white bg-primary shadow-primary px-24 py-2.5 mb-24 rounded-md focus:outline-none text-base font-semibold font-body">
          Next
        </button>
          </div> 
        
      </div>
    </div>
  );
}
