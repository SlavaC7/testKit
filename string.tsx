import LocalizedStrings from "react-localization";


export enum Language {
    Russian = 'ru',
}

export const strings = new LocalizedStrings({
    "ru": {
        screens:{
            default:{
                logIn:"Log In",
                reg:"Register",
            },
            auth:{
                titleText:"Авторизация",
                titleDesc:"Добро пожаловать! Авторизуйтесь для дальнейшего пользования",
                placeholderLogin:"Введите логин",
                login:"Логин",
                placeholderPass:"Введите пароль",
                password:"Пароль",
                textReg:"Нету аккаунта?",
                textlink:"Зарегестрируйтесь",
            },
            reg:{
                titleText:"Регестрация",
                titleDesc:"Добро пожаловать! Зарегестрируйтесь для дальнейшего пользования",
                placeholderLogin:"Введите логин",
                login:"Логин",
                placeholderUserName:"Введите Никнейм",
                UserName:"Никнейм",
                placeholderPass:"Введите пароль",
                password:"Пароль",
                textReg:"Уже есть аккаунт?",
                textlink:"Авторизуйтесь",
                markPass:"В пароле должны быть цифры и символи, минимум 9",
                markLogin:"Ошибка! Ввод от 2-30 символов, латинскими буквами",
                markToken:"Введены не верные данные, проверьте пожалуйста",
            },
            hotelInf:{
                address:"Адрес: ",
                countRooms:"Количевство номеров: ",
                buttonText:"Посмотреть номера"
            },
            roomInf:{
                button:"Заказать",
                bedsAmount:"Количевство кроватей: ",
                roomAmount:"Количевство комнат: ",
                status:"Занятость: ",
                price:"Цена: ",
                yourMoney:"Остаток: ",
            }
        }
}
});