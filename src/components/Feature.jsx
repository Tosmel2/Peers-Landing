import React from 'react'
import FeatureRendered from './FeatureRendered'
import FeatureRendered2 from './FeatureRendered2'
// import image13 from '../../src/assets/image13.png';
import img1 from '../../src/assets/img1.png';
import img2 from '../../src/assets/img2.png';
import img3 from '../../src/assets/img3.png';
import img4 from '../../src/assets/img4.png';
import img5 from '../../src/assets/img5.png';
import Box from './Box'

const Feature = () => {
  return (
    <div>
      <div className='text-center'>
        <h2 className='text-3xl font-bold mb-4'><span className='text-[#FA771B]'>Our</span> <span className='text-[#020279]'>Features</span></h2>
        <p className='text-[#696984] mb-4'>This very extraordinary feature, can make learning activities more efficient</p>
      </div>
      <div>
        <FeatureRendered 
        featureImage={img5} 
        headingText={'A user interface designed for the classroom'} 
        smallText={'Class has a dynamic set of teaching tools built to be deployed and used during class. Tachers can handout assignments in real-time for students to complete and submit. '} 
        />

        <FeatureRendered2
        headingText={'Tools For Teachers And Learners'} 
        smallText={'Class has a dynamic set of teaching tools built to be deployed and used during class. Tachers can handout assignments in real-time for students to complete and submit. '} 
        featureImage={img2}
        />

        <FeatureRendered
        headingText={'Class Management Tools for Educators'} 
        smallText={'Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time. '} 
        featureImage={img3}
        />

        <FeatureRendered2
        headingText={'Tools For Teachers And Learners'} 
        smallText={'Class has a dynamic set of teaching tools built to be deployed and used during class. Tachers can handout assignments in real-time for students to complete and submit. '} 
        featureImage={img4}
        />

        <FeatureRendered 
        featureImage={img1} 
        headingText={'Assessments, Quizzes, Tests'} 
        smallText={'Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.'} />

      </div>
      <div className="flex justify-center">
        <Box />
      </div>
    </div>
  )
}

export default Feature