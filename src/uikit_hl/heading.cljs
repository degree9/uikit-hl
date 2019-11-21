(ns uikit-hl.heading
  (:require [hoplon.core :as h]))

(defmulti uk-heading! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-heading! elem key val))

(defn- format-heading [heading]
  (str "uk-heading-" heading))

(defmethod uk-heading! ::default
  [elem kw v]
  (h/do! elem :class {(format-heading (name kw)) v}))

(h/defelem heading [{:keys [small medium large xlarge 2xlarge divider bullet line] :as attr} kids]
  (h/div
    (dissoc attr :small :medium :large :xlarge :2xlarge :divider :bullet :line)
    ::small small
    ::medium medium
    ::large large
    ::xlarge xlarge
    ::2xlarge 2xlarge
    ::divider divider
    ::bullet bullet
    ::line line
    kids))
