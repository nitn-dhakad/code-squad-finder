
import React, { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Profile } from "@/data/demoProfiles";

type Props = {
  open: boolean;
  onClose: () => void;
  target: Profile | null;
};

export default function ConnectModal({ open, onClose, target }: Props) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    toast({
      title: `Message sent to ${target?.name}!`,
      description: "This is a demo – messaging will work in a future version.",
    });
    setMessage("");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Connect with {target?.name}</DialogTitle>
        </DialogHeader>
        <div>
          <textarea
            className="w-full border rounded px-3 py-2 min-h-[80px] resize-none mt-2"
            placeholder="Write a short message (e.g. why you'd like to team up!)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <DialogFooter className="gap-2">
          <DialogClose asChild>
            <Button variant="ghost" type="button">
              Cancel
            </Button>
          </DialogClose>
          <Button className="bg-violet-500 hover:bg-violet-600" onClick={handleSend} disabled={!target || !message.trim()}>
            Send
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
