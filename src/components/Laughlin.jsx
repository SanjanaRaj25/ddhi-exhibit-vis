/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { IconBlockquote } from '@tabler/icons-react';

function SingleCard({
  quote, date, person, color,
}) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className={`flip-card-front ${color}`}>
          <blockquote className="quote"> &quot;{quote}&quot; </blockquote>
          <hr />
          <p className="person">{person}, {date}</p>
        </div>
        <div className={`flip-card-back ${color}`}>
          <p className="date">{date}</p>
        </div>
      </div>
    </div>
  );
}

export function Laughlin1() {
  return (
    <SingleCard quote="I’m not sure that I paid much attention to it because, although people seemed to think that we should have known about the Vietnam War when we were matriculated in 1960, in reality I don’t think most Americans knew where the country was until long after we graduated in 1964." date="1960" person="James Laughlin" />
  );
}

export function Laughlin2() {
  return (
    <SingleCard quote="It didn’t take long for those of us who were sent there to realize that we were pawns who really had little control over what we were supposed to be doing, and the name of the game was to survive and help your buddies survive and get home in one piece." date="1968" person="James Laughlin" color="laughlin" />
  );
}

export function Laughlin3() {
  return (
    <SingleCard quote="I think that, from my own personal feelings, I’m proud of the fact that I served and the men that served with me. I regret that we were involved in a conflict that was so unpopular and didn’t really produce any positive results." date="1968" person="James Laughlin" color="laughlin" />
  );
}

export function Stanley1() {
  return (
    <SingleCard quote="I wasn’t socially against what was going on. I mean, I knew about Vietnam. Vietnam was still, in the mid-‘60s, it was still not something to be terribly concerned about. It wasn’t until right after I graduated that things started to build up and get a lot hotter." date="1960" person="Neal Stanley" color="stanley" />
  );
}

export function Stanley2() {
  return (
    <SingleCard quote="asd" person="Neal Stanley" className="stanley" date="1968" />
  );
}

export function Stanley3() {
  return (
    <SingleCard quote="qweqw" person="Neal Stanley" className="stanley" date="2015" />
  );
}

// export function Stanley3() {
//   return (
//     <SingleCard quote="" person="Neal Stanley" className="stanley" date="1960" />
//   );
// }
