function generateSitemap(){

    const url =
    document.getElementById("siteUrl").value.trim();

    if(!url){

        document.getElementById("sitemapResult").value =
        "Please enter website URL";

        return;
    }

    const sitemap =
`<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

<url>
<loc>${url}</loc>
<priority>1.0</priority>
</url>

</urlset>`;

    document.getElementById("sitemapResult").value =
    sitemap;
}
