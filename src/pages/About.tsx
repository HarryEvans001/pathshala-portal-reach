import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import aboutImage from "@/assets/about-image.jpg";
import { Eye, Target, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                About Basti Ki Pathshala
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded with a vision to make quality education accessible to all, 
                Basti Ki Pathshala has been transforming communities through the power of learning.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We believe that education is not just a right, but the foundation upon which 
                individuals and communities build their futures. Our grassroots approach ensures 
                that no child is left behind.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/volunteer">Join Our Mission</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={aboutImage}
                alt="Volunteers teaching children"
                className="rounded-lg shadow-soft w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-primary rounded-full opacity-20 animate-float" />
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-warm rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-soft transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full">
                    <Eye className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  A world where every child, regardless of their background or circumstances, 
                  has access to quality education that empowers them to reach their full potential 
                  and contribute meaningfully to society.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-soft transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-warm rounded-full">
                    <Target className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To provide accessible, quality education to underserved communities through 
                  innovative teaching methods, community engagement, and sustainable partnerships 
                  that create lasting positive change.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These core values guide everything we do and shape the way we approach 
              our mission of transforming lives through education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Compassion</h3>
              <p className="text-muted-foreground">
                We approach every child and community with empathy, understanding their 
                unique challenges and working with them to overcome barriers to learning.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-warm rounded-full mx-auto mb-6">
                <Users className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Community</h3>
              <p className="text-muted-foreground">
                We believe in the power of community collaboration and work hand-in-hand 
                with local stakeholders to create sustainable educational solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-success rounded-full mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Excellence</h3>
              <p className="text-muted-foreground">
                We are committed to maintaining the highest standards in our educational 
                programs while continuously innovating and improving our approaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-muted-foreground">
              Numbers that reflect the lives we've touched and communities we've transformed.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-sm text-muted-foreground">Children Educated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-warm bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-sm text-muted-foreground">Active Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-success mb-2">
                15
              </div>
              <div className="text-sm text-muted-foreground">Communities Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                3
              </div>
              <div className="text-sm text-muted-foreground">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Be Part of Our Story
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every volunteer brings unique skills and passion to our mission. 
            Join us in creating a brighter future for communities across India.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/volunteer">Become a Volunteer</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;