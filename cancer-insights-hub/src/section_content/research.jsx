import CardGrid from "../components/CardGrid";

const ResearchContent = () => {
  const research_cards = [
    {
      id: 1,
      title: "Stopping the Spread of Breast Cancer",
      description: `Killing cells while they sleep to stop the spread of breast cancer...`,
      image: "/src/assets/images/research/breast_cancer_cell.webp",
      link: "https://www.worldwidecancerresearch.org/news-opinion/2022/february/killing-cells-while-they-sleep-to-stop-the-spread-of-breast-cancer/",
    },
    {
      id: 2,
      title: "Pancreatic Cancer Breakthrough",
      description: `Microorganisms in stool samples could offer new way to detect pancreatic cancer early...`,
      image: "/src/assets/images/research/nuria_malats.webp",
      link: "https://www.worldwidecancerresearch.org/news-opinion/2022/march/microorganisms-in-stool-samples-could-offer-new-way-to-detect-pancreatic-cancer-early/",
    },
    {
      id: 3,
      title: "Breakthrough finds way to improve radiotherapy",
      description: `Research breakthrough finds way to improve how radiotherapy is used for people with cancer that has spread to the brain...`,
      image: "/src/assets/images/research/radiotherapy.jpeg",
      link: "https://www.worldwidecancerresearch.org/news-opinion/2022/april/breakthrough-finds-way-to-improve-radiotherapy/",
    },
    {
      id: 4,
      title: "Laser-Induced Thermotherapy (LITT)",
      description: `Real-time automatic temperature regulation during in vivo MRI-guided laser-induced thermotherapy (MR-LITT)...`,
      image: "/src/assets/images/research/litt.jpeg",
      link: "https://www.nature.com/articles/s41598-023-29818-z",
    },
    {
      id: 5,
      title:
        "Adjuvant therapy (AT) in elderly patients with glioblastoma (GBM)",
      description: `The optimal time to initiate adjuvant therapy (AT) in elderly patients with glioblastoma (GBM)...`,
      image: "/src/assets/images/research/timing.jpeg",
      link: "https://www.nature.com/articles/s41598-023-30017-z",
    },
    {
      id: 6,
      title: "Search and Destroy: Engineering Immune Cells to Hunt Down Cancer",
      description: `A new approach to cancer immunotherapy could help the immune system to find and destroy cancer cells...`,
      image: "/src/assets/images/research/immunotherapy.webp",
      link: "https://www.worldwidecancerresearch.org/news-opinion/2022/september/search-and-destroy-engineering-immune-cells-to-hunt-down-cancer/",
    },
  ];
  return <CardGrid cards={research_cards} />;
};

export default ResearchContent;
