def send_devise_notification(notification, *args)
  message = devise_mailer.send(notification, self, *args)
  # Remove once we move to Rails 4.2+ only.
  if message.respond_to?(:deliver_now)
    message.deliver_now
  else
    message.deliver
  end
end