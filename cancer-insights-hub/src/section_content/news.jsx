import CardGrid from "../components/CardGrid";

const NewsContent = () => {
  const news_cards = [
    {
      id: 1,
      title: "Neoadjuvant-immunotherapy-only-treatment",
      description: `Immunotherapy and… Nothing Else? Studies Test Potential Paradigm Shift in Cancer Treatment...`,
      image: "/src/assets/images/news/immunotherapy.jpg",
      link: "https://www.cancer.gov/news-events/cancer-currents-blog/2023/neoadjuvant-immunotherapy-only-treatment",
    },
    {
      id: 2,
      title: "Telehealth-cancer-care-saves-time-money",
      description: `Telehealth Can Save People with Cancer Time, Travel, and Money...`,
      image: "/src/assets/images/news/telehealth.jpg",
      link: "https://www.cancer.gov/news-events/cancer-currents-blog/2023/telehealth-cancer-care-saves-time-money",
    },
    {
      id: 3,
      title: "Disparities-opioids-cancer-pain-end-of-life",
      description: `Study Finds Disparities in Access to Opioids for Cancer Pain at End of Life...`,
      image: "/src/assets/images/news/opioids.jpg",
      link: "https://www.cancer.gov/news-events/cancer-currents-blog/2023/disparities-opioids-cancer-pain-end-of-life",
    },
    {
      id: 4,
      title: "FDA-tucatinib-her2-colorectal-cancer",
      description: `Tucatinib and Trastuzumab Combination Approved for Advanced Colorectal Cancer...`,
      image: "/src/assets/images/news/tucatinib.jpg",
      link: "https://www.cancer.gov/news-events/cancer-currents-blog/2023/fda-tucatinib-her2-colorectal-cancer",
    },
    {
      id: 5,
      title: "NCI-Bertagnolli-national-cancer-plan",
      description: `NCI Director Bertagnolli on the National Cancer Plan...`,
      image: "/src/assets/images/news/nci.png",
      link: "https://www.cancer.gov/news-events/cancer-currents-blog/2023/nci-bertagnolli-national-cancer-plan",
    },
    {
      id: 6,
      title: "CAR-T-cell-therapies-overcoming-limitations",
      description: `Studies Test CAR T-Cell Therapies Designed to Overcome Key Limitations...`,
      image: "/src/assets/images/news/car_t_cell.jpg",
      link: "https://www.cancer.gov/news-events/cancer-currents-blog/2023/car-t-cell-therapies-overcoming-limitations",
    },
    {
      id: 7,
      title: "Blincyto-leukemia-minimal-residual-disease",
      description: `Trial Suggests Expanded Role for Blinatumomab in Treating ALL...`,
      image: "/src/assets/images/news/blincyto.png",
      link: "https://www.cancer.gov/news-events/cancer-currents-blog/2023/blincyto-leukemia-minimal-residual-disease",
    },
    {
      id: 8,
      title: "FDA-brentuximab-children-hodgkin-lymphoma",
      description: `FDA Approves Brentuximab Vedotin for Children and Adolescents with Hodgkin Lymphoma...`,
      image: "/src/assets/images/news/brentuximab.png",
      link: "https://www.cancer.gov/news-events/cancer-currents-blog/2022/fda-brentuximab-children-hodgkin-lymphoma",
    },
    {
      id: 9,
      title: "Hepatic artery infusion pump chemotherapy",
      description: `Hepatic artery infusion pump chemotherapy spares livers and saves lives...`,
      image: "/src/assets/images/news/chemo.webp",
      link: "https://www.mayoclinic.org/medical-professionals/cancer/news/hepatic-artery-infusion-pump-chemotherapy-spares-livers-and-saves-lives/mac-20539443",
    },
    {
      id: 10,
      title: "Bariatric-surgery-reduces-cancer-risk",
      description: `Bariatric Surgery May Reduce Cancer Risk...`,
      image: "/src/assets/images/news/bariatric_surgery.jpg",
      link: "https://www.cancer.gov/news-events/cancer-currents-blog/2022/bariatric-surgery-reduces-cancer-risk",
    },
  ];
  return <CardGrid cards={news_cards} />;
};

export default NewsContent;
