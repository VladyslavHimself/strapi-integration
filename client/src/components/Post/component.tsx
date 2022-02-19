import React from 'react';

interface IPost {
  title: string,
  description: string,
}

export const Post = ({title, description}: IPost) => {
  
  return (
    <div className="post">
      <h1>{ title }</h1>
      <p>{ description }</p>
    </div>
  )
};
