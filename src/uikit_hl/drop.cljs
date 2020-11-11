(ns uikit-hl.drop
  (:require [hoplon.core :as h]
            [hoplon.jquery]
            [uikit-hl.core :as uk]))

(defmulti uk-drop! h/kw-dispatcher :default ::default)

(defmethod h/do! ::default
  [elem key val]
  (uk-drop! elem key val))

(defn- format-drop [drop]
  (str "uk-drop-" drop))

(defmethod uk-drop! ::default
  [elem kw v]
  (h/do! elem :class {(format-drop (name kw)) v}))

(defmethod uk-drop! ::drop
  [elem _ v]
  (uk/drop elem v))
