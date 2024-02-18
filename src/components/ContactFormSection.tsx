import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "./ui/form";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

const ContactFormSection = () => {
  const form = useForm();
  return (
    <section className="bg-[#F6F7FA] h-screen w-screen flex">
      <div className="w-1/2 flex flex-col h-full items-center justify-center">
        <div className="w-3/4 h-3/4 space-y-6">
          <h4 className="text-blue-700 font-medium">
            Tell us about your project
          </h4>
          <h1 className="text-3xl leading-10">
            What&apos;s your immediate business goal?
          </h1>
          <div className="space-y-4 py-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="digitalTransformation"
                className="bg-green-600 w-7 h-7 rounded-full"
                checked
              />
              <Label htmlFor="digitalTransformation">
                Digital Transformation / BPO
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="moderniseSystems"
                className="w-7 h-7 rounded-full"
                checked
              />
              <Label htmlFor="moderniseSystems">
                Modernise Legacy Systems & Technology
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="developApps"
                className="w-7 h-7 rounded-full"
                checked
              />
              <Label htmlFor="developApps">
                Develop Robust Apps & Products
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="unlockValue"
                className="w-7 h-7 rounded-full"
                checked
              />
              <Label htmlFor="unlockValue">
                Unlock Value With Data & Analytics
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="scaleTeams"
                className="w-7 h-7 rounded-full"
                checked
              />
              <Label htmlFor="scaleTeams">
                Scale or Build In-house Tech Teams
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="createExperiences"
                className="w-7 h-7 rounded-full"
                checked
              />
              <Label htmlFor="createExperiences">
                Create Stunning Digital Experiences
              </Label>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="h-3/4">
          <div className="bg-white p-11">
            <Form {...form}>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex space-x-5">
                      <div>
                        <FormLabel>First name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                      </div>
                      <div>
                        <FormLabel>Last name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                      </div>
                    </div>
                    <FormLabel>Company name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormLabel>Business email</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" />
                    </FormControl>
                    <FormLabel>Phone number</FormLabel>
                    <div className="flex space-x-4">
                      <FormControl className="w-1/2">
                        <Input {...field} type="email" />
                      </FormControl>
                      <FormControl className="">
                        <Input {...field} type="email" />
                      </FormControl>
                    </div>
                    <FormLabel>How can we help?</FormLabel>
                    <FormDescription>
                      Please share any relevant details
                    </FormDescription>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <Button className="w-full bg-blue-700">Submit</Button>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
