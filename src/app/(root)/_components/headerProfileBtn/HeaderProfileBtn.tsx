"use client";

import { SignedOut, UserButton } from "@clerk/nextjs";
import { User } from "lucide-react";
import React from "react";

const HeaderProfileBtn: React.FC = () => {
  return (
    <>
      <UserButton>
        <UserButton.MenuItems>
          <UserButton.Link
            label="Profile"
            labelIcon={<User className="size-4" />}
            href="/profile"
          />
        </UserButton.MenuItems>
      </UserButton>

      <SignedOut>{/* <LoginButton /> */}</SignedOut>
    </>
  );
};

export default HeaderProfileBtn;
