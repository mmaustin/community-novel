class WorksController < ApplicationController

    def index
        works = Work.all
        render json: works.to_json(only: [:id, :title, :genre, :contributions], :include => {:contributions => {only: [:id, :author_id]}})
    end

    def show
    end

    def create
    end

    def update
    end

    def destroy
    end

end
