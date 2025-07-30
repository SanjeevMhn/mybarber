import NavLink from "@/components/NavLink";
import Section from "@/components/Section";
import { Brush, Calendar, Eye, LucideIcon, Scissors } from "lucide-react";
import Image from "next/image";

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
  return (
    <main className="flex flex-col gap-[3rem] py-[1.5rem]">
      <div className="wrapper ">
        <section className="hero-section relative isolate bg-[url(/hero.jpg)] aspect-video max-h-[calc(100vh - 10rem)] bg-cover bg-center rounded-xl">
          <div
            className="hero-header-text absolute text-white  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full flex flex-col items-center gap-4 '
          "
          >
            <h1 className="text-[3.5rem] font-semibold">
              Crafting Confidence, One Cut at a Time
            </h1>
            <p className="text-[1.6rem] font-medium">
              Experience the art of grooming with our expert barbers. Book your
              appointment today and step out with a fresh, sharp look.
            </p>
            <NavLink name="book now" link="book-now" type="button" />
          </div>
        </section>
      </div>
      <div className="wrapper">
        <Section title="Our Services">
          <ul className="services-list grid grid-cols-[repeat(auto-fill,minmax(min(100%,25rem),1fr))] gap-[1.5rem]">
            {servicesList.map(({ id, name, description, icon: Icon }) => (
              <li
                key={id}
                className="flex flex-col gap-4  border rounded-xl p-[1.2rem]"
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

      <div className="wrapper bg-orange-100">
        
      </div>
    </main>
  );
}
