"use client";
import { useState } from "react";
import { type Service, services } from "../servicesData";
import ServiceDetailModal from "./ServiceDetailModal";
import {
  ScanEye,
  ScanFace,
  Briefcase,
  Barcode,
  Tag,
  LayoutDashboard
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "computer-vision": ScanEye,
  "facial-recognition": ScanFace,
  "operations-consultancy": Briefcase,
  "rfid-systems": Barcode,
  "esl-systems": Tag,
  "centralized-control": LayoutDashboard,
};

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <div className="min-h-[500px] bg-white">
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI-powered solutions to transform your business operations
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.id] || LayoutDashboard;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col items-center text-center"
                >
                  <div className="mb-6 p-4 bg-blue-50 rounded-full group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ServiceDetailModal
          service={selectedService}
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
      />
    </div>
  );
}
