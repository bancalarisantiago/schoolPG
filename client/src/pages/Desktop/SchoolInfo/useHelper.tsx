//from modules
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//types
import { IState } from "../../../interfaces";
import { deleteCourseById, getSchoolById } from "../../../redux/actions";
//assets
import clearSkyIcon from "../../../assets/weatherIcon/clearSky.png";
import rainy from "../../../assets/weatherIcon/raining.png";
import thunderstorm from "../../../assets/weatherIcon/storm.png";
import snoW from "../../../assets/weatherIcon/snow.png";
import cloudy from "../../../assets/weatherIcon/cloudy.png";
import mist from "../../../assets/weatherIcon/fog.png";

const useHelper = () => {
  const userSession = useSelector((state: IState) => state.userSession);
  const school = useSelector((state: IState) => state.userSchool);
  const dispatch = useDispatch();
  const totalUsers = (): number => {
    return school
      ? school.admins.length + school.students.length + school.teachers.length
      : " curso no cargado";
  };
  const [weather, setWeather] = useState<any>();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=1903d69493c217289bc04bd041e51166&units=metric&lang=sp, es`
        );
        setWeather(data);
      });
    }
  }, []);

  async function deleteCourse(id: any, name: string) {
    if (window.confirm(`Desea eliminar a ${name}? `) === true) {
      let erase = "El curso ha sido eliminado permanentemente de la base datos";
      dispatch(
        deleteCourseById({
          id,
          schoolId: userSession.user.school,
          accessToken: userSession.accessToken,
        })
      );
      alert(erase);
    }
    dispatch(
      getSchoolById({
        schoolId: userSession.user.school,
        accessToken: userSession.accessToken,
      })
    );
  }

  const day = (fecha: any) =>
    [
      "domingo",
      "lunes",
      "martes",
      "miércoles",
      "jueves",
      "viernes",
      "sábado",
      "domingo",
    ][new Date(fecha).getDay()];

  const number: any = (fecha: any) => new Date(fecha).getDay();

  const date = (date: any) => {
    const month = date.split("/");

    const months: any = {
      1: "enero",
      2: "febrero",
      3: "marzo",
      4: "abril",
      5: "mayo",
      6: "junio",
      7: "julio",
      8: "agosto",
      9: "septiembre",
      10: "octubre",
      11: "noviembre",
      12: "diciembre",
    };
    return [month[0], months[month[1]], month[2]];
  };

  const random = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const clearSkyNight = ["clearSkyNight", "clearSkyNight2", "clearSkyNight3"];

  const bg = (main: string) => {
    const bg: any = {
      "01d": ["clearSky", clearSkyIcon],
      "01n": [clearSkyNight[random(0, 2)], clearSkyIcon],
      "02d": ["fewClouds", cloudy],
      "02n": ["fewCloudsNight", cloudy],
      "03d": ["scatteredClouds", cloudy],
      "03n": ["scatteredCloudsNight", cloudy],
      "04d": ["brokenClouds", cloudy],
      "04n": ["brokenCloudsNight", cloudy],
      "09d": ["showerRain", rainy],
      "09n": ["showerRainNight", rainy],
      "10d": ["rain", rainy],
      "10n": ["rainNight", rainy],
      "11d": ["thunderstorm", thunderstorm],
      "11n": ["thunderstormNight", thunderstorm],
      "13d": ["snow", snoW],
      "13n": ["snowNight", snoW],
      "50d": ["mist"],
      "50n": ["mistNight", mist],
    };
    return bg[main];
  };

  const dayByNum = (i: number) =>
    ["dom", "lun", "mar", "mié", "jue", "vie", "sáb", "dom"][i];

  return {
    school,
    weather,
    bg,
    day,
    number,
    dayByNum,
    date,
    totalUsers,
    deleteCourse,
  };
};

export default useHelper;
