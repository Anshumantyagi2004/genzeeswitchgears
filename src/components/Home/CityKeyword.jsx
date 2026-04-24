import React from "react";
import Link from "next/link";
import { serviceLocations } from "@/data/data";

const CitesKeyword = () => {
    return (
        <div className="px-3 overflow-hidden py-10 md:px-8 lg:px-26 bg-gray-200">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">
                Our Supply <span className="text-gray-800">Network</span>
            </h2>
            <div className="flex gap-2 flex-wrap text-black">
                {serviceLocations?.map(({ href, label, id }) => {
                    return (
                        <Link href={href} key={id} className="hover:font-bold hover:underline">
                            {label}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default CitesKeyword;