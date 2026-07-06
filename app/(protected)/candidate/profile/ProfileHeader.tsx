import {
  Mail,
  Phone,
  MapPin,
  Eye,
} from "lucide-react";

type Props = {
  user: {
    name: string;
    email: string;
  };

  profile: {
    phone: string | null;
    location: string | null;
  } | null;
};

export default function ProfileHeader({
  user,
  profile,
}: Props) {
  return (
    <>

      <div className="flex justify-between items-start text-background">

        <div>

          <h1 className="text-5xl text-accent font-bold">
            {user.name}
          </h1>

          <div className="space-y-3 mt-8">

            <div className="flex items-center gap-4">

              <Mail
                size={22}
                className="text-gray-500"
              />

              <span className="text-lg">
                {user.email}
              </span>

            </div>

            <div className="flex items-center gap-4">

              <Phone
                size={22}
                className="text-gray-500"
              />

              <span className="text-lg">
                {profile?.phone || "Add phone number"}
              </span>

            </div>

            <div className="flex items-center gap-4">

              <MapPin
                size={22}
                className="text-gray-500"
              />

              <span className="text-lg">
                {profile?.location || "Add location"}
              </span>

            </div>

          </div>

        </div>

        <div
          className="
          h-24
          w-24
          rounded-full
          bg-gray-700
          flex
          items-center
          justify-center
          text-white
          text-3xl
          font-bold"
        >
          {user.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()}
        </div>

      </div>

      <div
        className="
        mt-10
        bg-green-50
        border
        border-green-200
        rounded-xl
        p-5
        flex
        justify-between
        items-center"
      >
        <div className="flex gap-3 items-center">

          <Eye
            className="text-green-700"
            size={22}
          />

          <span className="font-semibold text-green-900">
            Employers can find you
          </span>

        </div>

      </div>

    </>
  );
}