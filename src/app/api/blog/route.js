import { connect } from "@/Database/db";
import Blog from "@/models/blog";
import { uploadToR2 } from "@/utils/uploadToR2"; // adjust path if needed

// GET /api/blog
export async function GET() {
  await connect();
  const blogs = await Blog.find().sort({ createdAt: -1 });
  return new Response(JSON.stringify(blogs), { status: 200 });
}

// POST /api/blog
export async function POST(req) {
  try {
    await connect();

    const formData = await req.formData();

    const title = formData.get("title");
    const date = formData.get("date");
    const permalink = formData.get("permalink");
    const content = formData.get("content");
    const metaTitle = formData.get("metaTitle");
    const metaDescription = formData.get("metaDescription");
    const file = formData.get("image");

    let imageUrl = "";
    let imageKey = "";

    if (file && file.name) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fileName = `${Date.now()}-${file.name}`;

      const resUpload = await uploadToR2({
        file: buffer,
        folder: "genzeeSwitchgears", // ✅ your custom folder
        fileName,
        contentType: file.type,
      });

      imageUrl = resUpload.url;
      imageKey = resUpload.key;
    }

    const blog = await Blog.create({
      title,
      date,
      permalink,
      content,
      metaTitle,
      metaDescription,
      image: imageUrl,
      imageKey, // instead of public_id
    });

    return new Response(JSON.stringify(blog), { status: 201 });
  } catch (err) {
    console.error("POST /api/blog error:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}