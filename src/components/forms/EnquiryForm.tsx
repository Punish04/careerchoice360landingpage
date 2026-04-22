import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";

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

/** Zod schema with Indian phone validation. */
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
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<EnquiryValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: { name: "", email: "", phone: "", exam: "", message: "" },
  });

  const examValue = watch("exam");

  const onSubmit = async (values: EnquiryValues) => {
    setSubmitting(true);
    // Simulate network call — wire to backend later.
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    toast.success("Thanks! Our counselor will reach out within 24 hours.", {
      description: `We've received your enquiry, ${values.name.split(" ")[0]}.`,
    });
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-4"
      aria-label="Quick enquiry form"
    >
      <div className="space-y-1.5">
        <Label htmlFor="name">Full name</Label>
        <Input id="name" placeholder="Aarav Sharma" {...register("name")} />
        {errors.name && (
          <p className="text-xs text-destructive" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className={compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
          {errors.email && (
            <p className="text-xs text-destructive" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" inputMode="tel" placeholder="+91 98XXXXXXXX" {...register("phone")} />
          {errors.phone && (
            <p className="text-xs text-destructive" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="exam">Target exam</Label>
        <Select value={examValue} onValueChange={(v) => setValue("exam", v, { shouldValidate: true })}>
          <SelectTrigger id="exam" aria-invalid={!!errors.exam}>
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
          <Label htmlFor="message">Message (optional)</Label>
          <Textarea
            id="message"
            rows={3}
            placeholder="Tell us about your goals…"
            {...register("message")}
          />
          {errors.message && (
            <p className="text-xs text-destructive" role="alert">
              {errors.message.message}
            </p>
          )}
        </div>
      )}

      <MagneticButton type="submit" disabled={submitting} className="w-full">
        {submitting ? (
          <>
            <Loader2 className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send /> Request Free Evaluation
          </>
        )}
      </MagneticButton>

      <p className="text-[11px] text-muted-foreground text-center">
        By submitting, you agree to receive counseling-related communication.
      </p>
    </form>
  );
};
