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
    <SingleCard quote="I’m not sure that I paid much attention to it because, although people seemed to think that we should have known about the Vietnam War when we were matriculated in 1960, in reality I don’t think most Americans knew where the country was until long after we graduated in 1964." date="1960" person="James Laughlin" color="laughlin" />
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
    <SingleCard quote="Fortunately, I only had to spend a year there. If I were like the Vietnamese and had to spend my entire adult life fighting those kinds of situations, you’d get demoralized. You had the chance of getting very demoralized, especially if you kept losing. And that was the case with the ARVN troops. And you’re fighting a group of people that were committed. They were 100% committed to what they were doing. They weren’t afraid to die. They believed in a cause, and I’m talking about the National Liberation Front or Viet Cong. Viet Cong was a word that we invented. But, they were committed to that, and they were going to do whatever it needed to be, including giving their own lives to the process that was going on. So, yeah, it was pretty clear when I was there." person="Neal Stanley" color="stanley long-quote" />
  );
}

export function Stanley3() {
  return (
    <SingleCard quote="But I really… you know, when you think about the impact that this whole experience had on my life, one year out of my life, but what a tremendous impact that it had on everything that I’ve done since that particular point in time, good and bad, you need to recognize it. You need to go through it. You need to analyze it. You need to say, okay, what happened to you during that period of time? Why do you feel the way you feel today, and what did you get out of that situation that you were in that made you the kind of person that you are today? How can you help somebody else that’s going through the same kind of thing? How do you use that in recognizing the kinds of things that are going on today in the world, and give some perspective of that? And don’t mask it all and don’t be fooled by what’s being told you. Your own instincts, your own– what you’re experiencing, what you have experienced, gives you good reason to question, judge—not judge, but to question what’s going on inside of, you know, whether we’re in Afghanistan or Iraq or you name the theater that we’re in, and why are those things occurring? And are we doing the same kinds of things again? So you need to raise your awareness of those things. And all of that now is coming out more and more." person="Neal Stanley" color="stanley long-quote" date="2015" />
  );
}

export function Beers1() {
  return (
    <SingleCard quote="I don’t remember having a sense beyond the advisors, that there was actually going to be a combat unit deployed to Vietnam until the Marines were deployed to protect the Da Nang airfield." person="Rand Beers" color="beers" date="1965" />
  );
}

export function Beers2() {
  return (
    <SingleCard quote="So, during the entire time I was in Vietnam, based on studying history here at Dartmouth, understanding the Cold War sense, I was very much fully supportive of the Administration’s position about why we were in Vietnam to prevent Communism from taking over the rest of Vietnam in order to try to maintain the broader containment policy of successive administrations to not allow the Russians or the Communist monolith to encroach further on the Free World. As I reflect back, I don’t know whether at that point in time I understood that China and the Soviet Union were not on the same wavelength, and that it was really mostly or all Russian support for the North Vietnamese, and China was more of a hands off kind of participant to the extent that there was any participation on their part, given the history between Vietnam and China, and their natural antipathy, ethnic antipathy, whatever you want to—however you want to describe that. I cannot recall that I understood that at that particular point in time, although that may have finally penetrated when I became a company commander in the last six months that I was in Vietnam" person="Rand Beers" color="beers long-quote" date="1968" />
  );
}

export function Beers3() {
  return (
    <SingleCard quote="So, I come back from Vietnam thinking, you know, We are in this war because the Pentagon was given freedom of action and it doesn’t seem to me that the State Department was a very loud voice at the table to talk about alternatives other than use of force. And why is that? Don’t they have enough people who can argue military strategy credibly with the Pentagon, now or in the future" person="Rand Beers" color="beers long-quote" date="1967" />
  );
}

export function Chilcote1() {
  return (
    <SingleCard quote="What we knew at that point is that it was likely that [President Lyndon B.] Johnson was going to increase the troop levels and that we were going to get more deeply involved. We didn’t know what that meant. At that point, we thought the country was fully behind the Vietnam War. It was being talked about similar to Korea. There was a Cold War mentality in which, you know, they would talk about the domino effect, that if—as you know, China was heavily involved in the Korean War, and it was assumed that China would be involved in any war in Vietnam." person="Lee Chilcote" color="chilcote" date="" />
  );
}

export function Chilcote3() {
  return (
    <SingleCard quote="It’s been a hard—for us that served, it just was sort of a confusing situation. We went with patriotic feelings, and we feel we did our service. I think most of us were not at all antiwar. I think every one of us hates war. There’s no question about that. No one loves war. No one loves to be in a war. But the idea that you would lump your troops in with the antiwar feelings was something I guess I really don’t understand to this day." person="Lee Chilcote" color="chilcote" />
  );
}

export function Chilcote2() {
  return (
    <SingleCard quote="When I left, essentially I was out of contact with any news. Maybe not as early as June ’65 but certainly by December of ’65, because I was at Camp Pendleton, and you know, you get Stars and Stripes, which was the military newspaper, which was all how we were doing in Vietnam and the build-up of troops. And my latest learnings at that point of time were that this country was behind the war. So I learned nothing in Vietnam at all." person="Lee Chilcote" color="chilcote" date="" />
  );
}

// export function Stanley3() {
//   return (
//     <SingleCard quote="" person="Neal Stanley" className="stanley" date="1960" />
//   );
// }