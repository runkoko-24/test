document.addEventListener("DOMContentLoaded", () => {
    // ------------------------
    // 1. セクションスクロールアニメーション
    // ------------------------
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(50px)";
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));

    // ------------------------
    // 2. ナビゲーションスムーススクロール
    // ------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", e => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // ------------------------
    // 3. 合格アイコンアニメーション
    // ------------------------
    const icon = document.querySelector(".passed .icon");
    if (icon) {
        icon.style.transition = "transform 0.5s ease";
        icon.addEventListener("mouseenter", () => {
            icon.style.transform = "translateY(-10px)";
        });
        icon.addEventListener("mouseleave", () => {
            icon.style.transform = "translateY(0)";
        });
    }

    // ------------------------
    // 4. 参考書画像拡大効果
    // ------------------------
    document.querySelectorAll(".book-image").forEach(img => {
        img.style.transition = "transform 0.3s ease";
        img.addEventListener("mouseenter", () => img.style.transform = "scale(1.1)");
        img.addEventListener("mouseleave", () => img.style.transform = "scale(1)");
    });

    // ------------------------
    // 5. トップに戻るボタン
    // ------------------------
    const backButton = document.createElement("button");
    backButton.textContent = "↑トップに戻る";
    backButton.style.position = "fixed";
    backButton.style.bottom = "20px";
    backButton.style.right = "20px";
    backButton.style.padding = "10px 15px";
    backButton.style.borderRadius = "5px";
    backButton.style.border = "none";
    backButton.style.backgroundColor = "#0d47a1";
    backButton.style.color = "#fff";
    backButton.style.cursor = "pointer";
    backButton.style.display = "none";
    backButton.style.boxShadow = "0 2px 5px rgba(0,0,0,0.3)";
    document.body.appendChild(backButton);

    backButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) backButton.style.display = "block";
        else backButton.style.display = "none";
    });

    // ------------------------
    // 6. リンクホバー時の少し動く演出
    // ------------------------
    document.querySelectorAll(".link").forEach(link => {
        link.style.transition = "transform 0.2s ease";
        link.addEventListener("mouseenter", () => link.style.transform = "scale(1.05)");
        link.addEventListener("mouseleave", () => link.style.transform = "scale(1)");
    });
});
