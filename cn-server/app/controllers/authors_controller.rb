class AuthorsController < ApplicationController
    
    before_action :set_author, only: [:show, :update, :destroy]

    def index
        authors = Author.all
        render json: authors.to_json(only: [:id, :name, :statment], :include => {:works => {only: [:id, :title, :genre, :contributions]}}, :include => {only: [:id, :text]})
    end

    def show
        #band = Band.find(params[:id])
        render json: @band.to_json(only: [:id, :name], :include => {:players => {only: [:name, :instrument, :band_id]}})
    end

    def create
        @band = Band.new(band_params)
    
        if @band.save
          render json: @band, status: :created, location: @band
        else
          render json: @band.errors, status: :unprocessable_entity
        end
    end

    def update
        @band.update(band_params)
        render json: @band
    end

    def destroy
        @band.destroy
    end   

    private

    def set_author
        @author = Author.find(params[:id])
    end

    def author_params
        params.require(:author).permit(:name, :statement)
    end

end
