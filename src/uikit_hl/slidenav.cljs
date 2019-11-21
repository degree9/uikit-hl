(ns uikit-hl.progress
  (:require [hoplon.core :as h]))

(defmulti uk-progress! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-progress! elem key val))

(defn- format-progress [progress]
  (str "uk-progress-" progress))

(defmethod uk-progress! ::default
  [elem kw v]
  (h/do! elem :class {(format-progress (name kw)) v}))

(defmethod h/do! ::next
  [elem _ v]
  (h/do! elem :uk-slidenav-next v))

(defmethod h/do! ::previous
  [elem _ v]
  (h/do! elem :uk-slidenav-previous v))

(h/defelem next [{:keys [large] :as attr} kids]
  (h/a
    (dissoc attr :large)
    ::next true
    ::large large
    kids))

(h/defelem previous [{:keys [large] :as attr} kids]
  (h/a
    (dissoc attr :large)
    ::previous true
    ::large large
    kids))

(h/defelem container [attr kids]
  (h/div attr ::container true kids))
