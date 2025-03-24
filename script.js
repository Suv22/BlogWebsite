function openPopup() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function submitComment() {
  const username = document.getElementById("username").value.trim();
  const comment = document.getElementById("comment").value.trim();
  localStorage.setItem("username", username);
  localStorage.setItem("comment", comment);

  if (username === "" || comment === "") {
    alert("Please fill in both fields!");
    return;
  }

  const commentList = document.getElementById("comment-list");
  const newComment = document.createElement("li");
  const currentDate = new Date().toLocaleString();

  newComment.innerHTML = `<strong>${localStorage.getItem(
    "username"
  )}</strong> <span>(${currentDate})</span><p>${localStorage.getItem(
    "comment"
  )}</p>`;
  commentList.appendChild(newComment);
  document.getElementById("username").value = "";
  document.getElementById("comment").value = "";

  closePopup();
}

const blogsData = {
  1: {
    image: "assets/images/designBnr2.png",
    title: "Designing with Purpose: Creating Aesthetic Websites",
    author: "Rihan Shah",
    date: "Jan 20, 2025",
    content: `
Designing with Purpose: Creating Aesthetic Websites

      Introduction:
      Your workspace is more than just a place to work — it's an extension of your personality and creativity. Designing a luxurious and elegant workspace not only elevates your environment but also boosts productivity and inspires creativity.
      
      Conclusion:
      Designing a luxurious workspace isn’t just about aesthetics; it’s about creating an environment that inspires productivity and creativity. Curate your space with purpose and enjoy the elegance it brings to your everyday life.
    `,
    category: "Design",
  },

  // Development Blog 1
  2: {
    image: "assets/images/web1BannerImg.png",
    title: "Building Scalable Web Applications: A Developer’s Guide",
    author: "Tech Guru",
    date: "Feb 5, 2025",
    content: `
Building Scalable Web Applications: A Developer’s Guide

Creating a scalable web application is one of the most crucial aspects of software development. As user bases grow, ensuring your application remains responsive and reliable is essential. In this blog, we’ll explore the fundamental principles and strategies for building scalable applications.

✅ 1. Understanding Scalability
Scalability refers to an application’s ability to handle increased user demands without compromising performance. Whether it’s accommodating more users, data, or transactions, a scalable app ensures a seamless user experience.

There are two main types of scalability:

Vertical Scaling: Upgrading server capacity by adding more power (CPU, RAM, etc.).

Horizontal Scaling: Adding more servers or machines to distribute the workload.

✅ 2. Choose the Right Architecture
A well-structured architecture lays the foundation for scalability. Microservices architecture is often preferred for large applications because it breaks down the application into smaller, independent services.

Monolithic Architecture: Suitable for smaller projects with simple requirements.

Microservices Architecture: Ideal for applications with multiple independent modules.

Serverless Architecture: Offers automatic scaling and reduces server management efforts.

✅ 3. Efficient Database Management
Managing data efficiently is vital for maintaining performance. Consider these database strategies:

Use Database Sharding to split large datasets into smaller, manageable parts.

Implement Caching Mechanisms with tools like Redis or Memcached.

Optimize queries and use indexes for faster data retrieval.

✅ 4. Implement Load Balancing
Load balancers distribute incoming traffic across multiple servers, preventing any single server from being overwhelmed. This ensures improved reliability and uptime. Popular load balancers include AWS Elastic Load Balancer and NGINX.

✅ 5. Use Content Delivery Networks (CDNs)
CDNs store copies of your static assets like images, videos, and stylesheets across multiple servers globally. This reduces latency and ensures faster content delivery to users, regardless of location.

✅ 6. Monitor and Optimize
Regular monitoring helps identify bottlenecks and areas for improvement. Tools like Prometheus, Grafana, or AWS CloudWatch provide valuable insights into application performance.

✅ 7. Conclusion
Scalable applications not only provide a seamless experience for users but also ensure long-term growth and sustainability. By choosing the right architecture, optimizing database management, and implementing efficient load balancing, developers can build applications that stand the test of time.

"Scalability is not a feature; it's a requirement for growth."

Keep learning, keep building, and create applications that make an impact!
    `,
    category: "Development",
  },

  // Development Blog 2
  3: {
    image: "assets/images/markBnr1.png",
    title: "Mastering the Art of Digital Marketing: Strategies for Success",
    author: "Kasturi Raina",
    date: "Jul 02, 2015",
    content: `
Mastering the Art of Digital Marketing: Strategies for Success

     Introduction:
In the digital age, marketing has transformed from traditional advertisements to dynamic, personalized experiences. Brands that embrace digital channels can connect with their audience like never before.

1. Understanding Your Audience
Before launching any campaign, it’s crucial to know your audience. Analyze demographics, preferences, and behaviors to create tailored content that resonates. Tools like Google Analytics and social media insights can be invaluable.

2. Building a Strong Brand Presence
Consistency is key. Develop a clear brand voice, color scheme, and design that reflect your values. Platforms like Instagram, LinkedIn, and TikTok offer visual storytelling opportunities to elevate your brand image.

3. Leveraging Social Media
Social platforms are powerful for engaging customers directly. Use interactive content like polls, live streams, and user-generated content to build a community. Collaborate with influencers to expand your reach.

4. Content Marketing Strategy
Create valuable and relevant content to attract and retain your audience. Blog posts, videos, infographics, and podcasts are excellent mediums. Maintain a content calendar to ensure consistent posting.

5. SEO and Paid Advertising
Optimize your content with relevant keywords to improve visibility. Invest in pay-per-click (PPC) campaigns and social media ads to reach a broader audience. A/B testing can help refine your strategies for better results.

6. Analytics and Performance Tracking
Regularly track and measure your campaigns. Analyze key metrics like engagement, conversion rates, and ROI. Data-driven decisions will help you fine-tune your approach and maximize success.

Conclusion:
Effective digital marketing requires creativity, strategic planning, and adaptability. By understanding your audience, delivering valuable content, and measuring results, you’ll build lasting connections and drive sustainable growth.

"Marketing is no longer about the stuff you make, but about the stories you tell." — Seth Godin
    `,
    category: "Marketing",
  },

  // Marketing Blog 1
  4: {
    image: "assets/images/designBnr2.png",
    title: "The Art of Minimalism: Designing with Purpose and Simplicity",
    author: "Rishikesh Jha",
    date: "Feb 12, 2025",
    content: `
Minimalist design is more than just a style — it's a mindset. By focusing on essential elements and eliminating excess, you create clean, elegant designs that emphasize functionality and clarity. This approach can be applied across web design, interior design, and even branding.

1. The Power of White Space
White space, also known as negative space, is a crucial aspect of minimalist design. It improves readability, enhances focus, and brings balance to your layout.

"Less is more." — Ludwig Mies van der Rohe

2. Choosing a Limited Color Palette
Minimalist designs often feature neutral tones like whites, grays, and muted pastels. A single accent color can be used to draw attention to key elements without overwhelming the viewer.

3. Typography Matters
Opt for clean, simple fonts like sans-serif or modern serif. Proper typography spacing and alignment also contribute to the visual appeal of a minimalist layout.

4. Prioritizing Functionality
Every design element should have a clear purpose. Avoid unnecessary decorations and ensure all components serve a functional role, whether it's a button, navigation bar, or call-to-action.

5. Visual Hierarchy
Use size, color, and spacing to create a clear visual hierarchy. Guide the user’s eye to the most important information first, ensuring a smooth, intuitive experience.

Conclusion
Minimalist design is timeless. It creates a seamless connection between aesthetics and usability, providing users with an enjoyable and distraction-free experience. Whether you’re designing a website, branding materials, or a physical space, simplicity will always stand out.

"Simplicity is the ultimate sophistication." — Leonardo da Vinci
    `,
    category: "Design",
  },

  // Marketing Blog 2
  5: {
    image: "assets/images/markBnr2.png",
    title:
      "Mastering the Art of Digital Storytelling: Captivate Your Audience Online",
    author: "Sunny Kumar",
    date: "Feb 10, 2025",
    content: `
In today’s fast-paced digital landscape, storytelling remains one of the most powerful tools for marketers. A compelling narrative can create emotional connections, boost brand loyalty, and drive conversions. But how do you craft a story that resonates with your audience?

1. Understand Your Audience
The foundation of effective storytelling is knowing your audience. Conduct thorough market research to identify their pain points, preferences, and aspirations. Personalize your narratives to reflect their experiences and values.

Tip:
Use tools like Google Analytics and social media insights to gather data about your audience's behavior.

2. Craft a Relatable Brand Story
Every brand has a story to tell. Highlight your brand's journey, challenges, and successes. Customers are more likely to connect with brands that show authenticity and transparency.

Example:
Share behind-the-scenes content or customer testimonials to create a genuine connection.

3. Visual Storytelling Matters
Visual content enhances storytelling. Utilize high-quality images, infographics, and videos to make your message memorable. Platforms like Instagram, TikTok, and YouTube thrive on visual narratives.

Pro Tip:
Leverage interactive visuals like polls, reels, and stories to engage your audience in real-time.

4. Consistency Across Platforms
Maintain a consistent brand voice and visual identity across all platforms. From website copy to social media posts, ensure that your messaging aligns with your brand story.

5. Measure and Optimize
Monitor the performance of your storytelling campaigns using analytics tools. Track engagement metrics, website visits, and conversion rates. Adjust your strategy based on what resonates most with your audience.

Conclusion:
Storytelling isn’t just about words — it’s about creating an experience. By mastering the art of digital storytelling, you can foster stronger relationships with your audience and drive meaningful results for your brand.

"Every brand has a story. Make yours unforgettable."
    `,
    category: "Development",
  },
  6: {
    image: "assets/images/web2BannerImg.png",
    title:
      "Building Scalable Web Applications: Best Practices for Modern Developers",
    author: "Niharika Sharma",
    date: "Jan 01, 2020",
    content: `
     Creating a scalable web application is essential in today’s digital age. As user demands increase, ensuring your application remains responsive and efficient becomes a priority. Here are some key best practices to follow:

Adopt Microservices Architecture
Microservices break down applications into smaller, manageable services. This allows for independent deployment, easier maintenance, and better scalability. Each service can be optimized and scaled based on its specific workload.

Implement Efficient Caching
Caching stores frequently accessed data in memory, reducing the need for database calls. Tools like Redis or Memcached can drastically enhance application performance.

Optimize Database Management
Choose the right database system based on your application’s needs. For large-scale applications, NoSQL databases like MongoDB offer flexibility, while SQL databases like PostgreSQL ensure data integrity.

Utilize Load Balancers
Load balancers distribute incoming traffic across multiple servers, preventing server overloads and ensuring users experience low latency. Tools like NGINX and AWS ELB are excellent choices.

Ensure Effective Monitoring and Logging
Implement tools like Prometheus, Grafana, or ELK Stack for real-time monitoring and detailed logging. This helps in proactively identifying and resolving issues.

Optimize Frontend Performance
Minimize JavaScript, CSS, and image sizes using tools like Webpack and Gzip compression. Implement lazy loading and content delivery networks (CDNs) to serve static content efficiently.

Prioritize Security
Implement SSL/TLS encryption, use secure authentication, and follow proper API security practices. Tools like OWASP ZAP can help identify vulnerabilities.

Conclusion:
Building scalable applications requires a combination of strategic design, effective tools, and continuous monitoring. By following these best practices, developers can ensure their applications are prepared to handle growth and deliver an exceptional user experience.

"Scalability isn’t just about handling growth — it’s about staying responsive and reliable as you grow."
    `,
    category: "Devlopment",
  },
};

// Get blog name from URL
const params = new URLSearchParams(window.location.search);
const blogName = params.get("name");

// Find blog details
const blog = blogsData[blogName];

if (blog) {
  document.getElementById("blogName").innerText = blog.title;
  document.getElementById("blogImage").src = blog.image;
  document.getElementById("blogDescription").innerText = blog.content;
  document.getElementById("blogTimestamp").innerText =
    "By " + blog.author + " | " + blog.date;
} else {
  document.body.innerHTML =
    "<h2>blog Not Found</h2><a href='index.html'>Go Back</a>";
}

  