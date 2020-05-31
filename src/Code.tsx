import React from "react";
import {
  faVenus,
  faPenFancy,
  faGamepad,
  faBookOpen,
  faUserAlt,
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
          <CodeLink href="https://dilemma16.github.io/inspiher/webrevampPLAYcolors/revamp.html">
            <CodeButton>
              <CodeTextDiv>
                <CodeHeading>InspiHer</CodeHeading>
                <CodeParagraph>
                  Website to introduce and inspire girls to learn more about
                  coding
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
                  Website to introduce and inspire girls to learn more about
                  coding
                </CodeParagraph>
              </CodeTextDiv>
              <CardIcon icon={faPenFancy} />
            </CodeButton>
          </CodeLink>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <CodeLink href="http://students.cs.ndsu.nodak.edu/~mekhtiev/final_game/?canvas=1">
            <CodeButton>
              <CodeTextDiv>
                <CodeHeading>Heart of Darkness</CodeHeading>
                <CodeParagraph>
                  Game from six veggie-inspired college students
                </CodeParagraph>
              </CodeTextDiv>
              <CardIcon icon={faGamepad} />
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
      </Grid>
    </CodeDiv>
  );
}

export default Code;
