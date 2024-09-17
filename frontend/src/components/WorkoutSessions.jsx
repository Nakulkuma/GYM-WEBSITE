import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>Comprehensive Class Schedule and Descriptions</h1>
        <p>
          Highlight: An up-to-date and detailed class schedule with descriptions
          and instructor bios. Why It Matters: Customers want to know what
          classes are available, their times, and what to expect from each.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1> Exclusive Offers and Membership Benefits</h1>
        <p>
          Why It Matters: Exclusive offers can entice new customers to sign up
          and encourage existing members to stay engaged. Benefits like
          discounted rates for early sign-ups, referral bonuses, or member-only
          access to certain classes can be very appealing.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Virtual Tours and Facility Showcase.</h4>
            <p>
              Highlight: High-quality photos, videos, or virtual tours of the
              gym's facilities and equipment.
            </p>
          </div>
          <div>
            <h4>Personalized Fitness Plans and Trainer Consultations</h4>
            <p>
              Why It Matters: Offering personalized services shows that you care
              about individual fitness goals and can provide tailored advice.
              This can be a strong selling point for those who need more
              guidance and motivation.
            </p>
          </div>
          <div>
            <h4> User-Friendly Booking System and Mobile App.</h4>
            <p>
              Highlight: An easy-to-use online booking system and a mobile app
              for managing memberships and scheduling classes.
            </p>
          </div>
          <div>
            <h4>Additional Tips.</h4>
            <p>
              <ul>
                <li>
                  1 .Testimonials and Success Stories: Featuring real member
                  testimonials and success stories can help build credibility
                  and motivate potential customers.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
