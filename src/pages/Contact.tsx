import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  MessageCircle, 
  Instagram, 
  Youtube, 
  Music, 
  Clock,
  DollarSign,
  Headphones
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ParticleBackground from '@/components/layout/ParticleBackground';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: ''
  });
  const { toast } = useToast();

  const projectTypes = [
    { id: 'beat-lease', label: 'Beat Lease', icon: Music },
    { id: 'custom-beat', label: 'Custom Beat', icon: Headphones },
    { id: 'mixing-mastering', label: 'Mixing & Mastering', icon: Music },
    { id: 'collaboration', label: 'Collaboration', icon: MessageCircle },
  ];

  const pricingInfo = [
    { type: 'Beat Lease', price: '$20-35', description: 'MP3 + WAV files' },
    { type: 'Exclusive Rights', price: '$200-500', description: 'Full ownership + stems' },
    { type: 'Custom Beat', price: '$150-300', description: 'Made to order' },
    { type: 'Mixing & Mastering', price: '$50-100', description: 'Professional polish' },
  ];

  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: Instagram, 
      url: '#', 
      handle: '@241producer',
      color: 'hover:text-pink-500'
    },
    { 
      name: 'YouTube', 
      icon: Youtube, 
      url: '#', 
      handle: '241 PRODUCER',
      color: 'hover:text-red-500'
    },
    { 
      name: 'TikTok', 
      icon: Music, 
      url: '#', 
      handle: '@jylstheproducer',
      color: 'hover:text-purple-500'
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleProjectTypeChange = (type: string) => {
    setFormData(prev => ({
      ...prev,
      projectType: type
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      projectType: ''
    });
  };

  return (
    <div className="min-h-screen pt-16 relative">
      <ParticleBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-metal text-5xl md:text-6xl text-primary text-glow mb-4">
            Let's Connect
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to create something dark and powerful? Hit me up for beats, collaborations, or just to talk music.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h2 className="font-metal text-3xl text-primary mb-6">
                  Send a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Project Type Selection */}
                  <div>
                    <Label className="text-foreground mb-3 block">Project Type</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {projectTypes.map((type) => (
                        <Button
                          key={type.id}
                          type="button"
                          variant={formData.projectType === type.id ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleProjectTypeChange(type.id)}
                          className={`flex-col h-auto py-3 ${
                            formData.projectType === type.id 
                              ? 'bg-gradient-fire text-primary-foreground' 
                              : 'hover:bg-muted'
                          }`}
                        >
                          <type.icon className="w-4 h-4 mb-1" />
                          <span className="text-xs">{type.label}</span>
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Email */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-foreground">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="mt-1 bg-input border-border focus:border-primary"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="mt-1 bg-input border-border focus:border-primary"
                        required
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <Label htmlFor="subject" className="text-foreground">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="mt-1 bg-input border-border focus:border-primary"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-foreground">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, vision, and what you're looking for..."
                      rows={6}
                      className="mt-1 bg-input border-border focus:border-primary resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-fire hover:scale-105 transition-transform glow-red"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Response Time */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="font-metal text-xl text-primary">Response Time</h3>
                </div>
                <p className="text-muted-foreground">
                  I typically respond within <span className="text-primary font-semibold">24 hours</span>. 
                  For urgent projects, feel free to reach out on social media.
                </p>
              </CardContent>
            </Card>

            {/* Pricing */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-6 h-6 text-primary" />
                  <h3 className="font-metal text-xl text-primary">Pricing</h3>
                </div>
                <div className="space-y-3">
                  {pricingInfo.map((item) => (
                    <div key={item.type} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                      <div>
                        <div className="font-semibold text-foreground">{item.type}</div>
                        <div className="text-xs text-muted-foreground">{item.description}</div>
                      </div>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {item.price}
                      </Badge>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Prices may vary based on complexity and timeline.
                </p>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-metal text-xl text-primary mb-4">Follow the Journey</h3>
                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className={`flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-all duration-300 group ${social.color}`}
                    >
                      <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-current transition-colors" />
                      <div>
                        <div className="font-semibold text-foreground">{social.name}</div>
                        <div className="text-sm text-muted-foreground">{social.handle}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h2 className="font-metal text-3xl text-primary text-glow text-center mb-8">
                Frequently Asked Questions
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">How long does it take to complete a custom beat?</h4>
                  <p className="text-muted-foreground text-sm">
                    Custom beats typically take 3-7 days depending on complexity and current workload.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Do you offer revisions?</h4>
                  <p className="text-muted-foreground text-sm">
                    Yes! I include 2 free revisions with every custom beat to ensure you're 100% satisfied.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">What file formats do you provide?</h4>
                  <p className="text-muted-foreground text-sm">
                    All beats come with high-quality MP3 and WAV files. Exclusive purchases include stems.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Can I use your beats for commercial purposes?</h4>
                  <p className="text-muted-foreground text-sm">
                    Yes, with the appropriate license. Beat leases allow commercial use with credit.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;