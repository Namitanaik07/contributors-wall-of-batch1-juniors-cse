# 🎓 **Contributors Wall – MITE CSE Juniors**

Welcome to **Contributors Wall**, a beginner-friendly open-source project created by the **CSE Seniors of MITE** to help **2nd-year juniors** learn Git, GitHub, and open-source collaboration! 💻✨

🌐 **Live Website:**
➡️ [Contributors Wall](https://namitanaik07.github.io/contributors-wall-of-batch1-juniors-cse/)

📜 **View All Contributors (JSON):**
➡️ [contributors.json](https://namitanaik07.github.io/contributors-wall-of-batch1-juniors-cse/contributors.json)

---

## 🌟 **About the Project**

This project helps students **make their first open-source contribution** by adding their **name, GitHub username, and message** to a live Contributors Wall website.

Each contribution you make becomes a part of this growing wall — visible to everyone online! 🌍

---

## 🚀 **How to Contribute**

### 🪜 Step 1: Fork this Repository

Click the **Fork** button at the top-right corner of this page to create your own copy of this repo.

---

### 🧭 Step 2: Clone Your Fork

Open your terminal or VS Code and run:

```bash
git clone https://github.com/<your-github-username>/contributors-wall-of-batch1-juniors-cse.git
```

> Replace `<your-github-username>` with your actual GitHub username.

Then move into the project folder:

```bash
cd contributors-wall-of-batch1-juniors-cse
```

---

### 🌿 Step 3: Create a New Branch

```bash
git checkout -b add-my-name
```

---

### 📝 Step 4: Add Your Details

Open the `contributors.json` file and add your name inside the list like this 👇

```json
{
  "name": "Your Full Name",
  "github": "your-github-username",
  "message": "Excited to make my first open-source contribution!"
}
```

⚠️ **Note:**

* Use double quotes (`"`)
* Don’t forget commas between objects
* No comma after the last object


---

### 💾 Step 5: Commit Your Changes

```bash
git add contributors.json
git commit -m "Added my name to contributors list"
```

---

### ☁️ Step 6: Push to Your Fork

```bash
git push origin add-my-name
```

---

### 🧩 Step 7: Create a Pull Request (PR)

1. Go to your forked repo on GitHub.
2. Click **“Compare & pull request.”**
3. Set:

   * **base repository:** `Namitanaik07/contributors-wall-of-batch1-juniors-cse`
   * **base branch:** `main`
   * **compare branch:** `add-my-name`
4. Click **Create Pull Request** ✅

---

### 🎉 Step 8: Celebrate!

Once your PR is reviewed and merged, your name will appear **live on the wall**:
👉 [View Here](https://namitanaik07.github.io/contributors-wall-of-batch1-juniors-cse/)

You’ve officially made your **first open-source contribution! 🥳**

---

## 💡 **Project Structure**

```
contributors-wall-of-batch1-juniors-cse/
│
├── index.html              → main webpage
├── style.css               → styling for wall cards
├── contributors.json       → contributor data file
├── scripts/
│   └── update.js           → script to load contributors
└── README.md               → documentation (this file)
```

---

## 🧠 **What You’ll Learn**

* 🌱 How to use **Git & GitHub**
* ✨ How to make **Pull Requests**
* 🧩 How to collaborate in **open-source projects**
* 💬 How real-world teams manage contributions

---

## ❤️ **Maintainers**

👩‍💻 **Namita Naik** – Project Lead & Mentor
📍 *CSE Department, MITE*
🌸 [GitHub: Namitanaik07](https://github.com/Namitanaik07)

---

## 🤝 **Contributors**

Check out all the amazing contributors here 👇
➡️ [Contributors Wall Website](https://namitanaik07.github.io/contributors-wall-of-batch1-juniors-cse/)

---

## 📜 **License**

This project is licensed under the **MIT License** — you’re free to fork, remix, and learn!

---

###  **For the Session (Optional Section)**

If you’re attending the Open Source session:

> “Make your first contribution live during the session, get your name added, and learn the real open-source workflow step-by-step!” 

---
