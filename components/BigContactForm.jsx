"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export default function BigContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.target);
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        alert("Thank you for your submission!");
        e.target.reset();
      } else {
        throw new Error(data.error || "Something went wrong");
      }
    } catch (error) {
      alert("Failed to submit form. Please try again.");
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="bg-[#1a1f24] border-none w-full md:w-[60%] mx-auto mb-3">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Drop Us a Line
            </h2>
            <p className="text-sm text-gray-400">
              Your email address will not be published. Required fields are
              marked <span className="text-[#ff4a17]">*</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-gray-400">
                First Name <span className="text-[#ff4a17]">*</span>
              </Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className="bg-[#242b33] border-none text-gray-300 placeholder:text-gray-500"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-gray-400">
                Last Name <span className="text-[#ff4a17]">*</span>
              </Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                className="bg-[#242b33] border-none text-gray-300 placeholder:text-gray-500"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-400">
                Email <span className="text-[#ff4a17]">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className="bg-[#242b33] border-none text-gray-300 placeholder:text-gray-500"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-gray-400">
                Phone <span className="text-[#ff4a17]">*</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                placeholder="(XXX) XXX-XXXX"
                className="bg-[#242b33] border-none text-gray-300 placeholder:text-gray-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="website" className="text-gray-400">
                Website
              </Label>
              <Input
                id="website"
                name="website"
                placeholder="Website"
                className="bg-[#242b33] border-none text-gray-300 placeholder:text-gray-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="industry" className="text-gray-400">
                Industry
              </Label>
              <Input
                id="industry"
                name="industry"
                placeholder="Industry"
                className="bg-[#242b33] border-none text-gray-300 placeholder:text-gray-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="companyName" className="text-gray-400">
                Company Name
              </Label>
              <Input
                id="companyName"
                name="companyName"
                placeholder="Company Name"
                className="bg-[#242b33] border-none text-gray-300 placeholder:text-gray-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="companySize" className="text-gray-400">
                Company Size
              </Label>
              <Input
                id="companySize"
                name="companySize"
                placeholder="Company Size"
                className="bg-[#242b33] border-none text-gray-300 placeholder:text-gray-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="productIdea" className="text-gray-400">
              What is your product idea?
            </Label>
            <Textarea
              id="productIdea"
              name="productIdea"
              className="bg-[#242b33] border-none text-gray-300 placeholder:text-gray-500 min-h-[120px]"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              What services can we provide you ?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="digitalMarketing" />
                <label
                  htmlFor="digitalMarketing"
                  className="text-gray-300 text-sm"
                >
                  Digital Marketing
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="design" />
                <label htmlFor="design" className="text-gray-300 text-sm">
                  Design
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="development" />
                <label htmlFor="development" className="text-gray-300 text-sm">
                  Development
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="ecommerce" />
                <label htmlFor="ecommerce" className="text-gray-300 text-sm">
                  eCommerce
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="apps" />
                <label htmlFor="apps" className="text-gray-300 text-sm">
                  Apps
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="seo" />
                <label htmlFor="seo" className="text-gray-300 text-sm">
                  SEO
                </label>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox id="terms" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms"
                className="text-sm text-gray-400 leading-relaxed"
              >
                By checking this box you agree to Soft Stings{" "}
                <a href="#" className="text-[#ff4a17] hover:underline">
                  terms and conditions
                </a>
                . You'll receive e-mail and SMS notifications. You may{" "}
                <a href="#" className="text-[#ff4a17] hover:underline">
                  opt-out
                </a>{" "}
                any time.
              </label>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#ff4a17] hover:bg-[#ff4a17]/90 text-white px-8"
          >
            {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
