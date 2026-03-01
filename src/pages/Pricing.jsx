import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { CheckCircle, X } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const Pricing = () => {
  const { toast } = useToast();

  const handlePurchase = (planName) => {
    toast({
      title: "Purchase Initiated!",
      description: `Redirecting to payment for ${planName} plan...`,
    });
  };

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
      limitations: [
        "No access to advanced courses",
        "Limited community features",
        "Basic support only"
      ],
      popular: false,
      color: "gray"
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
        "Join A Lively Community Of Learners To Grow Together.",
        "Priority email support",
        "Access to exclusive webinars",
        "Downloadable resources"
      ],
      limitations: [
        "No premium course access",
        "No 1-on-1 mentoring"
      ],
      popular: true,
      color: "blue"
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
        "Connect With Others To Learn Together.",
        "1-on-1 career mentoring sessions",
        "Job placement assistance",
        "Premium community access",
        "24/7 priority support",
        "Certificate verification",
        "Unlimited course downloads"
      ],
      limitations: [],
      popular: false,
      color: "purple"
    }
  ];

  const features = [
    {
      feature: "Basic Courses Access",
      basic: true,
      standard: true,
      premium: true
    },
    {
      feature: "Community Access",
      basic: "Limited",
      standard: true,
      premium: true
    },
    {
      feature: "Live Webinars",
      basic: false,
      standard: true,
      premium: true
    },
    {
      feature: "Premium Courses",
      basic: false,
      standard: false,
      premium: true
    },
    {
      feature: "1-on-1 Mentoring",
      basic: false,
      standard: false,
      premium: true
    },
    {
      feature: "Job Placement Support",
      basic: false,
      standard: false,
      premium: true
    },
    {
      feature: "Certificate Verification",
      basic: false,
      standard: "Limited",
      premium: true
    },
    {
      feature: "Priority Support",
      basic: false,
      standard: "Email Only",
      premium: "24/7"
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your Learning Plan
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Select the perfect plan that fits your learning goals and budget. All plans include access to our quality content and expert instructors.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
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
                    Most Popular
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
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.limitations.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Limitations:</h4>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, limitIndex) => (
                          <li key={limitIndex} className="flex items-start space-x-3">
                            <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Button
                    onClick={() => handlePurchase(plan.name)}
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

          {/* Feature Comparison Table */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b">
              <h3 className="text-2xl font-bold text-gray-900">Feature Comparison</h3>
              <p className="text-gray-600 mt-1">Compare what's included in each plan</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Features</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Basic</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Standard</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {features.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {item.feature}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {item.basic === true ? (
                          <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                        ) : item.basic === false ? (
                          <X className="w-5 h-5 text-red-500 mx-auto" />
                        ) : (
                          <span className="text-sm text-gray-600">{item.basic}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {item.standard === true ? (
                          <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                        ) : item.standard === false ? (
                          <X className="w-5 h-5 text-red-500 mx-auto" />
                        ) : (
                          <span className="text-sm text-gray-600">{item.standard}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {item.premium === true ? (
                          <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                        ) : item.premium === false ? (
                          <X className="w-5 h-5 text-red-500 mx-auto" />
                        ) : (
                          <span className="text-sm text-gray-600">{item.premium}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4 text-sm text-gray-600 max-w-4xl mx-auto">
              <p>*Pro, Pro+, and course plan have 0% transaction fees with any payment gateway (i.e. online: pay Monthly or Yearly via Gateway).</p>
              <p>All plans will automatically renew until canceled. Recurring charges may be subject to changes.</p>
              <p>Plans can be canceled any time. Standard Processing fees apply. Have questions? Contact support@example.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;