import { Dashboard } from "@/components/dashboard";
import { Header } from "@/components/header";
import { FreeSpin } from "@/components/freeSpin";
import { CustomerData } from "@/components/customerData";
import { CardsProfile } from "@/components/cards";
import { DeliverDataIssues } from "@/components/dataProblems";
import { BrandNavBussiness } from "@/components/brandNavBussiness";
import { RatingCards } from "@/components/ratingCards";
import { UsersQuestionsData } from "@/components/userQuestions";
import { FreeBrandNav } from "@/components/freeDay";
import { FooterSection } from "@/components/footer";
export default function Home() {
  return (
    <div className="py-5 bg-[url('../public/images/background.svg')]">
      <Header  />
      <Dashboard />
      <FreeSpin />
      <CustomerData />
      <CardsProfile />
      <DeliverDataIssues />
      <BrandNavBussiness />
      <RatingCards />
      <UsersQuestionsData />
      <FreeBrandNav />
      <FooterSection />
    </div>
  );
}
