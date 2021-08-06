import { CelebrationProvider } from "./Celebration";
import { GraduationProvider } from "./Graduation";
import { WeddingProvider } from "./Wedding";

const Providers = ({ children }) => {
  return (
    <CelebrationProvider>
      <GraduationProvider>
        <WeddingProvider>{children}</WeddingProvider>
      </GraduationProvider>
    </CelebrationProvider>
  );
};

export default Providers;
