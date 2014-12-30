def render(data = template, ctx = {})
  tpl = case data
  when Hash
    ctx = data
    templateify(template)
  when Symbol
    self.template_name = data
    templateify(template)
  else
    templateify(data)
  end

  return tpl.render(context) if ctx == {}

  begin
    context.push(ctx)
    tpl.render(context)
  ensure
    context.pop
  end
end