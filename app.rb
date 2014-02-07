require 'rubygems'
require 'sinatra'

class AppServer < Sinatra::Base
    get '/' do
        UserManager.instance.add_user "test1" "passtest1"
        UserManager.instance.add_user "test2" "passtest2"
        UserManager.instance.add_user "test3" "passtest3"
        redirect "/app.html"
    end
    
    get '/test' do
        "Test"
    end

    post '/login' do
        
    end
    
    get '/users' do
        result = {:results => true, :data => UserManager.instance.users}
        "#{result.to_json}"
    end