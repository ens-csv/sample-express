interface WeatherProps {
    weather: string;
}

type responseItemType = {
    id: string;
    name: string;
};

type WeatherDetailType = {
    zipcode: string;
    weather: string;
    temp?: number;
};

interface WeatherQueryInterface {
    zipcode: string;
}
