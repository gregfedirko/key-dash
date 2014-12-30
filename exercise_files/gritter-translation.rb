def gflash_translation(key, options)
  options ||= {}
  
  i18n_default_key = "gflash.defaults.#{key}"
  i18n_default_action_key = "gflash.defaults.#{params[:action]}.#{key}"
  i18n_key = "gflash.#{params[:controller]}.#{params[:action]}.#{key}"
  i18n_key.gsub!(/\//, ".")
  
  begin
    options[:raise] = true
    translation = I18n.t(i18n_key, options)
  rescue I18n::MissingTranslationData
    begin
      translation = I18n.t(i18n_default_action_key, options)
    rescue I18n::MissingTranslationData
      options.delete(:raise)
      translation = I18n.t(i18n_default_key, options)
    end
  end
  
  translation
end