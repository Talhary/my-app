import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
export default function Component({ data }: { data: any }) {
  console.log(data);
  // Destructure the data object
  const {
    Name,
    Display,
    "Back Camera": backCamera,
    Battery,
    Storage,

    "Operating System": os,
    "3G": supports3G,
    "4G/LTE": supports4G,
    "5G": supports5G,
    "Back Flash Light": backFlashLight,
    "Back Video Recording": backVideoRecording,
    Bluetooth,
    "Card Slot": cardSlot,
    Color,
    "Front Camera": frontCamera,
    "Front Flash Light": frontFlashLight,
    "Front Video Recording": frontVideoRecording,
    GPU,
    "Internal Memory": internalMemory,
    NFC,
    Parts_availability: partsAvailability,
    "Phone Dimensions": phoneDimensions,
    Popularity,
    Price,
    Processor,
    RAM,
    Radio,
    "Rating Score": ratingScore,
    "Release Date": releaseDate,
    RepairCost,
    Resale_value: resaleValue,
    "SIM Support": simSupport,
    "Screen Protection": screenProtection,
    "Screen Resolution": screenResolution,
    "Screen Size": screenSize,
    "Screen Type": screenType,
    Stars,
    Type,
    WiFi,
    brand,
    img_URL: imgUrl,
    name_match_score: nameMatchScore,
  } = data;

  return (
    <Card className="w-full max-w-md p-6 grid gap-6">
      <div className="flex items-center gap-4">
        <img
          alt={Name}
          className="rounded-lg"
          height={80}
          src={imgUrl || "/placeholder.svg"} // Use a placeholder if imgUrl is not provided
          style={{
            aspectRatio: "80/80",
            objectFit: "cover",
          }}
          width={80}
        />
        <div className="grid gap-1">
          <h3 className="text-lg font-semibold">{Name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Smartphone</p>
        </div>
      </div>
      <div className="grid gap-4">
        <div className="grid grid-cols-[120px_1fr] items-center gap-2">
          <p className="text-sm font-medium">Display</p>
          <p className="text-sm">{Display}</p>
        </div>
        <div className="grid grid-cols-[120px_1fr] items-center gap-2">
          <p className="text-sm font-medium">Camera</p>
          <p className="text-sm">{backCamera}</p>
        </div>
        <div className="grid grid-cols-[120px_1fr] items-center gap-2">
          <p className="text-sm font-medium">Battery</p>
          <p className="text-sm">{Battery}</p>
        </div>
        <div className="grid grid-cols-[120px_1fr] items-center gap-2">
          <p className="text-sm font-medium">Storage</p>
          <p className="text-sm">{Storage}</p>
        </div>
        <div className="grid grid-cols-[120px_1fr] items-center gap-2">
          <p className="text-sm font-medium">Processor</p>
          <p className="text-sm">{Processor}</p>
        </div>
        <div className="grid grid-cols-[120px_1fr] items-center gap-2">
          <p className="text-sm font-medium">OS</p>
          <p className="text-sm">{os}</p>
        </div>
        {/* Render all other properties */}
        <div className="grid grid-cols-[120px_1fr] items-center gap-2">
          <p className="text-sm font-medium">3G</p>
          <p className="text-sm">{supports3G}</p>
        </div>
        <div className="grid grid-cols-[120px_1fr] items-center gap-2">
          <p className="text-sm font-medium">4G/LTE</p>
          <p className="text-sm">{supports4G}</p>
        </div>
        {/* Render other properties similarly */}
      </div>
      <Button size="lg">
        <Link href={"/phone/" + Name.split(" ").join("_")}> Learn More</Link>
      </Button>
    </Card>
  );
}
