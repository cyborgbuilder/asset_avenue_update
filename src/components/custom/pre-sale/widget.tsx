import { Button } from "@/components";
export const Widget = () => {
  const handleRedirect = () => {
    window.open(
      "https://solsale.app/presale/8zAN2TjF1hftviFo416YMw7ZUc9HuV1UD7Yexp1rDWrg",
      "_blank",
    );
  };

  return (
    <section>
      <div className="flex w-full items-center justify-center py-10">
        <iframe
          width="920"
          height="600"
          frameBorder="0"
          scrolling="no"
          src="https://solsale.app/embed/?address=8zAN2TjF1hftviFo416YMw7ZUc9HuV1UD7Yexp1rDWrg&bgColor=%2312181F&fgColor=%23161D27&hasAnimation=true&hasBanner=true&hasSocialLinks=true&network=999999&padding=30&refer=&responsive=false&saleType=presale&theme=dark&txtColor=%23FFFFFF"
        />
        
      </div>

      <div className="w-full flex items-center justify-center">
      <Button
          className="my-10 uppercase tracking-wide"
          onClick={handleRedirect}
        >
          Go to official seed sale page
        </Button>
      </div>
    </section>
  );
};
