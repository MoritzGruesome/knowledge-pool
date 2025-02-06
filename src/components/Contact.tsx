import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <section className="py-20 animate-fade-up">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        Get In Touch
      </h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
        <div>
          <Input placeholder="Your Name" className="bg-white/5 border-white/10 text-white placeholder:text-white/50" />
        </div>
        <div>
          <Input type="email" placeholder="Your Email" className="bg-white/5 border-white/10 text-white placeholder:text-white/50" />
        </div>
        <div>
          <Textarea
            placeholder="Your Message"
            className="bg-white/5 border-white/10 text-white placeholder:text-white/50 min-h-[150px]"
          />
        </div>
        <Button type="submit" className="w-full bg-white text-background hover:bg-white/90">
          Send Message
        </Button>
      </form>
    </section>
  );
};

export default Contact;