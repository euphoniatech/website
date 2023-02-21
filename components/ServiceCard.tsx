const ServiceCard = ({ text }: { text: string }) => {
  return (
    <div className="bg-gradient-to-b from-primary to-primary-lighter text-white font-montserrat font-bold text-center flex justify-center items-end rounded-2xl h-[600px] w-96 pb-6">
      {text}
    </div>
  );
};
export default ServiceCard;
