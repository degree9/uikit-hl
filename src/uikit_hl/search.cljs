(ns uikit-hl.search
  (:require [hoplon.core :as h]
            [uikit-hl.core :as uk]))

(defmulti uk-search! h/kw-dispatcher :default ::default)

(defn format-search [search]
  (str "uk-search-" search))

(defmethod h/do! ::default
  [elem key val]
  (uk-search! elem key val))

(defmethod uk-search! ::default
  [elem key val]
  (h/do! elem :class {(format-search (name key)) val}))

(defmethod uk-search! ::search
  [elem key val]
  (h/do! elem :class {:uk-search val}))

(h/defelem search [{:keys [large navbar] :as attr} kids]
  (h/form
    (dissoc attr :large)
    ::search true
    ::large  large
    ::navbar navbar
    kids))

(h/defelem input [attr kids]
  (h/input
    attr
    ::input true
    :type "search"
    kids))

(h/defelem icon [attr kids]
  (h/span
    attr
    :uk-search-icon true
    kids))
