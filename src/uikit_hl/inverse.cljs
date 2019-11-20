(ns uikit-hl.inverse
  (:require [hoplon.core :as h]
            [hoplon.jquery]
            [uikit-hl.core :as uk]))

(defmulti uk-inverse! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-inverse! elem key val))

(defn- format-inverse [inverse]
  (str "uk-inverse-" inverse))

(defmethod uk-inverse! ::default
  [elem kw v]
  (h/do! elem :class {(format-inverse (name kw)) v})

(defmethod uk-inverse! ::light
  [elem kw v]
  (h/do! elem :class {:uk-light v}))

(defmethod uk-inverse! ::dark
  [elem kw v]
  (h/do! elem :class {:uk-dark v}))
