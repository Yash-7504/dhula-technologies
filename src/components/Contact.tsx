import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Send } from "lucide-react";
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = 'service_elvamwk';
    const templateId = 'template_497tb0r';
    const publicKey = 'cIeigDwJA2Sgz6yhb';

    emailjs.send(serviceId, templateId, {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company,
      message: formData.message,
      to_email: 'dhulatechnologies@gmail.com',
    }, publicKey)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    })
    .catch((error) => {
      console.log('FAILED...', error);
      alert('Failed to send message. Please try again.');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-surface/30 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="heading-lg mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Let's Build Together
            </h2>
            <p className="body-lg text-muted-foreground text-sm sm:text-base md:text-lg px-4">
              Ready to start your blockchain journey? Get in touch with our team
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Contact Info Column */}
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
              
              {/* Email Card */}
              <div className="glass-card p-5 sm:p-6 rounded-xl">
                <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-brand-accent mb-3 sm:mb-4" />
                <h3 className="heading-sm mb-2 text-base sm:text-lg">Email Us</h3>
                <p className="body-md text-muted-foreground mb-2 text-sm sm:text-base">
                  Get in touch via email for detailed inquiries
                </p>
                <a 
                  href="mailto:dhulatechnologies@gmail.com" 
                  className="body-md text-brand-primary hover:text-brand-accent transition-colors break-all text-sm sm:text-base"
                >
                  dhulatechnologies@gmail.com
                </a>
              </div>

              {/* Schedule Call Card */}
              <div className="glass-card p-5 sm:p-6 rounded-xl">
                <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 text-brand-accent mb-3 sm:mb-4" />
                <h3 className="heading-sm mb-2 text-base sm:text-lg">Schedule a Call</h3>
                <p className="body-md text-muted-foreground mb-2 text-sm sm:text-base">
                  Book a free consultation with our experts
                </p>
                <Button 
                  variant="outline" 
                  className="mt-2 w-full sm:w-auto text-sm sm:text-base"
                  onClick={() => window.location.href = 'mailto:dhulatechnologies@gmail.com?subject=Consultation%20Request&body=Hello%20Dhula%20Technologies%2C%0D%0A%0D%0AI%20would%20like%20to%20book%20a%20consultation%20regarding%20your%20blockchain%20services.%0D%0A%0D%0AThank%20you.'}
                >
                  Book Consultation
                </Button>
              </div>

              {/* Decorative Element */}
              <div className="glass-card p-5 sm:p-6 rounded-xl bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10">
                <p className="body-lg font-semibold mb-2 text-base sm:text-lg">Quick Response</p>
                <p className="body-sm text-muted-foreground text-sm">
                  We typically respond within 24 hours
                </p>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="glass-card p-5 sm:p-6 md:p-8 rounded-xl order-1 lg:order-2">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm sm:text-base">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="text-sm sm:text-base h-10 sm:h-11"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm sm:text-base">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="text-sm sm:text-base h-10 sm:h-11"
                  />
                </div>

                {/* Company Field */}
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm sm:text-base">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={handleChange}
                    className="text-sm sm:text-base h-10 sm:h-11"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm sm:text-base">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="text-sm sm:text-base resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full group h-11 sm:h-12 text-sm sm:text-base touch-manipulation" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
