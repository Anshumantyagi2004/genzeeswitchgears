export const dynamic = "force-dynamic";

import { products, serviceLocations, category } from "@/data/data";

function escapeXml(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}

export async function GET() {
    const baseUrl = "https://switchgearsmanufacturer.com";

    // Fetch blogs safely
    let blogs = [];
    try {
        const res = await fetch(`${baseUrl}/api/blog`, {
            cache: "no-store",
        });
        blogs = await res.json();
    } catch (err) {
        console.error("Blog fetch failed:", err);
    }

    const now = new Date().toISOString();

    // Homepage
    const homepage = `
    <url>
      <loc>${escapeXml(baseUrl)}</loc>
      <lastmod>${now}</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>`;

    // Static pages
    const staticPages = [
        { loc: `${baseUrl}/categories`, priority: 0.8, changefreq: "yearly" },
        { loc: `${baseUrl}/products`, priority: 0.8, changefreq: "yearly" },
        { loc: `${baseUrl}/about-us`, priority: 0.8, changefreq: "yearly" },
        { loc: `${baseUrl}/contact-us`, priority: 0.8, changefreq: "yearly" },
        { loc: `${baseUrl}/our-articles`, priority: 0.9, changefreq: "weekly" },
    ]
        .map(
            (page) => `
    <url>
      <loc>${escapeXml(page.loc)}</loc>
      <lastmod>${now}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>`
        )
        .join("");

    // Products
    const categoriestUrls = category
        .map(
            (product) => `
    <url>
      <loc>${escapeXml(`${baseUrl}/categories/${product?.id}`)}</loc>
      <lastmod>${now}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>`
        )
        .join("");

    const productUrls = products
        .map(
            (product) => `
    <url>
      <loc>${escapeXml(`${baseUrl}/products/${product.id}`)}</loc>
      <lastmod>${now}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>`
        )
        .join("");
    // console.log(blogs)
    // Blogs
    const blogUrls = blogs
        .filter((blog) => blog?.permalink)
        .map((blog) => `
    <url>
      <loc>${escapeXml(`${baseUrl}/articles/${blog.permalink}`)}</loc>
      <lastmod>${blog.date ? new Date(blog.date).toISOString() : now
            }</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>`)
        .join("");

    // 🔥 Remove duplicate locations
    const uniqueLocations = Array.from(
        new Map(serviceLocations.map((loc) => [loc.href, loc])).values()
    );

    const locationUrls = uniqueLocations
        .map(
            (loc) => `
    <url>
      <loc>${escapeXml(`${baseUrl}${loc.href}`)}</loc>
      <lastmod>${now}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
    </url>`
        )
        .join("");

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${homepage}
${staticPages}
${categoriestUrls}
${productUrls}
${locationUrls}
${blogUrls}
</urlset>`;

    return new Response(sitemap.trim(), {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}