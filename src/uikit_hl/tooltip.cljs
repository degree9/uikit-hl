(ns uikit-hl.tooltip
  (:require [hoplon.core :as h]
            [hoplon.jquery]
            [uikit-hl.core :as uk]))

(defmulti uk-tooltip! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key v]
  (uk-tooltip! elem key v))

(defn- format-tooltip [tooltip]
  (str "uk-tooltip-" tooltip))

(defmethod uk-tooltip! ::default
  [elem kw v]
  (elem :class {(format-tooltip (name kw)) v}))

(defmethod uk-tooltip! ::tooltip
  [elem _ v]
  (uk/tooltip elem v))
