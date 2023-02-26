import CardGrid from "../components/CardGrid";

const ResourcesContent = () => {
  const resources_cards = [
    {
      id: 1,
      title: "Cancer Support Community",
      description:
        "Provides free support, education, and hope to anyone affected by cancer, including patients, caregivers, loved ones, and children.",
      image: "/src/assets/images/resources/cancer_support_community.png",
      link: "https://www.cancersupportcommunity.org/",
    },
    {
      id: 2,
      title: "National Cancer Institute",
      description:
        "The official website of the National Cancer Institute provides information about cancer prevention, screening, diagnosis, treatment, clinical trials, and research.",
      image: "/src/assets/images/resources/national_cancer_institute.png",
      link: "https://www.cancer.gov/",
    },
    {
      id: 3,
      title: "American Cancer Society",
      description:
        "Dedicated to helping people stay well and get well, finding cures, and fighting back against cancer. Provides information about cancer prevention, screening, diagnosis, treatment, support, and research.",
      image: "/src/assets/images/resources/american_cancer_society.jpeg",
      link: "https://www.cancer.org/",
    },
    {
      id: 4,
      title: "LIVESTRONG Foundation",
      description:
        "Provides support, resources, and programs to help cancer survivors navigate the challenges of cancer survivorship.",
      image: "/src/assets/images/resources/livestrong_foundation.jpeg",
      link: "https://www.livestrong.org/",
    },
    {
      id: 5,
      title: "Cancer.Net",
      description:
        "Provides doctor-approved information about cancer, including the latest news, treatment options, and coping strategies.",
      image: "/src/assets/images/resources/cancer_net.jpeg",
      link: "https://www.cancer.net/",
    },
    {
      id: 6,
      title: "Guide to Healthy Living ",
      description: `Staying healthy is important for everyone, but it is especially important for cancer survivors...`,
      image: "/src/assets/images/resources/healthy_living.jpg",
      link: "https://www.cdc.gov/cancer/survivors/healthy-living-guides/pdf/healthy-living-guide-physical-health-508.pdf",
    },
    {
      id: 7,
      title: "Information for Health Care Providers",
      description: `Health care providers play a key role in helping cancer survivors live healthy lives...`,
      image: "/src/assets/images/resources/healthcare_providers.jpg",
      link: "https://www.cdc.gov/cancer/survivors/health-care-providers/",
    },
  ];
  return <CardGrid cards={resources_cards} />;
};

export default ResourcesContent;
