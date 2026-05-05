import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRef } from "react";
import { Send } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MagneticButton } from "@/components/ui-custom/MagneticButton";

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(60, "Too long"),
  email: z.string().trim().email("Enter a valid email"),
  phone: z
    .string()
    .trim()
    .regex(/^(\+?91[\-\s]?)?[6-9]\d{9}$/, "Enter a valid Indian phone number"),
  exam: z.string().min(1, "Please select your target exam"),
  message: z.string().max(500, "Keep it under 500 characters").optional(),
});

type EnquiryValues = z.infer<typeof enquirySchema>;

interface EnquiryFormProps {
  compact?: boolean;
}

export const EnquiryForm = ({ compact = false }: EnquiryFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<EnquiryValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: { name: "", email: "", phone: "", exam: "", message: "" },
  });

  const examValue = watch("exam");

  const onValid = () => {
    formRef.current?.submit();
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(onValid)}
      action="https://formsubmit.co/apunish4@gmail.com"
      method="POST"
      noValidate
      className="space-y-4"
      aria-label="Quick enquiry form"
    >
      {/* FormSubmit hidden fields */}
      <input type="hidden" name="_subject" value="New Student Enquiry" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      <div className="space-y-1.5">
        <Label htmlFor="enq-name">Full name</Label>
        <Input
          id="enq-name"
          placeholder="Aarav Sharma"
          {...register("name")}
          name="name"
        />
        {errors.name && (
          <p className="text-xs text-destructive" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className={compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
        <div className="space-y-1.5">
          <Label htmlFor="enq-email">Email</Label>
          <Input
            id="enq-email"
            type="email"
            placeholder="you@example.com"
            {...register("email")}
            name="email"
          />
          {errors.email && (
            <p className="text-xs text-destructive" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="enq-phone">Phone</Label>
          <Input
            id="enq-phone"
            inputMode="tel"
            placeholder="+91 98XXXXXXXX"
            {...register("phone")}
            name="phone"
          />
          {errors.phone && (
            <p className="text-xs text-destructive" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="enq-exam">Target exam</Label>
        {/* Hidden input so FormSubmit receives the exam value */}
        <input type="hidden" name="exam" value={examValue} />
        <Select
          value={examValue}
          onValueChange={(v) => setValue("exam", v, { shouldValidate: true })}
        >
          <SelectTrigger id="enq-exam" aria-invalid={!!errors.exam}>
            <SelectValue placeholder="Select exam" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="CAT">CAT</SelectItem>
            <SelectItem value="XAT">XAT</SelectItem>
            <SelectItem value="NMAT">NMAT</SelectItem>
            <SelectItem value="SNAP">SNAP</SelectItem>
            <SelectItem value="CMAT">CMAT</SelectItem>
            <SelectItem value="GMAT">GMAT</SelectItem>
            <SelectItem value="Undecided">Still deciding</SelectItem>
          </SelectContent>
        </Select>
        {errors.exam && (
          <p className="text-xs text-destructive" role="alert">
            {errors.exam.message}
          </p>
        )}
      </div>

      {!compact && (
        <div className="space-y-1.5">
          <Label htmlFor="enq-message">Message (optional)</Label>
          <Textarea
            id="enq-message"
            rows={3}
            placeholder="Tell us about your goals…"
            {...register("message")}
            name="message"
          />
          {errors.message && (
            <p className="text-xs text-destructive" role="alert">
              {errors.message.message}
            </p>
          )}
        </div>
      )}

      <MagneticButton type="submit" className="w-full">
        <Send className="h-4 w-4" /> Request Free Evaluation
      </MagneticButton>

      <p className="text-[11px] text-muted-foreground text-center">
        By submitting, you agree to receive counseling-related communication.
      </p>
    </form>
  );
};
