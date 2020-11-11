(ns uikit-hl.leader
  (:require [hoplon.core :as h]
            [hoplon.jquery]
            [uikit-hl.core :as uk]))

(defmulti uk-leader! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-leader! elem key val))

(defmethod uk-leader! ::default
  [elem kw v]
  (uk/leader elem v))
