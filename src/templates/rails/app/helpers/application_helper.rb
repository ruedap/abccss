module ApplicationHelper
  def svg_sprite(filename)
    options = {
      "xlink:href" => "#{asset_pack_path("images/sprite.svg")}#svg-#{filename}"
    }
    content_tag :use, '', options
  end

  def default_meta_tags
    {
      site: I18n.t('meta_tags.site'), # TODO: サイト名設定
      reverse: true,
      title: nil,
      description: I18n.t('meta_tags.description'), # TODO: 説明文設定
      keywords: I18n.t('meta_tags.keywords'), # TODO: キーワード設定
      canonical: request.original_url,
      og: {
        site_name: :site,
        title: :title,
        description: :description,
        type: 'website',
        url: request.original_url,
        # image: image_url('ogp/1200x630.png', host: "#{request.protocol}#{request.host_with_port}"), # Sprockets
        image: asset_pack_path('images/ogp/1200x630.png', host: "#{request.protocol}#{request.host_with_port}"), # Webpacker
      },
      twitter: {
        card: "summary_large_image",
      }
    }
  end

  def browser_gem_classes
    classes = ''
    classes << 'b-browser-ie ' if browser.ie?
    classes << 'b-browser-edge ' if browser.edge?
    classes << 'b-browser-chrome ' if browser.chrome?
    classes << 'b-browser-safari ' if browser.safari?
    classes << 'b-browser-firefox ' if browser.firefox?
    classes << 'b-browser-android ' if browser.platform.android?
    classes << 'b-browser-ios ' if browser.platform.ios?
    classes << 'b-browser-mac ' if browser.platform.mac?
    classes << 'b-browser-linux ' if browser.platform.linux?
    classes << 'b-browser-windows ' if browser.platform.windows?
    classes << 'b-browser-windows10 ' if browser.platform.windows10?
    classes << 'b-browser-windows8 ' if browser.platform.windows8?
    classes << 'b-browser-windows8_1 ' if browser.platform.windows8_1?
    classes << 'b-browser-windows7 ' if browser.platform.windows7?
    classes << 'b-browser-windows_vista ' if browser.platform.windows_vista?
    classes << 'b-browser-windows_xp ' if browser.platform.windows_xp?
    classes.rstrip
  end

  def flash_message(options = {})
    alert_types = [:success, :danger]
    flash_messages = []
    flash.each do |type, message|
      next if message.blank?

      type = type.to_sym
      type = alert_types[0] if type == :notice
      type = alert_types[1] if type == :alert
      next unless alert_types.include?(type)

      tag_class = options.extract!(:class)[:class]
      tag_options = {
        class: "alert alert-#{type} #{tag_class}"
      }.merge(options)

      Array(message).each do |msg|
        text = content_tag(:div, msg, tag_options)
        flash_messages << text if msg
      end
    end

    return '' if flash_messages.blank?
    content_html = flash_messages.join("\n").html_safe
  end
end
