"use client";

import { Button, Input } from "@nextui-org/react";

export const Register = () => {
    return (
        <main className="h-screen flex justify-center items-center ">
            <div className="w-[260px]">
            <div className="space-y-6">
            <h1>Register</h1>
            <Input name="name" placeholder="Full Name" />
            <Input name="username" placeholder="Username" />
            <Input name="email" placeholder="youremail@gmail.com" />
            <Input name="password" type="password"  placeholder="Password" />
            <Button color="warning">Register</Button>
            </div>
            </div>
        </main>
    );
};

