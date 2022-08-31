/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export function getStrapiURL(path = "") {
    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:8443"}${path}`;
}

export function getStrapiMediaURL(path = "") {
    return `${process.env.NEXT_PUBLIC_STRAPI_PUBLIC_URL || "http://localhost:8443"}${path}`;
}


export function getStrapiMedia(media, isGallery) {
    // console.log('media', media);
    const { url } = isGallery ? media.attributes : media.data.attributes;
    const imageUrl = url.startsWith("/") ? getStrapiMediaURL(url) : url;
    return imageUrl;
}

export function getStrapiMediaAltText(media) {
    return media.data.attributes.alternativeText
}