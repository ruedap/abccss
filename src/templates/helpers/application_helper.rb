module ApplicationHelper
  def svg_sprite(filename)
    options = {
      "xlink:href" => "#{asset_pack_path("images/sprite.svg")}#svg-#{filename}"
    }
    content_tag :use, '', options
  end
  
  def default_meta_tags
    {
      site: 'サイト名',
      reverse: true,
      title: nil,
      description: '説明文',
      keywords: nil, # TODO: キーワード設定
      canonical: request.original_url,
      og: {
        site_name: :site,
        title: :title,
        description: :description,
        type: 'website',
        url: request.original_url,
        # image: 'foo.jpg', # TODO: 画像設定
      },
      twitter: {
        card: "summary",
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
