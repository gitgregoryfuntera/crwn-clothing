import React, { useState } from "react";
import CollectionsPreview from "../../components/collections-preview/collections-preview.component";
import { SHOP_DATA } from "./shop.data";
const ShopPage = () => {
  const [shopData, setShopData] = useState(SHOP_DATA);
  return (
    <div>
      <div>
        {shopData.map(({ id, ...shopDataProps }) => (
          <CollectionsPreview key={id} {...shopDataProps} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
