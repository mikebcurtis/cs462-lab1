require 'rubygems'
require 'sinatra'

get '/' do
	redirect "/app.html"
end