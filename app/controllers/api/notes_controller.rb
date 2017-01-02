class Api::NotesController < ApplicationController
  before_action :require_login, only: [:create, :update, :destroy]
  before_action :require_owner, only: [:update, :destroy]

  def index
    if params[:user_id]
      @notes = Note.find_by_user_id(params[:user_id])
    else
      @notes = Note.all.includes(:user)
    end
  end

  def create
    @note = Note.new(note_params)

    if @note.save
      render :created
    else
      render json: { errors: @note.errors.full_messages }
    end
  end

  def update
    @note = Note.find(params[:id])

    return not_found if @note.nil?

    if @note.update(note_params)
      render :updated
    else
      render json: { errors: @note.errors.full_messages }
    end
  end

  def show
    @note = Note.find(params[:id])

    return not_found if @note.nil?

    render :show
  end

  def destroy
    @note = Note.find(params[:id])

    return not_found if @note.nil?

    if @note.destroy
      render :destroyed
    else
      render json: { errors: @note.errors.full_messages }
    end
  end

  private

  def note_params
    params.required(:note).permit(:notebook_id, :title, :content, :image_url)
  end

  def require_owner
    note_owned = current_user.notes.exists?(id: params[:id])

    forbidden unless note_owned
  end
end
