import React from "react";
// import { Mic } from 'lucide-react';

interface MessageInputProps {
  newMessage: string;
  setNewMessage: (message: string) => void;
  handleSendMessage: () => void;
}

export function MessageInput({ handleSendMessage }: MessageInputProps) {
  return (
    <div className="text-center pb-12">
  <button
    onClick={handleSendMessage}
    className="mt-4 px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600"
  >
    Add
  </button>
</div>

  );
}
