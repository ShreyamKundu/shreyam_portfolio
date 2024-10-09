import { Button } from "@/components/ui/button";
import { SendIcon } from "lucide-react";


const Data = () => {
  return (
    <div className="max-w-[89vw] flex flex-col items-start justify-center gap-6">
          {/* Name  */}
          <h1 className="text-5xl font-bold">Shreyam Kundu</h1>
          <div className="flex items-center w-full">
            <div
              className="border-t-2 border-white-100 mr-3"
              style={{ minWidth: "80px" }}
            />
            <h6 className="text-xl">Backend Developer</h6>
          </div>

          <p className="max-w-md text-gray-400  ">
            Engineering the core structure of web applications with expertise
            and passion.
          </p>

        
          <Button
            variant="secondary"
            className="bg-white text-gray-800 hover:bg-gray-100 hover:text-gray-900 hover:scale-105 transition-all duration-200 text-xl py-8 px-8 rounded-xl flex items-center gap-4 mt-7"
          >
            Say Hello
            <SendIcon className="h-6 w-6" />
          </Button>
        </div>
  )
}

export default Data