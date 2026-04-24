import { serviceLocations } from "@/data/data";
import { notFound } from "next/navigation";
import Location from "./Location";

export async function generateMetadata({ params }) {
    const { locations } = await params;

    const rawCity = locations.split("in-").pop();

    const cityName = rawCity
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

    return {
        title: `Switchgear Manufacturer in ${cityName} | Genzee Switchgear`,
        description: `Looking for a reliable Switchgear Manufacturer in ${cityName}? Genzee Switchgear provides MCB Box, Busbar Chamber, and Changeover Switch with high safety, performance, and timely delivery.`,
    };
}

const Page = async ({ params }) => {
    const { locations } = await params;
    const validCity = serviceLocations.find(
        (c) => c.href.replace("/", "") === locations
    );

    if (!validCity) {
        notFound();
    }

    return <Location location={locations} />;
};

export default Page;