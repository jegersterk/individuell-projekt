import Calculator from "../calculator";
interface HeroProps{
    bgColor? : string,
}

export default function Hero({bgColor = "bg-amber-500"} : HeroProps){
    return(
        <div className={`w-full h-[40rem] ${bgColor} flex flex-col items-center justify-center gap-[6rem]`}>
            <h1 className="text-6xl">EXPLORE THE WORLD</h1>
            <Calculator/>
        </div>
    );
}