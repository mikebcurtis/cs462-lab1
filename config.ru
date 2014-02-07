require 'rubygems'
require 'sinatra'

set :environment, ENV['RACK_ENV'].to_sym
disable :run, :reload

require 'app.rb'
Dir["./helpers/*.rb"].each {|file| require file }

run Sinatra::Application