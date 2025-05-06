import mapImage from "../../../assets/mapImage.jpg"
const Direction = () => {
  return (
    <div className="sm:px-[12%] sm:py-32 flex flex-col gap-24 mobile:px-4 mobile:py-14 large:px-[18%]">
      <div className="flex flex-col gap-6 items-center">
        <h1 className="uppercase text-primary tracking-[1.6px] font-albertSans">
          Direction
        </h1>
        <div className="flex flex-col gap-4 items-center">
          <span className="block text-primary sm:text-[44px] mobile:text-[32px] font-ivy">
            Getting Here Made Easy
          </span>
          <p className="text-secondary sm:text-xl font-albertSans text-center">
            Easily accessible, our homestay in Kaniyambetta, Wayanad, is close
            to Kalpetta and Sultan Bathery, ensuring a hassle-free journey.
          </p>
        </div>
        <div>
          <button onClick={() => {
            window.open('https://www.google.com/maps/place/Kudajadri+Drizzle+-+Best+Wayanad+Homestays/@11.6944682,76.0925395,17z/data=!4m9!3m8!1s0x3ba6752bf8e8c185:0x5bf951fa893c48b4!5m2!4m1!1i2!8m2!3d11.6944682!4d76.0925395!16s%2Fg%2F1ptwp6yd6?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D', '_blank');
          }} className="bg-primary px-6 py-3 rounded-full text-[#fff] font-albertSans">
            Get Direction
          </button>
        </div>
      </div>
      <img src={mapImage} alt="" className="max-w-full h-auto mobile:hidden sm:block" />


    </div>
  );
}

export default Direction
