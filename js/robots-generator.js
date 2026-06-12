function generateRobots(){

    const url =
    document.getElementById("robotsUrl").value.trim();

    if(!url){

        document.getElementById("robotsResult").value =
        "Please enter website URL";

        return;
    }

    const robots =
`User-agent: *

Allow: /

Sitemap: ${url}/sitemap.xml`;

    document.getElementById("robotsResult").value =
    robots;
}
