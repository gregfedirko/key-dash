def gflash_push(key, value, now=false)
  session[:gflash][key] ||= []
  session[:gflash][key].push(value)
  
  if Gritter.rails_flash_fallback
    if now
      flash.now[key] ||= []
      flash.now[key].push(value.is_a?(Hash) ? value[:value] : value)
    else
      flash[key] ||= []
      flash[key].push(value.is_a?(Hash) ? value[:value] : value)
    end
  end
end