import Calculator from "../calculator";
interface HeroProps{
    bgColor? : string,
}

export default function Hero({bgColor = "bg-amber-600"} : HeroProps){
    return(
        <div className={`w-full h-96 bg-amber-600 ${bgColor} flex flex-col items-center justify-center`}>
            <h1 className="text-6xl">EXPLORE THE WORLD</h1>
            <Calculator/>
        </div>
    );
}