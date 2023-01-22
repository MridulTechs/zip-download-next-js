// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      name: "Laptop",
      url: "https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg",
      type: "jpeg",
    },
    {
      name: "Coding",
      url: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
      type: "jpeg",
    },
    {
      name: "Coding 2",
      url: "https://images.pexels.com/photos/6424586/pexels-photo-6424586.jpeg",
      type: "jpeg",
    },
    {
      name: "Coding PDF",
      url: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
      type: "pdf",
    },
  ]);
}
