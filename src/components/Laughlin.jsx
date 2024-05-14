/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { IconBlockquote } from '@tabler/icons-react';

function SingleCard({
  quote, date, person, align, texture,
}) {
  return (
    <div className={`card ${align} ${texture}`}>
      <IconBlockquote className="i" />
      <blockquote className="quote">{quote}</blockquote>
      <hr />
      <div className="bottom">
        <p className="date">{date}</p>
        <p>{person}</p>
      </div>
    </div>
  );
}

function CardExampleGroups() {
  return (
    <div className="page">
      <div className="legend">
        <p className="label">anti war</p>
        <div className="circle align-1" /> <div className="circle align-2" /> <div className="circle align-3" /> <div className="circle align-4" /> <div className="circle align-5" /> <div className="circle align-6" /> <div className="circle align-7" /> <div className="circle align-8" /> <div className="circle align-9" /> <div className="circle align-10" />
        <p className="label">pro war</p>
      </div>
      <div className="gallery">
        {/* james laughlin */}
        <div className="layer-5"><SingleCard quote="I always felt that—and I feel to this day—that having liberal arts students from schools like Dartmouth or Cornell or NYU [New York University] adds a leavening experience to the military that you don’t get from having your officer corps comprised solely of West Point graduates." date="2015" person="James Laughlin" align="align-7" texture="texture-5" /></div>
        <div className="layer-2"><SingleCard quote="I think we were very naïve in that we didn’t pay much attention to it. There was very little that was being reported back to the U.S. by the press. I think they were suppressed in what they could and could not send back." date="1964-1967" person="James Laughlin" align="align-6" texture="texture-2" /></div>
        <div className="layer-2"><SingleCard quote="I think we all felt that sooner or later we were going to be drafted, and my personal feeling, and I think a lot of my classmates shared this, was that we would be better off serving our country as officers than as enlisted men or draftees." date="1960-1964" person="James Laughlin" align="align-5" texture="texture-1" /></div>

        <div className="layer-2"><SingleCard quote="I don’t think most Americans knew where the country was until long after we graduated in 1964. Even when I was in law school, I didn’t pay that much attention to what was going on in Vietnam, although what was happening was shaping a radical change in the fabric of our society and our government" date="1960" person="James Laughlin" align="align-5" texture="texture-1" /></div>
        <div className="layer-2"><SingleCard quote="They were neutral. They didn’t express much of an opinion one way or the other, although when I finally got sent to Vietnam in 1967, they were adamantly opposed to the war. As was I." date="1967" person="James Laughlin" align="align-2" texture="texture-2" /></div>
        <div className="layer-2"><SingleCard quote="I never really thought about it until I was ordered to active duty at Fort Benning, Georgia. And from the day we got there, all that people talked about was Vietnam. I said to myself, What are they so concerned about? It’s just a tiny little conflict in a tiny little country in Indochina, what used to be French Indochina." date="1967" person="James Laughlin" align="align-6" texture="texture-2" /></div>

        <div className="layer-2"><SingleCard quote="I think what was being filtered back to the American public in 1967, when I went on active duty, was a sanitized version of what was actually taking place and that these troop buildups that we were experiencing, which were supposed to be temporary, became permanent and more bloody as time went on." date="1967" person="James Laughlin" align="align-3" texture="texture-2" /></div>
        <div className="layer-2"><SingleCard quote="The whole operational plan was flawed. I don’t think that, given the constraints under which we were operating, that the war was winnable." date="2015" person="James Laughlin" align="align-3" texture="texture-5" /></div>
        <div className="layer-2"><SingleCard quote=" It didn’t take long for those of us who were sent there to realize that we were pawns who really had little control over what we were supposed to be doing, and the name of the game was to survive and help your buddies survive and get home in one piece." date="2015" person="James Laughlin" align="align-1" texture="texture-5" /></div>

        <div className="layer-2"> <SingleCard quote="The first time that I really sat up and said, Whoa, there’s something wrong here was when we got hit with the Tet Offensive in 1968, the first time we were under heavy enemy attack. " date="1968" person="James Laughlin" align="align-3" texture="texture-2" /></div>
        <div className="layer-2"><SingleCard quote="I think that the American soldier, by and large, did a remarkable job of fighting under very adverse conditions in a very ferocious war." date="1968" person="James Laughlin" align="align-5" texture="texture-2" /></div>
      </div>

    </div>
  );
}

export default function Laughlin() {
  return (
    <CardExampleGroups />
  );
}
