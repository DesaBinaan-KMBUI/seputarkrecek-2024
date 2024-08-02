import React from "react";
import TestimoniCard from "./card";
import styles from "./separator.module.css";

const Testimoni: React.FC = () => {
  return (
    <section>
      <div className="pt-12 bg-[#F6ECE3]">
        <h1 className="font-semibold text-[#8D804F] font-clash text-center text-[40px] md:text-[80px] leading-tight md:leading-[89.60px] justify-center px-20 lg:px-64">
          Kata mereka tentang Dusun Krecek
        </h1>

        <div className="relative z-10 flex flex-col md:flex-row md:gap-10 px-10 md:px-24 pt-12 mb-[-130px]">
          <div className="flex flex-col gap-10 md:w-1/2">
            <TestimoniCard
              imageSrc="/images/img.png"
              rating={5}
              name="Alexander Kevin Yang"
              institution="Universitas Indonesia"
              testimonial={`Awalnya ga pernah ada niat buat ikutan Desbin 2023 sama sekali. Bahkan baru tau ada proker Desbin aja di 2023, tahun sebelumnya ga pernah merhatiin ini acara apa. Waktu berangkat juga ga ada ekspektasi apa-apa karena udah biasa tinggal di desa begini karena memang sama-sama asal dari Jawa Tengah. Tapi waktu di Krecek ternyata beda banget karena di dusun ini semuanya Buddhis yang bikin unik. Tempatnya pun bagus dan dingin, dusunnya pun punya vihara dan bahkan pondok meditasi di atas bukit yang deket dengan curug. 
              
              So far, pengalaman di Desbin 2023 cukup memuaskan sehingga pengen balik lagi. Acara yang dibuat panitia juga seru dan bikin bisa berinteraksi dengan warga. Kita juga dikenalin sama budaya Buddhis-Jawa yang baru pertama kali dirasain. Overall Desbin sangat OK punya buat didatengin lagi.`}
            />

            <TestimoniCard
              imageSrc="/images/img.png"
              rating={5}
              name="Marvella Metta Sutioso"
              institution="Universitas Indonesia"
              testimonial={`Jujur, tadinya aku ga kepikiran sedikit pun buat terlibat dalam proker Desa Binaan ini, baik di kepanitiaan, volunteer, maupun menginjakkan kaki di Krecek. Mengunjungi Dusun Krecek menjadi salah satu keputusan terbaik yang pernah aku buat dalam hidup, karena di sana bener-bener terasa keramahan dari penduduknya sebagai ciri khas masyarakat Indonesia yang sesungguhnya. Di sana, aku lebih nggak sungkan untuk menyapa orang-orang yang aku temuin, karena mereka sudah pasti akan menyapa balik.

              Sebenarnya, begitu tiba di Krecek di hari pertama, aku sempat berpikir gimana caranya untuk ngelewatin 1 minggu ini, apakah akan terasa bosan. The answer is not at all! Ibaratnya, Dusun Krecek itu kayak rumah, terus rumah-rumah warga itu kayak ruangan-ruangan di dalam rumah yang bebas kamu singgahi kapanpun karena memang seleluasa itu. Kita baru duduk di sofa beberapa detik aja, mereka bakal langsung nyuguhin makanan dan minuman, kalau nggak kunjung disantap, siap-siap ditawarin terus. Bahkan, waktu handphone ku pernah hampir hilang, literally satu warga bantu cariin. Suasananya sehangat itu! Minim internet, penuh interaksi, dan lebih "menyadari" waktu yang berjalan dan lingkungan sekitar.`}
            />


            <TestimoniCard
              imageSrc="/images/img.png"
              rating={5}
              name="Lim Bodhi Wijaya "
              institution="Universitas Indonesia"
              testimonial={`Seru banget disana bisa merasakan kondisi hidup di pedesaan, kemudian banyak aktivitas baru yang bisa dilakukan yang mana ini membantu kita untuk rehat sejenak dari hiruk pikuk kehidupan perkuliahan. Selain itu, so far orang orang di krecek seru dan sangat welcome!`}
            />

            <TestimoniCard
              imageSrc="/images/img.png"
              rating={5}
              name="Lillianna Ricarda Mettasari"
              institution="Universitas Indonesia"
              testimonial={`Dusun Krecek itu desa buddhist dengan sejuta kenangan. Keluarga kedua yang memberikan rasa hangat, kebahagiaan, ketenangan, pembelajaran, dan arti kehidupan. Keindahan alam, udara, dan lingkungannya juga bagus disana, seperti ada vihara, patung Buddha tidur, curugnya, gamelan dan kuda lumpingnya, dan udaranya yang bersih dari polusi.

              Di Dusun Krecek cocok buat kita-kita generasi Z buat healing dari stresnya perkuliahan dan kehidupan serta membuat kita belajar untuk saling menghargai orang lain
              `}
            />

            <TestimoniCard
              imageSrc="/images/img.png"
              rating={5}
              name="Caryn Hanuga"
              institution="Universitas Indonesia"
              testimonial={`Didn't expect anything pas pertama kali ke Krecek, but it turned out to be one of the best moments in my life!! Satu poin yg menjelaskan semuanya: dapet keluarga baruuuu!! Kata "keluarga" disini beneran I mean it karena beneran disambut sebaik sehangat itu sama warganya, even kita orang asik dan baru pertama kali kenal. Sekarang tiap ke Krecek lagiii, serasa pulang kampung ehehe. Selain itu kalau ngomongin soal kebudayaan, Krecek has it all! Seruu banget kalo ikutin segala aktivitas kebudayaan warganya, dapet new experiences!!🌟

Krecek has a lot of potential, dan karena kita sudah disambut hangat oleh warganya, pengen juga kalo kita  bisa giving back to them. Yang dapet kesempatan ke Krecek: jangan lupa selagi bertugas, semua hal yang dilakukan harus terus mengingat motivasi bajik di awal yaa and haveee funnnn!!


              `}
            />

          </div>

          {/* Right */}
          <div className="flex flex-col gap-10 pt-10 md:pt-36 md:w-1/2">

            <TestimoniCard
              imageSrc="/images/img.png"
              rating={5}
              name="Shinta Chandra"
              institution="Universitas Indonesia"
              testimonial={`Selama seminggu di Krecek, saya banyak belajar tentang kultur, budaya, adat, kebiasaan serta gaya hidup mereka. Banyak pengalaman menarik selama di sana yang belum pernah saya lakukan, seperti membuat gula aren, menonton ketoprak, pergi ke ladang, kendurian, dan masih banyak lagi. Keindahan alam yang tidak bisa saya temukan di kota juga membuat krecek memiliki kesan tersendiri. Warga di dusun tersebut juga sangat ramah dan welcome sama kita. Saya merasa sangat senang punya kesempatan untuk datang ke sana.

              `}
            />

            <TestimoniCard
              imageSrc="/images/img.png"
              rating={5}
              name="Edi Lienardy"
              institution="Universitas Indonesia"
              testimonial={`Keluarga. Satu kata yang menggambarkan hubungan kita bersama warga dusun Krecek. Setiap ada kesempatan untuk berkunjung ke dusun Krecek, pastinya akan selalu menyempatkan waktu untuk melepas rindu dengan warga dusun Krecek. Ingat sekali, pertama kali berkunjung kesana, kami sudah disambut dengan hangat oleh warga dan anak-anak. Hampir setiap hari, kami selalu diajak main oleh anak-anak untuk bermain bola maupun diajak "dusun tour" untuk melihat keindahan alam dusun Krecek. Selain itu, kegiatan bersama ibu-ibu juga sangat memorable, dimana kami diajak belajar masak dan berkebun untuk memetik sayur mayur. 

              Salah satu faktor lainnya yang membuat Desa Binaan ini terkenang   adalah budaya Buddhis nya yang sangat kental, dari budaya hingga upacara adat yang dilaksanakan, seperti Kendurian, Anjangsana, dan perayaan Waisak. Tak dilupakan juga, di dusun Krecek terdapat Vihara yang cukup besar, dimana sering menjadi tempat untuk berkumpul untuk diadakannya acara bersama warga. Semoga hubungan kita akan selalu terjalin. Pastinya ku akan kembali berkunjung lagi! Ditunggu ya!
              `}
            />


            <TestimoniCard
              imageSrc="/images/img.png"
              rating={5}
              name="Agnes Betresia"
              institution="Universitas Indonesia"
              testimonial={`Satu kata untuk Dusun Krecek, hangat. Tiap berkunjung ke Krecek selalu disambut warga dengan senyum ramah, hal wajib untuk dilakuin di Krecek itu adalah keliling dusun karna selalu diajak mampir ke rumah warga, disuguhi teh manis dan biasanya ada cemilan khas di tiap rumah. Oiya, kalau ke Krecek juga wajib banget bonding, main sama anak-anak yang superrr friendly dan asik bangett terus main bareng di curug. 

              Di Krecek juga banyak bgt anjing peliharaan yang baik-baik dan super lovely. Selain itu, pemandangan di Krecek juga asriii bgt harus coba naik ke Pondok Meditasi terus meditasi disana sambil menikmati pemandangan. Sehat-sehat selalu untuk warga Krecek, semoga kita bisa ketemu lagi sesegera mungkin ya!!

              `}
            />



          </div>
        </div>

        <div className="relative mt-10 pt-40 z-0 flex justify-center gap-20 px-12 md:px-24 pb-28 gradient-background items-center separator">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

            <div className="text-white">
              <h1 className="font-semibold font-clash text-[40px] md:text-[80px] leading-tight md:leading-[89.60px]">
                Tertarik ke Dusun Krecek?
              </h1>
              <p className="text-md sm:text-lg md:text-xl mt-3 font-dm tracking-wide">
                Yuk, rencanakan kegiatan retreat Anda di Dusun Krecek, Kaloran, Temanggung, Jawa Tengah! Hubungi warga setempat melalui contact person yang tertera dan rasakan pengalaman yang tak terlupakan.
              </p>
              <p className="pt-4">
                Contact Person:<br />
                (+62) 87776073898
              </p>
            </div>


            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7915.378661114041!2d110.28285276260144!3d-7.27614717832739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e707fa8bc909bd1%3A0x67d3ba38f59ea696!2sKrecek%2C%20Getas%2C%20Kaloran%2C%20Temanggung%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1721064234224!5m2!1sen!2sid"
              width="100%"
              height="400"
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
