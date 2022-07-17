import React from "react";
import { Inject,ScheduleComponent,Day,Week,WorkWeek,Month,Agenda, ViewsDirective, ViewDirective } from "@syncfusion/ej2-react-schedule";

const Scheduler = () => {


  return (
    <div className="px-40 py-10 bg-gradient-to-b from-blue-200 to-white-500">
      <ScheduleComponent currentView='Month' selectedDate={new Date(2022, 6, 16)}>
        <ViewsDirective>
          <ViewDirective option='Day'></ViewDirective>
          <ViewDirective option='Week'></ViewDirective>
          <ViewDirective option='Month'></ViewDirective>
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </div>
  );
};

export default Scheduler;
