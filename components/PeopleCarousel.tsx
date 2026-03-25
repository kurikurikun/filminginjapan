import Image from "next/image";

const BASE = "https://cdn.prod.website-files.com/65c60819f2a21ac92eda0d4d/";

const people = [
  "674e6647776fdbeaf8901cb9_tokyo_filming_video_japan_people_1.jpg",
  "674e66479f77c492b9d1fe13_tokyo_filming_video_japan_people_2.jpg",
  "674e7aecaffca76bf6ad0086_japan_filming_people_3.png",
  "674e7aec64276821e2de0e4c_japan_filming_people_4.png",
  "674e66488cf8c58ed41be765_tokyo_filming_video_japan_people_5.jpg",
  "674e6648bb25a48ff6195a4d_tokyo_filming_video_japan_people_6.jpg",
  "674e6648776fdbeaf8901da3_tokyo_filming_video_japan_people_7.jpg",
  "674e663cc0e98c2fda6589c7_tokyo_filming_video_japan_people_10.png",
  "674e663d74f6b6fdc5ea2059_tokyo_filming_video_japan_people_11.png",
  "674e663c82ca17981e32f407_tokyo_filming_video_japan_people_12.png",
  "674e6648c0e98c2fda6590bc_tokyo_filming_video_japan_people_13.jpg",
  "674e663c57d5f259f4b0c4b9_tokyo_filming_video_japan_people_14.png",
  "674e664764fdaa02a6544c0e_tokyo_filming_video_japan_people_16.jpg",
  "674e6647ab43d8216f2d3dd5_tokyo_filming_video_japan_people_17.jpg",
  "674e663dab43d8216f2d379d_tokyo_filming_video_japan_people_18.png",
  "674e6648d88cc0a2b80b6074_tokyo_filming_video_japan_people_19.jpg",
  "674e7e4301c531ba9ddf0c54_japan_filming_people_20.png",
  "674e7e43af5d01b04c548e4e_japan_filming_people_21.png",
  "674e6648c46e9558e40e41fb_tokyo_filming_video_japan_people_22.jpg",
  "674e6648ef0e09717e836ee9_tokyo_filming_video_japan_people_24.jpg",
  "674e6647c46e9558e40e418a_tokyo_filming_video_japan_people_27.jpg",
  "674e6647760826341c8f6d95_tokyo_filming_video_japan_people_30.jpg",
  "674e722382ca17981e3d23c9_tokyo_filming_video_japan_people_34.png",
  "674e72237db69f17aaab9339_tokyo_filming_video_japan_people_35.png",
  "674e6649dd79d491ef813c0f_tokyo_filming_video_japan_people_37.jpg",
  "674e66482d53ac82c64aff81_tokyo_filming_video_japan_people_39.jpg",
  "674e6649760826341c8f7032_tokyo_filming_video_japan_people_40.jpg",
  "674e6d86782cbe659804627b_tokyo_filming_video_japan_people_43.jpg",
  "674e73861ca3b15ecc51438b_tokyo_filming_video_japan_people_44.png",
  "674e738539447050ee7b353c_tokyo_filming_video_japan_people_45.png",
];

const row1 = people.slice(0, 15);
const row2 = people.slice(15);

export default function PeopleCarousel() {
  return (
    <section style={{ backgroundColor: "#0d0a07", overflow: "hidden" }} className="py-20 lg:py-28">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 mb-14">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-12" style={{ backgroundColor: "#e95228" }} />
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>
            The people we film
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-black leading-none" style={{ color: "#fdf8f3" }}>
          This is our Japan<span style={{ color: "#e95228" }}>.</span>
        </h2>
      </div>

      {/* Row 1 — scrolls left */}
      <div
        className="relative mb-3"
        style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}
      >
        <div className="flex people-scroll-left" style={{ width: "max-content", gap: "12px" }}>
          {[...row1, ...row1].map((filename, i) => (
            <div key={i} className="relative shrink-0" style={{ width: "280px", height: "158px" }}>
              <Image
                src={`${BASE}${filename}`}
                alt="Filming in Japan — person filmed"
                fill
                className="object-cover"
                sizes="280px"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div
        className="relative"
        style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}
      >
        <div className="flex people-scroll-right" style={{ width: "max-content", gap: "12px" }}>
          {[...row2, ...row2].map((filename, i) => (
            <div key={i} className="relative shrink-0" style={{ width: "280px", height: "158px" }}>
              <Image
                src={`${BASE}${filename}`}
                alt="Filming in Japan — person filmed"
                fill
                className="object-cover"
                sizes="280px"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
