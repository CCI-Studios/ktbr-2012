# repository info
set :branch, "master"

# This may be the same as your `Web` server
role :app, "ccistudios.com"

# directories
set :deploy_to, "/home/ktbr/subdomains/dev"
set :public, "#{deploy_to}/public_html"
set :extensions, %w[public template]
