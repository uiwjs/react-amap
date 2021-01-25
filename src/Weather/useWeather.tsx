import { useState, useMemo, useEffect } from 'react';
import { WeatherProps } from '.';

export interface UseWeather extends WeatherProps {}
export const useWeather = (props = {} as UseWeather) => {
  const { city = '', type = 'live', onComplete, onError } = props;
  const [weather, setWeather] = useState<AMap.Weather>();
  const funName = type === 'live' ? 'getLive' : 'getForecast';
  function getData(instance: AMap.Weather) {
    if (type && city && /^(live|forecast)$/.test(type)) {
      instance[funName as keyof AMap.Weather](
        city,
        (err?: Error, data?: AMap.WeatherForecastResult | AMap.WeatherLiveResult) => {
          if (err && onError) {
            onError(err);
          } else if (data && onComplete) {
            onComplete(data);
          }
        },
      );
    }
  }
  useEffect(() => {
    if (AMap && !weather) {
      let instance: AMap.Weather;
      AMap.plugin(['AMap.Weather'], () => {
        instance = new AMap.Weather();
        setWeather(instance);
      });
      return () => {
        if (instance) {
          setWeather(undefined);
        }
      };
    }
  }, []);

  useMemo(() => {
    if (weather && city && type) {
      getData(weather);
    }
  }, [weather, city, type]);

  return {
    weather,
    setWeather,
  };
};
