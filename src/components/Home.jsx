/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { IconBlockquote } from '@tabler/icons-react';
import Laughlin from './Laughlin';

function SingleCard({
  quote, date, person, align, texture,
}) {
  return (
    <div className={`card ${align} ${texture}`}>
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
    <div className="page">
      {/* <div className="legend">
        <div className="circle align-1" /> <div className="circle align-2" /> <div className="circle align-3" /> <div className="circle align-4" /> <div className="circle align-5" /> <div className="circle align-6" /> <div className="circle align-7" /> <div className="circle align-8" /> <div className="circle align-9" /> <div className="circle align-10" />
      </div> */}
      <div className="gallery">
        <Laughlin />
      </div>

    </div>
  );
}

export default function Home() {
  return (
    <CardExampleGroups />
  );
}
