import { getTranslations } from "next-intl/server";

import { REVIEWS } from "@/config/review";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Rating from "@/components/ui/rating";

const Reviews = async () => {
  const t = await getTranslations();

  return (
    <section id="reviews" className="py-10 md:py-16">
      <div className="container">
        <h2 className="uppercase">
          {t("review-heading.part-1")} <br /> {t("review-heading.part-2")}
        </h2>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full py-10"
          plugins={
            [
              // Autoplay({
              //   delay: 2000,
              // }),
            ]
          }
        >
          <CarouselContent>
            {REVIEWS.map(({ snippet, user, rating }) => (
              <CarouselItem key={snippet} className="md:basis-1/2">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6 pb-0">
                      <p>{snippet}</p>
                    </CardContent>
                    <CardHeader className="flex flex-row items-center gap-3">
                      <Avatar className="size-16">
                        <AvatarImage src={user.thumbnail} alt="@shadcn" />
                        <AvatarFallback>{user.name}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle>{user.name}</CardTitle>
                        <CardDescription className="flex gap-1">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <Rating
                              key={`${user.name}-${index + 1}`}
                              filled={index < rating}
                            />
                          ))}
                        </CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Reviews;
