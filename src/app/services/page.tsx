import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const services = [
  {
    id: 1,
    title: "Quickbooks consulting",
    image: "https://via.placeholder.com/150",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio iusto quo recusandae corrupti corporis? Dolorem aliquam ipsum id ab officia molestias, dolore ratione ipsa facilis, minima, vel enim itaque rerum. Alias, ipsa, dignissimos omnis consectetur illo eveniet tempore enim velit cupiditate fuga optio quia! Ut obcaecati aspernatur ex tempore itaque, doloribus tenetur iure unde voluptatibus delectus ab quos eveniet reprehenderit.Sequi repudiandae similique voluptas doloribus quas, dolorem laudantium aut, ut, quasi vero omnis! Voluptatem, quasi? Suscipit nemo, doloribus veritatis eum reprehenderit maiores eaque provident accusamus eveniet ex cupiditate quis repudiandae!Ducimus error harum natus officiis quibusdam autem adipisci totam nostrum optio fugiat illo qui ad odit recusandae dignissimos, deserunt fuga quae commodi quaerat aspernatur sequi ipsa. Quidem nobis vero perferendis?Fuga doloremque tenetur saepe nobis, iure vel deserunt soluta sed quidem doloribus in incidunt atque cumque aspernatur nesciunt quisquam quibusdam dolores id laborum! Mollitia repudiandae ea, laboriosam tempore nemo porro!",
  },

  {
    id: 2,
    title: "Quickbooks consulting",
    image: "https://via.placeholder.com/150",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio iusto quo recusandae corrupti corporis? Dolorem aliquam ipsum id ab officia molestias, dolore ratione ipsa facilis, minima, vel enim itaque rerum. Alias, ipsa, dignissimos omnis consectetur illo eveniet tempore enim velit cupiditate fuga optio quia! Ut obcaecati aspernatur ex tempore itaque, doloribus tenetur iure unde voluptatibus delectus ab quos eveniet reprehenderit.Sequi repudiandae similique voluptas doloribus quas, dolorem laudantium aut, ut, quasi vero omnis! Voluptatem, quasi? Suscipit nemo, doloribus veritatis eum reprehenderit maiores eaque provident accusamus eveniet ex cupiditate quis repudiandae!Ducimus error harum natus officiis quibusdam autem adipisci totam nostrum optio fugiat illo qui ad odit recusandae dignissimos, deserunt fuga quae commodi quaerat aspernatur sequi ipsa. Quidem nobis vero perferendis?Fuga doloremque tenetur saepe nobis, iure vel deserunt soluta sed quidem doloribus in incidunt atque cumque aspernatur nesciunt quisquam quibusdam dolores id laborum! Mollitia repudiandae ea, laboriosam tempore nemo porro!",
  },
  {
    id: 3,
    title: "Quickbooks consulting",
    image: "https://via.placeholder.com/150",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio iusto quo recusandae corrupti corporis? Dolorem aliquam ipsum id ab officia molestias, dolore ratione ipsa facilis, minima, vel enim itaque rerum. Alias, ipsa, dignissimos omnis consectetur illo eveniet tempore enim velit cupiditate fuga optio quia! Ut obcaecati aspernatur ex tempore itaque, doloribus tenetur iure unde voluptatibus delectus ab quos eveniet reprehenderit.Sequi repudiandae similique voluptas doloribus quas, dolorem laudantium aut, ut, quasi vero omnis! Voluptatem, quasi? Suscipit nemo, doloribus veritatis eum reprehenderit maiores eaque provident accusamus eveniet ex cupiditate quis repudiandae!Ducimus error harum natus officiis quibusdam autem adipisci totam nostrum optio fugiat illo qui ad odit recusandae dignissimos, deserunt fuga quae commodi quaerat aspernatur sequi ipsa. Quidem nobis vero perferendis?Fuga doloremque tenetur saepe nobis, iure vel deserunt soluta sed quidem doloribus in incidunt atque cumque aspernatur nesciunt quisquam quibusdam dolores id laborum! Mollitia repudiandae ea, laboriosam tempore nemo porro!",
  },
  {
    id: 4,
    title: "Quickbooks consulting",
    image: "https://via.placeholder.com/150",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio iusto quo recusandae corrupti corporis? Dolorem aliquam ipsum id ab officia molestias, dolore ratione ipsa facilis, minima, vel enim itaque rerum. Alias, ipsa, dignissimos omnis consectetur illo eveniet tempore enim velit cupiditate fuga optio quia! Ut obcaecati aspernatur ex tempore itaque, doloribus tenetur iure unde voluptatibus delectus ab quos eveniet reprehenderit.Sequi repudiandae similique voluptas doloribus quas, dolorem laudantium aut, ut, quasi vero omnis! Voluptatem, quasi? Suscipit nemo, doloribus veritatis eum reprehenderit maiores eaque provident accusamus eveniet ex cupiditate quis repudiandae!Ducimus error harum natus officiis quibusdam autem adipisci totam nostrum optio fugiat illo qui ad odit recusandae dignissimos, deserunt fuga quae commodi quaerat aspernatur sequi ipsa. Quidem nobis vero perferendis?Fuga doloremque tenetur saepe nobis, iure vel deserunt soluta sed quidem doloribus in incidunt atque cumque aspernatur nesciunt quisquam quibusdam dolores id laborum! Mollitia repudiandae ea, laboriosam tempore nemo porro!",
  },
  {
    id: 5,
    title: "Quickbooks consulting",
    image: "https://via.placeholder.com/150",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio iusto quo recusandae corrupti corporis? Dolorem aliquam ipsum id ab officia molestias, dolore ratione ipsa facilis, minima, vel enim itaque rerum. Alias, ipsa, dignissimos omnis consectetur illo eveniet tempore enim velit cupiditate fuga optio quia! Ut obcaecati aspernatur ex tempore itaque, doloribus tenetur iure unde voluptatibus delectus ab quos eveniet reprehenderit.Sequi repudiandae similique voluptas doloribus quas, dolorem laudantium aut, ut, quasi vero omnis! Voluptatem, quasi? Suscipit nemo, doloribus veritatis eum reprehenderit maiores eaque provident accusamus eveniet ex cupiditate quis repudiandae!Ducimus error harum natus officiis quibusdam autem adipisci totam nostrum optio fugiat illo qui ad odit recusandae dignissimos, deserunt fuga quae commodi quaerat aspernatur sequi ipsa. Quidem nobis vero perferendis?Fuga doloremque tenetur saepe nobis, iure vel deserunt soluta sed quidem doloribus in incidunt atque cumque aspernatur nesciunt quisquam quibusdam dolores id laborum! Mollitia repudiandae ea, laboriosam tempore nemo porro!",
  },
  {
    id: 6,
    title: "Quickbooks consulting",
    image: "https://via.placeholder.com/150",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio iusto quo recusandae corrupti corporis? Dolorem aliquam ipsum id ab officia molestias, dolore ratione ipsa facilis, minima, vel enim itaque rerum. Alias, ipsa, dignissimos omnis consectetur illo eveniet tempore enim velit cupiditate fuga optio quia! Ut obcaecati aspernatur ex tempore itaque, doloribus tenetur iure unde voluptatibus delectus ab quos eveniet reprehenderit.Sequi repudiandae similique voluptas doloribus quas, dolorem laudantium aut, ut, quasi vero omnis! Voluptatem, quasi? Suscipit nemo, doloribus veritatis eum reprehenderit maiores eaque provident accusamus eveniet ex cupiditate quis repudiandae!Ducimus error harum natus officiis quibusdam autem adipisci totam nostrum optio fugiat illo qui ad odit recusandae dignissimos, deserunt fuga quae commodi quaerat aspernatur sequi ipsa. Quidem nobis vero perferendis?Fuga doloremque tenetur saepe nobis, iure vel deserunt soluta sed quidem doloribus in incidunt atque cumque aspernatur nesciunt quisquam quibusdam dolores id laborum! Mollitia repudiandae ea, laboriosam tempore nemo porro!",
  },
  {
    id: 7,
    title: "Quickbooks consulting",
    image: "https://via.placeholder.com/150",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio iusto quo recusandae corrupti corporis? Dolorem aliquam ipsum id ab officia molestias, dolore ratione ipsa facilis, minima, vel enim itaque rerum. Alias, ipsa, dignissimos omnis consectetur illo eveniet tempore enim velit cupiditate fuga optio quia! Ut obcaecati aspernatur ex tempore itaque, doloribus tenetur iure unde voluptatibus delectus ab quos eveniet reprehenderit.Sequi repudiandae similique voluptas doloribus quas, dolorem laudantium aut, ut, quasi vero omnis! Voluptatem, quasi? Suscipit nemo, doloribus veritatis eum reprehenderit maiores eaque provident accusamus eveniet ex cupiditate quis repudiandae!Ducimus error harum natus officiis quibusdam autem adipisci totam nostrum optio fugiat illo qui ad odit recusandae dignissimos, deserunt fuga quae commodi quaerat aspernatur sequi ipsa. Quidem nobis vero perferendis?Fuga doloremque tenetur saepe nobis, iure vel deserunt soluta sed quidem doloribus in incidunt atque cumque aspernatur nesciunt quisquam quibusdam dolores id laborum! Mollitia repudiandae ea, laboriosam tempore nemo porro!",
  },
  {
    id: 8,
    title: "Quickbooks consulting",
    image: "https://via.placeholder.com/150",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio iusto quo recusandae corrupti corporis? Dolorem aliquam ipsum id ab officia molestias, dolore ratione ipsa facilis, minima, vel enim itaque rerum. Alias, ipsa, dignissimos omnis consectetur illo eveniet tempore enim velit cupiditate fuga optio quia! Ut obcaecati aspernatur ex tempore itaque, doloribus tenetur iure unde voluptatibus delectus ab quos eveniet reprehenderit.Sequi repudiandae similique voluptas doloribus quas, dolorem laudantium aut, ut, quasi vero omnis! Voluptatem, quasi? Suscipit nemo, doloribus veritatis eum reprehenderit maiores eaque provident accusamus eveniet ex cupiditate quis repudiandae!Ducimus error harum natus officiis quibusdam autem adipisci totam nostrum optio fugiat illo qui ad odit recusandae dignissimos, deserunt fuga quae commodi quaerat aspernatur sequi ipsa. Quidem nobis vero perferendis?Fuga doloremque tenetur saepe nobis, iure vel deserunt soluta sed quidem doloribus in incidunt atque cumque aspernatur nesciunt quisquam quibusdam dolores id laborum! Mollitia repudiandae ea, laboriosam tempore nemo porro!",
  },
  {
    id: 9,
    title: "Quickbooks consulting",
    image: "https://via.placeholder.com/150",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio iusto quo recusandae corrupti corporis? Dolorem aliquam ipsum id ab officia molestias, dolore ratione ipsa facilis, minima, vel enim itaque rerum. Alias, ipsa, dignissimos omnis consectetur illo eveniet tempore enim velit cupiditate fuga optio quia! Ut obcaecati aspernatur ex tempore itaque, doloribus tenetur iure unde voluptatibus delectus ab quos eveniet reprehenderit.Sequi repudiandae similique voluptas doloribus quas, dolorem laudantium aut, ut, quasi vero omnis! Voluptatem, quasi? Suscipit nemo, doloribus veritatis eum reprehenderit maiores eaque provident accusamus eveniet ex cupiditate quis repudiandae!Ducimus error harum natus officiis quibusdam autem adipisci totam nostrum optio fugiat illo qui ad odit recusandae dignissimos, deserunt fuga quae commodi quaerat aspernatur sequi ipsa. Quidem nobis vero perferendis?Fuga doloremque tenetur saepe nobis, iure vel deserunt soluta sed quidem doloribus in incidunt atque cumque aspernatur nesciunt quisquam quibusdam dolores id laborum! Mollitia repudiandae ea, laboriosam tempore nemo porro!",
  },
  {
    id: 10,
    title: "Quickbooks consulting",
    image: "https://via.placeholder.com/150",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio iusto quo recusandae corrupti corporis? Dolorem aliquam ipsum id ab officia molestias, dolore ratione ipsa facilis, minima, vel enim itaque rerum. Alias, ipsa, dignissimos omnis consectetur illo eveniet tempore enim velit cupiditate fuga optio quia! Ut obcaecati aspernatur ex tempore itaque, doloribus tenetur iure unde voluptatibus delectus ab quos eveniet reprehenderit.Sequi repudiandae similique voluptas doloribus quas, dolorem laudantium aut, ut, quasi vero omnis! Voluptatem, quasi? Suscipit nemo, doloribus veritatis eum reprehenderit maiores eaque provident accusamus eveniet ex cupiditate quis repudiandae!Ducimus error harum natus officiis quibusdam autem adipisci totam nostrum optio fugiat illo qui ad odit recusandae dignissimos, deserunt fuga quae commodi quaerat aspernatur sequi ipsa. Quidem nobis vero perferendis?Fuga doloremque tenetur saepe nobis, iure vel deserunt soluta sed quidem doloribus in incidunt atque cumque aspernatur nesciunt quisquam quibusdam dolores id laborum! Mollitia repudiandae ea, laboriosam tempore nemo porro!",
  },
  {
    id: 11,
    title: "Quickbooks consulting",
    image: "https://via.placeholder.com/150",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio iusto quo recusandae corrupti corporis? Dolorem aliquam ipsum id ab officia molestias, dolore ratione ipsa facilis, minima, vel enim itaque rerum. Alias, ipsa, dignissimos omnis consectetur illo eveniet tempore enim velit cupiditate fuga optio quia! Ut obcaecati aspernatur ex tempore itaque, doloribus tenetur iure unde voluptatibus delectus ab quos eveniet reprehenderit.Sequi repudiandae similique voluptas doloribus quas, dolorem laudantium aut, ut, quasi vero omnis! Voluptatem, quasi? Suscipit nemo, doloribus veritatis eum reprehenderit maiores eaque provident accusamus eveniet ex cupiditate quis repudiandae!Ducimus error harum natus officiis quibusdam autem adipisci totam nostrum optio fugiat illo qui ad odit recusandae dignissimos, deserunt fuga quae commodi quaerat aspernatur sequi ipsa. Quidem nobis vero perferendis?Fuga doloremque tenetur saepe nobis, iure vel deserunt soluta sed quidem doloribus in incidunt atque cumque aspernatur nesciunt quisquam quibusdam dolores id laborum! Mollitia repudiandae ea, laboriosam tempore nemo porro!",
  },
  {
    id: 12,
    title: "Quickbooks consulting",
    image: "https://via.placeholder.com/150",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio iusto quo recusandae corrupti corporis? Dolorem aliquam ipsum id ab officia molestias, dolore ratione ipsa facilis, minima, vel enim itaque rerum. Alias, ipsa, dignissimos omnis consectetur illo eveniet tempore enim velit cupiditate fuga optio quia! Ut obcaecati aspernatur ex tempore itaque, doloribus tenetur iure unde voluptatibus delectus ab quos eveniet reprehenderit.Sequi repudiandae similique voluptas doloribus quas, dolorem laudantium aut, ut, quasi vero omnis! Voluptatem, quasi? Suscipit nemo, doloribus veritatis eum reprehenderit maiores eaque provident accusamus eveniet ex cupiditate quis repudiandae!Ducimus error harum natus officiis quibusdam autem adipisci totam nostrum optio fugiat illo qui ad odit recusandae dignissimos, deserunt fuga quae commodi quaerat aspernatur sequi ipsa. Quidem nobis vero perferendis?Fuga doloremque tenetur saepe nobis, iure vel deserunt soluta sed quidem doloribus in incidunt atque cumque aspernatur nesciunt quisquam quibusdam dolores id laborum! Mollitia repudiandae ea, laboriosam tempore nemo porro!",
  },
];

const Services = () => {
  return (
    <section className="pt-20">
      <div className="bg-blue-600 w-full lg:h-64 md:h-64 h-44 flex flex-col items-center justify-center space-y-6">
        <h1 className="text-white font-bold lg:text-6xl md:text-4xl text-2xl">
          Services
        </h1>
        <h3 className="text-white font-bold text-xl">
          Let&apos;s connect with us
        </h3>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-5/6 py-20">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
            {services.map((service) => (
              <Link href={"/"} key={service.id}>
                <Card className="transform group hover:bg-blue-500 transition-all duration-100 ease-in-out">
                  <CardHeader>
                    <CardTitle className="group-hover:text-white">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src={service.image}
                      alt={service.title}
                      className="rounded-md w-full h-48"
                      width={300}
                      height={50}
                    />
                    <CardDescription className="mt-4 line-clamp-5 group-hover:text-white">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
