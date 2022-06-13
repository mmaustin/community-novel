class WorksController < ApplicationController

    before_action :set_work, only: [:show, :update, :destroy]    

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

    private

    def set_work
        @work = Work.find(params[:id])
    end

    def work_params
        params.require(:work).permit(:title, :genre, :contributions, :author_id)
    end    

end
