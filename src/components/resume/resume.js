import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.YearOfPassing}</em></p>
                          <h4>Coursework:</h4>
                          <p>
                          
                          {item.Coursework}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.Year}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>
         <div className="row work">
            <div className="three columns header-col">
               <h1><span>Languages</span></h1>
            </div>


            <div className="nine columns main-col">
              {
                resumeData.languages && resumeData.languages.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <p className="info">
                          {item.languageName}
                          <span> - </span> {item.description}</p>
                        
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">


   				<div className="bars">

   				   <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li>
                     <em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>
 <div className="row skill">
 <div className="six columns">
           </div>
            <div className="six columns header-col">
            <a href={resumeData.fullResume} download>
                <h1><span>Download My Full Resume <i className="fa fa-download" /></span></h1>
          </a>
              
            </div>
      </div>
      </div>

      </section>
    );
  }
}
