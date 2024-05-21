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
      <div className="gallery">
        <h5 className="sub">1960-1970</h5>
        <SingleCard quote="d" date="1960-1964" person="Neal Stanley" align="align-5" texture="texture-1" />
        <SingleCard quote="d" date="1960-1964" person="Neal Stanley" align="align-5" texture="texture-1" />

        <h5 className="sub">2015-present</h5>
        <SingleCard quote="d" date="2015" person="James Laughlin" align="align-7" texture="texture-5" />
        <SingleCard quote="d" date="2015" person="James Laughlin" align="align-7" texture="texture-5" />
      </div>
    </div>
  );
}

export default function Laughlin() {
  return (
    <CardExampleGroups />
  );
}
