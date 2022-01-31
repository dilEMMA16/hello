import React from "react";
import {
  faVenus,
  faPenFancy,
  faPaintBrush,
  faBookOpen,
  faUserAlt,
  faSeedling
} from "@fortawesome/free-solid-svg-icons";
import Grid from "@material-ui/core/Grid";
import {
  CodeButton,
  CodeHeading,
  CodeParagraph,
  CardIcon,
  CodeDiv,
  CodeTextDiv,
  CodeLink,
} from "./CodeStyles";

function Code() {
  return (
    <CodeDiv id="code">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={4}>
          <CodeLink href="https://dilemma16.github.io/gradient/">
            <CodeButton>
              <CodeTextDiv>
                <CodeHeading>Gradient Generator</CodeHeading>
                <CodeParagraph>
                  Quick tool for creating random gradients to implement with CSS
                </CodeParagraph>
              </CodeTextDiv>
              <CardIcon icon={faPaintBrush} />
            </CodeButton>
          </CodeLink>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <CodeLink href="https://dilemma16.github.io/webdevguide/webdevresource.html">
            <CodeButton>
              <CodeTextDiv>
                <CodeHeading>Web Dev Resource</CodeHeading>
                <CodeParagraph>
                  Website resource collection for uCodeGirl
                </CodeParagraph>
              </CodeTextDiv>
              <CardIcon icon={faBookOpen} />
            </CodeButton>
          </CodeLink>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <CodeLink href="https://dilemma16.github.io/UXUI/">
            <CodeButton>
              <CodeTextDiv>
                <CodeHeading>UX / UI Resource</CodeHeading>
                <CodeParagraph>
                  User Experience/Interface Design Resource for uCodeGirl
                </CodeParagraph>
              </CodeTextDiv>
              <CardIcon icon={faUserAlt} />
            </CodeButton>
          </CodeLink>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <CodeLink href="https://dilemma16.github.io/inspiher/webrevampPLAYcolors/revamp.html">
            <CodeButton>
              <CodeTextDiv>
                <CodeHeading>InspiHer</CodeHeading>
                <CodeParagraph>
                  Website to introduce and inspire girls to learn more about
                  coding  (throwback from Web Design 101 course)
                </CodeParagraph>
              </CodeTextDiv>
              <CardIcon icon={faVenus} />
            </CodeButton>
          </CodeLink>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <CodeLink href="https://dilemma16.github.io/">
            <CodeButton>
              <CodeTextDiv>
                <CodeHeading>Poetree</CodeHeading>
                <CodeParagraph>
                  Random haiku generator site (throwback as my first personal coding project)
                </CodeParagraph>
              </CodeTextDiv>
              <CardIcon icon={faPenFancy} />
            </CodeButton>
          </CodeLink>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <CodeLink href="https://dilemma16.github.io/plantbebes/bebes/">
            <CodeButton>
              <CodeTextDiv>
                <CodeHeading>Plant Bebes</CodeHeading>
                <CodeParagraph>
                  Hugo site to keep track of all my plants
                </CodeParagraph>
              </CodeTextDiv>
              <CardIcon icon={faSeedling} />
            </CodeButton>
          </CodeLink>
        </Grid>
      </Grid>
    </CodeDiv>
  );
}

export default Code;
