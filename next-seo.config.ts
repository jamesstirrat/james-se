const title = "James Stirrat-Ellis";
const description =
  "A founder living in London, UK. My two goals in life are to build and explore the extraordinary.";
const SEO = {
  title,
  description,
  canonical: "https://www.jamesstiratellis.com",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.jamesstirratellis.com",
    title,
    description,
    images: [
      {
        url: "https://www.jamesstirratellis.com/images/james-se-open-graph.png",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: "@jamesse_",
    site: "@jamesse_",
    cardType: "summary_large_image",
  },
};

export default SEO;
