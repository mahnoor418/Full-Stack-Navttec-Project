import React from 'react'

function Description() {
  return (
    <div className="border-t border-gray-300 pt-6">
      <h2 className="text-xl font-semibold">About Author:</h2>
      <p className="text-gray-700 mt-2">
        This book's author, John, is one of the most popular writers in American history...
      </p>

      <div className="border-t border-gray-300 pt-6 mt-6">
        <h2 className="text-xl font-semibold">Description:</h2>
        <p className="text-gray-700 mt-2">
          This book describes how a detective tracks down a serial killer...
        </p>
        <ul className="list-disc pl-5 mt-4 text-gray-700 pb-6">
          <li>Pages: 250 Pages</li>
          <li>Author: John</li>
          <li>Publisher: Shopify Themes</li>
          <li>ISBN: 00589</li>
          <li>Genre: Literary Fiction, Romance, Thriller</li>
          <li>Language: English</li>
          <li>Reading Age: Good for 10+</li>
          <li>Dimensions: 6.2 x 1.2 x 9.7 (inches)</li>
        </ul><hr></hr>
        <h2 className="text-xl font-semibold">Terms:</h2>
        <p className="text-gray-700 mt-2">
          We offer a seven-day return and exchange policy. Returns and exchanges can be initiated from your account's orders section.
          The tags and stickers should be left on to ensure that the item is returned to you in the same condition in which it was delivered.
        </p>
      </div>
    </div>
  )
}

export default Description
