import React from 'react';

// Homepage component
export default function Homepage() {
  return (
    <div className="h-[400vh] w-full relative top-20">
      <section className="h-[100vh] bg-white w-full text-black">Homepage Section 1</section>
      <section className="h-[100vh] bg-blue-500 w-full">Homepage Section 2</section>
      <section className="h-[100vh] bg-white w-full text-black">Homepage Section 3</section>
      <section className="h-[100vh] bg-blue-500 w-full">Homepage Section 4</section>
    </div>
  );
}
