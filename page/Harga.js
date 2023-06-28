import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as api from './../services/api'

export default function Harga() {

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
  const [page, setPage] = useState(1);
  const size = 10
  useEffect(() => {
    console.log("useEffect 1")
    loadData(0)
  }, [])

  const iconUrl = (name) => { return "https://app.jala.tech/storage/"+name }



  function loadData() {
    let x = data.slice(); // Create a new copy of the array
    // api.getPriceList(page, size).then((res) => {
    //   setData(res.data)
    // })
    // setTimeout(() => {
    //   for (let i = 0; i < 10; i++) {
    //     x.push(i)
    //     console.log(i)
    //   }
    //   console.log(x)
    //   setData(x);
    //   console.log(data)
    // }, 2000);
  }
  return (
    <View>
      {
        data.map((d) => {
          return <View style={styles.mCardContentHargaUdang}>
          <View style={styles.rectangle1655}></View>
    
          <View style={styles.frame11410}>
            <Text style={styles.nusaTenggaraBarat}>Nusa Tenggara Barat</Text>
    
            <Text style={styles.sumba}>Sumba</Text>
          </View>
    
          <View style={styles.frame11332}>
            <Text style={styles._16Januari2020}>16 Januari 2020</Text>
          </View>
    
          <View style={styles.group11380}>
            <View style={styles.frame11337}>
              <View style={styles.frame11380}>
                <View style={styles.group11379}>
                  <View style={styles.ellipse1729}></View>
    
                  <Image
                    style={styles.iconsToggleStar}
                    source={{ uri: iconUrl(d.creator.avatar) }}
                  />
                </View>
    
                <Text style={styles.terverifikasi}>Terverifikasi</Text>
              </View>
            </View>
          </View>
    
          <View style={styles.frame11500}>
            <View style={styles.group11409}>
              <Text style={styles.size100}>size 100</Text>
    
              <Text style={styles.idr56500}>IDR 56.500</Text>
            </View>
    
            <View style={styles.button01RoundedColor}>
              <View style={styles.frame11578}>
                <Text style={styles.lihatDetail}>LIHAT DETAIL</Text>
              </View>
            </View>
          </View>
    
          <View style={styles.frame11408}>
            <View style={styles.avatarsAvatarMen24Px}>
              <Image style={styles.ellipse} source={{ uri: iconUrl(d.creator.avatar) }} />
            </View>
    
            <View style={styles.frame115002}>
              <Text style={styles.supplier}>Supplier</Text>
    
              <Text style={styles.minaUdangBarokah}>Mina Udang Barokah</Text>
            </View>
          </View>
        </View>
        //   return <View class="m-card-content-harga-udang">
        //   <View class="rectangle-1655"></View>
        
        //   <View class="frame-11410">
        //     <View class="nusa-tenggara-barat">Nusa Tenggara Barat</View>
        
        //     <View class="sumba">Sumba</View>
        //   </View>
        
        //   <View class="frame-11332">
        //     <View class="_16-januari-2020">16 Januari 2020</View>
        //   </View>
        
        //   <View class="group-11380">
        //     <View class="frame-11337">
        //       <View class="frame-11380">
        //         <View class="group-11379">
        //           <View class="ellipse-1729"></View>
        
        //           <svg
        //             class="icons-toggle-star"
        //             width="12"
        //             height="12"
        //             viewBox="0 0 12 12"
        //             fill="none"
        //             xmlns="http://www.w3.org/2000/svg"
        //           >
        //             <path
        //               d="M6 8.625L2.90625 10.5L3.72656 6.98438L1.00781 4.61719L4.59375 4.3125L6 1.00781L7.40625 4.3125L10.9922 4.61719L8.27344 6.98438L9.09375 10.5L6 8.625Z"
        //               fill="white"
        //             />
        //           </svg>
        //         </View>
        
        //         <View class="terverifikasi">Terverifikasi</View>
        //       </View>
        //     </View>
        //   </View>
        
        //   <View class="frame-11500">
        //     <View class="group-11409">
        //       <View class="size-100">size 100</View>
        
        //       <View class="idr-56-500">IDR 56.500</View>
        //     </View>
        
        //     <View class="button-01-rounded-color">
        //       <View class="frame-11578">
        //         <View class="lihat-detail">LIHAT DETAIL</View>
        //       </View>
        //     </View>
        //   </View>
        
        //   <View class="frame-11408">
        //     <View class="avatars-avatar-men-24-px">
        //       <img class="ellipse" src="ellipse.png" />
        //     </View>
        
        //     <View class="frame-115002">
        //       <View class="supplier">Supplier</View>
        
        //       <View class="mina-udang-barokah">Mina Udang Barokah</View>
        //     </View>
        //   </View>
        // </View>
        
          // <View style={{borderColor:'gray', borderWidth:1, margin: 10, padding: 10, borderRadius: 5}} key={d.id}>
          //   <View style={{ flexDirection: "row" }}>
          //     <Image 
          //       source={{ uri: iconUrl(d.creator.avatar) }}
          //       style={{ width: 30, height: 30, borderRadius: 50}}
          //       alt='image'
          //     />
          //     <View>
          //       <Text>Supplier </Text>
          //       <Text>{d.creator.name}</Text>
          //     </View>
          //     <View>
          //       <Text>{d.creator.buyer}</Text>
          //     </View>
          //   </View>
          //   <View style={{ }}>
          //   <Text key={d.id}>coba {d.contact}</Text>
          //   </View>

          // </View>          
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  mCardContentHargaUdang: {
    boxSizing: 'border-box',
  },
  mCardContentHargaUdangContainer: {
    flexShrink: 0,
    width: 322,
    height: 175,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  rectangle1655: {
    backgroundColor: '#ffffff',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    width: 322,
    height: 175,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  frame11410: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: 296,
    position: 'absolute',
    left: 12,
    top: 76,
    overflow: 'hidden',
  },
  nusaTenggaraBarat: {
    color: '#454646',
    textAlign: 'left',
    fontFamily: 'Lato',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    position: 'relative',
    width: 296,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  sumba: {
    color: '#454646',
    textAlign: 'left',
    fontFamily: 'Lato',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 24,
    position: 'relative',
    width: 296,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  frame11332: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 90,
    position: 'absolute',
    left: 12,
    top: 56,
    overflow: 'hidden',
  },
  _16Januari2020: {
    color: '#859ed1',
    textAlign: 'left',
    fontFamily: 'Lato',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    position: 'relative',
  },
  group11380: {
    position: 'absolute',
    inset: 0,
  },
  frame11337: {
    backgroundColor: '#fff8e7',
    borderRadius: 27.5,
    paddingVertical: 3,
    paddingHorizontal: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    right: 12,
    top: 12,
    overflow: 'hidden',
  },
  frame11380: {
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexShrink: 0,
    position: 'relative',
    overflow: 'hidden',
  },
  group11379: {
    flexShrink: 0,
    width: 16,
    height: 16,
    position: 'static',
  },
  ellipse1729: {
    backgroundColor: 'linear-gradient(180deg, rgba(255, 210, 51, 1) 0%, rgba(246, 166, 44, 1) 100%)',
    borderRadius: 8,
    width: 16,
    height: 16,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  iconsToggleStar: {
    position: 'absolute',
    left: 2,
    top: 2,
    overflow: 'visible',
  },
  terverifikasi: {
    color: '#454646',
    textAlign: 'left',
    fontFamily: 'Lato',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  frame11500: {
    flexDirection: 'row',
    gap: 48,
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    left: 12,
    top: 120,
    overflow: 'hidden',
  },
  group11409: {
    flexShrink: 0,
    width: 124,
    height: 44,
    position: 'static',
  },
  size100: {
    color: '#859ed1',
    textAlign: 'left',
    fontFamily: 'Lato',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    position: 'absolute',
    left: 0,
    top: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  idr56500: {
    color: '#454646',
    textAlign: 'left',
    fontFamily: 'Lato',
    fontWeight: '900',
    fontSize: 22,
    lineHeight: 28,
    position: 'absolute',
    left: 0,
    top: 16,
    width: 124,
    height: 28,
  },
  button01RoundedColor: {
    backgroundColor: '#1b77df',
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 16,
    flexDirection: 'column',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexShrink: 0,
    position: 'relative',
  },
  frame11578: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexShrink: 0,
    position: 'relative',
    overflow: 'hidden',
  },
  lihatDetail: {
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: 'Lato',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 20,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  frame11408: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    left: 12,
    top: 12,
    overflow: 'hidden',
  },
  avatarsAvatarMen24Px: {
    flexShrink: 0,
    width: 32,
    height: 32,
    position: 'relative',
  },
  ellipse: {
    borderRadius: 50,
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    top: 0,
  },
  frame115002: {
    flexDirection: 'column',
    gap: 0,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexShrink: 0,
    position: 'relative',
    overflow: 'hidden',
  },
  supplier: {
    color: '#859ed1',
    textAlign: 'left',
    fontFamily: 'Lato',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  minaUdangBarokah: {
    color: '#454646',
    textAlign: 'left',
    fontFamily: 'Lato',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    position: 'relative',
  },
});
