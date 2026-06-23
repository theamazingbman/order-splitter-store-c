export async function getShopifyToken() {
  const token = process.env.SHOPIFY_ACCESS_TOKEN;

  if (!token) {
    throw new Error("Missing SHOPIFY_ACCESS_TOKEN in Render environment");
  }

  return token.trim();
}
