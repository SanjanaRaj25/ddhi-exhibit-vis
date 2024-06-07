/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  Card, Image, Text, Badge, Button, Group, Center, Divider,
} from '@mantine/core';
import { IconBlockquote } from '@tabler/icons-react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import placeholder from '../pictures/placeholder.png';
import laughlin1 from '../pictures/laughlin1.jpeg';
import laughlin3 from '../pictures/laughlin3.png';
import stanley1 from '../pictures/stanley1.jpeg';
import stanley3 from '../pictures/stanley3.jpeg';
import beers2 from '../pictures/beers2.jpeg';
import beers3 from '../pictures/beers3.jpeg';
import chilcote1 from '../pictures/chilcote1.png';
import chilcote2 from '../pictures/chilcote2.png';

export function QuoteCard({
  quote, date, person, color, link, audio, image, fontsize,
}) {
  return (
    <Card className={`card ${color}`} shadow="sm" padding="lg" radius="md">

      <Card.Section>
        <Center>
          <Image
            className="pic"
            alt="narrator"
          />
        </Center>
      </Card.Section>

      <Group justify="center" mt="md" mb="xs">
        <Text c="white" fw={500}>{person}</Text>
      </Group>

      <Text size={fontsize} c="white">
        &quot;{quote}&quot;
      </Text>

      <Card.Section>
        <AudioPlayer
          src={audio}
          onPlay={(e) => console.log('onPlay')}
        />
      </Card.Section>
    </Card>
  );
}

export function Laughlin1() {
  return (
    <QuoteCard
      quote="I’m not sure that I paid much attention to it… in reality I don’t think most Americans knew where the country was until long after we graduated in 1964.…"
      date="1960"
      person="James Laughlin"
      color="laughlin laughlin1"
      fontsize="38px"
      link="https://dvp.dartmouth.edu/s/dvp/item/84"
      audio="https://rcweb.dartmouth.edu/DDHI/histories/laughlin_james/laughlin_james_clip.mp3"
    />
  );
}

export function Laughlin2() {
  return (
    <QuoteCard
      quote="… we were pawns who really had little control over what we were supposed to be doing, and the name of the game was to survive and help your buddies survive and get home in one piece."
      person="James Laughlin"
      color="laughlin laughlin2"
      fontsize="44px"
      link="https://dvp.dartmouth.edu/s/dvp/item/84"
      audio="https://rcweb.dartmouth.edu/DDHI/histories/laughlin_james/laughlin_james_clip2.mp3"
    />
  );
}

export function Laughlin3() {
  return (
    <QuoteCard
      quote="… I’m proud of the fact that I served and the men that served with me. I regret that we were involved in a conflict that was so unpopular and didn’t really produce any positive results.…"
      date="2015"
      person="James Laughlin"
      color="laughlin laughlin3"
      image={laughlin3}
      fontsize="40px"
      link="https://dvp.dartmouth.edu/s/dvp/item/84"
      audio="https://rcweb.dartmouth.edu/DDHI/histories/laughlin_james/laughlin_james_clip3.mp3"
    />
  );
}

export function Stanley1() {
  return (
    <QuoteCard
      quote="… I wasn’t socially against what was going on.… I knew about Vietnam. Vietnam was still, in the mid-‘60s, it was still not something to be terribly concerned about.…"
      person="Neal Stanley"
      color="stanley"
      fontsize="40px"
      link="https://dvp.dartmouth.edu/s/dvp/item/84"
      audio="https://rcweb.dartmouth.edu/DDHI/histories/stanley_neal/stanley_neal_clip1.mp3"
    />
  );
}

export function Stanley2() {
  return (
    <QuoteCard quote="Fortunately, I only had to spend a year there. If I were like the Vietnamese and had to spend my entire adult life fighting those kinds of situations, you’d get demoralized.…"
      person="Neal Stanley"
      color="stanley"
      fontsize="40px"
      link="https://dvp.dartmouth.edu/s/dvp/item/216"
      audio="https://rcweb.dartmouth.edu/DDHI/histories/stanley_neal/stanley_neal_clip2.mp3"
    />
  );
}

export function Stanley3() {
  return (
    <QuoteCard
      fontsize="30px"
      link="https://dvp.dartmouth.edu/s/dvp/item/216"
      audio="https://rcweb.dartmouth.edu/DDHI/histories/stanley_neal/stanley_neal_clip3.mp3"
      quote="… what a tremendous impact it had on everything that I’ve done since that particular point in time… Your own instincts, your own– what you’re experiencing, what you have experienced, gives you good reason to question… what’s going on inside of, you know, whether we’re in Afghanistan or Iraq or you name the theater that we’re in, and why are those things occurring? And are we doing the same kinds of things again?…"
      person="Neal Stanley"
      color="stanley"
    />
  );
}

export function Beers1() {
  return (
    <QuoteCard
      fontsize="35px"
      link="https://dvp.dartmouth.edu/s/dvp/item/38"
      audio="//rcweb.dartmouth.edu/DDHI/histories/beers_rand/beers_rand_clip1.mp3"
      quote="I don’t remember having a sense beyond the advisors, that there was actually going to be a combat unit deployed to Vietnam until the Marines were deployed to protect the Da Nang airfield.…"
      person="Rand Beers"
      color="beers"
      date="1965"
    />
  );
}

export function Beers2() {
  return (
    <QuoteCard fontsize="28px"
      link="https://dvp.dartmouth.edu/s/dvp/item/38"
      audio="//rcweb.dartmouth.edu/DDHI/histories/beers_rand/beers_rand_clip2.mp3"
      quote="So, during the entire time I was in Vietnam, based on studying history here at Dartmouth,
      understanding the Cold War sense, I was very much fully supportive of the Administration’s position
      about why we were in Vietnam to prevent Communism from taking over the rest of Vietnam in order to
      try to maintain the broader containment policy of successive administrations… "
      person="Rand Beers"
      color="beers long-quote"
    />
  );
}

export function Beers3() {
  return (
    <QuoteCard fontsize="28px"
      link="https://dvp.dartmouth.edu/s/dvp/item/38"
      audio="//rcweb.dartmouth.edu/DDHI/histories/beers_rand/beers_rand_clip3.mp3"
      quote="So, I come back from Vietnam thinking… we are in this war because the Pentagon was given freedom of action, and it doesn’t seem to me that the State Department was a very loud voice at the table to talk about alternatives other than use of force. … So, I studied military history to go work in the State Department to be somebody who could be in a position to do that."
      person="Rand Beers"
      color="beers"
    />
  );
}

export function Chilcote1() {
  return (
    <QuoteCard
      fontsize="30px"
      link="https://dvp.dartmouth.edu/s/dvp/item/50"
      audio="//rcweb.dartmouth.edu/DDHI/histories/chilcote_lee/chilcote_lee_clip1.mp3"
      quote="What we knew at that point is that it was likely that Johnson was going to increase the troop levels and that we were going to get more deeply involved. We didn’t know what that meant. At that point, we thought the country was fully behind the Vietnam War.… There was a Cold War mentality…"
      person="Lee Chilcote"
      color="chilcote"
    />
  );
}

export function Chilcote2() {
  return (
    <QuoteCard fontsize="30px"
      link="https://dvp.dartmouth.edu/s/dvp/item/50"
      audio="//rcweb.dartmouth.edu/DDHI/histories/chilcote_lee/chilcote_lee_clip2.mp3"
      quote="When I left, essentially I was out of contact with any news…. I was at Camp Pendleton, and you know, you get Stars and Stripes, which was the military newspaper…. And my latest learnings at that point of time were that this country was behind the war. So I learned nothing in Vietnam at all."
      person="Lee Chilcote"
      color="chilcote"
    />
  );
}

export function Chilcote3() {
  return (
    <QuoteCard fontsize="30px"
      link="https://dvp.dartmouth.edu/s/dvp/item/50"
      audio="//rcweb.dartmouth.edu/DDHI/histories/chilcote_lee/chilcote_lee_clip3.mp3"
      quote="…for us that served, it just was sort of a confusing situation. We went with patriotic feelings, and we feel we did our service. I think most of us were not at all antiwar. I think every one of us hates war. There’s no question about that. No one loves war. No one loves to be in a war. But the idea that you would lump your troops in with the antiwar feelings was something I guess I really don’t understand to this day."
      person="Lee Chilcote"
      color="chilcote"
    />
  );
}

export function Miller1() {
  return (
    <QuoteCard fontsize="30px"
      image={placeholder}
      link="https://dvp.dartmouth.edu/s/dvp/item/50"
      audio="//rcweb.dartmouth.edu/DDHI/histories/chilcote_lee/chilcote_lee.mp3"
      quote="sdfsdfdsfsdfsdf"
      person="Ed Miller"
      color="miller"
    />
  );
}

export function Miller2() {
  return (
    <QuoteCard fontsize="50px"
      image={placeholder}
      link="https://dvp.dartmouth.edu/s/dvp/item/50"
      audio="//rcweb.dartmouth.edu/DDHI/histories/chilcote_lee/chilcote_lee.mp3"
      quote="sdfsdfdsfsdfsdf"
      person="Ed Miller"
      color="miller"
    />
  );
}
