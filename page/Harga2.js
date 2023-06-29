import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Image } from 'expo-image'
import {
    BottomSheetModal,
    BottomSheetModalProvider,
    BottomSheetBackdrop
} from '@gorhom/bottom-sheet';
import React, { useCallback, useMemo, useRef, useState } from 'react'


const element = (e) => {
    return <View>

    </View>
}

export default function Harga2() {
    const [data, setData] = useState([{
        "id": 4326,
        "species_id": 1,
        "date": "2023-06-27",
        "size_20": 92000,
        "size_30": 77000,
        "size_40": 62000,
        "size_50": 60000,
        "size_60": 57000,
        "size_70": 54000,
        "size_80": 51000,
        "size_90": 49000,
        "size_100": 46000,
        "size_110": null,
        "size_120": null,
        "size_130": null,
        "size_140": null,
        "size_150": null,
        "size_160": null,
        "size_170": null,
        "size_180": null,
        "size_190": null,
        "size_200": 0,
        "remark": null,
        "created_by": 10579,
        "updated_by": 53,
        "created_at": "2023-06-27 02:32:31",
        "updated_at": "2023-06-27 02:32:31",
        "region_id": "1803",
        "contact": "P**************la - +62**********7",
        "country_id": "ID",
        "currency_id": "IDR",
        "private": null,
        "week": 202326,
        "date_region_full_name": "2023-06-27 - LAMPUNG, LAMPUNG SELATAN",
        "province_id": "18",
        "regency_id": "1803",
        "district_id": null,
        "village_id": null,
        "region": {
            "id": "1803",
            "name": "LAMPUNG SELATAN",
            "type": null,
            "latitude": "-5.56226140",
            "longitude": "105.54743730",
            "country_id": "ID",
            "country_name": "Indonesia",
            "country_name_uppercase": "INDONESIA",
            "province_id": "18",
            "province_name": "LAMPUNG",
            "regency_id": "1803",
            "regency_name": "LAMPUNG SELATAN",
            "district_id": null,
            "district_name": null,
            "village_id": null,
            "village_name": null,
            "full_name": "LAMPUNG, LAMPUNG SELATAN",
            "name_translated": "LAMPUNG SELATAN",
            "country_name_translated": "Indonesia",
            "country_name_translated_uppercase": "INDONESIA"
        },
        "creator": {
            "id": 10579,
            "role_id": 2,
            "name": "P**************la",
            "email": "p********@gmail.com",
            "avatar": "users/I6wH9Uaal4A4NEGUE2ILahJESnKEluyocJXSUMTJ.jpeg",
            "email_verified": true,
            "subscription_type_id": 1,
            "settings": {
                "locale": "id"
            },
            "created_at": "2021-01-21 01:03:45",
            "updated_at": "2023-01-28 09:11:57",
            "region_id": "34",
            "address": null,
            "last_login_at": "2021-06-21 01:19:18",
            "deactivated": false,
            "expired_at": null,
            "phone": "+62**********7",
            "phone_verified": true,
            "gender": 1,
            "occupation": null,
            "id_number": null,
            "id_scan": null,
            "tin_number": null,
            "tin_scan": null,
            "birthdate": null,
            "company": null,
            "company_address": null,
            "position": null,
            "monthly_income": null,
            "income_source": null,
            "buyer": true,
            "phone_country": "ID",
            "country": "ID",
            "interest": "management",
            "unsubscribe_email_at": null,
            "freshchat_restore_id": null,
            "allow_create_client": true,
            "allow_create_token": false,
            "interests": [
                "management"
            ],
            "state": {
                "phone_verification_expired_at": "2022-07-10 07:10:19",
                "mailjet_id": 3314417051,
                "partner": true,
                "consultation_tour_complete": true
            },
            "family_card_number": null,
            "family_card_scan": null,
            "telegram_id": null,
            "gender_name": "Laki-Laki",
            "expired_date": null,
            "expired_time": null,
            "upcoming_birthdate": null
        }
    },
    {
        "id": 4325,
        "species_id": 1,
        "date": "2023-06-27",
        "size_20": 92000,
        "size_30": 77000,
        "size_40": 62000,
        "size_50": 60000,
        "size_60": 57000,
        "size_70": 54000,
        "size_80": 51000,
        "size_90": 49000,
        "size_100": 46000,
        "size_110": null,
        "size_120": null,
        "size_130": null,
        "size_140": null,
        "size_150": null,
        "size_160": null,
        "size_170": null,
        "size_180": null,
        "size_190": null,
        "size_200": 0,
        "remark": null,
        "created_by": 10579,
        "updated_by": 53,
        "created_at": "2023-06-27 02:32:31",
        "updated_at": "2023-06-27 02:32:31",
        "region_id": "1804",
        "contact": "P**************la - +62**********7",
        "country_id": "ID",
        "currency_id": "IDR",
        "private": null,
        "week": 202326,
        "date_region_full_name": "2023-06-27 - LAMPUNG, LAMPUNG TIMUR",
        "province_id": "18",
        "regency_id": "1804",
        "district_id": null,
        "village_id": null,
        "region": {
            "id": "1804",
            "name": "LAMPUNG TIMUR",
            "type": null,
            "latitude": "-5.11349950",
            "longitude": "105.68817880",
            "country_id": "ID",
            "country_name": "Indonesia",
            "country_name_uppercase": "INDONESIA",
            "province_id": "18",
            "province_name": "LAMPUNG",
            "regency_id": "1804",
            "regency_name": "LAMPUNG TIMUR",
            "district_id": null,
            "district_name": null,
            "village_id": null,
            "village_name": null,
            "full_name": "LAMPUNG, LAMPUNG TIMUR",
            "name_translated": "LAMPUNG TIMUR",
            "country_name_translated": "Indonesia",
            "country_name_translated_uppercase": "INDONESIA"
        },
        "creator": {
            "id": 10579,
            "role_id": 2,
            "name": "P**************la",
            "email": "p********@gmail.com",
            "avatar": "users/I6wH9Uaal4A4NEGUE2ILahJESnKEluyocJXSUMTJ.jpeg",
            "email_verified": true,
            "subscription_type_id": 1,
            "settings": {
                "locale": "id"
            },
            "created_at": "2021-01-21 01:03:45",
            "updated_at": "2023-01-28 09:11:57",
            "region_id": "34",
            "address": null,
            "last_login_at": "2021-06-21 01:19:18",
            "deactivated": false,
            "expired_at": null,
            "phone": "+62**********7",
            "phone_verified": true,
            "gender": 1,
            "occupation": null,
            "id_number": null,
            "id_scan": null,
            "tin_number": null,
            "tin_scan": null,
            "birthdate": null,
            "company": null,
            "company_address": null,
            "position": null,
            "monthly_income": null,
            "income_source": null,
            "buyer": true,
            "phone_country": "ID",
            "country": "ID",
            "interest": "management",
            "unsubscribe_email_at": null,
            "freshchat_restore_id": null,
            "allow_create_client": true,
            "allow_create_token": false,
            "interests": [
                "management"
            ],
            "state": {
                "phone_verification_expired_at": "2022-07-10 07:10:19",
                "mailjet_id": 3314417051,
                "partner": true,
                "consultation_tour_complete": true
            },
            "family_card_number": null,
            "family_card_scan": null,
            "telegram_id": null,
            "gender_name": "Laki-Laki",
            "expired_date": null,
            "expired_time": null,
            "upcoming_birthdate": null
        }
    },
    {
        "id": 4324,
        "species_id": 1,
        "date": "2023-06-27",
        "size_20": 92000,
        "size_30": 77000,
        "size_40": 62000,
        "size_50": 60000,
        "size_60": 57000,
        "size_70": 54000,
        "size_80": 51000,
        "size_90": 49000,
        "size_100": 46000,
        "size_110": null,
        "size_120": null,
        "size_130": null,
        "size_140": null,
        "size_150": null,
        "size_160": null,
        "size_170": null,
        "size_180": null,
        "size_190": null,
        "size_200": 0,
        "remark": null,
        "created_by": 10579,
        "updated_by": 53,
        "created_at": "2023-06-27 02:28:10",
        "updated_at": "2023-06-27 02:28:10",
        "region_id": "3401",
        "contact": "P**************la - +62**********7",
        "country_id": "ID",
        "currency_id": "IDR",
        "private": null,
        "week": 202326,
        "date_region_full_name": "2023-06-27 - DI YOGYAKARTA, KULON PROGO",
        "province_id": "34",
        "regency_id": "3401",
        "district_id": null,
        "village_id": null,
        "region": {
            "id": "3401",
            "name": "KULON PROGO",
            "type": null,
            "latitude": "-7.82667980",
            "longitude": "110.16408460",
            "country_id": "ID",
            "country_name": "Indonesia",
            "country_name_uppercase": "INDONESIA",
            "province_id": "34",
            "province_name": "DI YOGYAKARTA",
            "regency_id": "3401",
            "regency_name": "KULON PROGO",
            "district_id": null,
            "district_name": null,
            "village_id": null,
            "village_name": null,
            "full_name": "DI YOGYAKARTA, KULON PROGO",
            "name_translated": "KULON PROGO",
            "country_name_translated": "Indonesia",
            "country_name_translated_uppercase": "INDONESIA"
        },
        "creator": {
            "id": 10579,
            "role_id": 2,
            "name": "P**************la",
            "email": "p********@gmail.com",
            "avatar": "users/I6wH9Uaal4A4NEGUE2ILahJESnKEluyocJXSUMTJ.jpeg",
            "email_verified": true,
            "subscription_type_id": 1,
            "settings": {
                "locale": "id"
            },
            "created_at": "2021-01-21 01:03:45",
            "updated_at": "2023-01-28 09:11:57",
            "region_id": "34",
            "address": null,
            "last_login_at": "2021-06-21 01:19:18",
            "deactivated": false,
            "expired_at": null,
            "phone": "+62**********7",
            "phone_verified": true,
            "gender": 1,
            "occupation": null,
            "id_number": null,
            "id_scan": null,
            "tin_number": null,
            "tin_scan": null,
            "birthdate": null,
            "company": null,
            "company_address": null,
            "position": null,
            "monthly_income": null,
            "income_source": null,
            "buyer": true,
            "phone_country": "ID",
            "country": "ID",
            "interest": "management",
            "unsubscribe_email_at": null,
            "freshchat_restore_id": null,
            "allow_create_client": true,
            "allow_create_token": false,
            "interests": [
                "management"
            ],
            "state": {
                "phone_verification_expired_at": "2022-07-10 07:10:19",
                "mailjet_id": 3314417051,
                "partner": true,
                "consultation_tour_complete": true
            },
            "family_card_number": null,
            "family_card_scan": null,
            "telegram_id": null,
            "gender_name": "Laki-Laki",
            "expired_date": null,
            "expired_time": null,
            "upcoming_birthdate": null
        }
    },
    {
        "id": 4323,
        "species_id": 1,
        "date": "2023-06-27",
        "size_20": 92000,
        "size_30": 77000,
        "size_40": 62000,
        "size_50": 60000,
        "size_60": 57000,
        "size_70": 54000,
        "size_80": 51000,
        "size_90": 49000,
        "size_100": 46000,
        "size_110": null,
        "size_120": null,
        "size_130": null,
        "size_140": null,
        "size_150": null,
        "size_160": null,
        "size_170": null,
        "size_180": null,
        "size_190": null,
        "size_200": 0,
        "remark": null,
        "created_by": 10579,
        "updated_by": 53,
        "created_at": "2023-06-27 02:28:10",
        "updated_at": "2023-06-27 02:28:10",
        "region_id": "3306",
        "contact": "P**************la - +62**********7",
        "country_id": "ID",
        "currency_id": "IDR",
        "private": null,
        "week": 202326,
        "date_region_full_name": "2023-06-27 - JAWA TENGAH, PURWOREJO",
        "province_id": "33",
        "regency_id": "3306",
        "district_id": null,
        "village_id": null,
        "region": {
            "id": "3306",
            "name": "PURWOREJO",
            "type": null,
            "latitude": "-7.69645090",
            "longitude": "109.99894160",
            "country_id": "ID",
            "country_name": "Indonesia",
            "country_name_uppercase": "INDONESIA",
            "province_id": "33",
            "province_name": "JAWA TENGAH",
            "regency_id": "3306",
            "regency_name": "PURWOREJO",
            "district_id": null,
            "district_name": null,
            "village_id": null,
            "village_name": null,
            "full_name": "JAWA TENGAH, PURWOREJO",
            "name_translated": "PURWOREJO",
            "country_name_translated": "Indonesia",
            "country_name_translated_uppercase": "INDONESIA"
        },
        "creator": {
            "id": 10579,
            "role_id": 2,
            "name": "P**************la",
            "email": "p********@gmail.com",
            "avatar": "users/I6wH9Uaal4A4NEGUE2ILahJESnKEluyocJXSUMTJ.jpeg",
            "email_verified": true,
            "subscription_type_id": 1,
            "settings": {
                "locale": "id"
            },
            "created_at": "2021-01-21 01:03:45",
            "updated_at": "2023-01-28 09:11:57",
            "region_id": "34",
            "address": null,
            "last_login_at": "2021-06-21 01:19:18",
            "deactivated": false,
            "expired_at": null,
            "phone": "+62**********7",
            "phone_verified": true,
            "gender": 1,
            "occupation": null,
            "id_number": null,
            "id_scan": null,
            "tin_number": null,
            "tin_scan": null,
            "birthdate": null,
            "company": null,
            "company_address": null,
            "position": null,
            "monthly_income": null,
            "income_source": null,
            "buyer": true,
            "phone_country": "ID",
            "country": "ID",
            "interest": "management",
            "unsubscribe_email_at": null,
            "freshchat_restore_id": null,
            "allow_create_client": true,
            "allow_create_token": false,
            "interests": [
                "management"
            ],
            "state": {
                "phone_verification_expired_at": "2022-07-10 07:10:19",
                "mailjet_id": 3314417051,
                "partner": true,
                "consultation_tour_complete": true
            },
            "family_card_number": null,
            "family_card_scan": null,
            "telegram_id": null,
            "gender_name": "Laki-Laki",
            "expired_date": null,
            "expired_time": null,
            "upcoming_birthdate": null
        }
    },
    {
        "id": 4322,
        "species_id": 1,
        "date": "2023-06-27",
        "size_20": 92000,
        "size_30": 77000,
        "size_40": 62000,
        "size_50": 60000,
        "size_60": 57000,
        "size_70": 54000,
        "size_80": 51000,
        "size_90": 49000,
        "size_100": 46000,
        "size_110": null,
        "size_120": null,
        "size_130": null,
        "size_140": null,
        "size_150": null,
        "size_160": null,
        "size_170": null,
        "size_180": null,
        "size_190": null,
        "size_200": 0,
        "remark": null,
        "created_by": 10579,
        "updated_by": 53,
        "created_at": "2023-06-27 02:28:10",
        "updated_at": "2023-06-27 02:28:10",
        "region_id": "3305",
        "contact": "P**************la - +62**********7",
        "country_id": "ID",
        "currency_id": "IDR",
        "private": null,
        "week": 202326,
        "date_region_full_name": "2023-06-27 - JAWA TENGAH, KEBUMEN",
        "province_id": "33",
        "regency_id": "3305",
        "district_id": null,
        "village_id": null,
        "region": {
            "id": "3305",
            "name": "KEBUMEN",
            "type": null,
            "latitude": "-7.66805590",
            "longitude": "109.65245750",
            "country_id": "ID",
            "country_name": "Indonesia",
            "country_name_uppercase": "INDONESIA",
            "province_id": "33",
            "province_name": "JAWA TENGAH",
            "regency_id": "3305",
            "regency_name": "KEBUMEN",
            "district_id": null,
            "district_name": null,
            "village_id": null,
            "village_name": null,
            "full_name": "JAWA TENGAH, KEBUMEN",
            "name_translated": "KEBUMEN",
            "country_name_translated": "Indonesia",
            "country_name_translated_uppercase": "INDONESIA"
        },
        "creator": {
            "id": 10579,
            "role_id": 2,
            "name": "P**************la",
            "email": "p********@gmail.com",
            "avatar": "users/I6wH9Uaal4A4NEGUE2ILahJESnKEluyocJXSUMTJ.jpeg",
            "email_verified": true,
            "subscription_type_id": 1,
            "settings": {
                "locale": "id"
            },
            "created_at": "2021-01-21 01:03:45",
            "updated_at": "2023-01-28 09:11:57",
            "region_id": "34",
            "address": null,
            "last_login_at": "2021-06-21 01:19:18",
            "deactivated": false,
            "expired_at": null,
            "phone": "+62**********7",
            "phone_verified": true,
            "gender": 1,
            "occupation": null,
            "id_number": null,
            "id_scan": null,
            "tin_number": null,
            "tin_scan": null,
            "birthdate": null,
            "company": null,
            "company_address": null,
            "position": null,
            "monthly_income": null,
            "income_source": null,
            "buyer": true,
            "phone_country": "ID",
            "country": "ID",
            "interest": "management",
            "unsubscribe_email_at": null,
            "freshchat_restore_id": null,
            "allow_create_client": true,
            "allow_create_token": false,
            "interests": [
                "management"
            ],
            "state": {
                "phone_verification_expired_at": "2022-07-10 07:10:19",
                "mailjet_id": 3314417051,
                "partner": true,
                "consultation_tour_complete": true
            },
            "family_card_number": null,
            "family_card_scan": null,
            "telegram_id": null,
            "gender_name": "Laki-Laki",
            "expired_date": null,
            "expired_time": null,
            "upcoming_birthdate": null
        }
    },
    {
        "id": 4321,
        "species_id": 1,
        "date": "2023-06-26",
        "size_20": null,
        "size_30": 77500,
        "size_40": 67500,
        "size_50": 59500,
        "size_60": 57500,
        "size_70": 55500,
        "size_80": 50500,
        "size_90": 47500,
        "size_100": 45500,
        "size_110": 43500,
        "size_120": 41500,
        "size_130": 39500,
        "size_140": 37500,
        "size_150": 35500,
        "size_160": null,
        "size_170": null,
        "size_180": null,
        "size_190": null,
        "size_200": null,
        "remark": "Harga berlaku untuk biomass udang 1 ton\nApabila biomass udang lebih dari 10 ton akan berbeda harga",
        "created_by": 1082,
        "updated_by": 205,
        "created_at": "2023-06-26 07:40:10",
        "updated_at": "2023-06-26 07:40:10",
        "region_id": "5205",
        "contact": "+628123541117",
        "country_id": "ID",
        "currency_id": "IDR",
        "private": null,
        "week": 202326,
        "date_region_full_name": "2023-06-26 - NUSA TENGGARA BARAT, DOMPU",
        "province_id": "52",
        "regency_id": "5205",
        "district_id": null,
        "village_id": null,
        "region": {
            "id": "5205",
            "name": "DOMPU",
            "type": null,
            "latitude": "-8.54543700",
            "longitude": "118.44580100",
            "country_id": "ID",
            "country_name": "Indonesia",
            "country_name_uppercase": "INDONESIA",
            "province_id": "52",
            "province_name": "NUSA TENGGARA BARAT",
            "regency_id": "5205",
            "regency_name": "DOMPU",
            "district_id": null,
            "district_name": null,
            "village_id": null,
            "village_name": null,
            "full_name": "NUSA TENGGARA BARAT, DOMPU",
            "name_translated": "DOMPU",
            "country_name_translated": "Indonesia",
            "country_name_translated_uppercase": "INDONESIA"
        },
        "creator": {
            "id": 1082,
            "role_id": 2,
            "name": "B***************DS",
            "email": "b********@gmail.com",
            "avatar": "users/default.png",
            "email_verified": true,
            "subscription_type_id": 1,
            "settings": {
                "locale": "id"
            },
            "created_at": "2019-04-13 02:13:47",
            "updated_at": "2022-07-14 12:19:48",
            "region_id": "3510",
            "address": null,
            "last_login_at": null,
            "deactivated": false,
            "expired_at": null,
            "phone": "+62*********7",
            "phone_verified": true,
            "gender": 1,
            "occupation": "Karyawan swasta",
            "id_number": null,
            "id_scan": null,
            "tin_number": null,
            "tin_scan": null,
            "birthdate": null,
            "company": "Sedulur",
            "company_address": "Banyuwangi",
            "position": "Eksekutif Perusahaan (setara Direksi)",
            "monthly_income": null,
            "income_source": null,
            "buyer": false,
            "phone_country": "ID",
            "country": null,
            "interest": "management",
            "unsubscribe_email_at": null,
            "freshchat_restore_id": null,
            "allow_create_client": false,
            "allow_create_token": false,
            "interests": [
                "management"
            ],
            "state": {
                "phone_verification_expired_at": "2022-04-07 10:10:47",
                "home_coachmark_shown": "true",
                "consultation_shown": "true",
                "mailjet_id": 3314272132
            },
            "family_card_number": null,
            "family_card_scan": null,
            "telegram_id": null,
            "gender_name": "Laki-Laki",
            "expired_date": null,
            "expired_time": null,
            "upcoming_birthdate": null
        }
    },
    {
        "id": 4320,
        "species_id": 1,
        "date": "2023-06-26",
        "size_20": null,
        "size_30": 78000,
        "size_40": 68000,
        "size_50": 60000,
        "size_60": 58000,
        "size_70": 56000,
        "size_80": 51000,
        "size_90": 48000,
        "size_100": 46000,
        "size_110": 44000,
        "size_120": 42000,
        "size_130": 40000,
        "size_140": 38000,
        "size_150": 36000,
        "size_160": null,
        "size_170": null,
        "size_180": null,
        "size_190": null,
        "size_200": null,
        "remark": "Harga berlaku untuk biomass udang 1 ton\nApabila biomass udang lebih dari 10 ton akan berbeda harga",
        "created_by": 1082,
        "updated_by": 205,
        "created_at": "2023-06-26 07:38:27",
        "updated_at": "2023-06-26 07:38:27",
        "region_id": "5204",
        "contact": "+628123541117",
        "country_id": "ID",
        "currency_id": "IDR",
        "private": null,
        "week": 202326,
        "date_region_full_name": "2023-06-26 - NUSA TENGGARA BARAT, SUMBAWA",
        "province_id": "52",
        "regency_id": "5204",
        "district_id": null,
        "village_id": null,
        "region": {
            "id": "5204",
            "name": "SUMBAWA",
            "type": null,
            "latitude": "-8.73807200",
            "longitude": "118.11710820",
            "country_id": "ID",
            "country_name": "Indonesia",
            "country_name_uppercase": "INDONESIA",
            "province_id": "52",
            "province_name": "NUSA TENGGARA BARAT",
            "regency_id": "5204",
            "regency_name": "SUMBAWA",
            "district_id": null,
            "district_name": null,
            "village_id": null,
            "village_name": null,
            "full_name": "NUSA TENGGARA BARAT, SUMBAWA",
            "name_translated": "SUMBAWA",
            "country_name_translated": "Indonesia",
            "country_name_translated_uppercase": "INDONESIA"
        },
        "creator": {
            "id": 1082,
            "role_id": 2,
            "name": "B***************DS",
            "email": "b********@gmail.com",
            "avatar": "users/default.png",
            "email_verified": true,
            "subscription_type_id": 1,
            "settings": {
                "locale": "id"
            },
            "created_at": "2019-04-13 02:13:47",
            "updated_at": "2022-07-14 12:19:48",
            "region_id": "3510",
            "address": null,
            "last_login_at": null,
            "deactivated": false,
            "expired_at": null,
            "phone": "+62*********7",
            "phone_verified": true,
            "gender": 1,
            "occupation": "Karyawan swasta",
            "id_number": null,
            "id_scan": null,
            "tin_number": null,
            "tin_scan": null,
            "birthdate": null,
            "company": "Sedulur",
            "company_address": "Banyuwangi",
            "position": "Eksekutif Perusahaan (setara Direksi)",
            "monthly_income": null,
            "income_source": null,
            "buyer": false,
            "phone_country": "ID",
            "country": null,
            "interest": "management",
            "unsubscribe_email_at": null,
            "freshchat_restore_id": null,
            "allow_create_client": false,
            "allow_create_token": false,
            "interests": [
                "management"
            ],
            "state": {
                "phone_verification_expired_at": "2022-04-07 10:10:47",
                "home_coachmark_shown": "true",
                "consultation_shown": "true",
                "mailjet_id": 3314272132
            },
            "family_card_number": null,
            "family_card_scan": null,
            "telegram_id": null,
            "gender_name": "Laki-Laki",
            "expired_date": null,
            "expired_time": null,
            "upcoming_birthdate": null
        }
    },
    {
        "id": 4319,
        "species_id": 1,
        "date": "2023-06-26",
        "size_20": null,
        "size_30": 79500,
        "size_40": 69500,
        "size_50": 61500,
        "size_60": 59500,
        "size_70": 57500,
        "size_80": 52500,
        "size_90": 49500,
        "size_100": 46500,
        "size_110": 44500,
        "size_120": 42500,
        "size_130": 40500,
        "size_140": 38500,
        "size_150": 36500,
        "size_160": null,
        "size_170": null,
        "size_180": null,
        "size_190": null,
        "size_200": null,
        "remark": "Harga berlaku untuk biomass udang 1 ton\nApabila biomass udang lebih dari 10 ton akan berbeda harga",
        "created_by": 1082,
        "updated_by": 205,
        "created_at": "2023-06-26 07:31:35",
        "updated_at": "2023-06-26 07:31:35",
        "region_id": "5201",
        "contact": "+628123541117",
        "country_id": "ID",
        "currency_id": "IDR",
        "private": null,
        "week": 202326,
        "date_region_full_name": "2023-06-26 - NUSA TENGGARA BARAT, LOMBOK BARAT",
        "province_id": "52",
        "regency_id": "5201",
        "district_id": null,
        "village_id": null,
        "region": {
            "id": "5201",
            "name": "LOMBOK BARAT",
            "type": null,
            "latitude": "-8.64645990",
            "longitude": "116.11230780",
            "country_id": "ID",
            "country_name": "Indonesia",
            "country_name_uppercase": "INDONESIA",
            "province_id": "52",
            "province_name": "NUSA TENGGARA BARAT",
            "regency_id": "5201",
            "regency_name": "LOMBOK BARAT",
            "district_id": null,
            "district_name": null,
            "village_id": null,
            "village_name": null,
            "full_name": "NUSA TENGGARA BARAT, LOMBOK BARAT",
            "name_translated": "LOMBOK BARAT",
            "country_name_translated": "Indonesia",
            "country_name_translated_uppercase": "INDONESIA"
        },
        "creator": {
            "id": 1082,
            "role_id": 2,
            "name": "B***************DS",
            "email": "b********@gmail.com",
            "avatar": "users/default.png",
            "email_verified": true,
            "subscription_type_id": 1,
            "settings": {
                "locale": "id"
            },
            "created_at": "2019-04-13 02:13:47",
            "updated_at": "2022-07-14 12:19:48",
            "region_id": "3510",
            "address": null,
            "last_login_at": null,
            "deactivated": false,
            "expired_at": null,
            "phone": "+62*********7",
            "phone_verified": true,
            "gender": 1,
            "occupation": "Karyawan swasta",
            "id_number": null,
            "id_scan": null,
            "tin_number": null,
            "tin_scan": null,
            "birthdate": null,
            "company": "Sedulur",
            "company_address": "Banyuwangi",
            "position": "Eksekutif Perusahaan (setara Direksi)",
            "monthly_income": null,
            "income_source": null,
            "buyer": false,
            "phone_country": "ID",
            "country": null,
            "interest": "management",
            "unsubscribe_email_at": null,
            "freshchat_restore_id": null,
            "allow_create_client": false,
            "allow_create_token": false,
            "interests": [
                "management"
            ],
            "state": {
                "phone_verification_expired_at": "2022-04-07 10:10:47",
                "home_coachmark_shown": "true",
                "consultation_shown": "true",
                "mailjet_id": 3314272132
            },
            "family_card_number": null,
            "family_card_scan": null,
            "telegram_id": null,
            "gender_name": "Laki-Laki",
            "expired_date": null,
            "expired_time": null,
            "upcoming_birthdate": null
        }
    },
    {
        "id": 4318,
        "species_id": 1,
        "date": "2023-06-26",
        "size_20": null,
        "size_30": 79500,
        "size_40": 69500,
        "size_50": 61500,
        "size_60": 59500,
        "size_70": 57500,
        "size_80": 52500,
        "size_90": 49500,
        "size_100": 47500,
        "size_110": 45500,
        "size_120": 43500,
        "size_130": 41500,
        "size_140": 39500,
        "size_150": 37500,
        "size_160": null,
        "size_170": null,
        "size_180": null,
        "size_190": null,
        "size_200": null,
        "remark": "Harga berlaku untuk biomass udang 1 ton\nApabila biomass udang lebih dari 10 ton akan berbeda harga",
        "created_by": 1082,
        "updated_by": 205,
        "created_at": "2023-06-26 06:59:22",
        "updated_at": "2023-06-26 06:59:22",
        "region_id": "51",
        "contact": "+628123541117",
        "country_id": "ID",
        "currency_id": "IDR",
        "private": null,
        "week": 202326,
        "date_region_full_name": "2023-06-26 - BALI",
        "province_id": "51",
        "regency_id": null,
        "district_id": null,
        "village_id": null,
        "region": {
            "id": "51",
            "name": "BALI",
            "type": null,
            "latitude": "-8.34053890",
            "longitude": "115.09195090",
            "country_id": "ID",
            "country_name": "Indonesia",
            "country_name_uppercase": "INDONESIA",
            "province_id": "51",
            "province_name": "BALI",
            "regency_id": null,
            "regency_name": null,
            "district_id": null,
            "district_name": null,
            "village_id": null,
            "village_name": null,
            "full_name": "BALI",
            "name_translated": "BALI",
            "country_name_translated": "Indonesia",
            "country_name_translated_uppercase": "INDONESIA"
        },
        "creator": {
            "id": 1082,
            "role_id": 2,
            "name": "B***************DS",
            "email": "b********@gmail.com",
            "avatar": "users/default.png",
            "email_verified": true,
            "subscription_type_id": 1,
            "settings": {
                "locale": "id"
            },
            "created_at": "2019-04-13 02:13:47",
            "updated_at": "2022-07-14 12:19:48",
            "region_id": "3510",
            "address": null,
            "last_login_at": null,
            "deactivated": false,
            "expired_at": null,
            "phone": "+62*********7",
            "phone_verified": true,
            "gender": 1,
            "occupation": "Karyawan swasta",
            "id_number": null,
            "id_scan": null,
            "tin_number": null,
            "tin_scan": null,
            "birthdate": null,
            "company": "Sedulur",
            "company_address": "Banyuwangi",
            "position": "Eksekutif Perusahaan (setara Direksi)",
            "monthly_income": null,
            "income_source": null,
            "buyer": false,
            "phone_country": "ID",
            "country": null,
            "interest": "management",
            "unsubscribe_email_at": null,
            "freshchat_restore_id": null,
            "allow_create_client": false,
            "allow_create_token": false,
            "interests": [
                "management"
            ],
            "state": {
                "phone_verification_expired_at": "2022-04-07 10:10:47",
                "home_coachmark_shown": "true",
                "consultation_shown": "true",
                "mailjet_id": 3314272132
            },
            "family_card_number": null,
            "family_card_scan": null,
            "telegram_id": null,
            "gender_name": "Laki-Laki",
            "expired_date": null,
            "expired_time": null,
            "upcoming_birthdate": null
        }
    }]);

    const [regionList, setRegionList] = useState([
        {
            "id": "11",
            "name": "ACEH",
            "type": null,
            "latitude": "4.69513500",
            "longitude": "96.74939930",
            "country_id": "ID",
            "country_name": "Indonesia",
            "country_name_uppercase": "INDONESIA",
            "province_id": "11",
            "province_name": "ACEH",
            "regency_id": null,
            "regency_name": null,
            "district_id": null,
            "district_name": null,
            "village_id": null,
            "village_name": null,
            "full_name": "ACEH",
            "name_translated": "ACEH",
            "country_name_translated": "Indonesia",
            "country_name_translated_uppercase": "INDONESIA"
        },
        {
            "id": "12",
            "name": "SUMATERA UTARA",
            "type": null,
            "latitude": "2.11535470",
            "longitude": "99.54509740",
            "country_id": "ID",
            "country_name": "Indonesia",
            "country_name_uppercase": "INDONESIA",
            "province_id": "12",
            "province_name": "SUMATERA UTARA",
            "regency_id": null,
            "regency_name": null,
            "district_id": null,
            "district_name": null,
            "village_id": null,
            "village_name": null,
            "full_name": "SUMATERA UTARA",
            "name_translated": "SUMATERA UTARA",
            "country_name_translated": "Indonesia",
            "country_name_translated_uppercase": "INDONESIA"
        },
        {
            "id": "1212",
            "name": "DELI SERDANG",
            "type": null,
            "latitude": "3.42018020",
            "longitude": "98.70407500",
            "country_id": "ID",
            "country_name": "Indonesia",
            "country_name_uppercase": "INDONESIA",
            "province_id": "12",
            "province_name": "SUMATERA UTARA",
            "regency_id": "1212",
            "regency_name": "DELI SERDANG",
            "district_id": null,
            "district_name": null,
            "village_id": null,
            "village_name": null,
            "full_name": "SUMATERA UTARA, DELI SERDANG",
            "name_translated": "DELI SERDANG",
            "country_name_translated": "Indonesia",
            "country_name_translated_uppercase": "INDONESIA"
        },
        {
            "id": "1213",
            "name": "LANGKAT",
            "type": null,
            "latitude": "3.86539160",
            "longitude": "98.30884410",
            "country_id": "ID",
            "country_name": "Indonesia",
            "country_name_uppercase": "INDONESIA",
            "province_id": "12",
            "province_name": "SUMATERA UTARA",
            "regency_id": "1213",
            "regency_name": "LANGKAT",
            "district_id": null,
            "district_name": null,
            "village_id": null,
            "village_name": null,
            "full_name": "SUMATERA UTARA, LANGKAT",
            "name_translated": "LANGKAT",
            "country_name_translated": "Indonesia",
            "country_name_translated_uppercase": "INDONESIA"
        },
        {
            "id": "1218",
            "name": "SERDANG BEDAGAI",
            "type": null,
            "latitude": "3.33716940",
            "longitude": "99.05710890",
            "country_id": "ID",
            "country_name": "Indonesia",
            "country_name_uppercase": "INDONESIA",
            "province_id": "12",
            "province_name": "SUMATERA UTARA",
            "regency_id": "1218",
            "regency_name": "SERDANG BEDAGAI",
            "district_id": null,
            "district_name": null,
            "village_id": null,
            "village_name": null,
            "full_name": "SUMATERA UTARA, SERDANG BEDAGAI",
            "name_translated": "SERDANG BEDAGAI",
            "country_name_translated": "Indonesia",
            "country_name_translated_uppercase": "INDONESIA"
        },
        {
            "id": "1219",
            "name": "BATU BARA",
            "type": null,
            "latitude": "3.17409790",
            "longitude": "99.50061430",
            "country_id": "ID",
            "country_name": "Indonesia",
            "country_name_uppercase": "INDONESIA",
            "province_id": "12",
            "province_name": "SUMATERA UTARA",
            "regency_id": "1219",
            "regency_name": "BATU BARA",
            "district_id": null,
            "district_name": null,
            "village_id": null,
            "village_name": null,
            "full_name": "SUMATERA UTARA, BATU BARA",
            "name_translated": "BATU BARA",
            "country_name_translated": "Indonesia",
            "country_name_translated_uppercase": "INDONESIA"
        },
        {
            "id": "1271",
            "name": "SIBOLGA",
            "type": null,
            "latitude": "1.73683710",
            "longitude": "98.78511210",
            "country_id": "ID",
            "country_name": "Indonesia",
            "country_name_uppercase": "INDONESIA",
            "province_id": "12",
            "province_name": "SUMATERA UTARA",
            "regency_id": "1271",
            "regency_name": "SIBOLGA",
            "district_id": null,
            "district_name": null,
            "village_id": null,
            "village_name": null,
            "full_name": "SUMATERA UTARA, SIBOLGA",
            "name_translated": "SIBOLGA",
            "country_name_translated": "Indonesia",
            "country_name_translated_uppercase": "INDONESIA"
        },
        {
            "id": "1275",
            "name": "MEDAN",
            "type": null,
            "latitude": "3.59519560",
            "longitude": "98.67222270",
            "country_id": "ID",
            "country_name": "Indonesia",
            "country_name_uppercase": "INDONESIA",
            "province_id": "12",
            "province_name": "SUMATERA UTARA",
            "regency_id": "1275",
            "regency_name": "MEDAN",
            "district_id": null,
            "district_name": null,
            "village_id": null,
            "village_name": null,
            "full_name": "SUMATERA UTARA, MEDAN",
            "name_translated": "MEDAN",
            "country_name_translated": "Indonesia",
            "country_name_translated_uppercase": "INDONESIA"
        },
        {
            "id": "13",
            "name": "SUMATERA BARAT",
            "type": null,
            "latitude": "-0.73993970",
            "longitude": "100.80000510",
            "country_id": "ID",
            "country_name": "Indonesia",
            "country_name_uppercase": "INDONESIA",
            "province_id": "13",
            "province_name": "SUMATERA BARAT",
            "regency_id": null,
            "regency_name": null,
            "district_id": null,
            "district_name": null,
            "village_id": null,
            "village_name": null,
            "full_name": "SUMATERA BARAT",
            "name_translated": "SUMATERA BARAT",
            "country_name_translated": "Indonesia",
            "country_name_translated_uppercase": "INDONESIA"
        },
        {
            "id": "1302",
            "name": "PESISIR SELATAN",
            "type": null,
            "latitude": "-1.72231470",
            "longitude": "100.89030990",
            "country_id": "ID",
            "country_name": "Indonesia",
            "country_name_uppercase": "INDONESIA",
            "province_id": "13",
            "province_name": "SUMATERA BARAT",
            "regency_id": "1302",
            "regency_name": "PESISIR SELATAN",
            "district_id": null,
            "district_name": null,
            "village_id": null,
            "village_name": null,
            "full_name": "SUMATERA BARAT, PESISIR SELATAN",
            "name_translated": "PESISIR SELATAN",
            "country_name_translated": "Indonesia",
            "country_name_translated_uppercase": "INDONESIA"
        },
        {
            "id": "1306",
            "name": "PADANG PARIAMAN",
            "type": null,
            "latitude": "-0.55467570",
            "longitude": "100.21515780",
            "country_id": "ID",
            "country_name": "Indonesia",
            "country_name_uppercase": "INDONESIA",
            "province_id": "13",
            "province_name": "SUMATERA BARAT",
            "regency_id": "1306",
            "regency_name": "PADANG PARIAMAN",
            "district_id": null,
            "district_name": null,
            "village_id": null,
            "village_name": null,
            "full_name": "SUMATERA BARAT, PADANG PARIAMAN",
            "name_translated": "PADANG PARIAMAN",
            "country_name_translated": "Indonesia",
            "country_name_translated_uppercase": "INDONESIA"
        },
        {
            "id": "1371",
            "name": "PADANG",
            "type": null,
            "latitude": "-0.94708320",
            "longitude": "100.41718100",
            "country_id": "ID",
            "country_name": "Indonesia",
            "country_name_uppercase": "INDONESIA",
            "province_id": "13",
            "province_name": "SUMATERA BARAT",
            "regency_id": "1371",
            "regency_name": "PADANG",
            "district_id": null,
            "district_name": null,
            "village_id": null,
            "village_name": null,
            "full_name": "SUMATERA BARAT, PADANG",
            "name_translated": "PADANG",
            "country_name_translated": "Indonesia",
            "country_name_translated_uppercase": "INDONESIA"
        },
        {
            "id": "1377",
            "name": "PARIAMAN",
            "type": null,
            "latitude": "-0.62565170",
            "longitude": "100.12333960",
            "country_id": "ID",
            "country_name": "Indonesia",
            "country_name_uppercase": "INDONESIA",
            "province_id": "13",
            "province_name": "SUMATERA BARAT",
            "regency_id": "1377",
            "regency_name": "PARIAMAN",
            "district_id": null,
            "district_name": null,
            "village_id": null,
            "village_name": null,
            "full_name": "SUMATERA BARAT, PARIAMAN",
            "name_translated": "PARIAMAN",
            "country_name_translated": "Indonesia",
            "country_name_translated_uppercase": "INDONESIA"
        },
        {
            "id": "14",
            "name": "RIAU",
            "type": null,
            "latitude": "0.29334690",
            "longitude": "101.70682940",
            "country_id": "ID",
            "country_name": "Indonesia",
            "country_name_uppercase": "INDONESIA",
            "province_id": "14",
            "province_name": "RIAU",
            "regency_id": null,
            "regency_name": null,
            "district_id": null,
            "district_name": null,
            "village_id": null,
            "village_name": null,
            "full_name": "RIAU",
            "name_translated": "RIAU",
            "country_name_translated": "Indonesia",
            "country_name_translated_uppercase": "INDONESIA"
        },
        {
            "id": "1401",
            "name": "KUANTAN SINGINGI",
            "type": null,
            "latitude": "-0.44115960",
            "longitude": "101.52480550",
            "country_id": "ID",
            "country_name": "Indonesia",
            "country_name_uppercase": "INDONESIA",
            "province_id": "14",
            "province_name": "RIAU",
            "regency_id": "1401",
            "regency_name": "KUANTAN SINGINGI",
            "district_id": null,
            "district_name": null,
            "village_id": null,
            "village_name": null,
            "full_name": "RIAU, KUANTAN SINGINGI",
            "name_translated": "KUANTAN SINGINGI",
            "country_name_translated": "Indonesia",
            "country_name_translated_uppercase": "INDONESIA"
        }
    ])
    const [isSizeModal, setIsSizeModal] = useState(true)
    const [bottomSheetOpened, setBottomSheetOpened] = useState(false)
    const [sizeArr, setSizeArr] = useState([])
    const [selectedSize, setSelectedSize] = useState(100)
    const [selectedRegion, setSelectedRegion] = useState("")
    const iconUrl = (name) => { return "https://app.jala.tech/storage/" + name }

    const verifIcon = (bool) => {
        return bool ? <View style={{ backgroundColor: '#FFF8E7', borderRadius: 10, flexDirection: 'row', padding: 5 }}>
            <Image source={require('./../assets/star.svg')} style={{ width: 15, height: 15, marginRight: 5 }} />
            <Text>Terverifikasi</Text>
        </View> : <View style={{ backgroundColor: '#E5E5E5', borderRadius: 10, padding: 5 }}>
            <Text>Belum Terverifikasi</Text>
        </View>
    }

    const priceFormat = (name) => { return name == "" ? "" : String(name).replace(/\B(?=(\d{3})+(?!\d))/g, ".") }

    const renderItem = ({ item }) => (
        <View style={{ borderRadius: 10, borderWidth: 1, padding: 10, margin: 14, borderColor: '#E5E5E5' }}>
            <View>
                {/* Top */}
                <View style={{ flexDirection: "row", justifyContent: 'space-between', display: 'flex' }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ marginRight: 10 }}>
                            <Image
                                source={{
                                    uri: iconUrl(item.creator.avatar)
                                }}
                                style={{ width: 32, height: 32, borderRadius: 32 / 2 }}
                            />
                        </View>
                        <View>
                            <Text style={{ fontSize: 12, color: '#859ED1' }}>Supplier </Text>
                            <Text style={{ fontSize: 14 }}>{item.creator.name}</Text>
                        </View>
                    </View>
                    <View>
                        {
                            verifIcon(item.creator.buyer)
                        }
                    </View>
                </View>
            </View>
            <View style={{ marginVertical: 10 }}>
                <Text style={{ fontSize: 12, color: '#859ED1' }}> {item.date} </Text>
                <Text style={{ fontSize: 12 }}> {item.region.province_name} </Text>
                <Text style={{ fontSize: 18, fontWeight: 600 }}> {item.region.regency_name} </Text>
            </View>
            <View>
                <View style={{ flexDirection: "row", justifyContent: 'space-between', display: 'flex' }}>
                    <View>
                        <Text style={{ fontSize: 12, color: '#859ED1' }}> Size 100 </Text>
                        <Text style={{ fontSize: 22, fontWeight: 700 }}> IDR {priceFormat(item.size_100)} </Text>
                    </View>
                    <View style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                        <TouchableOpacity style={{ backgroundColor: '#1B77DF', padding: 5, borderRadius: 5 }}>
                            <Text style={{ color: 'white', fontWeight: 600 }}> Lihat Detail </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );

    // ref
    const bottomSheetModalRef = useRef();

    // variables
    const snapPoints = useMemo(() => ['25%', '50%', '95%'], []);

    // callbacks
    function initArray(){
        let temp = []
        for (let i = 2; i < 21; i++) {
            temp.push(i*10)
        }
        setSizeArr(temp)
    }

    const handlePresentModalPress1 = useCallback(() => {
        setIsSizeModal(true)
        initArray()
        console.log(bottomSheetOpened)
        bottomSheetModalRef.current?.present();
        setBottomSheetOpened(true)
    }, []);
    const handleCloseModalPress1 = useCallback(() => {
        setIsSizeModal(true)
        initArray()
        console.log(bottomSheetOpened)
        bottomSheetModalRef.current?.close();
        setBottomSheetOpened(false)
    }, []);
    const handlePresentModalPress2 = useCallback(() => {
        setIsSizeModal(false)
        bottomSheetModalRef.current?.present();
        setBottomSheetOpened(true)
    }, []);
    const handleCloseModalPress2 = useCallback(() => {
        setIsSizeModal(false)
        bottomSheetModalRef.current?.close();
        setBottomSheetOpened(true)
    }, []);
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
        if (index < 0){
            setBottomSheetOpened(false)
        }
    }, []);

    return (
        <BottomSheetModalProvider style={{ flex: 1 }}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
            <View style={{ position: 'absolute', flexDirection: 'row', bottom: 10, paddingHorizontal: 20, width: '100%' }}>
                <TouchableOpacity onPress={handlePresentModalPress1} style={{ backgroundColor: '#004492', height: 45, flex: 1, padding: 5, borderTopLeftRadius: 30, borderBottomLeftRadius: 30 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', flex: 1 }}>
                            <Image source={require('./../assets/biomass.svg')} style={{ width: 25, height: 25, marginHorizontal: 5 }} />
                        </View>
                        <View style={{ flex: 2 }}>
                            <Text style={{ color: 'white' }}>Size</Text>
                            <Text style={{ color: 'white', fontWeight: 700 }}>{ selectedSize }</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePresentModalPress2} style={{ backgroundColor: '#1B77DF', height: 45, flex: 2, padding: 10, borderTopRightRadius: 30, borderBottomRightRadius: 30 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                            <Image source={require('./../assets/location.svg')} style={{ width: 25, height: 25, marginRight: 5 }} />
                        </View>
                        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontWeight: 700 }}>{ selectedRegion == "" ? "Indonesia" : selectedRegion }</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={2}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
                backdropComponent={(backdropProps) => {
                    <BottomSheetBackdrop {...backdropProps} opacity={0.25} />
                }}
            >
                {
                    isSizeModal ? 
                    <View style={{  }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 10, borderBottomColor: '#E9E9E9', borderBottomWidth: 1 }}>
                            <Text style={{ fontWeight: 700 }}>Size</Text>
                            <TouchableOpacity onPress={ handleCloseModalPress1 }>
                                <Text style={{ color: '#1B77DF' }}>Tutup</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView>
                            {
                                sizeArr.map((item) => {
                                    return <TouchableOpacity key={item} onPress={ () => { setSelectedSize(item); handleCloseModalPress1() } } style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                                        <Text>{item}</Text>
                                    </TouchableOpacity>
                                })
                            }
                            <View style={{ height:40 }}></View>
                        </ScrollView>
                    </View> :
                    <View style={{  }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 10, borderBottomColor: '#E9E9E9', borderBottomWidth: 1 }}>
                            <Text style={{ fontWeight: 700 }}>Region</Text>
                            <TouchableOpacity onPress={ handleCloseModalPress2 }>
                                <Text style={{ color: '#1B77DF' }}>Tutup</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView>
                            {
                                regionList.map((item) => {
                                    return <TouchableOpacity key={item.id} onPress={ () => { setSelectedRegion(item.full_name); handleCloseModalPress2() } } style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                                        <Text>{item.full_name}</Text>
                                    </TouchableOpacity>
                                })
                            }
                            <View style={{ height:40 }}></View>
                        </ScrollView>
                    </View>
                }
            </BottomSheetModal>
        </BottomSheetModalProvider>
    )
}

const styles = StyleSheet.create({})