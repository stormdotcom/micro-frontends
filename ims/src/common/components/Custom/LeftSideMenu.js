import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/solid';

import { useDispatch, useSelector } from 'react-redux';
import { STATE_REDUCER_KEY } from '../../../modules/user/home/constants';
import { actions } from '../../../modules/user/home/slice';

function LeftSideMenu() {
    const isMenuOpen = useSelector(s => s[STATE_REDUCER_KEY].isMenuOpen);
    const dispatch = useDispatch();

    function closeModal() {
        dispatch(actions.setMenuOpen(false));
    }

    return (
        <div>
            <Transition appear show={isMenuOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
                    <div className="min-h-screen text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
                        </Transition.Child>

                        <span className="inline-block h-screen align-middle" aria-hidden="true">
                            &#8203;
                        </span>

                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-300 sm:duration-500"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out duration-300 sm:duration-500"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl">
                                <div className="flex items-center justify-between">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Menu
                                    </Dialog.Title>
                                    <button
                                        type="button"
                                        className="inline-flex justify-center p-1 text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none"
                                        onClick={closeModal}
                                    >
                                        <XMarkIcon className="w-5 h-5" aria-hidden="true" />
                                    </button>
                                </div>
                                <div className="mt-4">
                                    <p className="text-sm text-gray-500">
                                        This is your menu content. Add links or other components here.
                                    </p>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
}

export default LeftSideMenu;
