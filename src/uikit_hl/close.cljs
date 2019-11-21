(ns uikit-hl.close
  (:require [hoplon.core :as h]))

(defmulti uk-close! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-close! elem key val))

(defn- format-close [close]
  (str "uk-close-" close))

(defmethod uk-close! ::default
  [elem kw v]
  (h/do! elem :class {(format-close (name kw)) v}))

(defmethod h/do! ::close
  [elem _ v]
  (h/do! elem :uk-close (clj->js v)))

(h/defelem close [{:keys [large] :as attr} kids]
  (h/button
    (dissoc attr :large)
    ::close true
    ::large large
    kids))
