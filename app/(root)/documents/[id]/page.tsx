import { Editor } from "@/components/editor/Editor";
import Header from "@/components/Header";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";
import CollaborativeRoom from "../../../../components/CollaborativeRoom";

const Document = () => {
  return (
    <main className="flex items-center w-full flex-col">
      <CollaborativeRoom />
    </main>
  );
};

export default Document;
