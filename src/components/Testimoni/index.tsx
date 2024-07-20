import React from "react";
import TestimoniCard from "./card";

const Testimoni: React.FC = () => {
  return (
    <section>
      <div className="py-32">
        <h1 className="font-clash text-[80px] px-24 text-deep-cove-900 font-semibold text-3xl md:text-5xl justify-center flex">
          Kata mereka tentang Dusun Krecek
        </h1>
        <div className="flex flex-col md:flex-row md:gap-10 px-24 pt-12 mb-[-80px]">
          <div className="flex flex-col gap-10 md:w-1/2">
            <TestimoniCard
              imageSrc="/images/img.png"
              rating={4.5}
              name="Edward Salim"
              institution="Universitas Indonesia"
              testimonial="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ipsum voluptate repellendus quisquam incidunt sint voluptas eum debitis possimus, quas necessitatibus sunt dignissimos corrupti sit dolor at."
            />
            <TestimoniCard
              imageSrc="/images/img.png"
              rating={4.5}
              name="Edward Salim"
              institution="Universitas Indonesia"
              testimonial="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ipsum voluptate repellendus quisquam incidunt sint voluptas eum debitis possimus, quas necessitatibus sunt dignissimos corrupti sit dolor at."
            />
            <TestimoniCard
              imageSrc="/images/img.png"
              rating={4.5}
              name="Edward Salim"
              institution="Universitas Indonesia"
              testimonial="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ipsum voluptate repellendus quisquam incidunt sint voluptas eum debitis possimus, quas necessitatibus sunt dignissimos corrupti sit dolor at."
            />
          </div>
          <div className="flex flex-col gap-10 pt-10 md:pt-36 md:w-1/2">
            <TestimoniCard
              imageSrc="/images/img.png"
              rating={4.5}
              name="Edward Salim"
              institution="Universitas Indonesia"
              testimonial="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ipsum voluptate repellendus quisquam incidunt sint voluptas eum debitis possimus, quas necessitatibus sunt dignissimos corrupti sit dolor at."
            />
            <TestimoniCard
              imageSrc="/images/img.png"
              rating={4.5}
              name="Edward Salim"
              institution="Universitas Indonesia"
              testimonial="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ipsum voluptate repellendus quisquam incidunt sint voluptas eum debitis possimus, quas necessitatibus sunt dignissimos corrupti sit dolor at."
            />
          </div>
        </div>

        <div className="separator flex justify-center px-24 pt-32 pb-24 bg-gradient-to-l from-lime-500 to-lime-900 gap-10 items-center">
          <div className="text-white w-1/2">
            <h1 className="pb-2 text-[80px] font-semibold font-clash leading-tight">
              Tertarik ke Dusun Krecek?
            </h1>
            <p className="text-2xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit ipsam accusamus nesciunt a delectus voluptatem
              beatae necessitatibus odio assumenda nobis eos vero quis
              cupiditate perferendis, ut quaerat tempora similique nisi.
            </p>
          </div>

          <div className="h-[384px] w-1/2">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7915.378661114041!2d110.28285276260144!3d-7.27614717832739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e707fa8bc909bd1%3A0x67d3ba38f59ea696!2sKrecek%2C%20Getas%2C%20Kaloran%2C%20Temanggung%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1721064234224!5m2!1sen!2sid"
              width="100%"
              height="100%"
              className="border-2"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
