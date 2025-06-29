// src/components/ProfileCard.jsx
import Tilt from "react-parallax-tilt";

const ProfileCard = ({ platform, stats, image, profileLink }) => {
  return (
    <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.02} transitionSpeed={400}>
      <div className="rounded-xl bg-black/30 border border-gray-700 backdrop-blur-md shadow-lg flex flex-col sm:flex-row overflow-hidden min-h-[200px] hover:scale-[1.02] transition">

        {/* Image Section */}
        <div className="w-full sm:w-[30%] flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-gray-700">
          <img
            src={image}
            alt={platform}
            className="h-24 sm:h-32 w-auto object-contain"
          />
        </div>

        {/* Content Section */}
        <div className="w-full sm:w-[70%] p-6 flex flex-col justify-between text-white">
          <div className="space-y-1">
            <h3 className="text-xl font-bold">{platform}</h3>
            {stats.map((item, idx) => (
              <p key={idx} className="text-sm text-white/80">{item}</p>
            ))}
          </div>

          <a
            href={profileLink}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow transition w-fit"
          >
            Visit Profile →
          </a>
        </div>
      </div>
    </Tilt>
  );
};

export default ProfileCard;
