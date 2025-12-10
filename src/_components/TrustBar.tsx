import CustomerServiceIcon from "@/_icons/CustomerServiceIcon";
import DeliveryIcon from "@/_icons/DeliveryIcon";
import SecureIcon from "@/_icons/SecureIcon";

interface TrustBarProps {
  className?: string;
}

const titleClasses = "mb-2 uppercase font-semibold text-xl";
const itemContainerClasses = "flex flex-col items-center";
const iconContainerClasses =
  "bg-text-2 w-[58px] h-[58px] rounded-full outline-8 outline-[rgba(47,46,48,0.3)] mb-7 flex justify-center items-center";

export default function TrustBar({ className }: TrustBarProps) {
  return (
    <div className={`${className ?? ""} flex items-center justify-between`}>
      <div className={itemContainerClasses}>
        <div className={iconContainerClasses}>
          <DeliveryIcon />
        </div>
        <div className={titleClasses}>Free and fast delivery</div>
        <div>Free delivery for all orders over $140</div>
      </div>

      <div className={itemContainerClasses}>
        <div className={iconContainerClasses}>
          <CustomerServiceIcon />
        </div>
        <div className={titleClasses}>24/7 customer service</div>
        <div>Friendly 24/7 customer support</div>
      </div>

      <div className={itemContainerClasses}>
        <div className={iconContainerClasses}>
          <SecureIcon />
        </div>
        <div className={titleClasses}>Money back guarantee</div>
        <div>We reurn money within 30 days</div>
      </div>
    </div>
  );
}
