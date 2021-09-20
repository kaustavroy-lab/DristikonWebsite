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
   this[database_length++] = new SearchPage("https://dristikononline.in/Puja2021test.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
   this[database_length++] = new SearchPage("https://dristikononline.in/tarakeswar2021.html", "হুগলী জেলার পুজা পরিক্রমা With দৃষ্টিকোণ", " ", "");
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
