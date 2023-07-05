module Jekyll
  class TagsGenerator < Generator
    def generate(site)
      tags = []
      site.collections['projects'].docs.each do |project|
        project.data['tags'].each do |tag|
            if !tags.include?(tag)
                puts tags << tag
            end
        end
      end
      site.data['tags'] = tags
    end
  end
end
