(ns uikit-hl.toggle
  (:require [hoplon.core :as h]
            [uikit-hl.core :as uk]))

(defmulti uk-toggle! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-toggle! elem key val))

(defmethod uk-toggle! ::default
  [elem key val]
  (.toggle uk/uikit elem (clj->js val)))  
