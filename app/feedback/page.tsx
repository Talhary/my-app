"use client";
import { useState } from "react";
import Link from "next/link";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ThemeChange } from "../_components/theme";

export default function SaveDataPage() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const saveData = async () => {
    try {
      const data = {
        json_data: {
          name: name,
          age: parseInt(age),
          email: email,
          desc: desc,
        },
      };

      const response = await fetch("http://localhost:5000/save_json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      setResponseMessage(responseData.message);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-800 ">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Please fill out the form below.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              placeholder="Enter your age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="desc">Description</Label>
            <Textarea
              className="min-h-[100px]"
              id="desc"
              placeholder="Enter a description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={saveData} className="w-full">
            Save Data
          </Button>
          <Button variant={"link"} onClick={saveData} className="w-full">
            <Link href="/">Back</Link>
          </Button>
          <p className="text-gray-500  dark:text-gray-400">{responseMessage}</p>
        </CardFooter>
      </Card>
    </div>
  );
}
