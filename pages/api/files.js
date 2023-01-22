export default function handler(req, res) {
  res.status(200).json([
    {
      name: "laptop",
      url: "https://res.cloudinary.com/dbxcernxw/image/upload/v1674379837/Mridul.Tech%20Blog/pexels-laptop_tfnlrg.jpg",
      type: "jpeg",
    },
    {
      name: "coding-react-js",
      url: "https://res.cloudinary.com/dbxcernxw/image/upload/v1674379837/Mridul.Tech%20Blog/pexels-react-code_gkeio5.jpg",
      type: "jpeg",
    },
    {
      name: "coding-python",
      url: "https://res.cloudinary.com/dbxcernxw/image/upload/v1674379837/Mridul.Tech%20Blog/pexels-python-code_qau1ba.jpg",
      type: "jpeg",
    },
    {
      name: "coding-pdf",
      url: "https://zip-download-next-js.vercel.app/assets/photos-pdf.pdf",
      type: "pdf",
    },
  ]);
}
