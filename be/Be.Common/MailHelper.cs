using MailKit.Net.Smtp;
using MimeKit;

namespace Be.Common

{
    public static class MailHelper
    {
        public static void SentMail(string targetEmail)
        {
            MimeMessage message = new MimeMessage();

            MailboxAddress from = new MailboxAddress("Admin",
            "admin@example.com");
            message.From.Add(from);

            MailboxAddress to = new MailboxAddress("User",
            "user@example.com");
            message.To.Add(to);

            message.Subject = "This is email subject";

            BodyBuilder bodyBuilder = new BodyBuilder();
            bodyBuilder.HtmlBody = "<h1>Hello World!</h1>";
            bodyBuilder.TextBody = "Hello World!";

            bodyBuilder.Attachments.Add("\\file.png");

            message.Body = bodyBuilder.ToMessageBody();

            SmtpClient client = new SmtpClient();
            client.Connect("smtp_address_here", 123, true);
            client.Authenticate("user_name_here", "pwd_here");

            client.Send(message);
            client.Disconnect(true);
            client.Dispose();
        }
    }
}
