document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (username === "admin" && password === "1234") {

            alert("تم تسجيل الدخول بنجاح");

        } else {

            alert("اسم المستخدم أو كلمة المرور غير صحيحة");

        }

    });

});
