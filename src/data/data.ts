export const destinations = (lang: string) => {
  if (lang === "ar") {
    return destinationsArabic;
  } else {
    return destinationsEnglish;
  }
};

const destinationsArabic = [
  {
    title: "محافظة ظفار",
    image: "/s-2/1.png",
  },
  {
    title: "ولاية المضيرب",
    image: "/s-2/2.png",
  },
  {
    title: "ولاية مصيرة",
    image: "/s-2/3.png",
  },
  {
    title: "ولاية صلالة",
    image: "/s-2/4.png",
  },
  {
    title: "ولاية بوشر",
    image: "/s-2/5.png",
  },
];

const destinationsEnglish = [
  {
    title: "Dhofar Governorate",
    image: "/s-2/1.png",
  },
  {
    title: "Al Mudhaibi State",
    image: "/s-2/2.png",
  },
  {
    title: "Masirah State",
    image: "/s-2/3.png",
  },
  {
    title: "Salalah State",
    image: "/s-2/4.png",
  },
  {
    title: "Bawshar State",
    image: "/s-2/5.png",
  },
];

export const price = (lang: string) => {
  if (lang === "ar") {
    return ["$500 أو أقل", "$500 - $1000", "أكثر من $1000"];
  } else {
    return ["$500 or less", "$500 - $1000", "More than $1000"];
  }
};

export const typeTrip = (lang: string) => {
  if (lang === "ar") {
    return [
        {
          title: "الرحلة العائلية",
          value: "familyTrip",
        },
        {
          title: "الرحلة الاقتصادية",
          value: "economicTrip",
        },
      ];
  } else {
    return [
      {
        title: "Family Trip",
        value: "familyTrip",
      },
      {
        title: "Economic Trip",
        value: "economicTrip",
      },
    ];
  }
};
