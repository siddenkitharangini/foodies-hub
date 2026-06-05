import Image from 'next/image'

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/images/about-bg.png"
              alt="Restaurant interior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            
            {/* Stats Overlay */}
            <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-background/90 backdrop-blur-sm rounded-lg">
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-foreground/70 text-sm">Years of Excellence</p>
              </div>
              <div className="text-center p-4 bg-background/90 backdrop-blur-sm rounded-lg">
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-foreground/70 text-sm">Signature Dishes</p>
              </div>
              <div className="text-center p-4 bg-background/90 backdrop-blur-sm rounded-lg">
                <p className="text-3xl font-bold text-primary">3</p>
                <p className="text-foreground/70 text-sm">Michelin Stars</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
              Our Story
            </p>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6">
              About Foodie&apos;s Hub
            </h2>
            <div className="space-y-6 text-foreground/70 leading-relaxed">
              <p>
                Founded in 2009, Foodie&apos;s Hub has been a beacon of culinary excellence in 
                the heart of the city. What started as a passionate dream has evolved into 
                one of the most celebrated fine dining destinations, earning three Michelin 
                stars and countless accolades.
              </p>
              <p>
                Our philosophy is simple yet profound: source the finest ingredients, treat 
                them with respect, and present them with artistry. Every dish that leaves 
                our kitchen is a testament to our commitment to excellence and our love for 
                the culinary arts.
              </p>
              <p>
                Beyond the food, we believe in creating memorable experiences. Our team of 
                dedicated professionals ensures that every visit feels special, whether 
                you&apos;re celebrating a milestone or simply enjoying a quiet evening with 
                loved ones.
              </p>
            </div>

            {/* Values */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold text-foreground">Quality First</h4>
                  <p className="text-foreground/60 text-sm">Premium ingredients from trusted sources</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold text-foreground">Artisan Craft</h4>
                  <p className="text-foreground/60 text-sm">Every dish made with precision</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold text-foreground">Warm Hospitality</h4>
                  <p className="text-foreground/60 text-sm">Service that feels like home</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold text-foreground">Sustainability</h4>
                  <p className="text-foreground/60 text-sm">Eco-conscious practices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
