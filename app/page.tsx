import { HeaderNavigation } from "@/components/header-navigation/HeaderNavigation";
import { HeaderNavigationMobile } from "@/components/header-navigation/HeaderNavigationMobile";
import { LogoWithContact } from "@/components/logo-with-contact/LogoWithContact";

export default function Home() {
  return (
    <div className="w-full">
      <div className="bg-grey h-12 flex items-center max-md:bg-white">
        <div className="container">
          <HeaderNavigation />
          <HeaderNavigationMobile />
        </div>
      </div>

      <div className="container max-md:hidden">
        <LogoWithContact />
      </div>
    </div>
  );
}
