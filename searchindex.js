// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("https://dristikononline.in/index.html", "Welcome To Dristikon Online", "Dristikon, Drishtikon, Dristikon Online, Online, App, Android App, Short Films, Download, article   dristikononline.in , in, india, made in india ,,join , amazon, netflix , youtube, binod, drishtikone full movie download, dristikon online app, drishtikone full movie download utorrent, drishtikone online watch, drishtikone full movie online watch free,  drist, drishtikone full movie watch online dailymotion, Watch Drishtikone full movie online in HD,dristikon online kaustav roy, dristikon online website, vip, prime, streaming, platform, articles, students,  ", "Join Dristikon Online to watch the latest Cultural Video, Short Films, Dance Video, Magazines and Dristikon Original Shows.");
   this[database_length++] = new SearchPage("https://dristikononline.in/Terms_and_Conditions.html", "Terms and Conditions Dristikon", "Dristikon, Drishtikon, Dristikon Online, Online, App, Android App, Short Films, Download, articles, terms and conditions for website, terms and conditions for website india,non profit organisation terms and conditions,Terms and Conditions of dristikon online, t&c,drist ", "Thanks to all the users as well as the members of our Dristikon family. Everyone is hereby requested to agree with the fair use of our services that we provide to all.");
   this[database_length++] = new SearchPage("https://dristikononline.in/Download.html", "Dristikon Online App Download", "Download App, App, Android, Dristikon App, Download Page, Free App, App , Free App, Download Free ", "Download Dristikon Online App for free and enjoy family friendly contetnt without paying anything");
   this[database_length++] = new SearchPage("https://dristikononline.in/privacypolicy.html", "Privacy Policy", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/promotion.html", "Promotion", "Promotion, Promote, App,Website promotion, Dristikon Promotion ", "Now Promote Your Work With Dristikon Online");
   this[database_length++] = new SearchPage("https://dristikononline.in/contactus.html", "Contact Us", "contact us, contact, help, contact dristikon online,  ", "Contact Dristikon Online Management Team");
   this[database_length++] = new SearchPage("https://dristikononline.in/articles.html", "Dristikon Articles", "articles, web articles, blog, dristikon, latest blog, gita, medical blog ", "We would be happy to help you in your projects and assignments with our own articles and research works from various  fields. You can also help others with yours through us");
   this[database_length++] = new SearchPage("https://dristikononline.in/soumyadyuti.html", "Soumyadyuti's Article", "articles, new blog, dristikon articles, web blog ", "We would be happy to help you in your projects and assignments with our own articles and research works from various  fields. You can also help others with yours through us");
   this[database_length++] = new SearchPage("https://dristikononline.in/stuti.html", "Stuti's Article", "articles, new blog, dristikon articles, web blog ", "We would be happy to help you in your projects and assignments with our own articles and research works from various  fields. You can also help others with yours through us");
   this[database_length++] = new SearchPage("https://dristikononline.in/soubhik.html", "Soubhik's Article", "articles, new blog, dristikon articles, web blog ", "We would be happy to help you in your projects and assignments with our own articles and research works from various  fields. You can also help others with yours through us");
   this[database_length++] = new SearchPage("https://dristikononline.in/membership.html", "Dristikon Annual Membership", "membership, dkon member, member 2020, new member, member of dristikon ", "The persons who are interested to get the membership of  Dristikon  family should fill up and submit this form. Annual subscription for this membership is 150/-  In lieu of this subscription the member s  will be provided with I-card, yearly magazine and many other facilities.");
   this[database_length++] = new SearchPage("https://dristikononline.in/donate.html", "DRISTIKON ONLINE COVID RELIEF FUND", "covid, relief fund, contribution , corona , donate,  ", "DRISTIKON ONLINE COVID RELIEF FUND");
   this[database_length++] = new SearchPage("https://dristikononline.in/donate_mobile.html", "DRISTIKON ONLINE COVID RELIEF FUND", "covid, relief fund, contribution , corona ", "DRISTIKON ONLINE COVID RELIEF FUND");
   this[database_length++] = new SearchPage("https://dristikononline.in/ourteam.html", "Our Team", "our team , team ", "Our Team");
   this[database_length++] = new SearchPage("https://dristikononline.in/contribute.html", "CONTRIBUTE TO DRISTIKON ONLINE", "covid, relief fund, contribution , corona , donate,  ", "CONTRIBUTE TO DRISTIKON ONLINE");
   this[database_length++] = new SearchPage("https://dristikononline.in/contribute_mobile.html", "CONTRIBUTE TO DRISTIKON ONLINE", "covid, relief fund, contribution , corona ", "CONTRIBUTE TO DRISTIKON ONLINE");
   this[database_length++] = new SearchPage("https://dristikononline.in/page1.html", "Untitled Page", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/page2.html", "Untitled Page", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/bajitpur2021.html", "BAJITPUR SARBOJONIN/বাজিৎপুর সর্বজনীন", "বাজিৎপুর সর্বজনীন, Bajitpur, bajitpur sarbojonin, bajitpur sorbojonin ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/udaysangha2021.html", "Uday Sangha Sorbojonin/উদয় সংঘ সর্বজনীন", "উদয় সংঘ সর্বজনীন, uday sangha sarbojonin, uday sangha ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/natunbajar2021.html", "Natun Bazar Sorbojonin/নূতনবাজার সর্বজনীন", "Notunbazar sorbojonin, নূতনবাজার সর্বজনীন, notun bazar ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/bajar-sarbojonin2021.html", "Bazar Sorbojonin/বাজার সর্বজনীন", "Bazar Sorbojonin,বাজার সর্বজনীন, Bazar sarbojonin ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/amtolabajar2021.html", "Amtola Bazar Sorbojonin/আমতলা বাজার সর্বজনীন", "Amtola Bazar, Amtola bazar Sarbojonin, আমতলা বাজার সর্বজনীন ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/JKBajatbottala2021.html", "Joykrishna Bazar Sorbojonin/জয়কৃষ্ণবাজার বটতলা সর্বজনীন", "J k Bazar bottala, জয়কৃষ্ণবাজার বটতলা সর্বজনীন Joykrishna bazar bottala ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Tarakeswar-jkbajar-durgotsob2021.html", "Tarakeswar J K Bazar Durgotsob/তারকেশ্বর জে.কে বাজার দুর্গোৎসব", "Tarakeswar j k bazar, J k Bazar sorbojonin, তারকেশ্বর জে.কে বাজার দুর্গোৎসব ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/tetultola-sarbojonin2021.html", "Tetultola Sorbojonin/তেঁতুলতলা সর্বজনীন", "tetultola sorbojonin, tetultola, তেঁতুলতলা সর্বজনীন ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/nutongramsorbojonin2021.html", "Notungram Sorbojonin/নূতনগ্রাম সর্বজনীন", "Notungram Sorbojonin , নূতনগ্রাম সর্বজনীন, notungram ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Mandirparasorbojonin2021.html", "Mandirpara Sorbojonin/মন্দিরপাড়া সর্বজনীন", "Mondirpara sorbojonin, mandirpara sarbojonin, মন্দিরপাড়া সর্বজনীন ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/ichchasorojonin2021.html", "Ichcha Sorbojonin/ইচ্ছা সর্বজনীন", "Ichcha, Ichcha sorbojonin,ইচ্ছা সর্বজনীন ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Parmohol2021.html", "Parmohol Sorbojonin/পাড়মহল সর্বজনীন", "Parmohol, Parmohol Sarbojonin, পাড়মহল সর্বজনীন ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/guesthouseroad2021.html", "Guest House Road Sorbojonin/গেস্টহাউস রোড সর্বজনীন ", "Guest House Road Sorbojonin, গেস্টহাউস রোড সর্বজনীন ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/tarakeswarsorbojonin2021.html", "Tarakeswar Sorbojonin/তারকেশ্বর সর্বজনীন", "Tarakeswar Sorbojonin, তারকেশ্বর সর্বজনীন ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/netaji-road-sorbojonin2021.html", "Netaji Subhash Road Sorbojonin/নেতাজী সুভাষ রোড সর্বজনীন", "Netaji Subhash Road Sorbojonin, নেতাজী সুভাষ রোড সর্বজনীন ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/uttoron-songhosorbojonin2021.html", "Uttoron Songho Sorbojonin/উত্তরণ সংঘ সর্বজনীন", "Uttoron Songho Sorbojonin, উত্তরণ সংঘ সর্বজনীন ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/durontosongho2021.html", "Duronto Songho Sorbojonin/দুরন্ত সংঘ সর্বজনীন", "Duronto Songho Sorbojonin, দুরন্ত সংঘ সর্বজনীন ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/baghajotin2021.html", "Baghajotin Sorbojonin/বাঘাযতীন সর্বজনীন", "Baghajotin Sorbojonin, বাঘাযতীন সর্বজনীন ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/biswas-abason2021.html", "Biswas Abason Durgotsob/বিশ্বাস আবাসন দুর্গোৎসব", "Biswas Abason, বিশ্বাস আবাসন দুর্গোৎসব ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/kalyani-abason2021.html", "Kalyani Abason Durgotsob/কল্যাণি আবাসন দুর্গোৎসব", "Kalyani Abason Durgotsob, কল্যাণি আবাসন দুর্গোৎসব ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/moinak-durgotsob2021.html", "Moinak Durgotsob/মৈনাক দুর্গোৎসব", "Moinak Durgotsob, মৈনাক দুর্গোৎসব ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/bibekanandapalli2021.html", "VivekanandaPalli Durgotsob/বিবেকানন্দপল্লী দুর্গোৎসব", "VivekanandaPalli Durgotsob, বিবেকানন্দপল্লী দুর্গোৎসব ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/r-s-2021.html", "Ramkrishnapalli-Saradapalli Durgotsob/রামকৃষ্ণপল্লী-সারদাপল্লী দুর্গোৎসব", "রামকৃষ্ণপল্লী-সারদাপল্লী দুর্গোৎসব, Ramkrishnapalli-Saradapalli Durgotsob ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Saradapalli-sarbojonin2021.html", "Saradapalli Sorbojonin/সারদাপল্লী সর্বজনীন", "Saradapalli Sorbojonin, সারদাপল্লী সর্বজনীন ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Rabindrapalli-Sarbojonin2021.html", "Rabindrapalli Sorbojonin/রবীন্দ্রপল্লী সর্বজনীন", "Rabindrapalli Sorbojonin, রবীন্দ্রপল্লী সর্বজনীন ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/sukantrapalli-sorbojonin2021.html", "Sukantapalli Sorbojonin", "Sukantapalli Sorbojonin, সুকান্তপল্লী সর্বজনীন ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/padmapukurdakhinpara2021.html", "Padmapukur Dakshinpara Sorbojonin/পদ্মপুকুর দক্ষিণপাড়া সর্বজনীন", "Padmapukur Dakshinpara Sorbojonin , পদ্মপুকুর দক্ষিণপাড়া সর্বজনীন ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/padmapukursarbojonin2021.html", "Padmapukur Sorbojonin/পদ্মপুকুর সর্বজনীন", "Padmapukur Sorbojonin, পদ্মপুকুর সর্বজনীন ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Bprgate2021.html", "B P R Sorbojonin(Okalbodhon)/বি পি আর সর্বজনীন(অকালবোধন)", "B P R Sorbojonin Okalbodhon  , বি পি আর সর্বজনীন অকালবোধন  ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/MadhyaChaulpattysarbojonin2021.html", "Madhya Chaulpatty Sorbojonin/মধ্য চাউলপট্টী সর্বজনীন", "Madhya Chaulpatty Sorbojonin, মধ্য চাউলপট্টী সর্বজনীন ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Chaulpattysarbojonin2021.html", "Chaulpatty Sorbojonin/চাউলপট্টী সর্বজনীন", "Chaulpatty Sorbojonin, চাউলপট্টী সর্বজনীন ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/SahapurMahasakti2021.html", "Sahapur Mohasakti Sorbojonin", "সাহাপুর মহাশক্তি সর্বজনীন , Sahapur Mohasakti sorbojonin ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Sahapursarbojonin2021.html", "Sahapur Sorbojonin/সাহাপুর সর্বজনীন", "Sahapur Sorbojonin, সাহাপুর সর্বজনীন ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/mohanbatisrijon2021.html", "Mohanbati Srijon/মোহনবাটী সৃজন", "Mohanbati Srijon, মোহনবাটী সৃজন ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/mohanbati-chakrabartibari2021.html", "Mohanbati Chakrabarti Barir Pujo/চক্রবর্তী বাড়ির পুজো", "Mohanbati Chakrabarti Barir Pujo, চক্রবর্তী বাড়ির পুজো ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/pfc2021.html", "P F C Durgotsob/পি এফ সি দুর্গোৎসব", "P F C Durgotsob , পি এফ সি দুর্গোৎসব ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Tullyanthakurbari2021.html", "Tullyan Thakur Barir Durgotsob/তুল্যান ঠাকুরবাড়ি দুর্গোৎসব", "Tullyan Thakur Barir Durgotsob, তুল্যান ঠাকুরবাড়ি দুর্গোৎসব ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/nandibari2021.html", "Nandibarir Durgadalam/নন্দী বাড়ির দূর্গাদালান ", "Nandibarir Durgadalam , নন্দী বাড়ির দূর্গাদালান  ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/palbari2021.html", "Pal Barir Durgotsob/পাল বাড়ির দুর্গোৎসব", "Pal Barir Durgotsob , পাল বাড়ির দুর্গোৎসব ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/nalikul-borgachia2021.html", "Nalikul Borgachia Udoyon Songho/নালিকুল বড়গাছিয়া উদয়ন সংঘ", "Nalikul Borgachia Udoyon Songho, নালিকুল বড়গাছিয়া উদয়ন সংঘ ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/webmag/webmag.html", "Dristikon WebMag", "webmag, magazines, free, submission, upload, new web, puja, ", "দৃষ্টিকোণ ম্যাগাজিন উৎসব সংখ্যা ২০২০");
   this[database_length++] = new SearchPage("https://dristikononline.in/webmag/write.html", "Dristikon WebMag", "webmag, magazines, free, submission, upload, new web, puja, ", "দৃষ্টিকোণ ম্যাগাজিন উৎসব সংখ্যা ২০২০");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/pujo2020.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", "hooghly puja, tarakeswar puja, durga puja, pujo, online puja, dristikon puja, tarakeswar central commettee,tarakeswar,pujo2020,dristikon online ", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/pujolist.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/radhanagar.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/bajitpur.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/udaysangha.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/bajar.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/tetultola.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/nutongram.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/mandirpara.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/ichcha.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/parmohol.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/gesthouse.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/tarkeswar.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/netajisubhash.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/uttoron.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/mohadevi.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/durontosangha.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/baghajatin.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/abason.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/polliutsob.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/padmapukur.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/bpr.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/chaulpatty.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/prantik.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/sahapur.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/mohanbati.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/pfc.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/tullyan.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/salepur.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/nachipur.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/teghari.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/doshghara.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/bissasbari.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/srirampur.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/kamarpukur.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/page3.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/haripal.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/harpal2.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/mojpur.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/santoshpur.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/soyaluk.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/nalikul.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/champadanga.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/oursoldiers.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/Archives/kalipuja.html", "kalipuja2020", "kalipuja2020, diwali, happy diwali, diwali 2020, kali pujo ", "Dristikon Online Wishes You Happy Diwali");
   this[database_length++] = new SearchPage("https://dristikononline.in/comingsoon.html", "coming soon", "Dristikon, Drishtikon, Dristikon Online, Online, App, Android App, Short Films, Download, article   dristikononline.in , in, india, made in india ,,join , amazon, netflix , youtube, binod, drishtikone full movie download, dristikon online app, drishtikone full movie download utorrent, drishtikone online watch, drishtikone full movie online watch free,  drist, drishtikone full movie watch online dailymotion, Watch Drishtikone full movie online in HD,dristikon online kaustav roy, dristikon online website, vip, prime, streaming, platform, articles, students,  ", "Join Dristikon Online to watch the latest Cultural Video, Short Films, Dance Video, Magazines and Dristikon Original Shows.");
   this[database_length++] = new SearchPage("https://dristikononline.in/register.html", "Register Your Puja", "Dristikon, Drishtikon, Dristikon Online, Online, App, Android App, Short Films, Download, article   dristikononline.in , in, india, made in india ,,join , amazon, netflix , youtube, binod, drishtikone full movie download, dristikon online app, drishtikone full movie download utorrent, drishtikone online watch, drishtikone full movie online watch free,  drist, drishtikone full movie watch online dailymotion, Watch Drishtikone full movie online in HD,dristikon online kaustav roy, dristikon online website, vip, prime, streaming, platform, articles, students,  ", "Join Dristikon Online to watch the latest Cultural Video, Short Films, Dance Video, Magazines and Dristikon Original Shows.");
   this[database_length++] = new SearchPage("https://dristikononline.in/log-in.html", "Log-In", "Dristikon, Drishtikon, Dristikon Online, Online, App, Android App, Short Films, Download, article   dristikononline.in , in, india, made in india ,,join , amazon, netflix , youtube, binod, drishtikone full movie download, dristikon online app, drishtikone full movie download utorrent, drishtikone online watch, drishtikone full movie online watch free,  drist, drishtikone full movie watch online dailymotion, Watch Drishtikone full movie online in HD,dristikon online kaustav roy, dristikon online website, vip, prime, streaming, platform, articles, students,  ", "Join Dristikon Online to watch the latest Cultural Video, Short Films, Dance Video, Magazines and Dristikon Original Shows.");
   this[database_length++] = new SearchPage("https://dristikononline.in/forget-password.html", "forget password", "Dristikon, Drishtikon, Dristikon Online, Online, App, Android App, Short Films, Download, article   dristikononline.in , in, india, made in india ,,join , amazon, netflix , youtube, binod, drishtikone full movie download, dristikon online app, drishtikone full movie download utorrent, drishtikone online watch, drishtikone full movie online watch free,  drist, drishtikone full movie watch online dailymotion, Watch Drishtikone full movie online in HD,dristikon online kaustav roy, dristikon online website, vip, prime, streaming, platform, articles, students,  ", "Join Dristikon Online to watch the latest Cultural Video, Short Films, Dance Video, Magazines and Dristikon Original Shows.");
   return this;
}
