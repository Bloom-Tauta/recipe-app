# using SendGrid's Ruby Library
# https://github.com/sendgrid/sendgrid-ruby
require 'sendgrid-ruby'
include SendGrid
class EmailService 
    def self.call from:, to:, subject:, content:
        from = Email.new(email: from)
        to = Email.new(email: to)
        subject = subject
        content = Content.new(type: 'text/plain', value: content)
        mail = SendGrid::Mail.new(from, subject, to, content)

        # sg = SendGrid::API.new(api_key: Rails.application.credentials.sendgrid)
        sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
        response = sg.client.mail._('send').post(request_body: mail.to_json)
        puts response.status_code
        puts response.body
        puts response.headers
        puts Rails.application.credentials.sendgrid
    end
end