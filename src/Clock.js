import React, { Fragment } from "react";

import * as S from "./Clock-styles";

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <Fragment>
      <section className="timer-container">
        <section className="timer">
          <S.ClockContainer>
            <section>
              <p>{timerDays}</p>
              <small>Dias</small>
            </section>
            <span>:</span>
            <section>
              <p>{timerHours}</p>
              <small>Horas</small>
            </section>{" "}
            <span>:</span>
            <section>
              <p>{timerMinutes}</p>
              <small>Min</small>
            </section>{" "}
            <span>:</span>
            <section>
              <p>{timerSeconds}</p>
              <small>Sec</small>
            </section>
          </S.ClockContainer>
        </section>
      </section>
    </Fragment>
  );
};

Clock.defaultProps = {
  timerDays: 0,
  timerHours: 0,
  timerMinutes: 0,
  timerSeconds: 0
};

export default Clock;
