import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { Fragment } from "react";

interface ConfirmationModalProps {
    isOpen: boolean;
    closeModal: () => void;
    confirmEstimate: () => void;
    loading?: boolean;
}

const ConfirmationModal = ({
    isOpen,
    closeModal,
    confirmEstimate,
    loading = false,
}: ConfirmationModalProps) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeModal}>
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" />
                </TransitionChild>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl border border-border bg-card p-6 text-center text-card-foreground shadow-xl shadow-primary/10 transition-all">
                                <DialogTitle
                                    as="h3"
                                    className="border-b border-border pb-3 text-lg font-semibold leading-6 text-foreground"
                                >
                                    Confirm Your Estimate Request
                                </DialogTitle>

                                <div className="my-5">
                                    <p className="text-sm leading-6 text-muted-foreground">
                                        Confirm your estimate request and someone from our team will
                                        be in touch with you about your project.
                                    </p>
                                </div>

                                <div className="mt-4 flex flex-col-reverse justify-center gap-3 sm:flex-row">
                                    <button
                                        type="button"
                                        onClick={closeModal}
                                        disabled={loading}
                                        className="inline-flex justify-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-card-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="button"
                                        disabled={loading}
                                        onClick={confirmEstimate}
                                        className="inline-flex justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-brite-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        {loading ? "Sending..." : "Get Your Free Estimate"}
                                    </button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default ConfirmationModal;
