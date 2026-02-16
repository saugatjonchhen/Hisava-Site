import { Helmet } from 'react-helmet-async';

export default function SEO({
    title,
    description = "Hisava – Your Money, Your Clarity. A privacy-first, intelligent personal finance tracker for effortless financial mastery.",
    canonical,
    ogImage = "/og-image.png", // Default OG image path
    ogType = "website",
    twitterHandle = "@HisavaApp"
}) {
    const siteTitle = "Hisava – Personal Finance Tracker";
    const fullTitle = `${title} | ${siteTitle}`;
    const url = window.location.href;

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical || url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:site" content={twitterHandle} />

            {/* Region Specific (Nepal) */}
            <meta name="geo.region" content="NP" />
            <meta name="geo.placename" content="Kathmandu" />
        </Helmet>
    );
}
