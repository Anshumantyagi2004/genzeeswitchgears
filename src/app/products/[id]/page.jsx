import React from 'react'
import ProductPage from './ProductPage'

import { products } from '@/data/data';

export async function generateMetadata({ params }) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);
    if (!product) {
        return {
            title: "11KV Single Phase Electrical Switchgear | Genzee Switchgears",
            description: "11KV Single Phase Electrical Switchgear from Genzee Switchgear for reliable power distribution and protection. Contact us for details.",
        };
    }

    return {
        title: product.metaTitle || product.name,
        description: product.metaDescription || product.description,
    };
}

export default function page() {
    return (
        <ProductPage />
    )
}
