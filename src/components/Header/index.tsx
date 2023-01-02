import { HeaderButton, HeaderButtonContainer, HeaderContainer } from "./styles";
import logoCoffeImg from "../../assets/logo-coffee.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <div>
      <HeaderContainer>
        <div className="container">
          <img src={logoCoffeImg} />

          <HeaderButtonContainer>
            <HeaderButton>
              <MapPin size={20} weight="fill" />
              Jundiaí, SP
            </HeaderButton>

            <HeaderButton>
              <ShoppingCart size={20} />
            </HeaderButton>
          </HeaderButtonContainer>
        </div>
      </HeaderContainer>
    </div>
  );
}
