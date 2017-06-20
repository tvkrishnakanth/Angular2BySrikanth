"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var DirectiveComponent = (function () {
    function DirectiveComponent() {
        var _this = this;
        this.names = [
            { no: 1, name: "Machineni", isMale: true },
            { no: 2, name: "Todupunnuri", isMale: true },
            { no: 3, name: "Adicharla", isMale: false },
            { no: 4, name: "Samala", isMale: false },
        ];
        this.tblItems = [
            { no: 1, name: "Machineni", gender: "male", company: "Deloitte" },
            { no: 2, name: "Todupunnuri", gender: "male", company: "Deloitte" },
            { no: 3, name: "Adicharla", gender: "male", company: "Deloitte" },
            { no: 4, name: "Samala", gender: "male", company: "Deloitte" },
            { no: 5, name: "Serrna williams", gender: "female", company: "Microsoft" },
            { no: 6, name: "Shakira", gender: "female", company: "Amazon" },
        ];
        this.hello = function () {
            alert("Hi");
        };
        this.angularDocsUrl = "http://www.google.com";
        this.hideElement = true;
        this.imageurl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA0lBMVEX////DAC/dADHQADDdAC7BACXdAC/DAC3cACjCACrVa3zcACreHj3FHjvcACXbABXna33AABrBACG/ABLbABzcACHKN1DhN1HtwsnbABT+9vjAAB2+AADlp7G/AA/bABr02t/dipf64eX66u3tlKD41tvkVWrum6bys7vaAAjwq7TZfIrqf4798/XgJ0bVZXbjnKbNQVrjRl7SWmzgkp3GETnpd4b0vsXzuMDSHjzvys/sjZrptr7hLk7kT2bWN1DmYHLYdYTTXG7QTmLhoKjLAABRWjQVAAAMA0lEQVR4nO2da1viSBCFuYUYUTEEVIQJCILCiK7Oelldb+vu//9LS4KRhKrudHcVF+fJ+9FxIofAOV3Vl+RyGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZCI939avHdb+I5dF72mnuFS0v/3Ow7peyDPpnl6O9UqFQzOftmn/7Z2/dL4iXyfim05jKK4QK86HIgx/9db8sNu7fqvVKuVCIKZzitNoffx+v+7Ux8Hi31dmK5MUVBiJd9+po3S+QxuBipxmXt6Bw+mm1PPv92/rO1Fuae6XCAkmF4VfSy39H3zke3zQbQB6m8NN3/p2s+yVrcT8c1SuIPIHCme9cfxvfedyvdLZweWKFoe/UvoPvDC7K1QVvUVUY+I7b+rnRg7qpt1T3ZPJSFM585/ZkQ31nOm4Zod6ipTAU2T74Y/PGO/fDjshbdBUGX8mWd32+Sb5ztN/oVFI+nVoKpzfScb1N8Z3BRaUj9RYjhfnQd9z1j3f6p9Nxi7o8LYWhSH+tvtMfH6p4C0FhPhzv7K7Jdx6GdTVvSVLRVJgPfMf/+LFq3znaryp7S4LGuKUvMRjvtFfpO4OLgnzcIrmDN7lrx0RiPm+51vtKxjs9bW+J0zzKHXlmCkPfyZ90lytvMj6santLjNLl9CK7hjcxFFnzlug7xw/DZsPAW2LUx9Pr/HDNFU5xau3l+M7RfqcuronUKO+Fl6rZJImB7/j//M0rj+AtcRpP4dVOakSF4XiH0Xd6pwWCt8RvYX3Wqei71Js4E+nVTrp0eVNvwfstBmztf15022JQmA/HO69E3zkfjojeEmcUjTC7bR6F+Vl/54e5wMGIT16Y9hGmqY+LbJt/IScjRoGF6nzYZZ76GD7hg9rhMJhPwrSPoKQ+oG0uMHfJ5DEBYdpHEFM/ge0QFL7xfQ/LW4krk1N/jvOLoPCOOoqZ0zhNXJkh9SOsK4LCswaXwCjtI3hSP6R2QlB4XudSuHe3cGmu1M/nW5Qh6lGHS+FosZ/U9bkUuhSF/SqTwMoLuDZb6lPiMDdpMAViFQ472FLfI41MCzwKS8/ItZlS385TBOaeeSK/c45cmyn17V2SwjeWQCwX0ItbLIHhXJMUPu1xKFxI+wie1CfFIVPkl6t442jic9xEosJ7jsgHaR9xxZH6pDic1sAcgdgUzR6xpL5Ha0j1m3SBW0Ph5T8YAsMnzr5V6YHYFL/JHKlPqX8DdsiBiKZ9xC3Za2yLqPCFXAOjaR9BT31iHOZy+9TIL+FpH+FQb6JFqfADnqiB2DiTXp+c+rWfRIVjokJR2kdMqIHRIvSDQ+6JNfDeRcofoNb67gNRYY8W+eVqWlp1iYHhdYkK+3VSIErSPoKY+rT6N8BoxcUXMO3Hiz+gpb5tkaeDSZFfOVy83OQ/sNqZVOsTK/wAUuR3gA2c/ffH4o9Iqe8ckBVeEGpgJO0LxVvwM0qtb1HjMJc7JQQiTPv7atEDa5soqU8O/FzuwbwGLjeAC7xUis7H4g/7nvlNJDW8ZzyaRz5M+96oUMy3gb8TUt+lr3brmdfATSBl+qUuIh8sQq3v0ZfYHhsParbewMWm4VrM2w748Jp3+H2yQELbuwne3nE9XEELe0fGqW/XGBTeGAZibOlFxPNsDymSYaapzxCH5m3vzv3ilQbBVzpYBe2Du2ua+tCYDTCMfCTtw35BoNDaBv9mOCVsvTMoNGx710HaT8IyJVBou2Bwapj6rX8ZFJpFfnkLGObsrQrX6rfA4NRwXp9c4QeYtb2R2r5Q+lJow8GpWeozxOE08o0GNSOQ9vezd2q23wIOTs1W83ks201Mqnwk7YeVmEKkB2iS+rbLshzaJPJh2kejv889M3B5gUnqswT+NPL1q3wk7aPQ+VSIzPoZpL5Dm+GOMFj6VQVpn4uWiX8qRKYbDFIfCVYT9Ge6SzvgIl+rq6KdXcjEpn6tz1D/Bui3vWHa5w6jj3qkEBlR6qc+S+AbtL0/t1XEGXytNv7aned3F39Jv9ZnqH/DV6cb+Z/bKuLMp7C+FCLfIe3UJ85wR+jWwOUqSILJPFO/FCKDU+1a3+fZHXRc1gvEr20Vc2Kj9/keUjg41e3wMwV+zCXUgGkfb5zPFSKDU83Ud155BGq2vZG0P4p9zmP7gOHgVHNenzzDHXGnFYhI2g9jY4aYQmRwqpf6pBXecbRq4MS2ihm9Kn6Kko3MjGnN69fgN9mMsU4NXAfTZ8m1APHd6sjgVCv1Ea8yQ6ftXa7D/58ov+IKbRf87kSnTGSKQ722N5L254k3KHHiADI41VnNR57hjjhW3+BVrsOvVjJsEgoRM9RJfZ/tbCn1Kh9J+8GoUopRdOK0u+D3NVKfuqRtjvpq7xF8xU/Ph3FeDxJAr1FPfYYZ7gjltjeS9voo1/pscajR9q5yVDPKqc9U4Qeo1sBI2pugWuuzxaF62xtJexNUU5+4wjuOYg1crvD8OdU1/EwVfoDiam8k7c1QrPVJW7qSHCudGFHucAWwWuojTQJzlJZ+7cG0N0Wpw0/c8JREqe0t3Fahj1Lqs8xwR6is9kY2UZqjkvoWxwx3hMpqb5a0j1BJ/dqfjH9QIfKZ0j5CYb9+i1Ohwo7nDk/aRyikPmMcqkS+YBOlMQrz+iwz3BHph5wINlGak5761C1dSVI3eI24T99Kn9fnq38D0g45wTZRFnYw/trFQIw/LfVJR5pAhiltbyTtHzoljKKN0Yb/Py31WRZ8zUmZ6a4g2yoEK/7w0z2xydyU1Ges8ANSVns3oXGLWpC4Quwjl5L6xB3Oi8gPOcHSXtT5EJzQ6iLLt+Spz7DCO4488rFNlKITNUSnziPDaHnqM1b4AdIaGNtEKbzpolN24bR+Suoz1r8B0kNOsLQXriwWKcS8Rpr69C1dSSRLv7DaviccBIkU2jU4ZpDV+ozt4BmStjeW9uIOq/AsaOx7JUl91go/QNL2xjZRihs7QoWY10hSn22GO0K89AvbRHkutl7xed7YXJk49ZnjUDbTjR2ZINnBIFaIeY049dkVCg85gZsoZT4jU2i3kL8r7PAzx6GkBsbSXjaTIzl1HnvRwtRnm+GOEEU+WtvLGsgShZjXCDv8yAiBiOAeYkcmSHxG/uQAzGtE8/q89W8A3vZGNlGm7JSSKcS8RpD6TCu80182dmSCzGdSnhUEV5+I5vWZ698AvO0Nt1WkzRhLn2+BeQ2e+uQjTSBo5GNpfyw/o0CqEB2ooKv5mFZ4x0Hb3shCS7nPpD2jBHNINPVZNjwlwVZ7l5C0T1uNKleI3hpsNR/5SBMIdsgJPDIhzWfSFNoe8qex1Gdb8DUHOeQEPSApbWVKypN0sH4NdkoPz5auJHCg0sAmY9LOQklRiE57voPUZzjSBAIjv/K2D3hJm0tNexpS7Wob8AtEInuFH4Cs9q5sAVKXhKc+78mCwMxnneGOoBxyoqNQCZYdzouc8TwogUWh0+ac//2ie9NkOHOXQaHtHSzrgXNHl/SHJZAV2m6eu7yPM25Qz78mKrRrPs+OPDFPdZrj0BRaHv+IG9DfH1FOi6QodPx/VvOcwN4LwXLMFdr+9eqeaEmwHFOFtnu72seSnpcMLcdMoV2r8ReEaZw2jCzHSKHlnazj2bn9OxPLMVDotLfX9QBkE8vRVmj7H9016Qt4vOxoatRUuHKDgZwX9M4+0XsecMtavcFATjs6zw7UUWj5azEYyOSuqW456grXaDCQ3lDZclQVOv51d92yEjw+V9U0qim03d2VPPtXiwc1y1FRuCEGAzmrK1hOusJpCbiUHgUHxxfVVMtJVeh424y7fdjpDdP6VWkdYf9jCd1sVgaHcsuRKrS9DTQYiNxyJArtliN7FsYmcbYlLh4lK4bcjTUYiMRyRAotf6MNBtJ/E1gOrvAbGAxEYDmYQtt7/Q4GA7nfQSwHKrRb9jKb2MtlajmpCmusu+xWzvHFYi9nQaHVfv9eBgPpvzUrQoWO/2tzSkBzBjdxy0mcE/W6uib2crnf6WBn7i11lmzVjL9GOZHCmst3bsdm8FTdiym0/J+b0WPipL8fWk7x9zEYyCBYCFBc5jT8+jm67BTd29/JYCDjyu9mMBkZGRkZGRkZGRkZGRkZGavhf8z/JYFySebOAAAAAElFTkSuQmCC";
        this.txt = "KK";
        this.user = {
            email: "",
            password: ""
        };
        this.showForm = false;
        this.btnSubmit = function () {
            //console.log(this.email +" "+ this.password);
            //console.log(this.user);
            _this.showForm = true;
        };
    }
    return DirectiveComponent;
}());
DirectiveComponent = __decorate([
    core_1.Component({
        selector: 'directive',
        templateUrl: "./directive.html",
    })
], DirectiveComponent);
exports.DirectiveComponent = DirectiveComponent;
//# sourceMappingURL=directive.component.js.map