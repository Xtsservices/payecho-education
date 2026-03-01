import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { 
  Users, 
  Award, 
  Globe, 
  BookOpen, 
  Target, 
  Heart,
  Lightbulb,
  TrendingUp,
  Star
} from "lucide-react";
import { mockInstructors, mockTestimonials } from "../data/mock";

const About = () => {
  const [isVisible, setIsVisible] = useState({});

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously innovate our teaching methods and technology to provide the best learning experience.",
      color: "bg-yellow-500"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our passion for education drives us to create meaningful learning experiences for every student.",
      color: "bg-red-500"
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from course content to student support.",
      color: "bg-blue-500"
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in building a strong learning community where students support each other.",
      color: "bg-green-500"
    }
  ];

  const achievements = [
    { number: "70M+", label: "Students Worldwide", icon: Users },
    { number: "500+", label: "Expert Instructors", icon: Award },
    { number: "1000+", label: "Courses Available", icon: BookOpen },
    { number: "150+", label: "Countries Reached", icon: Globe }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About xpresedu
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Independent institution with top notch education & research, promoting lifelong learning and supporting teachers worldwide.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section
        id="mission"
        data-animate
        className={`py-16 bg-white transition-all duration-1000 ${
          isVisible.mission ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 text-sm bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">
                Our Mission
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Empowering Learners Globally Through Quality Education
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At xpresedu, we believe that quality education should be accessible to everyone, regardless of their geographical location or background. Our mission is to democratize learning by providing world-class educational content and personalized learning experiences.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are committed to supporting both learners and educators in their journey of knowledge sharing and skill development, creating a global community of continuous learners.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Students learning together"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">2015</div>
                <div className="text-sm">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        id="values"
        data-animate
        className={`py-16 bg-gray-50 transition-all duration-1000 delay-200 ${
          isVisible.values ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 text-sm bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">
              Our Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our core values shape everything we do and guide us in our mission to provide exceptional educational experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section
        id="achievements"
        data-animate
        className={`py-16 bg-white transition-all duration-1000 delay-400 ${
          isVisible.achievements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 text-sm bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">
              Our Impact
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Making a Difference Worldwide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={achievement.label}
                className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <achievement.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {achievement.number}
                  </div>
                  <p className="text-gray-600 font-medium">
                    {achievement.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        data-animate
        className={`py-16 bg-gray-50 transition-all duration-1000 delay-600 ${
          isVisible.team ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 text-sm bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">
              Our Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Expert Instructors
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our team consists of industry experts and passionate educators dedicated to helping you achieve your learning goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockInstructors.map((instructor, index) => (
              <Card
                key={instructor.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {instructor.name}
                  </CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {instructor.expertise}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {instructor.bio}
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-semibold text-gray-900">{instructor.experience}</div>
                      <div className="text-gray-600">Experience</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{instructor.students.toLocaleString()}</div>
                      <div className="text-gray-600">Students</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-gray-900">{instructor.rating}</span>
                    <span className="text-gray-600 text-sm">Rating</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        data-animate
        className={`py-16 bg-white transition-all duration-1000 delay-800 ${
          isVisible.testimonials ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 text-sm bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Our Students Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockTestimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-blue-600">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;