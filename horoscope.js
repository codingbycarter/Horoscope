document.querySelector('#runIt').addEventListener('click', whatAreU)

    function whatAreU(){
        const month = document.querySelector('#month').value
        const day = parseInt(document.querySelector('#day').value)
    // Conditionals
// Leo// 'JULY 23 - AUGUST 22'
if ((month == 'July' && day >= 23) || (month == 'August' && day <= 22)) {
    document.querySelector('#zodiac').innerText="Just how long has it been since you indulged in a big helping of your favorite guilty pleasure, Leo? It's time to let the youngster in you come out and play today. Eat that chocolate, read those mindless magazines, or skip down the sidewalk. You've been taking life much too seriously lately. Even grownups are entitled to indulge in the pleasures of youth from time to time."
} 
    // Virgo (August 23 - September 22)
 if ((month == 'August' && day >= 23) || (month == 'September' && day <= 22)) {
        document.querySelector('#zodiac').innerText="If you feel like you're trying to push a square peg into a round hole, you're probably right, Virgo. Whether you're having personal or professional difficulties, there are times when it just doesn't pay to try so hard. In fact, it's often a sign that there is something fundamentally wrong with the relationship. Try to take more of a philosophical attitude, Virgo. If it's meant to work, it will."
    } 
    // Libra (September 23 - October 22)
    if ((month == 'September' && day >= 23) || (month == 'October' && day <= 22)) {
        document.querySelector('#zodiac').innerText="Things aren't always as they first appear. People you thought you knew well and circumstances that you thought you understood thoroughly now seem anything but straightforward. Has the world really changed that much or has your perception altered somehow? It's time to direct this “altered” vision inward. You're ready for a change, Libra. Perhaps it's time to dust off that resume."
    } 
    // Scorpio (October 23 - November 21)
    if ((month == 'October' && day >= 23) || (month == 'November' && day <= 21)) {
        document.querySelector('#zodiac').innerText="Difficult as it may be for you to face all those projects you've left undone, Scorpio, know that you'll be free to move on once they're complete. People from your past figure prominently now. Perhaps they come forward to repay an old debt or possibly claim repayment from you. Don't abandon your dreams. Once you've cleared a path for them, they're more likely to come true."
    } 
    // Sagittarius (November 22 - December 21)
    if ((month == 'November' && day >= 22) || (month == 'December' && day <= 21)) {
        document.querySelector('#zodiac').innerText="You could have a “eureka!” moment today, Sagittarius, as events from your past unexpectedly bubble to the surface of your mind and crystallize in a surprising new way. Suddenly, you have a clear understanding of how these past events affect your present behavior. You can use this new knowledge to bring about change. There is clearly a situation at work or at home that is in need of transformation."
    } 
    // Capricorn (December 22 - January 19)
    if ((month == 'December' && day >= 22) || (month == 'January' && day <= 19)) {
        document.querySelector('#zodiac').innerText="Sometimes it's easier to tend to life's mundane details rather than lift your eyes and see the big picture, Capricorn. For example, it's likely that you've grown complacent at work. Could it be that you aren't at the right job or in the right career after all? Busying yourself with trivia isn't the way to avoid answering the question. It's imperative that you face it head on and make the necessary changes."
    } 
    // Aquarius (January 20 - February 18)
    if ((month == 'January' && day >= 20) || (month == 'February' && day <= 18)) {
        document.querySelector('#zodiac').innerText="Change is in the air, Aquarius. Whether it's a dramatic change of faith or a major shift in your life's goals, prepare yourself for a profound transformation. It's likely due to the fact that you now have more freedom to do what you want, when you want. Perhaps a financial windfall has made this possible. Take care to choose your new path wisely. It doesn't offer you the choice of returning to your old lifestyle."
    } 
    // Pisces (February 19 - March 20)
    if ((month == 'February' && day >= 19) || (month == 'March' && day <= 20)) {
        document.querySelector('#zodiac').innerText="It's time to refill the well of your soul, Pisces. You spend so much of your life in service to others that it's only natural that you feel drained sometimes. Rather than try to push past this feeling and go on as though nothing is the matter, consider it a sign that something is amiss. Admit if you're feeling unappreciated. You've spent too much time putting the happiness of others before your own. It's time to change your priorities."
    } 
    // Aries (March 21 - April 19)
    if ((month == 'March' && day >= 21) || (month == 'April' && day <= 19)) {
        document.querySelector('#zodiac').innerText="You would make an excellent judge, Aries. You're able to consider all aspects of a situation. This is a bit of a blessing and a curse, because it can make it difficult to come to a decision. Today you could face the challenge of reconsidering past decisions. Once-binding contracts need to be reviewed and new ones created. Prior commitments need reevaluation. This is tiring but necessary if you're to move forward."
    } 
    // Taurus (April 20 - May 20)
    if ((month == 'April' && day >= 20) || (month == 'May' && day <= 20)) {
        document.querySelector('#zodiac').innerText="Just because one person is no longer a part of your life doesn't mean that all people are unreliable. People change, as do situations. It's possible that this person was no longer a healthy influence on you, in which case the departure is for the best. You're going to have to become more adaptable, Taurus, because there are more changes on the horizon, especially where your career is concerned."
    } 
    // Gemini (May 21 - June 20)
    if ((month == 'May' && day >= 21) || (month == 'June' && day <= 20)) {
        document.querySelector('#zodiac').innerText="It can be hard to release old habits and beliefs even as new, better ways of thinking struggle to gain a foothold. It's time for you to do this, Gemini. You might find it difficult to confide your feelings to another, but a frank conversation with close friends will do much to ease your mind. There's no question that you're changing. Your friends will show you that this transformation is positive."
    } 
    // Cancer (June 21 - July 22)
    if ((month == 'June' && day >= 21) || (month == 'July' && day <= 22)) {
        document.querySelector('#zodiac').innerText="You always suspected that your job was making you crazy, but it never occurred to you that it could make you sick, too. Is it really worth it, Cancer? You may be asking yourself this question today. Fortunately, your talents apply to several professions. Why not take a closer look at other fields? One way or another, it's clear that change is coming. You might as well be the one who directs it."
        } 
    }