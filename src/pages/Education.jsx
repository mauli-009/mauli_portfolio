import RightContentWrapper from "../components/RightContentWrapper";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { MdWork as WorkIcon } from "react-icons/md";
import { FaGraduationCap as SchoolIcon } from "react-icons/fa";
import { FaStar as StarIcon } from "react-icons/fa";

const Education = () => {
  return (
    <RightContentWrapper>
      <VerticalTimeline lineColor="#4f46e5">
        {/* Experience */}


        {/* College */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education "
          date="2023 - Present"
          iconStyle={{ background: "#ef4444", color: "#fff" }}
          contentStyle={{ background: "#111827", color: "#e5e7eb" }}
          contentArrowStyle={{ borderRight: "7px solid  #111827" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title font-bold">B.Tech in Computer Engineering</h3>
          <h4 className="vertical-timeline-element-subtitle">VIT Pune</h4>
          <p>
            Studying Data Structures, Algorithms, DBMS, Web Development, and Machine Learning.
          </p>
        </VerticalTimelineElement>

        {/* HSC */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023"
          iconStyle={{ background: "#ef4444", color: "#fff" }}
          contentStyle={{ background: "#111827", color: "#e5e7eb" }}
          contentArrowStyle={{ borderRight: "7px solid  #111827" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title font-bold">HSC (12th) – Science</h3>
          <h4 className="vertical-timeline-element-subtitle">Maharashtra State Board</h4>
          <p>
            Marks: 75.00%  
            <br />
            MHT-CET: 97.89 percentile  
            <br />
            JEE Mains: 95.09 percentile
          </p>
        </VerticalTimelineElement>

        {/* SSC */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021"
          iconStyle={{ background: "#ef4444", color: "#fff" }}
          contentStyle={{ background: "#111827", color: "#e5e7eb" }}
          contentArrowStyle={{ borderRight: "7px solid  #111827" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title font-bold">SSC (10th)</h3>
          <h4 className="vertical-timeline-element-subtitle">Swami Vivekananda Vidyalaya</h4>
          <p>
            Marks: 97.6%
          </p>
        </VerticalTimelineElement>

        {/* Final Star */}
        <VerticalTimelineElement
          iconStyle={{ background: "#10b981", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </RightContentWrapper>
  );
};

export default Education;
