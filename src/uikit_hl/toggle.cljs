(ns uikit-hl.toggle
  (:require [hoplon.core :as h]
            [uikit-hl.core :as uk]))

(defmulti uk-toggle! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key v]
  (uk-toggle! elem key v))

(defmethod uk-toggle! ::default
  [elem key v]
  (uk/toggle elem v))
