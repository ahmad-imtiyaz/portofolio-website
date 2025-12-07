// Services page with detailed service offerings
import { Check } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";
import { services } from "../../data/services";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <SectionTitle
          title="Services I Offer"
          subtitle="Professional development services tailored to your needs"
        />

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden flex flex-col">
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="text-4xl mb-4">{service.icon}</div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-6 flex-grow">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="border-t dark:border-gray-700 pt-6">
                  <p className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                    {service.pricing}
                  </p>

                  <a
                    href="#contact"
                    className="block w-full px-6 py-3 bg-primary-600 text-white text-center rounded-lg hover:bg-primary-700 transition-colors font-medium"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Custom Solution CTA */}
        <div className="mt-16 text-center">
          <Card className="p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Need a Custom Solution?
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Don't see exactly what you're looking for? Let's discuss your
              unique project requirements and create a custom solution that fits
              your needs and budget.
            </p>

            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              Contact Me
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
