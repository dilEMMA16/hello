import React from 'react';
import { WorkDiv, BriefCaseIcon, WorkHeading3, RoleDiv, TextDiv, DateParagraph, EmployerParagraph } from './WorkStyles';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import Grid from '@material-ui/core/Grid';


function Work() {

    return (
      <WorkDiv>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <RoleDiv>
                    <BriefCaseIcon icon={faBriefcase}/>
                    <TextDiv>
                        <WorkHeading3>
                            Technology Leadership Program
                        </WorkHeading3>
                        <EmployerParagraph>Target Corporation</EmployerParagraph>
                        <DateParagraph>/* July 2019 - August 2020 */</DateParagraph>
                    </TextDiv>
                </RoleDiv>
            </Grid>
            <Grid item xs={12} md={6}>
                <RoleDiv>
                    <BriefCaseIcon icon={faBriefcase}/>
                    <TextDiv>
                        <WorkHeading3>
                            STEM Program Coordinator
                        </WorkHeading3>
                        <EmployerParagraph>uCodeGirl</EmployerParagraph>
                        <DateParagraph>/* February 2019 - June 2019 */</DateParagraph>
                    </TextDiv>
                </RoleDiv>
            </Grid>
            <Grid item xs={12} md={6}>
                <RoleDiv>
                    <BriefCaseIcon icon={faBriefcase}/>
                    <TextDiv>
                        <WorkHeading3>
                            Software Engineering Intern
                        </WorkHeading3>
                        <EmployerParagraph>Target Corporation</EmployerParagraph>
                        <DateParagraph>/* June 2018 - August 2018 */</DateParagraph>
                    </TextDiv>
                </RoleDiv>
            </Grid>
            <Grid item xs={12} md={6}>
                <RoleDiv>
                    <BriefCaseIcon icon={faBriefcase}/>
                    <TextDiv>
                        <WorkHeading3>
                            Software Development Intern
                        </WorkHeading3>
                        <EmployerParagraph>U.S. Bancorp</EmployerParagraph>
                        <DateParagraph>/* May 2017 - August 2017 */</DateParagraph>
                    </TextDiv>
                </RoleDiv>
            </Grid>
            <Grid item xs={12} md={6}>
                <RoleDiv>
                    <BriefCaseIcon icon={faBriefcase}/>
                    <TextDiv>
                        <WorkHeading3>
                            NDSU Capstone Project Consultant
                        </WorkHeading3>
                        <EmployerParagraph>OmniByte Technology</EmployerParagraph>
                        <DateParagraph>/* January 2018 - May 2018 */</DateParagraph>
                    </TextDiv>
                </RoleDiv>
            </Grid>
            <Grid item xs={12} md={6}>
                <RoleDiv>
                    <BriefCaseIcon icon={faBriefcase}/>
                    <TextDiv>
                        <WorkHeading3>
                            Java Learning Assistant
                        </WorkHeading3>
                        <EmployerParagraph>NDSU College of Science and Mathematics</EmployerParagraph>
                        <DateParagraph>/* August 2017 - December 2018 */</DateParagraph>
                    </TextDiv>
                </RoleDiv>
            </Grid>
          </Grid>
      </WorkDiv>
    )

}

export default Work;
