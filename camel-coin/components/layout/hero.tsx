import Calculator from "../calculator";
interface HeroProps{
    bgColor? : string,
}

export default function Hero({bgColor = "bg-amber-500"} : HeroProps){
    return(
        <div className={`w-full h-96 ${bgColor} flex flex-col items-center justify-center`}>
            <h1 className="text-6xl">EXPLORE THE WORLD</h1>
            <Calculator/>
        </div>
    );
}