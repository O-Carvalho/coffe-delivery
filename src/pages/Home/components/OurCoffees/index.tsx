import { TitleText } from "../../../../components/Typografy";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeList, OurCoffeesContainer } from "./styles";

export function OurCoffees() {
  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>

      <CoffeList>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CoffeList>
    </OurCoffeesContainer>
  );
}
