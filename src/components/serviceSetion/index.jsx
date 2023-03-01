import React, { memo } from "react";
import { ServiceSetionWrapper } from "./style";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "../../store/modules/service";
const ServiceSetion = memo((props) => {
  const {
    setionIndex,
    data: { title, subtitle, imgSrc, liTitle, lis, pTitle, p1, p2 },
  } = props;
  const { current } = useSelector((state) => ({
    current: state.service.current,
  }));
  const dispatch = useDispatch();
  const handleMouse = () => {
    dispatch(setCurrent(setionIndex));
  };
  const isShow = setionIndex === current;
  return (
    <ServiceSetionWrapper>
      <div
        className={classNames("task_type_plate", { active: isShow })}
        onMouseEnter={() => handleMouse()}
      >
        <img className="task_type_plate_img" src={imgSrc} alt=""></img>
        {/* 初次展示的部分 */}
        {!isShow && (
          <div className="task_type_plate_init">
            <p className="task_type_plateinit_title">{title}</p>
            <p className="task_type_plateinit_s_title">{subtitle}</p>
            <p className="task_type_plateinit_content">{liTitle}</p>
            <ul className="task_type_plateinit_msglist">
              {lis.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* 鼠标悬浮展示的部分 */}
        {isShow && (
          <div className="task_type_plate_active">
            <div className="task_type_plateactive_img">
              <img
                src="https://static.500d.me/resources/500d/hr/images/hr_service_zygh_bg.png"
                alt=""
              />
            </div>
            <p className="task_type_plateactive_title">{pTitle}</p>
            <p
              className="task_type_plateactive_msg"
              dangerouslySetInnerHTML={{ __html: p1 }}
            ></p>
            <p
              className="task_type_plateactive_msg"
              dangerouslySetInnerHTML={{ __html: p2 }}
            ></p>
            <a
              href="
            "
              className="publishNeed"
            >
              发布需求
            </a>
          </div>
        )}
      </div>
    </ServiceSetionWrapper>
  );
});

export default ServiceSetion;
