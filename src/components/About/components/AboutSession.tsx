import imageOne from "../../../assets/imageOne.jpg";
import aboutLegacyImage from "../../../assets/aboutLegacyImage.jpg";

const AboutSession = () => {
  return (
    <div className="sm:px-[6%] sm:py-32 large:px-[18%] px-4 py-14">
      <div className="flex flex-col gap-12">
        <div className="flex gap-4 sm:flex-row flex-col">
          <span className="block sm:w-1/2 text-[#000] font-ivy sm:text-[44px] text-[32px]">
            About Kudajadri Drizzle Homestay
          </span>
          <p className="sm:w-1/2 text-secondary font-albertSans sm:text-xl">
            Kudajadri Drizzle is a 100-year-old Jain Tharavadu, nestled amidst
            the lush greenery of Wayanad, offering an unforgettable homestay
            experience. Located in Kalpetta, the heart of Wayanad, our homestay
            is ideally positioned to explore the natural beauty and attractions
            of this stunning region. Whether you're here for a peaceful retreat
            or an adventure-filled getaway, we offer a unique blend of heritage,
            comfort, and hospitality.
          </p>
        </div>
        <div className="h-[450px]">
          <img
            src={imageOne}
            alt=""
            className="object-cover size-full rounded-[32px]"
          />
        </div>
      </div>
      <div className="flex gap-4 sm:py-32 py-14 flex-col sm:flex-row">
        <h1 className="text-[#000] sm:text-[44px] text-[32px] font-ivy font-normal flex-1">
          Our Legacy
        </h1>
        <div className="flex flex-col gap-8 flex-1">
          <p className="text-secondary sm:text-xl font-albertSans">
            Kudajadri Drizzle is more than just a homestay; it's a piece of
            Wayanad’s history. Converted from a traditional Jain Tharavadu, our
            homestay retains its cultural charm while offering modern amenities.
            The homely ambiance, combined with authentic Jain cuisine and warm
            hospitality, makes us the perfect choice for families, couples, and
            groups alike.
          </p>
          <div className="h-[415px]">
            <img
              src={aboutLegacyImage}
              alt=""
              className="size-full object-cover rounded-[32px]"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 flex-col sm:flex-row">
        <h1 className="text-[#000] sm:text-[44px] text-[32px] font-ivy font-normal flex-1">
          Ideal for All Travelers
        </h1>
        <p className="text-secondary text-xl font-albertSans flex-1">
          Kudajadri Drizzle is perfect for group travel, families, honeymoon
          couples, and anyone looking to experience the charm of Wayanad. Our
          serene location offers relief from the hustle and bustle, while the
          panoramic views of the surrounding landscape add to the tranquil
          atmosphere.
        </p>
      </div>
    </div>
  );
};

export default AboutSession;
