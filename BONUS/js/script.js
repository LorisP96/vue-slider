var app = new Vue({
    el: '#app',
    data: {
        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ],
        currentThumb: 0,
        myInterval: null,
    },
    methods: {

        showElementAtClick(index) {
            this.currentThumb = index;
        },
        
        showNextElement() {
            if(this.currentThumb < this.slides.length - 1) {
                this.currentThumb++;
            } else {
                this.currentThumb = 0;
            }
        },

        showPrevElement() {
            if(this.currentThumb > 0) {
                this.currentThumb--;
            } else {
                this.currentThumb = this.slides.length - 1;
            }
        },
        
        stopInterval() {
            clearInterval(this.myInterval);
            this.myInterval = null;

        },

        startInterval() {
            this.myInterval = setInterval(this.showNextElement, 3000)
        },
    },
    mounted() {
        this.startInterval();
    },
})
