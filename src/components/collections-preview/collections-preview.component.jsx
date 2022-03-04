import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./collections-preview.styles.scss";
const CollectionsPreview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <div className='title'>
        <h1>{title}</h1>
      </div>
      <div className='preview'>
        {items
          .filter((value, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionsPreview;
