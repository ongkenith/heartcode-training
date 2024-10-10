"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { insertOneUser } from "../server/user";


const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }).max(10, {
    message: "Username must be below 11 characters."
  }),
  question1: z.string({
    message: "Please enter your answer"
  }),
  question2: z.string({
    message: "Please enter your answer"
  }),
})

export default function quiz() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      question1: "",
    },
  })
  async function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
        	title: "Hello!",
        	description: "You have submitted the quiz... validating",
    	})
    console.log(values);
    
    var isDrugUser = true

    if (values.question1 === "no") {
      isDrugUser = false;
    }

    await insertOneUser(values.username, isDrugUser);
  }
    return (
      <div className="mx-4">
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input type="string" placeholder="Username" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="question1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question 1</FormLabel>
              <FormDescription className="text-grey-100">
                Do you sell drugs?
              </FormDescription>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Please select an answer"/>
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
              </Select>
            </FormItem>
                	)}
            	/>
        <FormField
          control={form.control}
          name="question2"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Question 2</FormLabel>
              <FormDescription className="text-grey-100">
                Why should you do if your friends or family are consuming drugs?
              </FormDescription>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="seekhelp" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Seek Help
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="nothing" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Do nothing
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>
    );
  }