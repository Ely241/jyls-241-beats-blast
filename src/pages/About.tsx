import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Music, Headphones, Mic, Award, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticleBackground from '@/components/layout/ParticleBackground';

const About = () => {
  const stats = [
    { icon: Music, label: "Beats Produced", value: "500+" },
    { icon: Users, label: "Artists Collaborated", value: "50+" },
    { icon: Award, label: "Years Experience", value: "5+" },
    { icon: Headphones, label: "Hours in Studio", value: "2000+" }
  ];

  const influences = [
    "Metro Boomin", "Southside", "808 Mafia", "Murda Beatz", 
    "Pierre Bourne", "Wheezy", "Nick Mira", "Internet Money"
  ];

  const services = [
    {
      icon: Music,
      title: "Beat Production",
      description: "Custom beats in Trap, Drill, Afrobeat, and Hip-Hop with that signature dark aesthetic."
    },
    {
      icon: Mic,
      title: "Mixing & Mastering",
      description: "Professional mixing and mastering services to make your tracks sound industry-ready."
    },
    {
      icon: Zap,
      title: "Collaborations",
      description: "Open to working with artists, producers, and labels for exciting new projects."
    }
  ];

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
            About 241 PRODUCER
          </h1>
          <p className="text-xl text-muted-foreground">
            JylsTheProducer • The Dark Side of Sound
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h2 className="font-metal text-3xl text-primary mb-6">The Journey</h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  Welcome to the dark side of sound. I'm JylsTheProducer, known in the streets as 
                  <span className="text-primary font-semibold"> 241 PRODUCER</span>. 
                  My journey began in the shadows, crafting beats that blend the raw energy of metal 
                  with the urban pulse of modern hip-hop.
                </p>
                <p>
                  Growing up surrounded by both metal and hip-hop culture, I developed a unique perspective 
                  on music production. My signature sound combines heavy, distorted elements with crisp, 
                  modern production techniques - creating beats that hit different.
                </p>
                <p>
                  Every beat I produce carries that signature red and black aesthetic - dark, powerful, 
                  and unapologetically raw. Whether it's a hard-hitting trap beat, an afrobeat with 
                  metal undertones, or a drill track that cuts deep, my goal is to create music 
                  that moves both body and soul.
                </p>
                <p>
                  The name "241" represents the duality in my music - the balance between darkness 
                  and light, aggression and melody, tradition and innovation. It's this contrast 
                  that makes each track unique and unforgettable.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="font-metal text-2xl text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-metal text-4xl text-primary text-glow text-center mb-12">
            Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <service.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-metal text-xl text-primary mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Influences */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h2 className="font-metal text-3xl text-primary text-glow text-center mb-8">
                Musical Influences
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {influences.map((influence, index) => (
                  <motion.div
                    key={influence}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <span className="inline-block bg-muted text-foreground px-4 py-2 rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                      {influence}
                    </span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-dark border-border">
            <CardContent className="p-12">
              <h2 className="font-metal text-3xl text-primary text-glow mb-6">
                Ready to Create Something Dark & Powerful?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's collaborate and bring your vision to life with that signature 241 PRODUCER sound.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/beats">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Browse Beats
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    className="bg-gradient-fire hover:scale-105 transition-transform glow-red"
                  >
                    Work With Me
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default About;