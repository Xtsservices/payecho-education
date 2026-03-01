import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { 
  Monitor, 
  Users, 
  UserCheck, 
  Award, 
  TrendingUp, 
  Users2, 
  Target, 
  Building2,
  CheckCircle 
} from "lucide-react";
import { useToast } from "../hooks/use-toast";

const Home = () => {
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState({});
  const { toast } = useToast();

  const handleEmailSignup = (e) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "You have successfully signed up for updates.",
      });
      setEmail("");
    }
  };

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

  const features = [
    {
      icon: Monitor,
      title: "Online Course",
      description: "Learn anytime, anywhere with expert-led online courses designed for you",
      color: "bg-blue-500"
    },
    {
      icon: Users,
      title: "Live Webinar",
      description: "Join our live webinar and interact with experts in real-time.",
      color: "bg-green-500"
    },
    {
      icon: UserCheck,
      title: "Career Mentoring",
      description: "Unlock your potential with personalized career mentoring from industry experts.",
      color: "bg-purple-500"
    },
    {
      icon: Award,
      title: "Certification",
      description: "Earn recognized certifications to boost your career and skills today.",
      color: "bg-orange-500"
    }
  ];

  const stats = [
    { number: "70M", label: "People uses this website for education purpose.", icon: Users2 },
    { number: "9/10", label: "Nine out of 10 people uses this website for education purposes", icon: Target },
    { number: "96%", label: "Result using this Website.", icon: TrendingUp },
    { number: "15k", label: "Business made by using this Website.", icon: Building2 }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "₹20000",
      period: "Monthly",
      description: "Billed Every Month, Cancel Every Time.",
      features: [
        "Access Beginner Courses To Learn Important Skills.",
        "Get Affordable Prices That Fit Your Budget.",
        "Dive Into Fun Lessons Taught By Experienced Teachers.",
        "Get Basic Tools And Resources To Help You Learn.",
        "Join A Group Of Learners All Focused On Growing."
      ],
      popular: false
    },
    {
      name: "Standard",
      price: "₹50000",
      period: "Monthly",
      description: "Billed Every 3 Months, Cancel Every Time.",
      features: [
        "Access Lots Of Courses To Learn More.",
        "Get Flexible Prices That Give You Good Value For Your Money.",
        "Enjoy Interesting Lessons With Great Teachers.",
        "Unlock Extra Tools To Help You Learn Faster.",
        "Join A Lively Community Of Learners To Grow Together."
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "₹80000",
      period: "Monthly",
      description: "Billed Every 6 Months, Cancel Every Time.",
      features: [
        "Access Expert Courses Only Available Here",
        "Unlock The Best Learning With EducateMama's Premium Plans:",
        "Be First To Use New Tools.Lans",
        "Join Live Classes With Top Teachers.",
        "Connect With Others To Learn Together."
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="hero"
        data-animate
        className={`relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 transition-all duration-1000 ${
          isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.1)), url('https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-indigo-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Badge className="mb-4 text-sm bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">
              INDEPENDENT INSTITUTION WITH
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Top Notch Education
              <span className="block text-blue-600">& Research</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              Explore your abilities with xpresedu personalized tools, promoting lifelong learning and supporting teachers. Join us our mission for accessible and impactful education.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <form onSubmit={handleEmailSignup} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 text-lg bg-white/90 backdrop-blur-sm border-2 border-blue-200 focus:border-blue-500"
                required
              />
              <Button
                type="submit"
                size="lg"
                className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Sign Up
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        data-animate
        className={`py-20 bg-white transition-all duration-1000 delay-200 ${
          isVisible.features ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section
        id="stats"
        data-animate
        className={`py-20 bg-gradient-to-r from-blue-50 to-indigo-50 transition-all duration-1000 delay-400 ${
          isVisible.stats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-sm bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">
              Flexible supported learning
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Expertise Across All
              <span className="block text-blue-600">Disciplines</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              xpresedu provides learning support in all areas of study, offering a complete educational experience for every learner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={stat.label}
                className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <stat.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {stat.number}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        data-animate
        className={`py-20 bg-white transition-all duration-1000 delay-600 ${
          isVisible.pricing ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-sm bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">
              Price Planes
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Price Plans View our course
              <span className="block text-blue-600">offerings And our planned fee schedule</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={plan.name}
                className={`relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? "ring-2 ring-blue-500 shadow-xl scale-105"
                    : "hover:shadow-xl"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-1">
                    Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    {plan.description}
                  </CardDescription>
                  <div className="text-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-6 py-3 font-semibold transition-all duration-300 hover:scale-105 ${
                      plan.popular
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300"
                    }`}
                  >
                    Purchase This Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center text-sm text-gray-600 space-y-2">
            <p>*Pro, Pro+, and course plan have 0% transaction fees with any payment gateway (i.e. online: pay Monthly or Yearly via Gateway).</p>
            <p>All plans will automatically renew until canceled. Recurring charges may be subject to changes.</p>
            <p>Plans can be canceled any time. Standard Processing fees apply. Have questions? Contact support@example.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;