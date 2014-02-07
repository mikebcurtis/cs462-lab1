require 'json'
require 'singleton'

class UserManager
  include Singleton
  attr_accessor :users, :current_user_id, :current_user_name, :filename
  
  def initialize
    @users = {}
    @filename = "./cache/user_cache"
    load_users
  end
  
  def load_users
    begin
        File.open(@filename) do |f|
            @users = Marshal.load(f)
        end
        @load_time = Time.now
        puts "Loaded user data from #{@filename}"
    rescue
        puts "Failure to load from #{@filename}"
        @users = {}
    end
  end

  def add_user name, password
    @users[name] = Hash.new
    @users[name][:password] = password
    cache_user_data
  end
  
  def save_user_data name, data_name, data
    @users[name][data_name] = data
    cache_user_data
  end
  
  def cache_user_data
    File.open('test', 'w') do |f|
        f.write(Marshal.dump(@users))
    end
  end
  
  def get_user_data name, data_name
    @users[name][data_name]
  end
end
