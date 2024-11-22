import { FC } from "react";

export const Copyright: FC = () => {
  return (
    <div className="w-full bg-green-600 py-3">
      <p className="ps-4 text-sm text-white">
        © {new Date().getFullYear()} Asset Avenue. All rights reserved.
      </p>
    </div>
  );
};
