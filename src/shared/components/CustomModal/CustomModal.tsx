import {IconButton, Typography} from "@maxhub/max-ui";
import {X} from "lucide-react";
import type {ComponentProps} from "react";

interface CustomModalProps extends ComponentProps<'div'> {
    isOpen: boolean;
    title: string;
    closeModal: () => void;
}

export const CustomModal = ({ isOpen, title, closeModal, children }: CustomModalProps) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
             onMouseDown={closeModal}
        >
            <div className="w-full max-w-md rounded-xl bg-[var(--background-card)] p-6 shadow-xl"
                 onMouseDown={(event) => event.stopPropagation()}
            >
                <div className="mb-5 flex items-center justify-between">
                    <Typography.Headline variant="small">
                        {title}
                    </Typography.Headline>
                    <IconButton size="small" variant="ghost" onClick={closeModal}>
                        <X />
                    </IconButton>
                </div>
                {children}
            </div>
        </div>
    )
};