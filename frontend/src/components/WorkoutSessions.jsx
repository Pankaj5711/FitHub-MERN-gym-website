import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        Transform your fitness journey with expertly designed sessions tailored to challenge and inspire. From beginners to pros, our workouts ensure progress, motivation, and results.
        </p>
        <img src="/ftm2.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Discover bootcamps that combine expert guidance, dynamic routines, and a supportive environment. Build strength, boost endurance, and achieve your fitness goals with confidence.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Strength Training Bootcamp</h4>
            <p>
            Build muscle and improve your overall strength with our specialized strength training sessions. Perfect for all fitness enthusiasts.
            </p>
          </div>
          <div>
            <h4>Cardio Blast Bootcamp</h4>
            <p>
            Burn calories and boost your stamina with our high-energy cardio workouts. Get ready to sweat and feel the burn!
            </p>
          </div>
          <div>
            <h4>Yoga and Flexibility Bootcamp</h4>
            <p>
            Enhance your flexibility and find your inner peace with our yoga-focused bootcamps. A perfect balance of mind and body.
            </p>
          </div>
          <div>
            <h4>HIIT Bootcamp</h4>
            <p>
            Experience the ultimate calorie-burning workout with our High-Intensity Interval Training sessions. Quick, effective, and results-driven.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
