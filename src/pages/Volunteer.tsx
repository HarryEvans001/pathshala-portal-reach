import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Heart, Users, BookOpen, Clock } from "lucide-react";

const Volunteer = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    occupation: "",
    experience: "",
    skills: [],
    availability: "",
    motivation: "",
    agreement: false,
  });

  const skillOptions = [
    "Teaching",
    "Tutoring",
    "Arts & Crafts",
    "Sports & Games",
    "Computer Skills",
    "Music",
    "Language Skills",
    "Administrative Support",
    "Photography",
    "Event Planning",
  ];

  const handleSkillChange = (skill: string, checked: boolean | string) => {
    const isChecked = checked === true;
    setFormData(prev => ({
      ...prev,
      skills: isChecked 
        ? [...prev.skills, skill]
        : prev.skills.filter(s => s !== skill)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreement) {
      toast({
        title: "Agreement Required",
        description: "Please agree to the terms and conditions.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll contact you soon.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      age: "",
      occupation: "",
      experience: "",
      skills: [],
      availability: "",
      motivation: "",
      agreement: false,
    });
  };

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Become a Volunteer
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Join our passionate community of volunteers and help us transform lives through education. 
            Every skill, every hour, and every act of kindness makes a difference.
          </p>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Volunteer With Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center hover:shadow-soft transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full mx-auto mb-4">
                  <Heart className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">Make an Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Directly contribute to transforming young lives and building stronger communities.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-soft transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-warm rounded-full mx-auto mb-4">
                  <Users className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-lg">Build Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Connect with like-minded individuals and build lasting relationships.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-soft transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-success rounded-full mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Learn & Grow</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Develop new skills and gain valuable experience in education and community work.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-soft transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-primary-glow rounded-full mx-auto mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Flexible Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Choose when and how you want to contribute based on your availability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Volunteer Application Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="age">Age *</Label>
                      <Input
                        id="age"
                        type="number"
                        min="16"
                        value={formData.age}
                        onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="occupation">Occupation/Profession</Label>
                    <Input
                      id="occupation"
                      value={formData.occupation}
                      onChange={(e) => setFormData(prev => ({ ...prev, occupation: e.target.value }))}
                    />
                  </div>

                  {/* Skills and Experience */}
                  <div>
                    <Label>Skills & Interests (Select all that apply)</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                      {skillOptions.map((skill) => (
                        <div key={skill} className="flex items-center space-x-2">
                          <Checkbox
                            id={skill}
                            checked={formData.skills.includes(skill)}
                            onCheckedChange={(checked) => handleSkillChange(skill, checked)}
                          />
                          <Label htmlFor={skill} className="text-sm">
                            {skill}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="experience">Previous Volunteering/Teaching Experience</Label>
                    <Textarea
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                      placeholder="Describe any relevant experience you have..."
                    />
                  </div>

                  {/* Availability */}
                  <div>
                    <Label htmlFor="availability">Availability *</Label>
                    <Select
                      value={formData.availability}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, availability: value }))}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekdays">Weekdays</SelectItem>
                        <SelectItem value="weekends">Weekends</SelectItem>
                        <SelectItem value="both">Both Weekdays & Weekends</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Motivation */}
                  <div>
                    <Label htmlFor="motivation">Why do you want to volunteer with us? *</Label>
                    <Textarea
                      id="motivation"
                      value={formData.motivation}
                      onChange={(e) => setFormData(prev => ({ ...prev, motivation: e.target.value }))}
                      placeholder="Tell us about your motivation to volunteer..."
                      required
                    />
                  </div>

                  {/* Agreement */}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="agreement"
                      checked={formData.agreement}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreement: checked === true }))}
                    />
                    <Label htmlFor="agreement" className="text-sm">
                      I agree to the terms and conditions and commit to volunteering responsibly *
                    </Label>
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;