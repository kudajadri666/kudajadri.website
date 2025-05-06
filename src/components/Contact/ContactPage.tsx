import facebookLogo from "../../assets/contactFacbookLogo.svg";
import threadLogo from "../../assets/ContactThreadLogo.svg"
import instaLogo from "../../assets/contactInstaLogo.svg";
import twitterLogo from "../../assets/contactTwitterLogo.svg";
import Footer from "../Home/components/Footer";
import { Header } from "../Home/components/Header";
import { useState } from "react";

const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER

export const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = () => {
    const { name, email, message } = form;

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const encodedMessage = encodeURIComponent(
      `Hello! I'd like to get in touch with you.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

    const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      {/* Header */}
      <Header type="black" />

      {/* Main Content */}
      <div className="mobile:pt-[52px] sm:pt-[50px] sm:min-w-[1174px] flex flex-col items-center px-4 sm:px-0">
        {/* Title Section */}
        <div className="flex flex-col sm:gap-[90px] gap-7">
          <div className="flex flex-col gap-6 items-center">
            <span className="text-[#000] font-albertSans tracking-[1.6px] text-base">
              Contact US
            </span>
            <span className="sm:text-[72px] text-[32px] text-[#000] font-staylista">
              Experience Kudajadri
            </span>
          </div>
        </div>

        {/* Address Section */}
        <div className="flex gap-10 justify-center sm:pt-24 pt-7">
          <div className="flex flex-col sm:flex-row gap-10">
            <div className="flex flex-col gap-8 flex-1">
              <div className="flex flex-col gap-2.5">
                <span className="text-[#000] font-albertSans tracking-[1.6px] uppercase mobile:text-sm sm:text-base">
                  ADDRESS
                </span>
                <span className="font-ivy sm:text-[44px] text-[32px] text-[#000]">Come</span>
                <span className="text-secondary sm:text-xl font-albertSans">
                  Kudajadri Drizzle Homestay, Kayakkandy House, MR School Road,
                  Kaniyambetta, Wayanad, Kerala - 673122, India.
                </span>
              </div>
              <div className="flex flex-col gap-2.5">
                <span className="text-[#000] text-base font-albertSans tracking-[1.6px] uppercase">
                  EMAIL
                </span>
                <span className="text-secondary text-xl font-albertSans">
                  kudajadri@ymail.com
                </span>
              </div>
              <div className="flex flex-col gap-2.5">
                <span className="text-[#000] text-base font-albertSans tracking-[1.6px] uppercase">
                  FOLLow
                </span>
                <div className="flex gap-6 items-center">
                  <a
                    href="https://www.facebook.com/kudajadrihomestay"
                    target="_blank"
                  >
                    <img src={facebookLogo} alt="" />
                  </a>
                  <a
                    href="https://www.instagram.com/kudajadrihomestay/"
                    target="_blank"
                  >
                    <img src={instaLogo} alt="" />
                  </a>
                  <a
                    href="https://twitter.com/kudajadrihomestay"
                    target="_blank"
                  >
                    <img src={twitterLogo} alt="" />
                  </a>
                  <a
                    href="https://www.threadless.com/stores/kudajadrihomestay"
                    target="_blank"
                  >
                    <img src={threadLogo} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-2.5 flex-1">
              <span className="text-[#000] mobile:text-sm sm:text-base font-albertSans tracking-[1.6px] uppercase">
                Phone
              </span>
              <span className="font-ivy sm:text-[44px] text-[32px] text-[#000]">Call</span>
              <div className="flex flex-col text-secondary sm:text-xl font-albertSans">
                <a href="tel:+91 9946 354 511">+91 9946 354 511</a>
                <a href="tel:+91 9445 855 511">+91 9445 855 511</a>
                <a href="tel:+91 9445 855 512">+91 9445 855 512</a>
                <a href="tel:+91 9445 855 513">+91 9445 855 513</a>
              </div>
            </div>
            <div className="w-full flex flex-col gap-2.5 flex-1">
              <span className="text-[#000] mobile:text-sm sm:text-base font-albertSans tracking-[1.6px] uppercase">
                message
              </span>
              <span className="font-ivy text-[44px] text-[#000]">Write</span>
              <div className="flex flex-col gap-3.5">
                <TextField label="Name" value={form.name} onChange={handleChange("name")} />
                <TextField label="Email" value={form.email} onChange={handleChange("email")} />
                <TextField label="Message" value={form.message} onChange={handleChange("message")} />
                <div>

                  <button className="px-6 py-3 rounded-full bg-primary text-[#fff] font-albertSans font-medium" onClick={handleSubmit}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-14 sm:hidden">
        <Footer />
      </div>
    </div>
  );
};


interface TextFieldProps {
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  value,
  onChange,
  placeholder = "Your Name",
}) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[#666] font-albertSans font-medium">{label}</span>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-[#BFBFBF] p-3 w-full h-[54px] rounded-lg"
      />
    </div>
  );
};
