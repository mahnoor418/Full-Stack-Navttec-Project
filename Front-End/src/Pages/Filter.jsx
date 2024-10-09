import { useState } from "react";

function Filters() {
  const [availability, setAvailability] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [productType, setProductType] = useState("");
  const [language, setLanguage] = useState("");

  const handleAvailabilityChange = (event) => {
    setAvailability(event.target.value);
  };

  const handlePriceRangeChange = (event) => {
    setPriceRange(event.target.value);
  };

  const handleProductTypeChange = (event) => {
    setProductType(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="   rounded-md p-6 sm:p-8 lg:p-10 max-w-lg sm:max-w-full mx-auto lg:mx-0">
      <h2 className=" p-[50px] text-lg font-semibold mb-4">Filter</h2>

      {/* Availability Section */}
      <div className="mb-4">
        <h3 className="text-md font-medium mb-2">Availability</h3>
        <div className="flex items-center">
          <input
            type="radio"
            id="in-stock"
            name="availability"
            value="in-stock"
            checked={availability === "in-stock"}
            onChange={handleAvailabilityChange}
          />
          <label htmlFor="in-stock" className="ml-2">
            In stock (19)
          </label>
        </div>
        <div className="flex items-center mt-2">
          <input
            type="radio"
            id="out-of-stock"
            name="availability"
            value="out-of-stock"
            checked={availability === "out-of-stock"}
            onChange={handleAvailabilityChange}
          />
          <label htmlFor="out-of-stock" className="ml-2">
            Out of stock (3)
          </label>
        </div>
      </div>

      {/* Price Section */}
      <div className="mb-4">
        <h3 className="text-md font-medium mb-2">Price</h3>
        <div className="flex flex-col sm:flex-row items-center">
          <span className="mr-2">$</span>
          <input
            type="number"
            id="min-price"
            name="min-price"
            value={priceRange?.split("-")[0] || ""}
            onChange={handlePriceRangeChange}
            className="w-full sm:w-24 border rounded-md px-2 mb-2 sm:mb-0"
          />
          <span className="mx-2">-</span>
          <input
            type="number"
            id="max-price"
            name="max-price"
            value={priceRange?.split("-")[1] || ""}
            onChange={handlePriceRangeChange}
            className="w-full sm:w-24 border rounded-md px-2"
          />
        </div>
      </div><hr></hr>

      {/* product Type Section */}
      <div className="mb-4">
        <h3 className="text-md font-medium mb-2">Product Type</h3>
        <div className="flex flex-col">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="business"
              name="product-type"
              value="business"
              checked={productType === "business"}
              onChange={handleProductTypeChange}
            />
            <label htmlFor="business" className="ml-2">
              Business (3)
            </label>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              id="entertainment"
              name="product-type"
              value="entertainment"
              checked={productType === "entertainment"}
              onChange={handleProductTypeChange}
            />
            <label htmlFor="entertainment" className="ml-2">
              Entertainment (7)
            </label>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              id="fiction"
              name="product-type"
              value="fiction"
              checked={productType === "fiction"}
              onChange={handleProductTypeChange}
            />
            <label htmlFor="fiction" className="ml-2">
              Fiction (4)
            </label>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              id="humor"
              name="product-type"
              value="humor"
              checked={productType === "humor"}
              onChange={handleProductTypeChange}
            />
            <label htmlFor="humor" className="ml-2">
              Humor (1)
            </label>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              id="literature"
              name="product-type"
              value="literature"
              checked={productType === "literature"}
              onChange={handleProductTypeChange}
            />
            <label htmlFor="literature" className="ml-2">
              Literature (4)
            </label>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              id="sugar-flakes"
              name="product-type"
              value="sugar-flakes"
              checked={productType === "sugar-flakes"}
              onChange={handleProductTypeChange}
            />
            <label htmlFor="sugar-flakes" className="ml-2">
              Sugar Flakes (3)
            </label>
          </div>
        </div>
      </div><hr></hr>
      {/* more details */}

      <div className="mb-4">
        <h3 className="text-md font-medium mb-2">More Details</h3>
        <div className="flex flex-col">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="price-range-1"
              name="price-range"
              value="100-200"
              checked={priceRange === "100-200"}
              onChange={handlePriceRangeChange}
            />
            <label htmlFor="price-range-1" className="ml-2">
              $100 - $200 (2)
            </label>
          </div>
          <div className="flex items-center mt-2 sm:mt-0">
            <input
              type="checkbox"
              id="price-range-2"
              name="price-range"
              value="200-300"
              checked={priceRange === "200-300"}
              onChange={handlePriceRangeChange}
            />
            <label htmlFor="price-range-2" className="ml-2">
              $200 - $300 (3)
            </label>
          </div>
          <div className="flex items-center mt-2 sm:mt-0">
            <input
              type="checkbox"
              id="price-range-3"
              name="price-range"
              value="300-400"
              checked={priceRange === "300-400"}
              onChange={handlePriceRangeChange}
            />
            <label htmlFor="price-range-3" className="ml-2">
              $300 - $400 (7)
            </label>
          </div>
          <div className="flex items-center mt-2 sm:mt-0">
            <input
              type="checkbox"
              id="price-range-4"
              name="price-range"
              value="400-500"
              checked={priceRange === "400-500"}
              onChange={handlePriceRangeChange}
            />
            <label htmlFor="price-range-4" className="ml-2">
              $400 - $500 (3)
            </label>
          </div>
          <div className="flex items-center mt-2 sm:mt-0">
            <input
              type="checkbox"
              id="price-range-5"
              name="price-range"
              value="500-700"
              checked={priceRange === "500-700"}
              onChange={handlePriceRangeChange}
            />
            <label htmlFor="price-range-5" className="ml-2">
              $500 - $700 (4)
            </label>
          </div>
          <div className="flex items-center mt-2 sm:mt-0">
            <input
              type="checkbox"
              id="price-range-6"
              name="price-range"
              value="400-500"
              checked={priceRange === "400-500"}
              onChange={handlePriceRangeChange}
            />
            <label htmlFor="price-range-6" className="ml-2">
              400 - $500 (2)
            </label>
          </div>
        </div>
      </div>
      {/* format */}
      {/* product Type Section */}
      <div className="mb-4">
        <h3 className="text-md font-medium mb-2">Format</h3>
        <div className="flex flex-col">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="business"
              name="product-type"
              value="business"
              checked={productType === "business"}
              onChange={handleProductTypeChange}
            />
            <label htmlFor="business" className="ml-2">
              Business (3)
            </label>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              id="entertainment"
              name="product-type"
              value="entertainment"
              checked={productType === "entertainment"}
              onChange={handleProductTypeChange}
            />
            <label htmlFor="entertainment" className="ml-2">
              Entertainment (7)
            </label>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              id="fiction"
              name="product-type"
              value="fiction"
              checked={productType === "fiction"}
              onChange={handleProductTypeChange}
            />
            <label htmlFor="fiction" className="ml-2">
              Fiction (4)
            </label>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              id="humor"
              name="product-type"
              value="humor"
              checked={productType === "humor"}
              onChange={handleProductTypeChange}
            />
            <label htmlFor="humor" className="ml-2">
              Humor (1)
            </label>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              id="literature"
              name="product-type"
              value="literature"
              checked={productType === "literature"}
              onChange={handleProductTypeChange}
            />
            <label htmlFor="literature" className="ml-2">
              Literature (4)
            </label>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              id="sugar-flakes"
              name="product-type"
              value="sugar-flakes"
              checked={productType === "sugar-flakes"}
              onChange={handleProductTypeChange}
            />
            <label htmlFor="sugar-flakes" className="ml-2">
              Sugar Flakes (3)
            </label>
          </div>
        </div>
      </div><hr></hr>
      {/* Language Section */}
      <div className="mb-4">
        <h3 className="text-md font-medium mb-2">Language</h3>
        <div className="flex flex-col">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="english"
              name="language"
              value="english"
              checked={language === "english"}
              onChange={handleLanguageChange}
            />
            <label htmlFor="english" className="ml-2">
              English
            </label>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              id="spanish"
              name="language"
              value="spanish"
              checked={language === "spanish"}
              onChange={handleLanguageChange}
            />
            <label htmlFor="spanish" className="ml-2">
              Spanish
            </label>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              id="french"
              name="language"
              value="french"
              checked={language === "french"}
              onChange={handleLanguageChange}
            />
            <label htmlFor="french" className="ml-2">
              French
            </label>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              id="german"
              name="language"
              value="german"
              checked={language === "german"}
              onChange={handleLanguageChange}
            />
            <label htmlFor="german" className="ml-2">
              German
            </label>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              id="italian"
              name="language"
              value="italian"
              checked={language === "italian"}
              onChange={handleLanguageChange}
            />
            <label htmlFor="italian" className="ml-2">
              Italian
            </label>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              id="chinese"
              name="language"
              value="chinese"
              checked={language === "chinese"}
              onChange={handleLanguageChange}
            />
            <label htmlFor="chinese" className="ml-2">
              Chinese
            </label>
          </div>
        </div>
      </div><hr></hr>
    </div>
  );
}

export default Filters;






