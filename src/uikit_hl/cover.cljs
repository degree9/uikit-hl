(ns uikit-hl.cover
  (:require [hoplon.core :as h]))

(defmulti uk-cover! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-cover! elem key val))

(defn- format-cover [cover]
  (str "uk-cover-" cover))

(defmethod uk-cover! ::default
  [elem kw v]
  (h/do! elem :class {(format-cover (name kw)) v}))

(defmethod uk-cover! ::cover
  [elem _ v]
  (h/do! elem :uk-cover (clj->js v)))
