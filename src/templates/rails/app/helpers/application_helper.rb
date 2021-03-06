module ApplicationHelper
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

  def default_meta_tags
    {
      site: I18n.t('meta_tags.site'), # TODO: サイト名設定
      title: nil,
      description: I18n.t('meta_tags.description'), # TODO: 説明文設定
      keywords: I18n.t('meta_tags.keywords'), # TODO: キーワード設定
      separator: '&ndash;'.html_safe,
      reverse: true,
      canonical: request.original_url,
      og: {
        type: 'website',
        site_name: :site,
        title: :title,
        description: :description,
        url: request.original_url,
        locale: 'ja_JP',
        # image: image_url('ogp/1200x630.png', host: "#{request.protocol}#{request.host_with_port}"), # Sprockets
        image: asset_pack_path('images/ogp/1200x630.png', host: "#{request.protocol}#{request.host_with_port}"), # Webpacker
      },
      twitter: {
        card: "summary_large_image",
        title: :title,
        description: :description,
      }
    }
  end

  # https://gist.github.com/suryart/7418454#gistcomment-2584737
  def flash_message_class_for(flash_type)
    {
      success: 'alert-success',
      error: 'alert-danger',
      alert: 'alert-warning',
      notice: 'alert-info'
    }[flash_type.to_sym] || flash_type.to_s
  end

  def svg_sprite(filename)
    options = {
      "xlink:href" => svg_sprite_path(filename)
    }
    content_tag :use, '', options
  end

  def svg_sprite_path(filename)
    "#{asset_pack_path("images/sprite.svg")}#svg-#{filename}"
  end

  def current_page_class(current_page_args, active_class_name='is-active')
    current_page?(current_page_args) ? active_class_name : nil
  end

  def current_pages?(current_page_args_array)
    current_page_args_array.any? do |arg|
      current_page?(arg)
    end
  end

  def current_pages_class(current_page_args_array, active_class_name='is-active')
    current_pages?(current_page_args_array) ? active_class_name : nil
  end

  def active_path_class(controller_path_array, active_class_name='is-active')
    is_active = controller_path_array.any? do |p|
      if p.is_a?(Regexp)
        controller.controller_path =~ p
      else
        controller.controller_path == p
      end
    end
    is_active ? active_class_name : nil
  end
end
