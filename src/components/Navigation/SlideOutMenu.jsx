import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline/index";
import { useStore } from "@nanostores/react";
import { isMenuOpen } from "../../stores/menu";

const aboutImage = "/assets/model-in-towel.jpeg";
const treatmentImage = "/assets/model-elegant.jpeg";
const blogImage = "/assets/model-stare.jpeg";
const contactImage = "/assets/contact.jpeg";

export const SlideOutMenu = () => {
  const open = useStore(isMenuOpen);
  const [focusedImage, setFocusedImage] = useState(aboutImage);

  const handleClose = () => {
    isMenuOpen.set(false);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        id="slide-out-menu"
        as="div"
        className="relative z-30"
        onClose={handleClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-3xl">
                  <div
                    className={`relative flex h-full flex-col overflow-y-scroll bg-neutral-800 py-6 shadow-xl bg-cover bg-center`}
                    style={{
                      backgroundImage: `url('${focusedImage}')`,
                      transition: "background-image 0.35s ease-in-out",
                    }}
                  >
                    <div className="absolute opacity-30 bg-black inset-0 z-0" />
                    <div className="relative px-4 sm:px-6">
                      <div className="flex justify-end items-center">
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md text-white hover:text-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:ring-offset-2"
                            onClick={handleClose}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-6 flex items-center flex-1 px-4 sm:px-6">
                      <div className="text-white font-serif font-black text-5xl flex flex-col space-y-4">
                        <a
                          href="/about"
                          className="hover:text-rose-200"
                          onMouseEnter={() => setFocusedImage(aboutImage)}
                        >
                          About
                        </a>
                        <a
                          href="/treatments"
                          className="hover:text-rose-200"
                          onMouseEnter={() => setFocusedImage(treatmentImage)}
                        >
                          Treatments
                        </a>
                        <a
                          href="/blog"
                          className="hover:text-rose-200"
                          onMouseEnter={() => setFocusedImage(blogImage)}
                        >
                          Blog
                        </a>
                        <a
                          href="/contact"
                          className="hover:text-rose-200"
                          onMouseEnter={() => setFocusedImage(contactImage)}
                        >
                          Contact
                        </a>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
