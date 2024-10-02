import ClientsSection from "@/components/ClientsSection";
import DemoSection from "@/components/DemoSection";
import DropshipSection from "@/components/DropshipSection";
import GoldPlanSection from "@/components/GoldPlanSection";
import OwnProducts from "@/components/OwnProducts";
import Store from "@/components/StoreSection";
import Image from "next/image";
import { FaCheckCircle } from 'react-icons/fa'; 
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

  
    
      

  
  <DropshipSection/>


    <OwnProducts/>

     

<Store/>


<GoldPlanSection/>

<ClientsSection/>

<DemoSection/>


    </div>
  );
}
