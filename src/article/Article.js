import { Link } from "react-router-dom";

const pageArticle = [
  { title: "Object And Array Destructuring", url: "destructuring" },
];

const ArticleApp = () => {
  const hewan = ["kucing", "anjing", "gajah", "bebek"];
  // let kucing = hewan[0];
  // let anjing = hewan[1];
  // let gajah = hewan[2];
  // let bebek = hewan[3];

  let [cat, dog, elephant, duck] = hewan;

  console.log(cat); //
  console.log(dog); //
  console.log(elephant); //
  console.log(duck); //

  const Person = {
    nama: "Iksan",
    jenis_kelamin: "Pria",
    alamat: "Gorontalo",
  };

  // let nama = Person.nama;
  // let jenis_kelamin = Person.jenis_kelamin;
  // let alamat = Person.alamat;

  let { nama, jenis_kelamin, alamat } = Person;

  console.log(nama);
  console.log(jenis_kelamin);
  console.log(alamat);

  let { nama: name, jenis_kelamin: gender, alamat: address } = Person;
  console.log(`Nama : ${name}`);
  console.log(`Alamat : ${address}`);
  console.log(`Jenis Kelamin : ${gender}`);

  return <div className="flex flex-col items-center px-20"></div>;
};

export default ArticleApp;
