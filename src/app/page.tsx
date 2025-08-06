import BarberCard from "@/components/BarberCard";
import ContactForm from "@/components/ContactForm";
import NavLink from "@/components/NavLink";
import Section from "@/components/Section";
import { Brush, Calendar, Eye, Link, LucideIcon, Scissors } from "lucide-react";

export default function Page() {
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
      img: "https://randomuser.me/api/portraits/men/56.jpg",
    },
    {
      id: 2,
      name: "Hardik Dangol",
      service: "Coloring and Styling",
      img: "https://randomuser.me/api/portraits/men/42.jpg",
    },
    {
      id: 3,
      name: "Jigyasha Rai",
      service: "Threading and waxing",
      img: "https://randomuser.me/api/portraits/women/27.jpg",
    },
    {
      id: 4,
      name: "Sumit Shrestha",
      service: "Hair and Beard",
      img: "https://randomuser.me/api/portraits/men/65.jpg",
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
      img: "data:image/jpeg;base64,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",
      price: "Rs. 750",
      category: "oils, wax",
      inStock: true,
    },
    {
      id: 2,
      name: "Beard Wax",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxwY6Ts0CGQBUEmTb6driXWGxr-rlChQxiFg&s",
      price: "Rs. 950",
      category: "oils, wax",
      inStock: true,
    },
    {
      id: 3,
      name: "Combs",
      img: "data:image/jpeg;base64,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mqDCeK1Ms2rhqraAKiStceHoqDAvRTrf1jPUdzrrwKYKccFIo6J0jsETHSv9yNrnu+TQStdZY5sZV5kC6R2f7odoT2MjW0jDvlN325Rtz9HFq6d2c7oNn09nTB1ZIN8v8MHlEPKR+LEg4P2a7JVda61NA6QXsZfZjb1ecvQXPJdi7JdysEVpK5/0l+vgsu2EHLU5Ok9cIO9q6rFE1oDWgNaBYNAAAHAAaKtOItU1OyNoZG1rGNFmsaA1rRwAGQV1EVBERAREQEREBERAREQEREBERAVueBjxhe1r2nVrgHA+hVxEGrbQ7u9mTe1SsYeMZdF+jCB+i12t7lqF3sS1EXIOjcP+Zl/1XS0U5F7XHqjuLYfYrS38UAf+0jVH/wBBLv8Ab2/8Mf8AzLtKJw643B3FD7dcT+GAN/eRyydJ3IUYN5Kipk+G8bAfky/6rqKJw61DZ/dlsqLSkZIeMpdL+jyR+i2ejoYohhijZE33WNa0fJoUhFUEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH//Z",
      price: "Rs. 350",
      category: "accessories",
      inStock: false,
    },
    {
      id: 4,
      name: "Face Mask",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJRsBH6Q9meBAnh480xO_K36ibQEGQuPlBLA&s",
      price: "Rs. 1250",
      category: "masks, creams",
      inStock: true,
    },
    {
      id: 5,
      name: "Electric Trimmer",
      img: "data:image/jpeg;base64,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",
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
    <main className="flex flex-col pt-[1.5rem]">
      <div className="wrapper ">
        <section className="hero-section relative isolate bg-orange-300 bg-[url(/hero.jpg)] w-full aspect-square md:aspect-video bg-cover bg-center rounded-xl">
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
      <div className="wrapper py-[5rem]" id="services">
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
            {barbersList.map(({ id, name, img, service }) => (
              <BarberCard
                key={id}
                name={name}
                service={service}
                img={img}
                orientation="vertical"
              />
            ))}
          </ul>
        </Section>
      </div>

      <div className="wrapper py-[5rem] " id="shop">
        <Section title="Shop">
          <ul className="shopItems-list grid grid-cols-[repeat(auto-fill,minmax(min(100%,18rem),1fr))] gap-[1.2rem]">
            {shopItems.map((item) => (
              <li
                className="shop-item relative flex flex-col items-center gap-[0.75rem] border-2 border-neutral-300 rounded-xl bg-white p-[2rem] overflow-hidden"
                key={item.id}
              >
                {!item.inStock ? (
                  <span className="out-of-stock absolute p-[0.5rem_4rem] bg-red-800 text-white text-[1.4rem] top-[2rem] left-[-4rem] rotate-[-38deg] shadow-xl">
                    Out of Stock
                  </span>
                ) : null}
                <span className="img-container w-[14.5rem] h-[14.5rem] flex items-center justify-center bg-amber-600 border-2 border-neutral-300 rounded-md overflow-hidden">
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
          <button
            type="button"
            className="mt-5 bg-amber-600 text-white text-[2rem] rounded-full mx-auto p-[0.5rem_2.5rem] text-center"
          >
            More
          </button>
        </Section>
      </div>

      <div className="wrapper bg-orange-100 py-[5rem]" id="contact">
        <Section title="Contact">
          <div className="flex items-center gap-[2rem] flex-col-reverse md:flex-row">
            <div className="google-maps-container bg-orange-600 md:w-[50%] w-full aspect-square  md:flex-[0_0_50%] border-2 border-neutral-300 rounded-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.6956170087265!2d85.31573757601959!3d27.633942228724145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb17fbe0339d21%3A0x34daf4c20168d6e7!2sMG%20Salon!5e0!3m2!1sne!2snp!4v1754458963352!5m2!1sne!2snp"
                // width="600"
                // height="450"
                style={{ border: 0, height: "100%", width: "100%" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <ContactForm />
          </div>
        </Section>
      </div>
    </main>
  );
}
