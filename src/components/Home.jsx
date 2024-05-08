/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { IconBlockquote } from '@tabler/icons-react';

function SingleCard({
  quote, date, person, align,
}) {
  return (
    <div className={`card ${align}`}>
      <IconBlockquote className="i" />
      <blockquote className="quote">{quote}</blockquote>
      <hr />
      <div className="bottom">
        <p>{date}</p>
        <p>{person}</p>
      </div>
    </div>
  );
}

function CardExampleGroups() {
  return (
    <div className="gallery">
      <SingleCard quote="Well, most of the Ivy League schools and a number of other colleges and universities eliminated their ROTC programs as a result of the Vietnam War, and I think that was a mistake, but it was part and parcel of the time, so I’m not sure that we could have avoided that. I always felt that—and I feel to this day—that having liberal arts students from schools like Dartmouth or Cornell or NYU [New York University] adds a leavening experience to the military that you don’t get from having your officer corps comprised solely of [U.S. Military Academy at] West Point graduates or Annapolis [U.S. Naval Academy] graduates and OCS graduates, Officer Candidate School graduates, who are already members of the service." date="2015" person="James Laughlin" align="align-1" />
      <SingleCard quote="I think we were very naïve in that we did not pay much attention to it. There was very little that was being reported back to the U.S. by the press. I think they were suppressed in what they could and could not send back. I remember distinctly when they started using [Grumman] A-6 Intruder aircraft for bombing Vietnam, and I thought, Well, that’s nice. That’ll end that conflict real fast. But I don’t think I or any of my classmates paid much attention to it, but part of that was due to the fact that we were so focused in on our law school requirements and passing the bar exam that we kind of pushed that other stuff aside." date="1964-1967" person="James Laughlin" align="align-2" />
      <SingleCard quote="I think we all felt that sooner or later we were going to be drafted, and my personal feeling, and I think a lot of my classmates shared this, was that we would be better off serving our country as officers than as enlisted men or draftees." date="1960-1964" person="James Laughlin" align="align-3" />
      <SingleCard quote="I’m not sure that I paid much attention to it because, although people seemed to think that we should have known about the Vietnam War when we were matriculated in 1960, in reality I don’t think most Americans knew where the country was until long after we graduated in 1964. Even when I was in law school, I didn’t pay that much attention to what was going on in Vietnam, although what was happening was shaping a radical change in the fabric of our society and our government" date="1960" person="James Laughlin" align="align-4" />
      <SingleCard quote="..." date="2015" person="James Laughlin" align="align-5" />
      <SingleCard quote="..." date="2015" person="James Laughlin" align="align-6" />
      <SingleCard quote="..." date="2015" person="James Laughlin" align="align-7" />
      <SingleCard quote="..." date="2015" person="James Laughlin" align="align-8" />
      <SingleCard quote="..." date="2015" person="James Laughlin" align="align-9" />
      <SingleCard quote="..." date="2015" person="James Laughlin" align="align-10" />
    </div>
  );
}

export default function Home() {
  return (
    <CardExampleGroups />
  );
}
