enum Type { strong, week };

class Java {
    helloJava() {
        console.log("Hello Java!");
    }
    java: string
}

class Javascript {
    helloJavaScript() {
        console.log("Hello JavaScript");
    }
    javascript: string
}

// function getLanguage(type: Type) {
//     let lang = type === Type.strong ? new Java() : new Javascript();
//     // 下面通过lang来调用实例方法的地方，都会报错，因为编译器不知道lang到底是哪种类型
//     if ((lang as Java).helloJava) {
//         (lang as Java).helloJava();
//     } else {
//         (lang as Javascript).helloJavaScript();
//     }
// }

// function getLanguage(type: Type) {
//     let lang = type === Type.strong ? new Java() : new Javascript();
//     if (lang instanceof Java) {
//         lang.helloJava();
//     } else {
//         lang.helloJavaScript();
//     }
// }

// function getLanguage(type: Type) {
//     let lang = type === Type.strong ? new Java() : new Javascript();
//     // if ("java" in lang) {
//     //     lang.helloJava();
//     // } else {
//     //     lang.helloJavaScript();
//     // }
//     if ("helloJava" in lang) {
//         lang.helloJava();
//     } else {
//         lang.helloJavaScript();
//     }
// }


// s参数，联合类型：string、number
// function getLanguage(type: Type, s: string | number) {
//     // 如果s是string类型的，那么s就会自动的被识别为string类型，编码时可以提示string类型方法
//     if (typeof s === "string") {
//         s.trim();
//     } else {
//         s.toString();
//     }
// }

// 类型保护函数  函数返回值lang is Java:类型谓词
function isJava(lang: Java | Javascript): lang is Java {
    return (lang as Java).helloJava !== undefined;
}

function getLanguage(type: Type) {
    let lang = type === Type.strong ? new Java() : new Javascript();
    if (isJava(lang)) {
        lang.helloJava();
    } else {
        lang.helloJavaScript();
    }
}