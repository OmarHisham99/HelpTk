import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { WebDataService } from 'src/app/web-data.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent {
  // slideItems = [
  //   {
  //     id: 1,
  //     text: ' تشرفت جمعية رأفة بعد البحث المستمر والعمل الطويل من أجل حوكمة الجمعية وتقنية اعمالها الكترونياً وتسهيل اجراءات البحث والكفالة وتسجيل اسر الايتام فوجدت انه لابد من ايجاد شركة تقوم ببرمجة الافكار لتكون واقع ملموس وتم الاقتناع بعمل شركة هلب تك لخدمتها ولها باع في انشاء مواقع الكترونية والتي تهتم بمجال الجمعيات التخصصية الايتام بشكل خاص والجمعيات الاخرى بشكل عام انتهى من العمل والان نعمل سوياً في العام الثاني .. نشكر لهم تعاونهم ... ',
  //   },
  //   {
  //     id: 2,
  //     text: ' الحمدلله وَالصَّلَاةُ وَالسَّلَامُ عَلَى الحَبِيبِ مُحَمَّدٌ صَلِّ اللهَ عَلَيْهِ وَسَلِّمْ اِنْطَلَقْنَا مَعَ مُؤَسَّسَةٍ هَلَبَ تك الرَّائِدَةَ مُنْذُ ثَلَاثِ سَنَوَاتٍ وَأَكْثَرُ ،عَمِلْنَا جَنْبًا إِلَى جَنْبٍ، فِي بَرْنَامَجِ مُمَيِّزٍ، لِجَمْعِيَّةِ آبَاءٍ لِرِعَايَةِ الأَيْتَامِ بِعَسِيرٍ, وَقَدْ كان هَذَا البَرْنَامَجَ عَلَامَةٌ بَارِزَةٌ، وَشَامَةٌ فِي الجَبِينِ، وَنُقْلَةٍ نَوْعِيَّةٌ لِلجَمْعِيَّةِ, جَعَلَتْنَا نَتَمَيَّزُ عَنْ غَيْرِنَا, بِسُرْعَةٍ المَعْلُومَةِ, وَدَقَّتْهَا, وَتُزَامِنُهَا مَعَ الحَدَثِ, وَمِمَّا يُمَيِّزُ هَلَبَ تك عَنْ غَيْرِهِ, هُوَ الأَمَانَةُ فِي العَمَلِ, وَالصِّدْقُ فِي الإِنْجَازِ, وَالرَّغْبَةُ الصَّادِقَةُ وَالمُمَيِّزَةُ فِي خِدْمَةِ العُمَلَاءِ, والأميز لَدَيْهُم هو سرعة الانجاز، شكراً هلب تك، شكراً لطاقم العمل الرائع جداً، دعواتنا لكم بمزيداً من التألق والابداع... ',
  //   },
  //   {
  //     id: 3,
  //     text: ' على مدى ٣ سنوات نحن سعداء بالتعامل مع شركة هلب تك حيث لمسنا فيهم استشعار المسؤلية تجاه العمل الخيري وسرعة الاستجابة لطلبات العميل يعملون معنا بروح الفريق الواحد بارك الله في جهودكم ',
  //   },

  //   // Add more slide items as needed
  // ];

  // currentSlideIndex = 0;

  // previousSlide() {
  //   if (this.currentSlideIndex > 0) {
  //     this.currentSlideIndex--;
  //   } else {
  //     this.currentSlideIndex = this.slideItems.length - 2; // Jump to the last visible slide (second item from the end)
  //   }
  // }
  // nextSlide() {
  //   if (this.currentSlideIndex < this.slideItems.length - 2) {
  //     this.currentSlideIndex++;
  //   } else {
  //     this.currentSlideIndex = 0; // Jump to the first visible slide
  //   }
  // }

  // goToNextSlide() {
  //   if (this.currentSlideIndex < this.slideItems.length - 2) {
  //     this.currentSlideIndex++;
  //   } else {
  //     this.currentSlideIndex = 0; // Jump to the first visible slide
  //   }
  // }

  // getSliderTrackStyle() {
  //   const slideWidth = 100 / 3; // Adjust the number to control the number of visible slides
  //   const offset = -this.currentSlideIndex * slideWidth;
  //   return {
  //     transform: `translateX(${offset}%)`,
  //   };
  // }

  reviews: any;

  constructor(
    private webDataService: WebDataService,
    public translate: TranslateService
  ) {
    this.fetchData();
  }

  fetchData(): void {
    this.webDataService.getReviews().subscribe((data) => {
      this.reviews = data.data;
      console.log(this.reviews);
    });
  }
}
