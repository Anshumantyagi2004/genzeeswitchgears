import React from 'react'
import CategoryPage from './CategoryPage'
import { category } from '@/data/data';

export async function generateMetadata({ params }) {
    const { id } = await params;
    const product = category.find((p) => p.id === id);
    if (!product) {
        return {
            title: "Genzee switchgears",
            description: "Genzee switchgears",
        };
    }

    return {
        title: product.metaTitle || product.name,
        description: product.metaDescription || product.description,
    };
}

export default function page() {
    return (
        <CategoryPage />
    )
}
