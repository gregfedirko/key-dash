def compile!(exp)
  case exp.first
  when :multi
    exp[1..-1].map { |e| compile!(e) }.join
  when :static
    str(exp[1])
  when :mustache
    send("on_#{exp[1]}", *exp[2..-1])
  else
    raise "Unhandled exp: #{exp.first}"
  end
end