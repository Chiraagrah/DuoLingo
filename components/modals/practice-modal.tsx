"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
 } from "@/components/ui/dialog";

 import {Button} from "@/components/ui/button";

 import { usePracticeModal } from "@/store/use-practice-modal";


export const PracticeModal = () => {
    const [isclient, setIsClient] = useState(false);
    const { isOpen, close } = usePracticeModal();

    useEffect(() => setIsClient(true), []);

    if (!isclient){
        return null;
    }

    return(
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <div className="flex items-center justify-center mb-5">
                        <Image 
                            src="/heart.svg"
                            alt="Heart"
                            height={100}
                            width={100}
                        />
                    </div>
                    <DialogTitle className="text-center text-2xl font-bold">
                        Practice lesson
                    </DialogTitle>
                    <DialogDescription className="text-center">
                        Use practice lessons to regain hearts and points. You cannot loose hearts or points in practice lessons.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mb-4">
                    <div className="flex flex-col gap-y-4 w-full">
                        <Button 
                            variant="primary" className="w-full" 
                            size="lg" 
                            onClick={close}
                        >
                            I understand
                        </Button>
                    </div>

                </DialogFooter>

            </DialogContent>
        </Dialog>

    )

};