import NavLink from "@/components/NavLink";
import Section from "@/components/Section";
import { Brush, Calendar, Eye, LucideIcon, Scissors } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const servicesList: Array<{
    id: number;
    name: string;
    description: string;
    icon: LucideIcon;
  }> = [
    {
      id: 1,
      name: "haricuts",
      description: "Precision cuts tailored to your style",
      icon: Scissors,
    },
    {
      id: 2,
      name: "styling",
      description: "Modern and classic styling options",
      icon: Eye,
    },
    {
      id: 3,
      name: "coloring",
      description: "Expert coloring for a vibrant new look",
      icon: Brush,
    },
    {
      id: 4,
      name: "appointment",
      description: "Book your appointment online",
      icon: Calendar,
    },
  ];

  const barbersList: Array<{
    id: number;
    name: string;
    img?: string;
    service: string;
  }> = [
    {
      id: 1,
      name: "Siraj Jaswal",
      service: "Hari and Beard",
    },
    {
      id: 2,
      name: "Hardik Dangol",
      service: "Coloring and Styling",
    },
    {
      id: 3,
      name: "Jigyasha Rai",
      service: "Threading and waxing",
    },
    {
      id: 4,
      name: "Sumit Shrestha",
      service: "Hair and Beard",
    },
  ];

  const shopItems: Array<{
    id: any;
    name: string;
    img: string;
    price: string;
    category: string;
    inStock: boolean;
  }> = [
    {
      id: 1,
      name: "Beard Oil",
      img: "",
      price: "Rs. 750",
      category: "oils, wax",
      inStock: true,
    },
    {
      id: 2,
      name: "Beard Wax",
      img: "",
      price: "Rs. 950",
      category: "oils, wax",
      inStock: true,
    },
    {
      id: 3,
      name: "Combs",
      img: "",
      price: "Rs. 350",
      category: "accessories",
      inStock: false,
    },
    {
      id: 4,
      name: "Face Mask",
      img: "",
      price: "Rs. 1250",
      category: "masks, creams",
      inStock: true,
    },
    {
      id: 5,
      name: "Electric Trimmer",
      img: "",
      price: "Rs. 2550",
      category: "trimmer",
      inStock: false,
    },
  ];

  const getCategoryList = (category: string): Array<string> => {
    let catArray = [];
    if (category.includes(",")) {
      catArray = category.split(",");
    } else {
      catArray.push(category);
    }
    return catArray;
  };

  return (
    <main className="flex flex-col gap-[3rem] py-[1.5rem]">
      <div className="wrapper ">
        <section className="hero-section relative isolate bg-orange-300 md:bg-[url(/hero.jpg)] aspect-video max-h-[calc(100vh - 10rem)] bg-cover bg-center rounded-xl">
          <div
            className="hero-header-text absolute text-white  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full flex flex-col items-center gap-4 max-w-[90%] lg:max-w-0'
          "
          >
            <h1 className="text-[2rem] lg:text-[3.5rem] font-semibold text-center">
              Crafting Confidence, One Cut at a Time
            </h1>
            <p className="text-[1.2rem] lg:text-[1.6rem] font-medium text-center">
              Experience the art of grooming with our expert barbers. Book your
              appointment today and step out with a fresh, sharp look.
            </p>
            <NavLink name="book now" link="book-now" type="button" />
          </div>
        </section>
      </div>
      <div className="wrapper" id="services">
        <Section title="Our Services">
          <ul className="services-list grid grid-cols-[repeat(auto-fill,minmax(min(100%,25rem),1fr))] gap-[1.5rem]">
            {servicesList.map(({ id, name, description, icon: Icon }) => (
              <li
                key={id}
                className="flex flex-col gap-4  border-2 border-neutral-300 rounded-xl p-[1.2rem]"
              >
                <span className="icon-container">
                  <Icon />
                </span>
                <h2 className="service-name text-[1.8rem] font-semibold capitalize">
                  {name}
                </h2>
                <p className="service-desc capitalize">{description}.</p>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      <div className="wrapper bg-orange-100 py-[5rem]" id="barbers">
        <Section title="Our Barbers">
          <ul className="barbers-list grid grid-cols-[repeat(auto-fill,minmax(min(100%,25rem),1fr))] gap-[2rem]">
            {barbersList.map((barber) => (
              <li
                className="barber p-[1.5rem] border-2 border-neutral-300 rounded-md flex flex-col items-center gap-[0.8rem] bg-white"
                key={barber.id}
              >
                <span className="img-container w-[12rem] h-[12rem] flex items-center justify-center bg-amber-600 rounded-full overflow-hidden">
                  {barber.img ? (
                    <img
                      src={barber.img}
                      className="w-full h-full object-cover"
                    />
                  ) : null}
                </span>
                <p className="barber-name text-[1.8rem] font-medium">
                  {barber.name}
                </p>
                <p className="barber-service text-[1.5rem] text-neutral-600">
                  {barber.service}
                </p>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      <div className="wrapper" id="shop">
        <Section title="Shop">
          <ul className="shopItems-list grid grid-cols-[repeat(auto-fill,minmax(min(100%,18rem),1fr))] gap-[1.2rem]">
            {shopItems.map((item) => (
              <li
                className="shop-item relative flex flex-col items-center gap-[0.75rem] border-2 border-neutral-300 rounded-md bg-white p-[2rem] overflow-hidden"
                key={item.id}
              >
                {!item.inStock ? (
                  <span className="out-of-stock absolute p-[0.5rem_4rem] bg-red-800 text-white text-[1.4rem] top-[2rem] left-[-4rem] rotate-[-38deg] shadow-xl">
                    Out of Stock
                  </span>
                ) : null}
                <span className="img-container w-[14.5rem] h-[14.5rem] flex items-center justify-center bg-amber-600">
                  {item.img !== "" ? (
                    <img
                      src={item.img}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  ) : null}
                </span>
                <p className="item-name text-[1.8rem] font-medium">
                  {item.name}
                </p>
                <p className="price text-neutral-500">{item.price}</p>
                <ul className="categories flex flex-wrap gap-[0.5rem]">
                  {getCategoryList(item.category).map((cat, index) => (
                    <li className="cat-item relative" key={index}>
                      <Link href={cat} className="text-blue-800 underline">
                        {index > 0 && ","}
                        {cat}
                      </Link>
                    </li>
                  ))}
                </ul>
                {!item.inStock ? (
                  <button
                    type="button"
                    className="btn w-full flex justify-center bg-amber-600 text-white p-[0.5rem_1rem] text-[1.4rem] rounded-md"
                  >
                    Request Product
                  </button>
                ) : null}
              </li>
            ))}
          </ul>
          <button type="button" className="mt-5 bg-amber-600 text-white text-[2rem] rounded-full mx-auto p-[0.5rem_2.5rem] text-center">More</button>
        </Section>
      </div>

      <div className="wrapper bg-orange-100 py-[5rem]" id="contact">
        <Section title="Contact"></Section>
      </div>

    </main>
  );
}
