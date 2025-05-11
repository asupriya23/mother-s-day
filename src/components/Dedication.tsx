import React from "react";
import { Heart, UtensilsCrossed, Leaf } from "lucide-react"; // Added more icons for thematic touch

const Dedication: React.FC = () => {
  const ingredients = [
    {
      id: 1,
      name: "Unwavering Support",
      measure:
        "A generous helping, consistently poured through all of life's seasons.",
      icon: <Heart className="h-5 w-5 text-rose-500" />,
    },
    {
      id: 2,
      name: "Endless Patience",
      measure:
        "Several lifetimes worth, finely sifted with understanding and grace.",
      icon: <Leaf className="h-5 w-5 text-green-500" />, // Example of a different icon
    },
    {
      id: 3,
      name: "Heartfelt Laughter",
      measure:
        "Heaping tablespoons, best shared daily and often, until sides ache.",
      icon: <Heart className="h-5 w-5 text-rose-500" />,
    },
    {
      id: 4,
      name: "Wise Guidance",
      measure:
        "A perfect pinch of timely advice, measured thoughtfully for every situation.",
      icon: <UtensilsCrossed className="h-5 w-5 text-amber-600" />, // Example of a different icon
    },
    {
      id: 5,
      name: "Unconditional Love",
      measure:
        "The main ingredient – an endless supply, warming everything it touches.",
      icon: <Heart className="h-5 w-5 text-rose-600" />,
    },
    {
      id: 6,
      name: "Strength & Resilience",
      measure:
        "A solid foundation, built to withstand any storm with quiet dignity.",
      icon: <Heart className="h-5 w-5 text-rose-500" />,
    },
  ];

  return (
    <section id="recipe-for-mom" className="py-20 bg-rose-50">
      {" "}
      {/* Changed background for the section */}
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <UtensilsCrossed className="h-12 w-12 text-rose-500 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
              A Recipe for My Wonderful Mom
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              Crafted with love, here are some of the special ingredients that
              make my mom the incredible person she is. Each one adds a unique
              flavor to the beautiful tapestry of her being.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 border border-rose-200">
            <h3 className="text-2xl font-semibold text-rose-700 mb-8 text-center font-serif">
              Ingredients for One Amazing Mom:
            </h3>
            <div className="space-y-8">
              {ingredients.map((ingredient) => (
                <div
                  key={ingredient.id}
                  className="flex items-start p-6 bg-rose-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-rose-400"
                >
                  <div className="flex-shrink-0 mr-5 mt-1">
                    {/* We can use a default heart or specific icons per ingredient */}
                    {ingredient.icon || (
                      <Heart className="h-6 w-6 text-rose-500" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-1">
                      {ingredient.name}
                    </h4>
                    <p className="text-gray-600 text-md leading-relaxed italic">
                      "{ingredient.measure}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-xl font-semibold text-gray-700">
                Combine all with a lifetime of cherished moments.
              </p>
              <p className="text-rose-600 mt-2">
                Serves: One very grateful child (and many lucky others!)
              </p>
              <Heart className="h-8 w-8 text-rose-500 mx-auto mt-6 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dedication;
