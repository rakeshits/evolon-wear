export const SHOP_URL: string | null = null;

export const PRODUCT_SHOP_URLS: Record<string, string> = {};

export function getShopUrl(productId?: string) {
  if (productId && PRODUCT_SHOP_URLS[productId]) return PRODUCT_SHOP_URLS[productId];
  return SHOP_URL;
}