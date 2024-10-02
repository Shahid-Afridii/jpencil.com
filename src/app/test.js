import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="text-white">
        <div className="relative w-screen h-auto flex justify-center items-center">  {/* Adjusted for full-width and centered */}
          <Image
            src="/images/web banner-01.png"  // Ensure this is the correct image path
            alt="Banner"
            width={1920}  // Set width according to the image's natural size
            height={1080}  // Set height according to the image's natural size
            objectFit="contain"  // Ensures the full image is displayed without being cut
            quality={100}  // High quality rendering
          />
        </div>
      </section>

  
    
      <section className="bg-[#F8F9FC] text-[#1B1464] py-16 relative">
  <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
    {/* Title */}
    <h2 className="absolute top-0 left-0 right-0 text-center text-lg lg:text-3xl font-extrabold p-4 text-[#1B1464] z-10">
      First ever <span className="text-yellow-500">Gold Jewellery</span> Dropship Product in India
    </h2>

    {/* Left Side - Main Image */}
    <div className="col-span-1">
      <Image
        src="/images/section2.png"  // Replace with your actual image path
        alt="Main Section Image"
        width={500}
        height={500}
        objectFit="contain"
        quality={100}
        className="w-full h-auto"
      />
    </div>

    {/* Right Side - Content */}
    <div className="col-span-1 space-y-6 p-2 lg:p-0">
      {/* Content Block 1 */}
      <div className="bg-[#E0F4F9] p-6 rounded-xl shadow-lg flex items-start ml-0 lg:ml-20">
        <div className="flex-shrink-0 bg-[#1B1464] p-3 rounded-lg">
          <Image 
            src="/images/icon-0122.png"  // Replace with your icon image path
            alt="Start Business Icon"
            width={40} 
            height={40}
          />
        </div>
        <div className="ml-4">
          <h3 className="text-md lg:text-lg font-bold">START YOUR OWN BUSINESS</h3>
          <p className="text-sm text-gray-600">Want to start your jewellery business without investing in gold, but want to make the jewellery profits?</p>
        </div>
      </div>

      {/* Content Block 2 */}
      <div className="bg-[#FFFFFF] p-6 rounded-xl shadow-lg flex items-start ml-0 lg:ml-40">
        <div className="flex-shrink-0 bg-[#1B1464] p-3 rounded-lg">
          <Image 
            src="/images/icon-0212.png"  // Replace with your icon image path
            alt="Dropship Product Icon"
            width={40} 
            height={40}
          />
        </div>
        <div className="ml-4">
          <h3 className="text-md lg:text-lg font-bold">DROPSHIP PRODUCT</h3>
          <p className="text-sm text-gray-600">The manufacturing and logistics for your gold product are taken care of with automatic pricing.</p>
        </div>
      </div>

      {/* Content Block 3 */}
      <div className="bg-[#FFFFFF] p-6 rounded-xl shadow-lg flex items-start ml-0 lg:ml-20">
        <div className="flex-shrink-0 bg-[#1B1464] p-3 rounded-lg">
          <Image 
            src="/images/icon-0312.png"  // Replace with your icon image path
            alt="We Handle Icon"
            width={40} 
            height={40}
          />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-bold">WE WILL HANDLE</h3>
          <p className="text-sm text-gray-600">You can sell jewellery that you don't stock, just start your business with dropship and we'll take care of the rest.</p>
        </div>
      </div>
    </div>
  </div>
</section>



    </div>
  );
}
