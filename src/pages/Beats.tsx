import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Music2 } from 'lucide-react';
import BeatCard from '@/components/ui/beat-card';
import ParticleBackground from '@/components/layout/ParticleBackground';

const Beats = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');

  const genres = ['All', 'Trap', 'Afrobeat', 'Drill', 'Hip-Hop', 'Dark'];

  const beats = [
    {
      title: "Crimson Shadows",
      genre: "Trap",
      bpm: 140,
      duration: "3:45",
      audioSrc: "https://www.soundjay.com/misc/sounds/waterdrip.mp3",
      price: "$25",
      tags: ["Dark", "Heavy", "Atmospheric"]
    },
    {
      title: "Blood Moon",
      genre: "Drill",
      bpm: 150,
      duration: "2:58",
      audioSrc: "https://www.soundjay.com/misc/sounds/waterdrip.mp3",
      price: "$30",
      tags: ["Aggressive", "Dark", "UK Drill"]
    },
    {
      title: "Inferno Vibes",
      genre: "Afrobeat",
      bpm: 120,
      duration: "4:12",
      audioSrc: "https://www.soundjay.com/misc/sounds/waterdrip.mp3",
      price: "$20",
      tags: ["Groovy", "Fire", "Cultural"]
    },
    {
      title: "Midnight Chaos",
      genre: "Trap",
      bpm: 145,
      duration: "3:30",
      audioSrc: "https://www.soundjay.com/misc/sounds/waterdrip.mp3",
      price: "$25",
      tags: ["Dark", "Experimental", "Bass"]
    },
    {
      title: "Steel Thunder",
      genre: "Hip-Hop",
      bpm: 95,
      duration: "4:05",
      audioSrc: "https://www.soundjay.com/misc/sounds/waterdrip.mp3",
      price: "$35",
      tags: ["Metal", "Hard", "Boom Bap"]
    },
    {
      title: "Scarlet Rush",
      genre: "Drill",
      bpm: 155,
      duration: "2:45",
      audioSrc: "https://www.soundjay.com/misc/sounds/waterdrip.mp3",
      price: "$30",
      tags: ["Fast", "Aggressive", "Red"]
    }
  ];

  const filteredBeats = beats.filter(beat => {
    const matchesSearch = beat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         beat.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesGenre = selectedGenre === 'All' || beat.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="min-h-screen pt-16 relative">
      <ParticleBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-metal text-5xl md:text-6xl text-primary text-glow mb-4">
            Beat Library
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive into the dark side of sound. Premium beats crafted with metal soul and urban fire.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between"
        >
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search beats, tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-card border-border focus:border-primary"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <Button
                  key={genre}
                  variant={selectedGenre === genre ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedGenre(genre)}
                  className={selectedGenre === genre 
                    ? "bg-gradient-fire text-primary-foreground" 
                    : "hover:bg-muted"
                  }
                >
                  {genre}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex items-center gap-2 mb-6"
        >
          <Music2 className="w-5 h-5 text-primary" />
          <span className="text-foreground">
            {filteredBeats.length} beat{filteredBeats.length !== 1 ? 's' : ''} found
          </span>
        </motion.div>

        {/* Beats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBeats.map((beat, index) => (
            <motion.div
              key={beat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <BeatCard {...beat} />
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredBeats.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-20"
          >
            <Music2 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-metal text-2xl text-muted-foreground mb-2">
              No beats found
            </h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or filter criteria
            </p>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setSelectedGenre('All');
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}

        {/* Custom Beats CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-card border border-border rounded-lg p-8"
        >
          <h3 className="font-metal text-3xl text-primary text-glow mb-4">
            Need Something Custom?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Can't find exactly what you're looking for? Let's create a custom beat that perfectly matches your vision.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-fire hover:scale-105 transition-transform glow-red"
          >
            Request Custom Beat
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Beats;