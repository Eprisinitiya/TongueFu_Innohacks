import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const DropDown = () => {
  return (
    <div className="flex justify-center text-">
      <FlyoutLink href="#" FlyoutContent={PricingContent}  >
        
        <li class='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><Link href='javascript:void(0)'
            class='hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Resouces</Link>
        </li>
      </FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-white">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-slate-800 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            // style={{  }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute  top-12 text-slate-300"
            style ={{ width : "700px" }}
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-10 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-slate-800" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = () => {
  return (
      <div className="flex p-5 bg-slate-800 rounded-xl shadow-xl ">
        <div className="w-4/5 mr-5 text-neutral-200">
            <h1>Blogs & Articles</h1>
            <div className="card flex h-2/5 w-full p-2">
                <div className="img p-2 bg-slate-950 w-1/4 rounded-xl">
                    
                </div>
                <div className="content  w-3/4" >
                  <h1 className="p-2">This is a heading</h1>
                  <p className="text-xs p-2 -mt-2">
                    this is a paragraphed heading
                    Lorem ...............................................

                  </p>
                </div>
            </div>
            <div className="card flex h-2/5 w-full p-2">
                <div className="img p-2 bg-slate-950 w-1/4 rounded-xl">
                    
                </div>
                <div className="content  w-3/4" >
                  <h1 className="p-2">This is a heading</h1>
                  <p className="text-xs p-2 -mt-2">
                    this is a paragraphed heading

                  </p>
                </div>
            </div>
            <div className="h-1/5 text-blue-800 underline mt-2 font-serif">
              <h1>Read More Articles.....</h1>
            </div>

        </div>
        <div className="w-1/5">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">Company</h3>
        <a href="#" className="block text-sm hover:underline mt-2">
          Blogs
        </a>
        <a href="#" className="block text-sm hover:underline mt-2">
          Videos
        </a>
      </div>
      <div className="mb-6 space-y-3">
        <a href="#" className="block text-sm hover:underline">
          Culture
        </a>
        <a href="#" className="block text-sm hover:underline">
          Community
        </a>
      </div>
      <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
        Contact Us
      </button>
      <div className="space-y-3 text-xl">
        <a href="#" className="block text-sm hover:underline mt-4 text-blue-800 underline">
          Learn More.....
        </a>
        </div>
    </div>

    </div>
  );
};

// export default DropDown;
export default DropDown; 