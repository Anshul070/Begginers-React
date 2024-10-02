import React from 'react'
import QuestionCard from './QuestionCard'

function QuestionCards() {
    const QusAns = [
        {
            Qus : "What is a Webflow subscription agency?",
            Ans : "A Webflow subscription agency provides ongoing Webflow design and development services through flexible subscription plans. This allows you to get continuous support and updates for your website."
        },
        {
            Qus : "How do I manage my tasks with your Webflow subscription agency?",
            Ans : "We provide a Notion client portal where you can add unlimited tasks. This makes it easy to keep track of your project’s progress and prioritize your needs."
        },
        {
            Qus : "What is your communication process?",
            Ans : "We offer seamless communication through Slack or Email, ensuring quick responses and smooth collaboration throughout your project."
        },
        {
            Qus : "How fast can I expect my tasks to be completed?",
            Ans : "We pride ourselves on our efficiency, delivering most tasks within 72 hours to keep your project moving forward."
        },
        {
            Qus : "Are you a Webflow Partner?",
            Ans : "Yes, we are proud Webflow Partners, bringing expert design and development services to every project we handle."
        },
        {
            Qus : "What are the benefits of working with your subscription agency?",
            Ans : "Our subscription model gives you ongoing access to top-tier Webflow design and development, unlimited task management, fast delivery, and direct Slack communication—all under one flexible plan."
        },
        {
            Qus : "Why should I use Webflow in the first place?",
            Ans : "Flexibility: Webflow offers unparalleled flexibility when it comes to designing and customizing your website. Ease of use: Despite its powerful features, Webflow maintains a user-friendly interface that's easy to navigate. SEO-friendly: Webflow has strong SEO capabilities, which can help improve your site's visibility on search engines."
        },
    ]
  return (
    <div className='pt-12 flex flex-col gap-10'>
        {QusAns.map((QuAn,index) => <QuestionCard data={QuAn} key={index}/>)}
    </div>
  )
}

export default QuestionCards