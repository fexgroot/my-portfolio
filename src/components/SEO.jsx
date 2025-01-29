const StructuredData = () => {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Felix Nagy",
    jobTitle: "Web Developer",
    url: "https://felixnagy.netlify.app/",
    sameAs: ["https://github.com/fexgroot"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
};

export default StructuredData;
