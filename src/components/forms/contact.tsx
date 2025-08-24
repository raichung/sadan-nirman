"use client";

import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import { LuArrowRight, LuCalendar } from "react-icons/lu";
import { toast } from "sonner";
import { z } from "zod";

import sendContactEmail from "@/server/action/send-email";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import useContactModal from "../store/use-contact-modal";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Required",
  }),
  contact_number: z
    .string()
    .min(8, {
      message: "Invalid Phone Number",
    })
    .max(15, {
      message: "Invalid Phone Number",
    }),
  address: z.string().min(1, {
    message: "Required",
  }),
  booking_date: z.coerce.date(),
  description: z.string().optional(),
});

const ContactForm = ({ className }: { className?: string }) => {
  const { onClose } = useContactModal();
  const [isPending, startTransaction] = useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      contact_number: "",
      address: "",
      booking_date: new Date(),
      description: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    toast.loading("Sending message...", {
      id: "contact-form",
    });

    startTransaction(async () => {
      const res = await sendContactEmail({
        value: {
          ...data,
          booking_date: dayjs(data.booking_date).format("MMMM D, YYYY"),
        },
      });

      if (res.success) {
        toast.success("We'll contact you soon.", {
          id: "contact-form",
        });
        onClose();
      } else {
        toast.error("Error occured. Please Try again.", {
          id: "contact-form",
        });
      }
    });
  };

  return (
    <div className={cn("container ml-auto max-w-xl", className)}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between text-lg">
                  <FormLabel>Full Name</FormLabel>
                  <FormMessage className="mb-0" />
                </div>
                <FormControl>
                  <Input
                    autoComplete="given-name"
                    placeholder="Ram Bahadur"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="contact_number"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between text-lg">
                  <FormLabel>Contact Number</FormLabel>
                  <FormMessage className="mb-0" />
                </div>
                <FormControl>
                  <Input
                    autoComplete="tel"
                    placeholder="98XXXXXXXX"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between text-lg">
                  <FormLabel>Address</FormLabel>
                  <FormMessage className="mb-0" />
                </div>
                <FormControl>
                  <Input
                    autoComplete="address-line1"
                    placeholder="123 Main St, Kathmandu"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="booking_date"
            render={({ field }) => (
              <FormItem className="my-2.5 flex flex-col">
                <div className="flex items-center justify-between text-lg">
                  <FormLabel>Booking Date</FormLabel>
                  <FormMessage className="mb-0" />
                </div>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="neutral"
                        className={cn(
                          "h-14 w-full pl-3 text-left text-lg font-normal",
                          !field.value &&
                            "text-muted-foreground hover:bg-background",
                        )}
                      >
                        {field.value ? (
                          dayjs(field.value).format("MMMM D, YYYY")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <LuCalendar className="ml-auto size-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between text-lg">
                  <FormLabel>Description</FormLabel>
                  <FormMessage className="mb-0" />
                </div>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about your issue"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={isPending}
            size="xl"
            type="submit"
            className="w-full"
          >
            Send Message <LuArrowRight className="ml-2" />
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
