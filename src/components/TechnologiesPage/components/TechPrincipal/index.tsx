import { StyledTechPrincipal } from "./components/StyledTechPrincipal";
import TechPage from "../../../../json/TechPage.json";
import HTMLReactParser from "html-react-parser";
import IconAndText from "../IconAndText";
import Text from "../Text";

export default function TechPrincipal() {
  const techList = ["React", "TypeScript", "NextJS", "StyledComponents"];

  return (
    <StyledTechPrincipal>
      {techList.map((name, index) => {
        let tech = TechPage[name as keyof typeof TechPage];
        return (
          <div className="card" key={index}>
            <IconAndText>
              <div className="align_center">{HTMLReactParser(tech.svg)}</div>
              <h3>{tech.name}</h3>
            </IconAndText>
            <Text>{tech.text}</Text>
          </div>
        );
      })}
    </StyledTechPrincipal>
  );
}
