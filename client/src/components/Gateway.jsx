import React from "react";
import { MapPin } from "lucide-react"; // icon
import bgImage from "../assets/background_04.jpg"; // background image

export default function Gateway() {
  const highways = [
    {
      title: "FNG EXPRESSWAY",
      distance: "~11 KM (~16 MIN)",
      description:
        "Faridabad, Noida, and Ghaziabad are connected by this expressway and is the major factor that significantly reduces travel time between these regions.",
    },
    {
      title: "NATIONAL HIGHWAY-24",
      distance: "~13 KM (~24 MIN)",
      description:
        "The National Highway 24, which connects Delhi with the eastern portions of Uttar Pradesh, provides commuters with smooth transit.",
    },
    {
      title: "GREATER NOIDA EXPRESSWAY",
      distance: "~16.8 KM (~28 MIN)",
      description:
        "This major expressway adds smooth connectivity between Noida and Greater Noida, helping simplify the daily commutes.",
    },
    {
      title: "YAMUNA EXPRESSWAY",
      distance: "~19.4 KM (~27 MIN)",
      description:
        "The expressway which connects the cities of Delhi, Noida, Mathura, and Agra, is a key artery for people going west of Uttar Pradesh.",
    },
  ];

  return (
    <section
      className="relative bg-cover bg-center text-white py-16"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 "></div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          NIRALA GATEWAY
        </h2>
        <p className="text-center text-lg mb-10">
          Proximity to Major Highways
        </p>

        {/* Highway List */}
        <div className="grid md:grid-cols-2 gap-8">
          {highways.map((item, index) => (
            <div
              key={index}
              className=" p-6 rounded-xl shadow-lg hover:bg-opacity-20 transition"
            >
              <div className="flex items-start gap-4">
                <MapPin className="w-8 h-8 text-yellow-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-yellow-300">{item.distance}</p>
                  <p className="mt-2 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
