export default function FooterSkeleton() {
  return (
    <div className="w-full h-full px-2 py-8 lg:px-6 lg:py-20">
      <div className="bg-[#96969647] border-[#666666DB] border-[2px] rounded-xl w-full lg:w-11/12 mx-auto py-4 lg:py-28 text-black leading-7 flex flex-col gap-4 lg:gap-8">
        <div className="w-4/5 box-border border-2 border-transparent items-start mx-auto bg-white flex flex-col justify-between lg:px-10 lg:py-10 px-6 py-6 font-[500] lg:text-[22px] text-lg rounded-xl">
          <div className="w-2/5 h-8 bg-slate-200 rounded-full animate-pulse" />
          <div className="w-full h-full flex flex-col gap-10 mt-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((key) => {
              return (
                <div
                  className="w-full h-8 bg-slate-200 rounded-full animate-pulse"
                  key={key}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
