(ns uikit-hl.svg
  (:require [hoplon.core :as h]
            [hoplon.jquery]
            [uikit-hl.core :as uk]))

(defmulti uk-svg! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-svg! elem key val))

(defmethod uk-svg! ::default
  [elem kw v]
  (uk/svg elem v))
